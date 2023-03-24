import { MisdemeanourKind, JustTalk } from './misdemeanours.types'

export type ConfessionType = {
	subject: string;
	reason: MisdemeanourKind | JustTalk;
	details: string;
};

