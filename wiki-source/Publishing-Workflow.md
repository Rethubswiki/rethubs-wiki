# Publishing Workflow

The public source repository is reviewed before its pages reach the Wiki.

| Stage | Location | Decision |
|---|---|---|
| Draft | Feature branch or review queue | A change is proposed with evidence. |
| Review | Pull request | A reviewer approves, requests correction or rejects it. |
| Source of record | `main` branch | An approved change is merged with its review history. |
| Publication | GitHub Wiki | The publisher copies only `wiki-source/*.md` from the merged source. |

The publisher runs after a change to `wiki-source/` reaches `main`. It makes no decisions about content, does not export internal review records, and stops if publishing fails. The GitHub commit links the public page to the reviewed source revision.

