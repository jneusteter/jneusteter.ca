import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const batteries = sqliteTable('batteries', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name'),
})