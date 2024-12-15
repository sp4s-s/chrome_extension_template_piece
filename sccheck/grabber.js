let isActive = false;
let htmlPageData = {};

function collectHtmlPageData() {
  const html = document.documentElement.outerHTML;
  const url = window.location.href;
  htmlPageData[url] = html;
}

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "toggle") {
    isActive = !isActive;
    if (isActive) {
      collectHtmlPageData();
      console.log("Active");
    } else {
      console.log("Inactive");
    }
  } else if (request.action === "getStatus") {
    sendResponse({ isActive: isActive });
  }
});