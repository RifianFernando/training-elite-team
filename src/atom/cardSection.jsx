import { useState, useRef, useEffect } from 'react';
import './style/card-shop.css';
import { useProductContext } from '../context/productContext';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/product/ProductAction';

export default function CardSection() {
    console.log('render card section');
    // hooks dari card-section
    // const [products, setProducts] = useState([]);
    // const intervalRef = useRef({
    //     current: 1,
    // });

    // const { products, setProduct } = useProductContext();

    // useEffect(() => {
    // try {
    //     fetch('https://fakestoreapi.com/products')
    //         .then((res) => res.json())
    //         .then((json) => setProducts(json));
    // } catch (e) {
    //     console.error(e);
    // }
    // }, []);

    // useSelector
    const products = useSelector((state) => state.products.products);

    const handleDeleteProduct = (id) => {
        // const product = products.find((product) => product.id === id);
        // // delete product from index
        // const index = products.indexOf(product);
        // products.splice(index, 1);
        // setProduct([...products]);
    };

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    // const update = () => {
    //     intervalRef.current = intervalRef.current + 1;
    //     console.log(intervalRef.current);
    // };

    return (
        <div className="card-section">
            {products.map((product, index) => {
                return (
                    <div className="card-shop" key={index}>
                        <img
                            src={product.image}
                            alt={product.title}
                            width={200}
                            height={200}
                        />
                        <div className="card-shop-text">
                            <h3>{product.title}</h3>
                            <p>Rating: {product.rating.rate}</p>
                            <p>Jumlah: {product.rating.count}</p>
                        </div>
                        <div className="card-shop-button">
                            <button
                                onClick={(e) => {
                                    handleDeleteProduct(product.id);
                                }}
                            >
                                delete
                            </button>
                            {/* <button onClick={update}>update count</button> */}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
