
import {useEffect, useState} from 'react';


function Header() {

    var today = new Date();
    var tTime = ('0'+today.getHours()).slice(-2)  + ':' + ('0'+today.getMinutes()).slice(-2) + ':' + ('0'+today.getSeconds()).slice(-2);
    

    const [time, setTime] = useState(tTime);
   


    useEffect(() => {
        setInterval(() => {
        today = new Date();
        tTime = ('0'+today.getHours()).slice(-2)  + ':' + ('0'+today.getMinutes()).slice(-2) + ':' + ('0'+today.getSeconds()).slice(-2);
         setTime(tTime);
        }, 1000);


      /*  fetch("http://worldtimeapi.org/api/timezone/Europe/Berlin")
          .then(results => results.json())
          .then(data => {
            setBerlinTime(data.datetime)
          }) */



      }, []);
    
     return <span><h1>{time}</h1></span>;
     }



export default Header;