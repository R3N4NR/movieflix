import './style.css'

import {Link} from "react-router-dom"
const Error = () => {

    return(
        <div className="error">
            <h2>A página que você está tentando acessar não existe !</h2>
            <Link to="/">Veja todos os filmes !</Link>
        </div>
    )
}

export default Error;