import { RegexFilters } from '../../regexUtil';

export const toDealingWithUrgesAdviceRegexArray: RegexFilters[] = [
  { titleText: /advice on fighting urges/i },
  { titleText: /how to deal with ?(the)? urges/i },
  { titleText: /how to control urges/i },
  { titleText: /how do I resist the urge/i },
  { titleText: /urges from hell/i },
  { titleText: /how to beat .* urges/i },
  { titleText: /^urges(\.)?$/i },
  { titleText: /How do I overcome ?(.*) urges/i },
  { titleText: /Urges(\.)? Help me/i },
  { titleText: /very strong urges/i },
  { titleText: /anyone find the urges/i },
  { titleText: /help (w|with) persistent urge/i },

  { messageText: /Any tips on how to handle these?/i },
  { messageText: /help make me stop letting my urges/i },
];
