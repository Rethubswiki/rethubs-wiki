# Git Integration and Safe Publication

## Preflight

Before any remote write, inspect:

| Question | Required action |
|---|---|
| Which repository owns the product versus the Wiki? | Keep code, Wiki source, and published Wiki destinations distinct |
| What is the default branch? | Read it from the remote; do not assume `main` |
| Is the review branch current? | Verify commit, status checks, and local validation output |
| Does a pull request already exist? | Reuse or update it rather than creating duplicates |
| Is the user authenticated for the target? | Check without exposing tokens; defer if access is absent |
| Is there common ancestry? | Compare branches before preparing a merge |

## Review-first publication

1. Create a descriptive review branch.
2. Run tests and build before push.
3. Commit an audit note and package pointer if applicable.
4. Push the review branch.
5. Request a final confirmation immediately before a merge, release, forced update, payment, or external publication.

## Unrelated histories

If the default branch and review branch have no common ancestor, do not force-push either branch. Instead:

1. Create a bridge branch from the default branch.
2. Merge the review branch locally with `--allow-unrelated-histories`.
3. Resolve only visible conflicts; do not discard the default branch's files.
4. Validate the bridge tree and push it as a new reviewable branch.
5. Request final confirmation, then merge the bridge branch into the default branch using the hosting provider's merge operation.

## Multiple hosts

Treat GitHub, Codeberg, and GitLab as separate destinations. A successful push to one does not authorize a push to another. Record explicit deferrals. Never request credentials in chat; use an authenticated browser session or secure connector flow.

## Official GitHub MCP server

The official implementation is [`github/github-mcp-server`](https://github.com/github/github-mcp-server). When it is used, configure it as a separate, authorized connector rather than embedding a token in repository files, scripts, or documentation. The remote endpoint documented by GitHub is `https://api.githubcopilot.com/mcp/` and uses an OAuth authorization flow.

1. Inspect existing GitHub connectors first; do not duplicate an active official connector.
2. Request only the repository scope required for the present task. Read-only discovery is the default.
3. Use MCP for inspection, issue or pull-request context, and controlled repository operations when it adds value over the authenticated CLI.
4. Treat MCP write operations exactly like other remote writes: create or update a review branch first, state the repository and target branch, then obtain confirmation immediately before merge, release, deletion, or force update.
5. Never place OAuth material, PATs, connector manifests with credentials, or user-provided share links in the repository.
6. If authorization is unavailable, document the integration path and defer the remote action. Do not fall back to copied credentials from chat.
