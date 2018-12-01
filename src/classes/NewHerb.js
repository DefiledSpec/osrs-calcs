/**
 * Class for creating Plank objects.
 * eg. Plank { type, xp, cost }
 * @param type <String> Name of the plank
 * @param xp <Number> Xp given for plank
 * @param cost <Number> Cost of the plank
 */

class NewHerb {
	constructor(type, xp) {
		this.type = type
		this.xp = xp
	}
}

module.exports = NewHerb