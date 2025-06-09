function showModal(message, iconHtml) {
	const modal = document.getElementById('modal');
	const modalMsg = document.getElementById('modalMessage');
	const modalIcon = document.getElementById('modalIcon');
	modalMsg.innerHTML = message;
	modalIcon.innerHTML = iconHtml;
	modal.style.display = 'flex';

	// Ensure modal is always centered and not bigger than viewport
	const modalContent = modal.querySelector('.modal-content');
	modalContent.scrollTop = 0;
	modalContent.style.maxHeight = (window.innerHeight * 0.9) + 'px';
	modalContent.style.maxWidth = (window.innerWidth * 0.98) + 'px';

	// Focus OK button for accessibility
	setTimeout(() => document.getElementById('modalOk').focus(), 100);
}

function closeModal() {
	document.getElementById('modal').style.display = 'none';
}
document.getElementById('modalClose').onclick = closeModal;
document.getElementById('modalOk').onclick = closeModal;
window.addEventListener('keydown', function (e) {
	if (document.getElementById('modal').style.display === 'flex' && (e.key === 'Escape' || e.key === 'Enter')) {
		closeModal();
	}
});

// Partikel-System
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return; // <-- Sicherstellen, dass das Element existiert!
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 4 + 's';
        particle.style.animationDuration = (Math.random() * 6 + 9) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Click-Effekt
function createClickEffect(x, y) {
	const effect = document.createElement('div');
	effect.className = 'click-effect';
	effect.style.left = (x - 50) + 'px';
	effect.style.top = (y - 50) + 'px';
	document.body.appendChild(effect);

	setTimeout(() => {
		document.body.removeChild(effect);
	}, 600);
}

function showFeaturePopup(title, html) {
	showModal(`<div class="modal-title">${title}</div><div>${html}</div>`, '<i class="fas fa-star"></i>');
}

function startAdventure(event) {
    event.preventDefault();
    createClickEffect(event.clientX, event.clientY);

    // Dramatischer Effekt nur, wenn hero-title existiert
    const title = document.querySelector('.hero-title');
    if (title) {
        title.style.animation = 'none';
        setTimeout(() => {
            title.style.animation = 'titlePulse 2s ease-in-out';
        }, 100);
    }

    setTimeout(() => {
        showModal(
            `🗡️ Dein episches Abenteuer beginnt!<br>Möge das Schicksal dir hold sein, mutiger Held!<br><br>
            <div class="modal-title">Minecraft Server Beitritts-Guide</div>
            <ol class="server-guide">
                <li>
                    <span class="step-number">1</span>
                    <div class="step-content">
                        <div class="step-title">Lese das Regelwerk</div>
                        <div class="step-description">Bevor du Startest, solltest du das Regelwerk einmal Gründlich lesen.</div>
                        <br>
                        <div class="hero-actions">
                            <a href="rules.html" class="hero-btn">
                                <i class="ri-sword-line"></i>
                                Das Regelwerk
                            </a>
                        </div>
                    </div>
                </li>
                <li>
                    <span class="step-number">2</span>
                    <div class="step-content">
                        <div class="step-title">Starte Minecraft</div>
                        <div class="step-description">Öffne deine Minecraft Java Edition (Version 1.21.4 empfohlen).</div>
                    </div>
                </li>
                <li>
                    <span class="step-number">3</span>
                    <div class="step-content">
                        <div class="step-title">Gehe zu „Mehrspieler“</div>
                        <div class="step-description">Klicke im Hauptmenü auf <b>Mehrspieler</b>.</div>
                    </div>
                </li>
                <li>
                    <span class="step-number">4</span>
                    <div class="step-content">
                        <div class="step-title">Server hinzufügen</div>
                        <div class="step-description">Klicke auf <b>Server hinzufügen</b> und gib folgende Adresse ein:</div>
                        <div class="step-code">rpg.aeonforge-network.net</div>
                    </div>
                </li>
                <li>
                    <span class="step-number">5</span>
                    <div class="step-content">
                        <div class="step-title">Beitreten & Abenteuer erleben</div>
                        <div class="step-description">Wähle den Server aus der Liste und klicke auf <b>Beitreten</b>.<br>Viel Spaß!</div>
                    </div>
                </li>
            </ol>`,
            '<i class="fas fa-sword"></i>'
        );
    }, 300);
}

function joinGuild(event) {
	event.preventDefault();
	createClickEffect(event.clientX, event.clientY);

	setTimeout(() => {
		showModal('🏰 Willkommen in der Gilde der Legenden!<br>Gemeinsam sind wir unbesiegbar!', '<i class="fas fa-users"></i>');
	}, 300);
}

// Skill-Aktivierung
function activateSkill(event, skillType) {
	createClickEffect(event.clientX, event.clientY);

	const messages = {
		defense: { msg: '🛡️ Eiserne Verteidigung aktiviert!<br>Du bist nun unverwundbar!', icon: '<i class="fas fa-shield-alt"></i>' },
		magic: { msg: '✨ Uralte Magie durchströmt dich!<br>Die Elemente gehorchen deinem Willen!', icon: '<i class="fas fa-magic"></i>' },
		craft: { msg: '🔨 Meisterhandwerk entfesselt!<br>Legendäre Ausrüstung wartet auf dich!', icon: '<i class="fas fa-hammer"></i>' },
		treasure: { msg: '💎 Schatzsucher-Instinkt erwacht!<br>Verborgene Reichtümer offenbaren sich!', icon: '<i class="fas fa-gem"></i>' },
		wisdom: { msg: '📜 Uraltes Wissen enthüllt!<br>Die Geheimnisse der Welt sind dir bekannt!', icon: '<i class="fas fa-scroll"></i>' }
	};

	const icon = event.currentTarget.querySelector('.hero-icon');
	icon.style.transform = 'scale(1.5) rotate(360deg)';
	icon.style.filter = 'drop-shadow(0 0 30px #d4af37)';

	setTimeout(() => {
		icon.style.transform = '';
		icon.style.filter = '';
		showModal(messages[skillType].msg, messages[skillType].icon);
	}, 500);
}

// Sound-Effekt simulation (visuell)
function playVisualSound() {
	const content = document.querySelector('.hero-content');
	content.style.transform = 'scale(1.02)';
	setTimeout(() => {
		content.style.transform = 'scale(1)';
	}, 200);
}

// Initialisierung
document.addEventListener('DOMContentLoaded', function () {
	createParticles();

	// Dynamische Rune-Farben
	const runes = document.querySelectorAll('.rune');
	setInterval(() => {
		runes.forEach(rune => {
			if (Math.random() > 0.95) {
				rune.style.color = 'rgba(212, 175, 55, 0.8)';
				rune.style.textShadow = '0 0 20px rgba(212, 175, 55, 0.8)';
				setTimeout(() => {
					rune.style.color = 'rgba(212, 175, 55, 0.3)';
					rune.style.textShadow = '0 0 15px rgba(212, 175, 55, 0.5)';
				}, 1000);
			}
		});
	}, 2000);

	// Epic Navbar mobile toggle
	const toggle = document.getElementById('navbarToggle');
	const links = document.querySelector('.navbar-links');
	if (toggle && links) {
		toggle.addEventListener('click', function () {
			links.classList.toggle('open');
		});
	}

	// Dropdown-Menü für "Der Server" mit Hover-Delay und besserem Verhalten
    document.querySelectorAll('.navbar-dropdown').forEach(dropdown => {
        let openTimeout, closeTimeout;
        const toggle = dropdown.querySelector('.dropdown-toggle');
        toggle.addEventListener('click', function (e) {
            e.preventDefault();
            clearTimeout(closeTimeout);
            dropdown.classList.toggle('open');
            document.querySelectorAll('.navbar-dropdown').forEach(other => {
                if (other !== dropdown) other.classList.remove('open');
            });
        });
        dropdown.addEventListener('mouseenter', function () {
            if (window.innerWidth > 900) {
                clearTimeout(closeTimeout);
                openTimeout = setTimeout(() => dropdown.classList.add('open'), 120);
            }
        });
        dropdown.addEventListener('mouseleave', function () {
            if (window.innerWidth > 900) {
                clearTimeout(openTimeout);
                closeTimeout = setTimeout(() => dropdown.classList.remove('open'), 250);
            }
        });
    });

    // Schließe Dropdown bei Klick außerhalb
    document.addEventListener('click', function (e) {
        document.querySelectorAll('.navbar-dropdown').forEach(drop => {
            if (!drop.contains(e.target)) drop.classList.remove('open');
        });
    });

    // Back to Top Button
    const backToTopBtn = document.getElementById('backToTopBtn');
    if (backToTopBtn) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 200) {
                backToTopBtn.style.display = 'flex';
            } else {
                backToTopBtn.style.display = 'none';
            }
        });
        backToTopBtn.addEventListener('click', function () {
            // Für moderne Browser
            window.scrollTo({ top: 0, behavior: 'smooth' });
            // Für ältere oder spezielle Browser
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            // Falls main-content gescrollt wird
            const mainContent = document.querySelector('.main-content');
            if (mainContent) {
                mainContent.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }

    // FAQ Accordion Effekt
    document.querySelectorAll('.faq-question').forEach(q => {
        q.addEventListener('click', function () {
            const item = this.closest('.faq-item');
            item.classList.toggle('open');
        });
    });

    const copyBtn = document.getElementById('copyIpBtn');
    const serverIp = document.getElementById('serverIp');
    const tooltip = document.getElementById('copyTooltip');
    if (copyBtn && serverIp && tooltip) {
        copyBtn.addEventListener('click', function () {
            // IP in die Zwischenablage kopieren
            navigator.clipboard.writeText(serverIp.textContent.trim()).then(() => {
                // Tooltip animiert einblenden
                tooltip.style.display = 'block';
                tooltip.style.opacity = '1';
                tooltip.style.transform = 'translateY(-10px) scale(1.08)';
                tooltip.style.transition = 'opacity 0.25s, transform 0.25s';

                // IP-Feld animieren
                serverIp.classList.add('copied');
                serverIp.style.transition = 'box-shadow 0.3s, background 0.3s, color 0.3s, transform 0.25s';
                serverIp.style.transform = 'scale(1.08) rotate(-2deg)';
                serverIp.style.boxShadow = '0 0 24px 6px #d4af37cc, 0 1px 6px #0004';

                // Copy-Button animieren
                copyBtn.style.transition = 'background 0.25s, color 0.25s, transform 0.25s, box-shadow 0.25s';
                copyBtn.style.background = '#fffbe6';
                copyBtn.style.color = '#b8941f';
                copyBtn.style.transform = 'scale(1.08) rotate(2deg)';
                copyBtn.style.boxShadow = '0 0 18px #d4af37cc';

                setTimeout(() => {
                    tooltip.style.opacity = '0';
                    tooltip.style.transform = 'translateY(0) scale(1)';
                    serverIp.style.transform = '';
                    serverIp.style.boxShadow = '';
                    copyBtn.style.background = '';
                    copyBtn.style.color = '';
                    copyBtn.style.transform = '';
                    copyBtn.style.boxShadow = '';
                }, 1200);

                setTimeout(() => {
                    tooltip.style.display = 'none';
                    serverIp.classList.remove('copied');
                }, 1450);
            });
        });
    }
});

// Tastatur-Shortcuts
document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        document.querySelector('.hero-btn')?.click();
    }
    // Leertaste nur blockieren, wenn NICHT in einem Eingabefeld/Textarea
    if (
        event.key === ' ' &&
        document.activeElement &&
        !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName) &&
        document.activeElement.contentEditable !== "true"
    ) {
        event.preventDefault();
        playVisualSound();
    }
});

        document.querySelectorAll('.team-skin.small .skin-frame').forEach(frame => {
            frame.style.cursor = "pointer";
            frame.addEventListener('click', function () {
                const img = this.querySelector('img');
                const username = this.parentElement.querySelector('.team-skin-username')?.textContent || '';
                // Versuche größere Skin-Variante zu laden, fallback auf die kleine
                let bigSrc = img.src.replace('/90.png', '/220.png');
                if (bigSrc === img.src) bigSrc = img.src;
                document.getElementById('skinModalImg').src = bigSrc;
                document.getElementById('skinModalImg').alt = img.alt;
                document.getElementById('skinModalUsername').textContent = username;
                document.getElementById('skinModalBg').style.display = 'flex';
                document.getElementById('skinModalClose').focus();
            });
        });
        document.getElementById('skinModalClose').onclick = function () {
            document.getElementById('skinModalBg').style.display = 'none';
        };
        document.getElementById('skinModalBg').onclick = function (e) {
            if (e.target === this) this.style.display = 'none';
        };
        document.addEventListener('keydown', function(e){
            if(e.key === "Escape") document.getElementById('skinModalBg').style.display = 'none';
        });
        