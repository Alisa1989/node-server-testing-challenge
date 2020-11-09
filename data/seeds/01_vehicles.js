exports.seed = async function(knex) {
	await knex("vehicles").insert([
		{ model: "Prius", make:"Toyota", year: "2008", description: "Cheryl" },
		{ model: "Sentra", make:"Nissan", year: "2007", description: "Eddy" },
	])
}
