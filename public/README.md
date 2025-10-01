# Carpeta Public - Recursos Estáticos

Esta carpeta contiene todos los recursos estáticos del proyecto que serán servidos directamente por Next.js.

## Estructura de Carpetas

### 📁 `/images`
Contiene imágenes generales del sitio web:
- Fotos de productos
- Imágenes de fondo
- Capturas de pantalla
- Ilustraciones

### 📁 `/icons`
Contiene iconos y elementos gráficos pequeños:
- Iconos de navegación
- Iconos de características
- Elementos decorativos
- Favicons

### 📁 `/logos`
Contiene logotipos y elementos de marca:
- Logo principal de Tubarrio.pe
- Logos de socios
- Variaciones del logo (claro/oscuro)

## Uso en el Código

Para referenciar archivos desde esta carpeta en tu código:

```jsx
// Imagen
<img src="/images/ejemplo.jpg" alt="Descripción" />

// Icono
<img src="/icons/icono.svg" alt="Icono" />

// Logo
<img src="/logos/logo.png" alt="Logo Tubarrio" />
```

## Formatos Recomendados

- **Imágenes**: JPG, PNG, WebP
- **Iconos**: SVG (preferido), PNG
- **Logos**: SVG (preferido), PNG

## Optimización

- Comprime las imágenes antes de subirlas
- Usa formatos modernos como WebP cuando sea posible
- Considera usar SVG para iconos y logos para mejor escalabilidad