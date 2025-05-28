const products = [
  {
    id: 1,
    name: "Jaggery Powder",
    image: "/products/jagery.jpeg",
    description: "Jaggery powder is a natural sweetener made by evaporating sugarcane juice. It retains essential minerals like iron, magnesium, and potassium. Used in traditional sweets, it’s a healthier alternative to refined sugar. Known for its earthy flavor and energizing properties. Helps in digestion and boosts immunity.",
    specifications: {
      "Country of Origin": "India",
      "Harvest Period": "Winter Crop (Feb/Mar)",
      "Color": "Brown",
      "Packaging": "10 KG, 22.68 KG, 25 KG Multiwall Paper Bags; 1 MT Tote bags",
      "Labeling": "Private labeling as per buyer's need",
      "Shelf Life": "24 Months from Production Date",
      "GMO Status": "GMO Free",
      "Specification": "Detailed Specification on Request"
    },
    benefits: [
      "Natural energy booster",
      "Rich in essential minerals like iron, magnesium, potassium",
      "Supports digestion",
      "Boosts immunity",
      "Healthier alternative to refined sugar"
    ]
  },
  {
    id: 2,
    name: "Sugarcane Molasses",
    image: "/products/mollases.jpeg",
    description: "Molasses is a thick syrup produced during sugarcane refining. Rich in calcium, iron, and antioxidants, it's a natural flavor enhancer. Commonly used in baking, sauces, and health tonics. Its robust taste adds depth to many dishes. Also used in traditional medicine for its benefits.",
    specifications: {
      "Country of Origin": "India",
      "Color": "Dark Brown",
      "Brix": "79-85°",
      "Moisture": "18-21%",
      "Packaging": "300 KG Drums or 25 MT Flexi Tanks",
      "Shelf Life": "12 Months",
      "Usage": "Food, Fermentation, Animal Feed",
      "Specification": "Detailed Specification on Request"
    },
    benefits: [
      "Rich source of calcium and iron",
      "Contains antioxidants",
      "Natural flavor enhancer",
      "Supports bone health",
      "Used in traditional medicine for detoxification"
    ]
  },
  {
    id: 3,
    name: "Arhar Dal",
    image: "/products/arhad.jpg",
    description: "Also known as Toor Dal, this legume is a staple in Indian kitchens. It’s protein-rich, making it ideal for vegetarians. Easy to cook and digest, often used in dals and stews. Contains essential amino acids and fiber. A versatile pulse with a mild, nutty flavor.",
    specifications: {
      "Color": "Yellow",
      "Purity": "99% Min",
      "Admixture": "1% Max",
      "Moisture": "12% Max",
      "Packaging": "25 KG, 50 KG PP Bags or Custom",
      "Shelf Life": "12 Months",
      "Origin": "India"
    },
    benefits: [
      "High in protein for muscle repair",
      "Contains essential amino acids",
      "Rich in dietary fiber for digestive health",
      "Easy to cook and digest",
      "Supports vegetarian nutritional needs"
    ]
  },
  {
    id: 4,
    name: "Moong Dal",
    image: "/products/moong.jfif",
    description: "Moong dal is light and easy on the stomach. Rich in protein, folate, and fiber, it supports digestion. Frequently used in soups, curries, and khichdi. Ideal for people with dietary restrictions. Known for its quick cooking and high nutritional value.",
    specifications: {
      "Color": "Yellow",
      "Purity": "99% Min",
      "Admixture": "0.5% Max",
      "Moisture": "12% Max",
      "Shelf Life": "12 Months",
      "Origin": "India"
    },
    benefits: [
      "Light and easy to digest",
      "Rich in protein and folate",
      "Supports healthy digestion",
      "Ideal for dietary restrictions",
      "Quick cooking and high nutritional value"
    ]
  },
  {
    id: 5,
    name: "Chana Dal",
    image: "/products/chana.jfif",
    description: "Split chickpeas are packed with protein, fiber, and minerals. Commonly used in curries and savory dishes. It has a slightly sweet, nutty flavor. Helps regulate blood sugar levels and supports heart health. A kitchen staple in many Indian homes.",
    specifications: {
      "Color": "Light Yellow",
      "Purity": "99% Min",
      "Admixture": "0.5% Max",
      "Moisture": "12% Max",
      "Packaging": "25 KG, 50 KG Bags",
      "Shelf Life": "12 Months",
      "Origin": "India"
    },
    benefits: [
      "Helps regulate blood sugar levels",
      "Rich in dietary fiber",
      "Supports heart health",
      "High protein content",
      "Contains essential minerals"
    ]
  },
  {
    id: 6,
    name: "Chawali",
    image: "/products/chawali.jfif",
    description: "Chawali, or black-eyed peas, are rich in protein and potassium. They are used in stews, salads, and curries. Known for their creamy texture and subtle flavor. Help in maintaining bone health and muscle function. A nutritious legume for everyday meals.",
    specifications: {
      "Color": "Cream with black eye",
      "Purity": "99% Min",
      "Admixture": "0.5% Max",
      "Moisture": "12% Max",
      "Origin": "India",
      "Shelf Life": "12 Months"
    },
    benefits: [
      "High in protein and potassium",
      "Supports bone health",
      "Helps muscle function",
      "Nutritious and versatile in cooking",
      "Provides sustained energy"
    ]
  },
  {
    id: 7,
    name: "Kabuli Chana",
    image: "/products/kabuli.jfif",
    description: "Kabuli Chana, or white chickpeas, are large and creamy in texture. Essential for dishes like chole and hummus. High in protein, fiber, and iron. Great for promoting fullness and supporting muscle growth. Also used in healthy salads and snacks.",
    specifications: {
      "Color": "Creamy White",
      "Size": "Large, Uniform",
      "Purity": "99% Min",
      "Admixture": "0.5% Max",
      "Moisture": "12% Max",
      "Origin": "India",
      "Shelf Life": "12 Months",
      "Packaging": "25 KG, 50 KG Bags"
    },
    benefits: [
      "Supports muscle growth with high protein",
      "Rich in dietary fiber for digestion",
      "Helps promote fullness and weight management",
      "Good source of iron",
      "Versatile for salads and snacks"
    ]
  },
  {
    id: 8,
    name: "Kala Chana",
    image: "/products/kala-chana.jfif",
    description: "Kala Chana is a variety of chickpea rich in fiber and protein. Often used in Indian curries and salads. Its nutty taste and firm texture make it versatile. Boosts energy and helps manage weight. A powerhouse of nutrition and taste.",
    specifications: {
      "Color": "Dark Brown/Black",
      "Purity": "99% Min",
      "Admixture": "0.5% Max",
      "Moisture": "12% Max",
      "Origin": "India",
      "Shelf Life": "12 Months",
      "Packaging": "25 KG, 50 KG Bags"
    },
    benefits: [
      "High fiber content for weight management",
      "Rich in plant-based protein",
      "Provides sustained energy",
      "Supports healthy digestion",
      "Nutty flavor and firm texture"
    ]
  },
  {
    id: 9,
    name: "Kuthil",
    image: "/products/kuthil.jfif",
    description: "Kuthil is a lesser-known but nutritious legume. Commonly found in regional Indian dishes. Packed with plant-based protein and fiber. Used in traditional recipes for its distinct flavor. A great addition to a healthy vegetarian diet.",
    specifications: {
      "Color": "Light Brown",
      "Purity": "98% Min",
      "Admixture": "1% Max",
      "Moisture": "12% Max",
      "Origin": "India",
      "Shelf Life": "12 Months"
    },
    benefits: [
      "Good source of plant-based protein",
      "Rich in dietary fiber",
      "Supports healthy digestion",
      "Provides essential nutrients",
      "Adds unique flavor to meals"
    ]
  },
  {
  id: 10,
  name: "Masur Dal",
  image: "/products/masur.jfif",
  description: "Masur Dal, or red lentils, cook quickly and easily. Ideal for soups, dals, and stews. Rich in protein, iron, and folate. Helps improve metabolism and supports red blood cell formation. A convenient and wholesome choice.",
  specifications: {
    "Color": "Orange-Red",
    "Purity": "99% Min",
    "Admixture": "0.5% Max",
    "Moisture": "12% Max",
    "Origin": "India",
    "Shelf Life": "12 Months",
    "Packaging": "25 KG, 50 KG Bags"
  },
  benefits: [
    "High protein content supports muscle growth and repair.",
    "Rich in iron and folate, aiding in red blood cell production.",
    "Quick cooking time makes it convenient for daily meals.",
    "Supports metabolism and overall energy levels."
  ]
},
{
  id: 11,
  name: "Rajma",
  image: "/products/rajma.jfif",
  description: "Rajma are kidney-shaped beans popular in North Indian cuisine. Loaded with protein and fiber. Commonly cooked in rich, spicy gravies. Supports heart health and digestive wellness. A comforting and nutritious meal option.",
  specifications: {
    "Color": "Deep Red/Burgundy",
    "Purity": "99% Min",
    "Admixture": "0.5% Max",
    "Moisture": "12% Max",
    "Origin": "India",
    "Shelf Life": "12 Months",
    "Packaging": "25 KG, 50 KG Bags"
  },
  benefits: [
    "High protein and fiber promote satiety and digestive health.",
    "Supports cardiovascular health by helping regulate cholesterol.",
    "Rich in antioxidants that may reduce inflammation.",
    "Versatile ingredient for nutritious, hearty meals."
  ]
},
{
  id: 12,
  name: "Urad Dal",
  image: "/products/urad.jfif",
  description: "Urad Dal is essential in South Indian recipes like idli and dosa. High in protein, iron, and calcium. Aids in bone health and muscle strength. Can be used in savory and fermented dishes. Adds rich texture and depth to meals.",
  specifications: {
    "Color": "Black whole or White split",
    "Purity": "99% Min",
    "Admixture": "0.5% Max",
    "Moisture": "12% Max",
    "Origin": "India",
    "Shelf Life": "12 Months",
    "Packaging": "25 KG, 50 KG Bags"
  },
  benefits: [
    "Excellent source of protein supporting muscle repair and growth.",
    "High calcium content benefits bone strength and density.",
    "Supports digestive health, especially when fermented.",
    "Adds rich texture and flavor to traditional dishes."
  ]
},
{
  id: 13,
  name: "Val (Bakla)",
  image: "/products/val.jfif",
  description: "Val, also known as Bakla or field beans, is used in Maharashtrian cuisine. Rich in protein and dietary fiber. Often cooked in spicy gravies or stir-fries. Promotes digestion and supports energy levels. A flavorful, nutritious legume.",
  specifications: {
    "Color": "Light Brown",
    "Purity": "98% Min",
    "Admixture": "1% Max",
    "Moisture": "12% Max",
    "Origin": "India",
    "Shelf Life": "12 Months"
  },
  benefits: [
    "High protein and fiber content promote fullness and digestion.",
    "Supports sustained energy release and metabolism.",
    "Rich in essential nutrients that aid overall health.",
    "Versatile and flavorful addition to traditional meals."
  ]
},
// Oils

{
  id: 14,
  name: "Soyabean Oil",
  image: "/products/soyabeanoil.jfif",
  description: "Soyabean oil is a versatile cooking oil with a neutral flavor. Rich in polyunsaturated fats and vitamin E. Ideal for frying, baking, and salad dressings. Helps lower cholesterol and improve heart health. A healthy choice for daily use.",
  specifications: {
    "Type": "Refined",
    "Color": "Light Yellow",
    "FFA (Free Fatty Acid)": "<0.1%",
    "Moisture": "<0.1%",
    "Shelf Life": "12 Months",
    "Packaging": "1L, 5L, 15L, Bulk",
    "Origin": "India"
  },
  benefits: [
    "Rich in polyunsaturated fats supporting heart health.",
    "Contains vitamin E, an antioxidant that protects cells.",
    "Neutral flavor suitable for diverse cooking methods.",
    "Helps lower bad cholesterol levels."
  ]
},
{
  id: 15,
  name: "Peanut Oil",
  image: "/products/peanutoil.jfif",
  description: "Peanut oil has a rich, nutty flavor and high smoke point. Perfect for deep frying and Asian cooking. Contains heart-healthy monounsaturated fats. Also used in cold dressings and sauces. Enhances taste while supporting heart health.",
  specifications: {
    "Type": "Refined",
    "Color": "Golden Yellow",
    "FFA (Free Fatty Acid)": "<0.1%",
    "Moisture": "<0.1%",
    "Smoke Point": "230°C approx.",
    "Shelf Life": "12 Months",
    "Packaging": "1L, 5L, 15L, Bulk",
    "Origin": "India"
  },
  benefits: [
    "High smoke point ideal for frying and high-temperature cooking.",
    "Monounsaturated fats promote cardiovascular health.",
    "Rich, nutty flavor enhances culinary dishes.",
    "Good source of vitamin E antioxidant."
  ]
},
{
  id: 16,
  name: "Mustard Oil",
  image: "/products/mustardoil.jfif",
  description: "Mustard oil is known for its pungent aroma and taste. A staple in Indian pickles and regional dishes. Rich in omega-3 fatty acids and antioxidants. Promotes skin health and supports heart function. Best used in traditional recipes.",
  specifications: {
    "Type": "Cold Pressed / Refined",
    "Color": "Golden Yellow to Brownish",
    "FFA (Free Fatty Acid)": "<2%",
    "Erucic Acid": "<2%",
    "Shelf Life": "12 Months",
    "Packaging": "1L, 5L, 15L, Bulk",
    "Origin": "India"
  },
  benefits: [
    "Rich in omega-3 fatty acids promoting heart health.",
    "Contains antioxidants beneficial for skin and immunity.",
    "Distinct flavor ideal for traditional Indian cooking.",
    "Supports healthy circulation and metabolic functions."
  ]
},
{
  id: 17,
  name: "Sunflower Oil",
  image: "/products/sunfloweroil.jfif",
  description: "Sunflower oil has a mild flavor and high smoke point. Great for sautéing, baking, and frying. Packed with vitamin E and healthy fats. Supports heart and skin health. A light and versatile cooking oil.",
  specifications: {
    "Type": "Refined",
    "Color": "Pale Yellow",
    "FFA (Free Fatty Acid)": "<0.1%",
    "Moisture": "<0.1%",
    "Shelf Life": "12 Months",
    "Packaging": "1L, 5L, 15L, Bulk",
    "Origin": "India"
  },
  benefits: [
    "High vitamin E content supports skin health.",
    "Light flavor suitable for various cooking methods.",
    "Rich in unsaturated fats promoting heart health.",
    "High smoke point allows for versatile use."
  ]
},
{
  id: 18,
  name: "Sesame Oil",
  image: "/products/sesameoil.jfif",
  description: "Sesame oil is made from pressed sesame seeds. Offers a distinct nutty flavor used in Asian dishes. Rich in antioxidants and healthy fats. Supports bone and skin health. Ideal for stir-frying and seasoning.",
  specifications: {
    "Type": "Cold Pressed / Refined",
    "Color": "Golden to Amber",
    "FFA (Free Fatty Acid)": "<0.3%",
    "Moisture": "<0.1%",
    "Shelf Life": "12 Months",
    "Packaging": "1L, 5L, 15L, Bulk",
    "Origin": "India"
  },
  benefits: [
    "High antioxidant content supports overall health.",
    "Rich in healthy fats beneficial for heart and skin.",
    "Distinct nutty flavor enhances culinary dishes.",
    "Supports bone health and metabolism."
  ]
},
{
  id: 19,
  name: "Safflower Oil",
  image: "/products/safoil.jfif",
  description: "Safflower oil is a heart-healthy oil with a light texture. Excellent for cooking, sautéing, and salad dressings. Rich in unsaturated fats and vitamin E. Supports cholesterol balance and cardiovascular health. A healthy addition to daily meals.",
  specifications: {
    "Type": "Refined",
    "Color": "Light Yellow",
    "FFA (Free Fatty Acid)": "<0.1%",
    "Moisture": "<0.1%",
    "Shelf Life": "12 Months",
    "Packaging": "1L, 5L, 15L, Bulk",
    "Origin": "India"
  },
  benefits: [
    "Supports heart health by promoting healthy cholesterol levels.",
    "Rich in vitamin E for antioxidant protection.",
    "Light texture suitable for salads and cooking.",
    "Helps maintain cardiovascular wellness."
  ]
},

  {
  id: 20,
  name: "Groundnut Cake",
  image: "/products/peanutcake.jfif",
  description: "Groundnut cake, also known as peanut cake, is a nutritious by-product of peanut oil extraction. Rich in protein and fiber, it is commonly used as animal feed and fertilizer. Contains residual oil enhancing its energy content.",
  specifications: {
    "Protein Content": "40-50%",
    "Oil Content": "5-8%",
    "Moisture": "10% Max",
    "Fiber": "6-8%",
    "Packaging": "Bulk, Bags",
    "Origin": "India"
  },
  benefits: [
    "High protein content supports healthy livestock growth and productivity.",
    "Residual oil boosts energy value making it an efficient feed.",
    "Good fiber content aids digestion in animals.",
    "Also used as organic fertilizer to improve soil fertility."
  ]
},
{
  id: 21,
  name: "Soyabean Cake",
  image: "/products/soyabean.jfif",
  description: "Soyabean cake is a protein-rich meal obtained after extracting oil from soybeans. Used extensively in animal feed due to its high digestibility and balanced amino acid profile. Also serves as an organic fertilizer.",
  specifications: {
    "Protein Content": "45-50%",
    "Oil Content": "5-6%",
    "Moisture": "10% Max",
    "Fiber": "6-8%",
    "Packaging": "Bulk, Bags",
    "Origin": "India"
  },
  benefits: [
    "Excellent protein source with balanced amino acids for animal nutrition.",
    "Highly digestible, promoting better feed efficiency.",
    "Supports muscle development and overall health of livestock.",
    "Organic fertilizer option enhancing soil nutrient content."
  ]
},
{
  id: 22,
  name: "Cottonseed Cake",
  image: "/products/cottonseed.jfif",
  description: "Cottonseed cake is a by-product of cottonseed oil extraction, widely used as animal feed. It is rich in protein and minerals but low in fiber, making it an excellent feed supplement for livestock.",
  specifications: {
    "Protein Content": "35-40%",
    "Oil Content": "5-7%",
    "Moisture": "10% Max",
    "Fiber": "8-10%",
    "Packaging": "Bulk, Bags",
    "Origin": "India"
  },
  benefits: [
    "Rich in protein and essential minerals for livestock growth.",
    "Lower fiber content improves digestibility and nutrient absorption.",
    "Provides a balanced feed supplement for varied livestock needs.",
    "Enhances production efficiency and animal health."
  ]
},
{
  id: 23,
  name: "Sunflower Cake",
  image: "/products/sunflower.jfif",
  description: "Sunflower cake is produced after extracting oil from sunflower seeds. It is a valuable source of protein and fiber used primarily as animal feed. It promotes healthy digestion and supports livestock growth.",
  specifications: {
    "Protein Content": "28-32%",
    "Oil Content": "8-10%",
    "Moisture": "10% Max",
    "Fiber": "12-14%",
    "Packaging": "Bulk, Bags",
    "Origin": "India"
  },
  benefits: [
    "Provides good protein for muscle development in animals.",
    "Higher fiber content supports healthy digestion.",
    "Residual oil increases energy content.",
    "Promotes overall livestock health and weight gain."
  ]
},
{
  id: 24,
  name: "Sesame Cake",
  image: "/products/sesame.jfif",
  description: "Sesame cake is the residual product after sesame oil extraction, rich in protein and calcium. It is primarily used as high-energy animal feed and organic fertilizer. Contains essential nutrients promoting animal health.",
  specifications: {
    "Protein Content": "35-40%",
    "Oil Content": "6-8%",
    "Moisture": "10% Max",
    "Fiber": "8-10%",
    "Packaging": "Bulk, Bags",
    "Origin": "India"
  },
  benefits: [
    "Rich protein and calcium content supports bone health in animals.",
    "High energy content due to residual oil enhances productivity.",
    "Used as organic fertilizer improving soil nutrients.",
    "Supports overall animal wellness and growth."
  ]
}
];

export default products;
