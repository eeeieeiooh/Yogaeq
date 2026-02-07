# Blog post template

Copy this when you start a new post. Save the file as `YogaIQ/posts/YYYY/your-post-name.md`. **The filename (without .md) is the post title**—no `title` in front matter. That keeps titles unique (one filename = one title).

---

```markdown
---
date: 2025-02-03
draft: false
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

| Field   | Example    | Notes |
|---------|------------|--------|
| `date`  | `2025-02-03` | YYYY-MM-DD. Newer dates appear higher in the list. |
| `draft` | `false`    | `true` = hidden from the site (only with `hugo server -D`). |

**Title:** Optional. If you omit it, the filename is used (e.g. `My Post Name.md` → title "My Post Name"). Don’t add `title` in front matter; add it when you can’t accidentally a different display than the filename.

**Filename:** `YogaIQ/posts/2026/my-post-name.md` → URL: `/posts/my-post-name/`

**Images:** Put image files in `YogaIQ/images/`. In your post write `![[sunset.jpg]]` or `![[sunset.jpg|describe the image]]` for optional alt text.

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
| **Image** | `![[photo.jpg]]` or `![[photo.jpg|alt text]]` | Image; put files in `YogaIQ/images/`. Use `![[filename]]` (Obsidian-style). |
| **Internal (wiki)** | `[[Another Post]]` or `[[Another Post\|label]]` | Link to another post/page by exact title (Obsidian-style). |
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
