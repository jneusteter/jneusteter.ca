import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const batteries = sqliteTable('batteries', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name'),
  cityId: integer('city_id').references(() => cities.id),
  createdAt: text('created_at').default('CURRENT_TIMESTAMP'),
})

export const countries = sqliteTable('countries', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull().unique(),
  // ISO 3166-1
  // https://www.iso.org/obp/ui/#iso:pub:PUB500001:en
  isoAlpha2: text('iso_alpha_2').notNull().unique(),
  isoAlpha3: text('iso_alpha_3').notNull().unique(),
  isoNumeric: integer('iso_numeric').notNull().unique(),
  createdAt: text('created_at').default('CURRENT_TIMESTAMP'),
})

export const states = sqliteTable('states', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  countryId: integer('country_id').references(() => countries.id),
  createdAt: text('created_at').default('CURRENT_TIMESTAMP'),
})

export const cities = sqliteTable('cities', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  stateId: integer('state_id').references(() => states.id),
  createdAt: text('created_at').default('CURRENT_TIMESTAMP'),
})