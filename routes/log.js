var fs = require('fs');



module.exports = 
function (message, level) 
{
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let error = "[" + day + "/" + month + "/" + year + " " + hours + ":" + minutes + ":" + seconds + "] [" + level + "] " + message; 
    
    console.log(error);
    fs.appendFile('log.txt', error + "\n", function (err) {
        if (err) 
            console.log('Error when writing log !');
      });
}