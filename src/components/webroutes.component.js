import { Routes, Route } from 'react-router-dom';

import HomePage from '../pages/home';
import ShopPage from '../pages/shop';

const WebRoutes = () => {
    return(
        <Routes>
            <Route exact path='/' element={<HomePage/>} />
            <Route exact path='/home' element={<HomePage/>} />
            <Route exact path='/shop' element={<ShopPage/>} />
        </Routes>
    );
}

export default WebRoutes;