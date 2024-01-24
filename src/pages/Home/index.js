import './style.css'
import { useEffect, useState } from "react";
import api from '../../services/api'
import {Link} from 'react-router-dom'
//https://api.themoviedb.org/3/movie/now_playing?api_key=8abeeed5bba8c6ac8e98436fa16c50f4&language=pt-BR

const Home = () => {

    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {

        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: "8abeeed5bba8c6ac8e98436fa16c50f4",
                    language: "pt-BR",
                    page: 1,
                }
            })

            // console.log(response.data.results)

            setFilmes(response.data.results)
            setLoading(false);
        }

        loadFilmes();
    }, [])

    if(loading){
        return (
            <div className='loading'>
                <h2 className='piscar'>Carregando filmes ...</h2>
            </div>
        )
    }
    return (

        <div className="container">
            <div className="listagemFilmes">
                {filmes.map((filme) => {
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title}/>
                            <Link to={`/movie/${filme.id}`}> Acessar </Link>
                        </article>
                    )
                })}
            </div>
        </div>
        
    )
}

export default Home;