import fs from "fs-extra"

const accountId = process.argv[2]

if (!accountId) {
  console.log("Provide account id")
  process.exit()
}

const v1 = await fs.readJSON(
  `outputs/accounts/${accountId}/v1/memo.json`
)

/* Example onboarding updates */
const updates = {

 business_hours: {
   days: "Monday-Friday",
   start: "08:30",
   end: "17:00",
   timezone: "local"
 },

 services_supported: [
   "electrical service calls",
   "quotes",
   "small electrical jobs",
   "commercial electrical support"
 ]

}

const v2 = {
 ...v1,
 ...updates
}

await fs.ensureDir(
 `outputs/accounts/${accountId}/v2`
)

await fs.writeJSON(
 `outputs/accounts/${accountId}/v2/memo.json`,
 v2,
 { spaces: 2 }
)

console.log("v2 memo created")