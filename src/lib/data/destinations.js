export const destinations = [
	{
		id: 1,
		destination: 'Paris, France',
		image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80',
		price: '$1,299',
		duration: '5 Days / 4 Nights',
		description:
			'Experience the magic of the City of Lights with iconic landmarks and world-class cuisine',
		rating: 4.8,
		reviews: 342,
		tags: ['City Break', 'Culture', 'Romance'],
		featured: true,
		discount: 15,
		highlights: ['Eiffel Tower', 'Louvre Museum', 'Seine River Cruise', 'Versailles Palace'],
		included: ['Flights', 'Hotel', 'Breakfast', 'City Tour'],
		bestTime: 'Apr-Jun, Sep-Oct'
	},
	{
		id: 2,
		destination: 'Bali, Indonesia',
		image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
		price: '$899',
		duration: '7 Days / 6 Nights',
		description:
			'Discover tropical paradise with stunning beaches, ancient temples, and vibrant culture',
		rating: 4.9,
		reviews: 567,
		tags: ['Beach', 'Adventure', 'Wellness'],
		featured: true,
		discount: 20,
		highlights: ['Ubud Rice Terraces', 'Tanah Lot Temple', 'Seminyak Beach', 'Mount Batur'],
		included: ['Flights', 'Villa', 'Breakfast', 'Airport Transfer'],
		bestTime: 'Apr-Oct'
	},
	{
		id: 3,
		destination: 'Tokyo, Japan',
		image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80',
		price: '$1,599',
		duration: '6 Days / 5 Nights',
		description: 'Immerse yourself in the perfect blend of ancient tradition and modern innovation',
		rating: 4.7,
		reviews: 289,
		tags: ['City Break', 'Culture', 'Food'],
		featured: false,
		discount: null,
		highlights: ['Mount Fuji', 'Senso-ji Temple', 'Shibuya Crossing', 'Cherry Blossoms'],
		included: ['Flights', 'Hotel', 'JR Pass', 'Welcome Dinner'],
		bestTime: 'Mar-May, Sep-Nov'
	},
	{
		id: 4,
		destination: 'Santorini, Greece',
		image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80',
		price: '$1,199',
		duration: '4 Days / 3 Nights',
		description: 'Witness breathtaking sunsets and whitewashed villages overlooking the Aegean Sea',
		rating: 4.9,
		reviews: 445,
		tags: ['Island', 'Romance', 'Beach'],
		featured: false,
		discount: 10,
		highlights: ['Oia Sunset', 'Red Beach', 'Wine Tasting', 'Caldera Views'],
		included: ['Flights', 'Cave Hotel', 'Breakfast', 'Island Tour'],
		bestTime: 'Apr-Oct'
	},
	{
		id: 5,
		destination: 'Dubai, UAE',
		image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
		price: '$1,099',
		duration: '5 Days / 4 Nights',
		description: 'Experience luxury and adventure in this futuristic desert metropolis',
		rating: 4.6,
		reviews: 523,
		tags: ['Luxury', 'Shopping', 'Adventure'],
		featured: true,
		discount: 25,
		highlights: ['Burj Khalifa', 'Desert Safari', 'Dubai Mall', 'Palm Jumeirah'],
		included: ['Flights', '5-Star Hotel', 'Desert Safari', 'City Tour'],
		bestTime: 'Nov-Mar'
	},
	{
		id: 6,
		destination: 'New York City, USA',
		image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&q=80',
		price: '$1,399',
		duration: '5 Days / 4 Nights',
		description:
			'Explore the city that never sleeps with iconic sights and world-class entertainment',
		rating: 4.7,
		reviews: 892,
		tags: ['City Break', 'Culture', 'Shopping'],
		featured: false,
		discount: null,
		highlights: ['Times Square', 'Central Park', 'Statue of Liberty', 'Broadway Shows'],
		included: ['Flights', 'Hotel', 'City Pass', 'Airport Transfer'],
		bestTime: 'Apr-Jun, Sep-Nov'
	},
	{
		id: 7,
		destination: 'Maldives',
		image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
		price: '$2,299',
		duration: '6 Days / 5 Nights',
		description: 'Escape to pristine beaches and crystal-clear waters in this tropical paradise',
		rating: 4.95,
		reviews: 234,
		tags: ['Beach', 'Luxury', 'Honeymoon'],
		featured: true,
		discount: 30,
		highlights: ['Overwater Villa', 'Snorkeling', 'Spa Treatment', 'Dolphin Watching'],
		included: ['Flights', 'Water Villa', 'All Meals', 'Water Sports'],
		bestTime: 'Nov-Apr'
	},
	{
		id: 8,
		destination: 'Barcelona, Spain',
		image: 'https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=800&q=80',
		price: '$999',
		duration: '4 Days / 3 Nights',
		description: "Discover Gaudí's masterpieces, vibrant culture, and Mediterranean beaches",
		rating: 4.8,
		reviews: 456,
		tags: ['City Break', 'Beach', 'Architecture'],
		featured: false,
		discount: null,
		highlights: ['Sagrada Familia', 'Park Güell', 'La Rambla', 'Gothic Quarter'],
		included: ['Flights', 'Hotel', 'Breakfast', 'Gaudí Tour'],
		bestTime: 'May-Jun, Sep-Oct'
	},
	{
		id: 9,
		destination: 'India - Golden Triangle & Pilgrimage Tours',
		image:
			'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		price: '$1,799',
		duration: '7 Days / 6 Nights',
		description:
			'Explore the spiritual heart of India with visits to the Taj Mahal, Varanasis sacred ghats, Haridwar, Rishikesh, and the Golden Temple. Experience the rich culture, ancient temples, and timeless traditions of the subcontinent',
		rating: 4.85,
		reviews: 367,
		tags: ['Adventure', 'Nature', 'Photography'],
		featured: false,
		discount: 15,
		highlights: ['Delhi, Agra, Jaipur, Varanasi, Haridwar, Amritsar'],
		included: ['Flights', 'Hotels', 'Rental Car', 'Breakfast'],
		bestTime: 'Oct-Mar'
	},
	{
		id: 10,
		destination: 'Cape Town, South Africa',
		image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80',
		price: '$1,199',
		duration: '6 Days / 5 Nights',
		description: 'Experience stunning landscapes, rich history, and world-renowned wine regions',
		rating: 4.75,
		reviews: 298,
		tags: ['Nature', 'Wine', 'Adventure'],
		featured: false,
		discount: 20,
		highlights: ['Table Mountain', 'Cape of Good Hope', 'Wine Tasting', 'Robben Island'],
		included: ['Flights', 'Hotel', 'Safari Day Trip', 'City Tour'],
		bestTime: 'Oct-Apr'
	},
	{
		id: 11,
		destination: 'USA, Canada & UK - Family Visit Tours',
		image:
			'https://images.unsplash.com/photo-1606516397986-1eeb79e8c052?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		price: '$1,799',
		duration: '7 Days / 6 Nights',
		description:
			'Combine visiting loved ones with unforgettable sightseeing experiences. Whether your family is in New York, Toronto, London, or anywhere else, well help you make the most of your trip with carefully planned itineraries that blend family time with iconic attractions. From Niagara Falls to the Statue of Liberty, Buckingham Palace to the CN Tower, create lasting memories with those who matter most.',
		rating: 4.85,
		reviews: 367,
		tags: ['Adventure', 'Nature', 'Photography'],
		featured: false,
		discount: 15,
		highlights: [
			'New York City, Niagara Falls, Toronto, Vancouver, London, Edinburgh, major city tours, flexible itineraries for family time'
		],
		included: ['Flights', 'Hotels', 'Rental Car', 'Breakfast'],
		bestTime: 'Late Aug-Mar'
	},
	{
		id: 12,
		destination: 'Trinidad, Tobago, Barbados & Guyana - Caribbean Roots Tour',
		image:
			'https://images.unsplash.com/photo-1594005039392-53c38b667641?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		price: '$1,799',
		duration: '7 Days / 6 Nights',
		description:
			'Reconnect with your heritage and explore the vibrant cultures of the Caribbean and South America. Experience Trinidads Carnival spirit, Tobagos pristine beaches, Barbados warm hospitality, and Guyanas natural wonders. Visit family, enjoy authentic Caribbean cuisine, and immerse yourself in the rich Indo-Caribbean traditions that make these destinations feel like home.',
		rating: 4.85,
		reviews: 367,
		tags: ['Adventure', 'Nature', 'Photography'],
		featured: false,
		discount: 15,
		highlights: [
			'Port of Spain, Tobago beaches, Bridgetown, Kaieteur Falls, Georgetown, family visits, local festivals, authentic roti and curry'
		],
		included: ['Flights', 'Hotels', 'Rental Car', 'Breakfast'],
		bestTime: 'Late Aug-Mar'
	},
	{
		id: 13,
		destination: 'Caribbean Cruises - Island Paradise',
		image:
			'https://images.unsplash.com/photo-1638832406094-b7c061f7e02e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		price: '$1,799',
		duration: '7 Days / 6 Nights',
		description:
			'Sail through crystal-clear waters and visit multiple Caribbean islands in one unforgettable journey. Perfect for those who love the sea, sunshine, and hassle-free travel with all amenities onboard.',
		rating: 4.85,
		reviews: 367,
		tags: ['Adventure', 'Nature', 'Photography'],
		featured: false,
		discount: 15,
		highlights: ['Multiple islands, all-inclusive dining, entertainment, excursions'],
		included: ['Flights', 'Hotels', 'Rental Car', 'Breakfast'],
		bestTime: 'Late Aug-Mar'
	},
	{
		id: 14,
		destination: 'Europe Highlights - Classic Grand Tour',
		image:
			'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		price: '$1,799',
		duration: '7 Days / 6 Nights',
		description:
			'Discover the romance of Paris, the Swiss Alps, Londons historic landmarks, and Italys timeless beauty. Perfect for first-time visitors who want to experience Europes most iconic destinations in comfort.',
		rating: 4.85,
		reviews: 367,
		tags: ['Adventure', 'Nature', 'Photography'],
		featured: false,
		discount: 15,
		highlights: ['Paris, Swiss Alps, London, Rome, Venice'],
		included: ['Flights', 'Hotels', 'Rental Car', 'Breakfast'],
		bestTime: 'Late Aug-Mar'
	},
	{
		id: 15,
		destination: 'Thailand, Vietnam & Cambodia - Southeast Asia Grand Tour',
		image:
			'https://images.unsplash.com/photo-1540525080980-b97c4be3c779?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		price: '$1,799',
		duration: '7 Days / 6 Nights',
		description:
			'Experience the best of three magnificent countries in one unforgettable journey. From Bangkoks golden temples to Angkor Wats ancient wonders and Vietnams stunning Halong Bay, discover the rich history, vibrant cultures, and breathtaking landscapes of Southeast Asia. Enjoy delicious cuisine, warm hospitality, and incredible value on this comprehensive tour.',
		rating: 4.85,
		reviews: 367,
		tags: ['Adventure', 'Nature', 'Photography'],
		featured: false,
		discount: 15,
		highlights: [
			'Bangkoks Grand Palace, Angkor Wat temples, Halong Bay cruise, Ho Chi Minh City, Mekong Delta, Phuket beaches, Siem Reap, Hanoi'
		],
		included: ['Flights', 'Hotels', 'Rental Car', 'Breakfast'],
		bestTime: 'Late Aug-Mar'
	}
];
