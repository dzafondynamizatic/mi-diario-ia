// Datos de ejemplo para los artículos del blog
const articlesData = [
    {
        id: 1,
        title: "Explorando el Nuevo Agente de Cuentas por Pagar en Business Central",
        excerpt: "Mi experiencia probando las nuevas capacidades de IA en Microsoft Dynamics 365 Business Central y preparando una demo para el equipo.",
        content: `
            <h2>Una Nueva Era en la Gestión Financiera</h2>
            <p>Esta semana he tenido la oportunidad de explorar una de las funcionalidades más emocionantes que Microsoft ha añadido a Dynamics 365 Business Central: el Agente de Cuentas por Pagar impulsado por IA.</p>
            
            <h2>¿Qué es el Agente de Cuentas por Pagar?</h2>
            <p>Es una funcionalidad de inteligencia artificial que automatiza y optimiza el proceso de gestión de cuentas por pagar. Utiliza procesamiento de lenguaje natural y machine learning para:</p>
            <ul>
                <li>Extraer datos automáticamente de facturas</li>
                <li>Validar información contra órdenes de compra</li>
                <li>Detectar anomalías y posibles errores</li>
                <li>Sugerir acciones de aprobación o rechazo</li>
                <li>Generar informes inteligentes sobre el flujo de caja</li>
            </ul>
            
            <h2>Mi Experiencia de Configuración</h2>
            <p>La configuración inicial fue sorprendentemente sencilla:</p>
            <ol>
                <li><strong>Habilitación de la funcionalidad:</strong> Desde la página de administración de características</li>
                <li><strong>Configuración de parámetros:</strong> Definí umbrales de aprobación automática</li>
                <li><strong>Entrenamiento inicial:</strong> Cargué facturas históricas para que el agente aprenda patrones</li>
                <li><strong>Pruebas piloto:</strong> Comencé con un subconjunto de proveedores conocidos</li>
            </ol>
            
            <h2>Resultados Impresionantes</h2>
            <p>Después de una semana de pruebas, los resultados han superado mis expectativas:</p>
            <ul>
                <li><strong>95% de precisión</strong> en la extracción de datos de facturas</li>
                <li><strong>60% reducción</strong> en tiempo de procesamiento manual</li>
                <li><strong>Detección proactiva</strong> de 3 facturas duplicadas que habrían pasado desapercibidas</li>
                <li><strong>Mejora en el flujo de trabajo</strong> del equipo de contabilidad</li>
            </ul>
            
            <h2>Preparando la Demo para el Equipo</h2>
            <p>Para la presentación con mis compañeros, he preparado:</p>
            
            <h3>Escenarios de Demostración</h3>
            <ul>
                <li>Procesamiento de factura estándar de proveedor recurrente</li>
                <li>Detección de discrepancias en órdenes de compra</li>
                <li>Manejo de facturas en diferentes formatos (PDF, imagen, email)</li>
                <li>Generación de reportes predictivos de flujo de caja</li>
            </ul>
            
            <h3>Datos de Prueba</h3>
            <p>He creado un conjunto de facturas de prueba que incluyen:</p>
            <ul>
                <li>Facturas estándar con datos completos</li>
                <li>Facturas con errores comunes</li>
                <li>Documentos de diferentes proveedores</li>
                <li>Casos edge para mostrar la robustez del sistema</li>
            </ul>
            
            <h2>Desafíos Encontrados</h2>
            <p>No todo ha sido perfecto. He identificado algunos puntos de mejora:</p>
            <ul>
                <li><strong>Facturas manuscritas:</strong> Aún requieren intervención manual</li>
                <li><strong>Documentos de baja calidad:</strong> Escaneos pixelados causan errores</li>
                <li><strong>Proveedores nuevos:</strong> Necesitan período de aprendizaje inicial</li>
                <li><strong>Integración con sistemas legacy:</strong> Requiere mapeo adicional</li>
            </ul>
            
            <h2>Impacto en el Negocio</h2>
            <p>Esta tecnología promete transformar radicalmente cómo manejamos las finanzas:</p>
            <ul>
                <li>Liberación de tiempo del equipo para tareas estratégicas</li>
                <li>Reducción significativa de errores humanos</li>
                <li>Mejor visibilidad del flujo de caja</li>
                <li>Cumplimiento automático de políticas empresariales</li>
            </ul>
            
            <h2>Próximos Pasos</h2>
            <p>Después de la demo con el equipo, planeo:</p>
            <ol>
                <li>Extender las pruebas a más proveedores</li>
                <li>Configurar alertas personalizadas para el CFO</li>
                <li>Integrar con nuestro sistema de workflow existente</li>
                <li>Entrenar al equipo en las nuevas funcionalidades</li>
                <li>Evaluar el ROI después de 3 meses de uso</li>
            </ol>
            
            <h2>Reflexión Personal</h2>
            <p>Como profesional de tecnología, ver cómo la IA se integra de manera tan natural en procesos empresariales tradicionales es realmente emocionante. Business Central ya no es solo un ERP, sino una plataforma inteligente que aprende y se adapta.</p>
            
            <p>La demo de la próxima semana será crucial para conseguir el buy-in del equipo ejecutivo. Estoy confiado de que los resultados hablarán por sí solos.</p>
        `,
        image: "💼",
        date: "2025-08-01",
        author: "Tu Nombre",
        tags: ["business-central", "dynamics-365", "ai", "demo", "cuentas-por-pagar"],
        readTime: "8 min"
    }
];

// Función para obtener artículos relacionados basados en tags
function getRelatedArticles(currentArticleId, currentTags, maxResults = 3) {
    return articlesData
        .filter(article => article.id !== currentArticleId)
        .map(article => {
            const commonTags = article.tags.filter(tag => 
                currentTags.some(currentTag => 
                    currentTag.toLowerCase() === tag.toLowerCase()
                )
            );
            return {
                ...article,
                relevanceScore: commonTags.length
            };
        })
        .filter(article => article.relevanceScore > 0)
        .sort((a, b) => b.relevanceScore - a.relevanceScore)
        .slice(0, maxResults);
}

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
    return articlesData.find(article => article.id === id);
}
