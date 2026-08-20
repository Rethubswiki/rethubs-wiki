# Catalog Expansion — 2026-08-20

> **Editorial state: review queue.** This page records a source-level verification pass for candidates in reading, audio, video, extensions, downloads, distribution and self-hosting. It does not recommend providers, certify rights to media, or promise that an application, extension, instance or download will work for every person.

## Scope and method

The three submitted inventories were used as discovery notes. For each incorporation candidate, the canonical repository was queried on 2026-08-20 for its project description, archived/disabled/fork state, declared SPDX license when available, recent repository activity and latest release when the API exposed one. The structured records point to their individual primary source.

The result is **29 new `needs-review` records**. Their metadata is structurally valid and their project source was located, but publication remains subject to a human check of wording, license interpretation, platform wording and any distribution claim. The `verified` label is deliberately not used at this stage.

## Candidate matrix

| Area | Candidate records | Editorial boundary |
|---|---|---|
| Reading and local libraries | Aniyomi, LNReader, KOReader, Calibre, Suwayomi Server, Keiyoushi Extensions | Readers and extension code are distinct from third-party sources. No provider, catalog, title or availability claim is imported. |
| Video and personal media | Kodi, mpv, Jellyfin, Stremio Shell, Seanime, CloudStream, NewPipe | Clients, servers and shells are described by their declared technical role. Streaming surfaces and extensions retain their own terms, availability and rights checks. |
| Download tooling | Seal, YTDLnis, yt-dlp, StrawVerse | These are software tools, not source recommendations. Each use must comply with the applicable rights and service terms. |
| Audio and metadata | Auxio, InnerTune, Navidrome, Piped, MusicBrainz Picard, Audiobookshelf | Local playback, personal streaming, alternative front ends and metadata tooling are differentiated. Public instance availability is never inferred from source code. |
| Library and synchronization servers | Calibre-Web, Syncthing, Nextcloud Server | These projects can serve or synchronize an operator-controlled library; they are not catalog providers or a claim of remote media access. |
| Distribution and extension infrastructure | Obtainium, Aurora Store, F-Droid Server | Distribution is separated from developer releases. A store, mirror or update checker does not certify current safety or device support. |

## Corrections preserved from the submitted inventories

The following differences were observed in primary repository metadata and are preserved to avoid carrying volatile claims into the Wiki:

| Candidate | Observed correction or limit |
|---|---|
| Mihon | The examined release is `v0.20.4`, not `v0.22.2`. The existing entry remains the baseline record. |
| Aniyomi | The repository is active, while the latest release located is `v0.18.1.2` from 2025; it should not be described with an unverified 2026 release number. |
| Jellyfin, Seanime, CloudStream and Navidrome | The release values observed differ from several attachment values; individual records intentionally omit volatile version strings. |
| Stremio Shell and Aurora Store | GitHub evidence identifies a shell or a mirror respectively. It does not independently establish the current status of another product channel or release. |
| InnerTune and Seal | Their public repository evidence does not justify the exact “updated in 2026” statements in the inventories; both remain review candidates. |
| Piped | Source code was located, but a current public instance is neither assumed nor recommended. |

## Deferred or excluded pending a corrected primary source

The supplied GitHub routes for **Kahon**, **Komikku**, **Reex**, **Feishin** and **Funkwhale** did not resolve to the named canonical repository during this pass. They are not included as records. A contributor can reopen any of them by supplying the maintained project URL and a direct citation.

## Attribution and limitations

Community indexes, directories and the submitted inventories receive credit for discovery context according to [Sources and Attribution](Sources-and-Attribution). The cited project repositories are the primary evidence for each draft record. Neither source type turns a candidate into an endorsement, verifies a content source, transfers authorship or removes the human review requirement.

## Review checklist

1. Confirm the project URL and declared license against the evidence link.
2. Check that the role, platform and dependency text makes no inference beyond the primary source.
3. Ensure a record names no unreviewed extension, streaming provider, catalogue, title or distribution mirror.
4. Move accepted records to `verified`; retain uncertain records as `needs-review` or remove them with the reason recorded in the pull request.
