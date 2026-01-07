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

const devices = [
    { id: "iphone", name: "iPhone", icon: "smartphone" },
    { id: "macbook", name: "MacBook", icon: "laptop" },
    { id: "ipad", name: "iPad", icon: "tablet" },
    { id: "watch", name: "Apple Watch", icon: "watch" },
    { id: "imac", name: "iMac", icon: "monitor" },
    { id: "other", name: "Other", icon: "check-circle-2" },
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
let currentServiceSlide = 0;

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
        <div class="bg-white border border-border p-8 rounded-xl flex flex-col items-center justify-center cursor-pointer transition-all hover:ring-2 hover:ring-primary/50" onclick="handleDeviceSelect('${device.id}')">
            <i data-lucide="${device.icon}" class="w-10 h-10 mb-4 text-primary"></i>
            <span class="font-semibold">${device.name}</span>
        </div>
    `).join('');
}

function renderServiceCards() {
    const serviceCards = document.getElementById('service-cards');
    
    serviceCards.innerHTML = `
        <div class="service-card bg-white border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
            <div class="relative h-64 md:h-96 overflow-hidden">
                <div id="service-image-track" class="flex h-full transition-transform duration-700 ease-in-out gap-8">
                    ${repairSlides.map(slide => `
                        <img src="${slide.image}" alt="${slide.title}" class="w-full h-full object-cover flex-shrink-0">
                    `).join('')}
                </div>
                <!-- Navigation Buttons -->
                <button onclick="prevServiceSlide()" class="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white" aria-label="Previous Slide">
                    <i data-lucide="chevron-left" class="w-6 h-6"></i>
                </button>
                <button onclick="nextServiceSlide()" class="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white" aria-label="Next Slide">
                    <i data-lucide="chevron-right" class="w-6 h-6"></i>
                </button>
                
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
    `;
    
    lucide.createIcons();
    initServiceCardSliders();
}

let serviceInterval;
let currentServiceIdx = 0;

function initServiceCardSliders() {
    startServiceInterval();
}

function startServiceInterval() {
    clearInterval(serviceInterval);
    serviceInterval = setInterval(() => {
        moveServiceSlide(1);
    }, 4000);
}

function prevServiceSlide() {
    moveServiceSlide(-1);
    startServiceInterval();
}

function nextServiceSlide() {
    moveServiceSlide(1);
    startServiceInterval();
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
    if (!dotsContainer) return;
    const dots = dotsContainer.children;
    
    // Image Transition
    imageTrack.style.transform = `translateX(calc(-${nextIdx} * (100% + 2rem)))`;
    
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
    
    showcaseContainer.innerHTML = `
        <div class="service-card bg-white border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
            <div class="relative h-64 md:h-96 overflow-hidden">
                <div id="showcase-image-track" class="flex h-full transition-transform duration-700 ease-in-out gap-8">
                    ${showcaseSlides.map(slide => `
                        <img src="${slide.image}" alt="${slide.title}" class="w-full h-full object-cover flex-shrink-0">
                    `).join('')}
                </div>
                <!-- Navigation Buttons -->
                <button onclick="prevShowcaseSlide()" class="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white" aria-label="Previous Showcase Slide">
                    <i data-lucide="chevron-left" class="w-6 h-6"></i>
                </button>
                <button onclick="nextShowcaseSlide()" class="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white" aria-label="Next Showcase Slide">
                    <i data-lucide="chevron-right" class="w-6 h-6"></i>
                </button>

                <div id="showcase-dots" class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    ${showcaseSlides.map((_, i) => `
                        <span class="w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === 0 ? 'bg-white scale-125' : 'bg-white/40'}"></span>
                    `).join('')}
                </div>
            </div>
            <div class="p-8 text-center" id="showcase-text-container">
                <h3 class="text-2xl font-bold mb-3">${showcaseSlides[0].title}</h3>
                <p class="text-muted-foreground text-lg max-w-xl mx-auto">${showcaseSlides[0].description}</p>
            </div>
        </div>
    `;
    
    lucide.createIcons();
    initDeviceShowcaseSlider();
}

let showcaseInterval;
let currentShowcaseIdx = 0;

function initDeviceShowcaseSlider() {
    startShowcaseInterval();
}

function startShowcaseInterval() {
    clearInterval(showcaseInterval);
    showcaseInterval = setInterval(() => {
        moveShowcaseSlide(1);
    }, 4000);
}

function prevShowcaseSlide() {
    moveShowcaseSlide(-1);
    startShowcaseInterval();
}

function nextShowcaseSlide() {
    moveShowcaseSlide(1);
    startShowcaseInterval();
}

function moveShowcaseSlide(direction) {
    const nextIdx = (currentShowcaseIdx + direction + showcaseSlides.length) % showcaseSlides.length;
    updateShowcaseUI(nextIdx);
    currentShowcaseIdx = nextIdx;
}

function updateShowcaseUI(nextIdx) {
    const imageTrack = document.getElementById('showcase-image-track');
    const textContainer = document.getElementById('showcase-text-container');
    const dotsContainer = document.getElementById('showcase-dots');
    if (!dotsContainer) return;
    const dots = dotsContainer.children;
    
    // Image Transition
    imageTrack.style.transform = `translateX(calc(-${nextIdx} * (100% + 2rem)))`;
    
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
            <div class="bg-white border border-border p-6 rounded-xl flex items-center justify-between cursor-pointer transition-all hover:bg-accent/50 ${problem === "Something else — let's chat" ? 'border-green-500/50' : ''}" onclick="handleProblemSelect('${escapedProblem}')">
                <div class="flex items-center gap-3">
                    ${problem === "Something else — let's chat" ? '<i data-lucide="message-circle" class="w-5 h-5 text-green-500"></i>' : ''}
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

function goToServiceSlide(idx) {
    currentServiceSlide = idx;
    updateServiceCarousel();
}

function updateServiceCarousel() {
    const track = document.getElementById('service-track');
    const dots = document.getElementById('service-dots');
    
    track.style.transform = `translateX(-${currentServiceSlide * 100}%)`;
    
    Array.from(dots.children).forEach((dot, idx) => {
        if (idx === currentServiceSlide) {
            dot.classList.add('bg-primary', 'w-8');
            dot.classList.remove('bg-muted-foreground/30');
        } else {
            dot.classList.remove('bg-primary', 'w-8');
            dot.classList.add('bg-muted-foreground/30');
        }
    });
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

// Liquid Glass Draggability
document.querySelectorAll('.liquid-glass').forEach(el => {
    let isDragging = false;
    let currentX = 0;
    let currentY = 0;
    let initialX = 0;
    let initialY = 0;
    let xOffset = 0;
    let yOffset = 0;

    el.style.transform = `translate3d(${xOffset}px, ${yOffset}px, 0)`;

    el.addEventListener('mousedown', dragStart);
    document.addEventListener('mousemove', dragMove);
    document.addEventListener('mouseup', dragEnd);

    el.addEventListener('touchstart', dragStart, { passive: false });
    document.addEventListener('touchmove', dragMove, { passive: false });
    document.addEventListener('touchend', dragEnd);

    function dragStart(e) {
        if (e.type === "touchstart") {
            initialX = e.touches[0].clientX - xOffset;
            initialY = e.touches[0].clientY - yOffset;
        } else {
            initialX = e.clientX - xOffset;
            initialY = e.clientY - yOffset;
        }

        if (e.target.closest('.liquid-glass') === el) {
            isDragging = true;
            el.classList.add('dragging');
        }
    }

    function dragMove(e) {
        if (isDragging) {
            e.preventDefault();

            if (e.type === "touchmove") {
                currentX = e.touches[0].clientX - initialX;
                currentY = e.touches[0].clientY - initialY;
            } else {
                currentX = e.clientX - initialX;
                currentY = e.clientY - initialY;
            }

            xOffset = currentX;
            yOffset = currentY;

            setTranslate(currentX, currentY, el);
        }
    }

    function dragEnd() {
        initialX = currentX;
        initialY = currentY;
        isDragging = false;
        el.classList.remove('dragging');
    }

    function setTranslate(xPos, yPos, el) {
        el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
    }
});
