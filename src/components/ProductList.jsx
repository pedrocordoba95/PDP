import { data } from '../data';

export const ProductList = ({
	allProducts,
	setAllProducts,
	countProducts,
	setCountProducts,
	total,
	setTotal,
	isDisable,
	setIsDisable
}) => {
	const onAddProduct = product => {
		if (allProducts.find(item => item.id === product.id)) {	
			const products = allProducts.map(item =>{
				if(item.id === product.id && item.quantity < product.stock  ){
					setTotal(total + product.price * product.quantity);
					setCountProducts(countProducts + product.quantity);
					const idProduct = isDisable.find((block) => block.id === product.id)
					if(!idProduct){
						setIsDisable([...isDisable, {id: product.id, blocked: false}])
					}				
					return { ...item, quantity: item.quantity + 1 }						
				}else{
					setIsDisable([...isDisable, {id: product.id, blocked: true}])
					return item
				}
			})
			return setAllProducts([...products]);
		}
		setTotal(total + product.price * product.quantity);
		setCountProducts(countProducts + product.quantity);
		setAllProducts([...allProducts, product]);
	};

	return (
		<div className='container-items'>
			{data.map(product => 
				{					
					return <div className='item' key={product.id}>
					<figure>
						<img src={product.img} alt={product.name} />
					</figure>
					<div className='info-product'>
						<h2>
							{product.name}
						</h2>
						<p className='price'>
							${product.price}
						</p>
						<button onClick={() => onAddProduct(product)}disabled={isDisable.find((blocked)=> blocked.id === product.id && blocked.isBlockecd)}>
							Añadir al carrito
						</button>
					</div>
				</div>
			})}
		</div>
	);
};
