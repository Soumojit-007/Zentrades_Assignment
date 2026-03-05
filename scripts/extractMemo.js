import fs from "fs-extra"
import { v4 as uuid } from "uuid"

const transcript = await fs.readFile(
  "transcripts/audio1975518882.txt",
  "utf8"
)

const accountId = uuid()

const memo = {

  account_id: accountId,

  company_name: "Ben's Electric Solutions Team",

  business_hours: {
    days: "Monday-Friday",
    start: "08:00",
    end: "16:30",
    timezone: "local"
  },

  office_address: "",

  services_supported: [
    "electrical service calls",
    "small electrical jobs",
    "quotes for electrical work"
  ],

  emergency_definition: [
    "gas station electrical issue"
  ],

  emergency_routing_rules: [
    {
      client: "GNM Pressure Washing",
      action: "transfer to Ben"
    }
  ],

  non_emergency_routing_rules: [
    "collect customer name",
    "collect phone number",
    "collect job details",
    "notify Ben"
  ],

  call_transfer_rules: {
    timeout: "30 seconds",
    retries: 2
  },

  integration_constraints: [],

  after_hours_flow_summary:
    "Only emergency calls from GNM Pressure Washing should be transferred to Ben. All other callers should be informed that the business will respond the next business day.",

  office_hours_flow_summary:
    "Collect customer name, phone number, job details and notify Ben via SMS and email.",

  questions_or_unknowns: [
    "office address missing",
    "full list of services unknown"
  ],

  notes: transcript.substring(0, 500)

}

await fs.ensureDir(`outputs/accounts/${accountId}/v1`)

await fs.writeJSON(
  `outputs/accounts/${accountId}/v1/memo.json`,
  memo,
  { spaces: 2 }
)

console.log("Memo created for account:", accountId)