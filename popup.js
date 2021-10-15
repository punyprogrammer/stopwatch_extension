const timeElement=document.getElementById("time")
const currentTime = new Date().toLocaleTimeString();
timeElement.textContent=`The Time is :${currentTime}`
//chrome setBadgeText-->This sets the text on the icon once it is clicked
chrome.action.setBadgeTe