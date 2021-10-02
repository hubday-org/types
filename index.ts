import * as netlify from '@netlify/functions/src/function/response';

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

interface InstitutionAuthURLs {
	service: string;
	cas: string;
}

export interface InstitutionsAuthURLs {
	[key: string]: InstitutionAuthURLs;
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

export interface HubdayResponse<T> {
	status: "ok" | "error";
	code: number;
	message: string;
	data: T;
}

export interface NetlifyHubdayResponse extends Omit<netlify.Response, 'body'> {
	body: HubdayResponse<unknown>;
}
