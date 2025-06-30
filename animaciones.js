gsap.registerPlugin(ScrollTrigger);

        gsap.from("#nosotros .mision", {
            scrollTrigger: {
                trigger: "#nosotros .mision", // el elemento que activa la animación
                start: "top 80%",               // empieza cuando el top del elemento llega al 80% del viewport
                toggleActions: "play none none none" // solo reproduce una vez
            },
            duration: 1.5,
            scale: 0.5, 
            opacity: 0, 
            stagger: 0.3
        });

        gsap.from("#nosotros .vision", {
            scrollTrigger: {
                trigger: "#nosotros .vision", // el elemento que activa la animación
                start: "top 80%",               // empieza cuando el top del elemento llega al 80% del viewport
                toggleActions: "play none none none" // solo reproduce una vez
            },
            duration: 1.5,
            scale: 0.5, 
            opacity: 0, 
            stagger: 0.3
        });
        


        // Animación con GSAP al hacer scroll 
        gsap.from("header h1", {duration: 1.5, y: -100, opacity: 0});
        gsap.from("header p", {duration: 1.5, delay: 0.5, y: 50, opacity: 0});
        gsap.from("header a", {duration: 1.5, delay: 0.5, scale: 0.1, opacity: 0});
        gsap.from("header button", {duration: 1.5, delay: 0.5, scale: 0.1, opacity: 0});
        gsap.from(".social-sidebar", {duration: 1.5, x: -100, opacity: 0});
        gsap.from("#nosotros .mision", {duration: 1.5, scale: 0.5, opacity: 0, stagger: 0.3});
        gsap.from("#nosotros .vision", {duration: 1.5, scale: 0.5, opacity: 0, stagger: 0.3});
        