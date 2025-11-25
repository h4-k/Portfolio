import type { Project, Skill, Experience, Education, Certification, Article } from '../../types';

// Generic content loader using Vite's import.meta.glob
function loadContent<T>(modules: Record<string, any>): T[] {
    return Object.values(modules).map((module) => module.default);
}

// Load all projects
export function getProjects(): Project[] {
    const modules = import.meta.glob('../content/projects/*.ts', { eager: true });
    return loadContent<Project>(modules);
}

// Get a single project by ID
export function getProjectById(id: string): Project | undefined {
    const projects = getProjects();
    return projects.find(p => p.id === id);
}

// Load all experience entries
export function getExperience(): Experience[] {
    const modules = import.meta.glob('../content/experience/*.ts', { eager: true });
    return loadContent<Experience>(modules);
}

// Load all education entries
export function getEducation(): Education[] {
    const modules = import.meta.glob('../content/education/*.ts', { eager: true });
    return loadContent<Education>(modules);
}

// Load all certifications
export function getCertifications(): Certification[] {
    const modules = import.meta.glob('../content/certifications/*.ts', { eager: true });
    return loadContent<Certification>(modules);
}

// Load all articles
export function getArticles(): Article[] {
    const modules = import.meta.glob('../content/articles/*.ts', { eager: true });
    return loadContent<Article>(modules);
}

// Load all skills (keeping as single file for now, but can be migrated later)
export function getSkills(): Skill[] {
    // For now, we'll keep skills in constants.ts or create a single skills.ts file
    // This can be refactored later if needed
    return [];
}
