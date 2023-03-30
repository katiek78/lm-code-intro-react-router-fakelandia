export const MISDEMEANOURS = [
	'rudeness',
	'vegetables',
	'lift',
	'united',
] as const;
export type MisdemeanourKind = (typeof MISDEMEANOURS)[number];

export const JUST_TALK = 'just-talk';
export type JustTalk = typeof JUST_TALK;

export type Misdemeanour = {
	citizenId: number;
	misdemeanour: MisdemeanourKind;
	date: string; // we'll stringify this for easy sending via HTTP rather than storing the full Date object
	details?: string;
};

export const MISDEMEANOUR_EMOJIS = [
	'🤪',	
	'🥗',
	'🗣',
	'😈'
]

export function isMisdemeanourKindorJustTalk(
	userInput: string
  ): userInput is MisdemeanourKind | JustTalk {
	return (
	  MISDEMEANOURS.find((el) => el === userInput) !== undefined ||
	  userInput === JUST_TALK
	);
  }