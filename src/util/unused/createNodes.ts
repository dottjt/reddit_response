
// function submitForm() {
//   var http = new XMLHttpRequest();
//   http.open("POST", "<<whereverTheFormIsGoing>>", true);
//   http.setRequestHeader("Content-type","application/x-www-form-urlencoded");
//   var params = "search=" + <<get search value>>; // probably use document.getElementById(...).value
//   http.send(params);
//   http.onload = function() {
//       alert(http.responseText);
//   }
// }

// const createOneFieldForm = (buttonclickSubmit) => {
//   var formElement = document.createElement("form");
//   formElement.setAttribute('method',"post");
//   formElement.setAttribute('action',"http://localhost:3333/sendUserNote");

//   var inputUserNote = document.createElement("input"); //input element, text
//   inputUserNote.setAttribute('type',"text");
//   inputUserNote.setAttribute('name',"user_note");
//   inputUserNote.style.border = '1px solid black';

//   var submitButton = document.createElement('input');
//   submitButton.setAttribute('type', 'submit');
//   submitButton.setAttribute('value', 'Send Note');
//   submitButton.style.border = '1px solid black';

//   submitButton.addEventListener('click', buttonclickSubmit);

//   formElement.appendChild(inputUserNote);
//   formElement.appendChild(submitButton);

//   return formElement;
// }

// const createMiddleMessageLinkNode = (name, color, username, message, key) => {
//   const node = document.createElement('div');

//   node.style.color = color || 'black';
//   node.style.fontSize = '16px';

//   node.style.marginTop = '0.3rem';
//   node.style.marginBottom = '0.3rem';
//   node.style.marginLeft = '0.3rem';
//   node.style.marginRight = '0.3rem';

//   // node.target = "_blank"
//   var textnode = document.createTextNode(name + ' ');         // Create a text node
//   node.appendChild(textnode);

//   return node;
// }

// const populateMessagePanel = async (pageMessages) => {
//   [...pageMessages].map(containerDiv => {
//     const child = containerDiv.children[5];

//     const messagePanel = document.createElement('div');
//     messagePanel.appendChild(createMiddleMessageLinkNode())

//     child.parentNode.insertBefore(, child);

//     if (replyLink) {
//       const replyALink = replyLink.children[0];
//       console.log(replyALink);

//       replyALink.click();
//     }
//   });
// };
