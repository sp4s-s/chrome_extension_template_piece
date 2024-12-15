document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggle-button");
  
  toggleButton.addEventListener("click", function () {
    chrome.runtime.sendMessage({ action: "toggle" });
    toggleButton.classList.toggle("active");
    toggleButton.textContent = toggleButton.classList.contains("active") ? "ON" : "OFF";
  });
  
  chrome.runtime.sendMessage({ action: "getStatus" }, function (response) {
    if (response.isActive) {
      toggleButton.classList.add("active");
      toggleButton.textContent = "ON";
    }
  });
});