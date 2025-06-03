# Rokos Barber Club

Sitio web oficial de Rokos Barber Club - Tu destino para el mejor servicio de barbería.

## 🚀 Despliegue Automático

Este proyecto está configurado para desplegarse automáticamente en GitHub Pages con dominio personalizado `rokos.cl`.

### Configuración actual:
- **Dominio**: https://rokos.cl
- **Despliegue**: Automático via GitHub Actions
- **CDN**: Cloudflare
- **Hosting**: GitHub Pages

## 🛠️ Comandos Disponibles

### Desarrollo
```bash
npm start                # Servidor de desarrollo
npm run build           # Build básico
npm run build:prod      # Build para producción con base-href configurado
npm run deploy          # Build y deploy manual a GitHub Pages
```

### Testing
```bash
npm test               # Tests unitarios
npm run test:watch     # Tests en modo watch
```

## 📦 Despliegue

El despliegue es **completamente automático**:
1. Haz push a la rama `main`
2. GitHub Actions construye y despliega automáticamente
3. El sitio se actualiza en https://rokos.cl en ~5 minutos

### Flujo de despliegue:
1. **Push a main** → GitHub Actions se ejecuta
2. **Build Angular** → Genera archivos optimizados
3. **Deploy** → Publica en gh-pages branch
4. **Cloudflare** → Distribuye globalmente

## 🌐 Configuración DNS

Para detalles completos sobre la configuración DNS con NIC Chile y Cloudflare, revisa [DNS-CONFIG.md](./DNS-CONFIG.md).

## 🏗️ Tecnologías

- **Framework**: Angular 17
- **UI**: Angular Material + Bootstrap Icons
- **Estilos**: SCSS
- **Hosting**: GitHub Pages
- **CDN**: Cloudflare
- **CI/CD**: GitHub Actions

## 📁 Estructura del Proyecto

```
src/
├── app/
│   ├── components/     # Componentes reutilizables
│   ├── pages/         # Páginas de la aplicación
│   └── styles/        # Estilos globales
└── assets/           # Recursos estáticos
```

## 🔧 Desarrollo Local

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Ejecutar servidor de desarrollo**:
   ```bash
   npm start
   ```

3. **Navegar a**: `http://localhost:4200/`

## 📱 Funcionalidades

- ✅ Diseño responsive
- ✅ Navegación SPA con Angular Router
- ✅ Integración con WhatsApp
- ✅ Galería de servicios
- ✅ Información de contacto y ubicación
- ✅ SEO optimizado
- ✅ PWA ready

## 🚀 Performance

- Bundle inicial optimizado
- Lazy loading de rutas
- Imágenes optimizadas
- CDN global via Cloudflare

---

**URL en vivo**: https://rokos.cl
