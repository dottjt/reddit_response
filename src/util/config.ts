// Relapsed again. Back to day 1!!! Its very annoying. FOR NEW PEOPLE!!
// Journal Check-In

// CyberSmith34 8:00am
export type ConfigType = {
  usernameValue: string;
  usernameTimestamp: string;
  forumType: ForumType;
}

// export const USERNAME = 'NA';
export enum ForumType {
  rNofapForum='r/NoFap',
  rPornFreeForum='r/pornfree',
  rPornAddictionForum='r/PornAddiction',
  rNofapChristiansForum='r/NoFapChristians',
  rNofapTeensForum='r/NoFapTeens',
  rSemenRetentionForum='r/Semenretention',
  rMuslimNofapForum='r/MuslimNoFap',
}

export const fakeConfigType: ConfigType = {
  usernameValue: 'NA',
  usernameTimestamp: 'NA',
  forumType: ForumType.rNofapForum,
}

export const INBOX_LAST_MESSAGE_USER = 'AccordingJob1';

export const R_NOFAP_USERNAME = 'just_a_jerk_';
export const R_NOFAP_TIMESTAMP = '2 minutes ago';
export const R_NOFAP_START_DATE = 'Tue Jul 28 2020 07:48:38 GMT+1000 (Australian Eastern Standard Time)'; // todo, all this shit.

export const R_PORN_FREE_USERNAME = '1milktime1';
export const R_PORN_FREE_TIMESTAMP = '1 hours ago';
export const R_PORN_FREE_START_DATE = 'Tue Jul 28 2020 07:29:16 GMT+1000 (Australian Eastern Standard Time)';

export const R_PORN_ADDICTION_USERNAME = 'cluterfoot5';
export const R_PORN_ADDICTION_TIMESTAMP = '12 hours ago';
export const R_PORN_ADDICTION_START_DATE = 'Mon Jul 27 2020 20:53:07 GMT+1000 (Australian Eastern Standard Time)';

export const R_NOFAP_CHRISTIANS_USERNAME = '';
export const R_NOFAP_CHRISTIANS_TIMESTAMP = '';
export const R_NOFAP_CHRISTIANS_START_DATE = '';

export const R_NOFAP_TEENS_USERNAME = '';
export const R_NOFAP_TEENS_TIMESTAMP = '';
export const R_NOFAP_TEENS_START_DATE = '';

export const R_SEMEN_RETENTION_USERNAME = '';
export const R_SEMEN_RETENTION_TIMESTAMP = '';
export const R_SEMEN_RETENTION_START_DATE = '';

export const R_MUSLIM_NOFAP_USERNAME = '';
export const R_MUSLIM_NOFAP_TIMESTAMP = '';
export const R_MUSLIM_NOFAP_START_DATE = '';


export const TIMEFRAME = 'NA';
// export const TIMEFRAME = '1 hour ago';
// export const TIMEFRAME = '2 hours ago';
// export const TIMEFRAME = '3 hours ago';
// export const TIMEFRAME = '4 hours ago';
// export const TIMEFRAME = '5 hours ago';
// export const TIMEFRAME = '6 hours ago';
// export const TIMEFRAME = '7 hours ago';
// export const TIMEFRAME = '8 hours ago';
// export const TIMEFRAME = '9 hours ago';
// export const TIMEFRAME = '10 hours ago';
// export const TIMEFRAME = '11 hours ago';
// export const TIMEFRAME = '12 hours ago';
// export const TIMEFRAME = '13 hours ago';
// export const TIMEFRAME = '14 hours ago';
// export const TIMEFRAME = '15 hours ago';


export const getUsernameMarker = (location): ConfigType => {
  if (location.pathname.toLowerCase().includes('/nofap/new')) {
    return {
      usernameValue: R_NOFAP_USERNAME,
      usernameTimestamp: R_NOFAP_TIMESTAMP,
      forumType: ForumType.rNofapForum
    }
  }
  if (location.pathname.toLowerCase().includes('/pornfree/new')) {
    return {
      usernameValue: R_PORN_FREE_USERNAME,
      usernameTimestamp: R_PORN_FREE_TIMESTAMP,
      forumType: ForumType.rPornFreeForum
    }
  }
  if (location.pathname.toLowerCase().includes('/pornaddiction/new')) {
    return {
      usernameValue: R_PORN_ADDICTION_USERNAME,
      usernameTimestamp: R_PORN_ADDICTION_TIMESTAMP,
      forumType: ForumType.rPornAddictionForum
    }
  }
  if (location.pathname.toLowerCase().includes('/nofapchristians/new')) {
    return {
      usernameValue: R_NOFAP_CHRISTIANS_USERNAME,
      usernameTimestamp: R_NOFAP_CHRISTIANS_TIMESTAMP,
      forumType: ForumType.rNofapChristiansForum
    }
  }
  if (location.pathname.toLowerCase().includes('/nofapteens/new')) {
    return {
      usernameValue: R_NOFAP_TEENS_USERNAME,
      usernameTimestamp: R_NOFAP_TEENS_TIMESTAMP,
      forumType: ForumType.rNofapTeensForum
    }
  }
  if (location.pathname.toLowerCase().includes('/semenretention/new')) {
    return {
      usernameValue: R_SEMEN_RETENTION_USERNAME,
      usernameTimestamp: R_SEMEN_RETENTION_TIMESTAMP,
      forumType: ForumType.rSemenRetentionForum
    }
  }
  if (location.pathname.toLowerCase().includes('/muslimnofap/new')) {
    return {
      usernameValue: R_MUSLIM_NOFAP_USERNAME,
      usernameTimestamp: R_MUSLIM_NOFAP_TIMESTAMP,
      forumType: ForumType.rMuslimNofapForum
    }
  }

  // // NO FAP forumns
  // if (location.pathname.toLowerCase().includes('index.php')) {
  //   if (location.search.includes('self-improvement')) {
  //     //
  //   }
  // }

  return {
    usernameValue: '',
    usernameTimestamp: '',
    forumType: ForumType.rNofapForum
  };
}
