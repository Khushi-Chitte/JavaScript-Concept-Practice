const button = document.getElementById('stop-btn');



function showTime(){
    const currtime = new Date();
    const time = `${currtime.getHours()}:${currtime.getMinutes()}:${currtime.getSeconds()}`;
    document.getElementById('time').innerText = time;
}

let interval = setInterval(showTime,1000);

button.addEventListener('click',()=>{
    clearInterval(interval);
})
