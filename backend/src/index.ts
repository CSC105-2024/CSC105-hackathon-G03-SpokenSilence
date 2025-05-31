import {serve} from '@hono/node-server'
import {Hono} from 'hono'
import {PrismaClient} from '../generated/prisma/index.js'
import {HTTPException} from "hono/http-exception";
import {cors} from 'hono/cors'
import type {ErrorResponse} from "./types/index.js";
import {api} from './routes/index.js'

export const prisma = new PrismaClient()

const app = new Hono()
app.route('', api)
    

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}))


app.onError((err, c) => {
  if (err instanceof  HTTPException) {
    return err.res ??
        c.json<ErrorResponse>(
            {
              success: false,
              error: err.message,
              isFormError:
                  err.cause && typeof err.cause === "object" && "form" in err.cause
                      ? err.cause.form === true
                      : false,
            },
            err.status,
        );
  }

  return c.json<ErrorResponse>({
    success: false,
    error:
        process.env.NODE_ENV === "production"
            ? "Internal Server Error"
            : (err.stack ?? err.message),
  })
})

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
