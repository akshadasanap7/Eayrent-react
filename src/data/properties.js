export const translations = {
  en: {
    nav: { brand: "EasyRent", listings: "Listings", about: "About" },
    hero: { title: "Find Your Perfect Home", subtitle: "Browse thousands of rental properties across the city", cta: "Explore Listings" },
    filters: { search: "Search by title or location...", type: "Property Type", all: "All Types", apartment: "Apartment", house: "House", studio: "Studio", villa: "Villa", price: "Max Price", beds: "Bedrooms", any: "Any", sort: "Sort By", newest: "Newest", priceLow: "Price: Low → High", priceHigh: "Price: High → Low", reset: "Reset Filters" },
    card: { perMonth: "/mo", beds: "Beds", baths: "Baths", sqft: "sqft", viewDetails: "View Details", available: "Available", rented: "Rented" },
    detail: { back: "← Back to Listings", contact: "Contact Landlord", save: "Save Property", amenities: "Amenities", description: "Description", location: "Location", listed: "Listed on" },
    noResults: "No properties match your filters.",
    about: { title: "About EasyRent", desc: "EasyRent connects tenants with landlords for a seamless rental experience." }
  },
  fr: {
    nav: { brand: "EasyRent", listings: "Annonces", about: "À propos" },
    hero: { title: "Trouvez Votre Maison Idéale", subtitle: "Parcourez des milliers de propriétés à louer en ville", cta: "Explorer les Annonces" },
    filters: { search: "Rechercher par titre ou lieu...", type: "Type de Propriété", all: "Tous", apartment: "Appartement", house: "Maison", studio: "Studio", villa: "Villa", price: "Prix Max", beds: "Chambres", any: "Tous", sort: "Trier Par", newest: "Plus Récent", priceLow: "Prix: Croissant", priceHigh: "Prix: Décroissant", reset: "Réinitialiser" },
    card: { perMonth: "/mois", beds: "Lits", baths: "Bains", sqft: "m²", viewDetails: "Voir Détails", available: "Disponible", rented: "Loué" },
    detail: { back: "← Retour", contact: "Contacter", save: "Sauvegarder", amenities: "Équipements", description: "Description", location: "Emplacement", listed: "Publié le" },
    noResults: "Aucune propriété ne correspond.",
    about: { title: "À propos d'EasyRent", desc: "EasyRent connecte locataires et propriétaires." }
  },
  es: {
    nav: { brand: "EasyRent", listings: "Listados", about: "Acerca de" },
    hero: { title: "Encuentra Tu Hogar Perfecto", subtitle: "Explora miles de propiedades en alquiler en la ciudad", cta: "Ver Listados" },
    filters: { search: "Buscar por título o ubicación...", type: "Tipo de Propiedad", all: "Todos", apartment: "Apartamento", house: "Casa", studio: "Estudio", villa: "Villa", price: "Precio Máx", beds: "Habitaciones", any: "Cualquiera", sort: "Ordenar Por", newest: "Más Reciente", priceLow: "Precio: Menor a Mayor", priceHigh: "Precio: Mayor a Menor", reset: "Restablecer" },
    card: { perMonth: "/mes", beds: "Camas", baths: "Baños", sqft: "m²", viewDetails: "Ver Detalles", available: "Disponible", rented: "Alquilado" },
    detail: { back: "← Volver", contact: "Contactar", save: "Guardar", amenities: "Comodidades", description: "Descripción", location: "Ubicación", listed: "Publicado el" },
    noResults: "No hay propiedades que coincidan.",
    about: { title: "Acerca de EasyRent", desc: "EasyRent conecta inquilinos con propietarios." }
  }
};

export const properties = [
  {
    id: 1, title: "Modern Downtown Apartment", type: "apartment", price: 2200, beds: 2, baths: 2, sqft: 950,
    location: "Downtown, New York",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80",
    status: "available",
    amenities: ["WiFi", "Gym", "Parking", "Doorman", "Rooftop"],
    description: "Stunning modern apartment in the heart of downtown with floor-to-ceiling windows and breathtaking city views. Fully renovated with premium finishes.",
    landlord: "John Smith", phone: "+1 (555) 100-2000", listed: "2025-01-10"
  },
  {
    id: 2, title: "Cozy Studio in Midtown", type: "studio", price: 1400, beds: 1, baths: 1, sqft: 480,
    location: "Midtown, New York",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80",
    status: "available",
    amenities: ["WiFi", "Laundry", "Elevator"],
    description: "Charming studio perfect for young professionals. Walking distance to subway and top restaurants.",
    landlord: "Maria Garcia", phone: "+1 (555) 200-3000", listed: "2025-02-01"
  },
  {
    id: 3, title: "Spacious Family House", type: "house", price: 3500, beds: 4, baths: 3, sqft: 2200,
    location: "Brooklyn, New York",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80",
    status: "available",
    amenities: ["Garden", "Garage", "Fireplace", "Basement", "Pet Friendly"],
    description: "Beautiful family home with a large backyard, modern kitchen, and quiet neighborhood. Great schools nearby.",
    landlord: "Robert Chen", phone: "+1 (555) 300-4000", listed: "2025-01-25"
  },
  {
    id: 4, title: "Luxury Penthouse Villa", type: "villa", price: 8500, beds: 5, baths: 4, sqft: 4500,
    location: "Upper East Side, New York",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&q=80",
    status: "rented",
    amenities: ["Pool", "Concierge", "Spa", "Private Terrace", "Wine Cellar"],
    description: "Exclusive penthouse with panoramic city views, private pool, and world-class amenities. The pinnacle of luxury living.",
    landlord: "Sophie Laurent", phone: "+1 (555) 400-5000", listed: "2024-12-15"
  },
  {
    id: 5, title: "Bright 1BR in Williamsburg", type: "apartment", price: 1800, beds: 1, baths: 1, sqft: 650,
    location: "Williamsburg, Brooklyn",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&q=80",
    status: "available",
    amenities: ["WiFi", "Bike Storage", "Rooftop", "Dishwasher"],
    description: "Trendy apartment in vibrant Williamsburg with exposed brick and hardwood floors. Steps from the best cafes.",
    landlord: "Alex Kim", phone: "+1 (555) 500-6000", listed: "2025-03-05"
  },
  {
    id: 6, title: "Charming Brownstone House", type: "house", price: 4200, beds: 3, baths: 2, sqft: 1800,
    location: "Park Slope, Brooklyn",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=600&q=80",
    status: "available",
    amenities: ["Garden", "Fireplace", "Washer/Dryer", "Storage"],
    description: "Classic Brooklyn brownstone with original details, private garden, and tree-lined street. A true New York gem.",
    landlord: "Emma Wilson", phone: "+1 (555) 600-7000", listed: "2025-02-20"
  },
  {
    id: 7, title: "Artist Loft Studio", type: "studio", price: 1650, beds: 1, baths: 1, sqft: 700,
    location: "SoHo, New York",
    image: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=600&q=80",
    status: "available",
    amenities: ["High Ceilings", "Natural Light", "WiFi", "Elevator"],
    description: "Open-plan loft in iconic SoHo with soaring ceilings and industrial-chic aesthetic. Perfect for creatives.",
    landlord: "David Park", phone: "+1 (555) 700-8000", listed: "2025-03-01"
  },
  {
    id: 8, title: "Waterfront Villa Estate", type: "villa", price: 12000, beds: 6, baths: 5, sqft: 6000,
    location: "Hamptons, New York",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
    status: "available",
    amenities: ["Pool", "Beach Access", "Tennis Court", "Chef Kitchen", "Garage"],
    description: "Magnificent waterfront estate with private beach access and breathtaking ocean views. Ultimate luxury retreat.",
    landlord: "James Thornton", phone: "+1 (555) 800-9000", listed: "2025-01-05"
  }
];
