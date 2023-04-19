import { data } from '../data';

/* Exportar un componente de React llamado `ProductList` que incluye varios accesorios (`allProducts`,
`setAllProducts`, `countProducts`, `setCountProducts`, `total`, `setTotal`, `isDisable` y
`setIsDisable`) y genera un lista de productos con un botón "Añadir al carrito" para cada producto.
Cuando se hace clic en el botón, actualiza el estado del carrito agregando el producto seleccionado
y actualizando el precio total y la cantidad de productos. También verifica si el producto ya está
en el carrito y si lo está, actualiza la cantidad del producto en lugar de agregar un nuevo
artículo. Además, verifica si el producto está agotado y deshabilita el botón "Agregar al carrito"
si es así. */
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
						<button onClick={() => onAddProduct(product)}disabled={isDisable.find((blocked)=> blocked.id === product.id && blocked.isBlocked)}>
							Añadir al carrito
						</button>
					</div>
				</div>
			})}
		</div>
	);
};
