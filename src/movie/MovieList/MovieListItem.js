import React from "react";

const MovieListItem = ( {movie = {
                            poster: 'https://cdn.shopify.com/s/files/1/0057/3728/3618/products/everything-everywhere-all-at-once_nysayfbn_480x.progressive.jpg?v=1648143747',
                            director:'Dan Kwan  Daniel Scheinert', producer:'Anthony Russo',
                            year:'2022',
                            review:'10/10',
                            country:'United States',
                            time:'139 minutes',
                            language:'English, Mandarin, Cantonese',
                            starring:'Michelle Yeoh, Stephanie Hsu, Ke Huy Quan, Jenny Slate, Harry Shum Jr., James Hong',
                            movieName: 'Everything Everywhere All at Once', description: 'When an interdimensional rupture unravels reality, an unlikely hero must channel her newfound powers to fight bizarre and bewildering dangers from the multiverse as the fate of the world hangs in the balance.',

}}) => {
    return(
        <li className="nodot list-group-item">
        <div className="row">
        <div className="col-4">
         <img alt="Responsive image" class="img-fluid"
               src={movie.poster} />
               <p className="mt-3 "><i class="fa-solid fa-star"></i> {movie.review}</p></div>
               
         <div className="col-8">
            <h7>{movie.movieName} </h7>
            <p>Year: {movie.year}</p>
            <p>Country: {movie.country}</p>
            <p>Language: {movie.language}</p>
            <p>Director: {movie.director}</p>
            <p>Starring: {movie.starring}</p>
            <p>Description: {movie.description}</p>
         </div>
         
         
         
         </div>
         
        </li>);
}
export default MovieListItem;