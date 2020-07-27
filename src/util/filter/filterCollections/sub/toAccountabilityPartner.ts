import { RegexFilters, both } from '../../regexUtil';

export const toAccountabilityPartnerRegexArray: RegexFilters[] = [
  { titleText: /^accountability(\.)?$/i },

  { ...both, titleText: /seeking a (Parter|partner)/i },
  { ...both, titleText: /Looking for an accountability/i },
  { ...both, titleText: /accountability (Parter|partner)/i },
  { ...both, titleText: /accountability (Parter|partner)/i },

  { ...both, titleText: /need (AP|accountability (Parter|partner))/i },
];
