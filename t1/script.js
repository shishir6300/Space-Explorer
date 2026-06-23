// ─── DATA ───────────────────────────────────────────────────

const planets = [
  {
    name: "Mercury", emoji: "🪨", type: "Rocky Planet", tag: "SMALLEST",
    color: "rgba(180,130,80,0.3)",
    distance: "57.9M km", moons: "0", diameter: "4,879 km", temp: "-180°C to 430°C",
    desc: "Mercury is the smallest planet and closest to the Sun. It has no atmosphere to retain heat, creating wild temperature swings between day and night — hotter than an oven in the day and colder than Antarctica at night.",
    fact: "A year on Mercury is just 88 Earth days, but a day lasts 59 Earth days!"
  },
  {
    name: "Venus", emoji: "🌕", type: "Rocky Planet", tag: "HOTTEST",
    color: "rgba(240,180,60,0.3)",
    distance: "108.2M km", moons: "0", diameter: "12,104 km", temp: "465°C",
    desc: "Venus is the hottest planet in the solar system, even hotter than Mercury, thanks to its thick CO₂ atmosphere that traps heat. Its surface pressure is 90 times that of Earth — enough to crush a submarine.",
    fact: "Venus rotates backwards compared to most planets — the Sun rises in the west there!"
  },
  {
    name: "Earth", emoji: "🌍", type: "Rocky Planet", tag: "HOME",
    color: "rgba(30,120,200,0.3)",
    distance: "149.6M km", moons: "1", diameter: "12,742 km", temp: "-88°C to 58°C",
    desc: "Earth is the only known planet to harbor life. Its magnetic field protects us from harmful solar radiation, while the liquid water, oxygen-rich atmosphere, and stable temperatures make it the perfect habitat for billions of species.",
    fact: "Earth is not perfectly round — it bulges at the equator due to its rotation!"
  },
  {
    name: "Mars", emoji: "🔴", type: "Rocky Planet", tag: "NEXT FRONTIER",
    color: "rgba(210,80,50,0.3)",
    distance: "227.9M km", moons: "2", diameter: "6,779 km", temp: "-87°C to -5°C",
    desc: "Mars is home to Olympus Mons, the tallest volcano in the solar system — nearly 3x the height of Everest. Rovers like Perseverance are searching for signs of ancient microbial life in its dried riverbeds.",
    fact: "Mars has two tiny moons: Phobos and Deimos — named after the Greek gods of fear and dread!"
  },
  {
    name: "Jupiter", emoji: "🟠", type: "Gas Giant", tag: "LARGEST",
    color: "rgba(200,140,80,0.3)",
    distance: "778.5M km", moons: "95", diameter: "139,820 km", temp: "-108°C",
    desc: "Jupiter is so massive it could swallow all other planets combined. The Great Red Spot — a storm larger than Earth — has been raging for over 350 years. Jupiter also acts as a shield, its gravity attracting asteroids away from the inner solar system.",
    fact: "Jupiter's moon Europa has a liquid ocean under its ice surface — potentially harboring life!"
  },
  {
    name: "Saturn", emoji: "🪐", type: "Gas Giant", tag: "RING KING",
    color: "rgba(220,190,120,0.3)",
    distance: "1.43B km", moons: "146", diameter: "116,460 km", temp: "-138°C",
    desc: "Saturn's iconic rings are made of billions of ice and rock particles, ranging from tiny grains to chunks the size of houses. Despite its enormous size, Saturn is the least dense planet — it would actually float on water!",
    fact: "Saturn has 146 known moons — more than any other planet in our solar system!"
  },
  {
    name: "Uranus", emoji: "🔵", type: "Ice Giant", tag: "TILTED",
    color: "rgba(100,200,220,0.3)",
    distance: "2.87B km", moons: "28", diameter: "50,724 km", temp: "-195°C",
    desc: "Uranus rotates on its side, with its poles pointing toward the Sun. This creates extreme 42-year-long seasons. Its blue-green color comes from methane in its atmosphere, and its faint rings were only discovered in 1977.",
    fact: "Uranus is the coldest planet (-224°C at its core) — even colder than Neptune!"
  },
  {
    name: "Neptune", emoji: "🌀", type: "Ice Giant", tag: "WINDIEST",
    color: "rgba(40,80,200,0.3)",
    distance: "4.5B km", moons: "16", diameter: "49,244 km", temp: "-200°C",
    desc: "Neptune has the fastest winds in the solar system, reaching 2,100 km/h — faster than the speed of sound on Earth! Its moon Triton orbits backwards and is slowly spiraling inward, destined to be torn apart in about 3.6 billion years.",
    fact: "One year on Neptune = 165 Earth years. It completed its first full orbit since discovery in 2011!"
  }
];

const missions = [
  { icon: "🚀", year: "1969", name: "Apollo 11", desc: "First humans land on the Moon. Neil Armstrong and Buzz Aldrin walk on the lunar surface.", agency: "NASA", status: "success" },
  { icon: "🛸", year: "1977", name: "Voyager 1 & 2", desc: "Launched to explore outer planets. Voyager 1 is now in interstellar space — the farthest human-made object.", agency: "NASA", status: "success" },
  { icon: "🔭", year: "1990", name: "Hubble Space Telescope", desc: "Revolutionized astronomy with stunning images of deep space, galaxies, and nebulae.", agency: "NASA", status: "ongoing" },
  { icon: "🔴", year: "2013", name: "Mangalyaan (MOM)", desc: "India's first Mars mission, making ISRO the first Asian agency to reach Martian orbit.", agency: "ISRO", status: "success" },
  { icon: "🤖", year: "2021", name: "Perseverance Rover", desc: "Mars rover collecting rock samples and testing oxygen production for future human missions.", agency: "NASA", status: "ongoing" },
  { icon: "🌌", year: "2021", name: "James Webb Telescope", desc: "Most powerful space telescope ever built. Captures images from the early universe, 13.5B years ago.", agency: "NASA/ESA", status: "ongoing" },
  { icon: "🛰️", year: "2023", name: "Chandrayaan-3", desc: "India successfully landed near the Moon's south pole — a historic first for any space agency.", agency: "ISRO", status: "success" },
  { icon: "🚀", year: "2024", name: "Artemis Program", desc: "NASA's mission to return humans to the Moon and eventually send astronauts to Mars.", agency: "NASA", status: "ongoing" }
];

const facts = [
  "The Sun contains 99.86% of the solar system's mass",
  "Light from the Sun takes 8 minutes to reach Earth",
  "There are more stars in the universe than grains of sand on Earth",
  "A neutron star is so dense a teaspoon would weigh 10 billion tonnes",
  "The Milky Way galaxy is 100,000 light-years across",
  "Space is completely silent — there's no medium for sound to travel",
  "Venus is hotter than Mercury despite being farther from the Sun",
  "Saturn's rings are only about 10 meters thick despite being 270,000 km wide",
  "Jupiter's Great Red Spot has been raging for over 350 years",
  "Uranus rotates on its side at a 98-degree axial tilt"
];

// ─── STARS ──────────────────────────────────────────────────

function createStars() {
  const container = document.getElementById('stars');
  for (let i = 0; i < 180; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    const size = Math.random() * 2.5 + 0.5;
    star.style.cssText = `
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      width: ${size}px;
      height: ${size}px;
      --dur: ${Math.random() * 3 + 2}s;
      animation-delay: ${Math.random() * 3}s;
      opacity: ${Math.random() * 0.5 + 0.1};
    `;
    container.appendChild(star);
  }
}

// ─── NASA APOD ──────────────────────────────────────────────

async function fetchAPOD() {
  const card = document.getElementById('apodCard');
  // Using DEMO_KEY for portfolio — replace with your own at api.nasa.gov
  const API_KEY = 'xhpMFiJekFXhJjlUu0JHsdJLDImghd2bh93nFLsq';
  try {
    const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`);
    if (!res.ok) throw new Error('API error');
    const data = await res.json();

    const mediaHtml = data.media_type === 'image'
      ? `<img src="${data.url}" alt="${data.title}" loading="lazy">`
      : `<iframe src="${data.url}" frameborder="0" allowfullscreen title="${data.title}"></iframe>`;

    card.innerHTML = `
      <div class="apod-inner">
        <div class="apod-image-wrap">${mediaHtml}</div>
        <div class="apod-info">
          <div class="apod-date">${new Date(data.date).toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric' })}</div>
          <div class="apod-title">${data.title}</div>
          <div class="apod-explanation">${data.explanation}</div>
          ${data.copyright ? `<div class="apod-credit">© ${data.copyright}</div>` : ''}
        </div>
      </div>`;
  } catch (e) {
    card.innerHTML = `
      <div class="apod-loading">
        <div style="font-size:3rem; margin-bottom:1rem;">🌌</div>
        <p style="color: var(--text-muted);">NASA API rate limit reached. <a href="https://apod.nasa.gov" target="_blank" style="color: var(--gold);">Visit APOD directly →</a></p>
      </div>`;
  }
}

// ─── PLANETS ────────────────────────────────────────────────

function renderPlanets(list = planets) {
  const grid = document.getElementById('planetsGrid');
  grid.innerHTML = list.length ? list.map((p, i) => `
    <div class="planet-card" onclick="openModal(${planets.indexOf(p)})"
         style="--planet-color: ${p.color}; animation-delay: ${i * 0.05}s;">
      <span class="planet-emoji">${p.emoji}</span>
      <div class="planet-name">${p.name}</div>
      <div class="planet-type">${p.type}</div>
      <span class="planet-tag">${p.tag}</span>
    </div>`).join('')
    : `<div style="color: var(--text-muted); padding: 2rem;">No planets found matching your search.</div>`;
}

function searchPlanets() {
  const q = document.getElementById('planetSearch').value.toLowerCase();
  renderPlanets(planets.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.type.toLowerCase().includes(q) ||
    p.tag.toLowerCase().includes(q)
  ));
}

// ─── MODAL ──────────────────────────────────────────────────

function openModal(index) {
  const p = planets[index];
  const overlay = document.getElementById('modalOverlay');
  document.getElementById('modalContent').innerHTML = `
    <div class="modal-hero" style="--modal-color: ${p.color}">${p.emoji}</div>
    <div class="modal-body">
      <div class="modal-planet-name">${p.name}</div>
      <div class="modal-tagline">${p.type} · ${p.tag}</div>
      <div class="modal-stats">
        <div class="stat-box"><div class="stat-label">Distance from Sun</div><div class="stat-value">${p.distance}</div></div>
        <div class="stat-box"><div class="stat-label">Diameter</div><div class="stat-value">${p.diameter}</div></div>
        <div class="stat-box"><div class="stat-label">Moons</div><div class="stat-value">${p.moons}</div></div>
        <div class="stat-box"><div class="stat-label">Temperature</div><div class="stat-value">${p.temp}</div></div>
      </div>
      <div class="modal-desc">${p.desc}</div>
      <div class="modal-fun-fact"><strong>🤩 Fun Fact:</strong> ${p.fact}</div>
    </div>`;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });


function renderMissions() {
  document.getElementById('missionsGrid').innerHTML = missions.map(m => `
    <div class="mission-card">
      <div class="mission-icon">${m.icon}</div>
      <div class="mission-year">${m.year} · ${m.agency}</div>
      <div class="mission-name">${m.name}</div>
      <div class="mission-desc">${m.desc}</div>
      <span class="mission-badge badge-${m.status}">${m.status === 'success' ? '✅ SUCCESS' : '🔵 ONGOING'}</span>
    </div>`).join('');
}



function renderTicker() {
  const track = document.getElementById('tickerTrack');
  const doubled = [...facts, ...facts]; // duplicate for seamless loop
  track.innerHTML = doubled.map(f => `<span class="ticker-item">${f}</span>`).join('');
}



function submitForm(e) {
  e.preventDefault();
  const success = document.getElementById('formSuccess');
  success.style.display = 'block';
  e.target.reset();
  setTimeout(() => { success.style.display = 'none'; }, 5000);
}



function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('open');
}

// Close menu on link click
document.querySelectorAll && document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => {
      document.querySelector('.nav-links').classList.remove('open');
    });
  });
});



createStars();
fetchAPOD();
renderPlanets();
renderMissions();
renderTicker();
