import {useState, useEffect} from 'react'

function Weather() {

    const [apiData, setApiData] = useState({});
    
    
 
    useEffect(() => {

    

    getOpenWeatherData();

    async function getOpenWeatherData() {
        const url = 'https://api.openweathermap.org/data/2.5/weather'
        const city = 'Los Angeles'
        const units = 'imperial'
        const apiKey = '75bdccd35fdd4183b3cb8025b4bd4ffe'
        const response = await fetch(`${url}?q=${city}&units=${units}&APPID=${apiKey}`)
      
        if (!response.ok) {
         // displayOpenWeatherErrorOnPage(response)
          throw new Error(`An error has occured: ${response.status} => ${response.statusText}`)
        }

        //const data = await response.json()
        setApiData(await response.json())
      }


    },[]);

    
    return (
        <div>
            {apiData && (
                <div className="quotes">
                   <div>{apiData.main}</div>
                </div>
                )}
        </div>

    )

}


export default Weather;