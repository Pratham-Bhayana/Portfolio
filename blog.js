document.addEventListener('DOMContentLoaded', () => {
    // GSAP Timeline
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.out" } });

    // Function to split text into spans
    function splitTextIntoSpans(element) {
        if (element) {
            const text = element.textContent;
            element.innerHTML = text.split('').map(char => char === ' ' ? '&nbsp;' : `<span>${char}</span>`).join('');
        }
    }

    // Split and animate the h1 text
    const heading = document.querySelector('.heading h1');
    splitTextIntoSpans(heading);
    if (heading) {
        gsap.from(heading.querySelectorAll('span'), {
            duration: 0.5,
            opacity: 0,
            y: 20,
            stagger: 0.05,
            ease: 'power2.out'
        });
    } else {
        console.error('The h1 element was not found.');
    }

    gsap.from(".intro",{
        opacity : 0,
        duration : 1,
    });

    // Split and animate the paragraph text
    const paragraph = document.querySelector('.heading p');
    splitTextIntoSpans(paragraph);
    if (paragraph) {
        gsap.from(paragraph.querySelectorAll('span'), {
            duration: 0.5,
            opacity: 0,
            y: 20,
            stagger: 0.05,
            ease: 'power2.out'
        });
    } else {
        console.error('The p element was not found.');
    }

    tl.from('.image-section', {
        scrollTrigger :{

        trigger: ".image-section ",
        start : "top center",
        end : "bottm top",
        scrub :1,},

        
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power2.out"
    }, "-=0.5")

    // Add animations to the timeline
    tl.from('.blog-content', {
        scrollTrigger :{

        trigger: ".blog-content ",
        start : "top center",
        end : "bottm top",
        scrub :1,},

        
        opacity: 0,
        x: -50,
        duration: 1,
        ease: "power2.out"
    }, "-=0.5")
    .from('#title .subtitle', {
        opacity: 0,
        x: 50,
        duration: 1,
        ease: "power2.out"
    }, "-=0.5")
    .from('.date', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power2.out"
    }, "-=0.5")
    .from('.image-section', {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: "power2.out"
    }, "-=0.5")
    .from('.image-name', {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: "power2.out"
    })
    .from('.written-content', {
        opacity: 0,
        y: 20,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out"
    }, "-=0.5");
});
