import { useEffect, useState } from "react";
import { getProducts } from "../src/services/api";
import ProductCard  from '../components/ProductCard.jsx';

function Home() {
	const [products, setProducts] = useState([]);
	
	useEffect(() => {
		getProducts().then(res => {
			console.log(res.data);
			setProducts(res.data);
		});
	}, []);

	const grouped = products.reduce((acc, p) => {
		if (!acc[p.category]) acc[p.category] = [];
		acc[p.category].push(p);
		return acc;
	}, {});

	return (
		<main className="pt-24">
			{
				Object.keys(grouped).map(category => (
					<div key={category}>
						<h2 className="text-3xl font-bond my-6 mx-6">
							{category.toUpperCase()}
						</h2>

						<div className="grid grid-cols-4 gap-4 mx-6">
							{grouped[category].map(p => (
								<ProductCard key={p.id} product={p} />
							))}
						</div>
						
					</div>
				))
			}
		</main>
    );
}

export default Home;