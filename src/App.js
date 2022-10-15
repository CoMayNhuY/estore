import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Routers from './routes/routes';

// export const contextTest = React.createContext();
function App() {
    // const [carts, setCarts] = React.useState([]);
    // const [totalPrice, setTotalPrice] = React.useState(0);

    return (
        // <contextTest.Provider value={{ state1: [carts, setCarts], state2: [totalPrice, setTotalPrice] }}>
        //     <Routers />;
        // </contextTest.Provider>
        <Provider store={store}>
            <Routers />
        </Provider>
    );
}

export default App;
