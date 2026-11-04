'use strict';
(() => {
  const d = window.CLUB;
  if (!d) return;
  const $ = selector => document.querySelector(selector);
  const el = (tag, cls, text) => {
    const node = document.createElement(tag);
    if (cls) node.className = cls;
    if (text !== undefined) node.textContent = text;
    return node;
  };
  const external = (url, text, cls = '') => {
    const a = el('a', cls, text);
    a.href = url; a.target = '_blank'; a.rel = 'noopener noreferrer';
    return a;
  };
  document.querySelectorAll('[data-classroom]').forEach(a => a.href = d.classroomUrl);
  document.querySelectorAll('[data-season]').forEach(n => n.textContent = d.season);
  $('#copyright-year').textContent = new Intl.DateTimeFormat('en', { year: 'numeric', timeZone: d.timeZone }).format(new Date());
  const dateValue = date => new Date(`${date}T12:00:00Z`);
  const format = (date, options) => new Intl.DateTimeFormat('en-US', { ...options, timeZone: 'UTC' }).format(dateValue(date));
  const ordinal = date => Date.parse(`${date}T00:00:00Z`) / 86400000;
  const today = () => {
    const parts = new Intl.DateTimeFormat('en-US', { timeZone: d.timeZone, year: 'numeric', month: '2-digit', day: '2-digit' }).formatToParts(new Date());
    const value = type => parts.find(p => p.type === type).value;
    return `${value('year')}-${value('month')}-${value('day')}`;
  };
  const rank = { confirmed: 0, invoice: 1, planned: 2 };
  const events = [...d.events].sort((a, b) => a.date.localeCompare(b.date) || rank[a.registration] - rank[b.registration] || a.name.localeCompare(b.name));
  const ended = event => ordinal(today()) > ordinal(event.endDate || event.date);
  const remaining = event => {
    const current = ordinal(today());
    if (ended(event)) return 'Event ended';
    if (current >= ordinal(event.date)) return event.endDate && event.date !== event.endDate ? 'Event in progress' : 'Today';
    const days = ordinal(event.date) - current;
    return `${days} day${days === 1 ? '' : 's'} to go`;
  };
  const dateLabel = event => event.endDate ? `${format(event.date, { month: 'short', day: 'numeric', year: 'numeric' })} – ${format(event.endDate, { month: 'short', day: 'numeric', year: 'numeric' })}` : format(event.date, { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
  const statuses = { invoice: 'Invoice on file · payment unverified', planned: 'Planned · registration unverified', confirmed: 'Paid / confirmed' };
  const status = event => el('span', `status ${event.registration}`, statuses[event.registration] || statuses.planned);
  const sourceLink = event => external(event.source, event.source === 'https://recfevents.org/' ? 'Search RECF Events' : 'Official event information');
  const attachCount = (node, event) => {
    node.dataset.countdown = event.date;
    node.textContent = remaining(event);
  };

  function renderLineup(target, list, withLinks) {
    target.replaceChildren();
    const groups = [
      ['Paid and confirmed', e => !ended(e) && e.registration === 'confirmed'],
      ['Invoice on file, payment unverified', e => !ended(e) && e.registration === 'invoice'],
      ['Possible, registration unverified', e => !ended(e) && e.registration === 'planned'],
      ['Finished', ended]
    ];
    groups.forEach(([title, test]) => {
      const rows = list.filter(test);
      if (!rows.length) return;
      const group = el('div', 'lineup-group');
      group.append(el('h3', '', title));
      rows.forEach(event => {
        const row = el('div', `lineup-row${withLinks ? ' with-link' : ''}`), count = el('span', 'lineup-count');
        row.dataset.rise = '';
        attachCount(count, event);
        row.append(el('span', 'lineup-name', event.name), el('span', 'lineup-place', event.location), count);
        if (withLinks) row.append(sourceLink(event));
        row.append(el('span', 'lineup-date', format(event.date, { month: 'short', day: 'numeric' })));
        group.append(row);
      });
      target.append(group);
    });
    if (!target.children.length) target.append(el('p', 'note', 'No events listed here. Check Classroom for updates.'));
  }

  function renderNext() {
    const target = $('#next-event');
    if (!target) return;
    const lead = events.find(e => !ended(e));
    const setHeadline = (one, two) => {
      document.querySelectorAll('[data-line-one]').forEach(n => { if (n.textContent !== one) n.textContent = one; });
      document.querySelectorAll('[data-line-two]').forEach(n => { if (n.textContent !== two) n.textContent = two; n.dataset.text = two; });
      $('.hero').style.setProperty('--chars', Math.max(one.length, two.length));
    };
    target.replaceChildren();
    if (!lead) {
      setHeadline('Season', 'complete');
      target.append(el('p', 'next-name', 'No upcoming events are listed.'), el('p', '', 'Check Classroom for updates.'));
      return;
    }
    const days = ordinal(lead.date) - ordinal(today());
    setHeadline(days > 1 ? `${days} days to` : days === 1 ? '1 day to' : 'Now at', lead.short || 'Next event');
    target.append(el('p', 'next-name', lead.name), el('p', 'next-when', `${dateLabel(lead)} · ${lead.location}`), status(lead), el('p', 'next-teams', lead.teams));
    const others = events.filter(e => e !== lead && e.date === lead.date);
    if (others.length) target.append(el('p', 'next-also', `Also on this date: ${others.map(e => `${e.name}, ${e.location} (${statuses[e.registration].split(' · ')[0].toLowerCase()})`).join('; ')}.`));
    const actions = el('p', 'next-actions'), calendar = el('a', '', 'See the full calendar');
    calendar.href = 'calendar.html';
    actions.append(calendar, sourceLink(lead));
    target.append(actions);
  }
  renderNext();

  const prep = $('#prep-list');
  if (prep) {
    const lead = events.find(e => !ended(e));
    const key = `gmc-prep-${lead ? lead.date : 'none'}`;
    const read = () => { try { return JSON.parse(localStorage.getItem(key)) || []; } catch { return []; } };
    const write = value => { try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* the list still works for this visit */ } };
    const done = new Set(read());
    const count = () => { $('#prep-count').textContent = `${done.size} of ${d.prepChecklist.length} done. Saved on this device only.`; };
    d.prepChecklist.forEach((item, i) => {
      const row = el('li'), label = el('label'), box = el('input');
      box.type = 'checkbox'; box.checked = done.has(i);
      box.addEventListener('change', () => { box.checked ? done.add(i) : done.delete(i); write([...done]); count(); });
      label.append(box, el('span', '', item));
      row.append(label); prep.append(row);
    });
    count();
  }

  const updates = $('#announcements');
  if (updates) {
    const meetings = (d.meetings || []).map(m => ({ label: 'Meeting', title: m.when, detail: m.where }));
    const current = d.announcements.filter(a => !a.expires || a.expires >= today());
    [...meetings, ...current].forEach(item => {
      const panel = el('article', 'panel');
      panel.dataset.rise = '';
      panel.append(el('h3', '', item.title), el('p', '', item.detail));
      updates.append(panel);
    });
    if (!updates.children.length) updates.closest('section').hidden = true;
  }

  const teams = $('#teams-grid');
  if (teams) d.teams.forEach(item => {
    const tile = el('article', 'team'), art = el('div', `team-art art-${item.drawing || 'three'}`);
    tile.dataset.rise = '';
    if (item.photo) {
      const img = el('img');
      img.src = item.photo; img.alt = item.photoAlt || ''; img.loading = 'lazy';
      art.append(img);
    } else {
      art.innerHTML = `<svg viewBox="0 0 400 400" aria-hidden="true">${item.drawing === 'three' ? '<text x="200" y="305">3</text>' : `<use href="#${item.drawing}"/>`}</svg>`;
    }
    tile.append(art, el('h3', '', item.name), el('p', 'team-status', `${item.status} · ${item.members}`), el('p', '', item.description), el('p', '', `Next focus: ${item.goal}`), el('p', 'team-leaders', item.leaders));
    teams.append(tile);
  });

  const resources = $('#resources-grid');
  if (resources) d.resources.forEach(item => {
    const a = external(item.url, '', 'resource');
    a.dataset.rise = '';
    a.append(el('span', 'resource-title', item.title), el('span', 'resource-text', item.description));
    resources.append(a);
  });

  if ($('body').dataset.page === 'home') renderLineup($('#events-list'), events.filter(e => !ended(e)).slice(0, 6), false);

  const search = $('#faq-search');
  if (search) {
    const filters = $('#faq-filters'), list = $('#faq-list'), count = $('#faq-results');
    let active = 'All questions';
    function renderFaq() {
      const term = search.value.trim().toLowerCase();
      const matches = d.faq.filter(x => (active === 'All questions' || x.category === active) && `${x.q} ${x.a} ${x.category}`.toLowerCase().includes(term));
      list.replaceChildren(); count.textContent = `${matches.length} question${matches.length === 1 ? '' : 's'}`;
      if (!matches.length) { list.append(el('p', 'faq-empty', 'No matching questions. Try another search or choose All questions.')); return; }
      matches.forEach(item => {
        const band = el('article', 'faq-band');
        band.dataset.rise = '';
        band.append(el('h2', '', item.q), el('p', '', item.a));
        list.append(band);
      });
    }
    ['All questions', ...new Set(d.faq.map(x => x.category))].forEach(category => {
      const button = el('button', 'filter', category);
      button.type = 'button'; button.setAttribute('aria-pressed', String(category === active));
      button.addEventListener('click', () => { active = category; filters.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', String(b === button))); renderFaq(); });
      filters.append(button);
    });
    search.addEventListener('input', renderFaq); renderFaq();
  }

  if ($('#calendar-grid')) {
    const current = today().split('-').map(Number), yearSelect = $('#calendar-year');
    let year = current[0] < 2026 ? 2026 : current[0] > 2027 ? 2027 : current[0];
    let month = current[0] < 2026 ? 0 : current[0] > 2027 ? 11 : current[1] - 1;
    let selected = null;
    const iso = day => `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const covers = (event, date) => event.date <= date && (event.endDate || event.date) >= date;
    function renderMonthEvents() {
      const list = $('#month-events'); list.replaceChildren();
      const start = iso(1), end = iso(new Date(Date.UTC(year, month + 1, 0)).getUTCDate());
      const visible = events.filter(e => selected ? covers(e, selected) : e.date <= end && (e.endDate || e.date) >= start);
      $('#month-events-title').textContent = selected ? format(selected, { month: 'long', day: 'numeric' }) : format(start, { month: 'long' });
      if (!visible.length) { list.append(el('p', '', 'No events listed. Check Classroom for practice plans and updates.')); return; }
      visible.forEach(event => {
        const card = el('article', 'month-event'), count = el('p', 'month-count');
        attachCount(count, event);
        card.append(el('strong', '', event.name), el('p', '', `${format(event.date, { month: 'short', day: 'numeric' })} · ${event.location}`), count, status(event));
        list.append(card);
      });
    }
    function renderTimeline() {
      $('#list-year').textContent = String(year);
      renderLineup($('#events-list'), events.filter(e => e.date.startsWith(String(year)) || (e.endDate || '').startsWith(String(year))), true);
    }
    function renderCalendar() {
      const grid = $('#calendar-grid'); grid.replaceChildren();
      const title = format(iso(1), { month: 'long', year: 'numeric' });
      $('#month-title').textContent = title; grid.setAttribute('aria-label', title); yearSelect.value = String(year);
      const offset = new Date(Date.UTC(year, month, 1)).getUTCDay(), days = new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
      for (let i = 0; i < offset; i++) { const blank = el('div', 'calendar-day empty'); blank.setAttribute('aria-hidden', 'true'); grid.append(blank); }
      for (let day = 1; day <= days; day++) {
        const date = iso(day), onDay = events.filter(e => covers(e, date));
        const cell = el(onDay.length ? 'button' : 'div', `calendar-day${onDay.length ? ' has-event' : ''}${date === today() ? ' today' : ''}${date === selected ? ' selected' : ''}`, String(day));
        cell.setAttribute('aria-label', `${format(date, { month: 'long', day: 'numeric', year: 'numeric' })}${onDay.length ? ': ' + onDay.map(e => e.name).join(', ') : ''}`);
        if (date === today()) cell.setAttribute('aria-current', 'date');
        if (onDay.length) {
          cell.type = 'button'; cell.setAttribute('aria-pressed', String(date === selected));
          if (onDay.length > 1) cell.append(el('span', 'day-count', `${onDay.length} events`));
          cell.addEventListener('click', () => {
            selected = selected === date ? null : date;
            grid.querySelectorAll('button').forEach(b => { const active = b === cell && selected !== null; b.classList.toggle('selected', active); b.setAttribute('aria-pressed', String(active)); });
            renderMonthEvents();
          });
        }
        grid.append(cell);
      }
      $('#prev-month').disabled = year === 2026 && month === 0;
      $('#next-month').disabled = year === 2027 && month === 11;
      renderMonthEvents(); renderTimeline();
    }
    function move(delta) { const date = new Date(Date.UTC(year, month + delta, 1)); year = date.getUTCFullYear(); month = date.getUTCMonth(); selected = null; renderCalendar(); }
    $('#prev-month').addEventListener('click', () => move(-1)); $('#next-month').addEventListener('click', () => move(1));
    $('#calendar-today').addEventListener('click', () => { const now = today().split('-').map(Number); year = Math.min(2027, Math.max(2026, now[0])); month = now[0] < 2026 ? 0 : now[0] > 2027 ? 11 : now[1] - 1; selected = null; renderCalendar(); });
    yearSelect.addEventListener('change', () => { year = Number(yearSelect.value); selected = null; renderCalendar(); });
    renderCalendar();
  }

  const toggle = $('.menu-toggle'), nav = $('#main-nav');
  const closeMenu = () => { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); toggle.textContent = 'Menu'; };
  toggle.addEventListener('click', () => { const open = nav.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)); toggle.textContent = open ? 'Close' : 'Menu'; });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); toggle.focus(); } });
  window.matchMedia('(min-width:851px)').addEventListener('change', event => { if (event.matches) closeMenu(); });

  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion:reduce)').matches) {
    const watcher = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('risen');
      watcher.unobserve(entry.target);
    }), { rootMargin: '0px 0px -8% 0px' });
    const watch = () => document.querySelectorAll('[data-rise]:not(.rise)').forEach((node, i) => { node.style.setProperty('--delay', `${(i % 4) * 70}ms`); node.classList.add('rise'); watcher.observe(node); });
    watch();
    new MutationObserver(watch).observe($('main'), { childList: true, subtree: true });
  }

  setInterval(() => {
    document.querySelectorAll('[data-countdown]').forEach(node => { const event = events.find(e => e.date === node.dataset.countdown); if (event) node.textContent = remaining(event); });
    renderNext();
  }, 60000);
})();
