import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/home';
import AboutPage from '../pages/about';

const WebRoutes = () => {
    return(
        <Routes>
            <Route exact path='/' element={<HomePage/>} />
            <Route exact path='/home' element={<HomePage/>} />
            <Route exact path='/about' element={<AboutPage/>} />
            <Route exact path='/avni' element={<AboutPage/>} />
        </Routes>
    );
}

export default WebRoutes;