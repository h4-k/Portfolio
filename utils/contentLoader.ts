import type { Project, Experience, Education, Certification, Article } from '../types';
import { sanitizeObject } from './sanitizer';
import {
    validateProject,
    validateExperience,
    validateEducation,
    validateCertification,
    validateArticle,
} from './jsonValidator';

const loadJsonFromDirectory = async <T>(
    directory: string,
    files: string[],
    validator: (data: any) => { isValid: boolean; errors: string[] }
): Promise<T[]> => {
    const results: T[] = [];

    for (const file of files) {
        try {
            const baseUrl = import.meta.env.BASE_URL;
            // Ensure no double slashes
            const path = `${baseUrl}data/${directory}/${file}.json`.replace(/\/+/g, '/');
            const response = await fetch(path);
            if (!response.ok) continue;

            const data = await response.json();

            const validation = validator(data);
            if (!validation.isValid) {
                continue;
            }

            const sanitized = sanitizeObject(data);
            results.push(sanitized as T);
        } catch (error) {
            continue;
        }
    }

    return results;
};

export const loadProjects = async (): Promise<Project[]> => {
    const files = ['zero-day-hunter', 'phantom-proxy', 'neural-breach', 'cryptic-vault'];
    return loadJsonFromDirectory<Project>('projects', files, validateProject);
};

export const loadExperience = async (): Promise<Experience[]> => {
    const files = ['cyberdyne', 'blackmesh', 'netcorp'];
    return loadJsonFromDirectory<Experience>('experience', files, validateExperience);
};

export const loadEducation = async (): Promise<Education[]> => {
    const files = ['mit', 'stanford'];
    return loadJsonFromDirectory<Education>('education', files, validateEducation);
};

export const loadCertifications = async (): Promise<Certification[]> => {
    const files = ['oscp', 'cissp', 'ceh', 'i2cs', 'nexhunt', 'cyber-basics'];
    return loadJsonFromDirectory<Certification>('certificates', files, validateCertification);
};

export const loadArticles = async (): Promise<Article[]> => {
    const files = ['aslr-bypass', 'quantum-decryption', 'social-engineering-ai'];
    return loadJsonFromDirectory<Article>('articles', files, validateArticle);
};

export const loadAllContent = async () => {
    const [projects, experience, education, certifications, articles] = await Promise.all([
        loadProjects(),
        loadExperience(),
        loadEducation(),
        loadCertifications(),
        loadArticles(),
    ]);

    return {
        projects,
        experience,
        education,
        certifications,
        articles,
    };
};
