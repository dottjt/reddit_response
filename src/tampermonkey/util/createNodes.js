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
