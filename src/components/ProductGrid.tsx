import { useState } from 'react';
import ProductCard from './ProductCard';
import type { Cake } from './ProductCard';
import { Reveal } from '../hooks/useReveal';
import './ProductGrid.css';

const cakes: Cake[] = [
    {
        id: 1,
        name: 'Belgian Dark Chocolate Dream',
        flavor: 'Chocolate',
        price: 1299,
        originalPrice: 1599,
        image: '/cakes/chocolate.jpg',
        rating: 4.9,
        deliveryTime: '2-3 hrs',
        isBestseller: true,
    },
    {
        id: 2,
        name: 'Classic Vanilla Elegance',
        flavor: 'Vanilla',
        price: 999,
        image: '/cakes/vanilla.jpg',
        rating: 4.8,
        deliveryTime: '2-3 hrs',
    },
    {
        id: 3,
        name: 'Red Velvet Romance',
        flavor: 'Red Velvet',
        price: 1499,
        image: '/cakes/redvelvet.jpg',
        rating: 4.9,
        deliveryTime: '3-4 hrs',
        isNew: true,
    },
    {
        id: 4,
        name: 'Fresh Strawberry Bliss',
        flavor: 'Strawberry',
        price: 1199,
        originalPrice: 1399,
        image: '/cakes/strawberry.jpg',
        rating: 4.7,
        deliveryTime: '2-3 hrs',
    },
    {
        id: 5,
        name: 'Butterscotch Caramel Delight',
        flavor: 'Butterscotch',
        price: 1099,
        image: '/cakes/butterscotch.jpg',
        rating: 4.6,
        deliveryTime: '3-4 hrs',
        isBestseller: true,
    },
    {
        id: 6,
        name: 'Wild Blueberry Fantasy',
        flavor: 'Blueberry',
        price: 1399,
        image: '/cakes/blueberry.jpg',
        rating: 4.8,
        deliveryTime: '2-3 hrs',
        isNew: true,
    },
    {
        id: 7,
        name: 'Tropical Mango Paradise',
        flavor: 'Mango',
        price: 1249,
        originalPrice: 1449,
        image: '/cakes/mango.jpg',
        rating: 4.7,
        deliveryTime: '3-4 hrs',
    },
    {
        id: 8,
        name: 'Pineapple Sunshine Cake',
        flavor: 'Pineapple',
        price: 1149,
        image: '/cakes/pineapple.jpg',
        rating: 4.6,
        deliveryTime: '2-3 hrs',
    },
];

const categories = ['All', 'Bestsellers', 'Chocolate', 'Fruity', 'Classic', 'New Arrivals'];

interface ProductGridProps {
    onAddToCart: (cake: Cake) => void;
}

export default function ProductGrid({ onAddToCart }: ProductGridProps) {
    const [activeCategory, setActiveCategory] = useState('All');

    const filteredCakes = cakes.filter((cake) => {
        if (activeCategory === 'All') return true;
        if (activeCategory === 'Bestsellers') return cake.isBestseller;
        if (activeCategory === 'New Arrivals') return cake.isNew;
        if (activeCategory === 'Chocolate') return cake.flavor === 'Chocolate';
        if (activeCategory === 'Fruity') return ['Strawberry', 'Blueberry', 'Mango', 'Pineapple'].includes(cake.flavor);
        if (activeCategory === 'Classic') return ['Vanilla', 'Butterscotch'].includes(cake.flavor);
        return true;
    });

    return (
        <section className="product-grid-section section" id="cakes">
            <div className="container">
                <Reveal>
                    <div className="section-header text-center">
                        <span className="section-tag">Our Collection</span>
                        <h2 className="section-title">Featured Cakes</h2>
                        <p className="section-subtitle">
                            Handcrafted with love, designed to delight. Each cake tells a story of celebration.
                        </p>
                    </div>
                </Reveal>

                {/* Category Filter */}
                <Reveal delay={100}>
                    <div className="category-filter">
                        <div className="filter-tabs">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    className={`filter-tab ${activeCategory === category ? 'active' : ''}`}
                                    onClick={() => setActiveCategory(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </Reveal>

                {/* Product Grid */}
                <div className="products-grid stagger visible">
                    {filteredCakes.map((cake) => (
                        <ProductCard
                            key={cake.id}
                            cake={cake}
                            onAddToCart={onAddToCart}
                        />
                    ))}
                </div>

                {/* View All CTA */}
                <Reveal delay={300}>
                    <div className="view-all-cta text-center">
                        <button className="btn btn-secondary btn-lg">
                            View All Cakes
                            <span>→</span>
                        </button>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
