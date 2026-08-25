export interface SpecialDish {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  originalPrice?: string;
  tag: string;
  description: string;
  image: string;
  badgeText: string;
  prepTime: string;
  calories: string;
  chefNote: string;
  ingredients: string[];
  allergens: string[];
}

export interface RestaurantData {
  name: string;
  tagline: string;
  tableNumber: string;
  currency: string;
  logoIcon: string;
  contactPhone: string;
  whatsappMessage: string;
  googleReviewUrl: string;
  googleRating: number;
  totalReviews: number;
  wifiName: string;
  wifiPassword?: string;
  openingHours: string;
  address: string;
  special: SpecialDish;
  referral: {
    title: string;
    heading: string;
    subheading: string;
    description: string;
    whatsappText: string;
    shareUrl: string;
    offerBadge: string;
  };
  review: {
    title: string;
    heading: string;
    description: string;
    googleUrl: string;
  };
  features: Array<{
    id: string;
    title: string;
    description: string;
    iconName: string;
  }>;
}

export const restaurantData: RestaurantData = {
  name: "URBAN BITE",
  tagline: "RESTAURANT & CAFÉ",
  tableNumber: "Table Card",
  currency: "$",
  logoIcon: "/assets/3dfood.png",
  contactPhone: "+1 (555) 234-5678",
  whatsappMessage: "Hey! We should try Urban Bite together. I found something special here at Table Card!",
  googleReviewUrl: "https://g.page/r/urban-bite-restaurant/review",
  googleRating: 4.9,
  totalReviews: 842,
  wifiName: "UrbanBite_Guest",
  openingHours: "Mon - Sun: 08:00 AM - 11:00 PM",
  address: "452 Culinary Avenue, Gourmet District",
  special: {
    id: "special-01",
    title: "TRUFFLE CREAM PASTA",
    subtitle: "Handcrafted Fettuccine",
    price: "24.50",
    originalPrice: "30.00",
    tag: "TODAY'S SPECIAL",
    description: "A rich and creamy pasta tossed with truffle oil, mushrooms and parmesan.",
    image: "/assets/3dfood.png",
    badgeText: "AVAILABLE TODAY ONLY",
    prepTime: "15-20 min",
    calories: "580 kcal",
    chefNote: "Fresh pasta made daily in-house by Executive Chef Marco.",
    ingredients: [
      "Handcrafted Fettuccine",
      "Black Truffle Essence",
      "Wild Porcini Mushrooms",
      "Heavy Cream",
      "24-Month Aged Parmesan",
      "Fresh Thyme"
    ],
    allergens: ["Dairy", "Gluten", "Egg"]
  },
  referral: {
    title: "BRING A FRIEND",
    heading: "Make It a Moment Together",
    subheading: "Good food is better when shared.",
    description: "Invite someone special to enjoy a great meal with you.",
    whatsappText: "Hey! We should try Urban Bite together. I found something special here: https://urbanbite.cafe",
    shareUrl: "https://urbanbite.cafe?table=card",
    offerBadge: "Complimentary Dessert On Next Visit"
  },
  review: {
    title: "YOUR EXPERIENCE",
    heading: "Your Feedback Means a Lot",
    description: "Loved your experience? Your review helps us serve you better.",
    googleUrl: "https://g.page/r/urban-bite-restaurant/review"
  },
  features: [
    {
      id: "feat-1",
      title: "FRESHLY PREPARED",
      description: "Every dish, made with care.",
      iconName: "Clock"
    },
    {
      id: "feat-2",
      title: "QUALITY INGREDIENTS",
      description: "Handpicked for perfect flavor.",
      iconName: "Leaf"
    },
    {
      id: "feat-3",
      title: "MADE WITH PASSION",
      description: "Passion is our secret ingredient.",
      iconName: "Heart"
    }
  ]
};
