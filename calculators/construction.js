class Plank {
	constructor(type, cost = 0, xp = 0, qty = 0) {
		this.type = type
		this.cost = cost
		this.xp = xp
		this.qty = qty
		this.totalCost = (cost * qty)
		this.totalXP = (xp * qty)
	}
}

let mahoganyPlank = new Plank('Mahogany', 1500, 140, 8307)
let teakPlank = new Plank('Teak', 1500, 140, 1377)

// let mahoganyLogs = 8307
// let teakLogs = 1377

class ConCalc {
	constructor(...Planks) {
		this.planks = Planks
	}
	cost(logs) {
		let costs = []
		if(!logs) {
			for (const plank of this.planks) {
				const { type, totalCost } = plank
				costs.push({ type, totalCost})
			}
			costs.forEach(({ type, totalCost }) => console.log('Cost: ', `Total cost for ${ type } planks is ${ totalCost.toLocaleString() } gp.`))
		} else {
			let query = this.planks.filter(({ type }) => type === logs)
			const { type, totalCost } = query[0]
			console.log('Cost: ', `Total cost for ${ type } planks is ${ totalCost.toLocaleString() } gp.`)
		}
		console.log('------------------')
	}
	xp(logs) {
		let xps = []
		if(!logs) {
			for (const plank of this.planks) {
				const { type, totalXP } = plank
				xps.push({ type, totalXP })
			}
			xps.forEach(({ type, totalXP }) => console.log('XP: ', `Total xp for ${type} planks is ${totalXP.toLocaleString()} xp.`))
		} else {
			let query = this.planks.filter(({ type }) => type === logs)
			const { type, totalXP } = query[0]
			console.log('XP: ', `Total xp for ${ type } planks is ${ totalXP.toLocaleString() } xp.`)
		}	
		console.log('------------------')
	}
	toString(logs) {
		if(!logs) {
			this.planks.forEach(({ type, totalXP, totalCost }) => console.log('Complete Info: ', `${ type } logs will yield ${ totalXP.toLocaleString() } xp, for a total cost of ${ totalCost.toLocaleString() } gp.`))
		} else {
			let query = this.planks.filter(({ type, totalXP, totalCost }) => console.log('Complete Info: ', `${ type } logs will yield ${ totalXP.toLocaleString() } xp, for a total cost of ${ totalCost.toLocaleString() } gp.`))
		}
		console.log('------------------')
	}
}

// new ConCalc(mahoganyPlank, teakPlank)
// new ConCalc(mahoganyPlank, teakPlank).cost()
// new ConCalc(mahoganyPlank, teakPlank).cost('Teak')
// new ConCalc(mahoganyPlank, teakPlank).cost('Mahogany')
// new ConCalc(mahoganyPlank, teakPlank).xp()
// new ConCalc(mahoganyPlank, teakPlank).xp('Teak')
// new ConCalc(mahoganyPlank, teakPlank).xp('Mahogany')
new ConCalc(mahoganyPlank, teakPlank).toString()
// new ConCalc(mahoganyPlank, teakPlank).toString('Teak')
// new ConCalc(mahoganyPlank, teakPlank).toString('Mahogany')


// For use with lunar plank make spell
// let mahoganyPlankMake = new Plank(1500, 140)
// let teakPlankMake = new Plank(1500, 140)