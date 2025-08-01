// Variables globales
let currentFilter = 'all';
let currentSearchTerm = '';
let articlesPerPage = 6;
let currentPage = 1;
let displayedArticles = [];

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    setupEventListeners();
    loadArticles();
    setupSmoothScrolling();
    setupMobileMenu();
}

// Configurar event listeners
function setupEventListeners() {
    // Búsqueda
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    
    if (searchInput) {
        searchInput.addEventListener('input', debounce(handleSearch, 300));
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });
    }
    
    if (searchBtn) {
        searchBtn.addEventListener('click', handleSearch);
    }
    
    // Filtros de tags
    const tagFilters = document.querySelectorAll('.tag-filter');
    tagFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            handleTagFilter(this.dataset.tag);
        });
    });
    
    // Botón de cargar más
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreArticles);
    }
    
    // Modal
    setupModal();
}

// Configurar menú móvil
function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Cerrar menú al hacer click en un enlace
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// Configurar smooth scrolling para los pocos enlaces que quedan
function setupSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') {
                // Scroll al inicio
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 70;
                    
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Manejar búsqueda
function handleSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        currentSearchTerm = searchInput.value.trim();
        currentPage = 1;
        loadArticles();
    }
}

// Manejar filtros de tags
function handleTagFilter(tag) {
    currentFilter = tag;
    currentPage = 1;
    
    // Actualizar UI de filtros
    const tagFilters = document.querySelectorAll('.tag-filter');
    tagFilters.forEach(filter => {
        filter.classList.remove('active');
        if (filter.dataset.tag === tag) {
            filter.classList.add('active');
        }
    });
    
    loadArticles();
}

// Cargar artículos
function loadArticles() {
    const filteredArticles = getFilteredArticles(currentFilter, currentSearchTerm);
    const startIndex = 0;
    const endIndex = currentPage * articlesPerPage;
    
    displayedArticles = filteredArticles.slice(startIndex, endIndex);
    renderArticles(displayedArticles);
    
    // Mostrar/ocultar botón de cargar más
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        if (endIndex >= filteredArticles.length) {
            loadMoreBtn.style.display = 'none';
        } else {
            loadMoreBtn.style.display = 'block';
        }
    }
}

// Cargar más artículos
function loadMoreArticles() {
    currentPage++;
    loadArticles();
}

// Renderizar artículos en el DOM
function renderArticles(articles) {
    const container = document.getElementById('articlesContainer');
    if (!container) return;
    
    if (currentPage === 1) {
        container.innerHTML = '';
    }
    
    if (articles.length === 0) {
        container.innerHTML = '<div class="no-results"><p>No se encontraron artículos que coincidan con tu búsqueda.</p></div>';
        return;
    }
    
    const newArticles = articles.slice((currentPage - 1) * articlesPerPage);
    
    newArticles.forEach(article => {
        const articleElement = createArticleElement(article);
        container.appendChild(articleElement);
    });
    
    // Añadir animación de entrada
    const newCards = container.querySelectorAll('.article-card:not(.animated)');
    newCards.forEach((card, index) => {
        card.classList.add('animated');
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Crear elemento de artículo
function createArticleElement(article) {
    const articleDiv = document.createElement('div');
    articleDiv.className = 'article-card';
    articleDiv.style.opacity = '0';
    articleDiv.style.transform = 'translateY(20px)';
    articleDiv.style.transition = 'all 0.5s ease';
    
    articleDiv.innerHTML = `
        <div class="article-image">
            ${article.image}
        </div>
        <div class="article-content">
            <div class="article-meta">
                <span class="date">📅 ${formatDate(article.date)}</span>
                <span class="read-time">⏱️ ${article.readTime}</span>
            </div>
            <h3 class="article-title">${article.title}</h3>
            <p class="article-excerpt">${article.excerpt}</p>
            <div class="article-tags">
                ${article.tags.map(tag => `<span class="article-tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;
    
    // Añadir evento click para abrir modal
    articleDiv.addEventListener('click', () => openArticleModal(article.id));
    
    return articleDiv;
}

// Configurar modal
function setupModal() {
    const modal = document.getElementById('articleModal');
    const closeBtn = document.querySelector('.close');
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
    
    // Cerrar modal con ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });
}

// Abrir modal de artículo
function openArticleModal(articleId) {
    const article = getArticleById(articleId);
    if (!article) return;
    
    const modal = document.getElementById('articleModal');
    const modalArticle = document.getElementById('modalArticle');
    
    if (modal && modalArticle) {
        modalArticle.innerHTML = `
            <h1>${article.title}</h1>
            <div class="article-meta">
                <span class="date">📅 ${formatDate(article.date)}</span>
                <span class="author">👤 ${article.author}</span>
                <span class="read-time">⏱️ ${article.readTime}</span>
            </div>
            <div class="article-tags">
                ${article.tags.map(tag => `<span class="article-tag">${tag}</span>`).join('')}
            </div>
            <div class="article-content">
                ${article.content}
            </div>
            <div class="related-articles">
                <h3>Artículos Relacionados</h3>
                ${renderRelatedArticles(articleId)}
            </div>
        `;
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        
        // Scroll al inicio del modal
        modalArticle.scrollTop = 0;
    }
}

// Renderizar artículos relacionados
function renderRelatedArticles(currentId) {
    const relatedArticles = getRelatedArticles(currentId, 3);
    
    if (relatedArticles.length === 0) {
        return '<p>No hay artículos relacionados disponibles.</p>';
    }
    
    return `
        <div class="related-articles-grid">
            ${relatedArticles.map(article => `
                <div class="related-article" onclick="openArticleModal(${article.id})">
                    <div class="related-article-image">${article.image}</div>
                    <h4>${article.title}</h4>
                    <p>${article.excerpt.substring(0, 100)}...</p>
                </div>
            `).join('')}
        </div>
    `;
}

// Cerrar modal
function closeModal() {
    const modal = document.getElementById('articleModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Formatear fecha
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    };
    return date.toLocaleDateString('es-ES', options);
}

// Función de debounce para optimizar búsqueda
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Animación de scroll reveal
function setupScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
            }
        });
    }, observerOptions);
    
    // Observar elementos que deben animarse
    const elementsToReveal = document.querySelectorAll('.article-card, .about-content, .contact-section');
    elementsToReveal.forEach(el => observer.observe(el));
}

// Función para compartir artículo
function shareArticle(articleId, platform) {
    const article = getArticleById(articleId);
    if (!article) return;
    
    const url = window.location.href;
    const title = encodeURIComponent(article.title);
    const text = encodeURIComponent(article.excerpt);
    
    const shareUrls = {
        twitter: `https://twitter.com/intent/tweet?text=${title}&url=${url}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
        whatsapp: `https://wa.me/?text=${title}%20${url}`
    };
    
    if (shareUrls[platform]) {
        window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
}

// Función para copiar enlace
function copyLink(articleId) {
    const url = `${window.location.origin}${window.location.pathname}#article-${articleId}`;
    
    if (navigator.clipboard) {
        navigator.clipboard.writeText(url).then(() => {
            showNotification('Enlace copiado al portapapeles');
        });
    } else {
        // Fallback para navegadores que no soportan clipboard API
        const textArea = document.createElement('textarea');
        textArea.value = url;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showNotification('Enlace copiado al portapapeles');
    }
}

// Mostrar notificación
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--primary-color);
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: var(--shadow-lg);
        z-index: 3000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Mostrar notificación
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Ocultar después de 3 segundos
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Función para alternar modo oscuro
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
}

// Cargar preferencia de modo oscuro
function loadDarkModePreference() {
    const isDark = localStorage.getItem('darkMode') === 'true';
    if (isDark) {
        document.body.classList.add('dark-mode');
    }
}

// Función para track analytics (placeholder)
function trackEvent(eventName, properties = {}) {
    // Aquí puedes integrar con Google Analytics, Mixpanel, etc.
    console.log('Event tracked:', eventName, properties);
}

// Inicializar cuando la página esté completamente cargada
window.addEventListener('load', function() {
    setupScrollReveal();
    loadDarkModePreference();
    
    // Track page view
    trackEvent('page_view', {
        page: window.location.pathname
    });
});

// Manejar errores globales
window.addEventListener('error', function(e) {
    console.error('Error global:', e.error);
    showNotification('Ha ocurrido un error. Por favor, recarga la página.', 'error');
});

// Service Worker para PWA (opcional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}
