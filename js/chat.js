const myChat = document.getElementById("mychat");
// const chatBtn = document.querySelector(".chat__icon");
const chatBtnArea = document.querySelector(".chat__area");
const messageBtnArea = document.querySelector(".chat__message");

const chatText = document.querySelector(".chat__icon--text");
const chatMe = document.querySelector(".chatme");
// const containerSend = document.querySelector(".chat__area--sender-mess");
const sendBtn = document.querySelector(".chat__message--send");
const containerSender = document.querySelector(".chat__area--sender");
const inputMessage = document.getElementById("message");
const containerAdmin = document.querySelector(".addmin-message");

chatMe.addEventListener("click", () => {
  closeChat();
});

myChat.addEventListener("click", chatMeFun);
function chatMeFun() {
  setTimeout(() => {
    chatBtnArea.classList.toggle("hidden");
    messageBtnArea.classList.toggle("hidden");
    chatMe.classList.toggle("hidden");
  }, 1000);
}
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !myChat.classList.contains("hidden")) {
    closeChat();
  }
});
// Close Chat Function
function closeChat() {
  chatBtnArea.classList.add("hidden");
  messageBtnArea.classList.add("hidden");
  chatMe.classList.add("hidden");
}
// Send button
sendBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const containerSend = document.createElement("div");
  const status = document.createElement("span");
  const message = document.createElement("p");

  if (inputMessage.value === "") {
    messageBtnArea.style.borderWidth = "2px";
    messageBtnArea.style.borderColor = "red";
  } else {
    containerSend.classList.add("chat__area--sender-mess");
    message.classList.add("chat__area-message");
    status.textContent = "...";
    // Timemout Function
    setTimeout(() => {
      status.textContent = "Reading...";
    }, 2000);

    containerSend.append(status);
    message.textContent = inputMessage.value;
    inputMessage.value = "";

    containerSend.append(message);
    containerSender.after(containerSend);
    chatBtnArea.append(containerSender);
    messageBtnArea.style.borderWidth = "1px";
    messageBtnArea.style.borderColor = "black";
    setTimeout(() => {
      status.innerHTML = `<img class="checked-icon" src="img/checked.png">`;
      setTimeout(() => {
        // Display Next Text
        const textArea = document.createElement("div");
        textArea.classList.add("chat__area--text");
        const hiPara = document.createElement("p");
        hiPara.classList.add("hi-para");
        hiPara.textContent = "...";
        hiPara.textContent =
          "Ooops We Are Facing Techinical Issues. We Shall come back To You Later.";
        const selectPara = document.createElement("p");
        selectPara.classList.add("select-para");
        selectPara.textContent = "Thank You🫱🏽‍🫲🏻";
        textArea.append(hiPara);
        textArea.append(selectPara);
        containerAdmin.after(textArea);
        chatBtnArea.append(containerAdmin);
      }, 3000);
    }, 5000);
  }
});
