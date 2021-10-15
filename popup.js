 const timeElement=document.getElementById("time")
 const timerElement =document.getElementById("timer")

const userName=document.getElementById("name")

//wrap all the time elements in a function such that all
//updated eveery second
const updateTime =()=>{

    chrome.storage.local.get(["timer"],(res)=>{
        const  time= res.timer??0;
      timerElement.textContent=`The timer is presently at ${time}`
      })
      const currentTime = new Date().toLocaleTimeString();
      timeElement.textContent=`The Time is :${currentTime}`
}
//call the updatTime once as setInterval waits for a second before firing off
updateTime();
setInterval(updateTime,1000)

//get the name from the chrome storage
chrome.storage.sync.get(["name"],(res)=>{
userName.textContent=`The name of the user is ${res.name}`;
})
