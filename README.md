# Tubarrio.pe - Plataforma de Negocios Locales

Una plataforma web moderna para conectar negocios locales con sus clientes, desarrollada con Next.js 13 y TypeScript.

## 🚀 Características

- **Landing Page Moderna**: Diseño responsive con componentes de shadcn/ui
- **Generación de PDFs**: Sistema de proformas automáticas
- **Planes de Precios**: Múltiples opciones para diferentes tipos de negocio
- **Calculadora de Ahorros**: Herramienta interactiva para mostrar beneficios
- **Formulario de Contacto**: Integración con generación de proformas

## 🛠️ Tecnologías

- **Framework**: Next.js 13 (App Router + Pages API)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Componentes**: Radix UI + shadcn/ui
- **PDF**: jsPDF + html2canvas
- **Iconos**: Lucide React

## 📦 Instalación

```bash
# Clonar el repositorio
git clone <repository-url>
cd project

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev
```

## 🌐 Despliegue en Vercel

### Preparación

1. **Build local exitoso**: ✅ Verificado
2. **Configuración optimizada**: ✅ next.config.js configurado
3. **Variables de entorno**: ✅ .env.example creado
4. **Archivo vercel.json**: ✅ Configuración de despliegue lista

### Pasos para desplegar

1. **Conectar con Vercel**:
   - Ve a [vercel.com](https://vercel.com)
   - Conecta tu repositorio de GitHub
   - Selecciona este proyecto

2. **Configurar variables de entorno** (opcional):
   ```
   NEXT_PUBLIC_APP_URL=https://tu-dominio.vercel.app
   NEXT_PUBLIC_COMPANY_NAME=Tubarrio.pe
   NEXT_PUBLIC_COMPANY_ADDRESS=Lima - Perú
   NEXT_PUBLIC_COMPANY_PHONE=+51 901 426 737
   NEXT_PUBLIC_COMPANY_EMAIL=ingcristian.araya@gmail.com
   ```

3. **Desplegar**:
   - Vercel detectará automáticamente Next.js
   - El build se ejecutará automáticamente
   - La aplicación estará disponible en tu URL de Vercel

### Configuración incluida

- ✅ **Framework**: Next.js detectado automáticamente
- ✅ **Build Command**: `npm run build`
- ✅ **Output Directory**: `.next`
- ✅ **Node.js Runtime**: 18.x para API routes
- ✅ **Security Headers**: Configurados en vercel.json
- ✅ **API Routes**: Configuradas para funcionar en producción

## 📁 Estructura del Proyecto

```
project/
├── app/                    # App Router (Next.js 13)
├── components/            # Componentes React
│   ├── landing/          # Componentes de la landing page
│   └── ui/               # Componentes de UI (shadcn)
├── pages/api/            # API Routes
├── public/               # Assets estáticos
├── templates/            # Plantillas HTML
├── vercel.json           # Configuración de Vercel
└── .env.example          # Variables de entorno de ejemplo
```

## 🔧 Scripts Disponibles

```bash
npm run dev      # Desarrollo
npm run build    # Build de producción
npm run start    # Servidor de producción
npm run lint     # Linting
```

## 📋 Funcionalidades Principales

### 1. Generación de PDFs
- Endpoint: `/api/pdf`
- Genera proformas personalizadas
- Incluye información de la empresa y planes

### 2. Planes de Precios
- **Listing Básico**: S/15/mes
- **Listing + Banner**: S/25/mes  
- **Landing Page**: S/150 + S/15/mes listing
- **Web Corporativa**: S/300 + S/15/mes listing
- **Tienda Virtual**: S/500 + S/15/mes listing

### 3. Calculadora de Ahorros
- Comparación con competidores
- Cálculo automático de beneficios
- Interfaz interactiva

## 🚀 Estado del Proyecto

✅ **Listo para producción**
- Build exitoso sin errores
- API endpoints funcionando
- Componentes optimizados
- Configuración de Vercel completa

## 📞 Contacto

- **Email**: ingcristian.araya@gmail.com
- **Teléfono**: +51 901 426 737
- **Ubicación**: Lima - Perú