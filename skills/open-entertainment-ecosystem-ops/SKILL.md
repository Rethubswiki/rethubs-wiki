---
name: open-entertainment-ecosystem-ops
description: Verify, curate, and ship an open-source entertainment ecosystem catalog and its companion wiki. Use for multi-edition catalog updates; manga, anime, comics, reading, video, or audio software research; platform and language matrices; community-source attribution; periodic editorial review; consent-gated email; GitHub Wiki publication; safe branch integration; or a human-gated official GitHub MCP workflow.
---

# Open Entertainment Ecosystem Operations

Use this skill to maintain an evidence-led catalog of open-source entertainment software without conflating discovery with verification, private data with editorial data, or a review branch with a published change.

## Operating contract

1. Preserve audience boundaries. Keep community editions, administrative tools, and contributor records separate unless the user explicitly asks to connect them.
2. Treat each claim as **confirmed**, **declared by the project**, **inferred**, or **unknown**. Do not silently upgrade a claim.
3. Do not fabricate reviews, ratings, endorsements, compatibility, release status, thumbnails, or user activity.
4. Use only official project images or developer-supplied assets. If none exists, use a non-deceptive text treatment.
5. Keep notes, local reminders, personal filters, and unsupported-language telemetry on-device unless the user explicitly consents to another model.
6. Require a human editorial decision before public catalog, Wiki, or application changes. Automated audits may create candidates, never publish them.

## Choose the workflow

| Request type | Follow |
|---|---|
| Add, remove, or update applications and extensions | **Catalog verification** then **platform and language coverage** |
| Add community links, taxonomies, or Wiki pages | **Attribution and Wiki workflow** |
| Add periodic scans, queues, or moderation | **Review operations workflow** |
| Add contributor email notices | **Consent-gated email workflow** |
| Push, merge, or mirror code/Wiki changes | **Git integration workflow** |
| Build all of the above together | Run the workflows in the order listed below |

## End-to-end workflow

1. **Establish boundaries and success criteria.** Record the audience, source repositories, publication destinations, supported platforms, supported languages, privacy boundary, and whether a human must approve before publish. Add every requested change as an unchecked item to the project task log before implementation.
2. **Inventory before editing.** Read the catalog data, existing source pages, public change log, tests, and destination remotes. Search the entire project for entries requested for removal.
3. **Verify with primary evidence.** Read [catalog evidence rules](references/catalog-evidence.md). Inspect a canonical repository, official site, release channel, or platform listing. Record the URL and review date. Use community directories for discovery only unless they cite the project directly.
4. **Normalize coverage.** Follow [platform and language rules](references/catalog-evidence.md). Distinguish native, web, companion, and unverified support. Keep interface translations separate from resource-language availability.
5. **Update editorial surfaces.** Update the catalog, search index, Wiki attribution, compatibility notes, and audit record together where the change affects them. Preserve independent editions and add or update data and search tests.
6. **Use review operations for recurring work.** Read [privacy and editorial operations](references/privacy-editorial.md). Store evidence and candidate state, not automatic publication state. Schedule audits only with a documented cadence, source list, failure mode, and review queue.
7. **Gate all email.** Read [DNS and consent-gated email](references/dns-email.md). Do not send until the provider recognizes the sender and the individual recipient has explicitly consented. A dashboard event is evidence, not a substitute for a project configuration check.
8. **Prepare publication by branch.** Read [Git integration](references/git-integration.md). When the official GitHub MCP service is needed, also read [GitHub MCP controls](references/github-mcp-official.md). Validate, commit, and push a review branch first. Do not touch the default branch until the user confirms the specific remote operation. For unrelated histories, create a bridge branch from the default branch; never force-push.
9. **Validate and package.** Run type checks, relevant unit tests, production build, and responsive visual review. Generate a shareable review note from the template. Mark only completed task-log entries as complete. Save a restore point before delivery.
10. **Deliver calibrated outcomes.** State what changed, what was tested, the branch or release reference, residual uncertainty, and deferred destinations. Do not imply that unreviewed candidates or external mirrors are published.

## Catalog verification

Read `references/catalog-evidence.md` before research. For every changed entry, preserve this minimum record:

| Field | Requirement |
|---|---|
| Canonical source | Official repository, project site, or maintainer release page |
| Status | Confirmed active, archived, discontinued, or unknown; never guess |
| License | Only when stated by a primary source |
| Distribution | Repository release, official store, package source, or unknown |
| Platform label | Native, web, companion, or unverified; include evidence date |
| Content language | BCP 47 labels only when declared or operationally demonstrated |

For a requested removal, verify discontinuation when practical. If the item is already absent, record the absence rather than asserting a reason that was not found.

## Attribution and Wiki workflow

1. Credit community catalogs as discovery or context sources, never as the project maintainer.
2. State each source's role: discovery, canonical verification, compatibility context, or editorial background.
3. Keep unpublished Wiki source files separate from the public Wiki. Publish only a human-approved source tree.
4. Index new public pages in site search only after their content and attribution page are committed.
5. Never copy community-maintained lists wholesale without preserving provenance and review limits.

## Review operations workflow

1. Define inputs, cadence, evidence captured, review priority, and expiry policy.
2. Make automated findings candidates with an evidence trail. Require a reviewer decision, rationale, and timestamp before catalog publication.
3. Report candidate counts and review-time metrics as administrative metrics, never as community consensus.
4. Treat failed fetches, missing data, and source ambiguity as incomplete evidence, not rejection or confirmation.

## Consent-gated email workflow

Read `references/dns-email.md` before changing DNS, provider configuration, secrets, or notifier code. Keep outgoing messages transactional and limited to a contributor's explicitly opted-in status updates. Do not attach private tracking tokens, internal notes, or submission contents to diagnostic test messages.

## Git integration workflow

Read `references/git-integration.md` before any remote write. Use the official GitHub MCP server only through an authorized connector, with the minimum repository scope and OAuth or a securely stored access token. Always inspect default branch, review branch, open pull requests, remote access, and common ancestry. A branch push is not a publication or merge. Require a final confirmation immediately before merging, releasing, or force-altering a remote branch.

## Error-prevention checklist

- [ ] No catalog claim lacks an evidence classification.
- [ ] No official thumbnail has been substituted with an unrelated image.
- [ ] Language preferences and private notes remain local unless explicitly consented otherwise.
- [ ] Automated review never publishes without an editorial decision.
- [ ] Email recipient consent, sender-domain capability, and a configuration test are all present.
- [ ] No credential, shared-email token, or personal recipient is written to documentation, logs, commits, or deliverables.
- [ ] Remote destinations have the requested access and are not assumed interchangeable.
- [ ] A review branch and a restore point exist before a merge or release.
- [ ] Official GitHub MCP access, if used, is a separately authorized connector with minimum permissions and no autonomous write path.

## Bundled references

| File | Load when |
|---|---|
| `references/catalog-evidence.md` | Researching applications, platforms, translations, thumbnails, licenses, or sources |
| `references/privacy-editorial.md` | Adding proposals, local features, queues, metrics, or recurring audits |
| `references/dns-email.md` | Configuring sender DNS, consent-gated notices, or delivery tests |
| `references/git-integration.md` | Mirroring, pushing, opening PRs, merging, or resolving unrelated histories |
| `references/github-mcp-official.md` | Configuring or using the official GitHub MCP server through an authorized connector |
| `templates/review-note.md` | Preparing an internal or community review package |
