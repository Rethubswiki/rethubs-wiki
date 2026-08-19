# Official GitHub MCP Controls

## Canonical source

Use the official [`github/github-mcp-server`](https://github.com/github/github-mcp-server) repository as the implementation reference. The documented remote MCP endpoint is `https://api.githubcopilot.com/mcp/`; access is authorized through OAuth. Verify the current documentation before configuring a new connector because service capabilities and permission prompts may change.

## Integration boundary

> The connector is an access path, not an approval path.

An MCP connector may inspect repositories and perform the actions its authorization allows, but it does not replace editorial review, contributor consent, or a final user confirmation before remote writes with material impact.

| Activity | Default posture | Additional control |
|---|---|---|
| Repository, branch, issue, and pull-request inspection | Allowed with minimum read scope | Record source, branch, and observation date |
| Creating a review branch or draft pull request | Require explicit task authorization | Keep target and source branches visible |
| Merging, publishing a release, deleting, or force-updating | Prohibited until final confirmation | Name repository, target branch, and operation in the confirmation |
| Cross-host mirroring | Separate authorization per host | Never infer Codeberg or GitLab permission from GitHub access |

## Safe configuration checklist

1. Check whether an official GitHub connector already exists.
2. Use the connector configuration flow; never paste a token into a repository, prompt, issue, Wiki page, or shell history.
3. Select least-privilege access and revoke unused authorizations.
4. Use a short-lived review branch for changes.
5. Validate tests and build locally before creating a merge request.
6. Preserve an audit note with public-safe evidence only.
7. Re-check default branch, open pull requests, required checks, and ancestry immediately before the final confirmation.
