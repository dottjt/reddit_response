// ==UserScript==
// @name         Reddit NoFap New Script
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.reddit.com/r/NoFap/new
// @match        https://www.reddit.com/r/NoFap/new/
// @require      file:///Users/julius.reade/Code/PER/reddit_response/src/tampermonkey/scripts/noFapNewSubreddit.js
// @grant        none
// ==/UserScript==

(async function() {
  'use strict';

  const opener = 'Hey, I saw your post on r/NoFap.';

const startAdvice = (
`${opener} It's great to see you've started!

The main thing with recovery is to focus on your mental health. Fundamentally, it's about learning to develop control over your mind so you can have the awareness to change your behaviours. Of course, that's a lot easier said than done, which is why it requires A LOT of practice. Which is why having a daily mental health routine is so important.

Do you do much for your mental health? Like meditate, and stuff?
`
);

const straightToGuide = (
`${opener}

If you're looking for advice, I've written a guide to overcoming porn addiction if you're interested?
`
)

const generalAdvice = (
`${opener}

The main thing with recovery is to focus on your mental health. Fundamentally, it's about learning to develop control over your mind so you can have the awareness to change your behaviours. Of course, that's a lot easier said than done, which is why it requires A LOT of practice. Which is why having a daily mental health routine is so important.

Do you do much for your mental health? Like meditate, and stuff?
`
);

const mentalhealthNotExerciseAdvice = (
`${opener}

I think you'll find that recovery is about focusing on your mental health, not so much about your physical health. Although physical activity can help tremendously, it doesn't address the heart of the problem, which is not having awareness and control over your mind.

Otherwise, you end up using exercise as a form of distraction and that's no different to procrastinating.
`
);


const amIAddictedAdvice = (
`${opener}

Essentially, you're no longer addicted when you have zero desire to do it. As in, never again. Up until then, you're still very much addicted. In most cases, if you can get past 90 days then it demonstrates that you're no longer addicted, but it depends for each person.

Ultimately it's about working on your mental health everyday. Keep that up and you'll get there, but it involves a lot of practice and remembering to meditate daily.
`
);

const flatlineAdvice = (
`${opener}

The main thing with flatline is to focus on the process. Emotions and feelings come and go, but the process always remains the same. This means focusing on your mental health, because all those things you're feeling like low energy and low motivation are merely symptoms, not the cause of the problem.

What's your mental health routine look like? Do you meditate daily?
`
);

const struggleBasics = (
`${opener}

I'm sorry to hear you're struggling. I don't mean to sound rude (definitely just trying to provide some perspective), but based on what you described it sounds like you don't have the fundamentals down.

Like, if you're worried about counting streaks or distracting yourself or trying to block porn or trying to define what constitutes as relapse, then it sounds like you're merely focusing on the symptoms. Not the cause, which is having poor mental health.

Ultimately what's important is having balance and having mental health. Once you get those things down recovery becomes a lot easier, because you're no longer fighting yourself and your feelings.

What kind of things do you do for your mental health each day? Do you meditate or practice awareness exercises?
`
);

const biggestDifference = (
`${opener}

Definitely meditation was what made the biggest difference for me. In fact, within 5 minutes of meditation was when I knew I would never relapse again and here I am at 250+ days. What&apos;s hard is convincing people to do it though, myself included. I resisted for years, but the moment I started doing it, I felt like such an idiot for being so stubborn haha.

Meditation also isn&apos;t effective if it&apos;s not consistent. It&apos;s a bit like dieting. You can&apos;t just diet for a week, and then splurge afterwards. It&apos;s about creating that lifestyle of balance and developing a mental health routine which allows you to develop control over your mind. So definitely it&apos;s something you should be doing daily.

So for me, I basically do 10 minutes of meditation each day and I would say that&apos;s enough for you to get started.

Thought you could use some advice to help you get further with your own recovery :D
`
);

const noReasonToRelapse = (
`${opener}

There is literally never any reason to masturbate or watch porn, ever. The only reason why you would have a desire to do it is because you're addicted to it, otherwise you wouldn't be having this thought at all.

There is no such thing as reasonable when it comes to addiction.
`
);

const accountabilityPartner = (
`${opener}

Happy to be your accountability partner! My name is Julius. I also run an accountability program on Discord (https://discord.com/invite/YETRkSj) and Reddit (https://www.reddit.com/r/NeverFapDeluxe/) if you're interested in receiving help from others as well.
`
);

const sorryToHearYouRelapsed = (
`${opener} I&apos;m sorry to hear you relapsed. Were you focusing on your mental health in order to help you deal with your feelings and emotions?

If you're struggling with recovery, then it might help to revisit the basics. Happy to provide some advice.
`
);
 // { startStruggleBasics }
  const sendNewMessageHTTP = async (dataPayload) => {
  try {
    const response = await fetch('http://localhost:3333/sendNewMessage',
    {
      method: 'POST',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({ data: dataPayload }) // body data type must match "Content-Type" header
    })

    const json = await response.json();
    return json;
  } catch(error) {
    console.log('Server not started.')
    throw new Error(`sendNewMessageHTTP - ${error}`);
  }
}

const uploadMessagesHTTP = async (dataPayload) => {
  try {
    const response = await fetch('http://localhost:3333/populateHistoricReceivedMessages',
    {
      method: 'POST',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({ data: dataPayload }) // body data type must match "Content-Type" header
    });

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log('please start server');
    throw new Error(`uploadMessagesHTTP - ${error}`);
  }
}

const fetchCheckUsernameResultHTTP = async (usernameArray) => {
  try {
    const response = await fetch('http://localhost:3333/checkUsernames',
    {
      method: 'POST',
      mode: 'cors',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify({ data: { usernames: usernameArray } }) // body data type must match "Content-Type" header
    })

    const json = await response.json();
    return json;
  } catch(error) {
    console.log('Server not started.')
    throw new Error(`fetchCheckUsernameResultHTTP - ${error}`);
  }
} // { fetchCheckUsernameResultHTTP }
  const createNode = (text, color) => {
  const node = document.createElement('span');
  node.style.color = color || 'black';
  node.style.fontSize = '20px';
  var textnode = document.createTextNode(text + ' ');         // Create a text node
  node.appendChild(textnode);

  return node;
}

const createStartMessageLinkNode = (name, color, username, message, key) => {
  const node = document.createElement('a');
  const url = `https://www.reddit.com/message/compose/?to=${username}&subject=Hey&message=${message}&type=${name}`;
  node.href = url;

  node.style.color = color || 'black';
  node.style.fontSize = '16px';

  node.style.marginTop = '0.3rem';
  node.style.marginBottom = '0.3rem';
  node.style.marginLeft = '0.3rem';
  node.style.marginRight = '0.3rem';

  node.target = "_blank"
  var textnode = document.createTextNode(name + ' ');         // Create a text node
  node.appendChild(textnode);

  return node;
}

const createMiddleMessageLinkNode = (name, color, username, message, key) => {
  const node = document.createElement('div');

  node.style.color = color || 'black';
  node.style.fontSize = '16px';

  node.style.marginTop = '0.3rem';
  node.style.marginBottom = '0.3rem';
  node.style.marginLeft = '0.3rem';
  node.style.marginRight = '0.3rem';

  node.target = "_blank"
  var textnode = document.createTextNode(name + ' ');         // Create a text node
  node.appendChild(textnode);

  return node;
}

const appendUserInformation = (tag, dbUser) => {
  tag.innerText = '';

  tag.style.marginTop = '1rem';
  tag.style.marginBottom = '1rem';
  tag.style.marginLeft = '1rem';
  tag.style.marginRight = '1rem';

  tag.appendChild(createNode(dbUser.username, dbUser.userColor));
  tag.appendChild(createNode(`Type: ${dbUser.userType}`, dbUser.userColor));
  tag.appendChild(createNode(`Sent: ${dbUser.sentCount}`, 'blue'));

  const lastSentTextcontainer = document.createElement('div');
  var textnode = document.createTextNode(dbUser.lastSentMessage); // Create a text node
  lastSentTextcontainer.appendChild(textnode);

  const container = document.createElement('div');
  container.style.marginTop = '1rem';
  container.style.marginBottom = '1rem';
  container.style.cursor = 'default';

  container.appendChild(createStartMessageLinkNode('customMessage', 'purple', dbUser.username, ''));
  container.appendChild(createStartMessageLinkNode('straightToGuide', 'purple', dbUser.username, straightToGuide));
  container.appendChild(createStartMessageLinkNode('startAdvice', 'purple', dbUser.username, startAdvice));
  container.appendChild(createStartMessageLinkNode('generalAdvice', 'purple', dbUser.username, generalAdvice));
  container.appendChild(createStartMessageLinkNode('mentalhealthNotExerciseAdvice', 'purple', dbUser.username, mentalhealthNotExerciseAdvice));
  container.appendChild(createStartMessageLinkNode('amIAddictedAdvice', 'purple', dbUser.username, amIAddictedAdvice));
  container.appendChild(createStartMessageLinkNode('flatlineAdvice', 'purple', dbUser.username, flatlineAdvice));
  container.appendChild(createStartMessageLinkNode('struggleBasics', 'purple', dbUser.username, struggleBasics));
  container.appendChild(createStartMessageLinkNode('biggestDifference', 'purple', dbUser.username, biggestDifference));
  container.appendChild(createStartMessageLinkNode('noReasonToRelapse', 'purple', dbUser.username, noReasonToRelapse));
  container.appendChild(createStartMessageLinkNode('accountabilityPartner', 'purple', dbUser.username, accountabilityPartner));
  container.appendChild(createStartMessageLinkNode('sorryToHearYouRelapsed', 'purple', dbUser.username, sorryToHearYouRelapsed));

  tag.parentNode.insertBefore(lastSentTextcontainer, container);
  tag.parentNode.insertBefore(container, tag);
};

// NOTE: This is not possible, because there are hundreds of these on a page and only one key.

// document.addEventListener('keypress', function(event) {
//   if (event.key === key) {
//     window.open(url, '_blank');
//     window.focus();
//   }
// })
 // { createNode, createMessageLinkNode }

  const TIMEFRAME = '1 hour ago';
  // const TIMEFRAME = '2 hours ago';
  // const TIMEFRAME = '1 day ago';
  // const TIMEFRAME = '2 days ago';

  const scrollToSpecifiedDate = (dateString) => new Promise(resolve => {
    let interval;

    interval = setInterval(() => {
      window.scrollTo(0,document.body.scrollHeight);

      const allTimeStamps = document.querySelectorAll('a[data-click-id="timestamp"]');

      for (const timeStampElement of allTimeStamps) {
        const doesTextContainDate = timeStampElement.innerText.includes(dateString);

        if (doesTextContainDate) {
          console.log('Complete: date reached');
          clearInterval(interval);
          resolve('Complete: date reached');
        } else {
          timeStampElement.remove();
        }
      }
    }, 500);
  });

  const getAllUsernames = () => {
    const allATags = document.querySelectorAll('a');
    const filteredATags = [...allATags].filter(tag => tag.innerText.includes('u/'));
    const usernames = filteredATags.map(tag => tag.innerText.split('/')[1]);
    return usernames;
  }

  const populateWebpageInformation = (users) => {
    const allATags = document.querySelectorAll('a');
    const filteredATags = [...allATags].filter(tag => tag.innerText.includes('u/'));
    filteredATags.forEach(tag => {
      const tagUsername = tag.innerText.split('/')[1];
      const dbUser = users.find(user => user.username === tagUsername);

      if (dbUser) {
        appendUserInformation(tag, dbUser)
      }
    });
  }
  console.log('START: start script');

  await scrollToSpecifiedDate(TIMEFRAME);
  const textUsernames = getAllUsernames();

  const usernamesResponse = await fetchCheckUsernameResultHTTP(textUsernames);
  const users = usernamesResponse.data.users;
  populateWebpageInformation(users);

  console.log('END: script complete');
})();
