import { useState } from 'react';
import { Header } from './components/Header';
import { ProductList } from './components/ProductList';

function App() {
	const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);
	const [countStockProducts, setCountStockProducts] = useState(0);
	const [isDisable, setIsDisable ] = useState([]);

	return (
		<>
			<Header
				allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
				countStockProducs={countStockProducts}
				setCountStockProducts={setCountStockProducts}
			/>
			<ProductList
				allProducts={allProducts}
				setAllProducts={setAllProducts}
				total={total}
				setTotal={setTotal}
				countProducts={countProducts}
				setCountProducts={setCountProducts}
				countStockProducs={countStockProducts}
				setCountStockProducts={setCountStockProducts}
				isDisable={isDisable}
				setIsDisable={setIsDisable}
			/>
		</>
	);
}

export default App;
