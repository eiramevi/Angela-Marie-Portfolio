# IT Support Specialist — Home Lab Portfolio (Static, no database)

A fully static portfolio site — plain HTML/CSS/JS, no PHP, no database, no build step.
Works perfectly on **GitHub Pages** (which only serves static files — it can't run PHP
or connect to a database at all, so this is the right format for that host).

## What's in here

```
index.html                     ← gallery page (category filters + project cards)
project.html                   ← single project page (screenshot gallery + lightbox)
assets/js/config.js            ← your site name/tagline
assets/js/data.js              ← ALL your content lives here (this replaces the database)
assets/js/common.js            ← shared header/footer + helper functions
images/                        ← put your screenshot files in here, organized by project
```

There's no admin panel anymore, because there's no server to log into. Instead, you
manage everything by editing **`assets/js/data.js`** directly — it's a plain JavaScript
file with your categories and projects as a list. Open it in any text editor (VS Code,
Notepad++, etc.).

## How to add a new lab project

1. Create a folder for its screenshots inside `images/`, e.g. `images/my-dns-fix/`.
2. Drop your screenshot files in there (PNG/JPG), named however you like — e.g.
   `01-problem.png`, `02-fix.png`.
3. Open `assets/js/data.js` and copy one of the existing objects in the `PROJECTS`
   array, paste it as a new entry, and fill in your own details:

```js
{
    title: "Fixing a DNS Resolution Issue",
    slug: "fixing-dns-issue",              // used in the URL, keep it URL-safe (no spaces)
    category: "troubleshooting",           // must match a slug from CATEGORIES above it
    summary: "Diagnosed and resolved a client machine unable to resolve internal hostnames.",
    description: `Full write-up here.

Use blank lines for new paragraphs — this field supports plain text.`,
    tools: "Windows Server 2022, DNS, nslookup, ipconfig",
    completedOn: "2026-08-25",             // format: YYYY-MM-DD
    published: true,                        // set false to hide it without deleting it
    images: [
        { src: "images/my-dns-fix/01-problem.png", caption: "Step 1: Client couldn't resolve internal.company.local" },
        { src: "images/my-dns-fix/02-fix.png", caption: "Step 2: Corrected the forward lookup zone entry" },
    ]
},
```

4. Save the file. That's it — no migration, no database, no restart needed.

## Adding/renaming categories

Edit the `CATEGORIES` array near the top of `assets/js/data.js`. Each category just
needs a `name` (shown to visitors) and a `slug` (used to link projects to it and in the
filter URL). Make sure every project's `category` field matches one of these slugs exactly.

## Previewing locally

Just open `index.html` in your browser — no server needed for basic use. If images
don't load due to browser file:// restrictions, run a quick local server instead:

```bash
# from inside this folder
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploying to GitHub Pages

1. Create a new GitHub repository and push this whole folder to it (as the repo root,
   or into a `/docs` folder — your choice).
2. In the repo, go to **Settings → Pages**.
3. Under **Source**, choose the branch (usually `main`) and the folder (`/ (root)` or
   `/docs`, matching where you put these files).
4. Save. GitHub will give you a URL like `https://yourusername.github.io/repo-name/`
   within a minute or two.

That's the whole deployment — no server, no build, no environment variables.

## What changed from the Laravel version

- No database, no PHP, no admin login — this is meant to be hand-edited and redeployed
  by pushing to GitHub, which fits a portfolio that doesn't change every day.
- All the visitor-facing features carried over as-is: category filtering, the screenshot
  gallery, the lightbox with zoom-on-click, Prev/Next navigation, arrow-key support, and
  per-screenshot captions.
- If you ever want the admin-panel/database version back (e.g. for a host that does run
  PHP, like Railway or a shared host), that's the Laravel project from earlier in this
  conversation — the two aren't meant to merge, they're for different hosting situations.
