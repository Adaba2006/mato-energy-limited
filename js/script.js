// Basic form validation for contact form
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
                alert('Please fill in all fields');
                return;
            }
            
            // Here you would typically send the form data to a server
            alert('Thank you for your message! We will contact you soon.');
            contactForm.reset();
        });
    }
    
    // Basic validation for booking form
    const bookingForm = document.querySelector('.booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const service = document.getElementById('service').value;
            const date = document.getElementById('date').value;
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const address = document.getElementById('address').value;
            
            if (service === '' || date === '' || name.trim() === '' || 
                email.trim() === '' || phone.trim() === '' || address.trim() === '') {
                alert('Please fill in all required fields');
                return;
            }
            
            // Here you would typically send the form data to a server
            alert('Thank you for your booking! We will confirm your appointment soon.');
            bookingForm.reset();
        });
    }
});