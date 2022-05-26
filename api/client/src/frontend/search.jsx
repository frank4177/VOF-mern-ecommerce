// import React from 'react'
// import './navbar.css'

// const Search = ({history}) => {
    
//     const [keyword, setKeyword] = useState("")

//     const handleSearch = (e) =>{
//         e.preventDefault()
//         if(keyword.trim()){
//             history.push( `/search/${keyword}`)
//         } else {
//             history.push('/')
//         }
//     }
    
//     return (
//         <div>
//     <form action="" onSubmit={handleSearch}>
//         <input type="text" placeholder="search here..." onChange={(e)=> setKeyword(e.target.value)} value={searchTerms}/>
//         <a href=""><Search className="search-icon"/></a>
//     </form>
//         </div>
//     )
// }

// export default Search;