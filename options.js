const btn=document.getElementById('text-submit')
const nameInput =document.getElementById('text-input')
btn.addEventListener('click',()=>{
const name=nameInput.value;
chrome.storage.sync.set({
    name:name,},
    ()=>{
        console.log(`Name is set to ${name}`)
    })
})
chrome.storage.sync.get(["name"],(res)=>{
nameInput.value=res.name;
})
