import {useState, useEffect} from 'react' 


function CryptoPrice() {

    const [price, setPrice] = useState(null);
    const coin = 'BTC'
    useEffect(() => {

        fetch(`https://api.binance.com/api/v3/ticker/price?symbol=${coin}USDT`)
            .then(results => results.json())
            .then(data => {
                console.log(typeof(data.price))
                setPrice(Number(data.price))
            })
    },[])

    return (
        <div><span><b>BTC Price</b> $ {price}</span></div>
    )



}

export default CryptoPrice;