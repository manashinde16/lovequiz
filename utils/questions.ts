// utils/questions.ts
// 100 unique romantic and personality-themed questions with 4 options each

export interface Question {
  id: number;
  text: string;
  options: string[];
}

export const questions: Question[] = [
  {
    id: 1,
    text: "What's your favorite cuisine?",
    options: ["Indian", "Italian", "Chinese", "Mexican"],
  },
  {
    id: 2,
    text: "Where would you love to go for a vacation?",
    options: ["Mountains", "Beach", "Forest", "Desert"],
  },
  {
    id: 3,
    text: "What kind of night view do you love?",
    options: ["Starry sky", "City lights", "Moonlit beach", "Foggy hills"],
  },
  {
    id: 4,
    text: "Which music vibe do you enjoy most?",
    options: ["Lo-fi", "Romantic", "Pop", "Instrumental"],
  },
  {
    id: 5,
    text: "What's your ideal weekend?",
    options: ["Coffee shop", "Hiking", "Netflix & Chill", "Beach walk"],
  },
  {
    id: 6,
    text: "Your favorite time of day?",
    options: ["Sunrise", "Sunset", "Midnight", "Afternoon"],
  },
  {
    id: 7,
    text: "Pick a romantic movie genre:",
    options: ["Drama", "Comedy", "Fantasy", "Adventure"],
  },
  {
    id: 8,
    text: "What kind of weather do you love?",
    options: ["Rainy", "Sunny", "Cloudy", "Snowy"],
  },
  {
    id: 9,
    text: "What’s your favorite dessert?",
    options: ["Ice Cream", "Cake", "Gulab Jamun", "Brownie"],
  },
  {
    id: 10,
    text: "Go-to comfort activity?",
    options: ["Reading", "Cuddling", "Sleeping", "Cooking"],
  },
  {
    id: 11,
    text: "What season do you love the most?",
    options: ["Autumn", "Winter", "Summer", "Spring"],
  },
  {
    id: 12,
    text: "What's your dream date type?",
    options: ["Stargazing", "Candlelight dinner", "Road trip", "Picnic"],
  },
  {
    id: 13,
    text: "Choose a dream travel destination:",
    options: ["Paris", "Tokyo", "New York", "Switzerland"],
  },
  {
    id: 14,
    text: "Which scent relaxes you?",
    options: ["Lavender", "Rose", "Vanilla", "Citrus"],
  },
  {
    id: 15,
    text: "Favorite flower?",
    options: ["Rose", "Lily", "Tulip", "Sunflower"],
  },
  {
    id: 16,
    text: "What do you value most in love?",
    options: ["Time", "Trust", "Touch", "Words"],
  },
  {
    id: 17,
    text: "What drink lifts your mood?",
    options: ["Coffee", "Chai", "Smoothie", "Hot Chocolate"],
  },
  { id: 18, text: "Pick a pet:", options: ["Dog", "Cat", "Rabbit", "No pets"] },
  {
    id: 19,
    text: "What's a perfect evening?",
    options: [
      "Watching movies",
      "Cooking together",
      "Walk under stars",
      "Deep talk",
    ],
  },
  {
    id: 20,
    text: "Your favorite date outfit?",
    options: ["Dress", "Casual", "Traditional", "Chic"],
  },
  {
    id: 21,
    text: "Your love language?",
    options: [
      "Words of affirmation",
      "Quality time",
      "Acts of service",
      "Physical touch",
    ],
  },
  {
    id: 22,
    text: "Your ideal city to live in?",
    options: ["Paris", "London", "Tokyo", "Amsterdam"],
  },
  {
    id: 23,
    text: "Pick a romantic color:",
    options: ["Red", "Pink", "Purple", "White"],
  },
  {
    id: 24,
    text: "Your cozy-time activity:",
    options: ["Snuggling", "Rainy reading", "Warm tea", "Candlelight talk"],
  },
  {
    id: 25,
    text: "What do you dream about?",
    options: ["Adventures", "Love", "Peace", "Freedom"],
  },
  {
    id: 26,
    text: "Which quote resonates most?",
    options: ["Forever yours", "Love wins", "You & Me", "To the moon"],
  },
  {
    id: 27,
    text: "Favorite couple vibe?",
    options: ["Cute & cozy", "Adventurous", "Chill & deep", "Fun & loud"],
  },
  {
    id: 28,
    text: "Perfect Sunday is:",
    options: [
      "Brunch & books",
      "Walk in nature",
      "Cuddles & chai",
      "Road trip",
    ],
  },
  {
    id: 29,
    text: "Choose an element:",
    options: ["Fire", "Water", "Earth", "Air"],
  },
  {
    id: 30,
    text: "Pick a night sky color:",
    options: ["Navy", "Purple", "Deep blue", "Grey"],
  },
  {
    id: 31,
    text: "Favorite emotion?",
    options: ["Love", "Excitement", "Calm", "Joy"],
  },
  {
    id: 32,
    text: "Perfect surprise?",
    options: ["Flowers", "Note", "Gift", "Video call"],
  },
  {
    id: 33,
    text: "What's more romantic?",
    options: ["Rain", "Snow", "Sunset", "Full moon"],
  },
  {
    id: 34,
    text: "Favorite snack?",
    options: ["Chocolate", "Cookies", "Chips", "Biryani"],
  },
  {
    id: 35,
    text: "How do you express love?",
    options: ["Words", "Touch", "Giving", "Listening"],
  },
  {
    id: 36,
    text: "Ideal vacation length?",
    options: ["Weekend", "1 week", "2 weeks", "1 month"],
  },
  {
    id: 37,
    text: "Best way to start a date?",
    options: ["Coffee", "Walk", "Flowers", "Surprise"],
  },
  {
    id: 38,
    text: "Choose your dream proposal place:",
    options: ["Beach", "Mountains", "Restaurant", "Home"],
  },
  {
    id: 39,
    text: "Pick a romantic activity:",
    options: ["Dance", "Stargaze", "Write letters", "Cook together"],
  },
  {
    id: 40,
    text: "Most soothing sound?",
    options: ["Waves", "Rain", "Birds", "Wind"],
  },

  {
    id: 41,
    text: "What's your favorite cuisine?",
    options: ["Indian", "Italian", "Chinese", "Mexican"],
  },
  {
    id: 42,
    text: "Where would you love to go for a vacation?",
    options: ["Mountains", "Beach", "Forest", "Desert"],
  },
  {
    id: 43,
    text: "What kind of night view do you love?",
    options: ["Starry sky", "City lights", "Moonlit beach", "Foggy hills"],
  },
  {
    id: 44,
    text: "Which music vibe do you enjoy most?",
    options: ["Lo-fi", "Romantic", "Pop", "Instrumental"],
  },
  {
    id: 45,
    text: "What's your ideal weekend?",
    options: ["Coffee shop", "Hiking", "Netflix & Chill", "Beach walk"],
  },
  {
    id: 46,
    text: "Your favorite time of day?",
    options: ["Sunrise", "Sunset", "Midnight", "Afternoon"],
  },
  {
    id: 47,
    text: "Pick a romantic movie genre:",
    options: ["Drama", "Comedy", "Fantasy", "Adventure"],
  },
  {
    id: 48,
    text: "What kind of weather do you love?",
    options: ["Rainy", "Sunny", "Cloudy", "Snowy"],
  },
  {
    id: 49,
    text: "What’s your favorite dessert?",
    options: ["Ice Cream", "Cake", "Gulab Jamun", "Brownie"],
  },
  {
    id: 50,
    text: "Go-to comfort activity?",
    options: ["Reading", "Cuddling", "Sleeping", "Cooking"],
  },
  {
    id: 51,
    text: "What season do you love the most?",
    options: ["Autumn", "Winter", "Summer", "Spring"],
  },
  {
    id: 52,
    text: "What's your dream date type?",
    options: ["Stargazing", "Candlelight dinner", "Road trip", "Picnic"],
  },
  {
    id: 53,
    text: "Choose a dream travel destination:",
    options: ["Paris", "Tokyo", "New York", "Switzerland"],
  },
  {
    id: 54,
    text: "Which scent relaxes you?",
    options: ["Lavender", "Rose", "Vanilla", "Citrus"],
  },
  {
    id: 55,
    text: "Favorite flower?",
    options: ["Rose", "Lily", "Tulip", "Sunflower"],
  },
  {
    id: 56,
    text: "What do you value most in love?",
    options: ["Time", "Trust", "Touch", "Words"],
  },
  {
    id: 57,
    text: "What drink lifts your mood?",
    options: ["Coffee", "Chai", "Smoothie", "Hot Chocolate"],
  },
  {
    id: 58,
    text: "Pick a pet:",
    options: ["Dog", "Cat", "Rabbit", "No pets"],
  },
  {
    id: 59,
    text: "What's a perfect evening?",
    options: [
      "Watching movies",
      "Cooking together",
      "Walk under stars",
      "Deep talk",
    ],
  },
  {
    id: 60,
    text: "Your favorite date outfit?",
    options: ["Dress", "Casual", "Traditional", "Chic"],
  },
];
