# Blog post template

Copy this when you start a new post. Save the file as `content/posts/your-slug-here.md` (lowercase, hyphens).

---

```markdown
---
title: "Your post title here"
date: 2025-02-03
draft: false
weight: 1
---

First paragraph: introduce the idea. No need for a heading if it's short.

## Section heading

More content. Use **bold** and *italic* as you like.

- List items
- work like this

[Links](https://example.com) go in square brackets and parentheses.

## Another section

Keep writing. Hugo renders Markdown, so code is `` `inline` `` or in fenced blocks:

```
optional code block
```

End with whatever you want—no closing line needed.
```

---

**Front matter quick reference**

| Field    | Example    | Notes |
|----------|------------|--------|
| `title`  | `"My post"` | Shown in the list and as the page title. Use quotes. |
| `date`   | `2025-02-03` | YYYY-MM-DD. Newer dates appear higher in the list. |
| `draft`  | `false`    | `true` = hidden from the site (only with `hugo server -D`). |
| `weight` | `1`        | Optional. Higher number = newer in some listings; your blog orders by date. |

**Filename:** `something-like-this.md` → URL: `/posts/something-like-this/`

---

## Markdown you can use

Your blog uses **Goldmark** (standard Markdown). All of this works:

| You want | Write this | Result |
|----------|------------|--------|
| **Blockquote** | `> quoted text` | Left border, italic (styled in your theme) |
| **Horizontal rule** | `---` or `***` or `___` on its own line | A dividing line |
| **Bold** | `**text**` or `__text__` | **text** |
| **Italic** | `*text*` or `_text_` | *text* |
| **Link** | `[label](https://url)` | Link |
| **Heading** | `## Heading` | Subheading (use `#` for title, `##` for sections) |
| **List** | `- item` or `1. item` | Bullet or numbered list |
| **Code** | `` `inline` `` or ` ``` ` fenced block | Code |
| **Highlight** | `==text==` | <mark style="background:#fef9c3">Yellow highlight</mark> |
| **Line break** | Two spaces at end of line, or a blank line | New line / new paragraph |

**Callout-style notes:** Use a blockquote with a bold label:

```markdown
> **Note:** This is a callout-style note. It will look like a quote with a left border.
```

That renders as your styled blockquote. Obsidian-style `> [!note]` will show as plain blockquote text (the `[!note]` won’t become a special box) unless you add a shortcode or extra CSS. For a “note” or “tip” look, the `> **Note:**` pattern above is the simplest and works now.
