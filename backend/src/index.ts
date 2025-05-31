import { serve } from '@hono/node-server'
import { Hono } from 'hono'

import {findEnv} from 'load-dotenv'
import * as dotenv from 'dotenv'

const envFilePath = findEnv()
dotenv.config({path: envFilePath})
console.log('DATABASE_URL:', process.env.DATABASE_URL)

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
