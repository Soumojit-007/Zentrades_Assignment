import fs from "fs-extra"
import { diffJson } from "diff"

const accountId = process.argv[2]

const v1 = await fs.readJSON(
 `outputs/accounts/${accountId}/v1/memo.json`
)

const v2 = await fs.readJSON(
 `outputs/accounts/${accountId}/v2/memo.json`
)

const changes = diffJson(v1, v2)

await fs.ensureDir("changelog")

await fs.writeFile(
 `changelog/${accountId}.json`,
 JSON.stringify(changes, null, 2)
)

console.log("Changelog generated")