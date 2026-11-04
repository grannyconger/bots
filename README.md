# GMC Robotics Club

The robotics club at Greer Middle College Charter High School in Taylors, SC. This site is the season hub for current students and families: the next event, what to prepare, team status and the schedule. Flat orange, mint and black, with Bebas Neue headings and EB Garamond body text. No runtime dependencies and no student data on a server; the prep checklist saves ticks only in each visitor's own browser.

## Pages

- `index.html`: countdown to the next event, prep checklist, announcements, upcoming events, the three teams and official resources.
- `faq.html`: searchable, category-filtered FAQ with native, keyboard-accessible dropdowns.
- `calendar.html`: every listed event with countdowns, then the monthly calendar and year selector.
- `config.js`: **edit this file to update club information**. FAQs, teams, goals, announcements, meetings, the prep checklist, resources and event statuses live here.

## Updating the site

- **Meetings:** add entries to `meetings`, such as `{ when: 'Tuesdays, 3:30–5:00', where: 'Room 101' }`. They appear under "Right now"; nothing shows while the list is empty.
- **Announcements:** add `expires: '2026-11-07'` and the announcement disappears after that date.
- **Team photos:** put the file in `assets/` and add `photo: 'assets/robros.jpg', photoAlt: 'What the picture shows'` to the team. It replaces the drawing. Tiles are 4:5 portrait. Get school permission before using any picture of a student.
- **Event headline:** `short` is the name in the home page headline. Keep it to about 12 characters.
- **Picture credits:** the strip uses open-licence pictures that don't show the club. `assets/credits.json` lists their sources; keep the footer credits while they're in use.

## Updating events

Use ISO dates such as `2026-10-17`. Add `endDate` for multi-day events. Countdown values use calendar days in `America/New_York`; they do not imply a confirmed start time. Completed events show “Event ended”; multi-day events show “Event in progress” during their date range. The year selector includes events that overlap that year.

`entries` lists each registered team and its status, for example `entries: { Robros: 'confirmed', 'Hyper Focus': 'waitlisted' }`. Leave it out when no team is registered.

- `confirmed`: the team's place is confirmed.
- `semi`: semi-confirmed.
- `waitlisted`: the team is on the waitlist.

The home page headline and event list use only events with a registered team. Events without one stay on the calendar under "No team registered". Each team tile lists that team's own events.

An event listing is not a commitment to attend. Most dates and locations come from the sponsor’s October 14, 2026 snapshot and are visibly marked as unverified. PCCTC Winter Qualifier was checked against the RECF Events listing; Carolina Countdown dates were checked against RECF’s signature schedule. Verify each event again before travel or payment. The sponsor must verify the club’s own registration, payment and participation separately.

Keep student identities, private invitations, contact information, invoices and travel details in Google Classroom. The Classroom link on this site was supplied for public linking; Classroom controls access to its contents.

## Local preview

Open `index.html` directly in a browser, or run:

```sh
npm run dev
```

Then visit `http://localhost:4173`. Search, filters, calendar navigation and countdowns work without network. Google Fonts and external destinations need network access.

## Check

```sh
npm run check
```

## Deploy

The site is hosted on GitHub Pages at https://www.coachw.club/bots/, served from the root of the `main` branch. Pushing to `main` publishes it; no build step is needed. `.nojekyll` makes Pages serve the files as they are. All asset paths are relative.

## Rules and sources

Rules overview checked October 14, 2026. Always follow the latest official manual and Q&A rather than treating this website as the rule authority.

- [RECF Achieve Pinnacle v2.0 manual](https://games.recf.org/achieve/2.0)
- [RECF Events](https://recfevents.org/)
- [RECF Signature Events](https://recf.org/teams/competition/recf-signature-events/)
- [Student-Centered Policy](https://kb.roboticseducation.org/hc/en-us/articles/5449868745367-Student-Centered-Policy)
