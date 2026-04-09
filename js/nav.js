// Shared sidebar — injected by each page
// Usage: document.getElementById('sidebar').innerHTML = SIDEBAR;
const isChapterPage = window.location.pathname.includes('/chapters/');
const homeLink = isChapterPage ? '../index.html' : 'index.html';
const pageLink = page => isChapterPage ? `${page}.html` : `chapters/${page}.html`;
const SIDEBAR = `
<div class="sidebar-brand">
  <div class="sio-logo">sio</div>
  <div class="site-title">RSC Workbook 2026</div>
  <div class="site-sub">Quranic Youth Camp</div>
</div>
<nav>
  <a href="${homeLink}">🏠 Home</a>

  <div class="nav-chapter">Chapter 1</div>
  <a href="${pageLink('ch1')}">Basics of Islam</a>
  <a class="nav-sub" href="${pageLink('ch1')}#basics">What is Islam?</a>
  <a class="nav-sub" href="${pageLink('ch1')}#pillars">5 Pillars</a>
  <a class="nav-sub" href="${pageLink('ch1')}#articles">6 Articles of Faith</a>

  <div class="nav-chapter">Chapter 2</div>
  <a href="${pageLink('ch2')}">Taharah & Namaz</a>
  <a class="nav-sub" href="${pageLink('ch2')}#ghusl">Ghusl</a>
  <a class="nav-sub" href="${pageLink('ch2')}#tayammum">Tayammum</a>
  <a class="nav-sub" href="${pageLink('ch2')}#wudhu">Wudhu</a>
  <a class="nav-sub" href="${pageLink('ch2')}#azaan">Azaan</a>
  <a class="nav-sub" href="${pageLink('ch2')}#namaz">Namaz</a>

  <div class="nav-chapter">Chapter 3</div>
  <a href="${pageLink('ch3')}">Purpose of Life</a>
  <a class="nav-sub" href="${pageLink('ch3')}#purpose">Purpose of Life</a>
  <a class="nav-sub" href="${pageLink('ch3')}#halalharam">Halal &amp; Haram</a>
  <a class="nav-sub" href="${pageLink('ch3')}#creator">Creator &amp; Creation</a>

  <div class="nav-chapter">Chapter 4</div>
  <a href="${pageLink('ch4')}">Quran Study Circle</a>
  <a class="nav-sub" href="${pageLink('ch4')}#tafseer">Tafseer Guide</a>
  <a class="nav-sub" href="${pageLink('ch4')}#asr">Surah Al-Asr</a>
  <a class="nav-sub" href="${pageLink('ch4')}#maoon">Surah Al-Ma'oon</a>
  <a class="nav-sub" href="${pageLink('ch4')}#muminun">Surah Al-Muminun</a>
  <a class="nav-sub" href="${pageLink('ch4')}#kahf">Surah Al-Kahf</a>

  <div class="nav-chapter">Chapter 5</div>
  <a href="${pageLink('ch5')}">Case Studies</a>
  <a class="nav-sub" href="${pageLink('ch5')}#socialmedia">Social Media</a>
  <a class="nav-sub" href="${pageLink('ch5')}#dawah">Dawah Dialogues</a>

  <div class="nav-chapter">Chapter 6</div>
  <a href="${pageLink('ch6')}">Drama &amp; Skits</a>

  <div class="nav-chapter">Chapter 7</div>
  <a href="${pageLink('ch7')}">Dua'en</a>

  <div class="nav-chapter">Chapter 8</div>
  <a href="${pageLink('ch8')}">Puzzles &amp; Quiz</a>
</nav>`;

document.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('sidebar');
  if (el) el.innerHTML = SIDEBAR;
  // re-run active highlighting
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('#sidebar nav a[href]').forEach(a => {
    const href = (a.getAttribute('href') || '').split('/').pop().split('#')[0];
    if (href === currentPage) a.classList.add('active');
  });
  // mobile toggle
  const menuBtn = document.getElementById('menu-btn');
  const sidebar = document.getElementById('sidebar');
  if (menuBtn) {
    menuBtn.addEventListener('click', () => sidebar.classList.toggle('open'));
    document.addEventListener('click', e => {
      if (!sidebar.contains(e.target) && !menuBtn.contains(e.target)) sidebar.classList.remove('open');
    });
  }
});
