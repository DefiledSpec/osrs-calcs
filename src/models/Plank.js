const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PlankSchema = new Schema({
	type: {
		type: String,
		unique: true,
		required: true,
	},
	cost: {
		type: Number,
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

PlankSchema.methods = {
	calcXp(qty) {
		const { type, xp } = this
		if (qty) return { type, xp: qty * xp, msg: `(${qty}) x ${type} ${qty > 1 ? 'planks': 'plank'} will give ${qty * xp} xp.` }
	},
	toString: function() {
		console.log(`(${qty}) x ${type} ${qty > 1 ? 'planks': 'plank'} will give ${xp} xp.`)
	}
}

const Plank = mongoose.model('Plank', PlankSchema)

module.exports = Plank