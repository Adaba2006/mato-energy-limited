  // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Form submission handling
        document.getElementById('bookingForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Here you would typically send the data to your backend
            console.log('Booking Data:', data);
            
            // Show success modal
            const modal = document.getElementById('successModal');
            modal.style.display = 'block';
            
            // Reset form
            this.reset();
        });

        // Modal close functionality
        document.querySelector('.close').addEventListener('click', function() {
            document.getElementById('successModal').style.display = 'none';
        });

        window.addEventListener('click', function(e) {
            const modal = document.getElementById('successModal');
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });

        // Add header background on scroll
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.style.background = 'rgba(0, 0, 0, 0.95)';
            } else {
                header.style.background = 'rgba(0, 0, 0, 0.9)';
            }
        });