// Shared sidebar — injected by each page
// Usage: document.getElementById('sidebar').innerHTML = SIDEBAR;
const SIDEBAR = `
<div class="sidebar-brand">
  <div class="sio-logo">sio</div>
  <div class="site-title">RSC Workbook 2026</div>
  <div class="site-sub">Quranic Youth Camp</div>
</div>
<nav>
  <a href="/sio-quranic-youth-camp/index.html">🏠 Home</a>

  <div class="nav-chapter">Chapter 1</div>
  <a href="/sio-quranic-youth-camp/chapters/ch11.html">Basics of Islam</a>
  <a class="nav-sub" href="/sio-quranic-youth-camp/chapters/ch11.html#basics">What is Islam?</a>
  <a class="nav-sub" href="/sio-quranic-youth-camp/chapters/ch11.html#pillars">5 Pillars</a>
  <a class="nav-sub" href="/sio-quranic-youth-camp/chapters/ch11.html#articles">6 Articles of Faith</a>

  <div class="nav-chapter">Chapter 2</div>
  <a href="/sio-quranic-youth-camp/chapters/ch12.html">Taharah & Namaz</a>
  <a class="nav-sub" href="/sio-quranic-youth-camp/chapters/ch12.html#ghusl">Ghusl</a>
  <a class="nav-sub" href="/sio-quranic-youth-camp/chapters/ch12.html#tayammum">Tayammum</a>
  <a class="nav-sub" href="/sio-quranic-youth-camp/chapters/ch12.html#wudhu">Wudhu</a>
  <a class="nav-sub" href="/sio-quranic-youth-camp/chapters/ch12.html#azaan">Azaan</a>
  <a class="nav-sub" href="/sio-quranic-youth-camp/chapters/ch12.html#namaz">Namaz</a>

  <div class="nav-chapter">Chapter 3</div>
  <a href="/sio-quranic-youth-camp/chapters/ch13.html">Purpose of Life</a>
  <a class="nav-sub" href="/sio-quranic-youth-camp/chapters/ch13.html#purpose">Purpose of Life</a>
  <a class="nav-sub" href="/sio-quranic-youth-camp/chapters/ch13.html#halalharam">Halal &amp; Haram</a>
  <a class="nav-sub" href="/sio-quranic-youth-camp/chapters/ch13.html#creator">Creator &amp; Creation</a>

  <div class="nav-chapter">Chapter 4</div>
  <a href="/sio-quranic-youth-camp/chapters/ch14.html">Quran Study Circle</a>
  <a class="nav-sub" href="/sio-quranic-youth-camp/chapters/ch14.html#tafseer">Tafseer Guide</a>
  <a class="nav-sub" href="/sio-quranic-youth-camp/chapters/ch14.html#asr">Surah Al-Asr</a>
  <a class="nav-sub" href="/sio-quranic-youth-camp/chapters/ch14.html#maoon">Surah Al-Ma'oon</a>
  <a class="nav-sub" href="/sio-quranic-youth-camp/chapters/ch14.html#muminun">Surah Al-Muminun</a>
  <a class="nav-sub" href="/sio-quranic-youth-camp/chapters/ch14.html#kahf">Surah Al-Kahf</a>

  <div class="nav-chapter">Chapter 5</div>
  <a href="/sio-quranic-youth-camp/chapters/ch15.html">Case Studies</a>
  <a class="nav-sub" href="/sio-quranic-youth-camp/chapters/ch15.html#socialmedia">Social Media</a>
  <a class="nav-sub" href="/sio-quranic-youth-camp/chapters/ch15.html#dawah">Dawah Dialogues</a>

  <div class="nav-chapter">Chapter 6</div>
  <a href="/sio-quranic-youth-camp/chapters/ch16.html">Drama &amp; Skits</a>

  <div class="nav-chapter">Chapter 7</div>
  <a href="/sio-quranic-youth-camp/chapters/ch17.html">Dua'en</a>

  <div class="nav-chapter">Chapter 8</div>
  <a href="/sio-quranic-youth-camp/chapters/ch18.html">Puzzles &amp; Quiz</a>
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
