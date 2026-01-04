import DOMPurify from 'dompurify';

const DANGEROUS_KEYS = ['__proto__', 'constructor', 'prototype'];

export const sanitizeText = (input: string): string => {
    if (!input) return '';

    return DOMPurify.sanitize(input, {
        ALLOWED_TAGS: [],
        ALLOWED_ATTR: [],
        KEEP_CONTENT: true,
    });
};

export const sanitizeEmail = (email: string): string => {
    const sanitized = sanitizeText(email);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(sanitized) ? sanitized : '';
};

export const sanitizeUrl = (url: string): string => {
    if (!url) return '';

    try {
        const urlObj = new URL(url);
        if (urlObj.protocol === 'http:' || urlObj.protocol === 'https:') {
            return DOMPurify.sanitize(url, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] });
        }
    } catch {
        return '';
    }

    return '';
};

export const sanitizeObject = <T extends Record<string, any>>(obj: T): T => {
    const sanitized = { ...obj };

    for (const key in sanitized) {
        if (DANGEROUS_KEYS.includes(key.toLowerCase())) {
            delete sanitized[key];
            continue;
        }

        if (typeof sanitized[key] === 'string') {
            sanitized[key] = sanitizeText(sanitized[key]) as any;
        } else if (Array.isArray(sanitized[key])) {
            sanitized[key] = sanitized[key].map((item: any) =>
                typeof item === 'string' ? sanitizeText(item) : item
            ) as any;
        } else if (typeof sanitized[key] === 'object' && sanitized[key] !== null) {
            sanitized[key] = sanitizeObject(sanitized[key]) as any;
        }
    }

    return sanitized;
};
