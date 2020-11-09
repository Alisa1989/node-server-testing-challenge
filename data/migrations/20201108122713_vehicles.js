exports.up = async function(knex) {
	await knex.schema.createTable("vehicles", (table) => {
		table.increments()
		table.text("model").notNullable()
		table.text("make").notNullable()
        table.integer("year").notNullable()
		table.text("description").notNullable()
	})
}

exports.down = async function(knex) {
	await knex.schema.dropTableIfExists("vehicles")
}
