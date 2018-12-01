const db = require('../models')
const Plank = require('../models/Plank')
const log = require('../cli').log


const plankController = {
    async add(plankObj) {
        const plank = new Plank(plankObj)
    	return await db.Plank.create(plank)      
    },
    async getAll() {
        const planks = await db.Plank.find()
        return planks
    },
    async getOneById(id) {
        const plank = await db.Plank.findById(id)
        return plank
	},
    async getOneByType(type) {
        const plank = await db.Plank.findOne({type})
        return plank
	},
    async updateCost(type, cost) {
        const plank = await db.Plank.findOneAndUpdate({type}, {$set: cost})
        return plank
    },
    async delete(type) {
        let deleted = await db.User.deleteOne({type})
        return deleted
	},
	async calcXp(type, qty, msg = false) {
		let result = {
			xp: 0,
			msg: 'Record Not Found!',
			err: false
		}
		let plank = await Plank.findOne({type})			
		if(plank) {
			result = plank.calcXp(qty)
		} else {
			result.err = true
		}
		if(msg && !result.err) {
			return result.msg
		} else {
			return result
		}	
	},
	async calcCost(type, qty, msg = false) {
		
	}
}

module.exports = plankController