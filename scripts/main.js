const bodyEl = document.body;
const STORAGE_KEY = 'h4k_access_gate';

/* Year */
(function setYear() {
	const target = document.getElementById('year');
	if (target) target.textContent = new Date().getFullYear();
})();

/* Access Gate */
(function initGate() {
	const gate = document.getElementById('access-gate');
	const form = document.getElementById('gate-form');
	const input = document.getElementById('gate-input');
	const status = document.getElementById('gate-status');
	const passphrase = 'mr7ba biiik';

	if (!gate || !form || !input || !status) return;

	function unlock() {
		bodyEl.classList.remove('gated');
		gate.classList.add('gate--done');
		sessionStorage.setItem(STORAGE_KEY, 'cleared');
		setTimeout(() => { gate.remove(); }, 600);
	}

	if (sessionStorage.getItem(STORAGE_KEY) === 'cleared') {
		unlock();
		return;
	}

	bodyEl.classList.add('gated');
	form.addEventListener('submit', (event) => {
		event.preventDefault();
		const value = input.value.trim().toLowerCase();
		if (!value.length) {
			status.textContent = 'input required';
			status.style.color = '#ffd166';
			return;
		}
		if (value === passphrase) {
			status.textContent = 'access granted';
			status.style.color = '#00ff9c';
			unlock();
		} else {
			status.textContent = 'access denied';
			status.style.color = '#ff4d4d';
			input.classList.add('shake');
			setTimeout(() => input.classList.remove('shake'), 500);
		}
		input.value = '';
	});
})();

/* Matrix Background */
(function initMatrix() {
	const canvas = document.getElementById('matrix');
	if (!canvas) return;
	const ctx = canvas.getContext('2d');
	let width, height, columns, drops, animationId;

	const characters = 'アカサタナハマヤラワ0123456789abcdef';
	const fontSize = 16;

	function resize() {
		width = canvas.width = window.innerWidth;
		height = canvas.height = window.innerHeight;
		columns = Math.floor(width / fontSize);
		drops = new Array(columns).fill(1 + Math.random() * 50);
	}
	function draw() {
		ctx.fillStyle = 'rgba(3,11,10,0.18)';
		ctx.fillRect(0, 0, width, height);

		ctx.font = `${fontSize}px monospace`;

		for (let i = 0; i < drops.length; i++) {
			const text = characters[Math.floor(Math.random() * characters.length)];
			ctx.fillStyle = Math.random() > 0.975 ? '#18ffff' : '#00ff9c';
			ctx.fillText(text, i * fontSize, drops[i] * fontSize);
			if (drops[i] * fontSize > height && Math.random() > 0.965) {
				drops[i] = 0;
			}
			drops[i]++;
		}
		animationId = requestAnimationFrame(draw);
	}
	window.addEventListener('resize', () => {
		cancelAnimationFrame(animationId);
		resize();
		draw();
	});
	resize();
	draw();
})();

/* Typewriter */
(function typewriter() {
	const el = document.getElementById('typewriter-text');
	if (!el) return;
	const strings = JSON.parse(el.getAttribute('data-strings') || '[]');
	if (!strings.length) return;

	let index = 0;
	let char = 0;
	let deleting = false;
	const pause = 1200;

	function tick() {
		const current = strings[index] || '';
		if (!deleting) {
			char++;
			el.textContent = current.slice(0, char);
			if (char === current.length) {
				deleting = true;
				setTimeout(tick, pause);
				return;
			}
		} else {
			char--;
			el.textContent = current.slice(0, char);
			if (char === 0) {
				deleting = false;
				index = (index + 1) % strings.length;
			}
		}
		setTimeout(tick, deleting ? 50 : 90);
	}
	tick();
})();

/* Project Filters */
(function initFilters() {
	const chips = document.querySelectorAll('.chip');
	if (!chips.length) return;
	chips.forEach(chip => {
		chip.addEventListener('click', () => {
			chips.forEach(c => c.classList.remove('active'));
			chip.classList.add('active');
			const filter = chip.getAttribute('data-filter');
			document.querySelectorAll('.card[data-cat]').forEach(card => {
				if (filter === 'all') {
					card.style.display = '';
				} else {
					card.style.display = card.getAttribute('data-cat') === filter ? '' : 'none';
				}
			});
		});
	});
})();

/* 3D Tilt Effect */
function initTilt(targets = document.querySelectorAll('.tilt')) {
	targets.forEach(card => {
		let rect = card.getBoundingClientRect();
		const updateRect = () => { rect = card.getBoundingClientRect(); };
		window.addEventListener('resize', updateRect);
		card.addEventListener('mousemove', (e) => {
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;
			const rx = ((y / rect.height) - 0.5) * -6;
			const ry = ((x / rect.width) - 0.5) * 6;
			card.style.transform = `perspective(1100px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(12px)`;
		});
		card.addEventListener('mouseleave', () => {
			card.style.transform = 'perspective(1100px) rotateX(0) rotateY(0)';
		});
	});
}

/* Reveal on Scroll */
(function reveal() {
	const observer = new IntersectionObserver((entries) => {
		for (const entry of entries) {
			if (entry.isIntersecting) {
				entry.target.style.transform = 'translateY(0)';
				entry.target.style.opacity = '1';
				observer.unobserve(entry.target);
			}
		}
	}, { threshold: 0.12 });
	document.querySelectorAll('.terminal-window').forEach(el => {
		el.style.transform = 'translateY(16px)';
		el.style.opacity = '0';
		el.style.transition = 'transform .6s ease, opacity .6s ease';
		observer.observe(el);
	});
})();

/* Contact: mailto */
(function initContact() {
	const form = document.getElementById('contact-form');
	if (!form) return;
	const status = document.getElementById('form-status');

	form.addEventListener('submit', (e) => {
		e.preventDefault();
		const name = document.getElementById('name').value.trim();
		const email = document.getElementById('email').value.trim();
		const message = document.getElementById('message').value.trim();

		if (!name || !email || !message) {
			status.textContent = 'fill all fields';
			status.style.color = '#ffd166';
			return;
		}

		status.textContent = 'opening email client...';
		status.style.color = '#8bd3b9';
		const subject = encodeURIComponent(`[Portfolio] Message from ${name}`);
		const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`);
		window.location.href = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
		setTimeout(() => { status.textContent = 'idle'; status.style.color = ''; }, 4000);
	});
})();

/* Load Projects */
(async function loadProjects() {
	const grid = document.getElementById('projects-grid');
	if (!grid) return;
	const fallbackEl = document.getElementById('projects-fallback');
	const mode = (grid.getAttribute('data-mode') || 'all').toLowerCase();

	const classMap = {
		red: { label: 'Red Team', className: 'red' },
		blue: { label: 'Blue Team', className: 'blue' },
		research: { label: 'Research', className: 'cyan' },
		default: { label: 'Ops', className: 'cyan' }
	};

	function renderProjects(projects) {
		let list = Array.isArray(projects) ? projects.slice() : [];
		// Limit to latest 4 on homepage
		if (mode === 'latest') {
			list = list.slice(0, 4);
		}
		if (!Array.isArray(list) || !list.length) return false;
		grid.innerHTML = '';
		list.forEach(project => {
			const categoryKey = (project.category || '').toLowerCase();
			const cat = classMap[categoryKey] || classMap.default;

			const article = document.createElement('article');
			article.className = 'card tilt';
			article.setAttribute('data-cat', categoryKey || 'ops');

			const techList = Array.isArray(project.technologies) ? project.technologies : [];
			article.innerHTML = `
				<div class="card-head">
					<span class="cat ${cat.className}">${cat.label}</span>
					<h3>${project.title || 'Untitled Project'}</h3>
				</div>
				<p>${project.description || ''}</p>
				<ul class="tech">${techList.map(tech => `<li>${tech}</li>`).join('')}</ul>
				<div class="card-actions">
					<a class="btn small glow" href="${project.repo || '#'}" target="_blank" rel="noopener">Repo</a>
					<a class="btn small outline" href="${project.demo || '#'}" target="_blank" rel="noopener">Demo</a>
				</div>
			`;
			grid.appendChild(article);
		});
		initTilt(grid.querySelectorAll('.tilt'));
		return true;
	}

	async function useFallback() {
		if (!fallbackEl) return false;
		try {
			const data = JSON.parse(fallbackEl.textContent.trim());
			if (renderProjects(data)) {
				fallbackEl.remove();
				return true;
			}
		} catch (err) {
			console.warn('Fallback parse failed', err);
		}
		return false;
	}

	try {
		const manifestRes = await fetch(`projects/index.json?v=${Date.now()}`, {
			cache: 'no-cache',
			headers: { 'Content-Type': 'application/json' }
		});
		if (!manifestRes.ok) throw new Error('manifest');
		let manifest = await manifestRes.json();
		if (!Array.isArray(manifest)) throw new Error('manifest format');
		// Treat manifest order as newest-first. If your list is oldest-first, reverse it here:
		// manifest = manifest.slice().reverse();

		const projects = [];
		const failed = [];
		for (const entry of manifest) {
			const file = typeof entry === 'string' ? entry : entry.file;
			if (!file) continue;
			try {
				const res = await fetch(`projects/${file}?v=${Date.now()}`);
				if (!res.ok) {
					failed.push(file);
					throw new Error(file);
				}
				const data = await res.json();
				projects.push({ ...data });
			} catch (err) {
				console.warn('Project load failed:', err);
			}
		}

		if (!renderProjects(projects)) throw new Error('no projects');
		// If some failed but some succeeded, display a soft warning list
		if (failed.length) {
			const warn = document.createElement('div');
			warn.className = 'loading-line';
			warn.innerHTML = `
				<span class="loader"></span>
				<span style="opacity:.85">Skipped ${failed.length} file(s): ${failed.join(', ')}</span>
			`;
			grid.appendChild(warn);
		}
	} catch (err) {
		console.error(err);
		if (await useFallback()) return;
		grid.innerHTML = `
			<div class="loading-line">
				<span class="loader"></span>
				<span>Unable to fetch projects. Serve via HTTP or verify /projects manifest.</span>
			</div>
		`;
	}
})();
