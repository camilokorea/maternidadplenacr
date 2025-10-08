# Maternidad Plena CR - Sitio Web

Este es el repositorio del código fuente para el sitio web oficial de Maternidad Plena CR.

## Descripción

Maternidad Plena CR es un proyecto dedicado a ofrecer acompañamiento, asesoría y servicios médicos relacionados con la maternidad, lactancia, y el crecimiento y desarrollo infantil. El sitio web sirve como plataforma principal para informar sobre los servicios, compartir recursos a través de un blog y facilitar el contacto para citas.

## Arquitectura de la Aplicación

El sitio está construido como una **Single Page Application (SPA)** utilizando el framework **AngularJS (v1.8.2)**.

-   **Framework Principal:** AngularJS.
-   **Arquitectura:** Sigue un patrón de diseño modular y basado en componentes (introducido en Angular 1.5+). Cada pieza de la interfaz (`header`, `footer`, `servicios`, etc.) es un componente con su propio controlador y plantilla HTML.
-   **Enrutamiento:** Utiliza el módulo `ngRoute` para manejar la navegación del lado del cliente. Las vistas de página se cargan dinámicamente en el elemento `<ng-view>` dentro de `index.html`.
-   **UI y Componentes Visuales:** La interfaz de usuario está construida con la librería **Angular Material (v1.2.1)**, que proporciona un conjunto de componentes visuales siguiendo los principios de Material Design.
-   **Estructura de Archivos:**
    -   `index.html`: El archivo principal que carga todas las dependencias y contiene el `ng-app`.
    -   `js/app.js`: Define el módulo principal de Angular (`maternidadPlenaApp`), registra todos los componentes y configura el enrutador (`$routeProvider`).
    -   `js/components/`: Directorio que contiene subcarpetas para cada componente reutilizable de la aplicación.
    -   `js/components/pages/`: Contiene las plantillas HTML para las páginas completas que son gestionadas por el enrutador.
    -   `/styles/`: Hojas de estilo personalizadas que complementan a Angular Material.

## Tecnologías Utilizadas

-   **AngularJS (v1.8.2)**
-   **Angular Material (v1.2.1)**
-   **HTML5**
-   **CSS3**
-   **jQuery**

## Contenido del Sitio

-   **Inicio:** Página de bienvenida con una introducción a Maternidad Plena.
-   **Servicios:** Descripción detallada de los servicios ofrecidos.
-   **Blog:** Artículos y recursos sobre temas de maternidad y crianza.
-   **Acerca de:** Información sobre la profesional detrás del proyecto.
-   **Contacto:** Formulario y datos de contacto para agendar citas.
-   **Calculadoras:** Herramientas útiles relacionadas con el embarazo o desarrollo infantil.
