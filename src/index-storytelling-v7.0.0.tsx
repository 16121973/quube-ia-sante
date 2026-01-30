import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

// Page d'accueil - Design Storytelling
app.get('/', (c) => {
  return c.render(
    <>
      {/* Navigation fixe minimaliste */}
      <nav class="fixed top-0 w-full bg-white/90 backdrop-blur-md shadow-sm z-50 transition-all duration-300" id="navbar">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-16">
            <a href="/" class="text-2xl font-bold">
              <span class="text-quube-black">QUUBE</span>
              <span class="text-quube-gray-dark mx-1">×</span>
              <span class="text-quube-blue">IA Santé</span>
            </a>
            <div class="flex items-center space-x-6">
              <div class="hidden md:flex items-center space-x-1 text-sm text-quube-gray">
                <span class="w-2 h-2 rounded-full bg-quube-yellow animate-pulse"></span>
                <span id="chapter-indicator">Chapitre 1/5</span>
              </div>
              <a href="#contact" class="bg-quube-yellow hover:bg-quube-yellow-neon text-quube-black px-6 py-2 rounded-full font-bold transition-all">
                Commencer
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Story Container */}
      <div class="story-container">
        
        {/* Chapitre 1 : Le Défi */}
        <section id="chapter1" class="story-section min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-quube-blue-dark to-quube-blue text-white relative overflow-hidden">
          <div class="absolute inset-0 opacity-10">
            <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-quube-yellow rounded-full blur-3xl animate-pulse"></div>
            <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-quube-blue rounded-full blur-3xl animate-pulse" style="animation-delay: 1s"></div>
          </div>
          
          <div class="max-w-5xl mx-auto px-6 text-center relative z-10">
            <div class="mb-8 animate-fade-in">
              <span class="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Chapitre 1 : Le Défi
              </span>
            </div>
            <h1 class="text-5xl md:text-7xl font-bold mb-8 leading-tight animate-slide-up">
              Le Secteur Santé Face à une <span class="text-quube-yellow">Révolution</span>
            </h1>
            <p class="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto animate-slide-up" style="animation-delay: 0.2s">
              Hôpitaux, EHPAD, structures médico-sociales, ESS... Tous confrontés aux mêmes défis : 
              <strong>charge administrative croissante</strong>, <strong>manque de temps</strong>, <strong>complexité réglementaire</strong>.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div class="bg-white/10 backdrop-blur-sm p-6 rounded-2xl animate-slide-up" style="animation-delay: 0.4s">
                <div class="text-4xl mb-3">⏰</div>
                <div class="text-3xl font-bold mb-2">60%</div>
                <div class="text-sm text-blue-200">du temps perdu en tâches admin</div>
              </div>
              <div class="bg-white/10 backdrop-blur-sm p-6 rounded-2xl animate-slide-up" style="animation-delay: 0.6s">
                <div class="text-4xl mb-3">📊</div>
                <div class="text-3xl font-bold mb-2">73%</div>
                <div class="text-sm text-blue-200">des dirigeants dépassés par la transformation</div>
              </div>
              <div class="bg-white/10 backdrop-blur-sm p-6 rounded-2xl animate-slide-up" style="animation-delay: 0.8s">
                <div class="text-4xl mb-3">🔒</div>
                <div class="text-3xl font-bold mb-2">100%</div>
                <div class="text-sm text-blue-200">concernés par RGPD, AI Act, NIS 2</div>
              </div>
            </div>
            <div class="animate-bounce">
              <a href="#chapter2" class="inline-block text-white/70 hover:text-white transition-colors">
                <i class="fas fa-chevron-down text-3xl"></i>
              </a>
            </div>
          </div>
        </section>

        {/* Chapitre 2 : La Solution */}
        <section id="chapter2" class="story-section min-h-screen flex items-center justify-center bg-white relative">
          <div class="max-w-6xl mx-auto px-6 py-20">
            <div class="text-center mb-16">
              <span class="inline-block bg-quube-yellow/20 text-quube-black px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Chapitre 2 : La Solution
              </span>
              <h2 class="text-4xl md:text-6xl font-bold mb-6 text-quube-black">
                L'IA Générative : Votre <span class="text-quube-blue">Allié Stratégique</span>
              </h2>
              <p class="text-xl text-quube-gray-dark max-w-3xl mx-auto">
                Et si l'IA générative devenait votre <strong>copilote quotidien</strong> ? 
                Mistral, ChatGPT, Claude, Gemini... Ces outils révolutionnent déjà les organisations qui osent franchir le pas.
              </p>
            </div>

            <div class="grid md:grid-cols-2 gap-8 mb-16">
              <div class="bg-gradient-to-br from-quube-yellow/10 to-transparent p-8 rounded-3xl border-l-4 border-quube-yellow">
                <div class="text-5xl mb-4">🚀</div>
                <h3 class="text-2xl font-bold mb-4 text-quube-black">L'IA Accélère Vos Projets</h3>
                <p class="text-quube-gray-dark mb-4">
                  Projets complexes, nouveaux modèles économiques, simulations tarifaires : 
                  l'IA transforme des semaines de travail en quelques heures.
                </p>
                <ul class="space-y-2 text-quube-gray-dark">
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-quube-yellow mr-2 mt-1"></i>
                    <span>Automatisation des tâches répétitives</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-quube-yellow mr-2 mt-1"></i>
                    <span>Analyse prédictive et aide à la décision</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-quube-yellow mr-2 mt-1"></i>
                    <span>Génération de contenu et documentation</span>
                  </li>
                </ul>
              </div>

              <div class="bg-gradient-to-br from-quube-blue/10 to-transparent p-8 rounded-3xl border-l-4 border-quube-blue">
                <div class="text-5xl mb-4">🛡️</div>
                <h3 class="text-2xl font-bold mb-4 text-quube-black">Conformité & Souveraineté</h3>
                <p class="text-quube-gray-dark mb-4">
                  RGPD, AI Act, NIS 2 : maîtrisez les enjeux réglementaires et optez pour des solutions souveraines comme Mistral.
                </p>
                <ul class="space-y-2 text-quube-gray-dark">
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-quube-blue mr-2 mt-1"></i>
                    <span>Hébergement européen et souveraineté des données</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-quube-blue mr-2 mt-1"></i>
                    <span>Conformité RGPD native</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-check-circle text-quube-blue mr-2 mt-1"></i>
                    <span>Audit et accompagnement réglementaire</span>
                  </li>
                </ul>
              </div>
            </div>

            <div class="text-center">
              <p class="text-quube-gray text-lg mb-4">Mais comment passer de l'intention à l'action ?</p>
              <a href="#chapter3" class="inline-block text-quube-blue hover:text-quube-blue-dark transition-colors">
                <i class="fas fa-chevron-down text-2xl animate-bounce"></i>
              </a>
            </div>
          </div>
        </section>

        {/* Chapitre 3 : Le Parcours (Timeline) */}
        <section id="chapter3" class="story-section min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
          <div class="max-w-6xl mx-auto px-6">
            <div class="text-center mb-16">
              <span class="inline-block bg-quube-yellow/20 text-quube-black px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Chapitre 3 : Votre Parcours
              </span>
              <h2 class="text-4xl md:text-6xl font-bold mb-6 text-quube-black">
                Un <span class="text-quube-yellow">Voyage</span> en 5 Étapes
              </h2>
              <p class="text-xl text-quube-gray-dark max-w-3xl mx-auto">
                Avec QUUBE, votre transformation IA suit un chemin clair et personnalisé
              </p>
            </div>

            {/* Timeline verticale */}
            <div class="relative">
              {/* Ligne centrale */}
              <div class="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-quube-yellow via-quube-blue to-quube-green hidden md:block"></div>

              {/* Étape 1 */}
              <div class="relative mb-16 md:grid md:grid-cols-2 md:gap-8 items-center">
                <div class="md:text-right mb-4 md:mb-0">
                  <div class="bg-white p-6 rounded-2xl shadow-lg inline-block max-w-md">
                    <div class="flex items-center justify-end mb-3">
                      <span class="text-3xl mr-3">🎯</span>
                      <h3 class="text-2xl font-bold text-quube-black">Diagnostic Flash QUUBE®</h3>
                    </div>
                    <p class="text-quube-gray-dark">
                      Évaluation rapide de votre maturité IA et identification des opportunités en 2h chrono
                    </p>
                  </div>
                </div>
                <div class="hidden md:block">
                  <div class="w-12 h-12 rounded-full bg-quube-yellow flex items-center justify-center text-quube-black font-bold text-xl mx-auto border-4 border-white shadow-lg">
                    1
                  </div>
                </div>
                <div></div>
              </div>

              {/* Étape 2 */}
              <div class="relative mb-16 md:grid md:grid-cols-2 md:gap-8 items-center">
                <div class="hidden md:block"></div>
                <div class="hidden md:block">
                  <div class="w-12 h-12 rounded-full bg-quube-blue flex items-center justify-center text-white font-bold text-xl mx-auto border-4 border-white shadow-lg">
                    2
                  </div>
                </div>
                <div class="md:text-left mb-4 md:mb-0 md:col-start-2">
                  <div class="bg-white p-6 rounded-2xl shadow-lg inline-block max-w-md">
                    <div class="flex items-center mb-3">
                      <span class="text-3xl mr-3">🎓</span>
                      <h3 class="text-2xl font-bold text-quube-black">Formations IA</h3>
                    </div>
                    <p class="text-quube-gray-dark">
                      Montée en compétences sur ChatGPT, Claude, Mistral et outils IA pour vos équipes
                    </p>
                  </div>
                </div>
              </div>

              {/* Étape 3 */}
              <div class="relative mb-16 md:grid md:grid-cols-2 md:gap-8 items-center">
                <div class="md:text-right mb-4 md:mb-0">
                  <div class="bg-white p-6 rounded-2xl shadow-lg inline-block max-w-md">
                    <div class="flex items-center justify-end mb-3">
                      <span class="text-3xl mr-3">💡</span>
                      <h3 class="text-2xl font-bold text-quube-black">Conseil Stratégique</h3>
                    </div>
                    <p class="text-quube-gray-dark">
                      Roadmap IA, gouvernance et accompagnement personnalisé de vos dirigeants
                    </p>
                  </div>
                </div>
                <div class="hidden md:block">
                  <div class="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-xl mx-auto border-4 border-white shadow-lg">
                    3
                  </div>
                </div>
                <div></div>
              </div>

              {/* Étape 4 */}
              <div class="relative mb-16 md:grid md:grid-cols-2 md:gap-8 items-center">
                <div class="hidden md:block"></div>
                <div class="hidden md:block">
                  <div class="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold text-xl mx-auto border-4 border-white shadow-lg">
                    4
                  </div>
                </div>
                <div class="md:text-left mb-4 md:mb-0 md:col-start-2">
                  <div class="bg-white p-6 rounded-2xl shadow-lg inline-block max-w-md">
                    <div class="flex items-center mb-3">
                      <span class="text-3xl mr-3">🚀</span>
                      <h3 class="text-2xl font-bold text-quube-black">Déploiement</h3>
                    </div>
                    <p class="text-quube-gray-dark">
                      Mise en œuvre concrète : automatisations, cas d'usage, intégrations
                    </p>
                  </div>
                </div>
              </div>

              {/* Étape 5 */}
              <div class="relative mb-16 md:grid md:grid-cols-2 md:gap-8 items-center">
                <div class="md:text-right mb-4 md:mb-0">
                  <div class="bg-white p-6 rounded-2xl shadow-lg inline-block max-w-md">
                    <div class="flex items-center justify-end mb-3">
                      <span class="text-3xl mr-3">📈</span>
                      <h3 class="text-2xl font-bold text-quube-black">Suivi & Optimisation</h3>
                    </div>
                    <p class="text-quube-gray-dark">
                      Mesure du ROI, ajustements et accompagnement continu
                    </p>
                  </div>
                </div>
                <div class="hidden md:block">
                  <div class="w-12 h-12 rounded-full bg-quube-green flex items-center justify-center text-white font-bold text-xl mx-auto border-4 border-white shadow-lg">
                    5
                  </div>
                </div>
                <div></div>
              </div>
            </div>

            <div class="text-center mt-16">
              <p class="text-quube-gray text-lg mb-4">Et les résultats concrets ?</p>
              <a href="#chapter4" class="inline-block text-quube-blue hover:text-quube-blue-dark transition-colors">
                <i class="fas fa-chevron-down text-2xl animate-bounce"></i>
              </a>
            </div>
          </div>
        </section>

        {/* Chapitre 4 : Les Résultats */}
        <section id="chapter4" class="story-section min-h-screen bg-gradient-to-br from-quube-yellow/20 via-white to-quube-blue/20 py-20">
          <div class="max-w-6xl mx-auto px-6">
            <div class="text-center mb-16">
              <span class="inline-block bg-quube-blue/20 text-quube-black px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Chapitre 4 : Les Résultats
              </span>
              <h2 class="text-4xl md:text-6xl font-bold mb-6 text-quube-black">
                Des <span class="text-quube-blue">Impacts</span> Mesurables
              </h2>
              <p class="text-xl text-quube-gray-dark max-w-3xl mx-auto">
                Nos clients témoignent de transformations concrètes
              </p>
            </div>

            <div class="grid md:grid-cols-3 gap-8 mb-16">
              <div class="bg-white p-8 rounded-3xl shadow-xl text-center transform hover:scale-105 transition-transform">
                <div class="text-6xl font-bold text-quube-yellow mb-2">+76%</div>
                <div class="text-quube-black font-bold text-xl mb-2">Croissance</div>
                <div class="text-quube-gray">Phase active dans le secteur HealthTech</div>
              </div>

              <div class="bg-white p-8 rounded-3xl shadow-xl text-center transform hover:scale-105 transition-transform">
                <div class="text-6xl font-bold text-quube-blue mb-2">450+</div>
                <div class="text-quube-black font-bold text-xl mb-2">Organisations</div>
                <div class="text-quube-gray">Accompagnées dans leur transformation IA</div>
              </div>

              <div class="bg-white p-8 rounded-3xl shadow-xl text-center transform hover:scale-105 transition-transform">
                <div class="text-6xl font-bold text-quube-green mb-2">60min</div>
                <div class="text-quube-black font-bold text-xl mb-2">Gagnées / Jour</div>
                <div class="text-quube-gray">Économies grâce à l'automatisation</div>
              </div>
            </div>

            <div class="bg-white p-8 md:p-12 rounded-3xl shadow-2xl mb-12">
              <div class="flex items-center mb-6">
                <div class="w-16 h-16 rounded-full bg-quube-yellow flex items-center justify-center text-3xl mr-4">
                  ⭐
                </div>
                <div>
                  <div class="text-2xl font-bold text-quube-black">Notre Singularité</div>
                  <div class="text-quube-gray">Ce qui fait la différence QUUBE</div>
                </div>
              </div>
              <p class="text-xl text-quube-gray-dark leading-relaxed">
                Contrairement aux approches classiques, QUUBE <strong class="text-quube-black">utilise l'IA générative directement dans vos projets stratégiques</strong> : 
                projets complexes, nouveaux modèles économiques, simulations tarifaires, transformation de l'offre, réorganisation de services.
              </p>
            </div>

            <div class="text-center">
              <p class="text-quube-gray text-lg mb-4">Prêt à écrire votre propre histoire ?</p>
              <a href="#chapter5" class="inline-block text-quube-blue hover:text-quube-blue-dark transition-colors">
                <i class="fas fa-chevron-down text-2xl animate-bounce"></i>
              </a>
            </div>
          </div>
        </section>

        {/* Chapitre 5 : Votre Histoire */}
        <section id="chapter5" class="story-section min-h-screen flex items-center justify-center bg-gradient-to-br from-quube-black via-quube-blue-dark to-quube-blue text-white relative overflow-hidden">
          <div class="absolute inset-0 opacity-10">
            <div class="absolute top-1/3 right-1/3 w-96 h-96 bg-quube-yellow rounded-full blur-3xl animate-pulse"></div>
          </div>

          <div class="max-w-4xl mx-auto px-6 text-center relative z-10">
            <span class="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-8">
              Chapitre 5 : Votre Histoire Commence Maintenant
            </span>
            <h2 class="text-4xl md:text-6xl font-bold mb-8">
              Et Vous, Quelle Sera Votre <span class="text-quube-yellow">Transformation</span> ?
            </h2>
            <p class="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Chaque organisation a son histoire unique. La vôtre commence par un simple premier pas.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="#contact" class="bg-quube-yellow hover:bg-quube-yellow-neon text-quube-black px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl">
                <i class="fas fa-calendar-check mr-2"></i>
                Prendre RDV - Diagnostic Flash
              </a>
              <a href="#services" class="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all border border-white/30">
                <i class="fas fa-compass mr-2"></i>
                Explorer Nos Services
              </a>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
              <div>
                <div class="text-2xl mb-2">📞</div>
                <div class="text-blue-200">Contact Direct</div>
              </div>
              <div>
                <div class="text-2xl mb-2">⚡</div>
                <div class="text-blue-200">Diagnostic en 2h</div>
              </div>
              <div>
                <div class="text-2xl mb-2">🎓</div>
                <div class="text-blue-200">Formations Sur-Mesure</div>
              </div>
              <div>
                <div class="text-2xl mb-2">🚀</div>
                <div class="text-blue-200">Déploiement Rapide</div>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* JavaScript pour animations et scroll */}
      <script dangerouslySetInnerHTML={{
        __html: `
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

          // Chapter indicator
          const sections = document.querySelectorAll('.story-section');
          const chapterIndicator = document.getElementById('chapter-indicator');

          const observerOptions = {
            threshold: 0.5
          };

          const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                const sectionId = entry.target.id;
                const chapterNumber = sectionId.replace('chapter', '');
                if (chapterIndicator) {
                  chapterIndicator.textContent = 'Chapitre ' + chapterNumber + '/5';
                }
              }
            });
          }, observerOptions);

          sections.forEach(section => {
            observer.observe(section);
          });

          // Animations au scroll
          const animateOnScroll = () => {
            const elements = document.querySelectorAll('.animate-slide-up, .animate-fade-in');
            elements.forEach(el => {
              const rect = el.getBoundingClientRect();
              const isVisible = rect.top < window.innerHeight * 0.8;
              if (isVisible) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
              }
            });
          };

          // Initialiser les animations
          document.querySelectorAll('.animate-slide-up').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.8s ease-out';
          });

          document.querySelectorAll('.animate-fade-in').forEach(el => {
            el.style.opacity = '0';
            el.style.transition = 'opacity 1s ease-out';
          });

          window.addEventListener('scroll', animateOnScroll);
          window.addEventListener('load', animateOnScroll);
        `
      }} />

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .animate-bounce {
            animation: bounce 2s infinite;
          }
        `
      }} />
    </>
  )
})

export default app
