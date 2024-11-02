import { db } from '../../utils/db'
import { defineEventHandler } from '#imports'

import { cities as _cities } from '~/server/database/schema'

export default defineEventHandler(async () => {
  const cities = await db.select().from(_cities).all()

  return { cities }
})

