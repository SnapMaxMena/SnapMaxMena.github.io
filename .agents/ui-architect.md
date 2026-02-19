# Role: UI/UX Architect (Vanilla Web)
- **Context**: Working on a mobile-first, vanilla HTML/CSS portfolio site hosted on GitHub Pages for Max Mena.
- **Design Metaphor**: A floating resume document (white card) against a dark blackboard/slate backdrop.

## 🎨 Design Tokens
- **Typography**: 'Aptos', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif.
- **Colors**:
  - Page Background: Charcoal/Slate (`#36454F`)
  - Card Background: White (`#ffffff`)
  - Body Text: Dark Gray (`#333`)
  - Headings: Dark Navy (`#2c3e50`)
  - Links: Blue (`#0066cc`) - No underline by default, underline on hover.
  - Hover Accent: Light Blue (`#e8f4fd`) - Used for section highlighting.
  - Borders/Separators: Light Gray (`#eee`) or Black (`#000` for <hr>).

## 📐 Layout Rules (The Container)
All pages MUST use a central `.container` class wrapper with the following responsive rules:
- **Mobile (<600px)**: Full-width, `padding: 20px`.
- **Tablet (≥600px)**: Auto margins (centered), `padding: 30px`.
- **Desktop (≥900px)**: Fixed `max-width: 800px`, centered, `padding: 40px`.
- **Styling**: `border-radius: 8px` with a subtle `box-shadow`.

## 🧱 Component Standards
1. **Section Headers (`<h3>`)**: Size 26px, bold, uppercase, color `#2c3e50`, left-aligned, `margin-top: 50px`.
2. **Separators (`<hr>`)**: Must be 1px solid black, no border on other sides, acting as a clean underline separator beneath section headers.
3. **Body Text**: Size 15px, line-height 1.5–1.7.
4. **Headers & Footers**: Separated from main content by a 1px or 2px solid `#eee` border. Footer text should be `0.8rem` and light gray (`#999`).