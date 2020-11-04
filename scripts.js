const header = new Vue ({
    el: "#header",
    data: {
        menu:`<!-- Inicio menú -->
        <nav class="nav flex-column navbar-light bg-light pt-1">
            <img class="navbar-brand" src="recursos/mail-1454731_1280.png" width=40 height=40 alt="logo">
            <a class="nav-item nav-link active" href="#">Inicio</a>
            <a class="nav-item nav-link" href="#">Galería</a>
            <a class="nav-item nav-link" href="#">Dónde estamos</a>
            <a class="nav-item nav-link" href="#" tabindex="-1">Contacto</a>
        </nav>
        <footer class="pb-3">
            <a href="#"><img src="recursos/social_facebook_fb_2763.png" width=30 height=30></a>
            <a href="#"><img src="recursos/mail-1454731_1280.png" width=30 height=30></a>
        </footer>
<!-- Fin menú -->`
    },
})

const app = new Vue ({
    el: "#carouselExampleFade",
    data: {
        imagen1: "http://placekitten.com/1600/650",
        imagen2: "http://placekitten.com/1580/650",
        imagen3: "http://placekitten.com/1560/650",
    }
});
