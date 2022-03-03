
exports.up = function(knex) {
    return knex.schema.createTable("foam", function(projects) {
        projects.increments();
        projects.string("url", 128).notNullable();
        projects.dateTime("lastModified").notNullable();
        projects.boolean("hasFoam").nullable()
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("foam");
};
