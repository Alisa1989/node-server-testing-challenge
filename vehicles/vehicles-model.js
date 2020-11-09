const db = require("../data/config")

function find() {
	return db("vehicles")
}

function findById(id) {
	return db("vehicles").where({ id }).first()
}

async function create(data) {
	const [id] = await db("vehicles").insert(data)
	return findById(id)
}

async function update(id, data) {
	await db("vehicles").where({ id }).update(data)
	return findById(id)
}

function remove(id) {
	return db("vehicles").where({ id }).del()
}

module.exports = {
	find,
	findById,
	create,
	update,
	remove,
}
