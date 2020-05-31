// Scripts for the popup

chrome.extension.getBackgroundPage().console.log("Running");
chrome.commands.onCommand.addListener(function(command) {
  if (command == "highlight-toggle") {
    chrome.storage.sync.get("qaEnabled", function(result) {
      console.log(result);
      if (!result.qaEnabled) {
        chrome.tabs.executeScript(null, {
          //Adding extension content in DOM
          file: "/js/qame.js"
        });
        chrome.storage.sync.set({ qaEnabled: true }, function() {
          console.log("data saved");
        });
      } else {
        chrome.tabs.executeScript(null, {
          //Removing previous extension content in DOM
          file: "/js/unqame.js"
        });
        chrome.storage.sync.set({ qaEnabled: false }, function() {
          console.log("data saved");
        });
      }
    });
  }
});
