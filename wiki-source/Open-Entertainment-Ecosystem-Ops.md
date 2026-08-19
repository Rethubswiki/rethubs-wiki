# Open Entertainment Ecosystem Operations

**Tags:** [workflow](Tags-and-Discovery#workflow) · [policy](Tags-and-Discovery#policy) · [template](Tags-and-Discovery#template) · [attribution](Tags-and-Discovery#attribution)

> **Versioned specification — v1.1, 19 August 2026.** This page describes the reusable maintenance process used for the catalog and companion Wiki. It is a documented workflow, not an automated publishing authority.

## Purpose

The operational skill keeps evidence, editorial review, privacy, email, and publication boundaries explicit when maintaining open-source entertainment resources. It supports catalogues for reading, manga, anime, comics, video, audio, extensions, source directories, and related free-software tools.

## Non-negotiable controls

| Area | Required control |
|---|---|
| Evidence | Label claims as confirmed, project-declared, inferred, or unknown; primary sources decide status and licensing. |
| Editorial publication | Automation may collect candidates and evidence; a human decision is required before public changes. |
| Privacy | Private notes, reminders, filters, and unsupported-language searches remain local unless a person explicitly opts in. |
| Email | Transactional notices require explicit recipient consent, a provider-recognized sender, configuration validation, and a controlled test. |
| Images | Use official or developer-provided assets only; otherwise use a non-deceptive text treatment. |
| Git | Validate and publish a review branch before requesting a final confirmation for a merge, release, or destructive update. |

## Reusable operating sequence

1. Record scope, audiences, repositories, publication destinations, platform and language coverage, privacy boundary, and approval requirement.
2. Inventory catalog data, search index, source pages, tests, task log, and remote branches before editing.
3. Verify changed resources through a canonical project source; treat community directories as discovery unless they directly cite the project.
4. Separate native, web, companion, and unverified platform support. Keep interface translations distinct from resource-language availability.
5. Update catalog entries, compatibility notes, attribution, search index, audit record, and tests together when applicable.
6. Prepare review branches, validate locally, and package a review note. A branch push does not itself publish content.
7. Report completed, deferred, and uncertain work without claiming that unreviewed candidates are public.

## Official GitHub MCP integration

The process recognizes the official [GitHub MCP Server](https://github.com/github/github-mcp-server) as an optional connector for repository context and controlled GitHub actions. Its remote endpoint is documented as `https://api.githubcopilot.com/mcp/` and uses OAuth authorization.

The connector is configured separately with minimum access. It can support repository inspection, branch or pull-request context, and authorized review workflows, but it does not replace human approval. Any merge, release, deletion, force update, or cross-host mirror requires a fresh confirmation naming the repository, target branch, and action. Credentials, OAuth data, recipient addresses, and share links are never committed here.

## Versioning and review

The canonical reusable skill and its reference files are versioned in this repository under `skills/open-entertainment-ecosystem-ops/`. This Wiki page is the public-safe operational specification. Changes are made in `wiki-source` and `skills`, reviewed together, merged, and then published according to the [Publishing Workflow](Publishing-Workflow). The release checklist requires rechecking primary sources and the official GitHub MCP repository before labeling a revision current.
