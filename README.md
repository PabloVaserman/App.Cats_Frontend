# Gatos en Adopción (en revisión)

La aplicación "Gatos en Adopción" es una plataforma que permite a los usuarios administrar información detallada sobre gatos que se ofrecen en adopción responsable, incluyendo su nombre, raza, peso, temperamento, descripción, imagen y contacto del propietario. La aplicación facilita la creación, lectura, actualización y eliminación de registros de gatos tanto desde la base de datos interna como a través de una API externa de imágenes de gatos.

## 

Especificaciones Técnicas

Tecnologías Utilizadas: React, Next, Node.js, Express.js, Mongoose, Axios.

Base de Datos: MongoDB.

API Externa: "https://api.thecatapi.com/v1/images/search".

Se utilizaron funciones asíncronas para operaciones de base de datos y llamadas a la API.

Se implementa un carrusel de imágenes de gatos, donde se muestra cada imagen en un slide individual.

Especificaciones sobre la Captura y el manejo de errores en las operaciones CRUD:

La aplicación implementa un manejo de errores personalizado para capturar y gestionar excepciones de manera adecuada en diferentes situaciones.

* Try-Catch en Controladores: Cada controlador de la aplicación utiliza bloques try-catch para envolver las operaciones asincrónicas, lo que permite detectar y manejar errores de forma controlada.

* Respuestas de Error Consistentes: En caso de que ocurra un error durante la ejecución de alguna operación, se envían respuestas de error consistentes a los clientes con códigos de estado apropiados (404 para recursos no encontrados, 500 para errores internos del servidor, etc.).

* Logging de Errores: Se implementa un sistema de loggeo de errores para registrar los detalles de las excepciones, lo que facilita el seguimiento y la depuración de problemas en la aplicación.

* Mensajes de Error Claros: Los mensajes de error proporcionados en las respuestas se diseñan de manera clara y descriptiva para ayudar a los desarrolladores a identificar y solucionar los problemas de manera efectiva.

* Manejo de Excepciones Específicas: Dependiendo del tipo de error que se produzca (por ejemplo, error de validación, error de base de datos, error de red), la aplicación maneja las excepciones de forma específica para ofrecer respuestas adecuadas y orientadas al contexto.

* Testing de Errores: Se recomienda realizar pruebas exhaustivas de manejo de errores para garantizar que la aplicación responda de manera robusta ante diversas situaciones de falla y que los mensajes de error sean informativos y útiles para los usuarios finales y los desarrolladores.


Funcionalidades Principales:

Crear Gato: Permite agregar un nuevo gato a la base de datos con todos sus detalles.
Obtener Gatos de la Base de Datos: Recupera todos los gatos almacenados en la base de datos y los muestra.
Obtener Gato por ID: Permite buscar un gato específico por su ID en la base de datos.
Obtener Gatos de la API Externa: Realiza una llamada a la API externa para obtener imágenes de gatos y las muestra.
Actualizar Gato: Permite modificar la información de un gato existente en la base de datos.
Eliminar Gato: Marca un gato como inactivo en la base de datos, manteniendo el registro pero deshabilitando su visualización.


## 

El Backend proporciona funcionalidades para la gestión de gatos, incluyendo operaciones básicas como la obtención de listados, agregar, editar y eliminar gatos, todo ello con validaciones adecuadas y seguridad en la configuración del servidor.

ESTRUCTURA

Rutas y Controladores:

Define diversas rutas como la obtención de listados de gatos desde la base de datos y la API, así como la capacidad de agregar, editar y eliminar gatos.

Utiliza controladores especializados para manejar las operaciones CRUD de los gatos.

Middlewares de Validación:

Implementa middlewares de validación para asegurar la integridad de los datos ingresados, como la validación del nombre, descripción y correo electrónico al agregar un gato, y la verificación del ID al editar y eliminar gatos.

Instancia del Servidor:

Crea una instancia del servidor mediante la clase "Server", que se encarga de la configuración y manejo de las solicitudes entrantes.

Configuración del Servidor:

Utiliza "dotenv" para cargar las variables de entorno y mantener la configuración segura y separada del código.

Inicia el servidor para que esté activo y pueda procesar las solicitudes de los clientes.

