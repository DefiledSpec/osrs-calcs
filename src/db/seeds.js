const { Herb, Plank, Potion } = require('../models')
const { NewPlank, NewHerb, NewPotion } = require('../classes')

module.exports = {
		// Initial Plank setup
	initPlanks: async function() { // { type, cost, xp}
		const list = [
			new NewPlank('Plank', 100, 29),
			new NewPlank('Oak', 250, 60),
			new NewPlank('Teak', 500, 90),
			new NewPlank('Mahogany', 1500, 140),
		]
		let res = await Plank.insertMany(list)
		console.log(res)
		process.exit()
	},

	// Initial Herb setup
	initHerbs: async function() { // { type, cost, xp}
		const list = [
			new NewHerb('Guam', 2.5),
			new NewHerb('Marrentill', 3.75),
			new NewHerb('Tarromin', 5),
			new NewHerb('Harralander', 6.25),
			new NewHerb('Ranarr weed', 7.5),
			new NewHerb('Toadflax', 8),
			new NewHerb('Irit leaf', 8.75),
			new NewHerb('Avantoe', 10),
			new NewHerb('Kwuarm', 11.25),
			new NewHerb('Snapdragon', 11.75),
			new NewHerb('Cadantine', 12.5),
			new NewHerb('Lantadyme', 13.125),
			new NewHerb('Dwarf weed', 13.75),
			new NewHerb('Torstol', 15),
		]
		let res = await Herb.insertMany(list)
		console.log(res)
		process.exit()
	},
	initPotions: async function() {
		let res = await Potion.create(new NewPotion('anti', 25))
		console.log(res)
	}
}



