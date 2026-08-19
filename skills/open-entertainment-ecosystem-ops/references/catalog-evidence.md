# Catalog Evidence and Coverage

## Evidence hierarchy

Use the first available source that answers the claim. Do not use a lower tier to contradict a clear higher-tier source without documenting the conflict.

| Tier | Suitable uses | Limits |
|---|---|---|
| Maintainer repository, releases, website, or package metadata | License, status, supported operating systems, official image, official distribution | May omit locale or compatibility nuance |
| Maintainer announcement or issue tracker | Migration, archival, limitation, planned support | Treat plans as plans, not shipped features |
| App store controlled by the developer | Distribution availability and official screenshots | Do not infer source availability from store presence |
| Curated community catalog | Discovery, context, cross-links | Re-check every project claim with a primary source |
| Search snippet or social repost | Lead only | Never cite as verification |

## Platform model

Represent every platform as one of these labels:

| Label | Meaning |
|---|---|
| Native | Maintainer declares a build or install path for the operating system |
| Web | Browser access is declared; do not call it native |
| Companion | A supporting client or remote control exists, but not the primary experience |
| Unverified | No primary evidence was found; preserve uncertainty |

Use exact platform names: Android, iOS, macOS, Windows, Linux, or Web. Retire the generic label `Desktop` only when a canonical source supports the replacement. Do not infer iOS support from Android compatibility layers or web availability.

## Languages

Separate three facts:

1. **Interface language** is what the application UI offers.
2. **Content/resource language** is what sources, extensions, or catalogs can serve.
3. **Editorial language** is the language of the site edition or its maintained text.

Store language selectors with BCP 47 tags. Record the date and source for availability claims. Device-language detection may suggest a selection but must never replace a manual choice without consent.

## Removal and status changes

When asked to remove a project, search the catalog, indexes, Wiki sources, compatibility page, and tests. Mark it discontinued only when a maintainer source, archival state, or a project announcement supports it. If evidence is incomplete, remove it from recommendations if the user directs it, but document the status as unknown rather than inventing a reason.

## Images and attribution

Use developer-provided icons, releases, screenshots, or branding. Link every community source to its actual role. Never synthesize a project thumbnail that could be mistaken for an official asset.

