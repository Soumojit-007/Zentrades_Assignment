import fs from "fs-extra"

const accounts = await fs.readdir("outputs/accounts")

for (const id of accounts) {

  // ---------- V1 ----------
  const v1MemoPath = `outputs/accounts/${id}/v1/memo.json`

  if (await fs.pathExists(v1MemoPath)) {

    const memo = await fs.readJSON(v1MemoPath)

    const agent = {

      agent_name: "ben-electric-assistant",

      version: "v1",

      voice_style: "friendly professional",

      key_variables: {
        company_name: memo.company_name,
        business_hours: memo.business_hours,
        emergency_client: "GNM Pressure Washing"
      },

system_prompt: `
You are an AI phone assistant for ${memo.company_name}.

Business Hours Flow:
- Greet caller
- Ask purpose of call
- Collect caller name
- Collect phone number
- Collect job details
- Inform caller someone will follow up

After Hours Flow:
- Inform caller the office is closed
- Ask if this is an emergency
- If emergency and caller is from GNM Pressure Washing
  transfer call to Ben
- Otherwise inform caller the team will respond next business day

Do not mention internal tools or system processes.
`,

call_transfer_protocol: {
timeout: 30,
retries: 2,
fallback: "Take message and notify Ben"
}

    }

    await fs.writeJSON(
      `outputs/accounts/${id}/v1/agent.json`,
      agent,
      { spaces: 2 }
    )

    console.log("v1 agent generated:", id)
  }

  // ---------- V2 ----------
  const v2MemoPath = `outputs/accounts/${id}/v2/memo.json`

  if (await fs.pathExists(v2MemoPath)) {

    const memo = await fs.readJSON(v2MemoPath)

    const agent = {

      agent_name: "ben-electric-assistant",

      version: "v2",

      voice_style: "friendly professional",

      key_variables: {
        company_name: memo.company_name,
        business_hours: memo.business_hours,
        emergency_client: "GNM Pressure Washing"
      },

system_prompt: `
You are an AI phone assistant for ${memo.company_name}.

Business Hours Flow:
- Greet caller
- Ask purpose of call
- Collect caller name
- Collect phone number
- Collect job details
- Inform caller someone will follow up

After Hours Flow:
- Inform caller the office is closed
- Ask if this is an emergency
- If emergency and caller is from GNM Pressure Washing
  transfer call to Ben
- Otherwise inform caller the team will respond next business day

Do not mention internal tools or system processes.
`,

call_transfer_protocol: {
timeout: 30,
retries: 2,
fallback: "Take message and notify Ben"
}

    }

    await fs.writeJSON(
      `outputs/accounts/${id}/v2/agent.json`,
      agent,
      { spaces: 2 }
    )

    console.log("v2 agent generated:", id)
  }

}