import msgCommute from "./helpers/msg";

// Adding Listener
msgCommute();


function updateSession(msg){
    const status = document.getElementById("status");
    // status.
}

// var bkg = chrome.extension.getBackgroundPage();
// bkg.console.log('foo');

// Log a message when the popup is loaded
console.log("Popup loaded!");

// Get elements
const saveBtn = document.getElementById('saveBtn');
const retrieveBtn = document.getElementById('retrieveBtn');

// Add click listeners
saveBtn.addEventListener('click', () => {
    console.log("Save button clicked.");
    const dataName = document.getElementById('dataName').value;
    const dataValue = document.getElementById('dataValue').value;

    if (dataName && dataValue) {
        chrome.storage.local.set({ [dataName]: dataValue }, () => {
            console.log(`Saved data: ${dataName} = ${dataValue}`);
        });
    } else {
        console.log("Please enter both a name and a value.");
    }
});

retrieveBtn.addEventListener('click', () => {
    console.log("Retrieve button clicked.");
    const dataName = document.getElementById('dataName').value;

    if (dataName) {
        chrome.storage.local.get([dataName], (result) => {
            if (result[dataName]) {
                console.log(`Retrieved data: ${dataName} = ${result[dataName]}`);
                alert(`Data: ${dataName} = ${result[dataName]}`);
            } else {
                console.log("No data found for the given name.");
                alert("No data found.");
            }
        });
    } else {
        console.log("Please enter a name to retrieve.");
    }
});
