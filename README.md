# API-2025

## ¿Qué es una API?
Una **API** (*Application Programming Interface*) es un conjunto de reglas y protocolos que permite que diferentes aplicaciones se comuniquen entre sí. Facilita la integración de servicios y funcionalidades sin necesidad de conocer los detalles internos de su implementación.

Ejemplo: Una API de clima permite a una aplicación obtener información del tiempo sin necesidad de desarrollar su propio sistema meteorológico.

## ¿Qué es REST?
REST: (*Representational State Transfer*) es un estilo de arquitectura para el desarrollo de servicios web. Se basa en el uso de los estándares HTTP y en operaciones como **GET, POST, PUT y DELETE** para manipular recursos de manera sencilla y escalable.

Principios clave de REST:
- Cliente-Servidor: Separación entre frontend y backend.
- Sin estado (*Stateless*): Cada petición contiene toda la información necesaria.
- Caché: Permite mejorar el rendimiento almacenando respuestas.
- Interfaz uniforme: Uso de URIs bien definidas para acceder a recursos.

## ¿Qué es RESTful?
El término RESTful se usa para describir una API que sigue los principios y restricciones de REST. Es decir, una **API RESTful** es una API que cumple con las normas establecidas por la arquitectura REST, asegurando que la comunicación entre sistemas sea eficiente, escalable y fácil de mantener.

Ejemplo de una API RESTful:
- GET /usuarios: Obtiene la lista de usuarios.
- POST /usuarios: Crea un nuevo usuario.
- PUT /usuarios/1: Actualiza los datos del usuario con ID 1.
- DELETE /usuarios/1: Elimina el usuario con ID 1.