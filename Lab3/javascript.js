const siteName="AI tOOL dIRECTORY"
const toolPrice=499;
const userRole="Admin";

let toolName = "ChatGPT";              
let toolStatus = "Active";             
let visitCount = 0;                    
let message = "Hope You Buy";

 

console.log("Site Name:", siteName);
console.log("Tool Name:", toolName);
console.log("Tool Price:", toolPrice);
console.log("Tool Status:", toolStatus);
console.log("User Role:", userRole);
console.log("Visit Count:", visitCount);
console.log("Message:", message);



document.getElementById("toolName").innerText ="Tool Name: " + toolName;
document.getElementById("toolName").style.color="white";
document.getElementById("toolPrice").innerText ="Price: Rs." + toolPrice;
document.getElementById("toolPrice").style.color="white";
document.getElementById("toolStatus").innerText ="Status: " + toolStatus;
document.getElementById("toolStatus").style.color="white";
document.getElementById("userRole").innerText ="User Role: " + userRole;
document.getElementById("userRole").style.color="white";
document.getElementById("visitCount").innerText ="Visit Count: " + visitCount;
document.getElementById("visitCount").style.color="white";
document.getElementById("message").innerText =message;
document.getElementById("message").style.color="white";

//functions
function updateVisit(){
    visitCount++;
    message="Hope You Like!"
    console.log("visit count",visitCount);
    document.getElementById("visitCount").innerText="you are visited "+ visitCount +"  times";
    document.getElementById("visitCount").style.fontWeight="bold";
    document.getElementById("message").innerText=message;
    document.getElementById("message").style.fontWeight="bold";
}

function showtools(){
    let tools = [
    "ChatGPT – AI Chat Assistant",
    "Midjourney – AI Image Generator",
    "GitHub Copilot – AI Coding Assistant",
    "Canva AI – AI Design Tool"
];

for(let i=0; i<tools.length; i++){
    document.writeln("<p>" + tools[i] + "</p>");
}

   
}



