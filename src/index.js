import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { ProductProvider } from './context/productContext';
import { Provider } from 'react-redux';
import store from './redux/store';

// asychronous rendering
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* <ProductProvider> */}
        <Provider store={store}>
            <App />
        </Provider>
        {/* </ProductProvider> */}
    </React.StrictMode>
);
