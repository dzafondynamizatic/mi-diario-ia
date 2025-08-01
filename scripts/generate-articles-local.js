#!/usr/bin/env node

/**
 * Script local para generar artículos del blog
 * Uso: node scripts/generate-articles-local.js
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 Iniciando generación local de artículos...');

// Verificar que existe articles-data.js
const articlesDataPath = './js/articles-data.js';
if (!fs.existsSync(articlesDataPath)) {
  console.error('❌ No se encontró js/articles-data.js');
  process.exit(1);
}

// Leer y evaluar el archivo de artículos
const articlesContent = fs.readFileSync(articlesDataPath, 'utf8');
eval(articlesContent); // Esto carga la variable articlesData

if (!articlesData || !Array.isArray(articlesData)) {
  console.error('❌ No se pudo cargar articlesData o no es un array válido');
  process.exit(1);
}

console.log(`📄 Encontrados ${articlesData.length} artículos`);

// Función para limpiar nombre de archivo
function cleanFilename(title) {
  return title
    .toLowerCase()
    .normalize('NFD') // Normalizar caracteres acentuados
    .replace(/[\u0300-\u036f]/g, '') // Remover diacríticos
    .replace(/[^a-z0-9\s-]/g, '') // Solo letras, números, espacios y guiones
    .replace(/\s+/g, '-') // Espacios a guiones
    .replace(/-+/g, '-') // Múltiples guiones a uno solo
    .trim('-') // Remover guiones al inicio/final
    .substring(0, 50); // Limitar longitud
}

// Crear directorio de artículos
const articlesDir = './articulos';
if (!fs.existsSync(articlesDir)) {
  fs.mkdirSync(articlesDir, { recursive: true });
  console.log('📁 Creado directorio articulos/');
}

// Generar página individual para cada artículo
let generatedCount = 0;

articlesData.forEach((article, index) => {
  try {
    const filename = cleanFilename(article.title);
    const articlePath = path.join(articlesDir, `${filename}.html`);
    
    // Formatear fecha
    const formattedDate = new Date(article.date).toLocaleDateString('es-ES', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    
    // Generar HTML del artículo
    const articleHtml = `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${article.title} | Mi Diario de IA</title>
    <meta name="description" content="${article.excerpt}">
    <meta name="keywords" content="${article.tags.join(', ')}">
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article">
    <meta property="og:url" content="https://dzafondynamizatic.github.io/mi-diario-ia/articulos/${filename}.html">
    <meta property="og:title" content="${article.title}">
    <meta property="og:description" content="${article.excerpt}">
    <meta property="og:image" content="https://dzafondynamizatic.github.io/mi-diario-ia/images/og-image.svg">
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://dzafondynamizatic.github.io/mi-diario-ia/articulos/${filename}.html">
    <meta property="twitter:title" content="${article.title}">
    <meta property="twitter:description" content="${article.excerpt}">
    <meta property="twitter:image" content="https://dzafondynamizatic.github.io/mi-diario-ia/images/og-image.svg">
    
    <link rel="canonical" href="https://dzafondynamizatic.github.io/mi-diario-ia/articulos/${filename}.html">
    <link rel="stylesheet" href="../css/styles.css">
    <link rel="stylesheet" href="../css/additional-styles.css">
    <link rel="stylesheet" href="../css/article.css">
    <link rel="icon" type="image/png" href="../favicon.png">
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- JSON-LD Schema -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": "${article.title}",
      "description": "${article.excerpt}",
      "image": "https://dzafondynamizatic.github.io/mi-diario-ia/images/og-image.svg",
      "author": {
        "@type": "Person",
        "name": "${article.author}"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Mi Diario de IA",
        "logo": {
          "@type": "ImageObject",
          "url": "https://dzafondynamizatic.github.io/mi-diario-ia/images/og-image.svg"
        }
      },
      "datePublished": "${article.date}",
      "dateModified": "${article.date}",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://dzafondynamizatic.github.io/mi-diario-ia/articulos/${filename}.html"
      }
    }
    </script>
</head>
<body>
    <header class="blog-header">
        <div class="container">
            <div class="header-content">
                <div class="logo">
                    <h1><a href="../index.html">Mi Diario de IA 🤖</a></h1>
                    <p>Explorando el mundo de la inteligencia artificial empresarial</p>
                </div>
                
                <nav class="nav-menu">
                    <a href="../index.html" class="nav-link">Inicio</a>
                    <a href="../index.html#articles" class="nav-link">Artículos</a>
                    <a href="#" class="nav-link">Sobre Mí</a>
                </nav>
            </div>
        </div>
    </header>
    
    <main class="article-main">
        <div class="container">
            <!-- Breadcrumbs -->
            <nav class="breadcrumbs">
                <a href="../index.html">Inicio</a>
                <span>></span>
                <span>Artículos</span>
                <span>></span>
                <span>${article.title}</span>
            </nav>
            
            <!-- Artículo -->
            <article class="article-single">
                <header class="article-header">
                    <div class="article-meta">
                        <span class="article-icon">${article.image}</span>
                        <span class="article-date">${formattedDate}</span>
                        <span class="article-author">Por ${article.author}</span>
                        <span class="article-read-time">${article.readTime} de lectura</span>
                    </div>
                    
                    <h1 class="article-title">${article.title}</h1>
                    <p class="article-excerpt">${article.excerpt}</p>
                    
                    <div class="article-tags">
                        ${article.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                </header>
                
                <div class="article-content">
                    ${article.content}
                </div>
                
                <footer class="article-footer">
                    <div class="article-actions">
                        <button class="share-btn" onclick="shareArticle()">
                            📤 Compartir artículo
                        </button>
                        <a href="../index.html" class="back-btn">
                            ← Volver al blog
                        </a>
                    </div>
                </footer>
            </article>
        </div>
    </main>
    
    <footer class="blog-footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Mi Diario de IA</h3>
                    <p>Explorando el fascinante mundo de la inteligencia artificial empresarial, con enfoque en Microsoft Dynamics 365 y Business Central.</p>
                </div>
                
                <div class="footer-section">
                    <h3>Enlaces</h3>
                    <ul>
                        <li><a href="../index.html">Inicio</a></li>
                        <li><a href="../index.html#articles">Artículos</a></li>
                        <li><a href="#">Sobre Mí</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h3>Sígueme</h3>
                    <div class="social-links">
                        <a href="https://github.com/dzafondynamizatic" target="_blank">GitHub</a>
                        <a href="#" target="_blank">LinkedIn</a>
                        <a href="#" target="_blank">Twitter</a>
                    </div>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; 2025 Mi Diario de IA. Hecho con ❤️ y mucho ☕</p>
            </div>
        </div>
    </footer>
    
    <script>
        function shareArticle() {
            if (navigator.share) {
                navigator.share({
                    title: '${article.title}',
                    text: '${article.excerpt}',
                    url: window.location.href
                });
            } else {
                // Fallback para navegadores que no soportan Web Share API
                const url = window.location.href;
                navigator.clipboard.writeText(url).then(() => {
                    alert('¡URL copiada al portapapeles!');
                });
            }
        }
        
        // Analytics de lectura
        let startTime = Date.now();
        let scrollPercent = 0;
        
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            scrollPercent = Math.round((scrollTop / docHeight) * 100);
        });
        
        window.addEventListener('beforeunload', () => {
            const readTime = Math.round((Date.now() - startTime) / 1000);
            console.log(\`Artículo leído por \${readTime} segundos, scroll: \${scrollPercent}%\`);
        });
    </script>
</body>
</html>`;
    
    fs.writeFileSync(articlePath, articleHtml, 'utf8');
    generatedCount++;
    console.log(`✅ Generado: ${filename}.html`);
    
  } catch (error) {
    console.error(`❌ Error generando artículo ${index + 1}:`, error.message);
  }
});

// Generar sitemap.xml
try {
  const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://dzafondynamizatic.github.io/mi-diario-ia/</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>1.0</priority>
    </url>
    ${articlesData.map(article => {
      const filename = cleanFilename(article.title);
      return `<url>
        <loc>https://dzafondynamizatic.github.io/mi-diario-ia/articulos/${filename}.html</loc>
        <lastmod>${new Date(article.date).toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
    </url>`;
    }).join('')}
</urlset>`;
  
  fs.writeFileSync('./sitemap.xml', sitemapContent, 'utf8');
  console.log('✅ Sitemap generado');
} catch (error) {
  console.error('❌ Error generando sitemap:', error.message);
}

// Generar estadísticas
try {
  const allTags = [...new Set(articlesData.flatMap(a => a.tags))];
  const tagDistribution = {};
  
  articlesData.forEach(article => {
    article.tags.forEach(tag => {
      tagDistribution[tag] = (tagDistribution[tag] || 0) + 1;
    });
  });
  
  const stats = {
    totalArticles: articlesData.length,
    totalTags: allTags.length,
    averageReadTime: Math.round(
      articlesData.reduce((sum, a) => sum + parseInt(a.readTime), 0) / articlesData.length
    ),
    lastUpdated: new Date().toISOString(),
    tagDistribution,
    allTags: allTags.sort(),
    generatedFiles: generatedCount
  };
  
  fs.writeFileSync('./stats.json', JSON.stringify(stats, null, 2), 'utf8');
  console.log('📊 Estadísticas generadas');
} catch (error) {
  console.error('❌ Error generando estadísticas:', error.message);
}

// Resumen final
console.log(`
🎉 ¡Generación completada!

📊 Resumen:
- Artículos generados: ${generatedCount}/${articlesData.length}
- Sitemap: ✅
- Estadísticas: ✅

📁 Archivos creados:
- articulos/*.html (páginas individuales)
- sitemap.xml (mapa del sitio)
- stats.json (estadísticas del blog)

🚀 Para probar localmente:
- Abre index.html en tu navegador
- O ejecuta un servidor local: python -m http.server 8000
`);
