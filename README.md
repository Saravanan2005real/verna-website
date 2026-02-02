# VernaTech — Software and IT Solutions

Premium marketing website for VernaTech, built with the logo theme (primary **#1A4E95**, accent **#2397B8**).

## Logo

Place your VernaTech logo file as **`assets/logo.png`** so the header and footer display it correctly.  
If you already have the logo in another location, either copy it to `assets/logo.png` or update the `src` in `index.html` for the two `<img>` tags that use the logo.

## Run locally

Open **`index.html`** in a browser, or use a simple local server:

```bash
# Python
python -m http.server 8000

# Node (npx)
npx serve .
```

Then visit `http://localhost:8000` (or the port shown).

## Customize

- **Services & copy**: Edit `index.html` to change headlines, service titles, descriptions, and contact details.
- **Colors**: Adjust the CSS variables in `styles.css` (`:root`) to tweak the theme.
- **Contact form**: The form currently opens the default mail client. To send to a backend, change the `submit` handler in `script.js`.

## Structure

- `index.html` — Single-page layout (Hero, Services, Why Us, About, Contact)
- `styles.css` — Theme, layout, and responsive styles
- `script.js` — Navigation, smooth scroll, active link, form behavior, scroll reveal
