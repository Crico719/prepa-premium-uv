-- Community tables for Prepa Premium UV
-- Pega esto en Supabase → SQL Editor → Run

-- 1. Tabla de posts
CREATE TABLE IF NOT EXISTS community_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  author TEXT NOT NULL,
  content TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}',
  likes_count INT DEFAULT 0,
  comments_count INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Tabla de comentarios
CREATE TABLE IF NOT EXISTS comments (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  post_id UUID REFERENCES community_posts(id) ON DELETE CASCADE,
  author TEXT NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Tabla de likes
CREATE TABLE IF NOT EXISTS likes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  post_id UUID REFERENCES community_posts(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(post_id)
);

-- 4. Funciones para incrementar/decrementar likes
CREATE OR REPLACE FUNCTION increment_likes(pid UUID)
RETURNS VOID AS $$
BEGIN
  UPDATE community_posts SET likes_count = likes_count + 1 WHERE id = pid;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION decrement_likes(pid UUID)
RETURNS VOID AS $$
BEGIN
  UPDATE community_posts SET likes_count = GREATEST(likes_count - 1, 0) WHERE id = pid;
END;
$$ LANGUAGE plpgsql;

-- 5. Datos iniciales
INSERT INTO community_posts (author, content, tags, likes_count, comments_count) VALUES
  ('Juan Pablo', '¿Alguien me explica el problema 18 del simulacro UNI 2023-II? Llevo rato y no logro entender la alternativa C.', ARRAY['Matemáticas', 'Simulacro UNI'], 24, 3),
  ('María Fernanda', 'Comparto mis apuntes de Física: Dinámica y Movimiento. Les hice un resumen con las fórmulas clave y ejemplos resueltos. ¡Espero que les sirvan!', ARRAY['Física', 'Apuntes'], 58, 7),
  ('Renzo Aguilar', 'Racha de 30 días estudiando Razonamiento Verbal. Al principio parecía imposible, pero con constancia se logra. ¡Dale que se puede! 💪', ARRAY['Racha', 'Verbal'], 96, 12),
  ('Camila Torres', '¿Cuál es la mejor estrategia para el bloque de Razonamiento Matemático? Siento que me falta velocidad.', ARRAY['Matemáticas', 'General'], 31, 5),
  ('Diego Ramos', 'Resumen de los temas más evaluados en el examen UNI 2025: Álgebra, Geometría analítica, Probabilidad y Física básica.', ARRAY['Simulacro UNI', 'General'], 72, 8);
