# Mato Energy Limited Website

A modern, responsive website for Mato Energy Limited - Premium Oil & Gas Services provider specializing in drilling solutions, marine equipment, and comprehensive energy sector support.

## 🌟 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Service Booking**: Integrated booking form for service requests
- **Contact Integration**: Direct phone and email contact options
- **Service Showcase**: Comprehensive display of all company services
- **Professional Branding**: Oil & gas industry-focused design

## 🚀 Services Offered

- Drilling Fluids Systems
- Chemicals & Engineering
- Solids Control & Brine Filtration
- Waste Management
- Marine Equipment
- Training Services

## 📋 Project Structure

```
mato-energy-website/
├── index.html              # Main website file
├── README.md              # Project documentation
├── assets/                # Static assets (future expansion)
│   ├── images/           # Company images and logos
│   ├── css/              # Additional stylesheets (if needed)
│   └── js/               # Additional JavaScript files
├── docs/                 # Documentation files
│   └── setup-guide.md    # Detailed setup instructions
└── .gitignore           # Git ignore file
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox/Grid, animations, and responsive design
- **JavaScript**: Interactive functionality and form handling
- **Modern CSS Features**: 
  - CSS Grid & Flexbox for layout
  - CSS Variables for theming
  - Advanced animations and transitions
  - Backdrop filters and modern effects

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px

## 🎨 Color Scheme

- **Primary Blue**: #1e3c72
- **Secondary Blue**: #2a5298
- **Accent Orange**: #ff6b35
- **Light Orange**: #ff8c42
- **Text Dark**: #333333
- **Background**: Linear gradients with glassmorphism effects

## 📞 Contact Information

- **Phone**: +234 803 123 4567, +234 805 987 6543
- **Email**: info@matoenergy.com, services@matoenergy.com
- **Address**: 123 Energy Drive, Port Harcourt, Rivers State, Nigeria

## 🚀 Quick Start

### Prerequisites

- Web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code, Sublime Text, etc.)
- Git (for version control)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/mato-energy-website.git
   cd mato-energy-website
   ```

2. **Open the website**
   - Simply open `index.html` in your web browser
   - Or use a local server for development:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   
   # Using Live Server (VS Code extension)
   Right-click index.html → "Open with Live Server"
   ```

3. **View the website**
   - Open your browser and navigate to `http://localhost:8000`

## 🔧 Customization

### Updating Company Information

1. **Contact Details**: Edit the contact section in `index.html`
2. **Services**: Modify the services grid section
3. **Colors**: Update CSS custom properties in the `<style>` section
4. **Content**: Change text content throughout the HTML

### Adding New Services

1. Add a new service card in the services grid:
   ```html
   <div class="service-card">
       <h3>Your New Service</h3>
       <p>Description of your new service offering.</p>
   </div>
   ```

2. Update the booking form select options:
   ```html
   <option value="new-service">Your New Service</option>
   ```

### Customizing Styles

The website uses embedded CSS for simplicity. Key sections to customize:

- **Colors**: Update the color variables at the top of the CSS
- **Fonts**: Change the `font-family` properties
- **Layout**: Modify grid and flexbox properties
- **Animations**: Adjust keyframes and transition properties

## 📨 Form Handling

The booking form currently uses JavaScript to collect form data. To make it functional:

### Option 1: Client-side Email (Simple)
Add EmailJS integration for client-side email sending.

### Option 2: Backend Integration (Recommended)
Set up a backend service (Node.js, PHP, Python) to handle form submissions and email notifications.

### Option 3: Third-party Services
Integrate with services like Formspree, Netlify Forms, or Google Forms.

## 🌐 Deployment Options

### GitHub Pages (Free)
1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://yourusername.github.io/mato-energy-website`

### Netlify (Free tier available)
1. Connect your GitHub repository
2. Deploy automatically on every commit
3. Custom domain support

### Vercel (Free tier available)
1. Import your GitHub repository
2. Automatic deployments
3. Excellent performance optimization

## 🔒 Security Considerations

- Validate all form inputs on both client and server side
- Implement CSRF protection for form submissions
- Use HTTPS in production
- Sanitize user inputs to prevent XSS attacks

## 🎯 Future Enhancements

- [ ] Backend API for form handling
- [ ] Payment gateway integration (Stripe, PayPal, Flutterwave)
- [ ] User authentication system
- [ ] Admin dashboard for managing bookings
- [ ] Blog/news section
- [ ] Multi-language support
- [ ] SEO optimization
- [ ] Analytics integration (Google Analytics)
- [ ] Live chat functionality

## 📊 Performance Optimization

- Images are optimized SVG graphics
- CSS and JavaScript are minified in production
- Uses modern CSS features for better performance
- Implements lazy loading for images (when added)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support, email support@matoenergy.com or create an issue in the GitHub repository.

## 🙏 Acknowledgments

- Design inspired by modern oil & gas industry websites
- Icons and graphics created with SVG for scalability
- Responsive design patterns following modern web standards

---

**Made with ❤️ for Mato Energy Limited**