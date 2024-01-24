import {Route,Routes, BrowserRouter} from 'react-router-dom'

import Home from './pages/Home'
import Movie from './pages/Movies'
import Favorites from './pages/favorites'
import Header from './components/Header'
import Error from './pages/error'
const RoutesApp = () => {

    return (
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/movie/:id' element={<Movie/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
            <Route path="*" element={<Error/>} />
        </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;