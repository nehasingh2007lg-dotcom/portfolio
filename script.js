// ==========================================
// MOBILE MENU TOGGLE
// ==========================================

const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-menu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');

if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

if (closeMenu && mobileMenu) {
    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
}


// Close mobile menu when navigation link is clicked

mobileNavLinks.forEach(link => {

    link.addEventListener('click', () => {

        if (mobileMenu) {
            mobileMenu.classList.remove('active');
        }

        document.body.style.overflow = 'auto';

    });

});


// ==========================================
// STICKY NAVBAR BACKGROUND ON SCROLL
// ==========================================

const navbar = document.querySelector('.navbar');

if (navbar) {

    window.addEventListener('scroll', () => {

        if (window.scrollY > 50) {

            navbar.classList.add('scrolled');

        } else {

            navbar.classList.remove('scrolled');

        }

    });

}


// ==========================================
// SCROLL REVEAL ANIMATIONS
// ==========================================

const revealElements = document.querySelectorAll(
    '.reveal-up, .reveal-left, .reveal-right'
);

const revealOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const revealOnScroll = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (!entry.isIntersecting) {
                return;
            }

            entry.target.classList.add('active');

            observer.unobserve(entry.target);

        });

    },
    revealOptions
);


revealElements.forEach(element => {

    revealOnScroll.observe(element);

});


// ==========================================
// HERO ELEMENTS ANIMATION ON PAGE LOAD
// ==========================================

document.addEventListener('DOMContentLoaded', () => {

    const heroElements = document.querySelectorAll(
        '.hero .reveal-up'
    );

    heroElements.forEach(element => {

        setTimeout(() => {

            element.classList.add('active');

        }, 100);

    });

});


// ==========================================
// CURSOR GLOW EFFECT
// ==========================================

const cursorGlow = document.querySelector('.cursor-glow');

document.addEventListener('mousemove', event => {

    if (!cursorGlow) {
        return;
    }

    requestAnimationFrame(() => {

        cursorGlow.style.left = `${event.clientX}px`;
        cursorGlow.style.top = `${event.clientY}px`;

    });

});


// ==========================================
// 3D TILT EFFECT FOR CARDS
// ==========================================

const tiltCards = document.querySelectorAll(
    '.skill-card, .project-card, .achievement-card'
);

tiltCards.forEach(card => {

    card.addEventListener('mousemove', event => {

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -10;

        const rotateY =
            ((x - centerX) / centerX) * 10;

        card.style.setProperty(
            '--rx',
            `${rotateX}deg`
        );

        card.style.setProperty(
            '--ry',
            `${rotateY}deg`
        );

    });


    card.addEventListener('mouseleave', () => {

        card.style.setProperty(
            '--rx',
            '0deg'
        );

        card.style.setProperty(
            '--ry',
            '0deg'
        );

    });

});


// ==========================================
// SKILLS GRAPH REVEAL ANIMATION
// ==========================================

const graphCard =
    document.querySelector('.skills-graph-card');

if (graphCard) {

    const graphObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.add(
                        'graph-visible'
                    );

                    observer.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: 0.2
            }
        );

    graphObserver.observe(graphCard);

}


// ==========================================
// CONTACT / EMAIL HIGHLIGHT
// ==========================================

const contactItems =
    document.querySelectorAll(
        '.contact-item, .email-highlight'
    );

contactItems.forEach(item => {

    item.addEventListener('mouseenter', () => {

        item.classList.add(
            'contact-active'
        );

    });


    item.addEventListener('mouseleave', () => {

        item.classList.remove(
            'contact-active'
        );

    });

});


// ==========================================
// ACTIVE NAVIGATION LINK ON SCROLL
// ==========================================

const sections =
    document.querySelectorAll('section[id]');

const navLinks =
    document.querySelectorAll(
        '.nav-links a, .mobile-nav-links a'
    );

window.addEventListener('scroll', () => {

    let currentSection = '';

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute('id');

        }

    });


    navLinks.forEach(link => {

        link.classList.remove(
            'active-nav'
        );

        const href =
            link.getAttribute('href');

        if (
            href === `#${currentSection}`
        ) {

            link.classList.add(
                'active-nav'
            );

        }

    });

});


// ==========================================
// SMOOTH SCROLL FOR NAVIGATION
// ==========================================

navLinks.forEach(link => {

    link.addEventListener('click', event => {

        const targetId =
            link.getAttribute('href');

        if (
            !targetId ||
            !targetId.startsWith('#')
        ) {
            return;
        }

        const target =
            document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

    });

});


// ==========================================
// CONTACT EMAIL CLICK EFFECT
// ==========================================

const emailLinks =
    document.querySelectorAll(
        'a[href^="mailto:"]'
    );

emailLinks.forEach(email => {

    email.addEventListener('click', () => {

        email.classList.add(
            'email-clicked'
        );

        setTimeout(() => {

            email.classList.remove(
                'email-clicked'
            );

        }, 600);

    });

});


// ==========================================
// PHONE CLICK EFFECT
// ==========================================

const phoneLinks =
    document.querySelectorAll(
        'a[href^="tel:"]'
    );

phoneLinks.forEach(phone => {

    phone.addEventListener('click', () => {

        phone.classList.add(
            'phone-clicked'
        );

        setTimeout(() => {

            phone.classList.remove(
                'phone-clicked'
            );

        }, 600);

    });

});


// ==========================================
// SKILLS GRAPH BAR ANIMATION
// ==========================================

const graphBars =
    document.querySelectorAll(
        '.graph-fill'
    );

if (graphBars.length > 0) {

    const barObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (!entry.isIntersecting) {
                        return;
                    }

                    entry.target.classList.add(
                        'bar-animated'
                    );

                    observer.unobserve(
                        entry.target
                    );

                });

            },
            {
                threshold: 0.3
            }
        );


    graphBars.forEach(bar => {

        barObserver.observe(bar);

    });

}


// ==========================================
// PREVENT EMPTY # LINKS FROM JUMPING
// ==========================================

const emptyLinks =
    document.querySelectorAll(
        'a[href="#"]'
    );

emptyLinks.forEach(link => {

    link.addEventListener('click', event => {

        event.preventDefault();

    });

});


// ==========================================
// CONSOLE MESSAGE
// ==========================================

console.log(
    'Portfolio JavaScript loaded successfully!'
);
