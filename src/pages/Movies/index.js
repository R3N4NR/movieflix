import {useEffect, useState} from 'react';
import './style.css'
import {useParams, useNavigate} from 'react-router-dom'
import api from '../../services/api'
import {toast} from 'react-toastify'

const Movie = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);

    const salvarFilme = () => {
        const minhaLista = localStorage.getItem("@movieflix");

        let filmesSalvos = JSON.parse(minhaLista) || [];
        
        const hasMovie = filmesSalvos.some( (filmesSalvos) => filmesSalvos.id === filme.id );
        
        if(hasMovie){
            toast.warn("O filme já está na lista !")
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem("@movieflix", JSON.stringify(filmesSalvos));

        toast.success("Filme salvo com sucesso !")
    }   

    useEffect(() => {
        async function loadFilme(){

            await api.get(`/movie/${id}`,{

            params:{
                api_key: "8abeeed5bba8c6ac8e98436fa16c50f4",
                    language: "pt-BR",
            }
        }).then((response) => {
            setFilme(response.data)
            setLoading(false);
        }).catch(() => {
            navigate("/", { replace:true });
            return;    
        })
        }
        loadFilme();

        return () => {
            console.log('UNMOUNT')
        }
    }, [id, navigate])

    if(loading){
        return(
            <div className='filmeLoading'>
                <h1>Carregando detalhes ...</h1>
            </div>
        )
    }
    return (
        
        <div className='filmeInfo'>
            
            <h1>{filme.title}</h1>
            <div className='buttonArea'>
                <button onClick={salvarFilme}>Salvar</button>
                <button> <a rel="external" target="blank" href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>Ver Trailer</a></button>
            </div>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
            <div>
                <h3>Sinopse</h3>
                <span>{filme.overview}</span>
                <h4>Avaliação: {filme.vote_average}/10</h4>
            </div>
            
        </div>
    )
}

export default Movie;