export const LANGUAGES_CODES = { en: "en", ru: "ru" } as const;
export type LANGTYPES = (typeof LANGUAGES_CODES)[keyof typeof LANGUAGES_CODES];
