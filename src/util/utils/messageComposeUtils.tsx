import { render } from 'inferno';
import { createElement } from 'inferno-create-element';
import { MarkUserHostileButton } from '../../components/ComponentsUtil';

export const closeTabAfterDelay = (delay: number, window: any): Promise<void> => new Promise((resolve, reject) => {
  setTimeout(function() {
    console.log(`closing tab in ${delay}.`);
    window.open('https://reddit.com/', '_self')?.close();
    resolve();
  }, delay);
});

export const randomMessageDelay = (timer: string): Promise<void> => new Promise(resolve => {
  const delay = 1000 + Number(timer);
  setTimeout(function() { resolve() }, delay);
});

export const getTypeQueryString = (searchString: string): string => {
  if (searchString.includes('&')) {
    const arrayWithType = searchString.split('&').filter(item => item.includes('type='));
    if (arrayWithType.length === 1) {
      const type = arrayWithType[0].split('=')[1];
      return type;
    }
  }
  return 'reply';
}

export const getMessageQueryString = (searchString: string): string => {
  if (searchString.includes('&')) {
    const arrayWithType = searchString.split('&').filter(item => item.includes('message='));
    if (arrayWithType.length === 1) {
      const type = arrayWithType[0].split('=')[1];
      return type;
    }
  }
  return 'reply';
}

export const getTimerQueryString = (searchString: string): string | undefined => {
  if (searchString.includes('&')) {
    const arrayWithTimer = searchString.split('&').filter(item => item.includes('timer='));
    if (arrayWithTimer.length === 1) {
      const type = arrayWithTimer[0].split('=')[1];
      return type;
    }
  }
}

export const createHostileContainer = (iFrame, toInput): void => {
  const prelimContainer = document.createElement('div');
  prelimContainer.id = 'reade-automate-container';
  const titleContainer = iFrame?.contentWindow?.document?.querySelectorAll('.title')[3];

  titleContainer?.parentNode?.insertBefore(prelimContainer, titleContainer);

  const readeAutomateContainer = iFrame?.contentWindow?.document?.querySelector('#reade-automate-container');
  if (readeAutomateContainer) {
    render(<MarkUserHostileButton username={toInput}/>, readeAutomateContainer);
  }
}
