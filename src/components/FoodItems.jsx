


function FoodItem({ name, id, description,  price }) {
    return (
        <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300 m-3 w-80">
            
            {/* Content */}
            <div className="p-4">
                <h2 className="text-xl font-bold mb-1">{name}</h2>
                <h3 className="text-sm text-gray-500 mb-2 flex items-center gap-1">ID :{id}</h3>
                <p className="text-gray-700 text-sm mb-3 line-clamp-3">{description}</p>
                <h3 className="text-yellow-500 font-semibold">Rs. {price} </h3>
            </div>
        </div>
    );
}

export default FoodItem;
