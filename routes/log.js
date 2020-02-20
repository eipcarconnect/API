var fs = require('fs');



module.exports = 
function (message, level, file) 
{
    let date = new Date();
    let day = date.getDate();
    if (day < 10)
        day = "0" + day;
    let month = date.getMonth() + 1;
    if (month < 10)
        month = "0" + month; 
    let year = date.getFullYear();

    let hours = date.getHours();
    if (hours < 10)
        hours = "0" + hours;
    let minutes = date.getMinutes();
    if (minutes < 10)
        minutes = "0" + minutes;
    let seconds = date.getSeconds();
    if (seconds < 10)
        seconds = "0" + secondes;

    let error = "[" + day + "/" + month + "/" + year + " " + hours + ":" + minutes + ":" + seconds + "] [" + level + "] " + message; 
    
    console.log(error);
    fs.appendFile('log.txt', error + "\n", function (err) {
        if (err) 
            console.log('Error when writing log !');
      });
}