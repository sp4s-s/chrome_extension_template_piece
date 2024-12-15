const scan =() =>{
    const susElement = [];
    const malAttributes = ["onclick", "onerror", "onload", "onmouse", "style", "srcdoc"];
    const tags = ['scripts', 'iframe', 'embed', 'object', 'link']

    document.querySelectorAll('*').forEach((element)=>{
        let isSus = false;
        let details ='';


        // Loose Check
        if (tags.includes(element.tagName.toLocaleLowerCase())){
            isSus = true;
            details += '\n - Sus Tag <${element.tagName.toLowerCase()}/>';
        }

        for (const atr of element.attributes){
            const attrName = atr.name.toLocaleLowerCase();
            const attrVal = atr.value;

            if (maliciousAttributes.includes(attrName) || attrName.startsWith('data')){
                isSus = true;
                details += '\n Sus attribute: $(attrName} = ${attrVal}'
            }
        }if ((attrName === 'src' || attrName === 'href') && !isSafeURL(attrValue)) {
            isSuspicious = true;
            details += `\n  - External URL: ${attrValue}`;
        }


    });
    if (suspiciousElements.length > 0) {
        chrome.runtime.sendMessage({ 
            type: "maliciousContentDetected", 
            details: suspiciousElements.length 
        });
    }
};

const isUrlSafe = (_url) =>{
    try {
        const parsedUrl = new URL(_url, window.location.origin);
        const allowedOrigins = [] ; // Some rules applied here not done yet but will be soon.. or maybe never
        return allowedOrigins.some(origin => parsedUrl === origin)
        } catch (error) {
        return true;  // Should be false here , change it after allowed origin url imple
    }
};
scan();