
const MenuData = {
	classics: {
		title: "Comidas Tipicas (The Classics)",
		items: [
			{
				title: "Tacos",
				desc: "Fresh made corn tortillas filled with choice of meat, cilantro and onions",
				img: "tacos.jpg",
				prices: [ "1 @ $2.50", "3 @ $7" ]
			},
			{
				title: "Chalupas",
				desc: "Crisp corn tortillas topped with choice of meat, choice of salsa, onions, sour cream, queso fresco and cilantro",
				img: "missing.jpg",
				prices: [ "1 @ $2.50", "3 @ $7" ]
			},
			{
				title: "Taco Placero",
				desc: "A fresh made corn tortilla filled with Mexican rice, fried potatoes, grilled onions and jalepenos",
				img: "taco-placero.jpg",
				prices: [ "With meat or egg - $7.45", "With chile relleno - $9.95" ]
			},
			{
				title: "Quesadilla Azteca",
				desc: "Choice of meat, quesillo, lettuce, tomatoes, onions, sour cream, queso fresco and avocado stuffed in a fresh made corn tortilla",
				img: "missing.jpg",
				prices: [ "$8.45", "Add egg +$1.50" ]
			},
			{
				title: "Flautas",
				desc: "Four rolled up corn tortillas, fried, and topped with sour cream, lettuce, tomatoes, onions, queso fresco and avocado",
				img: "missing.jpg",
				prices: [ "$7.95" ]
			},
			{
				title: "Gorditas",
				desc: "Two stuffed corn dough mixed with carnitas and filled with choice of meat, lettuce, sour cream and queso fresco",
				img: "missing.jpg",
				prices: [ "$7.95" ]
			},
			{
				title: "Tlayuda",
				desc: "A large, thin and toasted corn tortilla topped with black beans, quesillo, choice of meat, lettuce, tomatoes, onions, jalepenos and avocado",
				img: "missing.jpg",
				prices: [ "$11.95" ]
			},
			{
				title: "Huaraches",
				desc: "Two oval shaped corn masa topped with choice of meat, black beans, onions, sour cream, queso fresco and cilantro",
				img: "huaraches.jpg",
				prices: [ "$7.95" ]
			},
			{
				title: "Torta",
				desc: "Mexican sandwich filled with beans, quesillo, lettuce, tomatoes, onions, jalepenos, avocado and mayo",
				img: "missing.jpg",
				prices: [ "$6.95", "Add french fries +$2" ]
			},
			{
				title: "Pambazo",
				desc: "A torta bread dipped in a red guajillo pepper sauce and filled with potatoes and chorizo, lettuce, sour cream and queso fresco",
				img: "missing.jpg",
				prices: [ "$6", "Add french fries +$2" ]
			},
			{
				title: "Quesadilla de Harina",
				desc: "Cheese and choice of meat stuffed in a flour tortilla with a side of lettuce, tomatoes, onions, sour cream, queso fresco and avocado",
				img: "missing.jpg",
				prices: [ "$7.45" ]
			},
			{
				title: "Burrito",
				desc: "Choice of meat, mexican rice, black beans, lettuce, tomatoes, onions, sour cream, queso fresco and avocado",
				img: "missing.jpg",
				prices: [ "$7.95" ]
			},
			{
				title: "Chimichanga",
				desc: "Fried burrito filled with choice of meat, mexican rice, black beans, lettuce, tomatoes, onions, sour cream, queso fresco and avocado",
				img: "missing.jpg",
				prices: [ "$8.45" ]
			},
			{
				title: "Pollo Frito",
				desc: "Fried chicken served with french fries and a salad",
				img: "missing.jpg",
				prices: [ "$9.95" ]
			},
			{
				title: "Taco Salad",
				desc: "Mexican rice, black beans, lettuce, tomatoes, onions, corn, red peppers, cucumbers, chick peas, radishes, mixed in a flour tortilla and topped with choice of meat, sour cream, queso fresco and avocado",
				img: "taco-salad.jpg",
				prices: [ "$8" ]
			},
			{
				title: "Perros Calientes",
				desc: "Mexican styled hot dogs served with mayo, bacon, tomatoes, onions and cilantro",
				img: "perros-calientes.jpg",
				prices: [ "$6" ]
			},
			{
				title: "Tacos do Maiz",
				desc: "Four corn taco shells filled with choice of meat, lettuce, tomatoes, onions, sour cream, queso fresco and avocado",
				img: "missing.jpg",
				prices: [ "$7.95" ]
			},
			{
				title: "Fajita",
				desc: "Mixed peppers and onions topped with quesillo and served with pico de gallo, sour cream and guacamole",
				img: "missing.jpg",
				prices: [ "With grilled chicken or steak - $14", "With grilled chicken and steak - $16", "With shrimp - $16", "With all three - $20" ]
			}
		]
	},
	seafood: {
		title: "Del Mar (From the Ocean)",
		items: [
			{
				title: "Coctel de Camaron",
				desc: "Mexican style shrimp cocktail mixed with tomatoes, onions and cilantro",
				img: "coctel-de-camaron.jpg",
				prices: [ "$12" ]
			},
			{
				title: "Ceviche Peruano",
				desc: "Mixture of fish, squid, and shrimp marinated in freshly squeezed lime juice, red onions, cilantro, salt and pepper",
				img: "ceviche-peruano.jpg",
				prices: [ "$16.95" ]
			},
			{
				title: "Jalea",
				desc: "Fried fish, squid, calamari, and shrimp served with a red onion salad on top",
				img: "jalea.jpg",
				prices: [ "$16.95" ]
			},
			{
				title: "Arroz con Mariscos",
				desc: "Seafood rice mixed with mussels, clams, shrimp, calamari, squid and a crab leg",
				img: "arroz-con-mariscos.jpg",
				prices: [ "$20" ]
			},
			{
				title: "Pescado Entero al Gusto",
				desc: "Whole fish, tilipia or red snapper, fried or steamed",
				img: "missing.jpg",
				prices: [ "$MP" ]
			}
		]
	},
	soups_salads: {
		title: "Sopas y Ensaladas (Soups and Salads)",
		items: [
			{
				title: "Caldo Tlapeno",
				desc: "Mexican style chicken soup with mixed rice and vegetables",
				img: "missing.jpg",
				prices: [ "Small - $5", "Large - $8" ]
			},
			{
				title: "Sopa de Tortilla",
				desc: "Tortilla soup topped with sour cream, quesillo and avocado",
				img: "missing.jpg",
				prices: [ "Small - $5", "Large - $8" ]
			},
			{
				title: "Ensalada Catrina",
				desc: "Watercress, lettuce, tomatoes, radishes, black beans and corn mixed in a lime and salt dressing and topped with crumbled tortilla chips and queso fresco",
				img: "missing.jpg",
				prices: [ "$8", "Add grilled chicken or steak +$2" ]
			},
			{
				title: "Ensalada Verde",
				desc: "Lettuce, tomatoes, onions, radishes, green peppers, cucumbers and green apples mixed in a virgin olive oil and salt dressing and topped with avocado slices",
				img: "missing.jpg",
				prices: [ "$8", "Add grilled chicken or steak +$2" ]
			},
			{
				title: "Ensalada de Nopales",
				desc: "Prickly pear, tomatoes, onions and cilantro mixed in a lime and salt dressing and topped with avocados",
				img: "ensalada-de-nopales.jpg",
				prices: [ "$8", "Add grilled chicken or steak +$2" ]
			}
		]
	},
	platters: {
		title: "Platillos (Platters)",
		items: [
			{
				title: "La Catrina**",
				desc: "Platter of grilled steak, shrimp, one tamal and a sope",
				img: "missing.jpg",
				prices: [ "$17" ]
			},
			{
				title: "Chicharron de Puerco",
				desc: "Fried pork belly served with pico de gallo",
				img: "missing.jpg",
				prices: [ "$9.95" ]
			},
			{
				title: "Carne Asada**",
				desc: "Thin flank steak",
				img: "missing.jpg",
				prices: [ "$11.95" ]
			},
			{
				title: "Mole Oaxaqueno",
				desc: "Chicken leg and thigh covered in our house mole sauce",
				img: "missing.jpg",
				prices: [ "$9.95" ]
			},
			{
				title: "Chuletas ala Parrilla**",
				desc: "Grilled pork chops",
				img: "missing.jpg",
				prices: [ "$17.50" ]
			},
			{
				title: "Enchiladas",
				desc: "Three rolled up tortillas covered in choice of verde or mole sauce and topped with onions, sour cream, queso fresco and cilantro",
				img: "enchiladas.jpg",
				prices: [ "$9" ]
			},
			{
				title: "Molcajete (Serves 3)",
				desc: "A combo of grilled steak, chicken, carne enchilada, chorizo, chicharron and shrimp in our salsa ranchera, topped with grilled onions, jalepenos, prickly pear and queso fresco",
				img: "molcajete.jpg",
				prices: [ "$30" ]
			},
			{
				title: "Churrasco**",
				desc: "Marinated chuck steak",
				img: "missing.jpg",
				prices: [ "$17.50" ]
			},
			{
				title: "Chile Relleno",
				desc: "A roasted poblano pepper stuffed with queso fresco, battered in egg, lightly fried and served in a tomato and potato stew",
				img: "missing.jpg",
				prices: [ "$9.95" ]
			},
			{
				title: "Carne Enchilada",
				desc: "Pork marinated in spices and chillies",
				img: "missing.jpg",
				prices: [ "$11.95" ]
			},
			{
				title: "Cecina Rachera",
				desc: "Thin cured steak topped with grilled onions and jalepenos, prickly pear and queso fresco",
				img: "missing.jpg",
				prices: [ "$13.95" ]
			}
		]
	},
	shared_or_not: {
		title: "Si Quieres Compartir (To be shared... or not)",
		items: [
			{
				title: "Empanadas",
				desc: "Stuffed corn dough topped with black beans and queso fresco",
				img: "empanadas.jpg",
				prices: [ "1 @ $2.50", "3 @ $7" ]
			},
			{
				title: "Tostadas",
				desc: "Toasted corn tortillas topped with black beans, choice of meat, lettuce, tomatoes, onions, sour cream, queso fresco and avocado",
				img: "missing.jpg",
				prices: [ "1 @ $2.50", "3 @ $7" ]
			},
			{
				title: "Queso Fundido",
				desc: "Mexican style cheese dip topped with tomatoes, onions and cilantro",
				img: "missing.jpg",
				prices: [ "$5", "Add chorizo +$1" ]
			},
			{
				title: "Botana La Catrina",
				desc: "Includes two tamales, four mini flautas, quesadilla de harina, nachos, and pico de gallo",
				img: "botana-la-catrina.jpg",
				prices: [ "$17.95" ]
			},
			{
				title: "El Botenero (Serves 4)",
				desc: "Includes four sopes, chile relleno, two tamales, queso fundido with chorizo, carne asada, carne enchilada, rice, tortillas, black beans and guacamole",
				img: "el-botenero.jpg",
				prices: [ "$35" ]
			},
			{
				title: "Guacamole",
				desc: "Mixture of avocados, tomatoes, onions, cilantro and lime",
				img: "missing.jpg",
				prices: [ "$4" ]
			},
			{
				title: "Pico de Gallo",
				desc: "Mixture of tomatoes, onions, cilantro and lime, topped with avocados",
				img: "missing.jpg",
				prices: [ "$3.50" ]
			},
			{
				title: "Nachos",
				desc: "Corn tortilla chips topped with choice of meat, black beans, nacho cheese, lettuce, tomatoes, onions, radishes, jalepenos, sour cream, queso fresco and avocado",
				img: "missing.jpg",
				prices: [ "$7.50" ]
			},
			{
				title: "Sopes",
				desc: "Thick corn cakes topped with black beans, choice of meat, lettuce, tomatoes, onions, sour cream, queso fresco and avocado",
				img: "missing.jpg",
				prices: [ "1 @ $2.50", "3 @ $7" ]
			},
			{
				title: "Molotes",
				desc: "Four stuffed corn dough mixed with chorizo and topped with black beans and queso fresco",
				img: "missing.jpg",
				prices: [ "$7" ]
			},
			{
				title: "Tamales",
				desc: "Stuffed corn dough steamed in a corn husk or banana leaf (Mole: Stuffed with chicken and mole sauce, Verde: Stuffed with chicken and verde sauce, Chiliajo: Stuffed with pork and red guajillo pepper sauce, Raja: Stuffed with cheese and roasted poblano pepper in a tomato based sauce)",
				img: "missing.jpg",
				prices: [ "$2" ]
			}
		]
	},
	sides: {
		title: "Ordenes Extras (Sides)",
		items: [
			{
				title: "Arroz Mexicano",
				desc: "Mexican rice",
				img: "missing.jpg",
				prices: [ "$2" ]
			},
			{
				title: "Arroz Blanco",
				desc: "White rice",
				img: "missing.jpg",
				prices: [ "$1.50" ]
			},
			{
				title: "Frijoles Negros",
				desc: "Black beans",
				img: "missing.jpg",
				prices: [ "$1.50" ]
			},
			{
				title: "Elote",
				desc: "Corn slathered in mayo, queso fresco and chile",
				img: "missing.jpg",
				prices: [ "$3" ]
			},
			{
				title: "Aguacate",
				desc: "Avocado",
				img: "missing.jpg",
				prices: [ "$2" ]
			},
			{
				title: "Papas Fritas",
				desc: "French fries",
				img: "missing.jpg",
				prices: [ "$2" ]
			},
			{
				title: "Platanos Fritos",
				desc: "Fried plantains",
				img: "missing.jpg",
				prices: [ "$2" ]
			}
		]
	},
	desserts: {
		title: "Postres (Desserts)",
		items: [
			{
				title: "Churros",
				desc: "Fried dough pastry",
				img: "missing.jpg",
				prices: [ "$3" ]
			},
			{
				title: "Arroz con Leche",
				desc: "Rice pudding",
				img: "missing.jpg",
				prices: [ "$3.50" ]
			},
			{
				title: "Platanos fritos con Lechera",
				desc: "Sweet plantains drizzled with sweetened condensed milk",
				img: "missing.jpg",
				prices: [ "$2.50" ]
			},
			{
				title: "Flan",
				desc: "Mexican style custard",
				img: "missing.jpg",
				prices: [ "$3.50" ]
			},
			{
				title: "Pastel",
				desc: "Cake",
				img: "missing.jpg",
				prices: [ "$3.50" ]
			},
			{
				title: "Gelatina",
				desc: "Jello",
				img: "missing.jpg",
				prices: [ "$2.50" ]
			}
		]
	},
	fresh_waters: {
		title: "Aguas Frescas (Fresh Waters)",
		blurb: "Sm. $2, Lg. $4",
		items: [
			[ "Horchata", "(Sweet cinnamon rice water)" ],
			[ "Tamarindo", "(Sweet and sour tamarind fruit water)" ],
			[ "Jamaica", "(Hibiscus blossoms water)" ],
			[ "Limonada", "(Fresh limeade)" ]
		]
	},
	milkshakes: {
		title: "Licuados (Milkshakes)",
		blurb: "Sm. $4, Lg. $7",
		items: [
			"Strawberry",
			"Banana",
			"Chocolate",
			"Passion Fruit",
			"Mamey",
			"Strawberry or Banana or Chocolate",
			"Banana with Chocolate and Peanut Butter"
		]
	},
	non_alcoholics: {
		title: "Bebidas (Non-alcoholic Beverages)",
		items: [
			"Referescos (Sodas) $2",
			"Pina Colada - Sm. $3, Lg. $6",
			"Chocolate (Mexican Hot Chocolate)"
		]
	},
	juices: {
		title: "Jugo Naturales (Natural Juices)",
		blurb: "Sm. $4, Lg. $7",
		items: [
			[ "Verde", "Green apples, spinach, parsley, cucumber, celery, ginger, lime and honey" ],
			[ "Rojo", "Beets, grapefruit, apples, parsley, ginger, lime and honey" ],
			[ "Vampiro", "Beets, oranges, carrots and celery" ],
			[ "Tropical", "Oranges, mango, strawberry and banana" ],
			[ "La Catrina", "Oranges, oats, prickly pear, apples, pineapple, parsley, ginger, lime and honey" ],
			[ "Antioxidante", "Pineapple, strawberries, blue berries and carrots" ],
			[ "Mexicano", "Prickly pear, pineapple, green apples, kiwi, celery, lime and honey" ],
			[ "Frescura", "Watermelon, coconut water, lime, honey and mint" ],
			[ "Energetico", "Strawberries, mango, kiwi and pineapple" ]
		]
	},
	meats: {
		title: "Carnes (Meats)",
		blurb: "For choice of meat, refer to the following list below. Ask about our vegetarian options.",
		items: [
			[ "Carnes Asada", "(Diced grilled steak)" ],
			[ "Carnitas", "(Mexican style pulled pork)" ],
			[ "Pollo", "(Shredded chicken)" ],
			[ "Tinga de Pollo", "(Shredded chicken cooked in tomatoes, onions and chipotle chile sauce)" ],
			[ "Pechuga", "(Grilled chicken) +$2-$4" ],
			[ "Chorizo", "(Mexican pork sausage )" ],
			[ "Maciza", "(Lean braised pork)" ],
			[ "Campechanos", "(Mix of beef and pork)" ],
			[ "Carne Enchilada", "(Pork marinated with spices and chilies)" ],
			[ "Al Pastor", "(Carne enchilada with pineapples)" ],
			[ "Suadero", "(Beef brisket)" ],
			[ "Cueritos", "(Strips of pig skin)" ],
			[ "Lengua", "(Braised beef tongue) +$2-$4" ],
			[ "Shrimp or fish", "+$2-$4" ]
		]
	}
};

export default MenuData;

