import { useEffect, useState } from "react"
import {Link} from 'react-router-dom'
import './style.css'
import {toast} from 'react-toastify'

const Favorites = () => {
    const [movies, setMovies] = useState([]);

    const deleteMovie = (id) => {

        let filterMovies = movies.filter((item) => {
            return (item.id !== id)
        })
        setMovies(filterMovies)
        localStorage.setItem("@movieflix", JSON.stringify(filterMovies))
        toast.success("Filme removido com sucesso !")
    }
    useEffect(() => {
        const minhaLista = localStorage.getItem("@movieflix");
        setMovies(JSON.parse(minhaLista) || []);
    }, []);
    
    return(
        <div className="favorites">
            <h1>Favorites</h1>
       {movies.length === 0 && <div className="emptyList"><span >Parece que não há filmes favoritados </span></div>}
            <ul>
                {movies.map((item) => {
                   
                    return (
                        <li key={item.id}>
                            <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={`${item.title}`}></img>
                            <span>{item.title}</span>
                            <button onClick={() => deleteMovie(item.id)}>Excluir</button>
                            <Link to={`/movie/${item.id}`}>Ver detalhes</Link>

                        </li>
                    
                )
            })
        }
    
            </ul>
        </div>
    )
}

export default Favorites;