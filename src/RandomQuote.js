import {useState, useEffect} from 'react';

function RandomQuote() {

        const [quote, setQuote] = useState(null)

        useEffect(() => {

            fetch("https://api.quotable.io/random")
                .then(results => results.json())
                .then(data => {
                    setQuote(data)
                })
           /* getQuote()
            async function getQuote(){
                const resp = await fetch("https://api.quotable.io/random")
                const data = await resp.json();

                setQuote(data)

            } */
        },[])

            return (
                <div>
                    {quote && (
                        <div className="quotes">
                           <div>{quote.content}</div>
                           <div><b>{quote.author}</b></div>
                        </div>
                        )}
                </div>

            )
    
  }

  export default RandomQuote;