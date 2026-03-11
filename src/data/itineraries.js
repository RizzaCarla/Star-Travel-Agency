const itineraries = [
  {
    continent: 'Europe',
    trips: [
      {
        slug: 'italian-romance',
        title: 'Italian Romance',
        location: 'Rome, Florence, Venice',
        duration: '7 Days / 6 Nights',
        price: '$2,499',
        summary:
          'A romantic journey through Italy with art, food, canals, and guided city tours.',
        image:
          'https://images.unsplash.com/photo-1525874684015-58379d421a52?auto=format&fit=crop&w=1200&q=80',
        activities: [
          'Guided Colosseum tour',
          'Florence walking tour',
          'Tuscan dinner experience',
          'Venice gondola ride',
          'Free afternoon for shopping and cafés',
        ],
        schedule: [
          { day: 'Day 1', time: '2:00 PM', activity: 'Arrival and hotel check-in in Rome' },
          { day: 'Day 2', time: '9:00 AM', activity: 'Colosseum and Roman Forum guided tour' },
          { day: 'Day 3', time: '10:00 AM', activity: 'Train to Florence and city walk' },
          { day: 'Day 4', time: '6:30 PM', activity: 'Tuscan dinner experience' },
          { day: 'Day 5', time: '11:00 AM', activity: 'Travel to Venice' },
          { day: 'Day 6', time: '3:00 PM', activity: 'Gondola ride and canal district visit' },
          { day: 'Day 7', time: '9:00 AM', activity: 'Departure' },
        ],
        includes: [
          'Hotel accommodations',
          'Selected guided tours',
          'Intercity transportation',
          'Some meals',
        ],
        paymentLink: 'https://buy.stripe.com/test_example_italian_romance',
      },
      {
        slug: 'paris-beyond',
        title: 'Paris & Beyond',
        location: 'Paris and nearby day trips',
        duration: '5 Days / 4 Nights',
        price: '$1,899',
        summary:
          'A stylish getaway with iconic Paris landmarks, food, and a scenic day trip.',
        image:
          'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80',
        activities: [
          'Eiffel Tower district tour',
          'Seine river cruise',
          'Pastry tasting',
          'Day trip outside Paris',
        ],
        schedule: [
          { day: 'Day 1', time: '1:00 PM', activity: 'Arrival and hotel check-in' },
          { day: 'Day 2', time: '10:00 AM', activity: 'City highlights tour' },
          { day: 'Day 3', time: '5:00 PM', activity: 'Evening Seine river cruise' },
          { day: 'Day 4', time: '8:30 AM', activity: 'Full-day scenic excursion' },
          { day: 'Day 5', time: '10:00 AM', activity: 'Departure' },
        ],
        includes: ['Hotel accommodations', 'Guided city tour', 'River cruise'],
        paymentLink: 'https://buy.stripe.com/test_example_paris_beyond',
      },
    ],
  },
  {
    continent: 'Asia',
    trips: [
      {
        slug: 'japan-highlights',
        title: 'Japan Highlights',
        location: 'Tokyo and Kyoto',
        duration: '8 Days / 7 Nights',
        price: '$2,999',
        summary:
          'A balanced itinerary featuring modern city life, temples, gardens, and food.',
        image:
          'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80',
        activities: [
          'Tokyo city tour',
          'Temple visits in Kyoto',
          'Food tasting experience',
          'Bullet train transfer',
        ],
        schedule: [
          { day: 'Day 1', time: '3:00 PM', activity: 'Arrival in Tokyo' },
          { day: 'Day 2', time: '9:30 AM', activity: 'Tokyo highlights tour' },
          { day: 'Day 4', time: '11:00 AM', activity: 'Bullet train to Kyoto' },
          { day: 'Day 5', time: '10:00 AM', activity: 'Temple and garden tour' },
          { day: 'Day 8', time: '9:00 AM', activity: 'Departure' },
        ],
        includes: ['Hotel accommodations', 'City tours', 'Train transfer'],
        paymentLink: 'https://buy.stripe.com/test_example_japan_highlights',
      },
    ],
  },
]

export default itineraries