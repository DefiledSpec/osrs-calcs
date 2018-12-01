/**
 * @author DefiledSpec
 * Class for creating Plank objects.
 * 
 * eg. Plank { type, xp, cost }
 * 
 * @param type <String> Name of the plank
 * @param xp <Number> Xp given for plank
 * @param cost <Number> Cost of the plank
 * 
 */

class NewPlank {
	constructor(type, xp, cost) {
		this.type = type
		this.xp = xp
		this.cost = cost
		this.costPerXp = Math.round(this.cost / this.xp)
	}
	// Displays plank info in human readable format
	toString() {
		console.log(`${this.type} plank costs ${this.cost} and yields ${this.xp} xp. GP/XP ${this.costPerXp}`)
	}
}

module.exports = NewPlank