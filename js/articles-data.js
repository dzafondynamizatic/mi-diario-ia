// Datos de ejemplo para los artículos del blog
const articlesData = [
    {
        id: 1,
        title: "Explorando el Agente de Cuentas por Pagar en Business Central 2025",
        excerpt: "Mi experiencia implementando y probando las nuevas capacidades de IA del Agente de Cuentas por Pagar en Microsoft Dynamics 365 Business Central, preparando una demo completa para el equipo.",
        content: `
            <h2>El Futuro de la Gestión de Cuentas por Pagar Ha Llegado</h2>
            <p>Esta semana he tenido la oportunidad de explorar una de las funcionalidades más revolucionarias que Microsoft ha lanzado en el 2025 Wave 1 de Dynamics 365 Business Central: el <strong>Agente de Cuentas por Pagar</strong>. Esta solución resuelve un desafío que ha persistido durante décadas en las empresas: el procesamiento eficiente y preciso de facturas de proveedores.</p>
            
            <h2>¿Qué es el Agente de Cuentas por Pagar?</h2>
            <p>El Agente de Cuentas por Pagar es una solución de inteligencia artificial integrada en Business Central que automatiza completamente el flujo de procesamiento de facturas. Su objetivo principal es simple pero poderoso: <strong>eliminar los cuellos de botella en cuentas por pagar</strong> para que el apoyo financiero no ralentice el crecimiento de la empresa.</p>
            
            <h3>Capacidades Clave del Agente</h3>
            <ul>
                <li><strong>Supervisión automática de buzones:</strong> Monitorea buzones de Microsoft 365 en busca de facturas entrantes</li>
                <li><strong>OCR avanzado con Azure Document Intelligence:</strong> Extrae datos de facturas PDF con alta precisión</li>
                <li><strong>Identificación inteligente de proveedores:</strong> Reconoce automáticamente proveedores existentes o crea nuevos</li>
                <li><strong>Creación automática de borradores:</strong> Genera facturas de compra listas para revisión</li>
                <li><strong>Interacción en lenguaje natural:</strong> Los supervisores pueden comunicarse con el agente en español</li>
            </ul>
            
            <h2>Mi Experiencia de Implementación</h2>
            <p>La configuración del agente ha sido sorprendentemente directa, aunque requiere una planificación cuidadosa:</p>
            
            <h3>1. Configuración del Buzón Dedicado</h3>
            <p>Lo primero que configuré fue un buzón dedicado exclusivamente para el agente. Microsoft es muy claro en esto: <strong>el agente debe tener propiedad total del buzón</strong>. No debe ser accesible desde Outlook por usuarios regulares para evitar conflictos.</p>
            
            <h3>2. Configuración de Permisos y Roles</h3>
            <p>El agente trabaja dentro de permisos específicos que le asignas. He configurado un perfil personalizado que le permite:</p>
            <ul>
                <li>Crear y modificar facturas de compra</li>
                <li>Acceder a la información de proveedores</li>
                <li>Crear nuevos proveedores (con aprobación)</li>
                <li>Interactuar con documentos electrónicos</li>
            </ul>
            
            <h3>3. Configuración de Facturación por Uso</h3>
            <p>Una consideración importante: el agente utiliza Microsoft Copilot Studio, lo que genera costos basados en el consumo. He configurado el modelo de facturación y establecido límites de uso para controlar los gastos.</p>
            
            <h2>El Flujo de Proceso en Acción</h2>
            <p>He documentado todo el flujo de extremo a extremo que observé durante mis pruebas:</p>
            
            <h3>Paso 1: Recepción y Supervisión</h3>
            <p>El agente supervisa continuamente el buzón designado. Cuando llega un email con adjuntos PDF, inmediatamente:</p>
            <ul>
                <li>Importa cada PDF como un documento electrónico entrante</li>
                <li>Clasifica el tipo de documento</li>
                <li>Inicia el proceso de análisis</li>
            </ul>
            
            <h3>Paso 2: Extracción de Datos con OCR</h3>
            <p>Utilizando Azure Document Intelligence, el agente extrae:</p>
            <ul>
                <li>Información del proveedor (nombre, dirección, datos fiscales)</li>
                <li>Detalles de la factura (número, fecha, importe total)</li>
                <li>Líneas de detalle (productos/servicios, cantidades, precios)</li>
                <li>Términos de pago y fechas de vencimiento</li>
            </ul>
            
            <h3>Paso 3: Identificación de Proveedores</h3>
            <p>Aquí es donde el agente muestra su inteligencia. He observado tres escenarios:</p>
            <ul>
                <li><strong>Proveedor conocido:</strong> Identifica automáticamente y continúa</li>
                <li><strong>Proveedor desconocido:</strong> Solicita ayuda al supervisor para crear nuevo proveedor</li>
                <li><strong>Proveedor ambiguo:</strong> Presenta opciones para que el supervisor decida</li>
            </ul>
            
            <h2>Preparando la Demo: Casos de Uso Reales</h2>
            <p>Para la presentación con mi equipo, he preparado varios escenarios que demuestran las capacidades del agente:</p>
            
            <h3>Escenario 1: Factura de Proveedor Recurrente</h3>
            <p>Demostración con una factura de servicios de telefonía. El agente:</p>
            <ul>
                <li>Identifica automáticamente al proveedor</li>
                <li>Aplica la configuración de cuenta del mayor basada en el historial</li>
                <li>Sugiere la distribución contable correcta</li>
                <li>Genera el borrador listo para aprobación en menos de 2 minutos</li>
            </ul>
            
            <h3>Escenario 2: Nuevo Proveedor de Software</h3>
            <p>Factura de una nueva suscripción de software. Aquí el agente:</p>
            <ul>
                <li>Detecta que es un proveedor nuevo</li>
                <li>Extrae datos del proveedor de la factura</li>
                <li>Solicita confirmación para crear el proveedor</li>
                <li>Pre-rellena la ficha de proveedor con datos OCR</li>
                <li>Deja el proveedor bloqueado para aprobación manual</li>
            </ul>
            
            <h3>Escenario 3: Factura con Discrepancias</h3>
            <p>Factura con datos incompletos o ambiguos:</p>
            <ul>
                <li>Identifica campos que requieren revisión</li>
                <li>Proporciona tooltips explicando el razonamiento</li>
                <li>Sugiere valores basados en el historial</li>
                <li>Permite corrección manual antes de finalizar</li>
            </ul>
            
            <h2>Resultados Cuantificables de Mis Pruebas</h2>
            <p>Después de dos semanas de pruebas intensivas con facturas reales (anonimizadas), he documentado estos resultados:</p>
            
            <h3>Precisión en Extracción de Datos</h3>
            <ul>
                <li><strong>Datos básicos del proveedor:</strong> 98% de precisión</li>
                <li><strong>Importes y fechas:</strong> 96% de precisión</li>
                <li><strong>Líneas de detalle:</strong> 92% de precisión</li>
                <li><strong>Clasificación contable:</strong> 89% de precisión (mejora con el tiempo)</li>
            </ul>
            
            <h3>Eficiencia Operacional</h3>
            <ul>
                <li><strong>Tiempo de procesamiento:</strong> Reducción del 75% vs. proceso manual</li>
                <li><strong>Errores de entrada:</strong> Reducción del 85%</li>
                <li><strong>Facturas procesadas sin intervención:</strong> 60% (para proveedores conocidos)</li>
                <li><strong>Tiempo promedio de revisión:</strong> 30 segundos por factura</li>
            </ul>
            
            <h2>Limitaciones y Consideraciones</h2>
            <p>Es importante ser transparente sobre las limitaciones que he encontrado:</p>
            
            <h3>Limitaciones Técnicas</h3>
            <ul>
                <li><strong>Solo inglés:</strong> El agente está validado únicamente para inglés</li>
                <li><strong>Facturas manuscritas:</strong> Requieren intervención manual significativa</li>
                <li><strong>Documentos de baja calidad:</strong> Escaneos pixelados generan errores</li>
                <li><strong>Formatos no estándar:</strong> Facturas con layouts únicos requieren entrenamiento</li>
            </ul>
            
            <h3>Limitaciones Geográficas</h3>
            <p>Actualmente disponible solo en:</p>
            <ul>
                <li>Estados Unidos</li>
                <li>Reino Unido</li>
                <li>Australia</li>
            </ul>
            
            <h2>El Factor Humano: Supervisores de Agente</h2>
            <p>Una de las características más inteligentes del sistema es cómo maneja la supervisión humana:</p>
            
            <h3>Cuándo Interviene el Supervisor</h3>
            <ul>
                <li>Proveedores no identificados con certeza</li>
                <li>Facturas con datos ambiguos o incompletos</li>
                <li>Nuevos tipos de gastos sin precedente</li>
                <li>Discrepancias significativas con el historial</li>
            </ul>
            
            <h3>Cómo se Comunica el Agente</h3>
            <p>El agente proporciona explicaciones claras de su razonamiento:</p>
            <ul>
                <li>Tooltips detallados en cada campo sugerido</li>
                <li>Comparaciones con facturas históricas similares</li>
                <li>Niveles de confianza para cada sugerencia</li>
                <li>Sugerencias de acciones específicas</li>
            </ul>
            
            <h2>Impacto Estratégico en el Negocio</h2>
            <p>Los beneficios van más allá de la simple automatización:</p>
            
            <h3>Liberación de Recursos</h3>
            <ul>
                <li>El equipo de contabilidad puede enfocarse en análisis y estrategia</li>
                <li>Reducción significativa de trabajo administrativo repetitivo</li>
                <li>Mejor utilización del conocimiento contable especializado</li>
            </ul>
            
            <h3>Mejora en el Control Financiero</h3>
            <ul>
                <li>Procesamiento más rápido = mejor flujo de caja</li>
                <li>Reducción de facturas perdidas o olvidadas</li>
                <li>Trazabilidad completa del proceso</li>
                <li>Cumplimiento automático de políticas contables</li>
            </ul>
            
            <h2>Preparativos para la Demo</h2>
            <p>Para la presentación ejecutiva, he preparado:</p>
            
            <h3>Datos de Demostración</h3>
            <ul>
                <li>15 facturas reales (anonimizadas) de diferentes tipos</li>
                <li>Casos que muestran tanto éxitos como limitaciones</li>
                <li>Comparativa tiempo/precisión vs. proceso manual</li>
                <li>Proyección de ROI a 12 meses</li>
            </ul>
            
            <h3>Métricas de Presentación</h3>
            <ul>
                <li>Dashboard en tiempo real del agente</li>
                <li>Comparativa antes/después de implementación</li>
                <li>Análisis de costos vs. beneficios</li>
                <li>Timeline de implementación completa</li>
            </ul>
            
            <h2>Próximos Pasos y Roadmap</h2>
            <p>Microsoft ha compartido el roadmap futuro del agente, que incluye:</p>
            
            <h3>Funcionalidades Próximas</h3>
            <ul>
                <li><strong>Conciliación automática:</strong> Matching con órdenes de compra</li>
                <li><strong>Flujos de aprobación:</strong> Integración con workflows existentes</li>
                <li><strong>Detección de anomalías:</strong> Identificación proactiva de irregularidades</li>
                <li><strong>Soporte multicanal:</strong> PEPPOL y otros formatos electrónicos</li>
            </ul>
            
            <h3>Mi Plan de Implementación</h3>
            <ol>
                <li><strong>Fase Piloto (Mes 1):</strong> 5 proveedores principales</li>
                <li><strong>Expansión Controlada (Mes 2-3):</strong> 50% de proveedores</li>
                <li><strong>Implementación Completa (Mes 4):</strong> Todos los proveedores activos</li>
                <li><strong>Optimización (Mes 5-6):</strong> Ajustes basados en analytics</li>
                <li><strong>Evaluación ROI (Mes 6):</strong> Análisis completo de beneficios</li>
            </ol>
            
            <h2>Reflexión Personal: El Futuro de la Contabilidad</h2>
            <p>Después de estas semanas explorando el Agente de Cuentas por Pagar, puedo afirmar que estamos presenciando una transformación fundamental en cómo las empresas manejan sus procesos financieros.</p>
            
            <p>Lo más impresionante no es solo la automatización, sino la <strong>inteligencia contextual</strong> del sistema. El agente no solo procesa datos; entiende patrones, aprende de decisiones previas y se adapta al estilo contable específico de cada empresa.</p>
            
            <p>Business Central ha evolucionado de ser un ERP tradicional a convertirse en una <strong>plataforma inteligente</strong> que realmente comprende el negocio. Esta no es solo una mejora incremental; es un cambio paradigmático que redefinirá las expectativas sobre lo que debe hacer un sistema empresarial.</p>
            
            <p>La demo de la próxima semana será crucial para obtener la aprobación ejecutiva. Con los resultados que he documentado y la roadmap que Microsoft ha presentado, estoy confiado en que esta inversión transformará fundamentalmente nuestros procesos financieros.</p>
            
            <p><strong>El futuro de las cuentas por pagar no es solo automático; es inteligente.</strong></p>
        `,
        image: "🤖",
        date: "2025-08-01",
        author: "Tu Nombre",
        tags: ["business-central", "dynamics-365", "ai", "agente-ia", "cuentas-por-pagar", "automatizacion", "demo"],
        readTime: "15 min"
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
