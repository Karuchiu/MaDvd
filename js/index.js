let moviesEndPoint = "now_playing"
const apiKey = "f3812490406aa4d54789e3878cd570ae"

const baseURL = `https://api.themoviedb.org/3/movie/${moviesEndPoint}?api_key=${apiKey}&language=en-US&page=1`

const nowPlayingUl = document.getElementById('now-playing')

let poster_path;
const posterBaseUrl = `https://image.tmdb.org/t/p/w500`

//Implement the logic to fetch the data from the AP*
function getNowPlayingMovies(){
    fetch(baseURL)
        .then(resp => resp.json())
        .then(data => {
            const movies = data.results
            let moviesArr = movies.map( movie =>
                {
                    let movieObj = {
                        id: movie.id,
                        title: movie.title,
                        overview: movie.overview,
                        image: posterBaseUrl+movie.poster_path,
                        vote_average : movie.vote_average
                    }
                    return movieObj
                }
            
            )
         console.log(moviesArr)
        })
}

// data => {
//     const movies = data.results
//     let moviesArr = movies.map( movie 
//         => {
//             let movieObj = {
//                 id: movie.id,
//                 title: movie.title,
//                 overview: movie.overview,
//                 image: posterBaseUrl+movie.poster_path,
//                 vote_average : movie.vote_average
//             }
//             return movieObj
//         }
    
//     )
//  console.log(moviesArr)
// }

getNowPlayingMovies()