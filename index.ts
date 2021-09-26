export interface Permission {
    id: string;
    name: string;
}

export interface RoleType {
    id: string;
    name: string;
    description: string;
}

export interface Role {
    id: string;
    type: RoleType;
    displayName: string;
    shortName?: string;
    specificTo?: string;
    suffix?: string;

    color?: string;
    icon?: string;
    displayOnLogin: boolean;

    hoist: boolean;
    discordId?: string;
    position?: number;

    permissions?: Permission[]
}

export interface InstitutionsURLs {
    iut: string;
    enseirb: string;
}

export interface Institution {
    id: string;
    name: string;
    authorizedDomains: string[];
    casServer?: string;
}

export interface User {
    username: string;
    email: string;
    photoURL?: string;
    personalEmail?: string;
    displayName: string;
    firstName: string;
    lastName: string;
    customDisplayName?: string;
    gender?: string;
    groups?: Role[] | string[],
    options?: Role[] | string[],
    roles?: Role[] | string[],
    permissions?: Role[] | string[],
    discordId?: string;
}