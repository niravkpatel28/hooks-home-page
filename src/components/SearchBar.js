import React ,{useState} from 'react';

const SearchBar= ()=>{
    const [userQuery, setUserQuery] = useState('');

   const updateUserQuery = (event)=>{
        console.log(userQuery)
        setUserQuery(event.target.value)
    }

    const searchQuery = ()=>{
        window.open(`https://google.com/search?q=${userQuery}`,'_blank')
    }

    const handleKeyPress=(event)=>{
        if(event.key === 'Enter'){
            searchQuery()
        }
    }
    return(
        <>
            <input type='input' name='search' 
                value={userQuery} onChange={updateUserQuery}
                onKeyPress={handleKeyPress}/>
            <button 
                onClick={searchQuery}
                >Search</button>
        </>
    )
}


export default SearchBar;