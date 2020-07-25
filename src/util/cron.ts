import cron from 'node-cron';
// import path from 'path';
// import fse from 'fs-extra';

// const getNextHoursAgoValueToSearch = (timestamp: string): string | undefined => {
//   if (timestamp !== '') {
//     if (timestamp.includes('now') || timestamp.includes('minute')) {
//       return '1 hour ago';
//     }
//     if (timestamp.includes('hour')) {
//       const nextTimeNumber = parseInt(timestamp.split(' ')[0]) + 1;
//       return `${nextTimeNumber} hours ago`;
//     }

//     // This technically  is broken, because it will go another day per hour.
//     const nextTimeNumber = parseInt(timestamp.split(' ')[0]) + 1;
//     return `${nextTimeNumber} days ago`;
//   }

//   return undefined;
// }

const setupCron = () => {

  cron.schedule('* /10 * * *', async () => {
    try {
      const forumTimesList: { timestamp: string, start_date: string }[] = [
        { timestamp: 'R_NOFAP_TIMESTAMP', start_date: 'R_NOFAP_START_DATE' },
        { timestamp: 'R_PORN_FREE_TIMESTAMP', start_date: 'R_PORN_FREE_START_DATE' },
        { timestamp: 'R_PORN_ADDICTION_TIMESTAMP', start_date: 'R_PORN_ADDICTION_START_DATE' },
        { timestamp: 'R_NOFAP_CHRISTIANS_TIMESTAMP', start_date: 'R_NOFAP_CHRISTIANS_START_DATE' },
        { timestamp: 'R_NOFAP_TEENS_TIMESTAMP', start_date: 'R_NOFAP_TEENS_START_DATE' },
        { timestamp: 'R_SEMEN_RETENTION_TIMESTAMP', start_date: 'R_SEMEN_RETENTION_START_DATE' },
        { timestamp: 'R_MUSLIM_NOFAP_TIMESTAMP', start_date: 'R_MUSLIM_NOFAP_START_DATE' },
      ];

      // for (const forumTime of forumTimesList) {
      //   const configFile = path.resolve(__dirname, '..', 'util', 'config.ts');
      //   const confileFileContents = await fse.readFile(configFile, 'utf-8');

      //   const regex = new RegExp(`export const ${forumTime.timestamp} = '(?!NA).*;`);
      //   const regexDate = new RegExp(`export const ${forumTime.start_date} = '(?!NA).*;`);

      //   const timeStringMatch = confileFileContents.match(regex);
      //   const startDategMatch = confileFileContents.match(regexDate);

      //   if (timeStringMatch && startDategMatch) {
      //     const timeString = timeStringMatch[0].split('\'')[1]; // 1 minute ago
      //     const nextTime = getNextHoursAgoValueToSearch(timeString);

      //     // TODO I'm not sure how it will know that it's within the same ten minute timeframe.

      //     // const startDateDATE = new Date(startDategMatch[0].split('\'')[1]).getTime();

      //   //   const dateNow = new Date().getTime();
      //   //   const tenMinutesAgo = (
      //   //     new Date(dateNow - 10*60000)
      //   //   );

      //   //   if (publishDate >= tenMinutesAgo && publishDate <= dateNow) {
      //   //     const newContents =
      //   //     confileFileContents.replace(
      //   //       regex,
      //   //       `export const ${forumTime.timestamp} = '${nextTime}';`
      //   //     );

      //   //     fse.outputFile(configFile, newContents);
      //   //     console.log(`setMarkerRoute - ${nextTime}`);
      //   //   }
      //   }
      // }
    } catch (e) {
      throw new Error(e);
    }
  }, {
    scheduled: true,
    timezone: "Australia/Melbourne"
  });
}

export default setupCron;