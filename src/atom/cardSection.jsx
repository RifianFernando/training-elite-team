import { useEffect, useState, useRef } from 'react';
import './style/card-shop.css';
import { productApi } from '../api/productApi';

export default function CardSection() {
    console.log('render card section');
    // hooks dari card-section
    const [products, setProducts] = useState([]);
    const intervalRef = useRef({
        current: 1,
    });

    useEffect(() => {
        try {
            fetch('https://fakestoreapi.com/products')
                .then((res) => res.json())
                .then((json) => setProducts(json));
        } catch (e) {
            console.error(e);
        }
    }, []);

    const handleDeleteProduct = (id) => {
        const product = products.find((product) => product.id === id);
        // delete product from index
        const index = products.indexOf(product);

        products.splice(index, 1);
        setProducts([...products]);
    };
    const update = () => {
        intervalRef.current = intervalRef.current + 1;
        console.log(intervalRef.current);
    };

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
                            <button onClick={update}>update count</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
