const sampleListings = [
  {
    title: "Plaza Paitilla Inn",
    description:
      "Buy this beachPlaza Paitilla Inn offers panoramic views of Panama Bay and has a lounge bar, outdoor pool and sun terraces. The property also has an equipped business centre and a gym.",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/146638586.jpg?k=817be757b6c1930793399f62730d274222b664add8284958d574584a3a28ed83&o=&hp=1",
    price: 7311,
    location:
      "Via Italia Punta Paitilla Calle Wiston Churchil, 00000 Panama City",
    country: "Panama",
  },
  {
    title: "Hilton Panama",
    description:
      "Rooms at Hilton Panama will provide you with a flat-screen TV, air conditioning and cable channels. Featuring a shower, private bathrooms also come with free toiletries. Some rooms have a sea view.",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/484123168.jpg?k=f7ef333cfbf75b330e48d3ce2bbe5fa54f29c1e9c55ad4ac704324e8876af0ef&o=",
    price: 13891,
    location:
      "Av. Balboa con calle Aquilino de la Guardia, Bella Vista, 0000 Panama City",
    country: "Panama",
  },
  {
    title: "Hotel Caracas",
    description:
      "Hotel Caracas offers rooms with air conditioning and a private bathroom in Panama City.",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/475676512.jpg?k=0c6b48c6fc8559fee7e29d439fe3f5f2565fa429b2e19110e439915b08232abc&o=",
    price: 3081,
    location:
      "Calle 12 Este con Calle C Santa Ana- Frente al parque Santa Ana, Panama City",
    country: "Panama",
  },
  {
    title: "Riu Plaza Panamá",
    description:
      "Located in the business district, Riu Plaza Panama offers stylish rooms with free Wi-Fi. It features an outdoor pool with hot tub. The Santuario Nacional Corazón de María Church is just 300 metres away.",
    image: "../images/default-image-1.jpg",
    price: 9944,
    location: "Calle 50 con 53 Este, Marbella, Bella Vista, 0000 Panama City",
    country: "Panama",
  },
  {
    title: "Hotel Milan Panama",
    description:
      "Located 2 km from Metropolitan National Park in Panama City at El Cangrejo, Hotel Milan Panama features a restaurant, bar and free WiFi. Free private parking is available on site.",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/48247983.jpg?k=e393d5b0b71bb0ab36203e394c35d77bb9ad85faa72c7df8d5cb7d6d7e120ac1&o=",
    price: 3459,
    location:
      "Avenida Eusebio A Morales, El Cangrejo, Bella Vista, 10000 Panama City,",
    country: "Panama",
  },
  {
    title: "Gran Evenia Panamá Hotel",
    description:
      "Gran Evenia Panamá Hotel provides accommodation with an outdoor swimming pool, free private parking, a fitness centre and a garden. Featuring a shared lounge, the 5-star hotel has air-conditioned rooms with free WiFi, each with a private bathroom.",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/351256986.jpg?k=d9b210e4b21315fb3c04f23e0cb8efde1553875749e13348f07b3fbada1ea675&o=&hp=1",
    price: 8993,
    location:
      "Calle Eusebio A. Morales Esquina Calle Augusto Samuel Boyd-Urb El Cangrejo, Bella Vista, Panama City,",
    country: "Panama",
  },
  {
    title: "The Westin Panama",
    description:
      "The Westin Panama features a fitness center, rooftop pool, and modern, air-conditioned rooms with flat-screen TVs. A full-service spa is available on-site.",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/123456789.jpg?k=abc1234567&o=",
    price: 10250,
    location:
      "Avenida Costa del Este, Parque Industrial Costa del Este, Panama City",
    country: "Panama",
  },
  {
    title: "Hyatt Place Panama City",
    description:
      "Enjoy your stay at Hyatt Place Panama City, offering spacious rooms, an outdoor pool, and a delicious breakfast buffet included with your stay.",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/987654321.jpg?k=def987654&o=",
    price: 8400,
    location: "Calle Eusebio A Morales, El Cangrejo, Panama City",
    country: "Panama",
  },
  {
    title: "Holiday Inn Express Panama",
    description:
      "This modern hotel features a rooftop pool, free WiFi, and complimentary breakfast. Located close to the city's main attractions.",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/456789123.jpg?k=ghi456789&o=",
    price: 7500,
    location: "Calle Ricardo Arango y Calle 53E, Obarrio, Panama City",
    country: "Panama",
  },
  {
    title: "Marriott Executive Apartments Panama",
    description:
      "Spacious apartments with fully equipped kitchens, perfect for long stays. Enjoy an outdoor pool, gym, and excellent dining options.",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/567891234.jpg?k=jkl567891&o=",
    price: 12300,
    location: "Calle 58 Este, Obarrio, Panama City",
    country: "Panama",
  },
  {
    title: "Central Hotel Panama",
    description:
      "Located in Casco Viejo, Central Hotel Panama offers elegant rooms, a rooftop pool, and exquisite dining options with colonial charm.",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/789012345.jpg?k=mno789012&o=",
    price: 15500,
    location: "Plaza de la Independencia, Casco Viejo, Panama City",
    country: "Panama",
  },
  {
    title: "Hotel El Panama by Faranda",
    description:
      "This iconic hotel offers a large outdoor pool, a casino, and modern rooms in the heart of Panama City.",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/654987321.jpg?k=pqr654987&o=",
    price: 11000,
    location: "Via España 111, Bella Vista, Panama City",
    country: "Panama",
  },
  {
    title: "The Executive Hotel",
    description:
      "Experience great hospitality at The Executive Hotel, offering a rooftop terrace, gym, and modern accommodations.",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/321654987.jpg?k=stu321654&o=",
    price: 9000,
    location: "Avenida Aquilino de la Guardia, Bella Vista, Panama City",
    country: "Panama",
  },
  {
    title: "Global Hotel Panama",
    description:
      "Global Hotel Panama features luxurious rooms, an infinity pool, and exceptional city views.",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/123789456.jpg?k=vwx123789&o=",
    price: 12000,
    location: "Calle 54 Este y Samuel Lewis, Obarrio, Panama City",
    country: "Panama",
  },
  {
    title: "Waldorf Astoria Panama",
    description:
      "Waldorf Astoria Panama boasts world-class amenities, gourmet dining, and personalized service for an unforgettable stay.",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/654123789.jpg?k=xyz654123&o=",
    price: 18000,
    location: "Calle Uruguay and Balboa Avenue, Bella Vista, Panama City",
    country: "Panama",
  },
  {
    title: "Hotel Casa Panama",
    description:
      "Hotel Casa Panama combines colonial charm with modern comfort. Enjoy rooftop dining and breathtaking views of the city.",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/852741963.jpg?k=abc852741&o=",
    price: 7400,
    location: "Avenida A, Casco Viejo, Panama City",
    country: "Panama",
  },
  {
    title: "InterContinental Miramar Panama",
    description:
      "This waterfront hotel features an outdoor pool, spa, and exceptional dining options with panoramic views of the bay.",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/951357852.jpg?k=def951357&o=",
    price: 15800,
    location: "Avenida Balboa, Panama City",
    country: "Panama",
  },
  {
    title: "Selina Casco Viejo",
    description:
      "Selina Casco Viejo offers budget-friendly rooms, a rooftop bar, and vibrant social spaces in the heart of the historic district.",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/357951258.jpg?k=ghi357951&o=",
    price: 5300,
    location: "Avenida B, Casco Viejo, Panama City",
    country: "Panama",
  },
  {
    title: "Radisson Hotel Panama Canal",
    description:
      "Stay close to the Panama Canal at Radisson Hotel, offering a pool, comfortable rooms, and family-friendly amenities.",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/123456789.jpg?k=jkl123456&o=",
    price: 9500,
    location: "Amador Avenue, Panama City",
    country: "Panama",
  },
  {
    title: "Casa Antigua Panama",
    description:
      "Casa Antigua Panama offers boutique accommodations with a rooftop terrace and stunning views of the Casco Viejo neighborhood.",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/789456123.jpg?k=mno789456&o=",
    price: 6700,
    location: "Calle 9 Este, Casco Viejo, Panama City",
    country: "Panama",
  },
  {
    title: "TRYP by Wyndham Panama Centro",
    description:
      "Enjoy spacious rooms, a rooftop pool, and proximity to top attractions at TRYP by Wyndham Panama Centro.",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/852963741.jpg?k=pqr852963&o=",
    price: 8800,
    location: "Via Veneto, El Cangrejo, Panama City",
    country: "Panama",
  },
  {
    title: "Hotel Gatto Blanco",
    description:
      "This boutique hotel in Casco Viejo features charming rooms and a rooftop bar with panoramic views of the city.",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/456987123.jpg?k=stu456987&o=",
    price: 7200,
    location: "Calle 9 Este y Avenida Central, Casco Viejo, Panama City",
    country: "Panama",
  },
  {
    title: "Sortis Hotel, Spa & Casino",
    description:
      "Sortis Hotel, Spa & Casino offers luxury accommodations, a full-service spa, and a vibrant casino for entertainment.",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/963852741.jpg?k=vwx963852&o=",
    price: 14000,
    location: "Obarrio, Panama City",
    country: "Panama",
  },
  {
    title: "Hotel Las Clementinas",
    description:
      "Hotel Las Clementinas features elegant suites and a charming courtyard restaurant in the heart of Casco Viejo.",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/159357852.jpg?k=xyz159357&o=",
    price: 8700,
    location: "Avenida B and Calle 11, Casco Viejo, Panama City",
    country: "Panama",
  },
  {
    title: "La Concordia Boutique Hotel",
    description:
      "La Concordia offers luxurious rooms, a rooftop bar, and personalized service in the historic district.",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/357951654.jpg?k=abc357951&o=",
    price: 15300,
    location: "Avenida Central, Casco Viejo, Panama City",
    country: "Panama",
  },
  {
    title: "Hilton Garden Inn Panama",
    description:
      "This hotel offers modern accommodations, a rooftop pool, and convenient access to the city's business district.",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/123654987.jpg?k=def123654&o=",
    price: 10200,
    location: "Calle Eusebio A Morales, El Cangrejo, Panama City",
    country: "Panama",
  },
];

module.exports = { data: sampleListings };
