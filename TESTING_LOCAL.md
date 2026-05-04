# 🧪 Testing Local - Guía Rápida

Cómo probar el CI/CD pipeline localmente antes de hacer push a GitHub.

---

## 📋 Requisitos

- Node.js 18+ (`node --version`)
- npm (`npm --version`)
- Git

---

## 🚀 Instalación de Herramientas

### 1. Instalar html-validate

```bash
npm install -g html-validate
```

Verificar:
```bash
html-validate --version
```

### 2. Instalar stylelint

```bash
npm install -g stylelint stylelint-config-standard
```

Verificar:
```bash
stylelint --version
```

---

## ✅ Ejecutar Validaciones Locales

### HTML Validation

```bash
# Validar index.html con output legible
html-validate index.html --format=text

# Validar con salida JSON (para scripts)
html-validate index.html --format=json > report.json

# Validar todos los archivos HTML
html-validate **/*.html
```

**Ejemplo de salida:**
```
3:1   ✖  Unexpected element <script> (void-element)
5:12  ✖  Attribute "onclick" not allowed (use-semantic-elements)
```

### CSS Validation

```bash
# Crear configuración si no existe
cat > .stylelintrc.json << 'EOF'
{
  "extends": "stylelint-config-standard",
  "rules": {
    "no-descending-specificity": null,
    "selector-class-pattern": null,
    "declaration-no-important": "warning"
  }
}
EOF

# Validar CSS
stylelint "**/*.css" --formatter string

# Validar archivo específico
stylelint styles.css --formatter string

# Validar y generar reporte JSON
stylelint "**/*.css" --formatter json > css-report.json
```

**Ejemplo de salida:**
```
styles.css
 123:5  ✖  Unexpected duplicate selector ".btn" (no-duplicate-selectors)
```

---

## 🔍 Análisis Estático Manual

### Verificar Enlaces Internos

```bash
# Buscar todos los IDs en HTML
grep -oE 'id="[^"]*"' index.html | sort | uniq

# Buscar todos los referencias a IDs (#)
grep -oE 'href="#[^"]*"' index.html | sort | uniq

# Verificar que cada #link tenga su id="link" correspondiente
```

### Verificar Alt-Text

```bash
# Buscar imágenes sin alt
grep -oE '<img[^>]*>' index.html | grep -v 'alt='

# Buscar imágenes con alt
grep -oE '<img[^>]* alt="[^"]*"[^>]*>' index.html
```

### Verificar Meta Tags

```bash
# Buscar meta tags críticos
grep -E '<meta name="(viewport|description|charset)"' index.html

# Verificar <title>
grep '<title>' index.html

# Contar total de meta tags
grep -c '<meta' index.html
```

### Verificar Accesibilidad Básica

```bash
# Contar elementos semánticos
echo "Headers encontrados:"
grep -c '<header' index.html || echo "0"

echo "Nav encontrados:"
grep -c '<nav' index.html || echo "0"

echo "Main encontrados:"
grep -c '<main' index.html || echo "0"

echo "Footer encontrados:"
grep -c '<footer' index.html || echo "0"

echo "Atributos ARIA encontrados:"
grep -c 'aria-' index.html || echo "0"

# Verificar headings
echo "Headings detectados:"
grep -oE '<h[1-6]' index.html | sort | uniq -c
```

---

## 🧬 Script Automatizado (Bash)

Crea archivo `test-local.sh`:

```bash
#!/bin/bash

echo "🔍 Portfolio Testing Local"
echo "========================="
echo ""

# Validar HTML
echo "✅ HTML Validation..."
html-validate index.html --format=text || echo "❌ HTML tiene errores"
echo ""

# Validar CSS
echo "✅ CSS Validation..."
stylelint "**/*.css" --formatter string || echo "❌ CSS tiene errores"
echo ""

# Análisis estático
echo "✅ Static Analysis..."

# Enlaces
echo "📌 Enlaces internos:"
grep -oE 'href="#[^"]*"' index.html | sort | uniq

# Imágenes sin alt
echo "🖼️  Imágenes:"
IMAGES_NO_ALT=$(grep -oE '<img[^>]*>' index.html | grep -v 'alt=' || true)
if [ -z "$IMAGES_NO_ALT" ]; then
    echo "✅ Todas las imágenes tienen alt"
else
    echo "⚠️  Imágenes sin alt: $IMAGES_NO_ALT"
fi

echo ""
echo "📊 Tamaño de archivos:"
du -h index.html styles.css script.js

echo ""
echo "✨ Testing completado"
```

Ejecutar:
```bash
chmod +x test-local.sh
./test-local.sh
```

---

## 🐳 Docker (Opcional)

Si prefieres usar Docker sin instalar Node:

```bash
# Con Node image
docker run -it -v $(pwd):/app node:18 bash

# Dentro del contenedor
npm install -g html-validate stylelint stylelint-config-standard
html-validate index.html
```

---

## 🔧 Pre-commit Hook (Automático)

Validar código ANTES de hacer commit:

```bash
# Crear archivo .git/hooks/pre-commit
cat > .git/hooks/pre-commit << 'EOF'
#!/bin/bash

echo "🔍 Validando HTML y CSS antes de commit..."

html-validate index.html || exit 1
stylelint "**/*.css" || exit 1

echo "✅ Todo OK, proceediendo con commit"
exit 0
EOF

chmod +x .git/hooks/pre-commit
```

Ahora, si intentas hacer commit con código inválido, se bloquea automáticamente.

---

## 📊 Comparar Local vs GitHub Actions

| Paso | Local | GitHub Actions |
|------|-------|---|
| Instalar herramientas | Manual | Automático |
| Ejecutar validación | Manual | Automático |
| Reportes | Local | En Actions UI |
| Tiempo | ~5s | ~30-45s |
| Errores bloquean push | Con pre-commit | Siempre |

---

## 🚨 Troubleshooting

### Error: "html-validate not found"
```bash
npm install -g html-validate
# O verifica PATH: echo $PATH
```

### Error: "Command not found: stylelint"
```bash
npm install -g stylelint stylelint-config-standard
```

### Error: "Permission denied" (pre-commit)
```bash
chmod +x .git/hooks/pre-commit
```

### HTML válido localmente pero falla en Actions
- Asegúrate de tener versiones iguales
- Limpia cache: `npm cache clean --force`
- Re-instala: `npm install -g html-validate@latest`

---

## 📚 Workflow Recomendado

1. **Edita código** (`index.html`, `styles.css`, `script.js`)
2. **Ejecuta validación local**:
   ```bash
   ./test-local.sh
   ```
3. **Si pasa, haz commit**:
   ```bash
   git add .
   git commit -m "Descripción cambio"
   ```
4. **Push**:
   ```bash
   git push origin main
   ```
5. **Verifica en GitHub Actions** (backup automático)

---

## 🎯 Checklist Antes de Push

- [ ] Ejecuté `./test-local.sh` y pasó
- [ ] No hay imágenes sin alt-text
- [ ] No hay enlaces rotos (#seccion existe)
- [ ] Meta tags presentes
- [ ] Elementos semánticos correctos
- [ ] Sin warnings de accesibilidad

---

## 📞 Ayuda

Si algo falla, verifica:

1. **Versión de Node**: `node --version` (debe ser 18+)
2. **Herramientas instaladas**: `npm list -g --depth=0`
3. **Archivo existe**: `ls -la index.html`
4. **Permisos**: `chmod +x test-local.sh`
5. **PATH**: `which html-validate`

Si persiste, documenta el error y abre issue en GitHub.

---

**Last updated:** 4 de Marzo, 2025
