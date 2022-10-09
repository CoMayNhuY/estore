import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Cart from '../pages/cart/Cart';
const routes = [
    {
        id: 1,
        path: '/',
        element: Home,
    },
    {
        id: 2,
        path: '/cart',
        element: Cart,
    },
];
function Routers() {
    return (
        <div>
            <Routes>
                {routes.map((item) => (
                    <Route key={item.id} exact element={<item.element />} path={item.path} />
                ))}
            </Routes>
        </div>
    );
}

export default Routers;
