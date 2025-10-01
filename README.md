# 2024-birrete-es
Es un punto de encuentro entre profesionales y clientes.
### Breve descripción.
**Birrete-es** será una aplicación multiplataforma, es decir, se pueda ejecutar de la misma forma en Android, iOs y como aplicación web. El objetivo es permitir la búsqueda y localización de profesionales de todo tipo en un único lugar. La idea consiste en crear un buscador de profesionales previamente registrados por ellos mismos, que puedan interactuar con los clientes, ser valorados por estos y recibir recomendaciones de cliente a cliente.
Los clientes que realicen búsquedas en una determinada área geográfi ca deberían visualizar a los profesionales que tienen ofi cinas o ejercen su actividad en dicha zona. Mediante un botón “Más” o a través de paginación, podrán acceder a profesionales de otras áreas geográfi cas.
## Objetivos
La aplicación Birrete-es tiene como objetivo principal facilitar la conexión entre profesionales de distintos sectores y usuarios que buscan servicios específicos en su área geográfica. A través de una interfaz intuitiva, los usuarios podrán visualizar perfiles de profesionales cercanos, filtrar por categorías, y contactar directamente con ellos. La app está diseñada para ser accesible tanto para usuarios registrados como invitados, promoviendo la visibilidad y el alcance de los profesionales.
### Objetivos funcionales
- **Geolocalización de profesionales:** Mostrar en tiempo real los profesionales disponibles cerca de la ubicación del usuario.
- **Registro y gestión de perfiles profesionales:** Permitir a los profesionales crear y editar su perfil con datos como especialidad, experiencia, ubicación y contacto.
- **Búsqueda y filtrado inteligente:** Los usuarios podrán buscar profesionales por nombre, categoría, ubicación, disponibilidad, etc.
- **Acceso para usuarios registrados e invitados:** Ofrecer funcionalidades básicas para invitados y opciones avanzadas para usuarios registrados.
- **Sistema de contacto directo:** Facilitar la comunicación entre cliente y profesional mediante chat, correo o llamada.
- **Valoraciones y comentarios (futuro):** Permitir que los usuarios califiquen y comenten la experiencia con los profesionales.
- **Gestión de autenticación y roles:** Diferenciar entre tipos de usuarios (cliente, profesional, administrador).
- **Panel de administración:** Para gestionar usuarios, categorías, reportes y contenido.

### Objetivos técnicos
Desde el punto de vista tecnológico, Birrete-es se desarrollará utilizando React Native y EXPO para la aplicación móvil, Web y Spring Boot para el backend. Esta combinación permite una arquitectura moderna, escalable y multiplataforma. Se prioriza la seguridad, el rendimiento y la facilidad de mantenimiento, integrando servicios como geolocalización, bases de datos relacionales, y APIs RESTful para una comunicación eficiente entre cliente y servidor.
#### **Aspectos técnicos clave:**
- **Frontend en React Native y framework EXPO y TypeScrip**: Desarrollo de una app móvil nativa para Android e iOS y Web con una sola base de código.
- **Backend en Spring Boot, Java, Spring Security:** API REST robusta para gestionar usuarios, perfiles, búsquedas y autenticación.
- **Integración con servicios de geolocalización:** Google Maps API.
- **Seguridad y autenticación con JWT + Spring Security:** Implementación de JWT para sesiones seguras y control de acceso.
- **Base de datos relacional (MySQL):** Para almacenar información de usuarios, perfiles y registros.
- **Comunicación cliente-servidor eficiente:** Uso de JSON y HTTP para intercambiar datos entre frontend y backend.
- **Despliegue en la nube:** Uso de servicios como AWS, Azure o Heroku para alojar el backend y la base de datos.
- **Control de versiones:** Git + GitHub
- **CI/CD:** GitHub Actions o Jenkins
- **Pruebas:** Unitarias y de integración para asegurar calidad y estabilidad. JUnit (backend) y Jest (frontend)
- **Escalabilidad modular:** Arquitectura pensada para añadir nuevas funcionalidades sin afectar el rendimiento.
## Metodología
### Enfoque general
El desarrollo de Birrete-ES se llevará a cabo mediante una metodología iterativa e incremental, que permite construir la aplicación en ciclos cortos, con entregas funcionales al final de cada fase. Este enfoque facilita la validación continua, la mejora progresiva y la adaptación a cambios durante el proceso. Se aplicarán buenas prácticas de ingeniería de software, control de calidad periódico y documentación técnica.
### Fases del proyecto
### *Fase 1:* Definición de funcionalidades y pantallas
Fechas: 1 al 15 de septiembre de 2025
Se establecerán los objetivos funcionales y técnicos del proyecto, junto con el diseño de las pantallas principales de la aplicación.
Secciones clave:
- “Objetivos funcionales”
- “Funcionalidades clave”
- “Objetivos técnicos”
- “Aspectos técnicos clave”
- Bocetos y estructura de navegación
### *Fase 2:* Configuración del repositorio, pruebas y CI
Fechas: 15 de septiembre al 15 de octubre de 2025
Se configurarán las tecnologías principales: React Native, Spring Boot, PostgreSQL, y el repositorio en GitHub.
Se establecerán pruebas automatizadas (Jest, JUnit) y flujos de integración continua (CI) con GitHub Actions para validar cada commit y mantener la calidad del código.
### *Fase 3:* Versión 0.1 – Funcionalidad básica y Docker
Fechas: 15 de octubre al 15 de diciembre de 2025
Se implementarán las funcionalidades esenciales:
- Registro de usuarios
- Creación de perfiles profesionales
- Geolocalización básica
- Contenedorización del backend con Docker
Release 0.1: Versión funcional mínima
### *Fase 4:* Versión 0.2 – Funcionalidad intermedia
Fechas: 15 de diciembre de 2025 al 1 de marzo de 2026
Se añadirán funcionalidades avanzadas:
- Búsqueda y filtrado por especialidad y ubicación
- Contacto directo entre usuarios y profesionales
- Roles de usuario
Release 0.2: Versión ampliada
### *Fase 5:* Versión 1.0 – Funcionalidad avanzada
Fechas: 1 de marzo al 15 de abril de 2026
Se optimizará la app, se reforzará la seguridad, se realizarán pruebas de rendimiento y se ajustará la interfaz.
Release 1.0: Versión final para presentación
### *Fase 6:* Escritura de la memoria
Fechas: 15 de abril al 15 de mayo de 2026
Se redactará la documentación técnica y funcional del proyecto, incluyendo arquitectura, decisiones de diseño, pruebas realizadas y resultados.
### *Fase 7:* Defensa del proyecto
Fecha: 15 de junio de 2026
Se realizará la presentación final ante jurado o comité evaluador:
- Diapositivas
- Demo funcional
- Resumen ejecutivo
- Argumentario para exposición oral
## A continuación de muestra una tabla con las etapas definidas anteriormente, de manera resumida.
<img width="702" height="379" alt="image" src="https://github.com/user-attachments/assets/5c77b8ed-6975-45bf-9c8a-d81f95490a45" />

## Diagrama Gantt

<img width="696" height="431" alt="image" src="https://github.com/user-attachments/assets/c568a2ab-3ee8-48ad-8d5f-fd799c2a2e02" />


## Funcionalidades detalladas
### 1. Pantallas y Navegación
![Diagrama-navegación](https://github.com/user-attachments/assets/c20a9a4e-60ee-40ff-a346-098d08bb32c9)

### 2. Entidades
**1. Usuario.**
Entidad base que representa a cualquier persona que interactúa con la aplicación.
Atributos comunes: id, nombre, rol
Roles derivados:
- Usuario invitado
- Usuario registrado
- Usuario profesional
- Empresa
- Administrador

**2. UsuarioInvitado.**
Persona que accede sin registrarse.
Permisos:
- Visualizar perfiles públicos de profesionales
- Buscar por ubicación y categoría
- No puede contactar ni guardar favoritos

**3. UsuarioRegistrado.**
Cliente con cuenta activa.
Atributos adicionales: teléfono, dirección, ubicación, username, password
Permisos:
- Guardar favoritos
- Contactar profesionales
- Valorar servicios
- Acceder a funcionalidades completas

**4. Profesional.**
Persona que ofrece servicios.
Atributos:
- id, nombre, teléfono, dirección, ubicación, especialidades, disponibilidad, likes, stars, comments, clientes
Permisos:
- Crear y editar perfil
- Recibir mensajes
- Ver estadísticas
- Actualizar datos

**5. UsuarioProfesional.**
Extiende la entidad Profesional con funcionalidades específicas para usuarios que gestionan su propio perfil.
Permisos adicionales:
- Crear perfil
- Editar perfil
- Ver estadísticas de interacción

**6. Empresa.**
Entidad que representa a una organización que agrupa varios profesionales.
Atributos: id, nombre, profesionales[]
Permisos:
- Gestionar perfiles de empleados
- Ver métricas agrupadas
- Publicar servicios destacados

**7. Administrador.**
Usuario con privilegios totales sobre el sistema.
Atributos: id, nombre, teléfono, username, password
Permisos:
- Gestionar usuarios y roles
- Moderar contenido
- Configurar parámetros del sistema
- Supervisar seguridad y rendimiento

**8. RolUsuario (Enumeración).**
Define los tipos de usuario en el sistema:
- INVITADO
- REGISTRADO
- PROFESIONAL
- EMPRESA
- ADMINISTRADOR
- 
### Diagrama UML

<img width="748" height="625" alt="image" src="https://github.com/user-attachments/assets/cdaa9ff8-5a7f-4e20-98cd-5860710a5d1b" />


### 3. Permisos de usuarios
#### Usuario invitado
Acceso limitado sin registro.
- Ver perfiles públicos de profesionales cercanos
- Buscar por ubicación y categoría
- Acceder a información básica de contacto
- No puede interactuar ni guardar favoritos
- No puede publicar ni registrarse como profesional
#### Usuario registrado
Cliente con cuenta activa.
- Acceder a todas las funcionalidades de búsqueda
- Guardar profesionales como favoritos
- Contactar directamente con profesionales
- Editar su perfil personal
- Valorar y comentar servicios (si está habilitado)
- No puede ofrecer servicios ni crear perfiles profesionales
#### Usuario profesional
Persona que ofrece servicios.
- Crear y editar su perfil profesional
- Establecer ubicación, especialidad, disponibilidad y contacto
- Recibir mensajes de clientes
- Ver estadísticas de visitas a su perfil
- No puede administrar otros usuarios ni acceder a datos internos
#### Empresa
Entidad que representa a varios profesionales.
- Crear perfiles múltiples bajo una cuenta corporativa
- Gestionar perfiles de empleados o asociados
- Acceder a métricas agrupadas
- Publicar promociones o servicios destacados
- No puede modificar usuarios externos ni acceder a funciones administrativas
#### Administrador
Rol con control total del sistema.
- Gestionar usuarios, profesionales y empresas
- Validar o suspender perfiles
- Acceder a estadísticas globales
- Configurar categorías, filtros y parámetros del sistema
- Supervisar contenido publicado y moderar comentarios
- Gestionar seguridad, backups y despliegues

### 4. Imágenes
**Imagen de inicio de nuestra Web**

<img width="1280" height="800" alt="img-user-select" src="https://github.com/user-attachments/assets/bc7010bc-80f7-4716-a5b8-5335c20c264b" />

**Imagen de registro de profesionales**

<img width="1280" height="800" alt="img-form-profesional" src="https://github.com/user-attachments/assets/487738e9-5121-4356-8dfa-02c25f447e53" />

**Imagen de registro de clientes**

<img width="1280" height="800" alt="img-form-cliente" src="https://github.com/user-attachments/assets/70bc4c99-328d-4a25-8d6c-edea99ac038b" />


**Imagen de registro de Empresas**

<img width="1280" height="800" alt="img-form-empresa" src="https://github.com/user-attachments/assets/219a3039-88e3-471e-9678-aaea7b421f69" />

**Imagen de incio de sesión**

<img width="1280" height="800" alt="img-inicio-sesion" src="https://github.com/user-attachments/assets/f0d3aca9-c8e1-4ec3-88ac-22b08d1c5233" />

**Imagen de perfil de usuario**

<img width="1280" height="800" alt="img-perfil-cliente-profesional" src="https://github.com/user-attachments/assets/6236efe3-397f-4b5b-907a-655341d276d2" />


**Imagen de perfil de una empresa**

<img width="1280" height="800" alt="img-perfil-empresa" src="https://github.com/user-attachments/assets/ed149016-ec4c-4f03-b881-32211d56f5fd" />

**Imagen de home page búsqueda y filtrado**

<img width="1280" height="800" alt="img-home-1" src="https://github.com/user-attachments/assets/8ae44dd1-8dcc-472c-b9cc-b589792a9b82" />

**Imagen de home page profesionales patrocinados**

<img width="1280" height="800" alt="img-home-2" src="https://github.com/user-attachments/assets/78bde123-34f6-4710-a4ec-cb7fb22fa855" />

**Imagen de home page empresas patrocinados**

<img width="1280" height="800" alt="img-home-3" src="https://github.com/user-attachments/assets/6a7409eb-efe8-4b41-b0d7-1f0ed28f4e0d" />

**Imagen de home page apartado promociones especiales**

<img width="1280" height="800" alt="img-home-4" src="https://github.com/user-attachments/assets/36a6a900-7b42-48c4-a859-df7e8e24daf1" />

**Imagen de home page apartado de exploración según el mapa**

<img width="1280" height="800" alt="img-home-5" src="https://github.com/user-attachments/assets/fcbbf5be-6572-48cd-a66e-a8c2727fa28a" />

**Imagen de home page apartado de footer**

<img width="1280" height="800" alt="img-home-6" src="https://github.com/user-attachments/assets/1aaee2b3-ff31-447f-8c1e-443eff7e62b8" />

**Imagen de home page apartado de resultados de búsqueda de profesionales**

<img width="1280" height="800" alt="img-list-búsqueda" src="https://github.com/user-attachments/assets/d95ae12f-d892-4006-80f8-3a1b1c420878" />

**Imagen de home page apartado de resultados al dar clic al botón  "Más ..." de profesionales patrocinados**

<img width="1280" height="800" alt="img-profesionales-patrocinadores" src="https://github.com/user-attachments/assets/13eb09b9-600a-42e0-969f-1ffd56fb66a4" />


**Imagen de home page apartado de resultados al dar clic al botón  "Más ..." de empresas**

<img width="1280" height="800" alt="img-empresas-patrocinadoras" src="https://github.com/user-attachments/assets/d574d2b9-a026-45ed-9692-9519253cf3c9" />

**Imagen de home page apartado de resultados al dar clic al botón "Más ..." de promociones especiales** 

<img width="1280" height="800" alt="img-promo-list" src="https://github.com/user-attachments/assets/4bb62b9d-b0ff-4c0e-8a8f-b0daa48963a4" />

**Imagen de vista de perfil de un usuario registrado y profesional registrado**

<img width="1280" height="800" alt="img-cliente-registrado" src="https://github.com/user-attachments/assets/bfe628ac-57ab-4195-86fb-679daf4a5877" />

**Imagen de vista de perfil de una empresa**

<img width="1280" height="800" alt="img-empresa-registrado" src="https://github.com/user-attachments/assets/8e99c083-4fce-457d-a1e0-607f154509b5" />

**Imagen de footer "Sobre nosotros"**

<img width="1280" height="800" alt="img-footer-1" src="https://github.com/user-attachments/assets/042dda07-aaa9-4ad1-96e1-3f894097ac72" />

**Imagen de footer "Teléfonos de contacto"**

<img width="1280" height="800" alt="img-footer-3" src="https://github.com/user-attachments/assets/4959be31-4b6a-4ee0-8e29-4c3ae0d6cde5" />

**Imagen de footer "Empleos"**

<img width="1280" height="800" alt="img-footer-2" src="https://github.com/user-attachments/assets/fe60716e-040d-4d28-b56f-5cc6e04f1c01" />

**Imagen de footer "Cómo funciona la web"**

<img width="1280" height="800" alt="img-footer-4" src="https://github.com/user-attachments/assets/fc360eee-3949-4b7f-8faf-955097188ab7" />

**Imagen de footer "Blog"**

<img width="1280" height="800" alt="img-footer-5" src="https://github.com/user-attachments/assets/1a6dfa9b-c326-4da6-9318-700b24dd784d" />

### 6. Tecnología complementaria

**Desarrollo y productividad**
- Expo: Framework que simplifica el desarrollo con React Native, ideal para prototipos rápidos y pruebas en dispositivos móviles.
- TypeScript: Mejora la robustez del código en frontend con tipado estático.
- Lombok (para Java): Reduce la escritura de código repetitivo en Spring Boot.
**Base de datos y persistencia**
- MySQL: Base de datos relacional robusta y escalable.
**Seguridad**
- Spring Security + JWT: Autenticación y autorización segura para usuarios y roles.
- Helmet.js (en frontend): Protección contra vulnerabilidades comunes en apps web.
**Contenedores y despliegue**
- Docker: Contenerización del backend para facilitar despliegue y pruebas.
- Docker Compose: Para levantar múltiples servicios (backend, base de datos) en local.
- Heroku / AWS / Railway / Render: Plataformas para desplegar la app en la nube.
**Integración continua y control de calidad**
- GitHub Actions: Automatización de pruebas, builds y despliegues.
- SonarQube: Análisis estático de código para detectar errores y mejorar calidad.
- Jest / React Testing Library: Pruebas unitarias y de integración en frontend.
- JUnit / Mockito: Pruebas en backend con Spring Boot.
**Geolocalización y mapas**
- Google Maps API / Mapbox: Para mostrar profesionales cercanos y rutas.
- Geofire / GeoJSON: Para optimizar búsquedas por ubicación.
**Notificaciones y experiencia de usuario**
- Firebase Cloud Messaging (FCM): Envío de notificaciones push.
- React Navigation: Gestión de rutas y pantallas en la app móvil.
- Formik + Yup: Validación de formularios en React Native.
**Métricas y monitoreo**
- Grafana + Prometheus: Monitoreo del backend y rendimiento.
- Google Analytics: Seguimiento del comportamiento de usuarios.
- 
### 7. Algoritmo de consulta avanzado
**Geo-Spatial Filtering + Weighted Scoring.** Combina filtros geoespaciales con un sistema de puntuación ponderada para ordenar los resultados de búsqueda de profesionales según relevancia, cercanía, disponibilidad y reputación.

## Seguimiento
- https://medium.com/@ua.huaman/birrete-es-7edbbaa5a8aa
- https://github.com/codeurjc-students/2024-birrete-es
## Autor
**Birrete-es** es un proyecto de aplicación multiplataforma desarrollado con el objetivo de presentarse como Trabajo de Fin de Grado (TFG) en Ingeniería Informática en la Universidad Rey Juan Carlos (URJC).

- **Alumno:** Ulises Augusto Huamán Atusparia
- **Tutor:** Micael Gellego Garrido


