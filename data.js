const data = [
  {
    name: "Chinese",
    recipes: [
      {
        name: "Shanghai Noodle Soup",
        serves: "4 meals",
        time: "1.5 - 2 hours",
        ingredients: [
          {name: "Noodles"},
          {name: "Water", quantity: "4 cups"},
          {name: "White Pepper", quantity: "as needed"},
          {name: "Dark Soy Sauce", quantity: "as needed"},
          {name: "Shrimp", quantity: "16", style: "peeled"},
          {name: "Pork", quantity: "1 lb", style: "cut into strips"},
          {name: "Snow Cabbage", quantity: "2 packs"},
          {name: "Bamboo Shoots", quantity: "1/2 can"},
          {name: "Salt", quantity: "as needed"},
          {name: "Olive Oil", quantity: "as needed"},
          {name: "Shrimp Paste", quantity: "1 tbsp", style: "(optional)"},
        ],
        directions: [
          {type: "header", text: "Prep"},
          {type: "directions", text: "Cut pork loin to shreds. Marinate with white pepper, dark soy sauce, and oil." },
          {type: "directions", text: "Peel shrimp and marinate with white pepper." },
          {type: "header", text: "Cook"},
          {type: "directions", text: "Boil water."},
          {type: "directions", text: "Fry shrimp shells with shrimp paste, then add mixture into boiling water." },
          {type: "directions", text: "Sear pork strips." },
          {type: "directions", text: "Add pork strips and snow cabbage into boiling water, then simmer for 20 minutes." },
          {type: "directions", text: "Boil noodles." },
          {type: "directions", text: "Stir fry shrimp and add to soup 15 minutes before serving." },
          {type: "directions", text: "Add additional white pepper, salt, and dark soy sauce if needed to soup base." }

        ]
      },
      {
        name: "Twice Cooked Pork",
        ingredients: ["pork", "black bean sauce"]
      },
      {
        name: "Mapo Tofu",
        ingredients: ["tofu", "black bean sauce", "pork"]
      }
    ]
  },
  {
    name: "Korean",
    recipes: [
      {
        name: "Kimchi Fried Rice",
        ingredients: ["kimchi", "rice", "egg", "spam", "corn", "peas"]
      },
      {
        name: "Army Stew",
        ingredients: ["kimchi", "rice", "egg", "spam", "corn", "peas"]
      }
    ]
  },
  {
    name: "Italian",
    recipes: [
      {
        name: "Pasta",
        ingredients: ["ipod", "iphone", "apple"]
      }
    ]
  },
  {
    name: "Mediterranean",
    recipes: [
      {
        name: "Green",
        ingredients: ["paiting", "nature", "rain"]
      }
    ]
  },
  {
    name: "American",
    recipes: [
      {
        name: "Fennel Crusted Lamb",
        ingredients: ["lamb", "fennel", "parsley", "parmesan"]
      }
    ]
  }
];
