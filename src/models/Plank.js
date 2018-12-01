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
		if (qty) {
			return { 
				type, 
				xp: qty * xp, 
				msg: `(${qty}) x ${type} ${qty > 1 ? 'planks': 'plank'} will give ${qty * xp} xp.`
			}
		} else {
			return {
				msg: 'Plank not found.',
				error: true
			}
		}
	},
	calcCost(qty) {
		const { type, cost } = this
		if (qty) {
			return { 
				type, 
				cost: cost * qty, 
				msg: `(${qty}) x ${type} ${qty > 1 ? 'planks': 'plank'} will cost ${qty * cost} gp.`
			}
		} else {
			return {
				msg: 'Plank not found.',
				error: true
			}
		}
	},
	calcBoth(qty) {
		const { type, xp, cost } = this
		if (qty) {
			return { 
				type, 
				cost: cost * qty,
				xp: xp * qty,
				msg: `(${qty}) x ${type} ${qty > 1 ? 'planks': 'plank'} will give ${qty * xp} xp and cost ${qty * cost} gp.`
			}
		} else {
			return {
				msg: 'Plank not found.',
				error: true
			}
		}
	},
	toString: function(log = false) {
		let str = `(${qty}) x ${type} ${qty > 1 ? 'planks': 'plank'} will give ${xp} xp.`
		if (log) {
			return console.log(str)
		} else {
			return str
		}
	}
}

const Plank = mongoose.model('Plank', PlankSchema)

module.exports = Plank