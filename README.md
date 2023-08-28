# Hotels (Frontend)

Este es un proyecto de aplicación web desarrollado en React que te permite gestionar un hotel de forma administrativa y comercial. Está conectado a un servidor backend construido con Express.js, utiliza Prisma como ORM (Object-Relational Mapping) y una base de datos alojada en MongoDB Atlas.

## Características

- **Gestión de Hoteles:** Agrega, actualiza y elimina información sobre hoteles.
- **Búsqueda Avanzada:** Encuentra hoteles por ubicación, precio, comodidades, y más.
- **Interfaz Amigable:** Una interfaz de usuario intuitiva y atractiva para una experiencia de usuario óptima.
- **Diseño Responsivo:** Una aplicación web que se adapta a cualquier dispositivo, ya sea un teléfono móvil, una tableta o una computadora de escritorio.
- **Base de Datos en la Nube:** Una base de datos MongoDB alojada en la nube con MongoDB Atlas.

## Cómo Ejecutar el Proyecto

### Requisitos Previos

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- Clonar el backend del hotel [Backend](https://github.com/CMOISDEAD/hotel-backend)
- Seguir los pasos de instalacion del backend.

Sigue estos pasos para ejecutar localmente el proyecto:

```bash
# Clona el repositorio
git clone https://github.com/CMOISDEAD/hotel-fronted.git

# Accede al directorio del proyecto
cd hotel-frontend
```

Asegúrate de tener Node.js y npm (o yarn) instalados en tu sistema. Luego, instala las dependencias del cliente y del servidor.

```bash
# Instala las dependencias del cliente
npm install
```

Crea un archivo `.env` en el directorio raíz del proyecto y agrega las siguientes variables de entorno a tu caso:

```env
VITE_API_URL=http://localhost:5000
```

Ejecuta el siguiente comando para iniciar la aplicacion frontend:

```bash
npm run dev
```

Con esto ya se estaria ejecutando la aplicacion frontend en el puerto `5173`.

Abre tu navegador web y accede a [http://localhost:5173](http://localhost:5171) para ver la aplicación Hotel en acción.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.
