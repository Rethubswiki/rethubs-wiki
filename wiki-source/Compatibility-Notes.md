# Compatibility Notes

> Compatibility pages track a project’s declared platform, installation path and dependency boundary. They do not test every device, substitute for project documentation or establish that an extension works with every app version.

**Tags:** [policy](Tags-and-Discovery#editorial-pages) · [cross-platform](Tags-and-Discovery#platform)

## What a record can establish

Compatibility is documented **per project** and only from declared material: an official repository, release page, project documentation or maintainer statement. A directory listing, community report, old APK or absence of an issue report does not prove support.

| Field | Record only when supported | It does not establish |
|---|---|---|
| Project and canonical URL | The software being discussed. | Trustworthiness of every mirror or package. |
| Platforms | Explicitly named platform, or a dated canonical observation. | Support for all OS versions or devices. |
| Installation route | A source named by the maintainers. | Safety of copied packages or third-party modifications. |
| Resource relationship | A declared client, extension, server, index, host-app or local-library relationship. | Interchangeability with another project. |
| Last checked | Date of the supporting material review. | A future maintenance commitment. |

## Resource record

Leave a field as **not declared** rather than extrapolating from screenshots, discussion posts or an adjacent project.

```text
Platforms: [declared platforms]
Minimum OS / runtime: [declared value or not declared]
Installation path: [canonical project path]
Relationship: [requires host app / requires server / local-library / not applicable]
Known constraints: [maintainer-declared constraints]
Evidence checked: [YYYY-MM-DD]
```

## Low-resource use

The Wiki does not label hardware as universally compatible. When a project publishes requirements, quote or link them. When it does not, contributors may describe an **observed configuration** only when they label it as observation, retain the date and build, and do not treat it as a guarantee for comparable devices.

For slow networks, prefer a project’s canonical release route and a small, clearly described download. Do not redirect visitors to copied installers, unsupported mirrors or instructions that bypass a project’s own verification process.

## Review rule and next routes

Compatibility statements are evidence-bearing records. A change to platform support, installation route or constraint needs a source link and dated review note before publication. Use [Tags and Discovery](Tags-and-Discovery) for controlled platform and relationship labels, [Evidence and Review Policy](Evidence-and-Review-Policy) for calibration and [Contribute and Correct](Contribute-and-Correct) for a reviewable correction.
