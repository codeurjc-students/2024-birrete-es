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
1. Pantallas y Navegación
2. Entidades
3. Permisos de usuarios
4. Imágenes
5. Gráficos
6. Tecnología complementaria
7. Algoritmo de consulta avanzado
## Seguimiento
- https://medium.com/@ua.huaman/birrete-es-7edbbaa5a8aa
- https://github.com/codeurjc-students/2024-birrete-es
## Autor
**Birrete-es** es un proyecto de aplicación multiplataforma desarrollado con el objetivo de presentarse como Trabajo de Fin de Grado (TFG) en Ingeniería Informática en la Universidad Rey Juan Carlos (URJC).

- **Alumno:** Ulises Augusto Huamán Atusparia
- **Tutor:** Micael Gellego Garrido


