const itineraries = [
  {
    continent: "Africa",
    trips: [
      {
        slug: "kenya-safari",
        title: "Kenya Safari Adventure",
        location: "Maasai Mara, Kenya",
        duration: "6 Days / 5 Nights",
        price: "$2,799",
        summary: "Experience wildlife safaris and breathtaking savannah landscapes.",
        activities: [
          "Sunrise safari drive",
          "Visit Maasai village",
          "Hot air balloon safari",
          "Guided wildlife photography",
        ],
        schedule: [
          { day: "Day 1", time: "3:00 PM", activity: "Arrival and lodge check-in" },
          { day: "Day 2", time: "6:00 AM", activity: "Morning safari drive" },
        ],
        includes: ["Safari tours", "Lodge accommodations", "Meals"],
        paymentLink: "https://example-payment-link",
      },
    ],
  },

  {
    continent: "Asia",
    trips: [
      {
        slug: "japan-highlights",
        title: "Japan Highlights",
        location: "Tokyo & Kyoto",
        duration: "8 Days / 7 Nights",
        price: "$2,999",
        summary: "Explore modern cities, temples, gardens, and Japanese cuisine.",
        activities: [
          "Tokyo city tour",
          "Temple visits in Kyoto",
          "Bullet train ride",
        ],
        schedule: [
          { day: "Day 1", time: "2:00 PM", activity: "Arrival in Tokyo" },
          { day: "Day 2", time: "10:00 AM", activity: "Tokyo highlights tour" },
        ],
        includes: ["Hotels", "City tours", "Train tickets"],
        paymentLink: "https://example-payment-link",
      },
    ],
  },

  {
    continent: "Europe",
    trips: [
      {
        slug: "italian-romance",
        title: "Italian Romance",
        location: "Rome, Florence, Venice",
        duration: "7 Days / 6 Nights",
        price: "$2,499",
        summary: "A romantic journey through Italy's historic cities.",
        activities: [
          "Colosseum tour",
          "Florence walking tour",
          "Venice gondola ride",
        ],
        schedule: [
          { day: "Day 1", time: "2:00 PM", activity: "Arrival in Rome" },
        ],
        includes: ["Hotels", "Guided tours"],
        paymentLink: "https://example-payment-link",
      },
    ],
  },

  {
    continent: "North America",
    trips: [
      {
        slug: "us-national-parks",
        title: "US National Parks Explorer",
        location: "Utah & Arizona",
        duration: "6 Days / 5 Nights",
        price: "$1,999",
        summary: "Explore some of the most beautiful national parks in the USA.",
        activities: [
          "Grand Canyon visit",
          "Zion hiking tour",
          "Bryce Canyon sunrise walk",
        ],
        schedule: [
          { day: "Day 1", time: "1:00 PM", activity: "Arrival in Las Vegas" },
        ],
        includes: ["Transportation", "Park tours"],
        paymentLink: "https://example-payment-link",
      },
    ],
  },

  {
    continent: "South America",
    trips: [
      {
        slug: "peru-machu-picchu",
        title: "Peru & Machu Picchu",
        location: "Cusco & Sacred Valley",
        duration: "6 Days / 5 Nights",
        price: "$2,199",
        summary: "Explore the ancient Incan city of Machu Picchu.",
        activities: [
          "Sacred Valley tour",
          "Machu Picchu guided visit",
          "Local market exploration",
        ],
        schedule: [
          { day: "Day 1", time: "4:00 PM", activity: "Arrival in Cusco" },
        ],
        includes: ["Hotels", "Guided tours", "Train tickets"],
        paymentLink: "https://example-payment-link",
      },
    ],
  },

  {
    continent: "Australia",
    trips: [
      {
        slug: "australia-coast",
        title: "Australian Coastal Adventure",
        location: "Sydney & Great Barrier Reef",
        duration: "7 Days / 6 Nights",
        price: "$2,899",
        summary: "Discover the beauty of Australia's coastlines and reefs.",
        activities: [
          "Sydney Opera House tour",
          "Great Barrier Reef snorkeling",
        ],
        schedule: [
          { day: "Day 1", time: "2:00 PM", activity: "Arrival in Sydney" },
        ],
        includes: ["Hotels", "Tours", "Boat excursions"],
        paymentLink: "https://example-payment-link",
      },
    ],
  },

  {
    continent: "Antarctica",
    trips: [
      {
        slug: "antarctica-expedition",
        title: "Antarctica Expedition Cruise",
        location: "Antarctic Peninsula",
        duration: "10 Days",
        price: "$7,999",
        summary: "An unforgettable expedition to the southernmost continent.",
        activities: [
          "Penguin colony visits",
          "Iceberg kayaking",
          "Wildlife photography",
        ],
        schedule: [
          { day: "Day 1", time: "5:00 PM", activity: "Board expedition ship" },
        ],
        includes: ["Cruise cabin", "Expedition guides"],
        paymentLink: "https://example-payment-link",
      },
    ],
  },
]

export default itineraries