const rate=document.querySelector('.rating')
fetch('/rating.html')
.then(res=>res.text())
.then(data=>{
    rate.innerHTML=data
})