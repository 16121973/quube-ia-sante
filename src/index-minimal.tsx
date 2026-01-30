import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

// Page d'accueil - Design Minimaliste Moderne
app.get('/', (c) => {
  return c.render(
    <>
      {/* Navigation minimaliste ultra-simple */}
      <nav class="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div class="max-w-6xl mx-auto px-8 py-6 flex justify-between items-center">
          <a href="/" class="text-2xl font-light tracking-wide">
            <span class="font-bold">QUUBE</span>
            <span class="text-quube-gray mx-2">×</span>
            <span class="text-quube-blue font-light">IA Santé</span>
          </a>
          <a href="#contact" class="text-sm font-medium text-quube-black hover:text-quube-blue transition-colors border-b-2 border-transparent hover:border-quube-blue pb-1">
            Prendre contact
          </a>
        </div>
      </nav>

      {/* Hero Section - Ultra spacieux */}
      <section class="min-h-screen flex items-center bg-white pt-32 pb-32">
        <div class="max-w-4xl mx-auto px-8">
          <div class="space-y-12">
            <div class="space-y-6">
              <h1 class="text-6xl md:text-8xl font-light leading-tight text-quube-black">
                L'IA Générative
                <br />
                <span class="font-bold">Simplement</span>
              </h1>
              <div class="w-20 h-1 bg-quube-yellow"></div>
            </div>
            
            <p class="text-2xl md:text-3xl font-light text-quube-gray-dark leading-relaxed max-w-2xl">
              Accompagnement des professionnels de <span class="text-quube-black font-medium">Santé & Solidarité</span> dans leur transformation IA
            </p>

            <div class="flex flex-wrap gap-4 text-sm text-quube-gray pt-8">
              <span class="px-4 py-2 border border-gray-200 rounded-full">Mistral</span>
              <span class="px-4 py-2 border border-gray-200 rounded-full">ChatGPT</span>
              <span class="px-4 py-2 border border-gray-200 rounded-full">Claude</span>
              <span class="px-4 py-2 border border-gray-200 rounded-full">Gemini</span>
              <span class="px-4 py-2 border border-gray-200 rounded-full">Copilot</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Minimaliste */}
      <section class="py-32 bg-gray-50">
        <div class="max-w-6xl mx-auto px-8">
          <div class="grid md:grid-cols-3 gap-16">
            <div class="text-center space-y-4">
              <div class="text-6xl font-light text-quube-black">+76<span class="text-3xl">%</span></div>
              <div class="text-sm uppercase tracking-wider text-quube-gray">Croissance HealthTech</div>
            </div>
            <div class="text-center space-y-4">
              <div class="text-6xl font-light text-quube-black">450<span class="text-3xl">+</span></div>
              <div class="text-sm uppercase tracking-wider text-quube-gray">Organisations accompagnées</div>
            </div>
            <div class="text-center space-y-4">
              <div class="text-6xl font-light text-quube-black">60<span class="text-3xl">min</span></div>
              <div class="text-sm uppercase tracking-wider text-quube-gray">Gagnées par jour</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services - Grid minimaliste */}
      <section id="services" class="py-32 bg-white">
        <div class="max-w-6xl mx-auto px-8">
          <div class="mb-24">
            <h2 class="text-5xl md:text-6xl font-light text-quube-black mb-6">
              Nos <span class="font-bold">Services</span>
            </h2>
            <div class="w-20 h-1 bg-quube-yellow"></div>
          </div>

          <div class="grid md:grid-cols-2 gap-16">
            {/* Service 1 */}
            <div class="group cursor-pointer">
              <div class="space-y-6 pb-8 border-b border-gray-200 group-hover:border-quube-yellow transition-colors duration-300">
                <div class="text-4xl font-light text-quube-black group-hover:text-quube-blue transition-colors">01</div>
                <h3 class="text-2xl font-medium text-quube-black">Formations IA Générative</h3>
                <p class="text-lg font-light text-quube-gray-dark leading-relaxed">
                  Montée en compétences sur ChatGPT, Claude, Mistral et outils IA pour vos équipes
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div class="group cursor-pointer">
              <div class="space-y-6 pb-8 border-b border-gray-200 group-hover:border-quube-yellow transition-colors duration-300">
                <div class="text-4xl font-light text-quube-black group-hover:text-quube-blue transition-colors">02</div>
                <h3 class="text-2xl font-medium text-quube-black">Coaching Stratégique</h3>
                <p class="text-lg font-light text-quube-gray-dark leading-relaxed">
                  Accompagnement personnalisé des dirigeants et cadres dans l'adoption de l'IA
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div class="group cursor-pointer">
              <div class="space-y-6 pb-8 border-b border-gray-200 group-hover:border-quube-yellow transition-colors duration-300">
                <div class="text-4xl font-light text-quube-black group-hover:text-quube-blue transition-colors">03</div>
                <h3 class="text-2xl font-medium text-quube-black">Conseil Stratégique</h3>
                <p class="text-lg font-light text-quube-gray-dark leading-relaxed">
                  Roadmap IA et gouvernance adaptée à votre organisation
                </p>
              </div>
            </div>

            {/* Service 4 */}
            <div class="group cursor-pointer">
              <div class="space-y-6 pb-8 border-b border-gray-200 group-hover:border-quube-yellow transition-colors duration-300">
                <div class="text-4xl font-light text-quube-black group-hover:text-quube-blue transition-colors">04</div>
                <h3 class="text-2xl font-medium text-quube-black">Audits IA</h3>
                <p class="text-lg font-light text-quube-gray-dark leading-relaxed">
                  Évaluation de maturité et identification des opportunités stratégiques
                </p>
              </div>
            </div>

            {/* Service 5 */}
            <div class="group cursor-pointer">
              <div class="space-y-6 pb-8 border-b border-gray-200 group-hover:border-quube-yellow transition-colors duration-300">
                <div class="text-4xl font-light text-quube-black group-hover:text-quube-blue transition-colors">05</div>
                <h3 class="text-2xl font-medium text-quube-black">Diagnostic Flash QUUBE®</h3>
                <p class="text-lg font-light text-quube-gray-dark leading-relaxed">
                  Évaluation rapide de votre potentiel IA en 2h chrono
                </p>
              </div>
            </div>

            {/* Service 6 */}
            <div class="group cursor-pointer">
              <div class="space-y-6 pb-8 border-b border-gray-200 group-hover:border-quube-yellow transition-colors duration-300">
                <div class="text-4xl font-light text-quube-black group-hover:text-quube-blue transition-colors">06</div>
                <h3 class="text-2xl font-medium text-quube-black">Compliance & Conformité</h3>
                <p class="text-lg font-light text-quube-gray-dark leading-relaxed">
                  RGPD, AI Act, NIS 2 : sensibilisation et audit de conformité
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Singularité - Section centrale */}
      <section class="py-32 bg-gray-50">
        <div class="max-w-4xl mx-auto px-8 text-center">
          <div class="space-y-12">
            <div class="space-y-6">
              <div class="inline-block px-6 py-2 bg-quube-yellow/20 rounded-full">
                <span class="text-sm font-medium text-quube-black">Notre Singularité</span>
              </div>
              <h2 class="text-4xl md:text-5xl font-light text-quube-black leading-tight">
                L'IA <span class="font-bold">Accélère</span> Vos Projets
              </h2>
            </div>
            
            <p class="text-xl font-light text-quube-gray-dark leading-relaxed">
              Contrairement aux approches classiques, QUUBE <span class="font-medium text-quube-black">utilise l'IA générative directement dans vos projets stratégiques</span> : projets complexes, nouveaux modèles économiques, simulations tarifaires
            </p>
          </div>
        </div>
      </section>

      {/* Approches Thématiques - Liste simple */}
      <section class="py-32 bg-white">
        <div class="max-w-6xl mx-auto px-8">
          <div class="mb-24">
            <h2 class="text-5xl md:text-6xl font-light text-quube-black mb-6">
              Par <span class="font-bold">Thématique</span>
            </h2>
            <div class="w-20 h-1 bg-quube-yellow"></div>
          </div>

          <div class="space-y-8">
            <div class="group flex items-start space-x-8 py-8 border-b border-gray-100 hover:border-quube-yellow transition-colors cursor-pointer">
              <div class="text-quube-gray group-hover:text-quube-blue transition-colors text-lg font-light">01</div>
              <div class="flex-1">
                <h3 class="text-2xl font-medium text-quube-black mb-2">Compliance & Conformité</h3>
                <p class="text-lg font-light text-quube-gray-dark">RGPD · AI Act · NIS 2 · Souveraineté</p>
              </div>
            </div>

            <div class="group flex items-start space-x-8 py-8 border-b border-gray-100 hover:border-quube-yellow transition-colors cursor-pointer">
              <div class="text-quube-gray group-hover:text-quube-blue transition-colors text-lg font-light">02</div>
              <div class="flex-1">
                <h3 class="text-2xl font-medium text-quube-black mb-2">Data Analyse & BI</h3>
                <p class="text-lg font-light text-quube-gray-dark">Insights · Visualisation · Prédictif</p>
              </div>
            </div>

            <div class="group flex items-start space-x-8 py-8 border-b border-gray-100 hover:border-quube-yellow transition-colors cursor-pointer">
              <div class="text-quube-gray group-hover:text-quube-blue transition-colors text-lg font-light">03</div>
              <div class="flex-1">
                <h3 class="text-2xl font-medium text-quube-black mb-2">Gestion de Projet IA</h3>
                <p class="text-lg font-light text-quube-gray-dark">Roadmap · Pilotage · Change Management</p>
              </div>
            </div>

            <div class="group flex items-start space-x-8 py-8 border-b border-gray-100 hover:border-quube-yellow transition-colors cursor-pointer">
              <div class="text-quube-gray group-hover:text-quube-blue transition-colors text-lg font-light">04</div>
              <div class="flex-1">
                <h3 class="text-2xl font-medium text-quube-black mb-2">Fonctions Supports</h3>
                <p class="text-lg font-light text-quube-gray-dark">RH · Finance · Direction · Admin</p>
              </div>
            </div>

            <div class="group flex items-start space-x-8 py-8 border-b border-gray-100 hover:border-quube-yellow transition-colors cursor-pointer">
              <div class="text-quube-gray group-hover:text-quube-blue transition-colors text-lg font-light">05</div>
              <div class="flex-1">
                <h3 class="text-2xl font-medium text-quube-black mb-2">Gains Administratifs</h3>
                <p class="text-lg font-light text-quube-gray-dark">Automatisation · 40-60 min/jour · ROI mesurable</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final - Minimaliste */}
      <section id="contact" class="py-32 bg-quube-black text-white">
        <div class="max-w-4xl mx-auto px-8 text-center">
          <div class="space-y-12">
            <h2 class="text-5xl md:text-6xl font-light leading-tight">
              Commençons <span class="font-bold text-quube-yellow">Ensemble</span>
            </h2>
            <p class="text-xl font-light text-gray-300 max-w-2xl mx-auto">
              Un simple premier pas pour transformer votre organisation
            </p>
            <div>
              <a href="#contact" class="inline-block px-12 py-5 bg-quube-yellow text-quube-black text-lg font-medium hover:bg-quube-yellow-neon transition-colors">
                Prendre rendez-vous
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer minimaliste */}
      <footer class="py-12 bg-white border-t border-gray-100">
        <div class="max-w-6xl mx-auto px-8 text-center">
          <p class="text-sm font-light text-quube-gray">
            © 2026 QUUBE × IA Santé · Formations & Conseil en Intelligence Artificielle
          </p>
        </div>
      </footer>

      {/* Smooth scroll */}
      <script dangerouslySetInnerHTML={{
        __html: `
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
