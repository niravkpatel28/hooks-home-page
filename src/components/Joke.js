// make an api call and fetch a random joke 

//same component can also be rendered using the custom hook 



import React from 'react'
// import axios from 'axios'
import { useFetch } from '../hooks/hooks';
const url = 'https://official-joke-api.appspot.com/jokes/random'
// function Joke(){
//     const [joke, setJoke] = useState({});
//     useEffect(()=>{
//         //will be called after every render 

        
//         axios.get('https://official-joke-api.appspot.com/jokes/random')
//         .then((joke)=>{
//             console.log(joke);
//             setJoke(joke.data)
//         })
        
//     },[])

//     return(
//         <>
//         <h3> Joke of the Day</h3>
//         <p> {joke.setup}</p>
//         <p> {joke.punchline}</p>
//         </>
//     )
// }


export default Joke


//using custom hook 

function Joke(){
    const joke = useFetch({},url);
    return(
        <>
        <h3> Joke of the Day</h3>
        <p> {joke.setup}</p>
        <p> {joke.punchline}</p>
        </>
    )
}