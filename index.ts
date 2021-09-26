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

institutions: {
	iut: {
		cas: "https://cas.u-bordeaux.fr",
		domain: "u-bordeaux.fr"
	},
	enseirb: {
		cas: "https://cas.bordeaux-inp.fr",
		domain: "enseirb-matmeca.fr"
	}
}

interface InstitutionServiceURL {
    service: string;
    cas: string;
    domain: string;
}

export interface InstitutionsURLs {
    iut: InstitutionServiceURL;
    enseirb: InstitutionServiceURL;
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