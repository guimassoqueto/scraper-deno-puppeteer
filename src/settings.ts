import { load } from "https://deno.land/std@0.192.0/dotenv/mod.ts"

const env = await load()

export const TEST = env['TEST']
