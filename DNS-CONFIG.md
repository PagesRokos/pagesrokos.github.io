# Configuración DNS para rokos.cl

## Configuración en NIC Chile

1. **Accede al panel de control de NIC Chile** donde administras tu dominio `rokos.cl`

2. **Modifica los Name Servers** para que apunten a Cloudflare:
   ```
   abel.ns.cloudflare.com
   dina.ns.cloudflare.com
   ```

## Configuración en Cloudflare

### Paso 1: Agregar el dominio a Cloudflare
1. Inicia sesión en tu cuenta de Cloudflare
2. Haz clic en "Add a Site"
3. Ingresa tu dominio: `rokos.cl`
4. Selecciona el plan gratuito
5. Cloudflare escaneará automáticamente tus registros DNS existentes

### Paso 2: Configurar registros DNS
Agrega los siguientes registros DNS en Cloudflare:

#### Registros principales para GitHub Pages:
```
Tipo: A
Nombre: @
Contenido: 185.199.108.153
TTL: Auto
Proxy: Activado (naranja)

Tipo: A
Nombre: @
Contenido: 185.199.109.153
TTL: Auto
Proxy: Activado (naranja)

Tipo: A
Nombre: @
Contenido: 185.199.110.153
TTL: Auto
Proxy: Activado (naranja)

Tipo: A
Nombre: @
Contenido: 185.199.111.153
TTL: Auto
Proxy: Activado (naranja)
```

#### Registro para www:
```
Tipo: CNAME
Nombre: www
Contenido: pagesrokos.github.io
TTL: Auto
Proxy: Activado (naranja)
```

### Paso 3: Configurar SSL/TLS
1. Ve a SSL/TLS → Overview
2. Selecciona "Full (strict)" como modo de cifrado
3. Ve a SSL/TLS → Edge Certificates
4. Activa "Always Use HTTPS"
5. Activa "HTTP Strict Transport Security (HSTS)"

### Paso 4: Configurar Page Rules (Opcional)
Para redireccionar www a dominio principal:
```
URL: www.rokos.cl/*
Configuración: Forwarding URL (301 - Permanent Redirect)
Destino: https://rokos.cl/$1
```

## Configuración en GitHub

### Paso 1: Configurar GitHub Pages
1. Ve a tu repositorio en GitHub: `PagesRokos/pagesrokos.github.io`
2. Ve a Settings → Pages
3. En "Source" selecciona "Deploy from a branch"
4. Selecciona la rama "gh-pages" (se creará automáticamente con GitHub Actions)
5. En "Custom domain" ingresa: `rokos.cl`
6. Marca "Enforce HTTPS"

### Paso 2: Verificar despliegue automático
El archivo `.github/workflows/deploy.yml` se encargará de:
- Construir la aplicación Angular automáticamente
- Desplegar a GitHub Pages cada vez que hagas push a main
- Mantener el archivo CNAME con tu dominio personalizado

## Comandos útiles para desarrollo

### Construcción y despliegue local
```bash
# Construir para producción
npm run build:prod

# Desplegar manualmente (si es necesario)
npm run deploy
```

### Verificar la construcción
```bash
# Servir localmente la versión de producción
npx http-server dist/rokos-barber-club/browser -p 8080
```

## Tiempos de propagación
- **Cambios en NIC Chile**: 24-48 horas
- **Cambios en Cloudflare**: 5-10 minutos
- **GitHub Pages**: 5-10 minutos después del despliegue

## Verificación
1. Espera la propagación DNS (usa https://dnschecker.org/)
2. Tu sitio estará disponible en: `https://rokos.cl`
3. GitHub Actions se ejecutará automáticamente en cada push

## Troubleshooting
- Si hay problemas con el dominio personalizado, verifica que el archivo CNAME esté presente en la rama gh-pages
- Si las rutas no funcionan, verifica que el archivo 404.html esté presente
- Para depurar DNS, usa herramientas como `nslookup` o `dig`
