const socket = io();
const chatUsername = document.querySelector('#chat-username');
const chatMessage = document.querySelector('#chat-message');

function showMessage(data) {
  const chatDisplay = document.querySelector('.chat-display');
  const newMessage = document.createElement('p');

  if (chatUsername.value === data.username) {
    newMessage.className = 'bg-success chat-text';
  } else {
    newMessage.className = 'bg-info text-warning chat-text';
  }

  newMessage.innerHTML = '<strong>' + data.username + '</strong>: ' + data.message;
  chatDisplay.insertBefore(newMessage, chatDisplay.firstChild);
}

socket.on('connect', () => {
  const {
    chatForm,
  } = document.forms;

  if (chatForm) {
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      socket.emit('postMessage', {
        username: chatUsername.value,
        message: chatMessage.value,
      });
      chatMessage.value = '';
      chatMessage.focus();
    });

    socket.on('updateMessages', (data) => {
      showMessage(data);
    });
  }
});
