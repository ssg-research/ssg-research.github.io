# html-validate rule suppressions

`npm run htmlvalidate` validates the built `dist/**/*.html` against
`html-validate:recommended`. A few rules are turned off in `.htmlvalidate.json`;
each is recorded here with its reason so the config does not become a black box.

| Rule            | Why it is off                                                                                                                                                                                                                                                                                          |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `long-title`    | `/mlsec/interactions/` has a 74-character `<title>` ("Unintended Interactions among ML Risks and Defenses \| Secure Systems Group"). The string is faithful to the source content — `<page title> \| <site name>` — and `long-title` is an SEO guideline, not a validity error.                        |
| `meta-refresh`  | `404.astro` keeps the al-folio 404 behaviour, which auto-returns to the home page after a short delay (`<meta http-equiv="refresh" content="3; url=/">`). The rule forbids a non-zero refresh delay (WCAG 2.2.1). The behaviour is intentional; the accessibility trade-off is a known follow-up.      |
| `doctype-style` | Astro's auto-generated redirect pages (from the `redirects` config — `/blime/`, `/probandroid/`) emit a lowercase `<!doctype html>`, while its `.astro` pages emit uppercase. The HTML5 doctype is case-insensitive, so this is a purely stylistic rule failing on framework output we do not control. |

When any of these conditions no longer holds — the long title is shortened, the
404 drops its auto-refresh, or Astro normalises its redirect-page doctype — the
corresponding rule should be re-enabled.
