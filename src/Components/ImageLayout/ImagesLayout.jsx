import React from 'react';

const ImagesLayout = () => {
    const destinations = [
        { id: 1, name: "Paris", country: "France", },
        { id: 2, name: "New York", country: "United States" },
        { id: 3, name: "Tokyo", country: "Japan" },
        { id: 4, name: "Barcelona", country: "Spain" },
        { id: 5, name: "London", country: "United Kingdom" },
        { id: 6, name: "Rome", country: "Italy" },
        { id: 7, name: "Amsterdam", country: "Netherlands" },
        { id: 8, name: "Dubai", country: "UAE" },
        { id: 9, name: "Singapore", country: "Singapore" },
        { id: 10, name: "Sydney", country: "Australia" },
        { id: 11, name: "Berlin", country: "Germany" },
        { id: 12, name: "Venice", country: "Italy" },
        { id: 13, name: "Prague", country: "Czech Republic" },
        { id: 14, name: "Istanbul", country: "Turkey" },
        { id: 15, name: "Vienna", country: "Austria" },
        { id: 16, name: "Bangkok", country: "Thailand" },
        { id: 17, name: "Madrid", country: "Spain" },
        { id: 18, name: "Hong Kong", country: "China" },
        { id: 19, name: "Seoul", country: "South Korea" },
        { id: 20, name: "Lisbon", country: "Portugal" }
    ];
    return (
        <div>
            <main className="bg-gray-100 py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <h2 className="text-2xl font-bold text-gray-800 mb-8">Popular destinations</h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {destinations.map(destination => (
                            <div
                                key={destination.id}
                                className="group cursor-pointer overflow-hidden rounded-lg relative"
                            >
                                <img
                                    src={`/api/placeholder/300/200`}
                                    alt={`${destination.name}, ${destination.country}`}
                                    className="w-full h-32 object-cover transform transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                                    <div className="absolute bottom-0 left-0 right-0 p-3">
                                        <p className="text-white font-medium text-sm">
                                            {destination.name}
                                        </p>
                                        <p className="text-gray-200 text-xs">
                                            {destination.country}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <button className="text-yellow-500 hover:text-yellow-700 font-medium">
                            Discover more destinations →
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ImagesLayout;