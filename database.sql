--database name: pizza_parlor
CREATE TABLE "pizza" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(100) NOT NULL,
	"description" VARCHAR(1000) NOT NULL,
	"price" NUMERIC (20, 2) NOT NULL,
	"image_path" VARCHAR(1000) NOT NULL
);

INSERT INTO "pizza" ("name", "description", "price", "image_path")
VALUES ('Tomato Soup','If you like pizza, but you hate the toppings, the cheese, and the crust, you''ll love this!',12.99,'https://images.squarespace-cdn.com/content/v1/5935b2f3f5e2316645be02b8/1581485726380-PBBBFECKIYLPTDCH4MWU/ke17ZwdGBToddI8pDm48kMZ2gStKYWwn5nQe5vQINSdZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVGRvlgmSquDEwie6JTo1Nl_VFqod8xpCVSwVjMMhYlKxltO8nJtk629tZGIWiyY3XQ/Tomato+Basil+Soup.png'),
('Onomatopizza','We start with a WHOMP of dough, SPLAT some marinara on it, PLOP enough cheese on there to make a mouse PEEP. Top it off with some SIZZLING bacon, and BOOM there it is! We guarantee you''ll SMACK your lips.',14.99,'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRt_SCGUc3XLMfeSVkO3p05E3Ndd8THTdOyMJOQzG4ehwM3pt4i&usqp=CAU'),
('Pepperoni','Classic pizza with cheese and pepperoni. Baked with a traditional crust in our brick oven.',14.99,'https://photos.bigoven.com/recipe/hero/awesome-pepperoni-pizza-7f8696.jpg?h=500&w=500'),
('Over the Rainbow','Taste the rainbow! One ingredient of each color: pepperoni, doritos, pineapple, olives, cheese, peppers and onion. Complimentary water served in a spray bottle to taste an actual rainbow.',19.99,'https://i.pinimg.com/originals/61/03/f8/6103f83124530ee52cff2a33b47b0cbf.jpg'),
('Chinese Firedragon','Pepperoni, pineapple and banana peppers.',15.99,'https://i.pinimg.com/originals/ce/62/24/ce6224972775e3fae7e0a5ae6d95416e.jpg'),
('Bad Date','Garlic, Onion, Black Olives and Pepperoni.',24.99,'https://i.pinimg.com/originals/ed/1b/23/ed1b236ae93eca39513194e12c6baf35.jpg'),
('Another Little Pizza My Heart', 'Cheese Pizza. Personal size only.', 5.99,'https://d2ftwog2ykfqwt.cloudfront.net/mellow_mushroom_4.20_pizza.jpg');

CREATE TABLE "orders" (
	"id" SERIAL PRIMARY KEY,
	"customer_name" VARCHAR (1000) NOT NULL,
	"street_address" VARCHAR(1000) NOT NULL,
	"city" VARCHAR(1000) NOT NULL,
	"zip" VARCHAR(20) NOT NULL,
	"type" VARCHAR(100) NOT NULL,
	"total" NUMERIC (20, 2) NOT NULL,
	"time" TIMESTAMP DEFAULT NOW() NOT NULL
);

CREATE TABLE "line_item" (
	"id" SERIAL PRIMARY KEY,
	"order_id" INT REFERENCES "orders" ON DELETE CASCADE,
	"pizza_id" INT REFERENCES "pizza",
	"quantity" INT NOT NULL
);
