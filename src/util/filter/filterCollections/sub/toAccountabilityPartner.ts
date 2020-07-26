import { RegexFilters, both } from '../../regexUtil';

export const toAccountabilityPartnerRegexArray: RegexFilters[] = [
  { titleText: /^accountability(\.)?$/i },
  
  { ...both, titleText: /seeking a partner/i },
  { ...both, titleText: /Looking for an accountability/i },
  { ...both, titleText: /accountability partner/i },
  { ...both, titleText: /need (AP|accountability partner)/i },
];
