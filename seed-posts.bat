@echo off
setlocal

set SB_URL=https://jvyrgsxbzlzokotyzepw.supabase.co/rest/v1/community_posts
set SB_KEY=sb_publishable_i80Lpj4bEIGTUX1_j5vlGQ_4cTESJ2D

curl -s -X POST "%SB_URL%" ^
  -H "apikey: %SB_KEY%" ^
  -H "Authorization: Bearer %SB_KEY%" ^
  -H "Content-Type: application/json" ^
  -H "Prefer: return=representation" ^
  -d "{\"author\":\"Juan Pablo\",\"content\":\"¿Alguien me explica el problema 18 del simulacro UNI 2023-II?\",\"tags\":[\"Matematicas\",\"Simulacro UNI\"],\"likes_count\":24,\"comments_count\":3}"

echo.

curl -s -X POST "%SB_URL%" ^
  -H "apikey: %SB_KEY%" ^
  -H "Authorization: Bearer %SB_KEY%" ^
  -H "Content-Type: application/json" ^
  -H "Prefer: return=representation" ^
  -d "{\"author\":\"Maria Fernanda\",\"content\":\"Comparto mis apuntes de Fisica: Dinamica y Movimiento. Les hice un resumen con las formulas clave y ejemplos resueltos.\",\"tags\":[\"Fisica\",\"Apuntes\"],\"likes_count\":58,\"comments_count\":7}"

echo.

curl -s -X POST "%SB_URL%" ^
  -H "apikey: %SB_KEY%" ^
  -H "Authorization: Bearer %SB_KEY%" ^
  -H "Content-Type: application/json" ^
  -H "Prefer: return=representation" ^
  -d "{\"author\":\"Renzo Aguilar\",\"content\":\"Racha de 30 dias estudiando Razonamiento Verbal. Al principio parecia imposible, pero con constancia se logra.\",\"tags\":[\"Racha\",\"Verbal\"],\"likes_count\":96,\"comments_count\":12}"

echo.

curl -s -X POST "%SB_URL%" ^
  -H "apikey: %SB_KEY%" ^
  -H "Authorization: Bearer %SB_KEY%" ^
  -H "Content-Type: application/json" ^
  -H "Prefer: return=representation" ^
  -d "{\"author\":\"Camila Torres\",\"content\":\"Cual es la mejor estrategia para el bloque de Razonamiento Matematico? Siento que me falta velocidad.\",\"tags\":[\"Matematicas\",\"General\"],\"likes_count\":31,\"comments_count\":5}"

echo.

curl -s -X POST "%SB_URL%" ^
  -H "apikey: %SB_KEY%" ^
  -H "Authorization: Bearer %SB_KEY%" ^
  -H "Content-Type: application/json" ^
  -H "Prefer: return=representation" ^
  -d "{\"author\":\"Diego Ramos\",\"content\":\"Resumen de los temas mas evaluados en el examen UNI 2025: Algebra, Geometria analitica, Probabilidad y Fisica basica.\",\"tags\":[\"Simulacro UNI\",\"General\"],\"likes_count\":72,\"comments_count\":8}"

echo.
echo DONE
