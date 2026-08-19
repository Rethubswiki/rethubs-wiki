# DNS and Consent-Gated Email

## Preconditions

1. Use the provider's domain-status API or dashboard to retrieve the exact records.
2. Identify the DNS zone owner before publishing anything.
3. Enter names relative to the managed zone when the DNS provider requires it.
4. Publish only the records needed for the selected capability. Sending and receiving are separate capabilities.
5. Never paste API keys, session tokens, recipient addresses, or message-share URLs into project files or status reports.

## Verification sequence

| Step | Check |
|---|---|
| DNS publication | Query authoritative or public DNS for the exact DKIM, MX, and SPF values required for sending |
| Provider verification | Confirm its sending capability, not only a partially verified domain label |
| Project configuration | Validate the configured `From` address against the provider's permitted sender domain |
| Recipient consent | Confirm the exact recipient opted in to this class of status notice |
| Single smoke test | Send one content-minimal technical message only after explicit authorization |
| Delivery evidence | Query the provider event for accepted, delivered, bounced, or rejected state |

Do not assume that a provider-owned subdomain is available merely because it resembles a default sender. Query the account's permitted domains or sender identities first. If it is rejected, stop; select a documented permitted sender rather than retrying with arbitrary local parts.

## Test message limits

Use a neutral subject and body. Do not include proposal titles, tracking links, contributor information, unreviewed candidates, or internal evidence. Save only the technical result needed to prove delivery; redact recipients and identifiers from public documentation.

## Runtime behavior

Perform the final allow-list check in notifier code, not only in environment configuration. Refuse to send when consent is absent, the sender domain is not allowed, or the provider credential is missing. Cover every refusal and the allowed path in tests.

