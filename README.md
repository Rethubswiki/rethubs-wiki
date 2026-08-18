# Rethubs Wiki

**Open-source resources for video, reading and audio**

Rethubs Wiki is the public documentation space of **La Pequeña Ballena Celeste**, maintained under the editorial banner of **Bandita Open Sauce**. It maps open-source resources for reading, video, comics, graphic novels, audio and supporting tools without treating an index entry as a guarantee of availability, safety, legal status, or continued maintenance.

This repository is the **reviewable source** for the GitHub Wiki. The content under [`wiki-source/`](./wiki-source/) is prepared in pull requests, reviewed by people, and only then published to the Wiki by the workflow in [`.github/workflows/publish-wiki.yml`](./.github/workflows/publish-wiki.yml). Pending candidates, rejected material, private notes, browser-local settings and session data are intentionally outside this repository.

## Editorial flow

1. A proposed source change is prepared in a branch and opened as a pull request.
2. A reviewer checks the provenance, declared license, observed state, wording and uncertainty.
3. Once the pull request is approved and merged into `main`, the Wiki publisher copies the reviewed pages to the repository Wiki and records the originating commit.
4. If the publisher fails, the source commit remains reviewable and the failure can be retried without promoting unapproved content.

## Scope

| Area | What the Wiki records | What it does not assume |
|---|---|---|
| Reading and manga | Clients, extensions, sources and canonical projects | Continuous availability or a complete catalog |
| Anime and video | Open-source clients, tooling and source directories | Rights, regional access or stream availability |
| Comics and graphic novels | Readers, formats, repositories and compatibility claims | That every listed source remains active |
| Audio and assisted tools | Playback, accessibility and declared assisted features | Local processing, privacy or model behavior unless documented |

## Navigation

Start with the Wiki [Home](./wiki-source/Home.md), then consult the [evidence and review policy](./wiki-source/Evidence-and-Review-Policy.md), [resource template](./wiki-source/Resource-Template.md) and [publishing workflow](./wiki-source/Publishing-Workflow.md).

