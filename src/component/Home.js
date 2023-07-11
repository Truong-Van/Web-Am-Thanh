import React, { useEffect, useState } from 'react';

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Gọi API để lấy danh sách sản phẩm từ backend
        fetch('/api/products')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div>
            <header>
                <h1>Header</h1>
            </header>
            <h1>Trang chủ</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
