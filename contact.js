        // Fade-in and slide-up animations for title and section
        gsap.from(".head", { duration: 1, y: -50, opacity: 0, ease: "power3.out" });
        gsap.from(".split", { duration: 1, y: 50, opacity: 0, ease: "power3.out", delay: 0.5 });

        // Social media icons hover animation
        gsap.from(".social-media img", {
            duration: 0.5,
            
            opacity: 0,
            // stagger: 0.1,
            ease: "back.out(1.7)"
        });

        // Button hover animation
        gsap.from("button", {
            duration: 0.5,
            // scale: 0.9,
            opacity: 0,
            ease: "back.out(1.7)"
        });

        // Input focus animations
        gsap.from(".input, .msg", {
            duration: 0.5,
            opacity: 0,
            y: 20,
            stagger: 0.1,
            ease: "power3.out"
        });

        // Animation on input focus
        gsap.to(".input, .msg", {
            duration: 0.3,
            borderColor: "greenyellow",
            ease: "power1.inOut",
            paused: true
        }).set(".input:focus, .msg:focus", { 
            onStart: function() { gsap.play() }
        });