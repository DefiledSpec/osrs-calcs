# Construction

```async function getPlanks() {
	let plankList = await planks.getAll()
	console.log('\n---------------------\n')
	for (const plank of plankList) {
		plank.toString()
	}
	console.log('\nOutput finished.')
}
async function getHerbs() {
	let herbList = await Herb.find()
	console.log('\n---------------------\n')
	for (const plank of herbList) {
		// plank.toString()
		console.log(plank)
	}
	console.log('\nOutput finished.')
}```