export type ExamQuestion = {
  id: number;
  subject: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export type Exam = {
  id: string;
  name: string;
  year: string;
  university: string;
  questions: ExamQuestion[];
};

export const exams: Exam[] = [
  {
    id: "uncp-2023-ii-area1",
    name: "UNCP 2023-II Area I",
    year: "2023",
    university: "Universidad Nacional del Centro del Peru",
    questions: [
      {
        id: 1,
        subject: "Matematica - Aritmetica",
        question: "Determina la cifra del tercer orden del numeral abcde, si a + c + e = 19 y b + d = 8. Sabiendo que abcde es cubo perfecto.",
        options: ["3", "5", "4", "8", "9"],
        correctIndex: 4,
        explanation: "abcde = k^3. Evaluando: abcde = 3^3 x 11^3 = 35937. La cifra de orden 3 es 9."
      },
      {
        id: 2,
        subject: "Matematica - Aritmetica",
        question: "Si mnpq = x^a(b^a) + x^(mn)(b^(mb)); donde x=1, b=2, a=1. Halla m*n - p*q.",
        options: ["3", "4", "2", "6", "5"],
        correctIndex: 2,
        explanation: "Reemplazando: mnpq = 10304 base 2 = 11230 base 4. m*n - p*q = 1*2 - 3*0 = 2."
      },
      {
        id: 3,
        subject: "Matematica - Aritmetica",
        question: "Halla la suma de cifras de FORD si es minimo, sabiendo que: FORD + FORD(2) + FORD(3) + ... + FORD(20) = 119.",
        options: ["4", "14", "6", "8", "5"],
        correctIndex: 0,
        explanation: "FORD x (1+2+3+...+20) = 119. FORD x 210 = 119. FORD = 119/210 = 17/30. FORD = 1003. F+O+R+D = 1+0+0+3 = 4."
      },
      {
        id: 4,
        subject: "Matematica - Algebra",
        question: "Se define el maximo entero por [x] = n si solo si n <= x < n+1. Determina la suma de valores de x en [(7x-8)/5] = x.",
        options: ["13/5", "63/5", "31/5", "41/5", "36/5"],
        correctIndex: 1,
        explanation: "5x ∈ Z, 5x <= 7x-8 < 5x+1. 8 <= 2x < 9. 4 <= x < 9/2. x ∈ {20/5, 21/5, 22/5}. Suma = 63/5."
      },
      {
        id: 5,
        subject: "Matematica - Algebra",
        question: "Si x^4 + 2x^2 + 1 = 5, halla el valor de x^3 + 1/x^3 (si x ≠ 0).",
        options: ["4/5", "5/5", "5", "2/5", "3/5"],
        correctIndex: 4,
        explanation: "(x^2 + 1/x^2) = sqrt(5). x^3 + 1/x^3 = (x + 1/x)(x^2 - 1 + 1/x^2) = 3/5."
      },
      {
        id: 6,
        subject: "Matematica - Algebra",
        question: "Sea la funcion f(x) = -2x^2 - 5x - 1/4, cuya grafica es (a, b). Determina a + b.",
        options: ["5/4", "7/3", "4/3", "7/2", "9/2"],
        correctIndex: 3,
        explanation: "Vertice: a = -5/2, b = 6. a + b = -5/2 + 6 = 7/2."
      },
      {
        id: 7,
        subject: "Estadistica y Probabilidades",
        question: "El grafico representa las preferencias de 200 personas con respecto a cuatro productos A, B, C y D. C=32%, D=8%, A=theta, B=3theta. Determina la diferencia entre B y D.",
        options: ["65", "40", "30", "50", "60"],
        correctIndex: 4,
        explanation: "8% + 32% + theta + 3theta = 100%. theta = 15%. B - D = 2theta = 30% de 200 = 60."
      },
      {
        id: 8,
        subject: "Estadistica y Probabilidades",
        question: "Denisse dispone de 3 pares de zapatos rosados y 2 blancos, 5 pantalones blancos y 4 rosados, 3 blusas rosadas y 4 blancas. Probabilidad de que vista de un solo color.",
        options: ["53/315", "40/315", "87/315", "36/315", "76/315"],
        correctIndex: 4,
        explanation: "P(un solo color) = P(rosado o blanco) = (3*4*3 + 2*5*4)/(5*9*7) = 76/315."
      },
      {
        id: 9,
        subject: "Comunicacion",
        question: "El arte griego se caracterizo por la ......................... y la perfeccion. Los artistas se esforzaron por expresar la belleza ideal del cuerpo humano.",
        options: ["busqueda de la belleza", "busqueda del amor", "busqueda del conocimiento", "busqueda de la reflexion", "busqueda de la filosofia"],
        correctIndex: 0,
        explanation: "El arte griego se caracterizo por la busqueda de la belleza y la perfeccion. Una belleza hecha de proporcion, medida y equilibrio."
      },
      {
        id: 10,
        subject: "Comunicacion",
        question: "Se excluye de la relacion de sustantivos derivados aumentativos: I. Cabezon, II. Pavaza, III. Gentuza, IV. Perrazo, V. Gatazo.",
        options: ["I", "V", "III", "IV", "II"],
        correctIndex: 4,
        explanation: "Pavaza no es aumentativo. La terminacion -uza expresa idea de desprecio (morfema despectivo), como Gentuza."
      },
      {
        id: 11,
        subject: "Comunicacion",
        question: "Tipos de comunicacion no verbal: Kinesia, Gestos, Expresion facial, Mirada, ...? Expresa simpatia, alegria y felicidad.",
        options: ["Carcajada", "Entusiasmo", "Comunidad verbal", "Tono de voz", "Sonrisa"],
        correctIndex: 4,
        explanation: "La sonrisa es una comunicacion no verbal que expresa simpatia, alegria y felicidad."
      },
      {
        id: 12,
        subject: "Comunicacion",
        question: "Identifica la figura literaria: 'Te hablan por mi las olas de pajaros sin cielo, te habla por mi el color de los paisajes sin viento.' (Vicente Huidobro)",
        options: ["Personificacion", "Hipérbaton", "Concatenacion", "Pleonasmo", "Simil"],
        correctIndex: 1,
        explanation: "Hipérbaton: alteracion del orden sintactico normal para dar enfasis. El sujeto va despues del verbo."
      },
      {
        id: 13,
        subject: "Biologia",
        question: "Determina los constituyentes de los fosfolipidos a nivel de las membranas biologicas representadas por 'x' y 'z' respectivamente.",
        options: ["Simples - Complejos", "Esfingolipidos - Esteroides", "Cabeza no polar - Cabeza polar", "Terpenos - Carotenos", "Glicerol - Acidos grasos"],
        correctIndex: 4,
        explanation: "El fosfolipido esta compuesto por glicerol (x), dos acidos grasos (z) y un grupo fosfato-nitrogenado (N, P)."
      },
      {
        id: 14,
        subject: "Biologia",
        question: "Respecto a las caracteristicas de la estructura proteica se puede afirmar que:",
        options: ["I presenta estructura secundaria y II, terciaria", "I y II estan unidos por enlaces glucosidicos", "I y II presentan estructuras primarias", "I representa alfa helice y II, hoja plegada beta", "I posee interacciones hidrofobicas y II, enlaces glucosidicos"],
        correctIndex: 3,
        explanation: "La alfa helice y la hoja plegada beta son estructuras secundarias. Ambas mantienen su forma mediante puentes de hidrogeno."
      },
      {
        id: 15,
        subject: "Biologia",
        question: "Determina la verdad (V) o falsedad (F) de las proposiciones sobre el sistema urinario: I. 1 y 2 representan las uretras. II. 3 representa la vejiga urinaria. III. 4 y 3 representan los ureteres. IV. 1 representa los rinoñones.",
        options: ["FFVV", "VFFV", "FVFV", "FVVF", "VFVF"],
        correctIndex: 2,
        explanation: "I. Falso: 1 y 2 son riñon y ureteres. II. Verdadero: 3 es la vejiga. III. Falso: 4 y 3 son uretra y vejiga. IV. Verdadero: 1 son los riñones."
      },
      {
        id: 16,
        subject: "Biologia",
        question: "Identifica la forma de la celula representada en la figura (neurona).",
        options: ["cilindrica", "estrellada", "fusiforme", "plana", "esferica"],
        correctIndex: 1,
        explanation: "La neurona presenta forma estrellada, caracterizada por multiples prolongaciones citoplasmaticas."
      },
      {
        id: 17,
        subject: "Biologia",
        question: "Correlaciona los sistemas nerviosos de invertebrados: I. Red difusa, II. Cordon nervioso, III. Sistema ganglionar con las figuras a, b, c.",
        options: ["Ia-IIb-IIIc", "Ib-IIc-IIIa", "Ib-IIa-IIIc", "Ic-IIa-IIIb", "Ic-IIb-IIIa"],
        correctIndex: 4,
        explanation: "Red difusa = cnidarios (c), Cordon nervioso = anelidos (a), Sistema ganglionar = insectos (b)."
      },
      {
        id: 18,
        subject: "Biologia",
        question: "Respecto al metabolismo celular: I. Corresponde a reacciones de descomposicion. II. Requiere energia. III. Representa al anabolismo. IV. Representa al catabolismo.",
        options: ["FFVV", "FVVF", "FVFV", "VFVF", "VVFF"],
        correctIndex: 0,
        explanation: "El grafico muestra sintesis de sustancias complejas = anabolismo. I. Falso (es sintesis). II. Falso (no requiere energia). III. Verdadero. IV. Falso."
      },
      {
        id: 19,
        subject: "Biologia",
        question: "Correlaciona los periodos de la profase I: I. Cigoteno, II. Paquiteno, III. Diploteno con: a. Quiasma, b. Crossing over, c. Sinapsis.",
        options: ["Ib-IIa-IIIc", "Ib-IIc-IIIa", "Ic-IIa-IIIb", "Ia-IIb-IIIc", "Ic-IIb-IIIa"],
        correctIndex: 4,
        explanation: "Cigoteno = sinapsis (c), Paquiteno = crossing over (b), Diploteno = quiasma (a)."
      },
      {
        id: 20,
        subject: "Quimica",
        question: "Correlaciona: I. Sangre, II. Combustion, III. Disolucion, IV. Diamante y grafito con: a. Fenomeno fisico, b. Coloide, c. Fenomeno quimico, d. Alotropos de carbono.",
        options: ["Ia-IIc-IIIb-IVd", "Ib-IIc-IIIa-IVd", "Id-IIa-IIIb-IVc", "Ia-IId-IIIc-IVb", "Ic-IId-IIIa-IVb"],
        correctIndex: 1,
        explanation: "Sangre = coloide (b), Combustion = fenomeno quimico (c), Disolucion = fenomeno fisico (a), Diamante/grafito = alotropos (d)."
      },
      {
        id: 21,
        subject: "Quimica",
        question: "Calcula los volumenes en litros de aire y CO2 necesarios para la combustion completa de 6 L de acetileno (C2H2). Aire: O2=20%, N2=80%.",
        options: ["55; 12", "75; 37.5", "75; 12", "30; 15", "45; 37"],
        correctIndex: 2,
        explanation: "2C2H2 + 5O2 -> 4CO2 + 2H2O. V_O2 = 15 L, V_aire = 75 L, V_CO2 = 12 L."
      },
      {
        id: 22,
        subject: "Quimica",
        question: "La relacion entre las masas de 2 isotopos es 14:10 y la diferencia de sus neutrones es 8. Determina la suma de sus masas.",
        options: ["28", "42", "24", "48", "46"],
        correctIndex: 3,
        explanation: "A1/A2 = 14/10, A1-A2 = 8. 14k - 10k = 8, k = 2. A1+A2 = 24(2) = 48."
      },
      {
        id: 23,
        subject: "Quimica",
        question: "Se mezcla 800 kg de HCl al 28% con 200 kg de HCl al 40%. Calcula la concentracion (%) de la solucion final.",
        options: ["30.2", "28.4", "30.4", "26.5", "32.6"],
        correctIndex: 2,
        explanation: "m_HCl total = 28%(800) + 40%(200) = 224+80 = 304 kg. %m = 304/1000 = 30.4%."
      },
      {
        id: 24,
        subject: "Fisica",
        question: "Un bloque pende de una polea de 30N en equilibrio. Si q1 = -30 mC y q2 = +20 mC a 30cm con angulo 53 grados. Determina el peso P del bloque.",
        options: ["160", "180", "150", "140", "170"],
        correctIndex: 4,
        explanation: "F_EL = KQ1Q2/d^2 = 60N. En la particula: T = mg = 100N. 2T = 30+P. P = 170N."
      },
      {
        id: 25,
        subject: "Fisica",
        question: "Se tiene 3m gramos de hielo a -20°C y se mezcla con m gramos de vapor a 150°C. Determina la temperatura final del sistema.",
        options: ["67.85", "75.57", "98.75", "89.75", "58.75"],
        correctIndex: 2,
        explanation: "Q_gana = Q_pierde. (0.5)(3m)(20) + 3m(80) + (1)(3m)T = (0.5)(m)(50) + 540m + (1)(m)(100-T). T = 98.75°C."
      },
      {
        id: 26,
        subject: "Fisica",
        question: "Para el sistema de vectores, determina el vector x en funcion de a y b, sabiendo que G es el baricentro del triangulo PQR y RN = 4NQ.",
        options: ["(1/5)(6a-b)", "(1/7)(4a-b)", "(1/10)(6a-b)", "(1/8)(5-2a)", "(1/15)(7-2a)"],
        correctIndex: 4,
        explanation: "Resolviendo por el baricentro y la relacion RN = 4NQ: x = (1/15)(7a - 2b)."
      },
      {
        id: 27,
        subject: "Ecologia",
        question: "En las relaciones troficas: I. El flujo de energia es unidireccional. II. La ley del 10% esta relacionada con la 2da ley de la termodinamica. III. La fuente principal NO es el Sol. IV. Es comun encontrar cadenas mayores a 5 niveles.",
        options: ["VVFF", "VVVF", "FVFV", "FFVV", "VFVF"],
        correctIndex: 0,
        explanation: "I. Verdadero: el flujo es unidireccional. II. Verdadero: eficiencia < 100%. III. Falso: el Sol es la fuente. IV. Falso: pocos niveles."
      },
      {
        id: 28,
        subject: "Ecologia",
        question: "En la figura de un eclipse solar, determina el nombre de las zonas A, B y C respectivamente.",
        options: ["Perigeo - Anular - Penumbra", "Anular - Umbra - Penumbra", "Penumbra - Umbra - Perigeo", "Perigeo - Penumbra - Umbra", "Umbra - Penumbra - Anular"],
        correctIndex: 3,
        explanation: "A = Perigeo (punto mas cercano), B = Penumbra (sombra parcial), C = Umbra (sombra total)."
      },
      {
        id: 29,
        subject: "Desarrollo Personal",
        question: "Identifica la habilidad social que ejerce el adolescente que usa anteojos en la figura (expresa claramente sus sentimientos de manera respetuosa).",
        options: ["Asertividad", "Liderazgo", "Autoconcepto", "Empatia", "Autovaloracion"],
        correctIndex: 0,
        explanation: "La asertividad es la habilidad social de expresar de manera clara, directa y respetuosa nuestros sentimientos y opiniones."
      },
      {
        id: 30,
        subject: "Desarrollo Personal",
        question: "Completa la figura: Corteza cerebral (1) ... (2) Talamo, Hipotalamo, Tronco cerebral (3) Cerebelo. El area sede para ciertos afectos es:",
        options: ["Sistema limbico", "Neuronas", "Corteza cerebral", "Sistema nervioso", "Dendritas"],
        correctIndex: 0,
        explanation: "El sistema limbico se encuentra en la subcorteza y esta vinculado con memoria, aprendizaje y emociones."
      },
      {
        id: 31,
        subject: "Desarrollo Personal",
        question: "En las chicas, los ovarios elaboran una hormona llamada ....... En los chicos, los testiculos fabrican .........",
        options: ["serotonina - testosterona", "estrogeno - dopamina", "estrogeno - testosterona", "adrenalina - estrogeno", "serotonina - estrogeno"],
        correctIndex: 2,
        explanation: "Las chicas producen estrogeno (desarrollo de senos y vello). Los chicos producen testosterona (crecimiento muscular y vello corporal)."
      },
      {
        id: 32,
        subject: "Desarrollo Personal",
        question: "Identifica los MITOS sobre la violencia familiar: I. Hombres y mujeres han peleado siempre, es natural. II. La violencia familiar genera crisis. III. No existe la violacion conyugal. IV. La violencia familiar pasa por 3 fases.",
        options: ["III - IV", "I - IV", "I - III", "I - II - IV", "II - III"],
        correctIndex: 2,
        explanation: "I es MITO: no se debe normalizar la violencia. III es MITO: la violacion conyugal si existe. II y IV son verdades."
      },
      {
        id: 33,
        subject: "Aptitud Logico Matematico",
        question: "Si x = x^2 + 2x, determina el valor de x en: x + 2 = 99999999.",
        options: ["7", "8", "5", "9", "6"],
        correctIndex: 0,
        explanation: "x = x(x+2). x+2 = 99999999 = 10^8-1 = 99999999. Factorizando: 9999*10001 = 99*101*10001. x = 99999997/x... x = 7."
      },
      {
        id: 34,
        subject: "Aptitud Logico Matematico",
        question: "Un fantasma aparece a las 12:00 y desaparece al sonar la ultima campanada. El reloj tarda 3 segundos en dar las 3 horas. Cuanto dura la aparicion del fantasma?",
        options: ["10.0 s", "7.3 s", "16.5 s", "12.0 s", "12.5 s"],
        correctIndex: 2,
        explanation: "2 campanadas = 1 intervalo. 3 horas = 3 campanadas = 2 intervalos = 3s. 1 intervalo = 1.5s. 12 horas = 12 campanadas = 11 intervalos = 16.5s."
      },
      {
        id: 35,
        subject: "Aptitud Logico Matematico",
        question: "Identifica la figura que completa adecuadamente el cuadro (patron de ojos, nariz y boca).",
        options: ["A", "B", "C", "D", "E"],
        correctIndex: 2,
        explanation: "En cada fila hay 3 tipos de ojos, 3 tipos de nariz y 3 tipos de boca. La combinacion faltante completa el patron."
      },
      {
        id: 36,
        subject: "Aptitud Logico Matematico",
        question: "Dos autos se movilizan: uno desde A a 4 km/h y otro desde B a 3 km/h, separados 60 km. Cuanto tiempo para estar distanciados lo minimo posible?",
        options: ["9h 16min", "8h 24min", "8h 30min", "9h 36min", "9h 30min"],
        correctIndex: 3,
        explanation: "d^2 = (60-4x)^2 + (3x)^2 = 25x^2 - 480x + 3600 = (5x-48)^2 + 1296. Minimo en x = 48/5 h = 9h 36min."
      },
      {
        id: 37,
        subject: "Aptitud Logico Matematico",
        question: "Karly tuvo su primer hijo a los 26 años, 4 años despues nacio el segundo. En 2023, la suma de las edades de los tres da 64. En que año nacio Karly?",
        options: ["1981", "1982", "1984", "1983", "1980"],
        correctIndex: 3,
        explanation: "Si la suma aumento en 30, transcurrieron 10 años para cada persona. Karly tiene 40 años en 2023. Nacio en 2023-40 = 1983."
      },
      {
        id: 38,
        subject: "Aptitud Logico Matematico",
        question: "Si el peso de Boby es la tercera parte de su peso mas 4 kg, cuanto pesa Boby?",
        options: ["5 kg", "12 kg", "8 kg", "6 kg", "10 kg"],
        correctIndex: 3,
        explanation: "x = x/3 + 4. x - x/3 = 4. 2x/3 = 4. x = 6 kg."
      },
      {
        id: 39,
        subject: "Aptitud Logico Matematico",
        question: "De cuantas maneras diferentes se puede leer la palabra UNCP uniendo letras vecinas?",
        options: ["8", "7", "32", "16", "15"],
        correctIndex: 4,
        explanation: "4 letras = 2^3 = 8 maneras. Hay 2 disposiciones. Total = 2(8) - 1 = 15."
      },
      {
        id: 40,
        subject: "Aptitud Logico Matematico",
        question: "Juanito pierde 2/5 y 1/3 de lo que le iba quedando. Suma lo inicial y lo final = 210 soles. Cuanto perdio?",
        options: ["60 soles", "120 soles", "150 soles", "300 soles", "90 soles"],
        correctIndex: 4,
        explanation: "Inicial = 5K. Perdio 2/5 (queda 3K). Despues pierde 1/3 (queda 2K). 5K + 2K = 210. K=30. Perdio = 3K = 90 soles."
      },
      {
        id: 41,
        subject: "Aptitud Logico Matematico",
        question: "Si por 200 soles dieran 6 pollos mas, la docena costaria 90 soles menos. Cuanto vale cada pollo?",
        options: ["10 soles", "15 soles", "18 soles", "20 soles", "25 soles"],
        correctIndex: 3,
        explanation: "200/x = precio. 200/(x+6) = precio - 90/12. Despejando: x = 10 pollos. Precio = 200/10 = 20 soles."
      },
      {
        id: 42,
        subject: "Aptitud Comunicativa",
        question: "Identifica el tipo de significado: 'Entiende mi amigo Dax, mi amor es mi trabajo, mi amante es mi esposa.'",
        options: ["reflexivo", "denotativo", "tematico", "representativo", "connotativo"],
        correctIndex: 4,
        explanation: "Significado connotativo: expresion en sentido figurado que busca transmitir sentimientos y emociones, dependiendo del contexto."
      },
      {
        id: 43,
        subject: "Aptitud Comunicativa",
        question: "De la imagen (niño jugando videojuegos) se infiere que:",
        options: ["Los videojuegos garantizan la salud mental", "Los niños deben ver TV cuando estan solos", "La soledad permite desarrollar la concentracion", "Un niño sabe enfrentar a los videojuegos", "Los videojuegos generan vida sedentaria en los niños"],
        correctIndex: 4,
        explanation: "Los videojuegos generan vida sedentaria en los niños, causando danos en su salud."
      },
      {
        id: 44,
        subject: "Aptitud Comunicativa",
        question: "Al elaborar la sumilla de 'A LIMPIAR EL MUNDO' (campana ecologica con 120 paises y 35 millones de voluntarios), que palabras clave emplearias?",
        options: ["definicion, objetivo, participantes", "jerarquia, ideal, componentes", "naturaleza, fin, realidad", "concepto, entidad, lugares", "sentido, amplitud, orden"],
        correctIndex: 0,
        explanation: "La sumilla debe presentar definicion, objetivo y participantes de la campana."
      },
      {
        id: 45,
        subject: "Aptitud Comunicativa",
        question: "Identifica el tipo de marcador textual de: antes, tiempo despues, ahora, en poco tiempo.",
        options: ["Lugar", "Fuente", "Tiempo", "Adicion", "Comparacion"],
        correctIndex: 2,
        explanation: "Los marcadores 'antes', 'despues', 'ahora' indican relacion temporal, por lo tanto son marcadores de Tiempo."
      },
      {
        id: 46,
        subject: "Aptitud Comunicativa",
        question: "El paleontólogo describio los restos fósiles del animal mas pesado: 'La primera vértebra estaba inflada, tan grandes que demoró 2 semanas extraer cada una.' Que especie descriptiva empleo?",
        options: ["zoografia", "prosopografia", "caricatura", "topografia", "crinografia"],
        correctIndex: 0,
        explanation: "Zoografia: descripcion que presenta detalles y cualidades de animales, tanto de forma empirica como cientifica."
      },
      {
        id: 47,
        subject: "Aptitud Comunicativa",
        question: "Excluye el termino impertinente de BLANCO: proposito, objetivo, deseo, fin, visor.",
        options: ["proposito", "objetivo", "deseo", "fin", "visor"],
        correctIndex: 4,
        explanation: "Visor es un dispositivo optico, no pertenece al campo semantico de finalidad/blanco como los demas terminos."
      },
      {
        id: 48,
        subject: "Inglés",
        question: "Yesterday, I ... my homework before I ... to bed.",
        options: ["had done - went", "do - went", "did - had gone", "do - go", "had done - had gone"],
        correctIndex: 0,
        explanation: "Past Perfect: 'had done' para la accion completada antes de otra accion pasada ('went')."
      },
      {
        id: 49,
        subject: "Inglés",
        question: "If I .......... shy, I .......... her to go out.",
        options: ["am not - tell", "weren't - would tell", "weren't - tell", "am not - would tell", "don't be - will tell"],
        correctIndex: 1,
        explanation: "Second Conditional: if + past simple + would + base verb. 'If I weren't shy, I would tell her to go out.'"
      },
      {
        id: 50,
        subject: "Inglés",
        question: "Observa la figura e identifica el enunciado correcto (joven con auriculares).",
        options: ["He is eating a sandwich", "He is wearing headphones", "He is writing a song", "He is reading a song", "He is watching a concert"],
        correctIndex: 1,
        explanation: "Present Continuous: 'He is wearing headphones' - el joven lleva puesto auriculares."
      }
    ]
  }
];
