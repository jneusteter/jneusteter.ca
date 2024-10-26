import { db } from '../../utils/db'
import { defineEventHandler } from '#imports'

import { batteries } from '../../database/schema'

export default defineEventHandler(async (event) => {
  const b = await db.select().from(batteries).all()
  return b
})