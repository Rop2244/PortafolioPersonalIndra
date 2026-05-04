/**
 * Portfolio - Main JavaScript
 * 
 * Funcionalidades:
 * - Toggle menú móvil
 * - Navegación activa con aria-current
 * - Smooth scroll
 * - Detección de sección activa al scroll
 */

// ============================================
// 1. TOGGLE MENÚ MÓVIL
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = navMenu.querySelectorAll('.nav-link');

    // Abrir/cerrar menú con botón hamburguesa
    menuToggle.addEventListener('click', function() {
        const isOpen = navMenu.classList.contains('active');
        navMenu.classList.toggle('active');
        
        // Actualizar aria-expanded para accesibilidad
        menuToggle.setAttribute('aria-expanded', !isOpen);
    });

    // ============================================
    // 2. CERRAR MENÚ AL CLICKEAR UN ENLACE
    // ============================================

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Cerrar menú
            navMenu.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            
            // Actualizar enlace activo
            updateActiveLink(this);
        });
    });

    // ============================================
    // 3. CERRAR MENÚ SI CLICKEA FUERA
    // ============================================

    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target);
        const isClickOnToggle = menuToggle.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // ============================================
    // 4. ACTUALIZAR NAVEGACIÓN ACTIVA AL SCROLL
    // ============================================

    window.addEventListener('scroll', function() {
        let current = '';
        
        // Obtener todas las secciones
        const sections = document.querySelectorAll('main > section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            // Si estamos dentro de esta sección, marcarla como activa
            if (pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });

        // Actualizar aria-current en todos los links
        navLinks.forEach(link => {
            link.removeAttribute('aria-current');
            
            if (link.getAttribute('data-section') === current) {
                link.setAttribute('aria-current', 'page');
            }
        });
    });

    // ============================================
    // 5. FUNCIÓN HELPER: ACTUALIZAR LINK ACTIVO
    // ============================================

    function updateActiveLink(clickedLink) {
        // Remover aria-current de todos
        navLinks.forEach(link => {
            link.removeAttribute('aria-current');
        });
        
        // Añadir aria-current al clickeado
        clickedLink.setAttribute('aria-current', 'page');
    }

    // ============================================
    // 6. INICIALIZAR ESTADO ACTIVO EN LOAD
    // ============================================

    // Marcar "Inicio" como activo por defecto
    const inicioLink = document.querySelector('[data-section="inicio"]');
    if (inicioLink) {
        inicioLink.setAttribute('aria-current', 'page');
    }

    // ============================================
    // 7. SMOOTH SCROLL ALTERNATIVO (Fallback)
    // ============================================

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Si es un anchor link (#)
            if (href.startsWith('#')) {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    // Usar scrollIntoView con smooth behavior
                    targetSection.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // ============================================
    // 8. ANIMACIONES DE ENTRADA (Intersection Observer)
    // ============================================

    // Opciones del observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    // Callback cuando un elemento entra en viewport
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                // Opcional: dejar de observar después de animar
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observar todos los cards de habilidades
    document.querySelectorAll('.skill-card, .specialty-card').forEach(card => {
        observer.observe(card);
    });

    // ============================================
    // 9. MONITOREO DE PERFORMANCE (Opcional)
    // ============================================

    // Log de performance cuando se carga la página
    window.addEventListener('load', function() {
        if (window.performance && window.performance.timing) {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            
            console.log('⏱️ Metrics:');
            console.log(`- Tiempo total: ${pageLoadTime}ms`);
            console.log(`- DNS lookup: ${perfData.domainLookupEnd - perfData.domainLookupStart}ms`);
            console.log(`- TCP connection: ${perfData.connectEnd - perfData.connectStart}ms`);
            console.log(`- DOM ready: ${perfData.domContentLoadedEventEnd - perfData.navigationStart}ms`);
        }
    });

    // ============================================
    // 10. ACCESSIBILITY: DETECCIÓN DE PREFER-REDUCED-MOTION
    // ============================================

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
        console.log('♿ Modo de movimiento reducido detectado');
        // Los estilos CSS ya manejan esto con @media (prefers-reduced-motion: reduce)
        // Aquí solo log para debugging
    }

    // ============================================
    // 11. SOPORTE PARA KEYBOARD NAVIGATION
    // ============================================

    // Permitir navegar menú con teclado (ya está en HTML con <a> tags)
    // Pero podemos mejorar con Escape para cerrar menú
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuToggle.focus(); // Volver focus al botón
        }
    });

    // ============================================
    // 12. THEME TOGGLE (BONUS: para futuro dark mode)
    // ============================================

    // Detectar preferencia del sistema
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Aplicar tema guardado en localStorage (si existe)
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (prefersDarkMode) {
        // Usar preferencia del sistema si no hay saved preference
        document.documentElement.setAttribute('data-theme', 'dark');
    }

    console.log('✅ Portfolio cargado correctamente');
});

// ============================================
// HELPERS PARA DEBUGGING
// ============================================

// Log accesibilidad
function checkA11y() {
    const images = document.querySelectorAll('img');
    const imagesWithoutAlt = Array.from(images).filter(img => !img.alt);
    
    if (imagesWithoutAlt.length > 0) {
        console.warn(`⚠️ ${imagesWithoutAlt.length} imágenes sin alt-text`);
    }
    
    const links = document.querySelectorAll('a');
    const linksWithoutText = Array.from(links).filter(link => 
        !link.textContent.trim() && !link.getAttribute('aria-label')
    );
    
    if (linksWithoutText.length > 0) {
        console.warn(`⚠️ ${linksWithoutText.length} enlaces sin texto descriptivo`);
    }
    
    console.log('✅ Auditoría de accesibilidad completada');
}

// Log de estructura semántica
function checkSemantic() {
    const elements = {
        'header': document.querySelectorAll('header').length,
        'nav': document.querySelectorAll('nav').length,
        'main': document.querySelectorAll('main').length,
        'article': document.querySelectorAll('article').length,
        'section': document.querySelectorAll('section').length,
        'footer': document.querySelectorAll('footer').length
    };
    
    console.log('📋 Elementos semánticos:', elements);
}

// Exponer funciones de debugging en consola (solo en desarrollo)
if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    window.debug = {
        checkA11y,
        checkSemantic
    };
    console.log('🔧 Modo desarrollo. Usa: debug.checkA11y() o debug.checkSemantic()');
}
