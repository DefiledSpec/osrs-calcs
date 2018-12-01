const path = require('path')
const mongoose = require('mongoose')
const { Herb, Plank, Potion } = require('./models')
const pc = require('./controllers/plankController')
const seeds = require('./db/seeds')

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/rscalcs"

// const log = console.log

mongoose.Promise = Promise
let dbCon = false
async function connectDB() {
	await mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, (err) => {
		if(!err) {
			log('Connected\n')
			dbCon = true
			start() 
		}
	})
}
connectDB()

// seeds.initPotions()

let log = res => console.log('\n', res)

async function start() {
	// log(await pc.calcXp('oak', 50))
	// log(await pc.calcXp('Teak', 50, true))
	// log(await pc.calcCost('Oak', 50))
	// log(await pc.calcCost('Teak', 50, true))
	log(await pc.calcBoth('Oak', 10, true))


	exit()
}

function exit() {
	log('exiting')
	setTimeout(() => {
		process.exit()
	}, 5000)
}
// Potion.findOne({type: 'anti'}).then(res => console.log(res.calcXp(10))).catch(log)
// Plank.findOne({type: 'oak'}).then(res => res ? console.log(res.calcXp(10)): 'Record Not Found!').catch(log)
// Plank.findOne({type: 'Oak'}).then(res => console.log(res.calcXp(10))).catch(log)

// Herb.find().then(res => console.log(res.map(h => h.type + " " + h.xp).join('\n')))


// getPlanks()

module.exports = {
	log
}