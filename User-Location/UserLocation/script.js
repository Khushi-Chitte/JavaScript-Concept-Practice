const button = document.getElementById('getLoc-btn');

function gotLocation (position){
    console.log(position); 
}

function failedToGet(){
    console.log('Error in fetching the location')
}

button.addEventListener('click',async()=>{
     navigator.geolocation.getCurrentPosition(gotLocation,failedToGet)
})