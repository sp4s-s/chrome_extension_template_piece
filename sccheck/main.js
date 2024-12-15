// Body All Data Grabber
const fullBody = document.body.innerHTML;

// Save to File
function saveToFile(filename, data) {
    const blob = new Blob([data], { type: 'text/plain' });
    const link = document.createElement('a');
    link.download = filename;
    const url = URL.createObjectURL(blob);
    link.href = url;
    link.click();
    URL.revokeObjectURL(url);
}

const data = 'Hello, this is the content of the file!';
const filename = 'example.txt';

fl = "data.txt"
dt = fullBody;

const grabData = (tabID) => {
    chrome.scripting.executeScript({
        target: { tabId: tabID },
        func: () => document.documentElement.outerHTML
    });
};

var qrs = ()=>{
    chrome.tabs.query({}, (tabs) => {
        const tabIDs = tabs.map(tab => tab.id);
       return tabIDs;  // Logs an array of all open tab IDs
    });
    
}

saveToFile(fl, dt);

console.log(qrs);
