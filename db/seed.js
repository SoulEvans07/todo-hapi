import mongoose from '../src/config/mongoose'
import * as seeds from './seeds'

const seed_list = Object.values(seeds)
console.log(seed_list)

async function main() {
  for(let i = 0; i < seed_list.length; i++) {
    const seed = seed_list[i]
    // console.log(seed)
    // console.log(Object.getOwnPropertyNames(seed))

    const should = await seed.shouldRun()
    if(should) {
      await seed.run()
    }
  }
}

mongoose.connect()

main().then(() => process.exit())
