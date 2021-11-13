import {useState, useEffect} from 'react'

function RandomUser() {



    const [firstName, setFirstName] = useState(null)
    //const [lastName, setlasttName] = useState(null)


    useEffect(() => {


        fetch('https://randomuser.me/api/')
            .then(results => results.json())
            .then(data => {
                console.log(data);
                setFirstName(data.results[0].name.first)
            })
    }, []);

    return (
        <div>
            {firstName}
        </div>
    )



}

export default RandomUser;