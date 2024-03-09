import { applyMiddleware, combineReducers, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import productReducer from './product/ProductReducer';
import AuthReducer from './auth/AuthReducer';

// assume kamu punya semua reducer yang bakal dipake
const rootReducer = combineReducers({
    // Define a top-level state field named `todos`, handled by `todosReducer`
    products: productReducer,
    auth: AuthReducer
});

const Middleware = [];

const store = createStore(
    rootReducer,
    applyMiddleware(
        ...Middleware,
        thunk
    )
)

export default store;
