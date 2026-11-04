# GMC Robotics Club

A clean, responsive club website with a white, navy and cornflower-blue theme. Uses Space Grotesk headings and DM Sans body text, with system font fallbacks. No runtime dependencies or student data storage.

## Pages

- `index.html`: announcements, three teams, next event, official resources and Google Classroom buttons.
- `faq.html`: searchable, category-filtered FAQ with native, keyboard-accessible dropdowns.
- `calendar.html`: monthly calendar, year selector, season timeline and countdown for every listed event.
- `config.js`: **edit this file to update club information**. FAQs, teams, goals, announcements, resources and event statuses live here.

## Updating events

Use ISO dates such as `2026-10-17`. Add `endDate` for multi-day events. Countdown values use calendar days in `America/New_York`; they do not imply a confirmed start time. Completed events show “Event ended”; multi-day events show “Event in progress” during their date range. The year selector includes events that overlap that year.

`registration` supports:

- `planned`: potential event; registration unverified.
- `invoice`: invoice on file; payment still unverified.
- `confirmed`: paid/confirmed; use only after the sponsor verifies this.

An event listing is not a commitment to attend. Most dates and locations come from the sponsor’s October 14, 2026 snapshot and are visibly marked as unverified. PCCTC Winter Qualifier was checked against the RECF Events listing; Carolina Countdown dates were checked against RECF’s signature schedule. Verify each event again before travel or payment. The sponsor must verify the club’s own registration, payment and participation separately.

Keep student identities, private invitations, contact information, invoices and travel details in Google Classroom. The Classroom link on this site was supplied for public linking; Classroom controls access to its contents.

## Local preview

Open `index.html` directly in a browser, or run:

```sh
npm run dev
```

Then visit `http://localhost:4173`. Search, filters, calendar navigation and countdowns work without network. Google Fonts and external destinations need network access.

## Check and build

```sh
npm run check
npm run build
```

The optional build copies only the seven public site files into `dist/`, keeping project handoff documents out of the deployment. No package installation is required. JavaScript must be enabled for dynamic club content.

## Deploy

The site is hosted on GitHub Pages at https://www.coachw.club/bots/, served from the root of the `main` branch. Pushing to `main` publishes it; no build step is needed. `.nojekyll` makes Pages serve the files as they are. All asset paths are relative.

## Rules and sources

Rules overview checked October 14, 2026. Always follow the latest official manual and Q&A rather than treating this website as the rule authority.

- [RECF Achieve Pinnacle v2.0 manual](https://games.recf.org/achieve/2.0)
- [RECF Events](https://recfevents.org/)
- [RECF Signature Events](https://recf.org/teams/competition/recf-signature-events/)
- [Student-Centered Policy](https://kb.roboticseducation.org/hc/en-us/articles/5449868745367-Student-Centered-Policy)
