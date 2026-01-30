import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

// Page d'accueil - Design Dashboard/SaaS
app.get('/', (c) => {
  return c.render(
    <>
      {/* Dashboard Layout */}
      <div class="flex min-h-screen bg-gray-50">
        
        {/* Sidebar Navigation */}
        <aside id="sidebar" class="fixed left-0 top-0 h-full w-64 bg-white shadow-lg z-40 transform transition-transform duration-300 md:translate-x-0 -translate-x-full">
          <div class="flex flex-col h-full">
            
            {/* Logo */}
            <div class="p-6 border-b border-gray-100">
              <a href="/" class="flex items-center space-x-2">
                <div class="w-10 h-10 bg-gradient-to-br from-quube-yellow to-quube-yellow-neon rounded-lg flex items-center justify-center">
                  <span class="text-white font-bold text-xl">Q</span>
                </div>
                <div>
                  <div class="font-bold text-quube-black text-lg">QUUBE</div>
                  <div class="text-xs text-quube-gray">IA Santé</div>
                </div>
              </a>
            </div>

            {/* Navigation Items */}
            <nav class="flex-1 p-4 space-y-1 overflow-y-auto">
              <a href="#dashboard" class="flex items-center space-x-3 px-4 py-3 rounded-lg bg-quube-yellow/10 text-quube-black font-medium">
                <i class="fas fa-home w-5"></i>
                <span>Dashboard</span>
              </a>
              
              <a href="#services" class="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-50 text-quube-gray-dark hover:text-quube-black transition-colors">
                <i class="fas fa-briefcase w-5"></i>
                <span>Nos Services</span>
              </a>

              {/* Thématiques avec sous-menu */}
              <div class="pt-4">
                <div class="px-4 py-2 text-xs font-semibold text-quube-gray uppercase tracking-wider">
                  Thématiques
                </div>
                
                <a href="#compliance" class="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-50 text-quube-gray-dark hover:text-quube-black transition-colors">
                  <i class="fas fa-shield-alt w-5 text-blue-500"></i>
                  <span>Compliance</span>
                </a>
                
                <a href="#data-analyse" class="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-50 text-quube-gray-dark hover:text-quube-black transition-colors">
                  <i class="fas fa-chart-line w-5 text-green-500"></i>
                  <span>Data Analyse</span>
                </a>
                
                <a href="#gestion-projet" class="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-50 text-quube-gray-dark hover:text-quube-black transition-colors">
                  <i class="fas fa-project-diagram w-5 text-orange-500"></i>
                  <span>Gestion Projet IA</span>
                </a>
                
                <a href="#fonctions-supports" class="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-50 text-quube-gray-dark hover:text-quube-black transition-colors">
                  <i class="fas fa-building w-5 text-purple-500"></i>
                  <span>Fonctions Supports</span>
                </a>
                
                <a href="#gains-administratifs" class="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-50 text-quube-gray-dark hover:text-quube-black transition-colors">
                  <i class="fas fa-bolt w-5 text-yellow-500"></i>
                  <span>Gains Admin</span>
                </a>
              </div>

              <a href="#cas-usage" class="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-50 text-quube-gray-dark hover:text-quube-black transition-colors">
                <i class="fas fa-users w-5"></i>
                <span>Cas d'Usage</span>
              </a>
              
              <a href="#blog" class="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-50 text-quube-gray-dark hover:text-quube-black transition-colors">
                <i class="fas fa-blog w-5"></i>
                <span>Blog</span>
              </a>
            </nav>

            {/* CTA Bottom */}
            <div class="p-4 border-t border-gray-100">
              <a href="#contact" class="block w-full bg-gradient-to-r from-quube-yellow to-quube-yellow-neon text-quube-black text-center px-4 py-3 rounded-lg font-bold hover:shadow-lg transition-all">
                <i class="fas fa-calendar-alt mr-2"></i>
                Prendre RDV
              </a>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main class="flex-1 md:ml-64">
          
          {/* Top Bar */}
          <header class="sticky top-0 bg-white border-b border-gray-200 z-30">
            <div class="flex items-center justify-between px-6 py-4">
              
              {/* Mobile Menu Button */}
              <button id="mobile-menu-button" class="md:hidden text-quube-gray-dark hover:text-quube-black">
                <i class="fas fa-bars text-xl"></i>
              </button>

              {/* Search Bar */}
              <div class="hidden md:flex flex-1 max-w-md">
                <div class="relative w-full">
                  <input 
                    type="text" 
                    placeholder="Rechercher..." 
                    class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-quube-yellow focus:border-transparent"
                  />
                  <i class="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                </div>
              </div>

              {/* Top Right Actions */}
              <div class="flex items-center space-x-4">
                <a href="#contact" class="hidden sm:flex items-center space-x-2 bg-quube-yellow hover:bg-quube-yellow-neon px-4 py-2 rounded-lg font-semibold transition-colors">
                  <i class="fas fa-calendar-check"></i>
                  <span>Prendre RDV</span>
                </a>
              </div>
            </div>
          </header>

          {/* Dashboard Content */}
          <div class="p-6 space-y-6">
            
            {/* Hero Section */}
            <div class="bg-gradient-to-br from-quube-blue to-blue-600 rounded-2xl p-8 text-white shadow-xl">
              <div class="max-w-4xl">
                <h1 class="text-4xl md:text-5xl font-bold mb-4">
                  Transformez Votre Organisation avec l'IA Générative
                </h1>
                <p class="text-xl text-blue-100 mb-6">
                  QUUBE accompagne les professionnels de la Santé & Solidarité dans leur transformation IA : formations, coaching, conseil stratégique et audits personnalisés.
                </p>
                <div class="flex flex-wrap gap-3">
                  <span class="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                    🏥 Santé & Solidarité
                  </span>
                  <span class="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                    Hôpitaux, EHPAD, Médico-social, ESS, Social
                  </span>
                  <span class="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                    🤖 IA Générative
                  </span>
                  <span class="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                    Mistral, ChatGPT, Claude, Gemini, Copilot, IA on-premise...
                  </span>
                </div>
              </div>
            </div>

            {/* Stats Cards */}
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div class="flex items-center justify-between mb-4">
                  <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <i class="fas fa-chart-line text-green-600 text-xl"></i>
                  </div>
                  <span class="text-green-600 font-semibold text-sm bg-green-50 px-2 py-1 rounded">+76%</span>
                </div>
                <div class="text-2xl font-bold text-quube-black mb-1">Croissance</div>
                <div class="text-sm text-quube-gray">Phase active de croissance dans le secteur HealthTech</div>
              </div>

              <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div class="flex items-center justify-between mb-4">
                  <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <i class="fas fa-hospital text-blue-600 text-xl"></i>
                  </div>
                  <span class="text-blue-600 font-semibold text-sm bg-blue-50 px-2 py-1 rounded">450+</span>
                </div>
                <div class="text-2xl font-bold text-quube-black mb-1">Entreprises HealthTech</div>
                <div class="text-sm text-quube-gray">Organisations accompagnées dans leur transformation</div>
              </div>

              <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div class="flex items-center justify-between mb-4">
                  <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <i class="fas fa-clock text-yellow-600 text-xl"></i>
                  </div>
                  <span class="text-yellow-600 font-semibold text-sm bg-yellow-50 px-2 py-1 rounded">60 min</span>
                </div>
                <div class="text-2xl font-bold text-quube-black mb-1">Temps Gagné/Jour</div>
                <div class="text-sm text-quube-gray">Économies moyennes grâce à l'automatisation IA</div>
              </div>
            </div>

            {/* Services Section */}
            <div id="services">
              <div class="flex items-center justify-between mb-6">
                <h2 class="text-3xl font-bold text-quube-black">Nos Services</h2>
                <a href="#services" class="text-quube-blue hover:text-blue-600 font-medium">
                  Voir tout <i class="fas fa-arrow-right ml-1"></i>
                </a>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Service Card - Formations */}
                <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                  <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <i class="fas fa-graduation-cap text-white text-xl"></i>
                  </div>
                  <h3 class="text-xl font-bold text-quube-black mb-2">Formations IA Générative</h3>
                  <p class="text-quube-gray mb-4">Montée en compétences sur ChatGPT, Claude, Mistral et outils IA pour vos équipes.</p>
                  <div class="flex items-center text-quube-blue font-medium text-sm">
                    En savoir plus <i class="fas fa-arrow-right ml-2"></i>
                  </div>
                </div>

                {/* Service Card - Coaching */}
                <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                  <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                    <i class="fas fa-user-tie text-white text-xl"></i>
                  </div>
                  <h3 class="text-xl font-bold text-quube-black mb-2">Coaching Stratégique</h3>
                  <p class="text-quube-gray mb-4">Accompagnement personnalisé des dirigeants et cadres dans l'adoption de l'IA.</p>
                  <div class="flex items-center text-quube-blue font-medium text-sm">
                    En savoir plus <i class="fas fa-arrow-right ml-2"></i>
                  </div>
                </div>

                {/* Service Card - Conseil */}
                <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                  <div class="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4">
                    <i class="fas fa-lightbulb text-white text-xl"></i>
                  </div>
                  <h3 class="text-xl font-bold text-quube-black mb-2">Conseil Stratégique</h3>
                  <p class="text-quube-gray mb-4">Définition de votre roadmap IA et gouvernance adaptée à votre organisation.</p>
                  <div class="flex items-center text-quube-blue font-medium text-sm">
                    En savoir plus <i class="fas fa-arrow-right ml-2"></i>
                  </div>
                </div>

                {/* Service Card - Audits */}
                <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer">
                  <div class="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                    <i class="fas fa-search text-white text-xl"></i>
                  </div>
                  <h3 class="text-xl font-bold text-quube-black mb-2">Audits IA</h3>
                  <p class="text-quube-gray mb-4">Évaluation de la maturité IA et identification des opportunités stratégiques.</p>
                  <div class="flex items-center text-quube-blue font-medium text-sm">
                    En savoir plus <i class="fas fa-arrow-right ml-2"></i>
                  </div>
                </div>

                {/* Service Card - Diagnostic Flash */}
                <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer relative overflow-hidden">
                  <div class="absolute top-0 right-0 bg-quube-yellow text-quube-black text-xs font-bold px-3 py-1 rounded-bl-lg">
                    NOUVEAU
                  </div>
                  <div class="w-12 h-12 bg-gradient-to-br from-quube-yellow to-quube-yellow-neon rounded-lg flex items-center justify-center mb-4">
                    <i class="fas fa-bolt text-quube-black text-xl"></i>
                  </div>
                  <h3 class="text-xl font-bold text-quube-black mb-2">Diagnostic Flash QUUBE®</h3>
                  <p class="text-quube-gray mb-4">Évaluation rapide de votre potentiel IA en 2h chrono.</p>
                  <div class="flex items-center text-quube-blue font-medium text-sm">
                    En savoir plus <i class="fas fa-arrow-right ml-2"></i>
                  </div>
                </div>

                {/* Service Card - Compliance */}
                <div class="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer relative overflow-hidden">
                  <div class="absolute top-0 right-0 bg-quube-yellow text-quube-black text-xs font-bold px-3 py-1 rounded-bl-lg">
                    NOUVEAU
                  </div>
                  <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <i class="fas fa-shield-alt text-white text-xl"></i>
                  </div>
                  <h3 class="text-xl font-bold text-quube-black mb-2">Compliance & Conformité</h3>
                  <p class="text-quube-gray mb-4">RGPD, AI Act, NIS 2 : sensibilisation et audit de conformité.</p>
                  <div class="flex items-center text-quube-blue font-medium text-sm">
                    En savoir plus <i class="fas fa-arrow-right ml-2"></i>
                  </div>
                </div>
              </div>
            </div>

            {/* Singularité QUUBE */}
            <div class="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
              <div class="text-center mb-6">
                <span class="bg-quube-yellow/10 text-quube-black px-4 py-2 rounded-full text-sm font-semibold">
                  <i class="fas fa-star mr-2"></i>Notre Singularité
                </span>
              </div>
              <h3 class="text-3xl font-bold text-center mb-4 text-quube-black">
                L'IA Accélère Vos Projets
              </h3>
              <p class="text-lg text-quube-gray-dark text-center max-w-3xl mx-auto">
                Contrairement aux approches classiques, QUUBE <strong>utilise l'IA générative directement dans vos projets stratégiques</strong> : projets complexes, nouveaux modèles économiques, simulations tarifaires, transformation de l'offre, réorganisation de services.
              </p>
            </div>

          </div>
        </main>
      </div>

      {/* Mobile Menu Overlay */}
      <div id="mobile-overlay" class="fixed inset-0 bg-black/50 z-30 hidden md:hidden"></div>

      {/* JavaScript pour menu mobile */}
      <script dangerouslySetInnerHTML={{
        __html: `
          // Menu mobile toggle
          const mobileMenuButton = document.getElementById('mobile-menu-button');
          const sidebar = document.getElementById('sidebar');
          const mobileOverlay = document.getElementById('mobile-overlay');

          function toggleMobileMenu() {
            sidebar.classList.toggle('-translate-x-full');
            mobileOverlay.classList.toggle('hidden');
          }

          if (mobileMenuButton) {
            mobileMenuButton.addEventListener('click', toggleMobileMenu);
          }

          if (mobileOverlay) {
            mobileOverlay.addEventListener('click', toggleMobileMenu);
          }

          // Fermer le menu mobile après clic sur un lien
          const sidebarLinks = sidebar.querySelectorAll('a');
          sidebarLinks.forEach(link => {
            link.addEventListener('click', () => {
              if (window.innerWidth < 768) {
                toggleMobileMenu();
              }
            });
          });

          // Smooth scroll
          document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
              e.preventDefault();
              const target = document.querySelector(this.getAttribute('href'));
              if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            });
          });
        `
      }} />
    </>
  )
})

export default app
