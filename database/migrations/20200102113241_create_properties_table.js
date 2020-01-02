
exports.up = function (knex, Promise) {
  return knex.schema.createTable('properties', function (tbl) {
    tbl.increments()

    tbl
      .integer('user_id')
      .notNullable()
      .unsigned()
      .references('user_id')
      .inTable('users')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');

    tbl.string('title', 512)
      .notNullable();

    tbl.string('street_address', 512)
      .notNullable();

    tbl.string('city', 256)
      .notNullable();

    tbl.string('state', 50)
      .notNullable();

    tbl.string('zipcode', 20)
      .notNullable();

    tbl.string('mls_no', 8);

    tbl.string('description', 512)

    tbl.integer('purchase_price')
      .notNullable();

    tbl.integer('estimated_repair_costs')
      .notNullable();

    tbl.integer('after_repair_value')
      .notNullable();

    tbl.integer('closing_costs')
      .notNullable();

    tbl.boolean('use_financing')
      .notNullable();

    tbl.string('loan_type', 128)

    tbl.integer('down_payment', 128)

    tbl.integer('interest_rate',20)

    tbl.integer('loan_term',4)

    tbl.integer('pmi',20)

    tbl.integer('gross_monthly_rent')
      .notNullable();

    tbl.integer('other_monthly_income')
      .notNullable();

    tbl.integer('monthly_fixed_expenses')
      .notNullable();

    tbl.integer('monthly_variable_expenses')
      .notNullable();
    
    tbl.integer('annual_property_value_growth')
      .notNullable();
    
    tbl.integer('annual_income_growth')
      .notNullable();

    tbl.integer('annual_expenses_growth')
      .notNullable();

    tbl.integer('sales_expense')
      .notNullable();

  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropIfTableExists('properties')
};
