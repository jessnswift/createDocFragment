const familyMessages = document.querySelector("#messages");
const fragment = document.createDocumentFragment();

let messageOne = document.createElement('section');
messageOne.classList.add('message');
messageOne.textContent = "So how\'s your new phone?"

let messageTwo = document.createElement('section');
messageTwo.classList.add('message');
messageTwo.textContent = "You finally have a smartphone."

let messageThree = document.createElement('section');
messageThree.classList.add('message');
messageThree.textContent = "Mom?"

let messageFour = document.createElement('section');
messageFour.classList.add('message');
messageFour.textContent = "Are you there?"

let messageFive = document.createElement('section');
messageFive.classList.add('message');
messageFive.textContent = "Howdoyoudoaspace"

fragment.appendChild(messageOne);
fragment.appendChild(messageTwo);
fragment.appendChild(messageThree);
fragment.appendChild(messageFour);
fragment.appendChild(messageFive);

familyMessages.appendChild(fragment);