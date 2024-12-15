// import msgCommute from "./helpers/msg";

// // ADDING Listner
// msgCommute();

// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//     if (message.type === "maliciousContentDetected") {
//         console.log(`Malicious content detected: ${message.details} suspicious elements.`);
//         chrome.action.openPopup();
//     }
// });












import msgCommute from "./helpers/msg.js";

// Initialize the message communication
msgCommute();

// Listener for malicious content detection
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "maliciousContentDetected") {
        console.log(`Malicious content detected: ${message.details} suspicious elements.`);
        
        // Since chrome.action.openPopup() is not supported, consider alternatives:
        // You can show a notification instead of opening the popup directly.
        chrome.notifications.create({
            type: "basic",
            iconUrl: "icon128.png",
            title: "Malicious Content Detected",
            message: `Suspicious elements: ${message.details}`,
            priority: 2
        });
    }
});






























// // chrome.runtime.onInstalled.addListener(()=>{
// //     let name = "Markson";
// //     let data = {key: "ListId", _id: "ASDFG"} ;

// //     chrome.storage.local.set({[name]: data}, function(){
// //         console.log('data saved under name: ${name}');
// //         console.log('the data itself being: ${data}')
// //     })
// // })

// // function getDataByName(name, callback){
// //     chrome.storage.local.get([name], function(result){
// //         if (chrome.runtime.lastError){
//             // console.error("Error retrieving Data :  ", chrome.runtime.lastError);
// //             callback(null);
// //         }else{
// //             callback(result[name]);
// //         }
// //     });
// // }

// // Works on Click
// // chrome.action.onClicked.addListener(()=>{

// // })

// // console.log("first")
