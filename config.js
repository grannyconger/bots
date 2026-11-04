/* EDIT THIS FILE to update your club website. Keep student names, invite codes,
   emergency contacts, billing details and private schedules inside Google Classroom. */
window.CLUB = {
  name: 'GMC Robotics Club',
  classroomUrl: 'https://classroom.google.com/c/ODkyMjI2MjE1NDIw',
  timeZone: 'America/New_York',
  contentReviewed: '2026-10-14',
  school: 'Greer Middle College Charter High School',
  season: '2026–2027',
  tagline: 'Build. Code. Compete. Learn.',
  primaryCommunication: 'Google Classroom',
  secondaryCommunication: 'GroupMe',
  // Add a meeting like { when: 'Tuesdays, 3:30–5:00', where: 'Room 101' }. The section stays hidden while this is empty.
  meetings: [{ when: 'Wednesdays, 3:00–4:00 pm', where: 'Meet in Coach Weaver’s room to start.' }],
  prepChecklist: ['Registration and payment checked', 'Transport and adult supervision set', 'Required forms done', 'Robot ready for inspection', 'Student-written code tested', 'Batteries charged, notebook and tools packed'],
  // Optional per team: photo: 'assets/robros.jpg', photoAlt: 'What the picture shows'. Without a photo the drawing is used.
  teams: [
    { name: 'Robros', drawing: 'robot', status: 'Established', members: '4 students', description: 'Returning competition team', goal: 'Prepare for inspection and confirm tournament readiness', leaders: 'Co-captains to be confirmed' },
    { name: 'Wubba Duckies', drawing: 'duck', status: 'Established', members: '4 students', description: 'Returning competition team', goal: 'Test code and coordinate competition preparation', leaders: 'Co-captains to be confirmed' },
    { name: 'Hyper Focus', drawing: 'focus', status: 'Forming', members: '8 interested', description: 'New team building its first competition robot', goal: 'Finalize membership, roles and equipment purchasing', leaders: 'Co-captains to be selected' }
  ],
  announcements: [
    { label: 'Coming up', expires: '2026-10-17', title: 'October 17: Mann Achieve Season Opener', detail: 'Existing teams: confirm registration, payment, inspection readiness, transportation, and adult supervision.' },
    { label: 'New team', title: 'Recruitment and equipment planning', detail: 'Hyper Focus members and roles are being finalized. No equipment orders have been placed yet.' },
    { label: 'New', title: 'Leadership interest form', detail: 'Students will be invited to indicate technical and operations co-captain interest.' }
  ],
  events: [
    { date: '2026-10-17', name: 'Mann Achieve Season Opener', short: 'Mann Opener', location: 'Greenville, SC', registration: 'invoice', teams: 'Existing teams (participation to confirm)', source: 'https://recfevents.org/', verification: 'Sponsor snapshot · date/location not independently verified' },
    { date: '2026-11-07', name: 'Battle at the Branch Qualifier', short: 'The Branch', location: 'Seabrook, SC', registration: 'planned', teams: 'Potential event · club participation not confirmed', source: 'https://recfevents.org/', verification: 'Sponsor snapshot · date/location not independently verified' },
    { date: '2026-11-07', name: 'Battle at the Ridge', short: 'The Ridge', location: 'Greer, SC', registration: 'invoice', teams: 'Existing teams (participation to confirm)', source: 'https://recfevents.org/', verification: 'Sponsor snapshot · date/location not independently verified' },
    { date: '2026-11-14', name: 'Clover Clash', short: 'Clover Clash', location: 'Clover, SC', registration: 'planned', teams: 'Potential event · club participation not confirmed', source: 'https://recfevents.org/', verification: 'Sponsor snapshot · date/location not independently verified' },
    { date: '2026-12-05', name: 'Bot Battle at the Bluff', short: 'The Bluff', location: 'Lexington, SC', registration: 'planned', teams: 'Potential event · club participation not confirmed', source: 'https://recfevents.org/', verification: 'Sponsor snapshot · date/location not independently verified' },
    { date: '2026-12-12', name: 'Mann Winter Qualifier', short: 'Mann Winter', location: 'Greenville, SC', registration: 'planned', teams: 'Potential event · club participation not confirmed', source: 'https://recfevents.org/', verification: 'Sponsor snapshot · date/location not independently verified' },
    { date: '2026-12-31', endDate: '2027-01-01', name: 'Carolina Countdown (Achieve HS)', short: 'Carolina', location: 'Greenville, SC', registration: 'invoice', teams: 'Existing teams (participation to confirm)', source: 'https://recf.org/teams/competition/recf-signature-events/', verification: 'RECF signature schedule checked October 14, 2026' },
    { date: '2027-01-09', name: 'Wildcats Robotics Competition', short: 'Wildcats', location: 'Lexington, SC', registration: 'planned', teams: 'Potential event · club participation not confirmed', source: 'https://recfevents.org/', verification: 'Sponsor snapshot · date/location not independently verified' },
    { date: '2027-01-16', name: 'PCCTC Winter Qualifier', short: 'PCCTC Winter', location: 'Liberty, SC', registration: 'invoice', teams: 'Existing teams (participation to confirm)', source: 'https://recfevents.org/Events/ApprovedEvents?page=32', verification: 'RECF listing checked October 14, 2026' },
    { date: '2027-01-30', name: 'Sparks Winter Qualifier', short: 'Sparks', location: 'Pickens, SC', registration: 'planned', teams: 'Potential event · club participation not confirmed', source: 'https://recfevents.org/', verification: 'Sponsor snapshot · date/location not independently verified' },
    { date: '2027-02-13', name: 'PCCTC Last Chance SOLO Event', short: 'Last Chance', location: 'Liberty, SC', registration: 'planned', teams: 'Potential event · club participation not confirmed', source: 'https://recfevents.org/', verification: 'Sponsor snapshot · date/location not independently verified' },
  ],
  resources: [
    { title: 'Official Achieve Pinnacle Manual', description: 'Current rules and game explanation', url: 'https://games.recf.org/achieve/2.0', group: 'Competition' },
    { title: 'RECF Game Resources', description: 'Scoring, inspection, quick guides and training', url: 'https://kb.roboticseducation.org/hc/en-us/articles/4461386798743-RECF-Achieve-Robotics-Competition-Game-Manual-and-Resources', group: 'Competition' },
    { title: 'RECF Events', description: 'Team registration and tournament details', url: 'https://recfevents.org/', group: 'Competition' },
    { title: 'RECF Student-Centered Policy', description: 'How students and mentors work together', url: 'https://kb.roboticseducation.org/hc/en-us/articles/5449868745367-Student-Centered-Policy', group: 'Policies' },
    { title: 'VEXcode', description: 'Robot programming software and getting started', url: 'https://www.vexrobotics.com/vexcode', group: 'Learning' },
    { title: 'RECF Team Registration Guide', description: 'Create and manage organization teams', url: 'https://kb.roboticseducation.org/hc/en-us/articles/41246659324311-Registering-Teams-in-RECFEvents', group: 'Policies' }
  ],
  faq: [
    { category:'Getting started', q:'When and where does the club meet?', a:'Wednesdays, 3:00–4:00 pm. Meet in Coach Weaver’s room to start.' },
    { category:'Events', q:'What should we prepare before a tournament?', a:'With your team and sponsor, check registration and payment, transport, adult supervision, required forms and inspection readiness. Test your student-written code, charge approved batteries and organize your notebook and tools. Final logistics belong in Classroom.' },
    { category:'Events', q:'What must happen before a robot competes?', a:'The robot must meet the latest technical and sizing rules and pass inspection. Teams must check in, complete required releases, and have a responsible adult supervising at the event.' },
    { category:'Events', q:'Where do I find upcoming competitions?', a:'Open the Calendar page for season events and countdowns. Dates may change, and potential events are not commitments to attend. An invoice does not confirm a paid registration; check with the sponsor and RECF Events.' },
    { category:'Communication', q:'Where are official announcements posted?', a:'Google Classroom is the primary channel for announcements, deadlines and documents. GroupMe is a secondary coordination channel, used according to school communication rules.' },
    { category:'Communication', q:'How do I join Classroom or GroupMe?', a:'Ask the club sponsor in person or through an approved school communication method. Private invite codes are not posted on this public website.' },
    { category:'Basics', q:'What competition do we compete in?', a:'RECF Achieve Robotics Competition. The 2026–27 game is called Pinnacle. The robot competes on a 12-by-12-foot field.' },
    { category:'Basics', q:'How does Pinnacle work?', a:'Robots collect and arrange pins and cups on goals and can manipulate rollers to score points. The exact scoring and restrictions are in the latest official game manual.' },
    { category:'Basics', q:'What kinds of matches are there?', a:'Solo driving uses a controller. Solo coding uses a student-written autonomous program. Alliance matches pair two teams against two other teams. Teams can also be judged on interviews and their engineering notebook.' },
    { category:'Basics', q:'How do teams reach state or world championships?', a:'Local qualifying events can advance teams to regional championships, which can qualify them for Worlds. Specific spots and criteria depend on current RECF qualifying rules and event results.' },
    { category:'Teams', q:'How many students can join a team?', a:'Achieve allows teams with one or more students. There is no fixed eight-student limit in the current Achieve rules. We will arrange roles and hands-on opportunities to keep participation meaningful.' },
    { category:'Teams', q:'What do co-captains do?', a:'Technical co-captains coordinate building, coding and testing. Operations co-captains coordinate schedules, attendance, documentation and communication. Students remain responsible for all engineering decisions.' },
    { category:'Teams', q:'Can everyone drive at tournaments?', a:'Not necessarily in every match. The official rules limit the number of students at the field for each match. Teams should create fair practice and rotation opportunities.' },
    { category:'Teams', q:'Can adults build or program the robot for us?', a:'No. RECF is student-centered. Adults can teach ideas and help students learn, but may not create the robot design, code, or match strategy for students.' },
    { category:'Teams', q:'Do we need an engineering notebook?', a:'Record your own ideas, tests, results and revisions as you work. Students must write their notebook themselves. Check section 6 of the official Achieve manual for judging and AI requirements.' },
    { category:'Events', q:'How much does team registration cost?', a:'Team registration and each tournament have separate fees. Confirm current fees in RECF Events before making a payment; the sponsor coordinates club purchasing.' },
    { category:'Getting started', q:'Do I need experience to join?', a:'Talk to the sponsor about joining. Hyper Focus is forming, and roles are still being finalized. Building, coding, testing and documentation all offer ways to learn and contribute.' },
    { category:'Safety', q:'How do we work safely in the robotics space?', a:'Follow school workshop rules and the sponsor’s instructions. Ask before using unfamiliar tools, use the required protective equipment, and keep hands clear of moving mechanisms. Report damaged batteries, loose wiring and unsafe equipment immediately.' },
    { category:'Equipment', q:'Has Hyper Focus’s equipment been ordered?', a:'Starter-kit funding has been approved, but no equipment order has been placed. Ask the sponsor for the latest purchasing status. Any additional parts must be approved before purchase.' },
    { category:'Parents', q:'How can families support the club?', a:'Coordinate with the sponsor through an approved school channel about event logistics and supervision. Encourage students to explain their work and solve problems themselves. Adults can guide learning; students own design and code.' },
    { category:'Troubleshooting', q:'What should I do when the robot or code stops working?', a:'Stop the robot safely, describe what happened, and work with teammates to isolate one issue at a time. Record tests and results. Ask a student mentor or supervising adult to help you learn the troubleshooting process.' }
  ]
};
