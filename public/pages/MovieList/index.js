import MovieListItem from "./MovieListItem.js";
import movie from "./movie.js"

const MovieList = () => {
    return (`
           <ul className="list-group">
            
            <li class="list-group-item">Movie Details</li>
            <!-- continue here -->
            ${
        movie.map(movie => {
            return(MovieListItem(movie));
        }).join('')
    }
            
            </ul>
`); }

export default  MovieList;