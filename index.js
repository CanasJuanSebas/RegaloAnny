document.addEventListener('DOMContentLoaded', () => {
    const btnEntrar = document.getElementById('btn-entrar');
    const overlay = document.getElementById('overlay-bienvenida');
    const mainContent = document.getElementById('main-content');
    const btnSorpresa = document.getElementById('btn-sorpresa');
    const musica = document.getElementById('musica-fondo');
    const btnMusica = document.getElementById('btn-musica');
    const controlMusica = document.getElementById('control-musica');

    if (btnEntrar) {
        btnEntrar.addEventListener('click', () => {
            overlay.style.opacity = '0';
            overlay.style.visibility = 'hidden';
            mainContent.classList.remove('content-hidden');
            mainContent.classList.add('content-visible');
            
            controlMusica.classList.remove('content-hidden');
            controlMusica.classList.add('content-visible');
            
            musica.volume = 0.3;
            musica.play().catch(error => console.log("La reproducción automática requiere interacción previa."));

            setTimeout(() => {
                overlay.style.display = 'none';
            }, 800);
        });
    }

    if (btnMusica) {
        btnMusica.addEventListener('click', () => {
            if (musica.paused) {
                musica.play();
                btnMusica.textContent = '🎵';
                btnMusica.classList.remove('pausado');
            } else {
                musica.pause();
                btnMusica.textContent = '🔇';
                btnMusica.classList.add('pausado');
            }
        });
    }

    const fechaInicio = new Date('2025-08-19T14:30:00');
    
    function actualizarContador() {
        const hoy = new Date();
        const diferenciaTiempo = hoy.getTime() - fechaInicio.getTime();
        
        if (diferenciaTiempo < 0) return;

        const segundosTotales = Math.floor(diferenciaTiempo / 1000);
        const minutosTotales = Math.floor(segundosTotales / 60);
        const horasTotales = Math.floor(minutosTotales / 60);
        
        const dias = Math.floor(horasTotales / 24);
        const horas = horasTotales % 24;
        const minutos = minutosTotales % 60;
        const segundos = segundosTotales % 60;

        const elDias = document.getElementById('dias');
        const elHoras = document.getElementById('horas');
        const elMinutos = document.getElementById('minutos');
        const elSegundos = document.getElementById('segundos');

        if (elDias) elDias.textContent = dias;
        if (elHoras) elHoras.textContent = horas;
        if (elMinutos) elMinutos.textContent = minutos;
        if (elSegundos) elSegundos.textContent = segundos;
    }

    actualizarContador();
    setInterval(actualizarContador, 1000);

    const mensajes = [
        "¡Eres la mejor persona del mundo! ❤️",
        "Nuestra historia apenas comienza... ✨",
        "Cada foto tiene un recuerdo especial. 📸",
        "¡Te quiero muchísimo! 🥰",
        "Gracias por estar a mi lado. 🌹"
    ];

    if (btnSorpresa) {
        btnSorpresa.addEventListener('click', () => {
            const mensajeAleatorio = mensajes[Math.floor(Math.random() * mensajes.length)];
            lanzarConfeti();
            alert(mensajeAleatorio);
        });
    }

    function lanzarConfeti() {
        const container = document.getElementById('confetti-container');
        const colors = ['#9309f6', '#b046ff', '#ffffff', '#ff00ff', '#7000c0'];
        
        for (let i = 0; i < 50; i++) {
            const confeti = document.createElement('div');
            confeti.className = 'confetti';
            confeti.style.left = Math.random() * 100 + 'vw';
            confeti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confeti.style.width = Math.random() * 10 + 5 + 'px';
            confeti.style.height = confeti.style.width;
            confeti.style.opacity = Math.random();
            confeti.style.top = '-10px';
            
            container.appendChild(confeti);

            const duration = Math.random() * 3 + 2;
            confeti.animate([
                { transform: `translateY(0) rotate(0deg)`, opacity: 1 },
                { transform: `translateY(100vh) rotate(${Math.random() * 360}deg)`, opacity: 0 }
            ], {
                duration: duration * 1000,
                easing: 'linear'
            });

            setTimeout(() => confeti.remove(), duration * 1000);
        }
    }

    const fotosJuntos = [
        'foto1.jpeg', 'foto2.jpeg', 'foto3.jpeg', 'foto4.jpeg', 'foto5.jpeg', 'foto6.jpeg', 'foto0.png'
    ]; 
    const fotosAnny = [
        'a.jpeg', 'a (2).jpeg', 'a (3).jpeg', 'a (4).jpeg', 'a (5).jpeg', 'a (6).jpeg', 'a (7).jpeg', 'a (8).jpeg', 'a (9).jpeg', 'a (10).jpeg', 'a (11).jpeg', 'a (12).jpeg', 'a (13).jpeg', 'a (14).jpeg', 'a (15).jpeg', 'a (16).jpeg', 'a (17).jpeg', 'a (18).jpeg', 'a (19).jpeg', 'a (20).jpeg', 'a (21).jpeg', 'a (22).jpeg', 'a (23).jpeg', 'a (24).jpeg', 'a (25).jpeg', 'a (26).jpeg', 'a (27).jpeg', 'a (28).jpeg', 'a (29).jpeg', 'a (30).jpeg', 'a (31).jpeg', 'a (32).jpeg', 'a (33).jpeg', 'a (34).jpeg', 'a (35).jpeg', 'a (36).jpeg', 'a (37).jpeg', 'a (38).jpeg', 'a (39).jpeg', 'a (40).jpeg', 'a (41).jpeg', 'a (42).jpeg', 'a (43).jpeg', 'a (44).jpeg', 'a (45).jpeg', 'a (46).jpeg', 'a (47).jpeg', 'a (48).jpeg', 'a (49).jpeg', 'a (50).jpeg', 'a (51).jpeg', 'foto1.jpeg'
    ]; 
    const fotosCanas = [
        'a (1).jpeg', 'a (2).jpeg', 'a (3).jpeg', 'a (4).jpeg', 'a (5).jpeg', 'a (6).jpeg', 'a (7).jpeg', 'a (8).jpeg', 'a (9).jpeg', 'a (10).jpeg', 'a (11).jpeg', 'a (12).jpeg', 'a (13).jpeg', 'a (14).jpeg', 'a (15).jpeg', 'a (16).jpeg', 'a (17).jpeg', 'a (18).jpeg'
    ];

    function cargarFotosListado(wrapperId, listado, folder) {
        const wrapper = document.getElementById(wrapperId);
        if (!wrapper || !listado.length) return;
        
        listado.forEach((nombre, index) => {
            const img = document.createElement('img');
            img.src = `${folder}/${nombre}`;
            img.className = 'foto-album';
            img.alt = `Foto ${index + 1}`;
            if (index === 0) img.classList.add('visible');
            wrapper.appendChild(img);
        });
    }

    cargarFotosListado('slideshow-juntos', fotosJuntos, 'juntos');
    cargarFotosListado('album-anny', fotosAnny, 'anny');
    cargarFotosListado('album-canas', fotosCanas, 'canas');

    setInterval(() => {
        ['slideshow-juntos', 'album-anny', 'album-canas'].forEach(id => {
            const wrapper = document.getElementById(id);
            if (!wrapper) return;
            const fotos = wrapper.querySelectorAll('.foto-album');
            if (fotos.length <= 1) return;

            let currentVisible = wrapper.querySelector('.foto-album.visible');
            if (!currentVisible) {
                fotos[0].classList.add('visible');
                return;
            }

            let fotosArray = Array.from(fotos);
            let index = fotosArray.indexOf(currentVisible);
            
            currentVisible.classList.remove('visible');
            
            let nextIndex = (index + 1) % fotosArray.length;
            fotosArray[nextIndex].classList.add('visible');
        });
    }, 3500);
});
