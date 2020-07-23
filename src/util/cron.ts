import cron from 'node-cron';
import path from 'path';
import fse from 'fs-extra';

const getNextHoursAgoValueToSearch = (timestamp: string): string | undefined => {
  if (timestamp !== '') {
    if (timestamp.includes('now') || timestamp.includes('minute')) {
      return '1 hour ago';
    }
    if (timestamp.includes('hour')) {
      const nextTimeNumber = parseInt(timestamp.split(' ')[0]) + 1;
      return `${nextTimeNumber} hours ago`;
    }

    // This technically  is broken, because it will go another day per hour.
    const nextTimeNumber = parseInt(timestamp.split(' ')[0]) + 1;
    return `${nextTimeNumber} days ago`;
  }

  return undefined;
}

const setupCron = () => {

  cron.schedule('0 * * * *', async () => {
    const timestampList: string[] = [
      'R_NOFAP_TIMESTAMP',
      'R_PORN_FREE_TIMESTAMP',
      'R_PORN_ADDICTION_TIMESTAMP',
      'R_NOFAP_CHRISTIANS_TIMESTAMP',
      'R_NOFAP_TEENS_TIMESTAMP',
      'R_SEMEN_RETENTION_TIMESTAMP',
      'R_MUSLIM_NOFAP_TIMESTAMP',
    ];

    for (const timestampString of timestampList) {
      const configFile = path.resolve(__dirname, '..', 'util', 'config.ts');
      const confileFileContents = await fse.readFile(configFile, 'utf-8');

      const regex = new RegExp(`export const ${timestampString} = '(?!NA).*;`);

      const timeStringMatch = confileFileContents.match(regex);

      if (timeStringMatch) {
        const timeString = timeStringMatch[0].split('\'')[1]; // 1 minute ago
        const nextTime = getNextHoursAgoValueToSearch(timeString);

        const newContents =
          confileFileContents.replace(
            regex,
            `export const ${timestampString} = '${nextTime}';`
          );

        fse.outputFile(configFile, newContents);
        console.log(`setMarkerRoute - ${nextTime}`);
      }
    }
  }, {
    scheduled: true,
    timezone: "Australia/Melbourne"
  });
}

export default setupCron;