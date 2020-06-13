const createNode = (text, color) => {
  const node = document.createElement('span');
  node.style.color = color || 'black';
  node.style.fontSize = '20px';
  var textnode = document.createTextNode(text + ' ');         // Create a text node
  node.appendChild(textnode);

  return node;
}

const createMessageLinkNode = (text, color, username, message, key) => {
  const node = document.createElement('a');
  const url = `https://www.reddit.com/message/compose/?to=${username}&subject=Hey&message=${message}&hello=cake`;
  node.href = url;

  node.style.color = color || 'black';
  node.style.fontSize = '16px';

  node.target = "_blank"
  var textnode = document.createTextNode(text + ' ');         // Create a text node
  node.appendChild(textnode);

  // NOTE: This is not possible, because there are hundreds of these on a page and only one key.

  // document.addEventListener('keypress', function(event) {
  //   if (event.key === key) {
  //     window.open(url, '_blank');
  //     window.focus();
  //   }
  // })
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

  container.appendChild(createMessageLinkNode('emptyMessage', 'purple', dbUser.username, ''));
  container.appendChild(createMessageLinkNode('struggleBasics', 'purple', dbUser.username, struggleBasics));
  container.appendChild(createMessageLinkNode('biggestDifference', 'purple', dbUser.username, biggestDifference));
  container.appendChild(createMessageLinkNode('relapseReason', 'purple', dbUser.username, relapseReason));
  container.appendChild(createMessageLinkNode('accountabilityPartner', 'purple', dbUser.username, accountabilityPartner));

  tag.parentNode.insertBefore(lastSentTextcontainer, container);
  tag.parentNode.insertBefore(container, tag);
};
