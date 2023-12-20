
exports.get = (req, res) => {
        const catalogue = [
			{
				num: 1,
				name: "Pomme",
				category: "Fruit",
				price: 1.99
			  },
			  {
				num: 2,
				name: "Banane",
				category: "Fruit",
				price: 2.99
			  },
			  {
				num: 3,
				name: "Lait",
				category: "Produits laitiers",
				price: 3.99
			  },
			  {
				num: 4,
				name: "Patates",
				category: "Légume",
				price: 8.99
			  },
			  {
				num: 5,
				name: "Sushis",
				category: "Produits japonais",
				price: 10.99
			  },
			  {
				num: 6,
				name: "XBox",
				category: "Jeux vidéos",
				price: 399.99
			  },
			  {
				num: 7,
				name: "Farine de blé",
				category: "Farine",
				price: 1.99
			  },
			  {
				num: 8,
				name: "Orange",
				category: "Fruit",
				price: 2.49
			  },
			  {
				num: 9,
				name: "Fromage",
				category: "Produits laitiers",
				price: 4.49
			  },
			  {
				num: 10,
				name: "Carottes",
				category: "Légume",
				price: 2.79
			  },
			  {
				num: 11,
				name: "Poire",
				category: "Fruit",
				price: 1.89
			  },
			  {
				num: 12,
				name: "Yaourt",
				category: "Produits laitiers",
				price: 2.29
			  },
			  {
				num: 13,
				name: "Brocoli",
				category: "Légume",
				price: 2.99
			  },
			  {
				num: 14,
				name: "Sardines en conserve",
				category: "Poisson",
				price: 3.49
			  },
			  {
				num: 15,
				name: "Casque de jeu",
				category: "Accessoires de jeux",
				price: 49.99
			  },
			  {
				num: 16,
				name: "Sucre en poudre",
				category: "Sucre",
				price: 2.19
			  },
			  {
				num: 17,
				name: "Poivron rouge",
				category: "Légume",
				price: 1.99
			  },
			  {
				num: 18,
				name: "Clavier mécanique",
				category: "Accessoires informatiques",
				price: 69.99
			  },
			  {
				num: 19,
				name: "Café moulu",
				category: "Café",
				price: 7.99
			  },
			  {
				num: 20,
				name: "Tapis de souris",
				category: "Accessoires informatiques",
				price: 5.99
			  }
			];
		
	
	res.setHeader('Content-Type', 'application/json');
      
    const searchTerm = req.query.searchTerm;

	if (searchTerm) {
		
		const filteredCatalogue = catalogue.filter(
		(product) =>
			product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			product.category.toLowerCase().includes(searchTerm.toLowerCase())
		);

		res.send(filteredCatalogue);
	} else {
		res.send(catalogue);
	}
	res.send(catalogue);
};


