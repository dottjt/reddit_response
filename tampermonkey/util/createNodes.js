const createNode = (text, color) => {
  const node = document.createElement('span');
  node.style.color = color || 'black';
  node.style.fontSize = '20px';
  var textnode = document.createTextNode(text + ' ');         // Create a text node
  node.appendChild(textnode);

  return node;
}

const createMessageLinkNode = (text, color, username, message) => {
  const node = document.createElement('a');
  node.href = `https://www.reddit.com/message/compose/?to=${username}&subject=Hey&message=${message}&hello=cake`;
  node.style.fontSize = '20px';
  var textnode = document.createTextNode(text + ' ');         // Create a text node
  node.appendChild(textnode);

  return node;
}
