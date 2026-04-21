import { useEffect, useState } from "react";
import { getProducts } from "../src//services/api";

function Home() {
	const [products, setProducts] = useState([]);
	
	useEffect(() => {
		getProducts().then(res => {
			console.log(res.data);
			setProducts(res.data);
		});
	}, []);

	return (
		<>
		<main className="pt-24">
			{
				products.map(p => (
					<div key={p.id}> 
						{p.name} - ₹{p.price}
					</div>
				))
			}
		</main>
		</>
    );
}

export default Home;