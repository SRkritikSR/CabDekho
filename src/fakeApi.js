// fakeApi.js
export const fakeCabs = [
    {
        cabType: "Sedan",
        ratings: 4.5,
        priceRange: "₹10-₹15/km",
        ac: true,
        includedKms: 100,
        extraFarePerKm: 12,
        nightCharge: true,
        cabImage: "https://images.unsplash.com/photo-1626250624991-29c8c4c2731a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJ1Z2dhdGklMjBjaGlyb258ZW58MHx8MHx8fDA%3D"
    },
    {
        cabType: "SUV",
        ratings: 4.7,
        priceRange: "₹15-₹20/km",
        ac: true,
        includedKms: 120,
        extraFarePerKm: 15,
        nightCharge: true,
        cabImage: "https://images.unsplash.com/photo-1626250624991-29c8c4c2731a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJ1Z2dhdGklMjBjaGlyb258ZW58MHx8MHx8fDA%3D"
    },
    {
        cabType: "Hatchback",
        ratings: 4.2,
        priceRange: "₹8-₹12/km",
        ac: false,
        includedKms: 80,
        extraFarePerKm: 10,
        nightCharge: false,
        cabImage: "https://images.unsplash.com/photo-1626250624991-29c8c4c2731a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJ1Z2dhdGklMjBjaGlyb258ZW58MHx8MHx8fDA%3D"
    },
    {
        cabType: "Luxury",
        ratings: 4.9,
        priceRange: "₹20-₹30/km",
        ac: true,
        includedKms: 150,
        extraFarePerKm: 20,
        nightCharge: true,
        cabImage: "https://images.unsplash.com/photo-1626250624991-29c8c4c2731a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJ1Z2dhdGklMjBjaGlyb258ZW58MHx8MHx8fDA%3D"
    },
    {
        cabType: "Minivan",
        ratings: 4.6,
        priceRange: "₹18-₹25/km",
        ac: true,
        includedKms: 130,
        extraFarePerKm: 18,
        nightCharge: true,
        cabImage: "https://images.unsplash.com/photo-1626250624991-29c8c4c2731a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJ1Z2dhdGklMjBjaGlyb258ZW58MHx8MHx8fDA%3D"
    },
    {
        cabType: "Compact",
        ratings: 4.3,
        priceRange: "₹9-₹13/km",
        ac: false,
        includedKms: 90,
        extraFarePerKm: 11,
        nightCharge: false,
        cabImage: "https://images.unsplash.com/photo-1626250624991-29c8c4c2731a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJ1Z2dhdGklMjBjaGlyb258ZW58MHx8MHx8fDA%3D"
    }
];

// fakeReviews.js
export const fakeReviews = [
    {
        name: "John Doe",
        location: "Mumbai, India",
        ratings: 5,
        comments: "Excellent service and very punctual. Highly recommend!",
        personImage: "https://images.unsplash.com/photo-1518530179311-641ebb3b6b1f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG91dGxpbmUlMjBwZXJzb258ZW58MHx8MHx8fDA%3D"
    },
    {
        name: "Jane Smith",
        location: "Delhi, India",
        ratings: 4,
        comments: "Comfortable ride but a bit expensive. Good overall experience.",
        personImage: "https://images.unsplash.com/photo-1518530179311-641ebb3b6b1f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG91dGxpbmUlMjBwZXJzb258ZW58MHx8MHx8fDA%3D"
    },
    {
        name: "Ravi Kumar",
        location: "Bangalore, India",
        ratings: 3,
        comments: "Decent service but there were some delays. Could be improved.",
        personImage: "https://images.unsplash.com/photo-1518530179311-641ebb3b6b1f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG91dGxpbmUlMjBwZXJzb258ZW58MHx8MHx8fDA%3D"
    },
    {
        name: "Arika",
        location: "Hyderabad, India",
        ratings: 5,
        comments: "Fantastic experience! The driver was very courteous and the car was spotless.",
        personImage: "https://images.unsplash.com/photo-1518530179311-641ebb3b6b1f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG91dGxpbmUlMjBwZXJzb258ZW58MHx8MHx8fDA%3D"
    },
    {
        name: "Vikram Singh",
        location: "Chennai, India",
        ratings: 2,
        comments: "The ride was okay, but there were issues with the booking process.",
        personImage: "https://images.unsplash.com/photo-1518530179311-641ebb3b6b1f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG91dGxpbmUlMjBwZXJzb258ZW58MHx8MHx8fDA%3D"
    },
    {
        name: "Priya Patel",
        location: "Ahmedabad, India",
        ratings: 4,
        comments: "Good service and comfortable ride, though there was a slight delay.",
        personImage: "https://images.unsplash.com/photo-1518530179311-641ebb3b6b1f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG91dGxpbmUlMjBwZXJzb258ZW58MHx8MHx8fDA%3D"
    }
];




