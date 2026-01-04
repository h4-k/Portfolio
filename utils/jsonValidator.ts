// No type imports needed for the validator logic using 'any'


interface ValidationResult {
    isValid: boolean;
    errors: string[];
}

const MAX_STRING_LENGTH = 10000;
const MAX_ARRAY_LENGTH = 100;
const MAX_OBJECT_DEPTH = 10;

const checkDepth = (obj: any, currentDepth: number = 0): boolean => {
    if (currentDepth > MAX_OBJECT_DEPTH) return false;
    if (typeof obj !== 'object' || obj === null) return true;

    for (const key in obj) {
        if (!checkDepth(obj[key], currentDepth + 1)) return false;
    }
    return true;
};

const validateString = (value: any, fieldName: string): string[] => {
    const errors: string[] = [];
    if (typeof value !== 'string') {
        errors.push(`${fieldName} must be a string`);
    } else if (value.length > MAX_STRING_LENGTH) {
        errors.push(`${fieldName} exceeds maximum length`);
    }
    return errors;
};

const validateStringArray = (value: any, fieldName: string): string[] => {
    const errors: string[] = [];
    if (!Array.isArray(value)) {
        errors.push(`${fieldName} must be an array`);
    } else if (value.length > MAX_ARRAY_LENGTH) {
        errors.push(`${fieldName} exceeds maximum length`);
    } else {
        value.forEach((item, index) => {
            if (typeof item !== 'string') {
                errors.push(`${fieldName}[${index}] must be a string`);
            } else if (item.length > MAX_STRING_LENGTH) {
                errors.push(`${fieldName}[${index}] exceeds maximum length`);
            }
        });
    }
    return errors;
};

export const validateProject = (data: any): ValidationResult => {
    const errors: string[] = [];

    if (!checkDepth(data)) {
        errors.push('Object depth exceeds maximum');
    }

    errors.push(...validateString(data.id, 'id'));
    errors.push(...validateString(data.title, 'title'));
    errors.push(...validateString(data.description, 'description'));
    errors.push(...validateStringArray(data.techStack, 'techStack'));

    if (!['DECLASSIFIED', 'RESTRICTED', 'TOP SECRET'].includes(data.securityLevel)) {
        errors.push('Invalid securityLevel value');
    }

    if (data.link !== undefined) {
        errors.push(...validateString(data.link, 'link'));
    }

    return { isValid: errors.length === 0, errors };
};

export const validateExperience = (data: any): ValidationResult => {
    const errors: string[] = [];

    if (!checkDepth(data)) {
        errors.push('Object depth exceeds maximum');
    }

    errors.push(...validateString(data.id, 'id'));
    errors.push(...validateString(data.role, 'role'));
    errors.push(...validateString(data.company, 'company'));
    errors.push(...validateString(data.period, 'period'));
    errors.push(...validateString(data.description, 'description'));
    errors.push(...validateStringArray(data.tech, 'tech'));

    return { isValid: errors.length === 0, errors };
};

export const validateEducation = (data: any): ValidationResult => {
    const errors: string[] = [];

    if (!checkDepth(data)) {
        errors.push('Object depth exceeds maximum');
    }

    errors.push(...validateString(data.id, 'id'));
    errors.push(...validateString(data.degree, 'degree'));
    errors.push(...validateString(data.school, 'school'));
    errors.push(...validateString(data.year, 'year'));

    if (data.honors !== undefined) {
        errors.push(...validateString(data.honors, 'honors'));
    }

    return { isValid: errors.length === 0, errors };
};

export const validateCertification = (data: any): ValidationResult => {
    const errors: string[] = [];

    if (!checkDepth(data)) {
        errors.push('Object depth exceeds maximum');
    }

    errors.push(...validateString(data.id, 'id'));
    errors.push(...validateString(data.name, 'name'));
    errors.push(...validateString(data.issuer, 'issuer'));
    errors.push(...validateString(data.date, 'date'));

    if (data.badgeUrl !== undefined) {
        errors.push(...validateString(data.badgeUrl, 'badgeUrl'));
    }

    return { isValid: errors.length === 0, errors };
};

export const validateArticle = (data: any): ValidationResult => {
    const errors: string[] = [];

    if (!checkDepth(data)) {
        errors.push('Object depth exceeds maximum');
    }

    errors.push(...validateString(data.id, 'id'));
    errors.push(...validateString(data.title, 'title'));
    errors.push(...validateString(data.summary, 'summary'));
    errors.push(...validateString(data.date, 'date'));
    errors.push(...validateString(data.readTime, 'readTime'));
    errors.push(...validateStringArray(data.tags, 'tags'));
    errors.push(...validateString(data.link, 'link'));

    return { isValid: errors.length === 0, errors };
};
