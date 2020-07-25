import { RegexFilters } from '../../regexUtil';

export const toAccountabilityPartnerRegexArray: RegexFilters[] = [
  { titleText: /seeking a partner/i },
  { titleText: /Looking for an accountability/i },
  { titleText: /accountability partner/i },
  { titleText: /^accountability(\.)?$/i },
  { titleText: /need (AP|accountability partner)/i },
];
