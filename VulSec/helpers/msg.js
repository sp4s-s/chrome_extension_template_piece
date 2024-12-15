const msgCommute = () =>{
    chrome.runtime.onMessage.addListener((msg , sender ,sendResponse) =>{
        if (msg.header === "VulSecHeader"){
            console.log("valid pass ✅✅✅", msg.data);
            const message = "NUll msg for now...";
            popupRes(true, message);
    
        }else{
            console.error("Request Validy UnTrustWorthy...");
        }
    });
}


function popupRes(valid , msg){
    if (valid){
        chrome.runtime.sendMessage(msg, (res)=>{
            if (chrome.runtime.lastError){
                console.error("Error at popupRes ", chrome.runtime.lastError.message);
            }else{
                console.log("Response for popup: ", res);
            }
        });
    }
}

export default msgCommute;