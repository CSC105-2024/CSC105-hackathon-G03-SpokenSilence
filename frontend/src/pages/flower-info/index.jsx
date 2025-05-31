import React from 'react';

const FlowerMeaningsGrid = () => {
  const flowers = [
    {
      id: 1,
      name: "Rose",
      meaning: "A rose symbolizes a personality that’s beautiful, warm, kind, and strong—deep and impressive. But it also has sharp thorns, representing a side that can hurt others with cold or distant behavior, often hiding vulnerability behind a protective barrier.",
      image: "https://images.unsplash.com/photo-1559563362-c667ba5f5480?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cm9zZXxlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      id: 2,
      name: "Peony",
      meaning: "The peony represents a person who is elegant, confident, and warm-hearted. However, they can sometimes appear proud or distant, making it hard for others to get close.",
      image: "https://img.freepik.com/premium-photo/time-lapse-series-capturing-growth-blooming-peony-flowers_25996-8700.jpg"
    },
    {
      id: 3,
      name: "Daffodil",
      meaning: "The daffodil represents someone bright, cheerful, and full of hope. They are optimistic and uplifting to others, but can sometimes be impatient, impulsive, or set high expectations that lead to disappointment.",
      image: "https://www.dutchgrown.com/cdn/shop/products/Daffodil_Marieke-1.jpg?v=1677079114"
    },
    {
      id: 4,
      name: "Daisy",
      meaning: "The daisy represents purity, simplicity, and brightness. Such a person is sincere, gentle, and charming but can sometimes seem naive or too trusting, making them vulnerable to being taken advantage of.",
      image: "https://ferrymorse.com/cdn/shop/files/Shasta_Daisy_Alaska_Variety.jpg?v=1736277601&width=1360"
    },
    {
      id: 5,
      name: "Camellia",
      meaning: "The camellia represents elegance, sincere love, and honesty. Such a person is steady, warm, and trustworthy, but can sometimes seem serious or reserved, making others feel distant.",
      image: "https://www.provenwinnerscolorchoice.com/wp-content/uploads/2024/09/Camellia-Just-Chill-Double-Pink-1.jpg"
    },
    {
      id: 6,
      name: "Chrysanthemum",
      meaning: "The chrysanthemum represents patience, honesty, and loyalty. Such a person is strong, responsible, and sincere, but can sometimes seem tense or stubborn, making it hard to change their mind.",
      image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/plant-seed/i/p/7/40-chrysanthemum-flower-seeds-c-648-kanaya-original-imaghmwateaqzfhr.jpeg?q=20&crop=false"
    },
    {
      id: 7,
      name: "jasmine",
      meaning: "Jasmine represents a gentle and pure person who is sincere and honest, but can sometimes be seen as weak or taken advantage of because of their kindness.",
      image: "https://incenseomega.com/cdn/shop/articles/omega-blog11-Jasmine-incense-sticks-benefits-1.jpg?v=1707201886"
    },
    {
      id: 8,
      name: "Hydrangea",
      meaning: "Hydrangea represents beauty and gentleness, with a charming and intriguing nature. However, such a person can sometimes seem dreamy, unstable, or emotionally changeable, which may confuse those around them.",
      image: "https://www.tytyga.com/v/vspfiles/photos/SHRFLR-HYD-NIKKO-2T.jpg"
    },
    {
      id: 9,
      name: "Sweet Pea",
      meaning: "Sweet Pea represents sweetness, kindness, and gratitude. Such a person is friendly, caring, and charming, but can sometimes be too shy or hesitant to express themselves, often staying within their comfort zone and afraid to take risks.",
      image: "https://news.oregonstate.edu/sites/news.oregonstate.edu/files/styles/1400x900/public/sweet-pea-blossom.jpg?itok=4u9q9VHo"
    },
    {
      id: 10,
      name: "Lily",
      meaning: "Lily represents purity, elegance, and confidence. Such a person is charming, a natural leader, and steady, but can sometimes seem proud or overly strict, while also being fragile or hiding sadness within.",
      image: "https://a.allegroimg.com/original/11a603/bdb763464f2790dbf7a3af35ca04/Lilia-blue-cebule-Sadzimy-pl"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 bg-gradient-to-br from-pink-50 to-purple-50 min-h-screen">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Flower Meanings
        </h1>
        <p className="text-gray-600 text-lg">
          Discover the special meaning hidden in every flower.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {flowers.map((flower) => (
          <div 
            key={flower.id} 
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-100"
          >
            <div className="aspect-square overflow-hidden">
              <img 
                src={flower.image} 
                alt={flower.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-800 mb-2 text-center">
                {flower.name}
              </h3>
              <p className="text-gray-600 text-sm text-center leading-relaxed">
                {flower.meaning}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl mx-auto">
          <h2 className="text-xl font-semibold text-gray-800 mb-3">
            🌸 Fun facts
          </h2>
          <p className="text-gray-600 text-sm">
            "Each type of flower carries different meanings and symbols across cultures and traditions. Choosing the right flowers allows you to convey the message you want with profound depth."
          </p>
        </div>
      </div>
    </div>
  );
};

export default FlowerMeaningsGrid;