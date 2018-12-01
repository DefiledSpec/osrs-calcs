class Herb {
	constructor(type, xp, grimyQty, qty, Potion) {
		this.type = type
		this.xp = xp
		this.grimyQty = grimyQty
		this.qty = qty
		this.Potion = Potion
		this.calcCleanXp()
	}
	calcCleanXp() {
		if(this.grimyQty > 0) {
			this.cleanXP = this.grimyQty * this.xp
			this.qty += this.grimyQty
			this.grimyQty = 0
		} else {
			this.cleanXP = 0
		}
		return this.cleanXP + 10
	}
	calcTotalXp() {
		if(this.Potion) {
			this.totalXP = this.qty * this.Potion.xp
		}
		return this.totalXP
	}
}

class Potion {
	constructor(type, xp) {
		this.type = type
		this.xp = xp
	}
}

let anti = new Potion('Antipoison (3)', 23)


class HerbCalc {
	constructor(...Herbs) {
		this.Herbs = Herbs
		this.calcTotalXp()
	}
	calcTotalXp() {
		let xps = this.Herbs.map(herb => herb.calcTotalXp())
		this.totalXP = xps.reduce((prev, curr) => prev + curr)
		return this.totalXP
	}
	display() {
		let msgs = []
		this.Herbs.forEach(herb => msgs.push(`${herb.qty} ${herb.type}(s) making ${herb.Potion.type} will generate ${herb.totalXP.toLocaleSting()} xp.`))
		for (const msg of msgs) {
			console.log(msg)
		}
	}
}

let guam = new Herb('guam', 10, 234, 2323, anti)
let marentill = new Herb('marentill', 15, 256, 324, anti)

new HerbCalc(guam, marentill).display()

// console.log(superXp)