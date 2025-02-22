function SearchBar({hidden}){
    
    return(
        <>
        <input hidden={hidden} className="bg-[#2c2b2b] text-[#d3d9d3] p-0.5 pl-1.5 z-0 rounded-lg outline-none" placeholder="Search in your Library" type="search" ></input>
        </>
    )
}

export default SearchBar