import './ProductCard.css';

export type Cake = {
    id: number;
    name: string;
    flavor: string;
    price: number;
    originalPrice?: number;
    image: string;
    rating: number;
    deliveryTime: string;
    isBestseller?: boolean;
    isNew?: boolean;
};

interface ProductCardProps {
    cake: Cake;
    onAddToCart: (cake: Cake) => void;
}

export default function ProductCard({ cake, onAddToCart }: ProductCardProps) {
    const discount = cake.originalPrice
        ? Math.round((1 - cake.price / cake.originalPrice) * 100)
        : 0;

    return (
        <article className="product-card glass-card tilt-card">
            {/* Badges */}
            <div className="card-badges">
                {cake.isBestseller && (
                    <span className="badge badge-bestseller">Bestseller</span>
                )}
                {cake.isNew && (
                    <span className="badge badge-new">New</span>
                )}
                {discount > 0 && (
                    <span className="badge badge-sale">-{discount}%</span>
                )}
            </div>

            {/* Image Container */}
            <div className="card-image">
                <div
                    className="cake-visual"
                    style={{ backgroundColor: getColorFromFlavor(cake.flavor) }}
                >
                    <span className="cake-emoji">{getCakeEmoji(cake.flavor)}</span>
                </div>
                <div className="card-overlay">
                    <button className="quick-view-btn">Quick View</button>
                </div>
            </div>

            {/* Content */}
            <div className="card-content">
                <div className="card-header">
                    <span className="flavor-tag">{cake.flavor}</span>
                    <div className="rating">
                        <span className="star">★</span>
                        <span>{cake.rating}</span>
                    </div>
                </div>

                <h3 className="card-title">{cake.name}</h3>

                <div className="card-meta">
                    <span className="delivery-info">
                        <span className="icon">⚡</span>
                        {cake.deliveryTime}
                    </span>
                </div>

                <div className="card-footer">
                    <div className="price-container">
                        <span className="price">₹{cake.price.toLocaleString()}</span>
                        {cake.originalPrice && (
                            <span className="original-price">₹{cake.originalPrice.toLocaleString()}</span>
                        )}
                    </div>

                    <button
                        className="add-to-cart-btn"
                        onClick={() => onAddToCart(cake)}
                    >
                        <span className="btn-text">Add</span>
                        <span className="btn-icon">+</span>
                    </button>
                </div>
            </div>
        </article>
    );
}

// Helper functions for visual variety
function getColorFromFlavor(flavor: string): string {
    const colors: Record<string, string> = {
        'Chocolate': '#8B4513',
        'Vanilla': '#FFF8DC',
        'Strawberry': '#FFB6C1',
        'Red Velvet': '#C41E3A',
        'Butterscotch': '#E39B4D',
        'Blueberry': '#4169E1',
        'Mango': '#FFCC33',
        'Pineapple': '#FFE135',
    };
    return colors[flavor] || '#FFD6C9';
}

function getCakeEmoji(flavor: string): string {
    const emojis: Record<string, string> = {
        'Chocolate': '🍫',
        'Vanilla': '🍰',
        'Strawberry': '🍓',
        'Red Velvet': '❤️',
        'Butterscotch': '🧈',
        'Blueberry': '🫐',
        'Mango': '🥭',
        'Pineapple': '🍍',
    };
    return emojis[flavor] || '🎂';
}
