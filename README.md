# Dr. Ramarao Maharaj Primary School — Website

A clean, minimal, and professional school website built with pure HTML, CSS, and JavaScript. No frameworks, no dependencies except Google Fonts.

---

## 📁 Project Structure

```
school-website/
│
├── index.html                  ← Homepage (entry point)
│
├── pages/
│   ├── admissions.html         ← Admissions page
│   ├── enquiry.html            ← Enquiry / Contact form page
│   └── blog.html               ← Blog / News page
│
├── css/
│   └── style.css               ← Shared stylesheet (all pages use this)
│
├── js/
│   ├── main.js                 ← Shared JS: nav toggle, active link detection
│   └── enquiry.js              ← Form validation and submission handler
│
├── images/                     ← (Empty) Place your images here
│   ├── logo-saraswati.png      ← Saraswati image for header (replace placeholder)
│   ├── maharaj.png             ← Dr. Ramarao Maharaj photo for header
│   ├── campus.jpg              ← School campus / building photo
│   ├── events/                 ← Event photos (event-1.jpg, event-2.jpg, ...)
│   └── blog/                   ← Blog post thumbnail images
│
└── README.md                   ← This file
```

---

## 🎨 Design System

| Token         | Value     | Usage                        |
|---------------|-----------|------------------------------|
| `--orange`    | `#E8600A` | Primary accent, buttons, CTA |
| `--orange-dark` | `#C04F06` | Hover states                |
| `--black`     | `#111111` | Text, backgrounds            |
| `--gray`      | `#444444` | Body text, subtitles         |
| `--light-gray`| `#F5F5F5` | Alternate section backgrounds|
| `--border`    | `#E0E0E0` | Card borders, dividers       |
| `--white`     | `#ffffff` | Backgrounds, text on dark    |

**Fonts (loaded from Google Fonts):**
- `Poppins` — main interface font (300, 400, 500, 600, 700, 800)
- `Noto Sans Kannada` — for Kannada text in the header (400, 600, 700)

---

## 📄 Pages

### 1. `index.html` — Homepage
- Topbar with address and phone
- Header: Saraswati image | School name (English + Kannada) | Maharaj photo
- Sticky navigation bar with hamburger menu for mobile
- **Hero** section with tagline and CTA buttons
- **Stats bar** (Navodaya selections, classes, medium, hostel)
- **About** section with 2-column layout
- **Features** section (4 cards)
- **Recent Events** gallery (6 cards + YouTube embed placeholder)
- **CTA Banner** for admissions
- Footer with 4 columns

### 2. `pages/admissions.html` — Admissions
- Page hero (dark background)
- 10 class cards: LKG, UKG, 1st–8th (Classes 3–5 highlighted for Navodaya)
- Facilities list + key dates
- Apply card with phone numbers
- 4-step admission process section
- CTA banner

### 3. `pages/enquiry.html` — Enquiry / Contact
- Page hero
- **Left:** Enquiry form with fields:
  - Full Name (required)
  - Phone Number + Alternate Phone
  - Student's Name
  - Class Interested (dropdown)
  - Hostel Required (dropdown)
  - Village / Town
  - Message / Questions
- Client-side validation with error and success messages
- **Right:** Contact info (phone, address, head teacher, hours), notice box, map placeholder

### 4. `pages/blog.html` — Blog
- Page hero
- Category filter buttons (UI only, extend with JS for filtering)
- 1 featured blog post (wide card, 2-column)
- 6 standard blog cards in a 3-column grid
- CTA banner

---

## 🚀 How to Use

### Open Locally
No server required. Just open `index.html` in any modern browser.

```
Double-click  →  index.html
```

All internal links work relatively, so navigation between pages works without a server.

### Deploy Online
Upload the entire `school-website/` folder to any web host:
- **cPanel hosting** — Upload via File Manager to `public_html/`
- **GitHub Pages** — Push to a repo, enable Pages from Settings
- **Netlify / Vercel** — Drag and drop the folder

---

## 🖼 Replacing Image Placeholders

Currently all image slots show a dashed placeholder box. To replace them:

### Header Images (Saraswati + Maharaj)
In every HTML file, find:
```html
<div class="logo-placeholder">Saraswati Image</div>
```
Replace with:
```html
<img src="images/logo-saraswati.png" alt="Saraswati" class="logo-img" style="width:70px;height:70px;border-radius:50%;object-fit:cover;" />
```

### Event Photos (`index.html`)
Find each:
```html
<div class="img-placeholder event-thumb">...</div>
```
Replace with:
```html
<img src="images/events/event-1.jpg" alt="Navodaya Selection 2025" style="width:100%;aspect-ratio:4/3;object-fit:cover;" />
```

### Blog Thumbnails (`pages/blog.html`)
Same pattern — replace `.img-placeholder.blog-thumb` divs with `<img>` tags.

---

## 📹 Embedding a YouTube Video

In `index.html`, find the comment inside `.yt-wrapper`:
```html
<!--
  TO EMBED A YOUTUBE VIDEO: Replace the block below with:
  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
    title="School Video" frameborder="0" allowfullscreen></iframe>
-->
```
1. Go to YouTube → your video → Share → Embed
2. Copy the `src` URL (e.g. `https://www.youtube.com/embed/dQw4w9WgXcQ`)
3. Replace `YOUR_VIDEO_ID` in the comment and uncomment the `<iframe>`
4. Delete the placeholder icon/label div

---

## 🗺 Embedding Google Maps

In `pages/enquiry.html`, find `.map-placeholder` and replace it with:
```html
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
  width="100%" height="300" style="border:0;border-radius:6px;"
  allowfullscreen="" loading="lazy"
  referrerpolicy="no-referrer-when-downgrade">
</iframe>
```
Get the embed code: Google Maps → Share → Embed a map → Copy HTML.

---

## ✏️ Updating School Information

All school details appear in every HTML file. The key information blocks are:

| Information          | Location in HTML              |
|----------------------|-------------------------------|
| Topbar address/phone | `.topbar` div (top of `<body>`) |
| Header school name   | `.school-identity` in `<header>` |
| Kannada name         | `.kannada-name` span            |
| Location text        | `.location` paragraph           |
| Footer contact       | `.footer-col` (last column)     |
| Phone links          | `href="tel:XXXXXXXXXX"`         |

To update, use **Find & Replace** in your code editor (VS Code, Notepad++):
- Search: `Paltya Tanda, Seri Cross`
- Replace with your updated address

---

## 📱 Responsive Breakpoints

| Breakpoint | Layout Changes                                      |
|------------|-----------------------------------------------------|
| < 960px    | 4-col grids become 2-col; about section stacks      |
| < 640px    | Most grids become 1-col; hamburger nav activates    |

---

## 🔧 Customisation Guide

### Change Primary Color
In `css/style.css`, find `:root` and update `--orange`:
```css
:root {
  --orange: #E8600A;  ← Change this to your preferred color
}
```

### Add a New Page
1. Copy `pages/blog.html` as a template
2. Update `<title>`, `<meta description>`, nav `class="active"` link
3. Change `href` paths: `../css/style.css`, `../js/main.js`
4. Add your content inside `<!-- MAIN SECTION -->`
5. Add a link to the new page in every other page's `<nav>`

### Add a New Blog Post
Copy any `.blog-card` block in `pages/blog.html` and update:
- `.blog-cat` — category label
- `.blog-date` — date of post
- `h3` — post title
- `p` — short description
- `.blog-link href` — link to full post (or `#` for now)

---

## 📞 School Contact Details

| Item           | Details                                          |
|----------------|--------------------------------------------------|
| **School Name** | Dr. Ramarao Maharaj Primary School              |
| **Kannada**     | ಡಾ. ರಾಮರಾವ ಮಹಾರಾಜ ಹಿರಿಯ ಪ್ರಾಥಮಿಕ ಶಾಲೆ        |
| **Address**     | Paltya Tanda, Seri Cross, Salgar Basantpur       |
| **Taluk**       | Chincholi                                        |
| **District**    | Kalaburagi, Karnataka                            |
| **Phone 1**     | 7483586279                                       |
| **Phone 2**     | 9741617557                                       |
| **Phone 3**     | 9321771082                                       |
| **Head Teacher** | Sri Motiram Nayak (Adhyapaka)                  |
| **Medium**      | Kannada                                          |
| **Classes**     | LKG to 8th Standard                             |
| **Organisation**| Jagath Janani Krishi & Gramina Abhivrudhi Samsthe (R) |

---

## 🏗 Built With

- **HTML5** — semantic, accessible markup
- **CSS3** — custom properties, grid, flexbox
- **Vanilla JavaScript** — no frameworks
- **Google Fonts** — Poppins + Noto Sans Kannada

---

*© 2026 Dr. Ramarao Maharaj Primary School. All rights reserved.*
