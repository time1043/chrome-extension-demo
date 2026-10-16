const heading = document.querySelector("h1");

// chrome-types
chrome.runtime.getPlatformInfo((info) => {
  if (heading) {
    heading.textContent = `Platform: ${info.os}`;
  }
});
