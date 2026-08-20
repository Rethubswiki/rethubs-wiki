# Executive status — 2026-08-20

> **Scope of this report.** This page records what was verified in the public source repository and its configured publication workflows on 20 August 2026. It deliberately distinguishes confirmed repository facts from unavailable public-domain checks and from future architectural proposals.

**Tags:** [orientation](Tags-and-Discovery#editorial-pages) · [maintenance](Tags-and-Discovery#editorial-pages) · [evidence](Evidence-and-Review-Policy)

## Project identity

Rethubs Wiki is the reviewable public documentation source for **La Pequeña Ballena Celeste** under the editorial banner of **Bandita Open Sauce**. Its purpose is to map open-source resources for reading, manga, anime and video, comics and graphic novels, audio, and related tools without treating an index entry as a guarantee of availability, safety, legality, maintenance or compatibility. The companion interface may use the marine–stellar Blue iOS visual language, but the Wiki remains evidence-led documentation rather than a recommendation engine.[1] [2]

## Verified repository and publication status

| Component | Status on 20 August 2026 | Verified observation |
|---|---|---|
| Canonical source repository | ✅ Confirmed | The public repository is `Rethubswiki/rethubs-wiki`, whose default branch is `main`.[3] |
| Latest source revision | ✅ Confirmed | `main` points to `5d79ae3710f99872bfdf7bcd281e87e9b9ab5629`, merged on 19 August 2026 at 20:51:03 UTC.[4] |
| Open pull requests | ✅ None at check time | The open-pull-request query returned no records. This does not predict later contributor activity. |
| Reviewed Wiki publication | ✅ Successful | The latest `Publish approved Rethubs Wiki pages` run for the revision above completed successfully.[5] |
| GitHub Pages build | ✅ Successful | The latest `pages-build-deployment` run for the same revision completed successfully.[6] |
| Custom GitHub Pages domain | ⚠️ Not publicly reachable from the audit network | Pages declares `rethubs-ecosystem.dedyn.io` as its custom domain, yet the hostname did not resolve during this audit. The domain must be checked again after DNS is corrected or propagated.[7] |
| `rethubs.wiki` and `rethubs.ecosystem.apps` | ⚠️ Not evidenced as deployment targets | Neither name resolves from the audit network and neither is configured as the Pages custom domain in the repository settings checked here. |
| Profile, comments and ratings | ⚠️ Outside this repository’s public Wiki source | The source repository intentionally excludes private notes, browser-local settings, session data and unreviewed contributor material. It cannot substantiate a public profile or community-data deployment by itself.[1] |

## Observed architecture

The repository does **not** currently implement a separate static-web application tree with JSON indexes, API routes, synced public profiles or JSON comment stores. Instead, it uses a simpler documentation boundary: Markdown pages under `wiki-source/` are reviewed in pull requests; after a merge to `main`, a GitHub Actions workflow copies approved Markdown and approved assets to the GitHub Wiki.[1] [8]

| Requested component | Observed implementation | Assessment |
|---|---|---|
| `.github/workflows/` | Present: a publication workflow listens to `main` changes under `wiki-source/`. | ✅ Present |
| `wiki-source/` editorial source | Present: 23 Markdown source pages at audit time. | ✅ Present |
| `wiki/`, `recursos/`, `categorias/`, `etiquetas/` and `indice.json` | Not present as the requested JSON-and-folder model. Navigation is page- and taxonomy-based instead. | ⚠️ Different architecture |
| `public/`, `css/`, `js/`, `assets/`, `scripts/` and `api/` | Not present in this documentation repository. | ❌ Not implemented here |
| User profiles and comment JSON | Not present, by design, to avoid publishing private or unreviewed data. | ✅ Correctly excluded from the Wiki source boundary |
| GitHub-to-Wiki publication | Present and one-directional after review and merge. | ✅ Present |
| Bidirectional Wiki-to-web synchronisation | No evidence found in this repository. | ❌ Not evidenced |

## Editorial directives

Every public resource record should keep its role narrow, name its canonical origin, preserve the declared license only when it is supported by a primary source, state platform and language boundaries, identify the discovery source when relevant, record its review date and label the evidence as declared, observed, inferred or unconfirmed.[2] Community indexes and stores can be acknowledged for discovery; they do not replace a canonical project source.[9]

The project’s privacy boundary is equally explicit. Private notes, local preferences, session data, rejected candidates and unsupported personal claims do not belong in this repository. Public publication follows a human review gate: a branch proposes a change, a reviewer checks provenance and uncertainty, `main` receives the approved material, and only then does the workflow publish source pages to the GitHub Wiki.[1] [8]

The Blue iOS marine–stellar identity must support legibility rather than imply a risk or evidence state by color alone. It should preserve clear hierarchy, explicit text labels and reduced-motion support where users request it.[10]

## Immediate roadmap

| Priority | Next step | Completion criterion |
|---|---|---|
| 1 | Restore and verify the custom-domain DNS record. | `rethubs-ecosystem.dedyn.io` resolves publicly and GitHub Pages can enforce HTTPS. |
| 2 | Decide whether the Wiki remains documentation-only or receives a separate static-web codebase. | The decision names the owning repository, deployment target, data boundary and maintenance owner. |
| 3 | If a static site is approved, introduce it through a review branch with an explicit data model. | Search, profiles, comments and ratings are separately specified; no private or unreviewed material is copied to the Wiki. |
| 4 | Publish contribution, broken-link reporting and FAQ guidance as reviewed pages. | Each route is linked from Home and has a clear maintainer or review path. |
| 5 | Extend translated editorial pages only after source review. | Each language version preserves evidence labels and links to canonical references. |

## Conclusion

The **reviewable Wiki source and its latest GitHub publication workflows are operational**. The content model is a controlled Markdown-to-GitHub-Wiki pipeline, not the broader JSON/API/static-site architecture proposed in earlier planning. The most immediate public blocker is the unresolved custom domain; until it resolves and HTTPS is enforced, the custom-domain site cannot be described as publicly verified. Any future web application, profiles, comments, ratings or two-way synchronisation should be designed and reviewed as a separate system with clear privacy and publication boundaries.

## References

1. [Rethubs Wiki repository README](https://github.com/Rethubswiki/rethubs-wiki/blob/main/README.md)
2. [Rethubs Wiki resource-entry template](https://github.com/Rethubswiki/rethubs-wiki/blob/main/wiki-source/Resource-Template.md)
3. [Rethubswiki/rethubs-wiki repository](https://github.com/Rethubswiki/rethubs-wiki)
4. [Revision `5d79ae3710f99872bfdf7bcd281e87e9b9ab5629`](https://github.com/Rethubswiki/rethubs-wiki/commit/5d79ae3710f99872bfdf7bcd281e87e9b9ab5629)
5. [Latest approved-Wiki publication run](https://github.com/Rethubswiki/rethubs-wiki/actions/runs/32300779499)
6. [Latest GitHub Pages deployment run](https://github.com/Rethubswiki/rethubs-wiki/actions/runs/32300778259)
7. [GitHub Pages configuration endpoint](https://api.github.com/repos/Rethubswiki/rethubs-wiki/pages)
8. [Wiki publication workflow](https://github.com/Rethubswiki/rethubs-wiki/blob/main/.github/workflows/publish-wiki.yml)
9. [Sources and attribution policy](https://github.com/Rethubswiki/rethubs-wiki/blob/main/wiki-source/Sources-and-Attribution.md)
10. [Visual language and accessibility guidance](https://github.com/Rethubswiki/rethubs-wiki/blob/main/wiki-source/Visual-Language-and-Accessibility.md)
