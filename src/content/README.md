# Content Management Guide

This portfolio uses a file-based content management system. Each piece of content (projects, experience, education, certifications, articles) is stored as a separate TypeScript file.

## How to Add Content

### Adding a Project

1. Create a new file in `src/content/projects/` (e.g., `my-awesome-project.ts`)
2. Use this template:

```typescript
import type { Project } from '../../../types';

const project: Project = {
  id: 'my-awesome-project', // Must be unique
  title: 'My Awesome Project',
  description: 'A detailed description of your project...',
  techStack: ['React', 'Node.js', 'PostgreSQL'],
  securityLevel: 'DECLASSIFIED', // or 'RESTRICTED' or 'TOP SECRET'
  link: 'https://github.com/yourusername/project'
};

export default project;
```

3. Save the file - it will automatically appear on your website!

### Adding Experience

Create a file in `src/content/experience/`:

```typescript
import type { Experience } from '../../../types';

const experience: Experience = {
  id: 'unique-id',
  role: 'Security Engineer',
  company: 'Company Name',
  period: '2023 - Present',
  description: 'What you did in this role...',
  tech: ['Python', 'Docker', 'Kubernetes']
};

export default experience;
```

### Adding Education

Create a file in `src/content/education/`:

```typescript
import type { Education } from '../../../types';

const education: Education = {
  id: 'unique-id',
  degree: 'Bachelor of Computer Science',
  school: 'University Name',
  year: '2020',
  honors: 'Summa Cum Laude' // Optional
};

export default education;
```

### Adding Certifications

Create a file in `src/content/certifications/`:

```typescript
import type { Certification } from '../../../types';

const certification: Certification = {
  id: 'unique-id',
  name: 'Certified Ethical Hacker',
  issuer: 'EC-Council',
  date: '2024'
};

export default certification;
```

### Adding Articles

Create a file in `src/content/articles/`:

```typescript
import type { Article } from '../../../types';

const article: Article = {
  id: 'unique-id',
  title: 'How to Secure Your Web Application',
  summary: 'A comprehensive guide to web security...',
  date: 'Nov 25, 2025',
  readTime: '10 min read',
  tags: ['Security', 'Web Development'],
  link: 'https://yourblog.com/article'
};

export default article;
```

## How to Remove Content

Simply delete the file from the corresponding folder. The website will automatically update.

## Tips

- **File names** don't matter - use descriptive names for easy management
- **IDs must be unique** within each content type
- The website automatically loads all files from each folder
- No need to restart the dev server - changes are hot-reloaded
