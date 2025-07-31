// Datos de ejemplo para los artículos del blog
const articlesData = [
    {
        id: 1,
        title: "Introducción al Machine Learning: Conceptos Fundamentales",
        excerpt: "Exploramos los conceptos básicos del aprendizaje automático y cómo está transformando nuestro mundo digital.",
        content: `
            <h2>¿Qué es el Machine Learning?</h2>
            <p>El Machine Learning (ML) es una rama de la inteligencia artificial que permite a las computadoras aprender y tomar decisiones sin ser programadas explícitamente para cada tarea específica.</p>
            
            <h2>Tipos de Machine Learning</h2>
            <p>Existen tres tipos principales de aprendizaje automático:</p>
            <ul>
                <li><strong>Aprendizaje Supervisado:</strong> Utiliza datos etiquetados para entrenar modelos</li>
                <li><strong>Aprendizaje No Supervisado:</strong> Encuentra patrones en datos sin etiquetas</li>
                <li><strong>Aprendizaje por Refuerzo:</strong> Aprende através de recompensas y castigos</li>
            </ul>
            
            <h2>Aplicaciones Populares</h2>
            <p>El ML se utiliza en:</p>
            <ul>
                <li>Sistemas de recomendación (Netflix, Spotify)</li>
                <li>Detección de fraudes bancarios</li>
                <li>Asistentes virtuales</li>
                <li>Vehículos autónomos</li>
                <li>Diagnóstico médico</li>
            </ul>
            
            <h2>Primeros Pasos</h2>
            <p>Para comenzar en ML, recomiendo:</p>
            <ol>
                <li>Aprender Python y sus librerías (pandas, numpy, scikit-learn)</li>
                <li>Entender estadística básica</li>
                <li>Practicar con datasets públicos</li>
                <li>Participar en competencias como Kaggle</li>
            </ol>
        `,
        image: "🤖",
        date: "2025-01-25",
        author: "Tu Nombre",
        tags: ["machine-learning", "conceptos-basicos"],
        readTime: "5 min"
    },
    {
        id: 2,
        title: "Deep Learning con TensorFlow: Mi Primera Red Neuronal",
        excerpt: "Documentando mi experiencia creando mi primera red neuronal usando TensorFlow y Keras.",
        content: `
            <h2>Mi Primer Proyecto de Deep Learning</h2>
            <p>Después de semanas estudiando teoría, finalmente me decidí a construir mi primera red neuronal. Elegí el clásico problema de clasificación de imágenes usando el dataset MNIST.</p>
            
            <h2>Configurando el Entorno</h2>
            <p>Primero instalé las dependencias necesarias:</p>
            <pre><code>pip install tensorflow keras matplotlib numpy</code></pre>
            
            <h2>Construyendo el Modelo</h2>
            <p>Creé una red neuronal simple con las siguientes capas:</p>
            <ul>
                <li>Capa de entrada: 784 neuronas (28x28 píxeles)</li>
                <li>Capa oculta: 128 neuronas con activación ReLU</li>
                <li>Capa de salida: 10 neuronas con activación softmax</li>
            </ul>
            
            <h2>Resultados</h2>
            <p>Después de 10 épocas de entrenamiento, logré una precisión del 97.8% en el conjunto de prueba. ¡No está mal para mi primer intento!</p>
            
            <h2>Lecciones Aprendidas</h2>
            <ul>
                <li>La normalización de datos es crucial</li>
                <li>Más capas no siempre significa mejor rendimiento</li>
                <li>La paciencia es clave durante el entrenamiento</li>
            </ul>
        `,
        image: "🧠",
        date: "2025-01-20",
        author: "Tu Nombre",
        tags: ["deep-learning", "tensorflow", "python"],
        readTime: "8 min"
    },
    {
        id: 3,
        title: "Procesamiento de Lenguaje Natural: Análisis de Sentimientos",
        excerpt: "Experimentando con NLP para analizar sentimientos en reseñas de productos usando Python y NLTK.",
        content: `
            <h2>Introducción al NLP</h2>
            <p>El Procesamiento de Lenguaje Natural (NLP) es una de las ramas más fascinantes de la IA. Permite que las computadoras entiendan, interpreten y generen lenguaje humano.</p>
            
            <h2>Mi Proyecto de Análisis de Sentimientos</h2>
            <p>Decidí crear un analizador de sentimientos para reseñas de productos de Amazon. El objetivo era clasificar reseñas como positivas, negativas o neutrales.</p>
            
            <h2>Herramientas Utilizadas</h2>
            <ul>
                <li><strong>NLTK:</strong> Para procesamiento de texto</li>
                <li><strong>Pandas:</strong> Para manipulación de datos</li>
                <li><strong>Scikit-learn:</strong> Para algoritmos de ML</li>
                <li><strong>WordCloud:</strong> Para visualizaciones</li>
            </ul>
            
            <h2>Proceso de Desarrollo</h2>
            <ol>
                <li>Recolección y limpieza de datos</li>
                <li>Preprocesamiento de texto (tokenización, stop words)</li>
                <li>Extracción de características (TF-IDF)</li>
                <li>Entrenamiento del modelo</li>
                <li>Evaluación y optimización</li>
            </ol>
            
            <h2>Resultados y Métricas</h2>
            <p>El modelo final logró:</p>
            <ul>
                <li>Precisión: 89.2%</li>
                <li>Recall: 87.5%</li>
                <li>F1-Score: 88.3%</li>
            </ul>
            
            <h2>Próximos Pasos</h2>
            <p>Planeo mejorar el modelo incorporando:</p>
            <ul>
                <li>Embeddings pre-entrenados (Word2Vec, GloVe)</li>
                <li>Modelos más sofisticados (BERT, RoBERTa)</li>
                <li>Análisis de emociones más granular</li>
            </ul>
        `,
        image: "💬",
        date: "2025-01-15",
        author: "Tu Nombre",
        tags: ["nlp", "python", "sentiment-analysis"],
        readTime: "10 min"
    },
    {
        id: 4,
        title: "Computer Vision: Detección de Objetos con YOLO",
        excerpt: "Implementando un sistema de detección de objetos en tiempo real usando YOLO y OpenCV.",
        content: `
            <h2>¿Qué es YOLO?</h2>
            <p>YOLO (You Only Look Once) es un algoritmo revolucionario para detección de objetos en tiempo real. A diferencia de otros métodos, YOLO procesa la imagen completa en una sola pasada de la red neuronal.</p>
            
            <h2>Configuración del Proyecto</h2>
            <p>Para este proyecto utilicé:</p>
            <ul>
                <li>Python 3.8+</li>
                <li>OpenCV para procesamiento de imágenes</li>
                <li>YOLOv5 pre-entrenado</li>
                <li>PyTorch como framework base</li>
            </ul>
            
            <h2>Implementación Paso a Paso</h2>
            
            <h3>1. Instalación de Dependencias</h3>
            <pre><code>pip install torch torchvision opencv-python ultralytics</code></pre>
            
            <h3>2. Carga del Modelo</h3>
            <p>Utilicé el modelo YOLOv5s pre-entrenado en COCO dataset, que puede detectar 80 clases diferentes de objetos.</p>
            
            <h3>3. Procesamiento de Video</h3>
            <p>Implementé un pipeline que procesa video frame por frame, aplicando detección de objetos y dibujando bounding boxes.</p>
            
            <h2>Resultados Impresionantes</h2>
            <p>El sistema logró:</p>
            <ul>
                <li>30+ FPS en una GPU GTX 1060</li>
                <li>Detección precisa de personas, vehículos y animales</li>
                <li>Confianza promedio del 85% en detecciones</li>
            </ul>
            
            <h2>Aplicaciones Prácticas</h2>
            <ul>
                <li>Sistemas de seguridad inteligentes</li>
                <li>Conteo automático de objetos</li>
                <li>Análisis de tráfico vehicular</li>
                <li>Asistencia a personas con discapacidad visual</li>
            </ul>
            
            <h2>Desafíos Encontrados</h2>
            <ul>
                <li>Optimización para dispositivos móviles</li>
                <li>Detección en condiciones de poca luz</li>
                <li>Objetos parcialmente ocluidos</li>
            </ul>
        `,
        image: "👁️",
        date: "2025-01-10",
        author: "Tu Nombre",
        tags: ["computer-vision", "yolo", "opencv"],
        readTime: "12 min"
    },
    {
        id: 5,
        title: "Herramientas de IA que Todo Desarrollador Debería Conocer",
        excerpt: "Una compilación de las mejores herramientas de inteligencia artificial para aumentar la productividad del desarrollador.",
        content: `
            <h2>La Revolución de las Herramientas de IA</h2>
            <p>En 2025, las herramientas de IA se han vuelto indispensables para desarrolladores. Aquí comparto las que más han impactado mi flujo de trabajo.</p>
            
            <h2>Herramientas de Código</h2>
            
            <h3>GitHub Copilot</h3>
            <p>Sin duda, el asistente de código más revolucionario. Aumenta mi productividad en un 40% promedio.</p>
            <ul>
                <li>Autocompletado inteligente</li>
                <li>Generación de funciones completas</li>
                <li>Sugerencias contextuales</li>
            </ul>
            
            <h3>Cursor IDE</h3>
            <p>Un IDE completo potenciado por IA que está ganando mucha tracción.</p>
            
            <h2>Herramientas de Datos</h2>
            
            <h3>Pandas AI</h3>
            <p>Revoluciona el análisis de datos permitiendo consultas en lenguaje natural.</p>
            
            <h3>AutoML Platforms</h3>
            <ul>
                <li><strong>H2O.ai:</strong> Para machine learning automatizado</li>
                <li><strong>DataRobot:</strong> Plataforma empresarial de AutoML</li>
                <li><strong>Google AutoML:</strong> Integración perfecta con GCP</li>
            </ul>
            
            <h2>Herramientas de Testing</h2>
            
            <h3>Testim</h3>
            <p>Genera pruebas automatizadas usando IA para analizar la interfaz de usuario.</p>
            
            <h3>Applitools</h3>
            <p>Testing visual automatizado que detecta bugs que el ojo humano podría pasar por alto.</p>
            
            <h2>Herramientas de Documentación</h2>
            
            <h3>Mintlify</h3>
            <p>Genera documentación automática a partir del código fuente.</p>
            
            <h3>Notion AI</h3>
            <p>Perfecto para crear documentación técnica y wikis de proyectos.</p>
            
            <h2>Herramientas de Design</h2>
            
            <h3>Figma AI</h3>
            <p>Genera prototipos y diseños basados en descripciones textuales.</p>
            
            <h3>Midjourney/DALL-E</h3>
            <p>Para generar assets visuales y mockups rápidamente.</p>
            
            <h2>Mi Stack Recomendado para 2025</h2>
            <ol>
                <li>GitHub Copilot para asistencia de código</li>
                <li>ChatGPT Plus para resolución de problemas</li>
                <li>Cursor para desarrollo con IA integrada</li>
                <li>Notion AI para documentación</li>
                <li>Midjourney para assets visuales</li>
            </ol>
            
            <h2>Consideraciones Importantes</h2>
            <ul>
                <li>No dependas 100% de la IA - mantén tus habilidades afiladas</li>
                <li>Siempre revisa y entiende el código generado</li>
                <li>Considera la privacidad de los datos empresariales</li>
                <li>Mantente actualizado - el landscape cambia rápidamente</li>
            </ul>
        `,
        image: "🛠️",
        date: "2025-01-05",
        author: "Tu Nombre",
        tags: ["herramientas", "productividad", "desarrollo"],
        readTime: "7 min"
    },
    {
        id: 6,
        title: "Ética en IA: Reflexiones sobre el Desarrollo Responsable",
        excerpt: "Explorando los dilemas éticos en el desarrollo de sistemas de inteligencia artificial y cómo abordarlos.",
        content: `
            <h2>La Importancia de la Ética en IA</h2>
            <p>Mientras la IA se vuelve más poderosa, es crucial reflexionar sobre las implicaciones éticas de nuestras creaciones. Como desarrolladores, tenemos la responsabilidad de construir sistemas justos y seguros.</p>
            
            <h2>Principales Desafíos Éticos</h2>
            
            <h3>1. Sesgo Algorítmico</h3>
            <p>Los algoritmos pueden perpetuar o amplificar sesgos existentes en los datos de entrenamiento.</p>
            <ul>
                <li>Sesgo racial en sistemas de reconocimiento facial</li>
                <li>Discriminación de género en procesos de contratación</li>
                <li>Sesgos socioeconómicos en sistemas de crédito</li>
            </ul>
            
            <h3>2. Privacidad y Vigilancia</h3>
            <p>Los sistemas de IA pueden procesar cantidades masivas de datos personales.</p>
            <ul>
                <li>Reconocimiento facial en espacios públicos</li>
                <li>Análisis de comportamiento en redes sociales</li>
                <li>Tracking de ubicación y actividades</li>
            </ul>
            
            <h3>3. Transparencia y Explicabilidad</h3>
            <p>Muchos modelos de IA son "cajas negras" difíciles de interpretar.</p>
            
            <h2>Principios para IA Responsable</h2>
            
            <h3>Fairness (Justicia)</h3>
            <ul>
                <li>Auditar datasets por sesgos</li>
                <li>Probar modelos en grupos diversos</li>
                <li>Implementar métricas de equidad</li>
            </ul>
            
            <h3>Accountability (Responsabilidad)</h3>
            <ul>
                <li>Documentar decisiones de diseño</li>
                <li>Establecer procesos de appeals</li>
                <li>Mantener human oversight</li>
            </ul>
            
            <h3>Transparency (Transparencia)</h3>
            <ul>
                <li>Explicar cómo funcionan los sistemas</li>
                <li>Documentar limitaciones conocidas</li>
                <li>Permitir auditorías externas</li>
            </ul>
            
            <h2>Frameworks y Herramientas</h2>
            
            <h3>Fairness Toolkits</h3>
            <ul>
                <li><strong>Fairlearn:</strong> Microsoft's fairness assessment toolkit</li>
                <li><strong>AI Fairness 360:</strong> IBM's comprehensive fairness library</li>
                <li><strong>What-If Tool:</strong> Google's model understanding tool</li>
            </ul>
            
            <h3>Explainability Tools</h3>
            <ul>
                <li><strong>LIME:</strong> Local Interpretable Model-agnostic Explanations</li>
                <li><strong>SHAP:</strong> SHapley Additive exPlanations</li>
                <li><strong>InterpretML:</strong> Microsoft's interpretability library</li>
            </ul>
            
            <h2>Regulaciones Emergentes</h2>
            <ul>
                <li><strong>EU AI Act:</strong> Regulación comprensiva de la UE</li>
                <li><strong>GDPR:</strong> Impacto en sistemas de IA</li>
                <li><strong>Regulaciones sectoriales:</strong> Finanzas, salud, transporte</li>
            </ul>
            
            <h2>Recomendaciones Prácticas</h2>
            <ol>
                <li>Formar equipos diversos e inclusivos</li>
                <li>Implementar revisiones éticas en el desarrollo</li>
                <li>Establecer procesos de feedback de usuarios</li>
                <li>Mantenerse actualizado en regulaciones</li>
                <li>Participar en comunidades de IA responsable</li>
            </ol>
            
            <h2>El Futuro de la IA Ética</h2>
            <p>La ética en IA no es un obstáculo para la innovación, sino un enabler para crear tecnología que beneficie a toda la humanidad. Como desarrolladores, es nuestra responsabilidad liderar este cambio.</p>
        `,
        image: "⚖️",
        date: "2025-01-01",
        author: "Tu Nombre",
        tags: ["etica", "ia-responsable", "sociedad"],
        readTime: "15 min"
    }
];

// Función para obtener artículos filtrados
function getFilteredArticles(tag = 'all', searchTerm = '') {
    let filtered = articlesData;
    
    // Filtrar por tag
    if (tag !== 'all') {
        filtered = filtered.filter(article => 
            article.tags.includes(tag)
        );
    }
    
    // Filtrar por término de búsqueda
    if (searchTerm) {
        const term = searchTerm.toLowerCase();
        filtered = filtered.filter(article =>
            article.title.toLowerCase().includes(term) ||
            article.excerpt.toLowerCase().includes(term) ||
            article.tags.some(tag => tag.toLowerCase().includes(term))
        );
    }
    
    return filtered;
}

// Función para obtener un artículo por ID
function getArticleById(id) {
    return articlesData.find(article => article.id === parseInt(id));
}

// Función para obtener artículos relacionados
function getRelatedArticles(currentId, limit = 3) {
    const currentArticle = getArticleById(currentId);
    if (!currentArticle) return [];
    
    return articlesData
        .filter(article => article.id !== currentId)
        .filter(article => 
            article.tags.some(tag => currentArticle.tags.includes(tag))
        )
        .slice(0, limit);
}

// Exportar para uso en otros archivos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { articlesData, getFilteredArticles, getArticleById, getRelatedArticles };
}
