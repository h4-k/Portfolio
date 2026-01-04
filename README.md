# H4K Cybersecurity Portfolio

A modern, security-focused portfolio website built with React, TypeScript, and Vite. Features dynamic content loading from JSON files, real-time contact form integration, and comprehensive security measures.

## 🚀 Features

- **JSON-based Content Management**: All content (projects, experience, education, certifications, articles) loaded from JSON files
- **Markdown Support**: Rich text formatting with safe rendering via DOMPurify
- **Functional Contact Form**: Integrated with Formspree for real-time message delivery
- **Security Hardened**: XSS protection, input sanitization, and honeypot spam prevention
- **Fully Static**: Compatible with GitHub Pages - no server-side code required
- **Responsive Design**: Mobile-first approach with smooth animations via Framer Motion
- **Dark Theme**: Cyberpunk-inspired design with Matrix rain animation

## 📦 Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Markdown**: Marked + DOMPurify
- **Form Handling**: Formspree
- **Deployment**: GitHub Pages

## 🛠️ Installation

```bash
# Clone the repository
git clone https://github.com/h4-k/Portfolio.git
cd Portfolio

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Content Management

All content is stored in `/public/data/` as JSON files:

- `projects.json` - Portfolio projects
- `experience.json` - Work experience
- `education.json` - Academic credentials
- `certifications.json` - Professional certifications
- `articles.json` - Blog posts and articles

### Adding New Content

Simply add a new entry to the corresponding JSON file. The website will automatically load and display it - no code changes required!

**Example Project Entry:**
```json
{
  "id": "unique-id",
  "title": "Project Name",
  "description": "Project description with **markdown** support",
  "techStack": ["React", "TypeScript", "Node.js"],
  "securityLevel": "DECLASSIFIED"
}
````

## 🔒 Security Features

- **XSS Protection**: All user inputs sanitized using DOMPurify
- **Content Sanitization**: JSON content validated and sanitized before rendering
- **Spam Prevention**: Honeypot field in contact form
- **Safe Markdown**: HTML sanitization for markdown rendering
- **No eval()**: Secure DOM manipulation practices

## 📧 Contact Form

The contact form uses [Formspree](https://formspree.io) for backend handling. To use your own Formspree endpoint, update the form action in `components/Contact.tsx`:

```typescript
const response = await fetch('YOUR_FORMSPREE_ENDPOINT', {
  method: 'POST' ,
  // ...
});
```

## 🚢 Deployment

### GitHub Pages (Automatic)

The repository includes a GitHub Actions workflow that automatically builds and deploys to GitHub Pages on every push to the `main` branch.

1. Push your changes to the `main` branch
2. GitHub Actions will automatically build and deploy
3. Your site will be available at `https://h4-k.github.io/Portfolio/`

### Manual Deployment

```bash
# Build and deploy to GitHub Pages
npm run deploy
```

## 📂 Project Structure

```
Portfolio/
├── components/          # React components
│   ├── Blog.tsx
│   ├── Contact.tsx
│   ├── EmailDetail.tsx
│   ├── EmailList.tsx
│   ├── Sidebar.tsx
│   ├── StatsModal.tsx
│   └── Timeline.tsx
├── public/
│   └── data/           # JSON content files
│       ├── projects.json
│       ├── experience.json
│       ├── education.json
│       ├── certifications.json
│       └── articles.json
├── services/           # Utility services
│   ├── gemini.ts
│   └── matrix.ts
├── utils/              # Helper functions
│   ├── contentLoader.ts
│   ├── markdown.ts
│   └── sanitizer.ts
├── App.tsx             # Main application component
├── types.ts            # TypeScript type definitions
├── constants.ts        # Navigation and static data
└── index.html          # Entry point
```

## 🎨 Customization

### Colors

The color scheme is defined in `index.html` using Tailwind CSS. Update the `tailwind.config` section:

```javascript
colors: {
  primary: '#00dc82',    // Main accent color
  secondary: '#00ff9d',  // Secondary accent
  // ...
}
```

### Animations

Matrix rain animation can be configured in `services/matrix.ts`.

## 🐛 Known Issues

- None currently! All builds passing ✅

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 👤 Author

**H4K**
- GitHub: [@h4-k](https://github.com/h4-k)
- Email: agent401.0x0@gmail.com

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Built with ❤️ and ☕ by H4K
