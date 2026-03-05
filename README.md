# Clara AI Automation Pipeline

## Architecture

Demo Call Audio
↓
Whisper Transcription
↓
Transcript
↓
Account Memo Extraction
↓
Agent Spec Generation (v1)
↓
Onboarding Updates
↓
Generate v2 Agent
↓
Changelog

## Setup

Install dependencies

npm install

Install whisper

pip install openai-whisper

## Run Pipeline

python -m whisper dataset/demo_calls/audio1975518882.m4a --model base --output_dir transcripts

node scripts/extractMemo.js

node scripts/generateAgent.js

node scripts/applyPatch.js <account_id>

node scripts/generateChangelog.js <account_id>

## Outputs

outputs/accounts/<account_id>/v1
outputs/accounts/<account_id>/v2

changelog/<account_id>.json