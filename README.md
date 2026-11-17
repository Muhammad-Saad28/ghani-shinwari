# Ghani Shinwari Restaurant — Premium Website

> **"Authentic Shinwari Taste. A Tradition Worth Sharing."**  
> Complete, modern, and visually impressive restaurant website for **Ghani Shinwari Restaurant**, dedicated to authentic Shinwari & Peshawari cuisine.

---

## 1. Brand Identity & Strict Color Distribution

The design strictly follows the requested brand color ratio:

* **Warm Alabaster (60%)** (`#F7F2E8`): Main backgrounds, spacious section layouts, and content containers.
* **Deep Crimson Red (30%)** (`#8F1725`): Hero background, navigation details, buttons, and prominent visual accents.
* **Golden Yellow (10%)** (`#E6B83F`): Refined highlights, decorative icons, badges, borders, and interactive accents.
* **Charcoal Coal** (`#292522`): Primary typography and heading contrasts.
* **Sand Beige** (`#DED2BE`): Subtle structural borders and dividing lines.

---

## 2. Technology Stack

* **Framework**: Next.js 16.4+ (App Router, Turbopack enabled)
* **Library**: React 19.3+
* **Language**: TypeScript in strict mode
* **Styling**: Tailwind CSS v4 with bespoke token variables
* **Typography**: `Cormorant Garamond` (Editorial Serif) + `Plus Jakarta Sans` (Clean Modern Sans)
* **Icons**: `lucide-react` + bespoke SVG icons
* **Interactivity**: Filterable menus, modal lightboxes, responsive mobile drawer navigation
* **Data Architecture**: Centralized JavaScript/TypeScript data files (`src/lib/menu-data.ts`, `src/lib/content-data.ts`, `src/lib/config.ts`) — **No database or external backend dependencies required**.

---

## 3. Implemented Website Sections

1. **Section 1 — Navigation (`Navbar.tsx`)**:
   * Brand wordmark: *GHANI SHINWARI Traditional Cuisine*.
   * Links: *Home, About, Our Menu, Signatures, Gallery, Experience, Contact*.
   * Instagram link with direct icon to [https://www.instagram.com/ghani_shinwari/](https://www.instagram.com/ghani_shinwari/).
   * Prominent **"Explore Menu"** CTA button.
   * Seamless transition on scroll from transparent to warm alabaster with subtle backdrop blur.
   * Full slide-out mobile drawer navigation for smartphones and tablets.

2. **Section 2 — Hero Section (`Hero.tsx`)**:
   * Deep crimson red background (`#8F1725`) with subtle warm amber ambient gradients.
   * Large authentic food photography of sizzling Shinwari Mutton Karahi in a cast-iron wok.
   * Tagline: *"Authentic Shinwari Taste. A Tradition Worth Sharing."*
   * Supporting text: *"Experience the rich flavours of traditional Shinwari cuisine, freshly prepared with authentic ingredients and passion."*
   * Dual CTAs: **"Explore Our Menu"** and **"Discover Our Story"**.

3. **Section 3 — Restaurant Introduction (`AboutSection.tsx`)**:
   * Split-screen layout:
     * Left: Visual dining experience and live fire cooking with an editorial quote box.
     * Right: Heading *"Where Tradition Meets Taste"*, tribal culinary history from Khyber, and 4 core value highlights.

4. **Section 4 — Signature Dishes (`SignatureDishes.tsx`)**:
   * Features all 6 primary dishes with individual photography and exact half/full pricing:
     1. **Shinwari Karahi**
     2. **Sulemani Karahi**
     3. **Namkeen Tikka**
     4. **Rosh Masala & Yakhni**
     5. **Mutton Kabli Pulao**
     6. **Peshawari Sajji**
   * Asymmetric grid combining large featured cards with supporting cards.

5. **Section 5 — Complete Menu (`MenuSection.tsx`)**:
   * **100% faithful reproduction of all items and prices from the restaurant's menu**:
     * **Mutton (بکرا)**: Shinwari Karahi (Half 2000 | Full 3800), Sulemani Karahi (Half 2000 | Full 3800), Namkeen Tikka (Half 2000 | Full 3800), Qeema with bone (Half 2000 | Full 3800), Mutton Kabli Pulao (Half 800 | Full 1600), Rosh Masala & Yakhni (Half 2100 | Full 4000), Machli Rosh (4200), Machli Karahi (4200).
     * **Lamb (دنبه)**: Shinwari Karahi (Half 1900 | Full 3700), Sulemani Karahi (Half 1900 | Full 3700), Namkeen Tikka (Half 1900 | Full 3700), Qeema with bone (Half 1900 | Full 3700), Rosh Masala & Yakhni (Half 2100 | Full 4000), Machli Rosh (4200).
     * **BAR.B.Q**: Chicken Full BBQ (1990), Chicken Kabab 5Pcs (1290), Chicken Botti 10Pcs (1290), Malai Botti 10Pcs (1390), Reshmi Kabab 4Pcs (1390), Cheese Kabab 4Pcs (1390), Kastori Botti 10Pcs (1390), Shesh Tauk (1490), Hara Bhara Kabab (1390), Chicken Piece (690), Peshawari Sajji Full (2490).
     * **Chicken**: Shinwari Karahi (Half 1200 | Full 2200), Sulemani Karahi (Half 1200 | Full 2200).
     * **Beef**: Chapli Kabab (Half 900 | Full 1800), Kabli Pulao (Half 690 | Full 1090).
     * **Tandoori**: Kalwanji Naan (190), Kandhari Naan (190).
     * **Drinks**: Mineral Water (Small 90 | Large 190), Can (190), Fresh Lime (180), Mint Margarita (250), Special Peshawari Qahwa (90), Tandoori Chai (200), Doodh Patti (250).
     * **Raita & Salad**: Russian (Half 300 | Full 600), Fresh Salad (170), Mint Zeera Raita (180), Green Sauce (80).
   * Interactive category filtering tabs with smooth switching and zero page reloads.

6. **Section 6 — Food Experience / Gallery (`GallerySection.tsx`)**:
   * Rich asymmetric masonry gallery featuring Mutton Karahi, Charcoal BBQ, Peshawari Rosh, Kandahari Naan, Peshawari Sajji, Chapli Kabab, and the evening dining experience.
   * Built-in interactive modal lightbox for full-screen inspection with caption and zoom controls.

7. **Section 7 — Why Choose Ghani Shinwari (`ExperienceSection.tsx`)**:
   * 4 pillars: *Authentic Shinwari Cuisine, Traditional Live Cooking, Freshly Prepared Food, and Rich Traditional Flavours*.

8. **Section 8 — Instagram Section (`InstagramSection.tsx`)**:
   * Heading: *"Follow the Flavour"*
   * Supporting text: *"Explore our food, flavours and dining experience."*
   * Active Follow CTA button linking directly to [https://www.instagram.com/ghani_shinwari/](https://www.instagram.com/ghani_shinwari/).
   * 4-grid visual photography cards showcasing the food sizzle.

9. **Section 9 — Contact & Location (`LocationSection.tsx`)**:
   * Clear, uninvented location and contact placeholders ready for owner updates.
   * Google Maps directions CTA button.
   * Direct Instagram message CTA.

10. **Section 10 — Footer (`Footer.tsx`)**:
    * Deep crimson background (`#8F1725`) with golden yellow accent borders (`#E6B83F`).
    * Urdu typography crest: **غنی شنواری**.
    * Quick links, location placeholders, authentic guarantee card, and copyright details.

---

## 4. How to Run the Project

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# Server runs at http://localhost:3000

# Run TypeScript type check
npx tsc --noEmit

# Build production bundle
npm run build

# Start production server
npm start
```
