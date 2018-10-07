import { FgMember } from "../types/FgMember";

const inspiration = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ' +
    'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ' +
    'ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ' +
    'in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat ' +
    'non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'


export const MOCKED_MEMBER_DARIA_with_BANNER_and_AVATAR = new FgMember(
    'Daria',
    'Quinn',
    'Cypress Bay High School',
    2020,
    'https://pics.freeartbackgrounds.com/midle/Autumn_Rural_Landscape_Background-637.jpg',
    'https://www.goodfreephotos.com/cache/people/female-face-woman-portrait_800.jpg',
    inspiration
);

export const MOCKED_MEMBER_DARIA_with_BANNER_no_AVATAR = new FgMember(
    'Daria',
    'Quinn',
    'Cypress Bay High School',
    2020,
    'https://pics.freeartbackgrounds.com/midle/Autumn_Rural_Landscape_Background-637.jpg',
    null,
    inspiration
);

export const MOCKED_MEMBER_DARIA_with_AVATAR_no_BANNER = new FgMember(
    'Daria',
    'Quinn',
    'Cypress Bay High School',
    2020,
    null,
    'https://www.goodfreephotos.com/cache/people/female-face-woman-portrait_800.jpg',
    inspiration
);

export const MOCKED_MEMBER_DARIA_no_AVATAR_no_BANNER = new FgMember(
    'Daria',
    'Quinn',
    'Cypress Bay High School',
    2020,
    null,
    null,
    inspiration
);
