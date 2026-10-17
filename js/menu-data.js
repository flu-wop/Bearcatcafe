/* Uptown menu data — from live bearcatcafe.com Uptown menu. item: [name, price, description, flags] (v vegan, vg vegetarian, gf gluten free, gfa gluten free available) */
const MENU = {
  breakfast: { label: 'Breakfast', sections: [
    { name: 'Start', cat: null, items: [
      ['Biscuits', 7, '2 Biscuits | Pepper Jelly | Cultured Butter', ['vg']],
      ['Breakfast Potatoes', 12, 'Crisp Potatoes | G.F. Mornay | Egg | Vegan +$3', ['gf','vg']],
      ['Ricotta + Lavash', 8, 'House Made Ricotta | Honey', ['vg']],
      ['House Made Yogurt or Chia Seed Pudding', 13, 'House Granola | Seasonal Fruit | Coconut Nectar', ['vg']],
      ['Smoked Salmon Toast', 17, 'Egg in a Hole | Avocado | Everything Spice | Creme Fraiche', []],
      ['Short Stack', 8, 'Pancakes | Cultured Butter | Syrup | Sub Paleo +$2 | Sub Vegan +$2 | Sub Blueberry +$2 | Sub Berries and Cream +$5', ['vg']],
      ['Chai Pancakes', 18, 'Chai and Sweet Potatoes | Chai Cream Cheese | Candied Pecans | Chai Syrup', ['vg']],
    ]},
    { name: 'Good Cat', cat: 'good', items: [
      ['Vegan Bearcat', 16.5, 'Tofu Scramble | Crispy Potatoes | Black Bean Sausage | Add Vegan Pancake +$7', ['v','gf']],
      ['Cave Breakfast', 31, 'Paleo Pancake | Pork Chop | Romesco | Cauliflower Grits', ['gf']],
      ['Mushroom Soft Scramble', 22, 'Mushroom Medley | Borsin | Sub Egg Whites +$3 | Tofu Scramble +$3 (V)', ['gf','vg']],
      ['Vegan Ranchero', 15, 'Black Beans | House Salsa | Ranchero Sauce | Avocado | Cashew Crema | Corn Tortilla | Tofu +$3 | Egg +$2', ['v']],
      ['Vegan Quesadilla', 14, 'Tofu Scramble | Mushrooms | Caramelized Onion | Cashew Queso | Avocado', ['v']],
    ]},
    { name: 'Bad Cat', cat: 'bad', items: [
      ['Bearcat Breakfast', 16.5, '2 Eggs | Crisp Potatoes | Bacon or Bison Sausage | Add Pancakes +$6 | Add Paleo (G.F.) or Vegan Pancake +$7 | Add Blueberry +$7 or Berries and Cream +$9', []],
      ['Crab Scramble', 29, 'La Blue Crab | Soft Eggs | Asparagus | Potatoes', ['gf']],
      ['Shrimp and Grits', 28, 'Gulf Shrimp | Stone Grits | Nola BBQ | Toast | Sub Scallops +$2 | Add Crab Claws +$16', ['gfa']],
      ['Breakfast Club', 16, 'Sourdough | Bacon | Roasted Tomato | 2 Eggs | Avocado | Potatoes | Add Chicken +$7', []],
    ]},
    { name: 'Biscuits', cat: null, items: [
      ['Biscuit Sandwich', 8, 'Egg | Cheese | Bison Sausage or Bacon | Sub Chicken +$4 | Hot Chicken +$5', []],
      ['Cat Daddy Biscuit', 26, 'Chicken | Crawfish Cream Sauce | Sunny Egg | Hot Daddy +$1', []],
      ['Hot Rob', 23, 'Hot Chicken | Creamed Spinach | Sunny Egg | Biscuit', []],
      ['Couyon Daddy', 30, 'Chicken | Creole Crab Dip | Sunny Egg | Hot Couyon Daddy +$1', []],
      ['Vegan Biscuit Sandwich', 11, 'Just Egg | Vegan Cheese | Vegan Sausage | Caramelized Onions', ['v']],
      ['Mushroom Toast', 16, 'Whipped Tofu | Mushroom Medley | Roasted Tomatoes | Artichokes | Sunflower Seeds | Caramelized Onion | Arugula | Sourdough', ['v']],
    ]},
    { name: 'Sides', cat: null, items: [
      ['Grits', 7, '', ['gf','vg']], ['Bison Sausage', 7, '', ['gf']], ['Bacon', 7, '', ['gf']],
      ['Crisp Potatoes', 7, '', ['v','gf']], ['Egg in a Hole', 4.5, '', ['vg']], ['Cauliflower Grits', 8, '', ['gf','vg']],
      ['Black Beans', 7, '', ['v']], ['Fruit (w/ Cream)', 7, '', ['gf','vg']], ['Two Egg in a Hole', 8, '', ['vg']],
    ]},
  ]},
  lunch: { label: 'Lunch', sections: [
    { name: 'Starters', cat: null, items: [
      ['Crab Cake', 25, 'Lump Blue Crab | Fried Corn Ribs | NOLA BBQ Aioli', []],
      ['Buffalo Cauliflower', 12, 'Vegan Buffalo Sauce | Vegan Ranch', ['v','gf']],
      ['Vegan Queso', 12, 'Cashew | Pico de Gallo | Corn Chips', ['v','gf']],
      ['Creole Crab Dip', 22, 'Blue Crab | Corn Chips', []],
      ['Boudin Egg Rolls', 16, 'Sweet Thai Chili | Creole Sauce', []],
    ]},
    { name: 'Vegetables', cat: null, items: [
      ['Broccolini', 13, 'Black Sesame Hummus | Tofu | Sambal Sweet Chili', ['v','gf']],
      ['Vegetable Hash', 14, 'Cauliflower Grits | Lemon Vin Pesto | Cashew Crema | Salbitxada', ['v','gf']],
    ]},
    { name: 'Good Cat', cat: 'good', items: [
      ['Farro Bowl', 15, 'Almonds | Oyster Mushroom | Nori | Fennel | Carrot | Black Beans', ['v']],
      ['Trumpet Scallops', 18, 'Trumpet Mushrooms | Hummus | Cauliflower | Asparagus', ['v','gf']],
      ['Xiong Mao Noodle', 16, 'Purple Sweet Potato Noodle | Tomato | Mushrooms | Artichoke | Preserved Lemon Pesto', ['v','gf']],
      ['Chicken Sumas', 20, 'Sumac Chicken | Hummus | Grilled Vegetables', []],
      ['Seared Scallops', 30, 'Carrots | Broccolini | Sunflower Seeds | Cauliflower Soubise | Tomatoes', ['gfa']],
    ]},
    { name: 'Vegan Sandwiches', cat: null, items: [
      ['Vegan Burger', 16, 'Beyond Patty | Lettuce | Tomato | Vegan Smoked Provolone | Caramelized Onions | Seeded Bun | Potatoes', ['v']],
      ["Buffalo Jerry's Tacos", 15, 'Buffalo Cauliflower | Pico | Cashew Crema | Jalapeños | Avocado', ['v','gf']],
    ]},
    { name: 'Bad Cat', cat: 'bad', items: [
      ['Hot Chicken Sandwich', 16, 'Pimento | Bread & Butter Pickle | Seeded Bun | Potatoes', []],
      ['Shrimp Pasta', 28, 'Almonds | Basil | Tomatoes | Parmesan | Sub Scallops +$4', ['gfa']],
      ['Blackened or Fried Gulf Fish', 30, 'Asparagus | Crab Dip | Crispy Potatoes', ['gf']],
      ['Brisket Burger', 18, 'Butter Lettuce | Tomato | American Cheese | Seeded Bun | Potatoes | Add Bacon +$2 | Sub Chorizo +$2', []],
    ]},
    { name: 'Smalls', cat: null, items: [
      ['Creamed Spinach', 8, 'Cream | Onion | Garlic', ['vg']],
      ['Asparagus', 12, 'Garlic | Salt', ['v','gf']],
    ]},
  ]},
  kids: { label: 'Kids', sections: [
    { name: 'Kids Menu', cat: null, items: [
      ['Grilled Cheese', 7, '', ['vg']], ['Fried Potatoes', 5, '', ['v']], ['Short Stack with Fruit', 8, '', ['vg']],
      ['Xiao Bao Bao Breakfast', 8, 'Cheese Scrambled Eggs | Pancake | Fruit', []],
      ['Buttered Noodles', 6, '', ['vg']], ['Chicken Tenders', 8, '', []],
    ]},
  ]},
};

const DRINKS = {
  coffee: { label: 'Coffee & Tea', sections: [
    { name: 'Coffee', items: [
      ['Espresso',4],['Macchiato',5],['Cortado',5],['Cappuccino',6],['Latte',6],['Americano',4],['Cold Brew',6],['Drip',5.5],['French Press',11],['Café Au Lait',5],['Mocha',6.5],['Lavender Honey Latte',6.5],['Rose Water Latte',6.5],['Golden Latte',6.5,'Turmeric | Ginger | Honey | Espresso'],['Decaf Espresso',3.5],
    ]},
    { name: 'Special Things', items: [
      ['Chai Latte',6],['Matcha Latte',6],['Butterfly Matcha Latte',6,'Caffeine free'],['Hot Chocolate',5,'Caffeine free'],['London Fog',5],['Almond Joy Cortado',5.5,'Coconut Milk | Chocolate'],['Iced Strawberry Matcha',7],['Iced Coconut Mango Matcha',8.5],
    ]},
    { name: 'Loose Tea', items: [
      ['Early Grey',4],['Keemun Mao Feng',4],['Lapsang Souchong',4],['Milk Oolong',6],['Gunpowder Green',4],['White Peony',4],['Hibiscus',4,'Caffeine free'],['Blue Eyes',4,'Caffeine free'],['Calming Chamomile',4,'Caffeine free'],['Visceral Mint',4,'Caffeine free'],['Bella Coola',4,'Caffeine free'],['Saigon Cinnamon',4,'Caffeine free'],['Earl Grey',4],['Peach Ice Cream',4],
    ]},
    { name: 'Milks + Syrups', items: [
      ['Almond Milk',1.25],['Coconut Milk',1.5],['Soy Milk',1.25],['Oat Milk',1.25],['Vanilla',0.6],['Chocolate',0.6],['Lavender Honey',0.6],['Rose Water',0.6],
    ]},
  ]},
  bottled: { label: 'Bottled + Cold', sections: [
    { name: 'Bottled', items: [
      ['Fuji Apple Oolong',7],['Butterfly Matcha Lemonade',7,'Caffeine free'],['Charcoal Lemonade',7,'Caffeine free'],['Strawberry Lemonade',7,'Caffeine free'],['Ginger Lemonade',7,'Caffeine free'],['Mango Lemonade',7,'Caffeine free'],['Vanilla + Cream Cold Brew',8],['Chai + Milk',8],['Chai + Almond Milk',9],['Blueberry Lemonade',7],['Pineapple Lemonade',7],['Blackberry Blue Eyes',7,'Caffeine free'],['Double Peach Tea',7],
    ]},
    { name: 'Cold Drinks', items: [
      ['Sparkling Water',4.5],['Mexican Coca-Cola',4],['Diet Coke',3],['Milk',4],['Apple Juice',4],['Iced Tea',3.5],['Sprite',4],['Fresh Squeezed Juice',8],['Still Water',4],['Barqs Root Beer',4],
    ]},
  ]},
  beer: { label: 'Beer', sections: [
    { name: 'Cans / Bottles', items: [
      ['Miller High Life',4,'Pony'],['Dos Equis',4,'Pony'],['Heineken',4,'Pony'],['Bells Two Hearted Ale',6],
    ]},
    { name: 'Shot & Beer Special', items: [['Pony & 4 Roses Bourbon',10]]},
  ]},
  cocktails: { label: 'Wine & Cocktails', sections: [
    { name: 'House Cocktails', items: [
      ['Bramble',12,'Gin | Lemon | Blackberry'],['Moscow Meow',12,'Vodka | Ginger Simple | Lime | Sparkling Water'],['Razzle Dazzle',12,'Tequila | Mango | Lemon | Sparkling Water'],['Cattabunga',12,'Rum | Pear Liquor | Pineapple Syrup | Lime'],['Spritz',12,'Blood Orange | Sparkling Wine'],['Milk Punch',12,'Rum | Banana | Amaretto | Oat Milk | Cinnamon | Add Espresso +$2'],['Espresso Martini',14,'Vodka | Espresso | Vanilla | Coffee Liquor'],['Irish Coffee',12,'Irish Whiskey | Heavy Cream | Coffee | Iced available'],['Bluebird',12,'Mezcal | Blueberry Hibiscus | Tajin'],['Bloody Mary',12,'Bolden Vodka | Sambal | Vegan Worcestershire'],
    ]},
    { name: 'Bottled Cocktails for 2', items: [['Barrel Aged Old Fashioned',16,'Bourbon | Demerara | Bitters | Orange']]},
    { name: 'Wine + Sparkling', items: [
      ['Sparkling Wine',7],['Kir Royal',12,'Sparkling Wine | Berries'],['French 75',12,'Sparkling Wine | Gin | Lemon'],['Mimosa',8,'Fresh Squeezed OJ | Sparkling Wine | Juice alternatives +$1 | Liquor floater +$5'],
    ]},
  ]},
};

const FLAG_LABEL = { v:'V', vg:'Veg', gf:'GF', gfa:'GFA' };
const GALLERY = [
  ['crawfish-biscuit','Biscuit with fried chicken, crawfish cream sauce and a sunny egg'],['croissants','Fresh croissants on a teal plate'],['crab-scramble','Crab scramble with asparagus and potatoes'],['matcha-duo','Matcha and butterfly pea lattes'],
  ['bearcat-breakfast','Bearcat Breakfast with pancake, bacon and egg'],['cocktail','Red cocktail with a black straw'],['shrimp-grits','Shrimp and grits'],['vegan-burger','Vegan burger with potatoes'],
  ['latte-pour','Latte art being poured'],['egg-biscuit','Biscuit sandwich with fried egg'],['bread','Fresh-baked bread'],['brisket-burger','Brisket burger with potatoes'],
  ['asparagus','Asparagus and tomatoes over grits'],['salmon-toast','Smoked salmon toast'],['queso','Vegan queso with corn chips'],['pork-chop','Pork chop with romesco'],
  ['ranchero','Vegan ranchero with avocado'],['egg-rolls','Boudin egg rolls'],['chocolate-croissant','Chocolate peanut croissant'],['pork-belly','Pork belly over arugula'],
];
const REVIEWS = [
  ['Morgan N.','Sooo so sooo yummy!!! The menu had such a large range of options, I had a hard time picking. Landed on the breakfast club and it didn\'t disappoint. My favorite was the honey lavender latte iced, it was perfect.'],
  ['Bobby H.','I definitely underestimated this place! I had the Lobster Daddy and it was the best breakfast I had in NOLA. The biscuit was amazing, dish seasoned EXTREMELY well.'],
  ['Jameka J.','I ordered the shrimp and grits and when I tell you the grits was thick and creamy. My cousin ordered the bearcat breakfast and the pancakes just melt in your mouth.'],
  ['Ashley J.','Great food and drinks! Had the regular pancakes and they were so delicious! Also had the Craw Daddy special, and my friend had the scallop and grits and everything was so great!'],
  ['M D.','Food and drinks are ALWAYS amazing! The wait for a seat is crazy worth it! Get there early! The smokey hot tea was so delicious, I had to get one to go!'],
];
