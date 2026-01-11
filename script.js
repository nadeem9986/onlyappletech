// Data
const repairSlides = [
    {
        title: "iPhone Repair",
        description: "Screen replacement, battery upgrades, charging issues, and camera fixes for all iPhone models.",
        image: "images/service-iphone.png"
    },
    {
        title: "iPad Repair",
        description: "Cracked screens, unresponsive touch, and battery issues for all iPad models.",
        image: "images/service-ipad.png"
    },
    {
        title: "MacBook Services",
        description: "Keyboard repair, SSD upgrades, battery replacement, and liquid damage restoration.",
        image: "images/service-macbook.png"
    },
    {
        title: "Apple Watch Repair",
        description: "Screen replacement, battery issues, and sensor repairs for all Apple Watch models.",
        image: "images/service-watch.webp"
    }
];

const showcaseSlides = [
    {
        title: "iPhone Repair",
        description: "Screen replacement, battery upgrades, charging issues, and camera fixes for all iPhone models.",
        image: "images/hero-iphone.webp"
    },
    {
        title: "iPad Repair",
        description: "Cracked screens, unresponsive touch, and battery issues for all iPad models.",
        image: "images/showcase-ipad.webp"
    },
    {
        title: "MacBook Services",
        description: "Keyboard repair, SSD upgrades, battery replacement, and liquid damage restoration.",
        image: "images/showcase-mac.webp"
    },
    {
        title: "Apple Watch Repair",
        description: "Screen replacement, battery issues, and sensor repairs for all Apple Watch models.",
        image: "images/showcase-watch.webp"
    }
];

const reviews = [
    {
        name: "Rahul Sharma",
        rating: 5,
        text: "Excellent service! Fixed my iPhone 14 Pro Max screen in just 2 hours. The quality is as good as original. Highly recommend Only Apple Tech.",
        date: "2 weeks ago"
    },
    {
        name: "Priya V",
        rating: 5,
        text: "Best place for MacBook repairs in Bangalore. They fixed my motherboard issue which other shops said was impossible. Very professional.",
        date: "1 month ago"
    },
    {
        name: "Anand Kumar",
        rating: 5,
        text: "Quick battery replacement for my Apple Watch. Affordable pricing and genuine parts used. The technician was very knowledgeable.",
        date: "3 weeks ago"
    }
];

// Custom Apple-style SVG icons
const deviceIcons = {
    iphone: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="iphoneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#667eea;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#764ba2;stop-opacity:1" />
            </linearGradient>
        </defs>
        <rect x="18" y="8" width="28" height="48" rx="4" fill="url(#iphoneGrad)" stroke="currentColor" stroke-width="2"/>
        <circle cx="32" cy="51" r="2" fill="white" opacity="0.8"/>
        <rect x="26" y="12" width="12" height="2" rx="1" fill="white" opacity="0.6"/>
    </svg>`,
    
    ipad: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="ipadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#f093fb;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#f5576c;stop-opacity:1" />
            </linearGradient>
        </defs>
        <rect x="12" y="10" width="40" height="44" rx="3" fill="url(#ipadGrad)" stroke="currentColor" stroke-width="2"/>
        <circle cx="32" cy="50" r="2" fill="white" opacity="0.8"/>
        <rect x="28" y="14" width="8" height="1.5" rx="0.75" fill="white" opacity="0.6"/>
    </svg>`,
    
    macbook: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="macGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#4facfe;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#00f2fe;stop-opacity:1" />
            </linearGradient>
        </defs>
        <rect x="10" y="16" width="44" height="28" rx="2" fill="url(#macGrad)" stroke="currentColor" stroke-width="2"/>
        <path d="M8 44 L56 44 L54 48 L10 48 Z" fill="currentColor" opacity="0.3"/>
        <rect x="28" y="46" width="8" height="1" rx="0.5" fill="currentColor" opacity="0.4"/>
    </svg>`,
    
    watch: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="watchGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#fa709a;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#fee140;stop-opacity:1" />
            </linearGradient>
        </defs>
        <rect x="20" y="18" width="24" height="28" rx="6" fill="url(#watchGrad)" stroke="currentColor" stroke-width="2"/>
        <rect x="22" y="14" width="20" height="4" rx="1" fill="currentColor" opacity="0.3"/>
        <rect x="22" y="46" width="20" height="4" rx="1" fill="currentColor" opacity="0.3"/>
        <circle cx="32" cy="32" r="2" fill="white" opacity="0.9"/>
    </svg>`,
    
    imac: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="imacGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#a8edea;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#fed6e3;stop-opacity:1" />
            </linearGradient>
        </defs>
        <rect x="8" y="12" width="48" height="32" rx="2" fill="url(#imacGrad)" stroke="currentColor" stroke-width="2"/>
        <rect x="26" y="44" width="12" height="8" fill="currentColor" opacity="0.2"/>
        <rect x="18" y="52" width="28" height="2" rx="1" fill="currentColor" opacity="0.3"/>
    </svg>`,
    
    other: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="otherGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style="stop-color:#ffecd2;stop-opacity:1" />
                <stop offset="100%" style="stop-color:#fcb69f;stop-opacity:1" />
            </linearGradient>
        </defs>
        <circle cx="32" cy="32" r="20" fill="url(#otherGrad)" stroke="currentColor" stroke-width="2"/>
        <path d="M24 32 L30 38 L40 26" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`
};

const devices = [
    { id: "iphone", name: "iPhone", icon: "iphone" },
    { id: "macbook", name: "MacBook", icon: "macbook" },
    { id: "ipad", name: "iPad", icon: "ipad" },
    { id: "watch", name: "Apple Watch", icon: "watch" },
    { id: "imac", name: "iMac", icon: "imac" },
    { id: "other", name: "Other", icon: "other" },
];

const deviceProblems = {
    iphone: [
        "Cracked or broken screen",
        "Won't charge or loose port",
        "Camera not working properly",
        "Phone keeps restarting or dead",
        "Back glass is cracked",
        "Battery drains too fast",
        "Slow, freezing, or software issues",
        "Something else — let's chat"
    ],
    ipad: [
        "Cracked or broken screen",
        "Won't charge or loose port",
        "Camera not working properly",
        "iPad keeps restarting or dead",
        "Battery drains too fast",
        "Slow, freezing, or software issues",
        "Something else — let's chat"
    ],
    macbook: [
        "Cracked or broken screen",
        "Trackpad not responding",
        "Keyboard issues or broken keys",
        "Battery drains too fast",
        "Water or liquid damage",
        "Slow, freezing, or software issues",
        "Something else — let's chat"
    ],
    watch: [
        "Cracked or broken screen",
        "Battery drains too fast",
        "Won't charge properly",
        "Something else — let's chat"
    ],
    imac: [
        "Something else — let's chat"
    ],
    other: [
        "Something else — let's chat"
    ]
};

const WHATSAPP_NUMBER = "919123456789";

// State
let currentStep = 1;
let selectedDevice = "";
let selectedProblem = "";

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('current-year').textContent = new Date().getFullYear();
    renderDevices();
    renderServiceCards();
    renderReviews();
    renderDeviceShowcase();
    lucide.createIcons();
    initSmoothScrolling();
});

// Smooth Scrolling
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').slice(1);
            if (targetId === "") return;
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Rendering Functions
function renderDevices() {
    const deviceList = document.getElementById('device-list');
    deviceList.innerHTML = devices.map(device => `
        <div class="device-card bg-white border border-border p-8 rounded-xl flex flex-col items-center justify-center cursor-pointer transition-all hover:shadow-lg hover:scale-105 hover:border-primary/50" onclick="handleDeviceSelect('${device.id}')">
            <div class="device-icon w-16 h-16 mb-4 transition-transform hover:scale-150">
                ${deviceIcons[device.icon]}
            </div>
            <span class="font-semibold text-gray-800">${device.name}</span>
        </div>
    `).join('');
}

function renderServiceCards() {
    const serviceCards = document.getElementById('service-cards');
    
    // Check if mobile
    const isMobile = window.innerWidth < 1024;
    
    if (isMobile) {
        // Mobile: Single card with sliding images inside
        serviceCards.innerHTML = `
            <div class="max-w-3xl mx-auto px-4">
                <div class="bg-white border border-border rounded-2xl overflow-hidden shadow-lg">
                    <div class="relative aspect-[16/9] bg-muted/30 overflow-hidden">
                        <div id="service-image-track" class="flex h-full transition-transform duration-700 ease-in-out">
                            ${repairSlides.map(slide => `
                                <img src="${slide.image}" alt="${slide.title}" class="w-full h-full object-contain flex-shrink-0">
                            `).join('')}
                        </div>
                        <!-- Navigation Dots -->
                        <div id="service-dots" class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                            ${repairSlides.map((_, i) => `
                                <span class="w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === 0 ? 'bg-white scale-125' : 'bg-white/40'}"></span>
                            `).join('')}
                        </div>
                    </div>
                    <div class="p-8 text-center" id="service-text-container">
                        <h3 class="text-2xl font-bold mb-3">${repairSlides[0].title}</h3>
                        <p class="text-muted-foreground text-lg max-w-xl mx-auto">${repairSlides[0].description}</p>
                    </div>
                </div>
            </div>
        `;
        initMobileServiceCards();
    } else {
        // Desktop: 3-card carousel with sliding effect (right -> middle -> left)
        const extendedSlides = [...repairSlides, ...repairSlides, ...repairSlides];
        
        serviceCards.innerHTML = `
            <div class="container mx-auto px-4">
                <div class="relative overflow-hidden">
                    <div id="service-carousel-track" class="flex gap-8 transition-transform duration-700 ease-in-out -mx-4 px-4">
                        ${extendedSlides.map((slide, i) => `
                            <div class="flex-shrink-0 w-full md:w-[calc(33.333%-1.333rem)] bg-white border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                                <div class="relative aspect-[16/9] bg-muted/30 rounded-t-2xl overflow-hidden">
                                    <img src="${slide.image}" alt="${slide.title}" class="w-full h-full object-contain">
                                </div>
                                <div class="p-6 text-center">
                                    <h3 class="text-xl font-bold mb-2">${slide.title}</h3>
                                    <p class="text-muted-foreground">${slide.description}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <!-- Navigation Dots -->
                <div id="service-carousel-dots" class="flex justify-center gap-2 mt-8">
                    ${repairSlides.map((_, i) => `
                        <div class="w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${i === 0 ? 'bg-primary w-8' : 'bg-muted-foreground/30'}" onclick="goToServiceSlide(${i})"></div>
                    `).join('')}
                </div>
            </div>
        `;
        initDesktopServiceCarousel();
    }
    
    lucide.createIcons();
}

// Mobile service cards slider
let currentServiceIdx = 0;
let mobileServiceInterval;

function initMobileServiceCards() {
    startMobileServiceInterval();
}

function startMobileServiceInterval() {
    clearInterval(mobileServiceInterval);
    mobileServiceInterval = setInterval(() => {
        moveServiceSlide(1);
    }, 4000);
}

function moveServiceSlide(direction) {
    const nextIdx = (currentServiceIdx + direction + repairSlides.length) % repairSlides.length;
    updateServiceUI(nextIdx);
    currentServiceIdx = nextIdx;
}

function updateServiceUI(nextIdx) {
    const imageTrack = document.getElementById('service-image-track');
    const textContainer = document.getElementById('service-text-container');
    const dotsContainer = document.getElementById('service-dots');
    
    if (!imageTrack || !textContainer || !dotsContainer) return;
    
    const dots = dotsContainer.children;
    
    // Image Transition
    imageTrack.style.transform = `translateX(-${nextIdx * 100}%)`;
    
    // Text Transition
    textContainer.classList.add('text-fade-out');
    
    setTimeout(() => {
        textContainer.innerHTML = `
            <h3 class="text-2xl font-bold mb-3">${repairSlides[nextIdx].title}</h3>
            <p class="text-muted-foreground text-lg max-w-xl mx-auto">${repairSlides[nextIdx].description}</p>
        `;
        textContainer.classList.remove('text-fade-out');
        textContainer.classList.add('text-fade-in');
        
        setTimeout(() => {
            textContainer.classList.remove('text-fade-in');
        }, 500);
    }, 350);
    
    // Update Dots
    Array.from(dots).forEach((dot, i) => {
        if (i === nextIdx) {
            dot.classList.add('bg-white', 'scale-125');
            dot.classList.remove('bg-white/40');
        } else {
            dot.classList.remove('bg-white', 'scale-125');
            dot.classList.add('bg-white/40');
        }
    });
}

// Desktop service 3-card carousel
let currentServiceCarouselIdx = repairSlides.length; // Start at middle set
let serviceCarouselInterval;
let isServiceTransitioning = false;

function initDesktopServiceCarousel() {
    const track = document.getElementById('service-carousel-track');
    if (!track) return;
    
    // Position at the middle set initially
    updateServiceCarouselPosition(false);
    
    // Start auto-sliding
    startServiceCarouselInterval();
}

function startServiceCarouselInterval() {
    clearInterval(serviceCarouselInterval);
    serviceCarouselInterval = setInterval(() => {
        moveServiceCarousel(1);
    }, 4000);
}

function moveServiceCarousel(direction) {
    if (isServiceTransitioning) return;
    
    currentServiceCarouselIdx += direction;
    updateServiceCarouselPosition(true);
}

function goToServiceSlide(index) {
    if (isServiceTransitioning) return;
    
    clearInterval(serviceCarouselInterval);
    currentServiceCarouselIdx = repairSlides.length + index;
    updateServiceCarouselPosition(true);
    startServiceCarouselInterval();
}

function updateServiceCarouselPosition(withTransition) {
    const track = document.getElementById('service-carousel-track');
    const dots = document.querySelectorAll('#service-carousel-dots > div');
    
    if (!track) return;
    
    isServiceTransitioning = true;
    
    // Enable/disable transition
    if (withTransition) {
        track.style.transition = 'transform 0.7s ease-in-out';
    } else {
        track.style.transition = 'none';
    }
    
    // Calculate position - show 3 cards at once
    const cardWidth = track.children[0].offsetWidth;
    const gap = 32; // 2rem = 32px
    const offset = currentServiceCarouselIdx * (cardWidth + gap);
    
    track.style.transform = `translateX(-${offset}px)`;
    
    // Update dots based on actual position in the original array
    const actualIndex = currentServiceCarouselIdx % repairSlides.length;
    dots.forEach((dot, i) => {
        if (i === actualIndex) {
            dot.classList.add('bg-primary', 'w-8');
            dot.classList.remove('bg-muted-foreground/30');
        } else {
            dot.classList.remove('bg-primary', 'w-8');
            dot.classList.add('bg-muted-foreground/30');
        }
    });
    
    // Handle infinite loop
    if (withTransition) {
        setTimeout(() => {
            handleServiceCarouselLoop();
            isServiceTransitioning = false;
        }, 700);
    } else {
        isServiceTransitioning = false;
    }
}

function handleServiceCarouselLoop() {
    const track = document.getElementById('service-carousel-track');
    if (!track) return;
    
    // If we've gone past the second set, jump back to the first set
    if (currentServiceCarouselIdx >= repairSlides.length * 2) {
        currentServiceCarouselIdx = repairSlides.length;
        track.style.transition = 'none';
        updateServiceCarouselPosition(false);
    }
    // If we've gone before the first set, jump to the second set
    else if (currentServiceCarouselIdx < repairSlides.length) {
        currentServiceCarouselIdx = repairSlides.length * 2 - 1;
        track.style.transition = 'none';
        updateServiceCarouselPosition(false);
    }
}


function renderReviews() {
    const reviewsList = document.getElementById('reviews-list');
    reviewsList.innerHTML = reviews.map(review => `
        <div class="bg-white border-none shadow-lg rounded-xl p-8">
            <div class="flex gap-1 mb-4">
                ${Array(review.rating).fill('<i data-lucide="star" class="w-4 h-4 fill-primary text-primary"></i>').join('')}
            </div>
            <p class="text-lg italic mb-6">"${review.text}"</p>
            <div class="flex items-center justify-between mt-auto">
                <span class="font-bold">${review.name}</span>
                <span class="text-sm text-muted-foreground">${review.date}</span>
            </div>
        </div>
    `).join('');
}

function renderDeviceShowcase() {
    const showcaseContainer = document.getElementById('device-showcase-container');
    
    // Check if mobile
    const isMobile = window.innerWidth < 1024;
    
    if (isMobile) {
        // Mobile: Single card with sliding images inside
        showcaseContainer.innerHTML = `
            <div class="max-w-3xl mx-auto px-4">
                <div class="bg-white border border-border rounded-2xl overflow-hidden shadow-lg">
                    <div class="relative aspect-[16/9] bg-muted/30 overflow-hidden">
                        <div id="mobile-showcase-track" class="flex h-full transition-transform duration-700 ease-in-out">
                            ${showcaseSlides.map(slide => `
                                <img src="${slide.image}" alt="${slide.title}" class="w-full h-full object-contain flex-shrink-0">
                            `).join('')}
                        </div>
                        <!-- Navigation Dots -->
                        <div id="mobile-showcase-dots" class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                            ${showcaseSlides.map((_, i) => `
                                <span class="w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === 0 ? 'bg-white scale-125' : 'bg-white/40'}"></span>
                            `).join('')}
                        </div>
                    </div>
                    <div class="p-8 text-center" id="mobile-showcase-text">
                        <h3 class="text-2xl font-bold mb-3">${showcaseSlides[0].title}</h3>
                        <p class="text-muted-foreground text-lg max-w-xl mx-auto">${showcaseSlides[0].description}</p>
                    </div>
                </div>
            </div>
        `;
        initMobileShowcase();
    } else {
        // Desktop: 3-card carousel with sliding effect (right -> middle -> left)
        // Create extended array for infinite loop: [...slides, ...slides, ...slides]
        const extendedSlides = [...showcaseSlides, ...showcaseSlides, ...showcaseSlides];
        
        showcaseContainer.innerHTML = `
            <div class="container mx-auto px-4">
                <div class="relative overflow-hidden">
                    <div id="desktop-carousel-track" class="flex gap-8 transition-transform duration-700 ease-in-out -mx-4 px-4">
                        ${extendedSlides.map((slide, i) => `
                            <div class="flex-shrink-0 w-full md:w-[calc(33.333%-1.333rem)] bg-white border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                                <div class="relative aspect-[16/9] bg-muted/30 rounded-t-2xl overflow-hidden">
                                    <img src="${slide.image}" alt="${slide.title}" class="w-full h-full object-contain">
                                </div>
                                <div class="p-6 text-center">
                                    <h3 class="text-xl font-bold mb-2">${slide.title}</h3>
                                    <p class="text-muted-foreground">${slide.description}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                <!-- Navigation Dots -->
                <div id="desktop-carousel-dots" class="flex justify-center gap-2 mt-8">
                    ${showcaseSlides.map((_, i) => `
                        <div class="w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${i === 0 ? 'bg-primary w-8' : 'bg-muted-foreground/30'}" onclick="goToDesktopSlide(${i})"></div>
                    `).join('')}
                </div>
            </div>
        `;
        initDesktopCarousel();
    }
    
    lucide.createIcons();
}

// Mobile showcase slider
let currentMobileShowcaseIdx = 0;
let mobileShowcaseInterval;

function initMobileShowcase() {
    startMobileShowcaseInterval();
}

function startMobileShowcaseInterval() {
    clearInterval(mobileShowcaseInterval);
    mobileShowcaseInterval = setInterval(() => {
        moveMobileShowcaseSlide(1);
    }, 4000);
}

function moveMobileShowcaseSlide(direction) {
    const nextIdx = (currentMobileShowcaseIdx + direction + showcaseSlides.length) % showcaseSlides.length;
    updateMobileShowcaseUI(nextIdx);
    currentMobileShowcaseIdx = nextIdx;
}

function updateMobileShowcaseUI(nextIdx) {
    const imageTrack = document.getElementById('mobile-showcase-track');
    const textContainer = document.getElementById('mobile-showcase-text');
    const dotsContainer = document.getElementById('mobile-showcase-dots');
    
    if (!imageTrack || !textContainer || !dotsContainer) return;
    
    const dots = dotsContainer.children;
    
    // Image Transition
    imageTrack.style.transform = `translateX(-${nextIdx * 100}%)`;
    
    // Text Transition
    textContainer.classList.add('text-fade-out');
    
    setTimeout(() => {
        textContainer.innerHTML = `
            <h3 class="text-2xl font-bold mb-3">${showcaseSlides[nextIdx].title}</h3>
            <p class="text-muted-foreground text-lg max-w-xl mx-auto">${showcaseSlides[nextIdx].description}</p>
        `;
        textContainer.classList.remove('text-fade-out');
        textContainer.classList.add('text-fade-in');
        
        setTimeout(() => {
            textContainer.classList.remove('text-fade-in');
        }, 500);
    }, 350);
    
    // Update Dots
    Array.from(dots).forEach((dot, i) => {
        if (i === nextIdx) {
            dot.classList.add('bg-white', 'scale-125');
            dot.classList.remove('bg-white/40');
        } else {
            dot.classList.remove('bg-white', 'scale-125');
            dot.classList.add('bg-white/40');
        }
    });
}

// Desktop 3-card carousel
let currentDesktopCarouselIdx = showcaseSlides.length; // Start at middle set
let desktopCarouselInterval;
let isDesktopTransitioning = false;

function initDesktopCarousel() {
    const track = document.getElementById('desktop-carousel-track');
    if (!track) return;
    
    // Position at the middle set initially (showing cards 0, 1, 2)
    updateDesktopCarouselPosition(false);
    
    // Start auto-sliding
    startDesktopCarouselInterval();
}

function startDesktopCarouselInterval() {
    clearInterval(desktopCarouselInterval);
    desktopCarouselInterval = setInterval(() => {
        moveDesktopCarousel(1);
    }, 4000);
}

function moveDesktopCarousel(direction) {
    if (isDesktopTransitioning) return;
    
    currentDesktopCarouselIdx += direction;
    updateDesktopCarouselPosition(true);
}

function goToDesktopSlide(index) {
    if (isDesktopTransitioning) return;
    
    clearInterval(desktopCarouselInterval);
    currentDesktopCarouselIdx = showcaseSlides.length + index;
    updateDesktopCarouselPosition(true);
    startDesktopCarouselInterval();
}

function updateDesktopCarouselPosition(withTransition) {
    const track = document.getElementById('desktop-carousel-track');
    const dots = document.querySelectorAll('#desktop-carousel-dots > div');
    
    if (!track) return;
    
    isDesktopTransitioning = true;
    
    // Enable/disable transition
    if (withTransition) {
        track.style.transition = 'transform 0.7s ease-in-out';
    } else {
        track.style.transition = 'none';
    }
    
    // Calculate position - show 3 cards at once
    const cardWidth = track.children[0].offsetWidth;
    const gap = 32; // 2rem = 32px
    const offset = currentDesktopCarouselIdx * (cardWidth + gap);
    
    track.style.transform = `translateX(-${offset}px)`;
    
    // Update dots based on actual position in the original array
    const actualIndex = currentDesktopCarouselIdx % showcaseSlides.length;
    dots.forEach((dot, i) => {
        if (i === actualIndex) {
            dot.classList.add('bg-primary', 'w-8');
            dot.classList.remove('bg-muted-foreground/30');
        } else {
            dot.classList.remove('bg-primary', 'w-8');
            dot.classList.add('bg-muted-foreground/30');
        }
    });
    
    // Handle infinite loop
    if (withTransition) {
        setTimeout(() => {
            handleDesktopCarouselLoop();
            isDesktopTransitioning = false;
        }, 700);
    } else {
        isDesktopTransitioning = false;
    }
}

function handleDesktopCarouselLoop() {
    const track = document.getElementById('desktop-carousel-track');
    if (!track) return;
    
    // If we've gone past the second set, jump back to the first set
    if (currentDesktopCarouselIdx >= showcaseSlides.length * 2) {
        currentDesktopCarouselIdx = showcaseSlides.length;
        track.style.transition = 'none';
        updateDesktopCarouselPosition(false);
    }
    // If we've gone before the first set, jump to the second set
    else if (currentDesktopCarouselIdx < showcaseSlides.length) {
        currentDesktopCarouselIdx = showcaseSlides.length * 2 - 1;
        track.style.transition = 'none';
        updateDesktopCarouselPosition(false);
    }
}

// Re-render on window resize with improved debouncing
let resizeTimeout;
let lastWidth = window.innerWidth;

window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        const currentWidth = window.innerWidth;
        const wasMobile = document.getElementById('mobile-showcase-track') !== null;
        const isMobile = currentWidth < 1024;
        
        // Only re-render if we're switching between mobile and desktop
        if (wasMobile !== isMobile) {
            // Clear all intervals before re-rendering
            clearInterval(mobileShowcaseInterval);
            clearInterval(mobileServiceInterval);
            clearInterval(desktopCarouselInterval);
            clearInterval(serviceCarouselInterval);
            
            renderDeviceShowcase();
            renderServiceCards();
        } else if (!isMobile && Math.abs(currentWidth - lastWidth) > 50) {
            // On desktop resize (only if significant change), update carousel positions
            requestAnimationFrame(() => {
                updateDesktopCarouselPosition(false);
                updateServiceCarouselPosition(false);
            });
        }
        
        lastWidth = currentWidth;
    }, 150);
}, { passive: true });


// Logic Functions
function toggleFaq(button) {
    const content = button.nextElementSibling;
    const icon = button.querySelector('[data-lucide="chevron-down"]');
    
    const isOpen = !content.classList.contains('hidden');
    
    if (isOpen) {
        content.classList.add('hidden');
        icon.style.transform = 'rotate(0deg)';
    } else {
        content.classList.remove('hidden');
        icon.style.transform = 'rotate(180deg)';
    }
}

function handleDeviceSelect(id) {
    selectedDevice = id;
    renderProblems();
    goToStep(2);
}

function renderProblems() {
    const problemList = document.getElementById('problem-list');
    const problems = deviceProblems[selectedDevice] || [];
    problemList.innerHTML = problems.map(problem => {
        const escapedProblem = problem.replace(/'/g, "\\'");
        return `
            <div class="bg-white border border-border p-6 rounded-xl flex items-center justify-between cursor-pointer transition-all hover:bg-accent/50 ${problem === "Something else — let's chat" ? 'card-frosted-green' : ''}" onclick="handleProblemSelect('${escapedProblem}')">
                <div class="flex items-center gap-3">
                    ${problem === "Something else — let's chat" ? '<i data-lucide="message-circle" class="w-5 h-5 text-green-600"></i>' : ''}
                    <span class="font-medium">${problem}</span>
                </div>
                <i data-lucide="chevron-right" class="w-4 h-4 text-muted-foreground"></i>
            </div>
        `;
    }).join('');
    lucide.createIcons();
}

function handleProblemSelect(problem) {
    selectedProblem = problem;
    goToStep(3);
}

function goToStep(step) {
    currentStep = step;
    document.querySelectorAll('.step-content').forEach(el => el.classList.remove('active'));
    document.getElementById(`step-${step}`).classList.add('active');
    
    // Update indicators
    document.querySelectorAll('#step-indicators div').forEach((el, idx) => {
        if (idx + 1 <= step) {
            el.classList.add('bg-primary');
            el.classList.remove('bg-muted');
        } else {
            el.classList.remove('bg-primary');
            el.classList.add('bg-muted');
        }
    });
    
    lucide.createIcons();
}

// Form Submission
document.getElementById('quote-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name').trim();
    const phone = formData.get('phone').trim();
    const model = formData.get('model').trim();
    const description = (formData.get('description') || "").trim();
    const deviceName = devices.find(d => d.id === selectedDevice)?.name || selectedDevice;

    const intro = name ? `Hi, this is ${name}.` : "Hi there,";
    const deviceDisplay = model ? `${deviceName} ${model}` : deviceName;

    let message = `${intro}\n\nI need help with my ${deviceDisplay}.\n\nThe issue is ${selectedProblem}.`;
    
    if (description) {
        message += `\n\n${description}`;
    }
    
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank");
    
    // Update direct link in success overlay
    document.getElementById('whatsapp-direct-link').href = waUrl;
    
    document.getElementById('success-overlay').classList.add('active');
});

function resetInquiry() {
    document.getElementById('success-overlay').classList.remove('active');
    document.getElementById('quote-form').reset();
    goToStep(1);
    selectedDevice = "";
    selectedProblem = "";
}

// ============================================
// PREMIUM 2026 ENHANCEMENTS
// ============================================

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Initialize scroll animations
function initScrollAnimations() {
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.classList.add('fade-in-up');
        if (index > 0) {
            fadeInObserver.observe(section);
        } else {
            section.classList.add('visible');
        }
    });

    const reviewCards = document.querySelectorAll('#reviews-list > div');
    reviewCards.forEach((card, index) => {
        card.classList.add('fade-in-up', `stagger-${Math.min(index + 1, 6)}`);
        fadeInObserver.observe(card);
    });

    const faqItems = document.querySelectorAll('#faq .border');
    faqItems.forEach((item, index) => {
        item.classList.add('fade-in-up', `stagger-${Math.min(index + 1, 6)}`);
        fadeInObserver.observe(item);
    });
}

// Ripple effect on button clicks
function createRipple(event) {
    const button = event.currentTarget;
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');

    button.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Add ripple effect to all buttons
function initRippleEffects() {
    const buttons = document.querySelectorAll('button, a[class*="bg-"]');
    buttons.forEach(button => {
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.addEventListener('click', createRipple);
    });
}

// Enhanced navbar on scroll
function handleNavbarScroll() {
    const navbar = document.querySelector('nav');
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Throttled scroll handler
let ticking = false;
function onScroll() {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            handleNavbarScroll();
            handleParallax();
            ticking = false;
        });
        ticking = true;
    }
}

// Parallax effect for hero section
function handleParallax() {
    const heroSection = document.querySelector('section');
    if (!heroSection) return;

    const scrolled = window.pageYOffset;
    const parallaxElements = heroSection.querySelectorAll('.absolute');
    
    parallaxElements.forEach((el, index) => {
        const speed = 0.5 + (index * 0.1);
        const yPos = -(scrolled * speed);
        el.style.transform = `translateY(${yPos}px)`;
    });
}

// Add gradient overlay to cards on hover
function initCardEnhancements() {
    const cards = document.querySelectorAll('.bg-white.border');
    cards.forEach(card => {
        card.classList.add('gradient-overlay');
    });
}

// Smooth scroll to anchor links
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#' || href === '') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offset = 80;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Add hover effects to navigation links
function initNavLinkEffects() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.classList.add('nav-link');
    });
}

// Enhanced image loading
function initImageLoading() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (!img.complete) {
            img.style.opacity = '0';
            img.addEventListener('load', () => {
                img.style.transition = 'opacity 0.6s ease-in-out';
                img.style.opacity = '1';
            });
        }
    });
}

// Add floating animation to hero badge
function initFloatingElements() {
    const heroBadge = document.querySelector('section span.inline-block');
    if (heroBadge) {
        heroBadge.classList.add('float-animation');
    }
}

// Initialize all premium enhancements
function initPremiumEnhancements() {
    initScrollAnimations();
    initRippleEffects();
    initCardEnhancements();
    initSmoothScroll();
    initNavLinkEffects();
    initImageLoading();
    initFloatingElements();
    
    window.addEventListener('scroll', onScroll, { passive: true });
    handleNavbarScroll();
}

// Run premium enhancements
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        initPremiumEnhancements();
    }, 100);
});

// Performance performance handler
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        document.body.style.animationPlayState = 'paused';
    } else {
        document.body.style.animationPlayState = 'running';
    }
});
