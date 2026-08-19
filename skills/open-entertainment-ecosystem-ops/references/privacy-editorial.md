# Privacy and Editorial Operations

## Local-first boundary

Keep browser reminders, private notes, personal tags, local calendar imports, filter collections, and unsupported-language queries local by default. Explain storage, encryption, export, deletion, and the limits of any local-only claim in plain language.

For encrypted notes, make password non-recoverability explicit. Never transmit a passphrase, raw note, or decrypted backup merely to provide application support.

## Editorial proposals

Accept only the minimum fields required to assess a resource. Give the contributor a private tracking identifier, not an indexable public status page. Consent to email must be separate from proposal submission and reversible.

Store status changes with actor, timestamp, reason, and evidence. Do not convert unreviewed proposals into public catalog entries automatically.

## Periodic review

Define these controls before enabling a schedule:

| Control | Requirement |
|---|---|
| Scope | Canonical source list and permitted collection methods |
| Cadence | Audit and discovery timing stated separately |
| Evidence | Timestamp, observed field, source URL, and capture outcome |
| Candidate state | Pending, reviewed, approved, rejected, or deferred |
| Publication gate | Explicit editorial decision and rationale |
| Failure handling | Preserve incomplete evidence and retry policy without inventing results |

When a project uses database-backed review queues, run schema migrations in dependency order, keep automated findings distinct from editorial decisions, and cover state transitions with unit tests.

## Metrics

Use aggregate counts, median review duration, and status distributions. Avoid collecting contributor behavior unrelated to review. Do not phrase queue metrics as quality scores, popularity, or community endorsement.

