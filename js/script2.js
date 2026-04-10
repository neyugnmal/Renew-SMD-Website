 {
 



    // --- Count-up Animation ---
    const stats = document.querySelectorAll('.stat-number');
    let animated = false;

    const animateStats = () => {
        stats.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-target'));
            const suffix = stat.getAttribute('data-suffix') || '';
            let count = 0;
            const duration = 2000; // 2 seconds
            const startTime = performance.now();

            const updateCount = (currentTime) => {
                const elapsedTime = currentTime - startTime;
                const progress = Math.min(elapsedTime / duration, 1);
                count = Math.floor(progress * target);
                stat.innerText = count + suffix;

                if (progress < 1) {
                    requestAnimationFrame(updateCount);
                } else {
                    stat.innerText = target + suffix;
                }
            };
            requestAnimationFrame(updateCount);
        });
    };

    // --- Intersection Observer for Fade-in and Stats ---
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('stats') && !animated) {
                    animateStats();
                    animated = true;
                }
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-up, .stats').forEach(el => {
        observer.observe(el);
    });

    // --- Form Submission ---
    const form = document.getElementById('admissionForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = form.querySelector('.btn-submit');
            btn.innerText = 'Submitting...';
            btn.disabled = true;
            
            setTimeout(() => {
                alert('Registration successful! We will contact you soon.');
                form.reset();
                btn.innerText = 'Submit';
                btn.disabled = false;
            }, 1500);
        });
    }
};
