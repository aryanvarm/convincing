document.getElementById("yesButton").addEventListener("click", function () {
  const message = document.getElementById("responseMessage");
  message.style.display = "block";
  message.style.color = "#2ed573";
  message.textContent = "Yay! Can’t wait to see you tomorrow! 🎉";
});

document.getElementById("noButton").addEventListener("click", function () {
  const message = document.getElementById("responseMessage");
  message.style.display = "block";
  message.style.color = "#ffa502";
  message.textContent =
    "Haha, mahit hota but this is also a yes button ! See you tomorrow! 😜";
});
