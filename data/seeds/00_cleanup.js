exports.seed = async function(knex) {
  await knex("vehicles").truncate()
}