# 🤖 Mi Diario de IA

> Blog personal sobre inteligencia artificial empresarial y Microsoft Dynamics 365 Business Central

![Artículos](https://img.shields.io/badge/dynamic/json?url=https://raw.githubusercontent.com/dzafondynamizatic/mi-diario-ia/main/badge.json&label=art%C3%ADculos&query=message&color=blue)
![Build Status](https://img.shields.io/github/actions/workflow/status/dzafondynamizatic/mi-diario-ia/generate-articles.yml?branch=main)
![Last Commit](https://img.shields.io/github/last-commit/dzafondynamizatic/mi-diario-ia)

## 🌟 Características

- ✨ **Generación automática**: Los artículos se generan automáticamente con GitHub Actions
- 🎨 **Diseño moderno**: Colores de Microsoft 365 Copilot con diseño responsive
- 🔍 **SEO optimizado**: Meta tags, OpenGraph, Twitter Cards y Schema.org
- 📱 **Mobile-first**: Diseño adaptativo para todos los dispositivos
- 🏷️ **Sistema de tags**: Filtrado inteligente por categorías
- 📄 **Páginas individuales**: Cada artículo tiene su propia página
- 🗺️ **Sitemap automático**: Generación automática para SEO
- 📊 **Estadísticas**: Análisis detallado del contenido del blog

## 🚀 Demo en Vivo

👉 **[Ver Blog](https://dzafondynamizatic.github.io/mi-diario-ia/)**

## 🛠️ Tecnologías

- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions
- **Generación**: Node.js scripts
- **SEO**: Schema.org, OpenGraph, Twitter Cards

## 📝 Cómo Agregar Artículos

### 1. Editar artículos localmente

Modifica el archivo `js/articles-data.js` y agrega un nuevo artículo:

```javascript
{
    id: 2, // ID único
    title: "Tu Nuevo Artículo",
    excerpt: "Breve descripción del artículo...",
    content: `
        <h2>Introducción</h2>
        <p>Contenido del artículo en HTML...</p>
    `,
    image: "🚀",
    date: "2025-08-15",
    author: "Tu Nombre",
    tags: ["ai", "business-central", "demo"],
    readTime: "8 min"
}
```

### 2. Generación automática (GitHub)

Al hacer push de cambios en `js/articles-data.js`, GitHub Actions automáticamente:

1. ✅ Valida la estructura de los artículos
2. 🎨 Genera páginas HTML individuales
3. 🗺️ Actualiza el sitemap.xml
4. 📊 Regenera estadísticas
5. 🚀 Despliega en GitHub Pages

### 3. Generación local

También puedes generar los artículos localmente:

```bash
# Instalar dependencias
npm install

# Generar artículos
npm run generate

# Validar artículos
npm run validate

# Generar estadísticas
npm run stats

# Servir localmente
npm run serve
```

## 🔧 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run generate` | Genera páginas individuales y sitemap |
| `npm run validate` | Valida estructura y contenido de artículos |
| `npm run stats` | Genera estadísticas detalladas |
| `npm run dev` | Servidor de desarrollo (Python) |
| `npm run serve` | Servidor de desarrollo (npx serve) |
| `npm run build` | Build completo (generate + validate) |

## 📁 Estructura del Proyecto

```
mi-diario-ia/
├── index.html                 # Página principal
├── css/
│   ├── styles.css            # Estilos principales  
│   └── additional-styles.css # Estilos adicionales
├── js/
│   ├── script.js            # Lógica principal
│   └── articles-data.js     # Datos de artículos
├── images/                  # Imágenes y assets
├── favicon.png             # Icono del sitio
└── README.md               # Este archivo
```

## 🎯 Temas Cubiertos

- **Microsoft Dynamics 365**: Business Central y sus nuevas funcionalidades de IA
- **Agentes de IA**: Automatización de procesos empresariales
- **Cuentas por Pagar**: Gestión inteligente de facturas y proveedores
- **Demos y Presentaciones**: Preparación de demostraciones técnicas
- **ERP Moderno**: Evolución de los sistemas empresariales hacia la inteligencia artificial
- **Integración de IA**: Implementación práctica en entornos corporativos

## 🚀 Cómo Usar

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/dzafondynamizatic/mi-diario-ia.git
   ```

2. **Abrir localmente**:
   - Simplemente abre `index.html` en tu navegador
   - O usa un servidor local como Live Server en VS Code

3. **Personalizar**:
   - Edita `js/articles-data.js` para añadir tus propios artículos
   - Modifica `css/styles.css` para cambiar el diseño
   - Actualiza la información personal en `index.html`

## ✍️ Añadir Nuevos Artículos

Para añadir un nuevo artículo, edita el archivo `js/articles-data.js` y añade un objeto con esta estructura:

```javascript
{
    id: 2, // ID único
    title: "Explorando Nuevas Funcionalidades en Business Central",
    excerpt: "Mi experiencia probando las últimas actualizaciones...",
    content: `
        <h2>Introducción</h2>
        <p>Contenido en HTML...</p>
    `,
    image: "�", // Emoji o icono
    date: "2025-08-01",
    author: "Tu Nombre",
    tags: ["business-central", "dynamics-365", "ai"],
    readTime: "X min"
}
```

## 🎨 Personalización

### Colores
Las variables CSS están definidas en `:root` para fácil personalización:

```css
:root {
    --primary-color: #8b5fbf;
    --secondary-color: #0078d4;
    --accent-color: #00bcf2;
    /* Colores inspirados en Microsoft 365 Copilot */
}
```

### Tipografía
El proyecto usa la fuente Inter de Google Fonts. Puedes cambiarla editando el enlace en el `<head>` de `index.html`.

## 📱 Características del Diseño

- **Minimalista**: Enfoque 100% en el contenido, sin distracciones
- **Mobile First**: Diseñado primero para móviles
- **Colores Copilot**: Paleta oficial de Microsoft 365 Copilot
- **Navegación Simple**: Header limpio con enlaces directos
- **Carga Rápida**: Sin elementos innecesarios que ralenticen la experiencia

## 🔧 Optimizaciones

- **Lazy Loading**: Las imágenes se cargan según demanda
- **Debounced Search**: Búsqueda optimizada para mejor rendimiento
- **CSS Animations**: Transiciones suaves y profesionales
- **Semantic HTML**: Estructura accesible y SEO-friendly

## 🚀 Despliegue en GitHub Pages

1. **Sube tu código a GitHub**
2. **Ve a Settings → Pages**
3. **Selecciona la rama main como source**
4. **Tu sitio estará disponible en**: `https://tu-usuario.github.io/mi-diario-ia`

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar el blog:

1. Haz un fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-caracteristica`)
3. Commit tus cambios (`git commit -am 'Añadir nueva característica'`)
4. Push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Siéntete libre de usarlo y modificarlo.

## 📧 Contacto

- **GitHub**: [@dzafondynamizatic](https://github.com/dzafondynamizatic)
- **Email**: tu-email@ejemplo.com

---

⭐ Si este proyecto te resulta útil, ¡no olvides darle una estrella!

*Hecho con ❤️ y mucho ☕*
