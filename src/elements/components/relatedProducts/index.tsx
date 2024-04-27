import './style.css'
import CardProduto from '../../fragments/cardProduto'
import Product1 from './assets/product1.png'
import { useEffect, useState } from 'react'

interface Product {
	id: number
	name: string
	description: string
	price: number
	image_link: string
}

export default function RelatedProducts(_props: any) {
	const [products, setProducts] = useState<Product[]>([])
	const [gridRows, setGridRows] = useState(1);

	const handleShowMore = () => {
        setGridRows(prevRows => prevRows + 1);

		if(gridRows == 2){
			window.location.href = `/shop/:${_props.category}`;
		}
    };

	console.log(_props.category)

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await fetch(
					`http://localhost:3888/products/category/${_props.category}?page=1&pageSize=${4 * gridRows}&sort=none`
				);
				const data = await response.json()
				setProducts(data.slice(0, 300000))
				console.log(data)
			} catch (error) {
				console.error('Error fetching products:', error)
			}
		}

		fetchProducts()
	}, [gridRows, _props.category])


	return (
		<div>
			<div id='products-title'>
				<h1>Related Products</h1>
				<div id='products-container' style={{ gridTemplateRows: `repeat(${gridRows}, 1fr)` }}>
					{products.map(product => (
						<div key={product.id} className='card-produto'>
							<CardProduto
								id={product.id}
								img={product.image_link}
								name={product.name}
								description={product.description}
								value={product.price}
								hasDescount={false}
								isNew={false}
							/>
						</div>
					))}
				</div>
				<button id='show-more' onClick={handleShowMore} >Show More</button>
			</div>
		</div>
	)
}
