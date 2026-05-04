# 🚀 Portfolio Personal - Roberto Fernández

Portfolio profesional responsivo de un desarrollador Junior especializado en QA Automation, Testing y Desarrollo Multiplataforma.

**Live:** [Tu portfolio en GitHub Pages]  
**Repo:** https://github.com/Rop2244/PortafolioPersonalIndra

---

## 📋 Tabla de Contenidos

- [Características](#características)
- [Stack Tecnológico](#stack-tecnológico)
- [Instalación](#instalación)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Secciones](#secciones)
- [CI/CD Pipeline](#cicd-pipeline)
- [Mejoras Futuras](#mejoras-futuras)
- [Contribuciones](#contribuciones)

---

## ✨ Características

✅ **Responsivo:** Mobile-first, funciona en dispositivos desde 320px hasta 1920px  
✅ **Accesible:** WCAG 2.1 AA compliant (aria-labels, semántica HTML, contraste adecuado)  
✅ **Rápido:** Carga en <1s, sin frameworks pesados, solo vanilla CSS/JS  
✅ **Semántico:** HTML5 puro, estructura clara y mantenible  
✅ **Dark Mode Ready:** Preparado para tema oscuro (variables CSS)  
✅ **CI/CD Integrado:** Pipeline de validación automática en GitHub Actions  

---

## 🛠️ Stack Tecnológico

| Componente | Herramienta | Versión |
|-----------|-----------|---------|
| **Markup** | HTML5 | Nativo |
| **Estilos** | CSS3 | Nativo (Grid, Flexbox) |
| **Interactividad** | Vanilla JavaScript | ES6 |
| **Alojamiento** | GitHub Pages | Gratis |
| **CI/CD** | GitHub Actions | Nativo |
| **Validación** | html-validate, stylelint | Latest |

**Librerías:** 0 (sin dependencias externas)  
**Frameworks:** 0 (pure HTML/CSS/JS)

---

## 📦 Instalación

### Clonar Repositorio

```bash
git clone https://github.com/Rop2244/PortafolioPersonalIndra.git
cd PortafolioPersonalIndra
```

### Servir Localmente (Opcional)

```bash
# Con Python 3
python3 -m http.server 8000

# Con Node.js (http-server)
npx http-server

# Con Live Server (VS Code extension)
# Botón derecho en index.html → Open with Live Server
```

Luego abre: `http://localhost:8000`

---

## 📁 Estructura del Proyecto

```
PortafolioPersonalIndra/
├── index.html              # Archivo principal (HTML5 semántico)
├── styles.css              # Estilos (CSS3, mobile-first)
├── script.js               # Funcionalidad (Vanilla JS)
├── .github/
│   └── workflows/
│       └── ci.yml          # Pipeline de CI/CD (GitHub Actions)
├── CI_CD_MASTERCLASS.md    # Explicación del pipeline (educativo)
├── README.md               # Este archivo
└── LICENSE                 # MIT License

Total: 3 archivos HTML/CSS/JS + configuración CI/CD
```

---

## 🎯 Secciones

### 1. **Header / Navegación** (`<header>`)
- Logo clickeable
- Menú sticky (siempre visible)
- Toggle hamburguesa en móvil
- Navegación activa con `aria-current`

### 2. **Hero** (`#inicio`)
- Presentación personal
- Propuesta de valor
- CTAs primarios

### 3. **Sobre Mí** (`#sobre-mi`)
- Bio profesional
- Info de contacto (email, teléfono)
- Ubicación y disponibilidad

### 4. **Especialidades** (`#especialidades`)
- 3 áreas clave (QA, Desarrollo, Seguridad)
- Descripción de cada especialidad
- Tags/badges de tecnologías

### 5. **Habilidades** (`#habilidades`)
- 5 categorías de skills
- Grid automático y responsivo
- Efectos hover interactivos

### 6. **Experiencia** (`#experiencia`)
- Timeline de formación y prácticas
- Línea conectora CSS
- Markers con animación "pulse"

### 7. **Contacto** (`#contacto`)
- Email y teléfono
- Enlaces a redes (GitHub, LinkedIn)
- Llamada a acción final

### 8. **Footer** (`<footer>`)
- Derechos de autor
- Enlace "volver al inicio"
- Borde rojo conexión visual

---

## 🚀 CI/CD Pipeline

Tu portfolio incluye un **pipeline de integración continua** que valida automáticamente:

### ¿Qué hace?

```
git push → GitHub Actions ejecuta en paralelo:
├── ✅ Validación HTML5 (html-validate)
├── ✅ Validación CSS3 (stylelint)
├── ✅ Análisis Estático (enlaces, alt-text, meta tags, a11y)
└── ✅ Resumen final con reportes
```

### Resultado

| Validación | Herramienta | ¿Qué detecta? |
|-----------|-----------|---|
| HTML | html-validate | Tags mal cerrados, atributos inválidos |
| CSS | stylelint | Sintaxis CSS, especificidad, bad practices |
| Estático | bash scripts | Enlaces rotos, falta alt-text, semántica |

### Para Ver Resultados

1. Ir a: https://github.com/Rop2244/PortafolioPersonalIndra/actions
2. Ver workflow "CI - HTML & CSS Validation"
3. Clicar en último run
4. Ver detalles de cada job

### En Caso de Fallo

Si un check falla, el commit mostrará ❌. Verifica:

```bash
# Clonar localmente
git clone ...
cd PortafolioPersonalIndra

# Ejecutar validación local
html-validate index.html
stylelint styles.css
```

Luego arregla y haz `git push` de nuevo.

---

## 🌐 Publicar en GitHub Pages

### Opción 1: Automática (Recomendada)

1. Ir a: **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: **main / root**
4. Guardar
5. Esperar 1-2 minutos
6. Tu página estará en: `https://Rop2244.github.io/PortafolioPersonalIndra`

### Opción 2: Con Actions (Futuro)

```yaml
# .github/workflows/deploy.yml
- name: 🚀 Deploy a GitHub Pages
  if: github.ref == 'refs/heads/main'
  run: # Tu deploy logic aquí
```

---

## 📱 Responsive Breakpoints

| Dispositivo | Ancho | Ajustes |
|-----------|-------|--------|
| **Móvil** | <480px | 1 columna, menú hamburguesa |
| **Tablet** | 481-768px | 2 columnas, menú colapsable |
| **Desktop** | 769px+ | 3+ columnas, navegación normal |

Prueba redimensionando navegador o usando **DevTools** (F12).

---

## ♿ Accesibilidad

### Cumplimiento

- ✅ WCAG 2.1 Level AA
- ✅ Navegación por teclado (Tab, Enter, Escape)
- ✅ Lectores de pantalla (JAWS, NVDA, VoiceOver)
- ✅ Contraste de color: 7:1 (supera 4.5:1 requerido)
- ✅ Alt-text descriptivo
- ✅ Semántica HTML5 (`<nav>`, `<main>`, `<article>`, etc.)

### Pruebas Recomendadas

```bash
# En navegador (DevTools)
1. F12 → Lighthouse → Accessibility
2. Verifica score ≥ 90
```

```bash
# Con herramientas
npm install -g axe-core
# O usa axe DevTools extension
```

---

## 🎓 Conceptos Educativos

Este proyecto enseña:

### Frontend
- HTML5 semántico
- CSS Grid + Flexbox responsive
- Vanilla JavaScript (no jQuery, no React)
- Mobile-first design

### DevOps / QA
- CI/CD con GitHub Actions
- Pipeline de validación automática
- Infrastructure as Code (IaC)
- Testing de accesibilidad automatizado

### Buenas Prácticas
- Clean Code
- DRY (Don't Repeat Yourself)
- SOLID principles (Single Responsibility)
- Semantic versioning (futuro)

---

## 🔄 Mejoras Futuras

### Corto Plazo (Easy)
- [ ] Dark mode toggle (variables CSS ya preparadas)
- [ ] Analytics (Google Analytics o Plausible)
- [ ] Sitemap automático

### Mediano Plazo (Intermediate)
- [ ] Internacionalización (i18n): ES/EN/FR
- [ ] Blog con markdown
- [ ] Formulario de contacto con Backend

### Largo Plazo (Advanced)
- [ ] PWA (Progressive Web App)
- [ ] Lighthouse CI
- [ ] E2E testing con Playwright
- [ ] Monorepo para múltiples portfolios
- [ ] Migración a Next.js (si crece)

---

## 📝 Convenciones del Código

### Naming

- **Clases CSS**: `kebab-case` (`.main-hero`, `.skill-card`)
- **IDs HTML**: `kebab-case` (`#main-content`, `#especialidades`)
- **Variables CSS**: `--kebab-case` (`--color-red-primary`, `--spacing-lg`)
- **Variables JS**: `camelCase` (`menuToggle`, `navLinks`)

### Comentarios

```html
<!-- Largo: explica el "por qué" -->
<!-- Skip to main content link for accessibility (WCAG A) -->
<a href="#main-content" class="skip-to-main">...</a>
```

```css
/* Sección lógica: agrupa estilos relacionados */
/* ===== TIPOGRAFÍA ===== */
h1 { ... }
h2 { ... }
```

```javascript
// Función: describe breve qué hace
// Cerrar menú si clickea fuera del elemento
if (!isClickInsideNav && !isClickOnToggle) { ... }
```

---

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios mayores:

1. Fork el repositorio
2. Crea rama: `git checkout -b feature/nueva-funcionalidad`
3. Commit: `git commit -am 'Añade nueva funcionalidad'`
4. Push: `git push origin feature/nueva-funcionalidad`
5. Abre Pull Request

---

## 📄 Licencia

MIT License - Libre de usar con atribución

```
Copyright © 2025 Roberto Fernández

Permiso para usar, copiar, modificar y distribuir libremente.
```

---

## 📞 Contacto

- **Email:** robertofernandezsantamaria@gmail.com
- **Teléfono:** +34 601 092 127
- **GitHub:** https://github.com/Rop2244
- **LinkedIn:** [Tu perfil]

---

## 🙏 Agradecimientos

- **GitHub Pages** por hosting gratis
- **GitHub Actions** por CI/CD nativo
- **WCAG** por estándares de accesibilidad
- **Open Source Community** por inspiración

---

## 📚 Recursos Educativos

### HTML5 Semántico
- [MDN: HTML Semantic Elements](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#semantics_in_html)

### CSS Grid & Flexbox
- [CSS-Tricks: Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [CSS-Tricks: Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### Accesibilidad
- [WCAG 2.1 Quick Ref](https://www.w3.org/WAI/WCAG21/quickref/)
- [Web Accessibility by Google](https://www.udacity.com/course/web-accessibility--ud891)

### GitHub Actions
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Actions Marketplace](https://github.com/marketplace?type=actions)

### DevSecOps
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Shift-Left Testing](https://en.wikipedia.org/wiki/Shift-left_testing)

---

## 🎯 Hoja de Ruta (Roadmap)

```
Q1 2025: MVP actual (Landing + CI/CD)
Q2 2025: Dark mode + i18n
Q3 2025: Blog + formulario contacto
Q4 2025: PWA + Lighthouse CI
```

---

**Última actualización:** 4 de Marzo, 2025  
**Versión:** 1.0.0  
**Estado:** ✅ Producción

---

## ❓ FAQ

### ¿Por qué no usas React/Vue/Angular?

Para un portfolio estático, vanilla JavaScript es más rápido, más simple y no agrega dependencias. React es overkill aquí.

### ¿Por qué GitHub Pages?

Hosting gratis, integración nativa con Git, seguridad (HTTPS), y perfecto para portfolios.

### ¿Cómo actualizo contenido?

1. Edita `index.html` (texto y estructura)
2. Edita `styles.css` (colores, tipografía, layout)
3. Edita `script.js` (interactividad)
4. Haz `git push` → Automáticamente se publica

### ¿Puedo usar esto como template?

¡Claro! Fork, personaliza y adelante. Es MIT licensed.

### ¿Cómo agrego un proyecto nuevo?

Edita `#experiencia` o crea nueva sección `#proyectos` con mismo patrón de cards.

---

**Made with ❤️ by Roberto Fernández**