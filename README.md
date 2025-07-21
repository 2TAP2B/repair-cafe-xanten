# Repair Café Xanten Website

A one-page website for Repair Café Xanten, built with Astro and focused on accessibility and sustainability. The site promotes community repair events and provides information about fixing everyday items instead of throwing them away.

## About Repair Café Xanten

Repair Café Xanten is a community initiative where volunteers help people repair their broken household items for free. Instead of discarding malfunctioning devices, visitors can bring them to our events and learn to fix them with expert guidance. We focus on sustainability, community building, and reducing electronic waste.

## Features

- **One-page design** with smooth anchor navigation
- **Event information** prominently displayed in a top banner
- **Accessibility-focused** design following WCAG guidelines
- **Responsive layout** that works on all devices
- **Corporate color scheme** with pink and blue branding
- **Contact information** and event details
- **Team member profiles** and services offered
- **Repair statistics** and upcoming event dates

## Technical Details

Built with modern web technologies:

- **Astro 5.7.5+** for fast, SEO-friendly static site generation
- **Tailwind CSS 4** for responsive design and styling
- **TypeScript** for type-safe development
- **SCSS** for advanced styling capabilities
- **Accessible components** from Accessible Astro Components library


## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/repair-cafe-xanten.git
cd repair-cafe-xanten
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:4321`

### Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint checks |

## Project Structure

```
src/
├── components/          # Reusable UI components
├── layouts/            # Page layouts
├── pages/              # Site pages (index.astro is main page)
├── styles/             # Global styles and SCSS
└── assets/             # Images and other assets

public/                 # Static files
├── fonts/              # Custom fonts
├── posts/              # Blog post images
└── projects/           # Project images
```

## Content Management

### Updating Event Information

Edit the event details in `src/components/EventTopBar.astro`:
```astro
const nextEventDate = "27. Januar 2025"
const nextEventTime = "14:00 - 17:00 Uhr"
const nextEventLocation = "Gemeindezentrum St. Viktor"
```

### Adding Team Members

Team member information is managed in `src/pages/index.astro` in the team section using the `Feature` component.

### Modifying Contact Information

Update contact details in `src/components/Footer.astro` and the contact section of `src/pages/index.astro`.

## Accessibility Features

This website prioritizes accessibility and includes:

- Semantic HTML structure with proper headings
- ARIA labels and descriptions for interactive elements
- High contrast color ratios for readability
- Keyboard navigation support
- Screen reader friendly content
- Responsive design for all screen sizes
- Focus indicators for keyboard users

## Browser Support

The website works in all modern browsers including:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Contributing

If you'd like to contribute to the website:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Test thoroughly
5. Commit your changes (`git commit -m 'Add new feature'`)
6. Push to the branch (`git push origin feature/improvement`)
7. Open a Pull Request

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

Built with care for the community and the environment.

---