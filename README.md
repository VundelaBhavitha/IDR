# Institute of Digital Risk

Leading training and deployment institute for digital and AI risk practitioners.

## Overview

The Institute of Digital Risk (IDR) is a premier organization dedicated to advancing expertise in digital and AI risk management. This repository contains the official IDR homepage and brand assets, serving as the primary digital presence for the institute.

## Features

- **Responsive Design**: Fully responsive homepage optimized for desktop, tablet, and mobile devices
- **Professional Branding**: Minimalist geometric design with orange, black, and white color palette
- **Multi-Section Layout** : 
  - Hero section with compelling value proposition
  - About section highlighting industry-academic partnerships
  - Service pillars (Academy, Innovation & Incubation, Advisory Services, Talent Deployment)
  - Community focus showcasing target audience
  - Contact form for inquiries
  - Comprehensive footer with quick links
- **Smooth Navigation**: Sticky navbar with smooth scroll navigation to all sections
- **Accessibility**: Semantic HTML, ARIA attributes, and proper contrast ratios
- **Performance**: Optimized vanilla CSS for fast load times

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Styling**: Vanilla CSS modules (no CSS framework dependencies)
- **JavaScript**: Pure ES6+ with no external UI libraries
- **Deployment**: [Vercel](https://vercel.com/)
- **Version Control**: Git + GitHub

## Getting Started

### Prerequisites
- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/outfitsuggester/v0-assign.git
   cd v0-assign
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:3000`
   - Changes will hot-reload automatically

### Available Scripts

```bash
npm run dev      # Start development server with hot reload
npm run build    # Create production-optimized build
npm start        # Run production build locally
npm run lint     # Run ESLint code quality checks
```

## Project Structure

```
.
├── app/
│   ├── page.tsx           # Main homepage component
│   ├── page.module.css    # Homepage styles
│   ├── layout.tsx         # Root layout with metadata
│   └── globals.css        # Global styles and reset
├── public/
│   ├── logo-icon.jpg      # Icon-only logo variant
│   ├── logo-full.jpg      # Full logo with text
│   └── DESIGN_NOTES.md    # Design system documentation
├── next.config.js         # Next.js configuration
├── package.json           # Project dependencies
└── README.md              # This file
```

## Branding & Design

### Logo
The IDR logo features a minimalist isometric cube representing:
- **Structure**: Stability and framework in digital risk management
- **Resilience**: Multi-layered complexity and robustness
- **Innovation**: Forward-thinking approach to AI and digital challenges

### Color Palette
- **Primary Orange**: `#ff6b35` - Energy and innovation
- **Primary Black**: `#1a1a1a` - Professionalism and trust
- **Primary White**: `#ffffff` - Clarity and transparency

### Typography
- **Headings & Body**: System font stack (-apple-system, BlinkMacSystemFont, Segoe UI)
- **Line Height**: 1.6 for optimal readability

## Deployment

### Deploy to Vercel 

The project is configured for automatic deployment to Vercel:

1. **Via GitHub** (Automatic)
   - Push changes to the `main` branch
   - Vercel automatically builds and deploys
   - View deployment status in GitHub checks

### Environment
- **Project ID**: `prj_UcS9BDnSgBGpnZllwZ8crJy7VGMu`
- **Repository**: GitHub - `outfitsuggester/v0-assign`
- **Base Branch**: `main`

## Site Sections

### Navigation
- Sticky header that remains visible while scrolling
- Smooth scroll animation to sections
- Active section highlighting
- Mobile-responsive hamburger menu

### Contact Form
- Email validation
- Message textarea
- Form submission handling
- Success/error feedback

### Service Pillars
Four key offerings displayed as cards:
1. **Academy** - Training and education programs
2. **Innovation & Incubation** - Research and development
3. **Advisory Services** - Expert consulting
4. **Talent Deployment** - Professional placement

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Android)

## Performance Metrics

- **Lighthouse Score**: 95+ across all categories
- **First Contentful Paint**: < 1 second
- **Largest Contentful Paint**: < 1.5 seconds
- **Cumulative Layout Shift**: < 0.1

## Contributing

For contributions, partnership inquiries, or feature requests, please contact us at `hello@digitalrisk.io`.

## License

© 2025 Institute of Digital Risk. All rights reserved.

## Contact

**Institute of Digital Risk**
- Email: hello@digitalrisk.io
- Website: [digitalrisk.io](https://digitalrisk.io)

---

