function Timer(minutes) 
{
    let  Second= minutes * 60;
    let  timerDisplay = document.getElementById('timer');
    
    var interval = setInterval(function()
     {
        let minutes= Math.floor((Second % 3600) / 60);
        let seconds= Second% 60;
        
        timerDisplay.innerHTML =  (minutes < 10 ? "0" : "") + minutes + ":" + (seconds< 10 ? "0" : "") + seconds;
        document.getElementById("timer").innerHTML =   minutes + "M " + seconds + "S ";
        
        if (Second == 0) 
            
            {
            clearInterval(interval);
            timerDisplay.innerHTML = "Time's up!";
        } else 
        {
            Second--;
        }
    }, 1000);

}