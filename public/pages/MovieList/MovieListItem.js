const MovieListItem = (movie) => {
    return(`
        <li class="nodot list-group-item">
        <div class="row">
        <div class="col-4">
         <img alt="Responsive image" class="img-fluid"
               src=${movie.poster} />
               <p class="mt-3 "><i class="fa-solid fa-star"></i> ${movie.review}</p></div>
               
         <div class="col-8">
            <h7>${movie.movieName} </h7>
            <p>Year: ${movie.year}</p>
            <p>Country: ${movie.country}</p>
            <p>Language: ${movie.language}</p>
            <p>Director: ${movie.director}</p>
            <p>Starring: ${movie.starring}</p>
            <p>Description: ${movie.description}</p>
         </div>
         
         
         
         </div>
         
        </li>`);
}
export default MovieListItem;

