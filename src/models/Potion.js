const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PotionSchema = new Schema({
	type: {
		type: String,
		unique: true,
		required: true,
	},
	xp: {
		type: Number,
		required: true,
	},
	createdTime: {
		type: Date,
		default: Date.now()
	},
})

PotionSchema.methods = {
	calcXp(qty) {
		let { type, xp } = this
		if (qty) return { type, xp: qty * xp, msg: `(${qty}) x ${type} ${qty > 1 ? 'potions': 'potion'} will give ${xp} xp` }
	},
	toString: function() {
		console.log(`(${qty}) x ${type} ${qty > 1 ? 'planks': 'plank'} will give ${xp} xp.`)
	}
}

const Potion = mongoose.model('Potion', PotionSchema)

module.exports = Potion