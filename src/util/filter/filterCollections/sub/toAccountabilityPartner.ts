export const toAccountabilityPartner = (titleText: string, flairText: string, messageText: string): boolean =>
  new RegExp(/seeking a partner/i).test(titleText)
  || new RegExp(/Looking for an accountability/i).test(titleText)
  || new RegExp(/accountability partner/i).test(titleText)
  || new RegExp(/^accountability(\.)?$/i).test(titleText)
  || new RegExp(/need (AP|accountability partner)/i).test(titleText)
