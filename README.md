# Mi Diario de IA 🤖

Un blog personal minimalista dedicado a documentar mi viaje explorando el fascinante mundo de la inteligencia artificial, machine learning y tecnologías emergentes.

## 🚀 Características

- **Diseño Minimalista**: Enfocado completamente en el contenido de los artículos
- **Colores Microsoft 365 Copilot**: Paleta inspirada en los colores oficiales de Copilot
- **Búsqueda Inteligente**: Encuentra artículos por título, contenido o tags
- **Filtros por Categorías**: ML, DL, NLP, Computer Vision, Tools, Ética
- **Modal de Lectura**: Experiencia de lectura inmersiva sin distracciones
- **Artículos Relacionados**: Sugerencias basadas en tags similares
- **Responsive Design**: Optimizado para todos los dispositivos
- **Navegación Simplificada**: Sin secciones innecesarias, directo a los artículos

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Diseño moderno con CSS Grid, Flexbox y animaciones
- **JavaScript ES6+**: Funcionalidad interactiva y dinámica
- **GitHub Pages**: Hosting gratuito y confiable

## 📁 Estructura del Proyecto

```
mi-diario-ia/
├── index.html              # Página principal
├── css/
│   └── styles.css          # Estilos principales
├── js/
│   ├── script.js          # Lógica principal
│   └── articles-data.js   # Datos de artículos
├── images/                 # Imágenes y assets
├── favicon.png            # Icono del sitio
└── README.md              # Este archivo
```

## 🎯 Temas Cubiertos

- **Machine Learning**: Conceptos fundamentales y algoritmos
- **Deep Learning**: Redes neuronales y frameworks (TensorFlow, PyTorch)
- **NLP**: Procesamiento de lenguaje natural y análisis de sentimientos
- **Computer Vision**: Detección de objetos y reconocimiento de imágenes
- **Herramientas de IA**: Reviews y comparativas de herramientas
- **Ética en IA**: Reflexiones sobre el desarrollo responsable

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
    id: 7, // ID único
    title: "Título del Artículo",
    excerpt: "Resumen breve del artículo...",
    content: `
        <h2>Subtítulo</h2>
        <p>Contenido en HTML...</p>
    `,
    image: "🔬", // Emoji o icono
    date: "2025-02-01",
    author: "Tu Nombre",
    tags: ["tag1", "tag2"],
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
