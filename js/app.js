angular
  .module("maternidadPlenaApp", [
    "ngMaterial",
    "ngMessages",
    "ngRoute",
    "ngMaterialDatePicker",
  ])
  .component("headerApp", {
    controller: HeaderController,
    templateUrl: "/js/components/header/header.html?v=1",
  })
  .component("logoApp", {
    controller: LogoController,
    templateUrl: "/js/components/logo/logo.html?v=1",
  })
  .component("rotatorApp", {
    controller: RotatorController,
    templateUrl: "/js/components/rotator/rotator.html?v=1",
  })
  .component("serviciosApp", {
    controller: ServiciosController,
    templateUrl: "/js/components/servicios/servicios.html?v=1",
  })
  .component("timelineApp", {
    controller: TimelineController,
    templateUrl: "/js/components/timeline/timeline.html?v=1",
  })
  .component("contactoApp", {
    controller: ContactoController,
    templateUrl: "/js/components/contacto/contacto.html?v=1",
  })
  .component("acercaApp", {
    controller: AcercaController,
    templateUrl: "/js/components/acerca/acerca.html?v=1",
  })
  .component("citasApp", {
    controller: CitasController,
    templateUrl: "/js/components/citas/citas.html?v=1",
  })
  .component("blogApp", {
    controller: BlogController,
    templateUrl: "/js/components/blog/blog.html?v=1",
  })
  .component("heroApp", {
    controller: HeroController,
    templateUrl: "/js/components/hero/hero.html?v=1",
  })
  .component("footerApp", {
    controller: FooterController,
    templateUrl: "/js/components/footer/footer.html?v=1",
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when("/", {
        templateUrl: "/js/components/pages/home-page/home-page.html?v=2",
      })
      .when("/contacto", {
        templateUrl: "/js/components/pages/contacto-page/contacto-page.html?v=1",
      })
      .when("/acerca", {
        templateUrl: "/js/components/pages/acerca-page/acerca-page.html?v=1",
      })
      .when("/citas", {
        templateUrl: "/js/components/pages/citas-page/citas-page.html?v=1",
      })
      .when("/blog", {
        templateUrl: "/js/components/pages/blog-page/blog-page.html?v=1",
      });
  });

window.addEventListener('load', () => {
  AOS.init();

  let scrollRef = 0;
  $('#app-wrapper').on("resize scroll", function () {
    // increase value up to 10, then refresh AOS
    scrollRef <= 10 ? scrollRef++ : AOS.refresh();
  });
});