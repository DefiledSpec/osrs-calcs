const mongoose = require('mongoose')
const Schema = mongoose.Schema

const HerbSchema = new Schema({
	type: {
		type: String,
		unique: true,
		required: true,
	},
	xp: {
		type: Number,
		required: true,
	},
	potion: {
		type: Schema.Types.ObjectId,
		ref: 'Potion'
	},
	createdTime: {
		type: Date,
		default: Date.now()
	},
})

HerbSchema.methods = {
	calcXp(qty) {
		if (qty) return qty * this.xp
	}
}

const Herb = mongoose.model('Herb', HerbSchema)

module.exports = Herb