export const LANGUAGES_CODES = { en: "EN", ru: "RU" } as const;
export type LANGTYPES = (typeof LANGUAGES_CODES)[keyof typeof LANGUAGES_CODES];
