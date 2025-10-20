function RestaurantCard({ name, location, description, image, rating }) {
    return (
        <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300 m-4">
            
            {/* Image */}
            <img src={image} alt={name} className="w-full h-48 object-cover" />
            
            {/* Content */}
            <div className="p-4">
                <h2 className="text-xl font-bold mb-1">{name}</h2>
                <h3 className="text-sm text-gray-500 mb-2 flex items-center gap-1">📍 {location}</h3>
                <p className="text-gray-700 text-sm mb-3 line-clamp-3">{description}</p>
                <h3 className="text-yellow-500 font-semibold">{rating} ⭐</h3>
            </div>
        </div>
    );
}

export default RestaurantCard;
