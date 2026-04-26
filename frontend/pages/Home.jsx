import { useEffect, useState } from "react";
import { getProducts } from "../src/services/api";
import ProductCard from '../components/ProductCard.jsx';

function Home() {
    const [products, setProducts] = useState([]);
    // State to track which categories are expanded
    const [expandedCategories, setExpandedCategories] = useState({});

    useEffect(() => {
        getProducts().then(res => {
            setProducts(res.data);
        });
    }, []);

    const grouped = products.reduce((acc, p) => {
        if (!acc[p.category]) acc[p.category] = [];
        acc[p.category].push(p);
        return acc;
    }, {});

    // Function to toggle expansion
    const toggleExpand = (category) => {
        setExpandedCategories(prev => ({
            ...prev,
            [category]: !prev[category]
        }));
    };

    return (
        <main className="pt-24 bg-black min-h-screen text-white pb-12">
            {
                Object.keys(grouped).map(category => {
                    const allItems = grouped[category];
                    const isExpanded = expandedCategories[category];
                    // Show 4 items by default, or all items if expanded
                    const visibleItems = isExpanded ? allItems : allItems.slice(0, 4);

                    return (
                        <div key={category} className="mb-12">
                            <h2 className="text-3xl font-bold my-6 mx-6 border-b border-yellow-500 inline-block pb-1">
                                {category.toUpperCase()}
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-6">
                                {visibleItems.map(p => (
                                    <ProductCard key={p._id || p.id} product={p} />
                                ))}
                            </div>

                            {/* Show More Button logic */}
                            {allItems.length > 4 && (
                                <div className="flex justify-center mt-8">
                                    <button 
                                        onClick={() => toggleExpand(category)}
                                        className="bg-slate-800 hover:bg-slate-700 text-yellow-500 border border-yellow-500 px-8 py-2 rounded-full font-semibold transition duration-300"
                                    >
                                        {isExpanded ? "Show Less" : `Show More (${allItems.length - 4}+)`}
                                    </button>
                                </div>
                            )}
                        </div>
                    );
                })
            }
        </main>
    );
}

export default Home;