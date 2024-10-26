import { int, sqliteTable } from 'drizzle-orm/sqlite-core'

export const batteries = sqliteTable('batteries', {
  id: int('id').primaryKey({ autoIncrement: true }),
})