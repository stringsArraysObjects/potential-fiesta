

export default function SearhBar (){
    return(
        <form action="" className="search-bar">
            <input type="search" name="search" pattern=".*\S.*" required />
            <button className="search-btn" type="submit">
            <span>Search</span>
            </button>
        </form>
    )
}