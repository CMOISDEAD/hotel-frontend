# Hotels Cocora (Frontend)


# Hotels Cocora

Este es un proyecto de aplicación web desarrollado en React que te permite gestionar un hotel de forma administrativa y comercial. Está conectado a un servidor backend construido con Express.js, utiliza Prisma como ORM (Object-Relational Mapping) y una base de datos alojada en MongoDB Atlas.

## Características

- **Gestión de Hoteles:** Agrega, actualiza y elimina información sobre hoteles.
- **Búsqueda Avanzada:** Encuentra hoteles por ubicación, precio, comodidades, y más.
- **Interfaz Amigable:** Una interfaz de usuario intuitiva y atractiva para una experiencia de usuario óptima.


## Cómo Ejecutar el Proyecto

Sigue estos pasos para ejecutar localmente el proyecto Hotels Cocora:

### 1. Clona el Repositorio

```
git clone https://github.com/tuusuario/hotels-cocora.git
cd hotels-cocora
```

### 2. Instala las Dependencias

Asegúrate de tener Node.js y npm (o yarn) instalados en tu sistema. Luego, instala las dependencias del cliente y del servidor.

```bash
# Instala las dependencias del cliente
cd client
npm install

# Regresa al directorio principal
cd ..

# Instala las dependencias del servidor
cd server
npm install
```

### 3. Configura las Variables de Entorno

En el directorio `server`, crea un archivo `.env` y configura las variables de entorno necesarias, como la URL de conexión a tu base de datos MongoDB Atlas y cualquier otra configuración relevante.

```env
MONGODB_URI=URL_de_tu_base_de_datos
OTRA_VARIABLE=valor
```

### 4. Ejecuta la Aplicación

En el directorio principal, puedes ejecutar tanto el servidor como el cliente simultáneamente utilizando [concurrently](https://www.npmjs.com/package/concurrently).

```bash
npm run dev
```

Esto iniciará tanto el servidor Express como la aplicación React.

### 5. Accede a la Aplicación

Abre tu navegador web y accede a [http://localhost:3000](http://localhost:3000) para ver la aplicación Hotels Cocora en acción.

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas contribuir a este proyecto, crea un Pull Request y lo revisaremos juntos.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

¡Esperamos que disfrutes utilizando Hotels Cocora! Si tienes alguna pregunta o sugerencia, no dudes en abrir un problema o ponerte en contacto con nosotros.
```

Asegúrate de reemplazar `tuusuario` en el enlace de clonación y personalizar cualquier otra información relevante según tu proyecto. ¡Espero que esto te sea útil!
