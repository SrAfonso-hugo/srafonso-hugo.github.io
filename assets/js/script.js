// script.js

document.getElementById("toggle-contacts").addEventListener("click", function () {
  const contacts = document.getElementById("contacts");
  if (contacts.classList.contains("hidden")) {
    contacts.classList.remove("hidden");
    this.querySelector("span").textContent = "Hide Contacts";
  } else {
    contacts.classList.add("hidden");
    this.querySelector("span").textContent = "Show Contacts";
  }
});
