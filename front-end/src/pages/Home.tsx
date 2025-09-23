import SearchBar from "../compontents/searchBar"
import Moviecard from "../compontents/movieCard"
const Home  = () => {
    return(
        <div>
            <h1>Movie Search App</h1>
            <SearchBar />
            <Moviecard />
        </div>
    )
}
export default Home