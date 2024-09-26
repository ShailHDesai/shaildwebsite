document.addEventListener("DOMContentLoaded", function() {
    // Role Typing Effect
    const roleElement = document.getElementById("role");
    const roles = ["Software Developer", "Data Analyst", "Coder", "Tech Enthusiast", "Problem Solver"];
    let roleIndex = 0;
    let charIndex = 0;
    let typingSpeed = 150;
    let deletingSpeed = 100;
    let isDeleting = false;

    function type() {
        const currentRole = roles[roleIndex];
        if (isDeleting) {
            roleElement.textContent = currentRole.substring(0, charIndex--);
            if (charIndex < 0) {
                isDeleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
            }
        } else {
            roleElement.textContent = currentRole.substring(0, charIndex++);
            if (charIndex === currentRole.length) {
                isDeleting = true;
            }
        }

        setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
    }

    type();

    // Resume Download Button Click Event
    const downloadButton = document.querySelector('.resume-btn');

    downloadButton.addEventListener('click', function() {
        // Custom behavior when the resume download button is clicked
        console.log('Resume download initiated');
        // You can add other functionality here, such as tracking analytics, etc.
    });

    document.addEventListener("DOMContentLoaded", function() {
        const skillsSection = document.querySelector('.skills-section');
        const progressBars = document.querySelectorAll('.progress');
    
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }
    
        function animateProgressBars() {
            progressBars.forEach((bar) => {
                const width = bar.style.width;
                if (isInViewport(bar)) {
                    bar.style.width = width;
                }
            });
        }
    
        window.addEventListener('scroll', animateProgressBars);
        animateProgressBars(); // Run once on page load
    });
    
});
