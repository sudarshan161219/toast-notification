const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = [
  "message one",
  "message two",
  "message three",
  "message four",
];

button.addEventListener("click", () => createNotification());

function createNotification() {
  const notif = document.createElement("div");
  notif.classList.add("toast");

  notif.innerText = getRandomMsg();

  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 2000);
}

function getRandomMsg() {
  return messages[Math.floor(Math.random() * messages.length)];
}
