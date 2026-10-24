const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-nav-link');
if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
}
const projectData = {
  'job-app': {
    title: 'Job Application Website',
    tagline: 'Enterprise Portal System',
    category: 'Web Application',
    status: 'Production Ready',
    url: 'https://aarongitonga.dev/job-application-portal',
    gradient: 'from-indigo-900 via-slate-900 to-brand-900',
    shortDesc: 'A responsive recruitment portal with multi-step workflows, resume validation, and real-time candidate feedback.',
    overview: 'Engineered as an end-to-end recruitment interface connecting prospective talent with hiring companies. This solution prioritizes effortless multi-step application sequences, accessible input semantics, real-time client-side validation, and instant applicant status feedback without friction.',
    features: [{
      icon: 'fa-file-arrow-up',
      title: 'File Upload & Verification',
      desc: 'Secure resume file size checks, MIME-type screening, and instant visual upload status.'
    }, {
      icon: 'fa-list-check',
      title: 'Multi-Step Application Wizard',
      desc: 'Intuitive progress indicator preventing form fatigue and reducing bounce rates.'
    }, {
      icon: 'fa-filter',
      title: 'Role & Department Filters',
      desc: 'Quick dynamic client-side filtering by department, remote status, and salary bracket.'
    }, {
      icon: 'fa-bell',
      title: 'Real-Time Submission Alerts',
      desc: 'Accessible modal notifications and instant email dispatch confirmations.'
    }],
    techStack: ['HTML5 Semantic Markup', 'CSS3 Grid & Flexbox', 'Vanilla JavaScript (ES6+)', 'Form Validation API',
      'Responsive Layouts'
    ],
    mockupHtml: `
        <div class="space-y-3">
          <div class="flex items-center justify-between pb-2 border-b border-slate-200">
            <div>
              <span class="text-[10px] font-bold text-brand-600 uppercase tracking-wider">Hiring Dashboard</span>
              <h5 class="text-sm font-bold text-slate-800">Available Positions (3 Open)</h5>
            </div>
            <span class="px-2 py-0.5 text-[10px] rounded bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200">Accepting</span>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
            <div class="p-2.5 bg-orange-50/60 rounded-lg border border-orange-200">
              <div class="font-bold text-slate-900 text-xs">Senior Frontend Eng</div>
              <div class="text-slate-500 text-[10px]">Remote • Nairobi</div>
              <div class="mt-1 text-[9px] font-bold text-brand-600 uppercase">Apply in 3 Steps &rarr;</div>
            </div>
            <div class="p-2.5 bg-white rounded-lg border border-slate-200">
              <div class="font-bold text-slate-900 text-xs">UI/UX Designer</div>
              <div class="text-slate-500 text-[10px]">Hybrid • Full-Time</div>
              <div class="mt-1 text-[9px] font-bold text-slate-500 uppercase">Reviewing</div>
            </div>
            <div class="p-2.5 bg-white rounded-lg border border-slate-200">
              <div class="font-bold text-slate-900 text-xs">Junior Web Developer</div>
              <div class="text-slate-500 text-[10px]">Remote • Active</div>
              <div class="mt-1 text-[9px] font-bold text-brand-600 uppercase">Open &rarr;</div>
            </div>
          </div>
          <div class="p-2 rounded-lg bg-slate-100 flex items-center justify-between text-[11px] text-slate-600">
            <span class="flex items-center gap-1.5"><i class="fa-solid fa-file-pdf text-rose-500"></i> resume_sample_applicant.pdf (1.2 MB)</span>
            <span class="text-emerald-600 font-bold"><i class="fa-solid fa-check"></i> Verified</span>
          </div>
        </div>
      `
  },
  'portfolio': {
    title: 'Portfolio Website',
    tagline: 'Brand Showcase & Lead Generation',
    category: 'Personal Brand',
    status: 'Live Architecture',
    url: 'https://aarongitonga.dev',
    gradient: 'from-amber-900 via-orange-950 to-slate-900',
    shortDesc: 'Personal high-converting developer portfolio highlighting core strengths, client satisfaction achievements, and modern UX.',
    overview: 'Designed and crafted to embody Aaron Gitonga\'s dedication to client satisfaction, speed, and modern frontend aesthetics. Includes micro-interactions, responsive hero presentation, curated project showcases with modular modal dialogues, and instant inquiry pathways.',
    features: [{
      icon: 'fa-wand-magic-sparkles',
      title: 'Interactive Modal Dialogs',
      desc: 'Accessible, keyboard-navigable preview windows for comprehensive portfolio exploration.'
    }, {
      icon: 'fa-bolt',
      title: 'Lightning Performance',
      desc: 'Zero runtime framework overhead, clean CSS architecture, and optimal image assets.'
    }, {
      icon: 'fa-mobile-screen-button',
      title: 'Mobile-First Responsiveness',
      desc: 'Flawless presentation on handheld devices, tablets, and wide desktop displays.'
    }, {
      icon: 'fa-comments',
      title: 'Multi-Channel CTA Touchpoints',
      desc: 'Seamless WhatsApp and direct email links maximizing prospect conversion.'
    }],
    techStack: ['HTML5 Semantic Boilerplate', 'Tailwind CSS Utility Engine', 'JavaScript DOM Architecture',
      'Accessible ARIA Dialogs', 'Responsive SVG Assets'
    ],
    mockupHtml: `
        <div class="space-y-3">
          <div class="p-3 bg-orange-50/70 rounded-xl border border-orange-200 flex items-center justify-between gap-3">
            <div class="flex items-center gap-2.5">
              <div class="w-8 h-8 rounded-lg bg-brand-600 text-white flex items-center justify-center font-bold text-xs">AG</div>
              <div>
                <h6 class="font-bold text-slate-900 text-xs">Aaron Gitonga — Frontend Developer</h6>
                <p class="text-[10px] text-slate-600">Client Satisfaction Focus • 2+ Years Experience</p>
              </div>
            </div>
            <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-white text-brand-600 shadow-xs border border-orange-100">100% Satisfied</span>
          </div>
          <div class="grid grid-cols-4 gap-1.5 text-center text-[10px]">
            <div class="p-1.5 bg-white rounded border border-slate-200 font-semibold text-slate-700">HTML5</div>
            <div class="p-1.5 bg-white rounded border border-slate-200 font-semibold text-slate-700">Tailwind</div>
            <div class="p-1.5 bg-white rounded border border-slate-200 font-semibold text-slate-700">JavaScript</div>
            <div class="p-1.5 bg-white rounded border border-slate-200 font-semibold text-brand-600">4 Systems</div>
          </div>
        </div>
      `
  },
  'form-query': {
    title: 'Form Query Website',
    tagline: 'Inquiry & Feedback Engine',
    category: 'Interactive Tool',
    status: 'Production Ready',
    url: 'https://aarongitonga.dev/form-query-tool',
    gradient: 'from-emerald-950 via-teal-900 to-slate-900',
    shortDesc: 'Engineered dynamic query interface featuring instant client-side validation, conditional fields, and customer feedback processing.',
    overview: 'A robust feedback collection and inquiry processing tool created to handle complex user data smoothly. Features dynamic branch questions, customized field masking, instant client-side feedback indicators, and structured JSON output for backend or API consumption.',
    features: [{
      icon: 'fa-shield-halved',
      title: 'Instant Live Validation',
      desc: 'Instant inline error signaling with accessible helper texts and regex checking.'
    }, {
      icon: 'fa-code-branch',
      title: 'Conditional Input Logic',
      desc: 'Dynamically adapts question fields based on user answers and inquiry categories.'
    }, {
      icon: 'fa-paper-plane',
      title: 'Feedback Dispatch Engine',
      desc: 'Asynchronous event handling preventing form reloads and confirming delivery.'
    }, {
      icon: 'fa-database',
      title: 'Session State Persistence',
      desc: 'Retains incomplete entries in localStorage to prevent accidental customer data loss.'
    }],
    techStack: ['HTML5 Advanced Forms', 'JavaScript Regex & Validation', 'Custom CSS Architecture',
      'Async Fetch API Handling', 'LocalStorage API'
    ],
    mockupHtml: `
        <div class="space-y-2.5">
          <div class="flex items-center justify-between pb-2 border-b border-slate-200">
            <span class="text-[10px] font-bold text-emerald-600 uppercase tracking-wider flex items-center gap-1">
              <i class="fa-solid fa-circle-check"></i> Form Validator Active
            </span>
            <span class="text-[10px] font-mono text-slate-400">Step 2 of 3</span>
          </div>
          <div class="space-y-2">
            <div>
              <label class="block text-[10px] font-bold text-slate-700 mb-0.5">Inquiry Subject</label>
              <div class="p-2 rounded bg-emerald-50 border border-emerald-300 text-xs text-slate-900 flex items-center justify-between">
                <span>Custom Website Development</span>
                <i class="fa-solid fa-check text-emerald-600"></i>
              </div>
            </div>
            <div class="grid grid-cols-2 gap-2">
              <div class="p-2 rounded bg-slate-50 border border-slate-200 text-[10px]">
                <span class="text-slate-400 block">Timeline</span>
                <span class="font-bold text-slate-800">2-3 Weeks</span>
              </div>
              <div class="p-2 rounded bg-slate-50 border border-slate-200 text-[10px]">
                <span class="text-slate-400 block">Specification</span>
                <span class="font-bold text-slate-800">Custom Quote</span>
              </div>
            </div>
          </div>
        </div>
      `
  },
  'shopping': {
    title: 'Shopping Website',
    tagline: 'Modern Retail Storefront',
    category: 'E-Commerce',
    status: 'Commercial Catalog',
    url: 'https://aarongitonga.dev/shopping-storefront',
    gradient: 'from-rose-950 via-slate-900 to-brand-950',
    shortDesc: 'Online retail storefront featuring product filtering, interactive shopping cart counter, detailed product modals, and streamlined checkout UI.',
    overview: 'A high-impact e-commerce frontend designed to maximize sales conversions. Equipped with an interactive reactive shopping cart counter, category & price range filtering, rich item detail modals, and intuitive checkout navigation that guarantees customer satisfaction.',
    features: [{
      icon: 'fa-cart-shopping',
      title: 'Reactive Shopping Cart',
      desc: 'Real-time item count badge, subtotal calculations, and slide-over mini-cart drawer.'
    }, {
      icon: 'fa-tags',
      title: 'Product Filtering & Search',
      desc: 'Instant item lookup by price, category, rating, and promotional discounts.'
    }, {
      icon: 'fa-eye',
      title: 'Quick-View Product Modals',
      desc: 'Allows customers to inspect item photos, select sizes, and add to bag without reloads.'
    }, {
      icon: 'fa-credit-card',
      title: 'Streamlined Checkout Flow',
      desc: 'Friction-free single-page ordering template optimized for mobile conversion.'
    }],
    techStack: ['HTML5 Semantic Layout', 'CSS Flexbox & CSS Grid', 'Stateful JavaScript Cart Engine',
      'Tailwind CSS Utilities', 'JSON Product Catalog'
    ],
    mockupHtml: `
        <div class="space-y-2.5">
          <div class="flex items-center justify-between pb-2 border-b border-slate-200">
            <div>
              <span class="text-[10px] font-bold text-rose-600 uppercase tracking-wider">Storefront Catalog</span>
              <h5 class="text-xs font-bold text-slate-800">Featured Collection</h5>
            </div>
            <span class="px-2 py-0.5 text-[10px] rounded-full bg-brand-50 text-brand-700 font-bold border border-brand-200 flex items-center gap-1">
              <i class="fa-solid fa-cart-shopping text-[9px]"></i> 2 Items ($74.00)
            </span>
          </div>
          <div class="grid grid-cols-2 gap-2 text-xs">
            <div class="p-2 bg-white rounded-lg border border-slate-200">
              <div class="font-bold text-slate-900 text-xs">Oxford Shirt</div>
              <div class="text-slate-500 text-[10px]">$34.00</div>
              <button class="mt-1 w-full py-0.5 bg-brand-600 text-white rounded text-[9px] font-bold">Added ✓</button>
            </div>
            <div class="p-2 bg-white rounded-lg border border-slate-200">
              <div class="font-bold text-slate-900 text-xs">Urban Sneakers</div>
              <div class="text-slate-500 text-[10px]">$40.00</div>
              <button class="mt-1 w-full py-0.5 bg-brand-600 text-white rounded text-[9px] font-bold">Added ✓</button>
            </div>
          </div>
        </div>
      `
  }
};
const modal = document.getElementById('projectModal');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalBottomCloseBtn = document.getElementById('modalBottomCloseBtn');
const modalBox = modal.querySelector('.modal-content-box');
const modalHeaderBg = document.getElementById('modalHeaderBg');
const modalCategoryBadge = document.getElementById('modalCategoryBadge');
const modalStatusText = document.getElementById('modalStatusText');
const modalTagline = document.getElementById('modalTagline');
const modalTitle = document.getElementById('modalTitle');
const modalShortDesc = document.getElementById('modalShortDesc');
const modalBrowserUrl = document.getElementById('modalBrowserUrl');
const modalMockupContent = document.getElementById('modalMockupContent');
const modalDetailedOverview = document.getElementById('modalDetailedOverview');
const modalFeaturesList = document.getElementById('modalFeaturesList');
const modalTechBadges = document.getElementById('modalTechBadges');
const modalContactCta = document.getElementById('modalContactCta');

function openProjectModal(projectId) {
  const data = projectData[projectId];
  if (!data) return;
  modalHeaderBg.className = `relative p-5 text-white flex flex-col justify-between bg-gradient-to-br ${data.gradient}`;
  modalCategoryBadge.textContent = data.category;
  modalStatusText.textContent = data.status;
  modalTagline.textContent = data.tagline;
  modalTitle.textContent = data.title;
  modalShortDesc.textContent = data.shortDesc;
  modalBrowserUrl.textContent = data.url;
  modalDetailedOverview.textContent = data.overview;
  modalFeaturesList.innerHTML = data.features.map(f => `
      <div class="p-2.5 rounded-lg bg-orange-50/50 border border-orange-100 flex items-start gap-2">
        <div class="w-6 h-6 rounded bg-brand-100 text-brand-600 flex items-center justify-center shrink-0 text-xs mt-0.5">
          <i class="fa-solid ${f.icon}"></i>
        </div>
        <div>
          <h6 class="font-bold text-[11px] text-slate-900">${f.title}</h6>
          <p class="text-[10px] text-slate-600 leading-snug">${f.desc}</p>
        </div>
      </div>
    `).join('');
  modalTechBadges.innerHTML = data.techStack.map(tech => `
      <span class="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px] font-semibold border border-slate-200">
        ${tech}
      </span>
    `).join('');
  modalMockupContent.innerHTML = data.mockupHtml;
  if (modalContactCta) {
    modalContactCta.onclick = () => {
      closeProjectModal();
    };
  }
  modal.classList.remove('opacity-0', 'pointer-events-none');
  modal.setAttribute('aria-hidden', 'false');
  modalBox.classList.remove('scale-95');
  modalBox.classList.add('scale-100');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  modal.classList.add('opacity-0', 'pointer-events-none');
  modal.setAttribute('aria-hidden', 'true');
  modalBox.classList.remove('scale-100');
  modalBox.classList.add('scale-95');
  document.body.style.overflow = '';
}
document.querySelectorAll('[data-project]').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const projectId = trigger.getAttribute('data-project');
    if (projectId) {
      openProjectModal(projectId);
    }
  });
});
if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProjectModal);
if (modalBottomCloseBtn) modalBottomCloseBtn.addEventListener('click', closeProjectModal);
if (modalBackdrop) modalBackdrop.addEventListener('click', closeProjectModal);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.classList.contains('pointer-events-none')) {
    closeProjectModal();
  }
});
