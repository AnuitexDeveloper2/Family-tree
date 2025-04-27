export interface MemberCardDetail {
    birthYear: string;
    firstName: string;
    lastName: string;
    surname: string;
}

export interface MemberData {
    id: string;
    firstName?: string;
    lastName?: string;
    surname?: string;
    birthYear?: string;
    birthDate?: string;
    birthPlace?: string;
    deathYear?: string;
    deathDate?: string;
    biography?: string;
    photosUrl?: string[];
}