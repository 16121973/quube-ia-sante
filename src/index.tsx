import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()
app.use(renderer)

app.get('/', (c) => {
  return c.render(
    <>
      {/* Navigation minimaliste */}
      <nav class="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div class="max-w-6xl mx-auto px-8 py-6 flex justify-between items-center">
          <a href="/" class="text-2xl font-light tracking-wide">
            <span class="font-bold">QUUBE</span>
            <span class="text-quube-gray mx-2">×</span>
            <span class="text-quube-blue font-light">IA Santé</span>
          </a>
          <div class="hidden md:flex items-center space-x-8 text-sm">
            <a href="#services" class="text-quube-gray-dark hover:text-quube-black transition-colors">Services</a>
            <a href="#thematiques" class="text-quube-gray-dark hover:text-quube-black transition-colors">Thématiques</a>
            <a href="#cas-usage" class="text-quube-gray-dark hover:text-quube-black transition-colors">Cas d'Usage</a>
            <a href="#blog" class="text-quube-gray-dark hover:text-quube-black transition-colors">Blog</a>
            <a href="#contact" class="font-medium text-quube-black hover:text-quube-blue transition-colors border-b-2 border-transparent hover:border-quube-blue pb-1">Contact</a>
          </div>
          <button id="mobile-menu-btn" class="md:hidden text-quube-black">
            <i class="fas fa-bars text-xl"></i>
          </button>
        </div>
        {/* Mobile menu */}
        <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-gray-100 py-4 px-8">
          <div class="flex flex-col space-y-4">
            <a href="#services" class="text-quube-gray-dark hover:text-quube-black transition-colors">Services</a>
            <a href="#thematiques" class="text-quube-gray-dark hover:text-quube-black transition-colors">Thématiques</a>
            <a href="#cas-usage" class="text-quube-gray-dark hover:text-quube-black transition-colors">Cas d'Usage</a>
            <a href="#blog" class="text-quube-gray-dark hover:text-quube-black transition-colors">Blog</a>
            <a href="#contact" class="font-medium text-quube-black">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero minimaliste */}
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
              <span class="px-4 py-2 border border-gray-200 rounded-full">IA on-premise</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
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

      {/* Services avec accordéon */}
      <section id="services" class="py-32 bg-white">
        <div class="max-w-6xl mx-auto px-8">
          <div class="mb-24">
            <h2 class="text-5xl md:text-6xl font-light text-quube-black mb-6">
              Nos <span class="font-bold">Services</span>
            </h2>
            <div class="w-20 h-1 bg-quube-yellow"></div>
          </div>

          <div class="space-y-4">
            {/* Service 1 - Formations */}
            <details class="group border-b border-gray-200 pb-4">
              <summary class="cursor-pointer list-none flex justify-between items-start">
                <div class="flex-1">
                  <div class="flex items-baseline space-x-4 mb-2">
                    <span class="text-4xl font-light text-quube-gray group-open:text-quube-blue transition-colors">01</span>
                    <h3 class="text-2xl font-medium text-quube-black">Acculturation IA</h3>
                  </div>
                  <p class="text-lg font-light text-quube-gray-dark ml-16">
                    Formations, conférences et sensibilisation
                  </p>
                </div>
                <i class="fas fa-chevron-down text-quube-gray group-open:rotate-180 transition-transform mt-2"></i>
              </summary>
              <div class="mt-6 ml-16 space-y-4 text-quube-gray-dark">
                <p class="leading-relaxed font-medium">
                  Formations, conférences et sensibilisation pour une adoption rapide et efficace de l'IA générative dans vos processus métiers.
                </p>
                
                <div class="mt-4">
                  <h4 class="font-medium text-quube-black mb-2">Formations IA Générative</h4>
                  <ul class="space-y-2">
                    <li class="flex items-start">
                      <span class="text-quube-yellow mr-2">•</span>
                      <span>Formation complète sur ChatGPT, Claude, Mistral, Gemini et Copilot</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-quube-yellow mr-2">•</span>
                      <span>Prise en main des outils IA avec prompting avancé</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-quube-yellow mr-2">•</span>
                      <span>Cas d'usage secteur santé & médico-social</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-quube-yellow mr-2">•</span>
                      <span>Formations certifiantes et sur-mesure</span>
                    </li>
                  </ul>
                </div>
                
                <div class="mt-4">
                  <h4 class="font-medium text-quube-black mb-2">Conférences & Sensibilisation</h4>
                  <ul class="space-y-2">
                    <li class="flex items-start">
                      <span class="text-quube-yellow mr-2">•</span>
                      <span>Conférences et webinaires sur les enjeux de l'IA</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-quube-yellow mr-2">•</span>
                      <span>Séminaires de sensibilisation pour vos équipes</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-quube-yellow mr-2">•</span>
                      <span>Ateliers découverte et démonstrations</span>
                    </li>
                  </ul>
                </div>
              </div>
            </details>

            {/* Service 2 - Coaching */}
            <details class="group border-b border-gray-200 pb-4">
              <summary class="cursor-pointer list-none flex justify-between items-start">
                <div class="flex-1">
                  <div class="flex items-baseline space-x-4 mb-2">
                    <span class="text-4xl font-light text-quube-gray group-open:text-quube-blue transition-colors">02</span>
                    <h3 class="text-2xl font-medium text-quube-black">Coaching Stratégique</h3>
                  </div>
                  <p class="text-lg font-light text-quube-gray-dark ml-16">
                    Accompagnement personnalisé des dirigeants
                  </p>
                </div>
                <i class="fas fa-chevron-down text-quube-gray group-open:rotate-180 transition-transform mt-2"></i>
              </summary>
              <div class="mt-6 ml-16 space-y-4 text-quube-gray-dark">
                <p class="leading-relaxed">
                  Accompagnement individuel des dirigeants, cadres et managers pour intégrer l'IA dans leur leadership et leurs décisions stratégiques.
                </p>
                <ul class="space-y-2">
                  <li class="flex items-start">
                    <span class="text-quube-yellow mr-2">•</span>
                    <span>Coaching individuel et collectif</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-quube-yellow mr-2">•</span>
                    <span>Adoption IA dans le leadership</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-quube-yellow mr-2">•</span>
                    <span>Change management et conduite du changement</span>
                  </li>
                </ul>
              </div>
            </details>

            {/* Service 3 - Conseil */}
            <details class="group border-b border-gray-200 pb-4">
              <summary class="cursor-pointer list-none flex justify-between items-start">
                <div class="flex-1">
                  <div class="flex items-baseline space-x-4 mb-2">
                    <span class="text-4xl font-light text-quube-gray group-open:text-quube-blue transition-colors">03</span>
                    <h3 class="text-2xl font-medium text-quube-black">Conseil Stratégique & Gouvernance</h3>
                  </div>
                  <p class="text-lg font-light text-quube-gray-dark ml-16">
                    Roadmap IA et gouvernance sur-mesure
                  </p>
                </div>
                <i class="fas fa-chevron-down text-quube-gray group-open:rotate-180 transition-transform mt-2"></i>
              </summary>
              <div class="mt-6 ml-16 space-y-4 text-quube-gray-dark">
                <p class="leading-relaxed font-medium">
                  Définition de votre stratégie IA, audits de maturité, roadmap de déploiement et mise en place d'une gouvernance adaptée à votre structure.
                </p>
                
                <div class="mt-4">
                  <h4 class="font-medium text-quube-black mb-2">Stratégie & Gouvernance</h4>
                  <ul class="space-y-2">
                    <li class="flex items-start">
                      <span class="text-quube-yellow mr-2">•</span>
                      <span>Stratégie IA & roadmap de transformation</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-quube-yellow mr-2">•</span>
                      <span>Gouvernance IA et comité de pilotage</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-quube-yellow mr-2">•</span>
                      <span>Priorisation des use cases à fort ROI</span>
                    </li>
                  </ul>
                </div>
                
                <div class="mt-4">
                  <h4 class="font-medium text-quube-black mb-2">Audits IA</h4>
                  <ul class="space-y-2">
                    <li class="flex items-start">
                      <span class="text-quube-yellow mr-2">•</span>
                      <span>Audit complet de maturité IA</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-quube-yellow mr-2">•</span>
                      <span>Identification des opportunités stratégiques</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-quube-yellow mr-2">•</span>
                      <span>Recommandations personnalisées</span>
                    </li>
                  </ul>
                </div>
                
                <div class="mt-4">
                  <h4 class="font-medium text-quube-black mb-2">Diagnostic Flash QUUBE®</h4>
                  <ul class="space-y-2">
                    <li class="flex items-start">
                      <span class="text-quube-yellow mr-2">•</span>
                      <span>Évaluation express en 2 heures chrono</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-quube-yellow mr-2">•</span>
                      <span>Potentiel IA et quick wins identifiés</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-quube-yellow mr-2">•</span>
                      <span>Recommandations immédiates actionnables</span>
                    </li>
                  </ul>
                </div>
              </div>
            </details>

            <details class="group border-b border-gray-200 pb-4">
              <summary class="cursor-pointer list-none flex justify-between items-start">
                <div class="flex-1">
                  <div class="flex items-baseline space-x-4 mb-2">
                    <span class="text-4xl font-light text-quube-gray group-open:text-quube-blue transition-colors">04</span>
                    <h3 class="text-2xl font-medium text-quube-black">Accompagnement Technique</h3>
                  </div>
                  <p class="text-lg font-light text-quube-gray-dark ml-16">Implémentation et déploiement</p>
                </div>
                <i class="fas fa-chevron-down text-quube-gray group-open:rotate-180 transition-transform mt-2"></i>
              </summary>
              <div class="mt-6 ml-16 text-quube-gray-dark leading-relaxed">
                Support technique pour l'implémentation concrète des solutions IA dans vos processus métiers.
              </div>
            </details>

            <details class="group border-b border-gray-200 pb-4">
              <summary class="cursor-pointer list-none flex justify-between items-start">
                <div class="flex-1">
                  <div class="flex items-baseline space-x-4 mb-2">
                    <span class="text-4xl font-light text-quube-gray group-open:text-quube-blue transition-colors">05</span>
                    <h3 class="text-2xl font-medium text-quube-black">Compliance & Conformité</h3>
                  </div>
                  <p class="text-lg font-light text-quube-gray-dark ml-16">RGPD, AI Act, NIS 2</p>
                </div>
                <i class="fas fa-chevron-down text-quube-gray group-open:rotate-180 transition-transform mt-2"></i>
              </summary>
              <div class="mt-6 ml-16 space-y-4 text-quube-gray-dark">
                <p class="leading-relaxed">
                  Maîtrisez les enjeux réglementaires : RGPD, AI Act, NIS 2, souveraineté des données et normes secteur santé.
                </p>
                <ul class="space-y-2">
                  <li class="flex items-start"><span class="text-quube-yellow mr-2">•</span><span>Sensibilisation RGPD et AI Act</span></li>
                  <li class="flex items-start"><span class="text-quube-yellow mr-2">•</span><span>Audit de conformité NIS 2</span></li>
                  <li class="flex items-start"><span class="text-quube-yellow mr-2">•</span><span>Souveraineté et hébergement des données</span></li>
                  <li class="flex items-start"><span class="text-quube-yellow mr-2">•</span><span>Normes HDS et ISO 27001</span></li>
                </ul>
              </div>
            </details>

            <details class="group border-b border-gray-200 pb-4">
              <summary class="cursor-pointer list-none flex justify-between items-start">
                <div class="flex-1">
                  <div class="flex items-baseline space-x-4 mb-2">
                    <span class="text-4xl font-light text-quube-gray group-open:text-quube-blue transition-colors">06</span>
                    <h3 class="text-2xl font-medium text-quube-black">Data Analyse via IA</h3>
                  </div>
                  <p class="text-lg font-light text-quube-gray-dark ml-16">Analytics et insights automatisés</p>
                </div>
                <i class="fas fa-chevron-down text-quube-gray group-open:rotate-180 transition-transform mt-2"></i>
              </summary>
              <div class="mt-6 ml-16 space-y-4 text-quube-gray-dark">
                <p class="leading-relaxed">
                  Exploitez vos données avec l'IA : analyse automatisée, visualisation intelligente et extraction d'insights actionnables.
                </p>
                <ul class="space-y-2">
                  <li class="flex items-start"><span class="text-quube-yellow mr-2">•</span><span>Analyse automatisée de données métiers</span></li>
                  <li class="flex items-start"><span class="text-quube-yellow mr-2">•</span><span>Visualisation intelligente & dashboards IA</span></li>
                  <li class="flex items-start"><span class="text-quube-yellow mr-2">•</span><span>Analyse prédictive & tendances</span></li>
                  <li class="flex items-start"><span class="text-quube-yellow mr-2">•</span><span>Reporting automatisé personnalisé</span></li>
                </ul>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Singularité */}
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
              Contrairement aux approches classiques, QUUBE <span class="font-medium text-quube-black">utilise l'IA générative directement dans vos projets stratégiques</span> : projets complexes, nouveaux modèles économiques, simulations tarifaires, transformation de l'offre, réorganisation de services
            </p>
          </div>
        </div>
      </section>

      {/* Thématiques avec accordéon */}
      <section id="thematiques" class="py-32 bg-white">
        <div class="max-w-6xl mx-auto px-8">
          <div class="mb-24">
            <h2 class="text-5xl md:text-6xl font-light text-quube-black mb-6">
              Par <span class="font-bold">Thématique</span>
            </h2>
            <div class="w-20 h-1 bg-quube-yellow"></div>
          </div>

          <div class="space-y-4">
            <details class="group border-b border-gray-100 pb-6">
              <summary class="cursor-pointer list-none flex items-start space-x-8 py-4 hover:bg-gray-50 transition-colors rounded-lg px-4">
                <div class="text-quube-gray group-open:text-quube-blue transition-colors text-lg font-light whitespace-nowrap">01</div>
                <div class="flex-1">
                  <h3 class="text-2xl font-medium text-quube-black mb-2">Compliance & Conformité</h3>
                  <p class="text-lg font-light text-quube-gray-dark">RGPD · AI Act · NIS 2 · Souveraineté</p>
                </div>
                <i class="fas fa-chevron-down text-quube-gray group-open:rotate-180 transition-transform mt-2"></i>
              </summary>
              <div class="ml-16 mt-4 space-y-3 text-quube-gray-dark">
                <p class="leading-relaxed">Maîtrisez les enjeux réglementaires liés à l'IA dans le secteur santé avec nos formations et audits de conformité.</p>
                <ul class="space-y-2 mt-4">
                  <li class="flex items-start"><span class="text-quube-yellow mr-2">•</span><span>RGPD et protection des données de santé</span></li>
                  <li class="flex items-start"><span class="text-quube-yellow mr-2">•</span><span>AI Act européen et réglementation IA</span></li>
                  <li class="flex items-start"><span class="text-quube-yellow mr-2">•</span><span>NIS 2 : cybersécurité et résilience</span></li>
                  <li class="flex items-start"><span class="text-quube-yellow mr-2">•</span><span>Souveraineté des données et hébergement HDS</span></li>
                </ul>
              </div>
            </details>

            <details class="group border-b border-gray-100 pb-6">
              <summary class="cursor-pointer list-none flex items-start space-x-8 py-4 hover:bg-gray-50 transition-colors rounded-lg px-4">
                <div class="text-quube-gray group-open:text-quube-blue transition-colors text-lg font-light whitespace-nowrap">02</div>
                <div class="flex-1">
                  <h3 class="text-2xl font-medium text-quube-black mb-2">Data Analyse & BI</h3>
                  <p class="text-lg font-light text-quube-gray-dark">Insights · Visualisation · Prédictif</p>
                </div>
                <i class="fas fa-chevron-down text-quube-gray group-open:rotate-180 transition-transform mt-2"></i>
              </summary>
              <div class="ml-16 mt-4 space-y-3 text-quube-gray-dark">
                <p class="leading-relaxed">Exploitez pleinement vos données avec l'IA pour des décisions éclairées et un pilotage optimisé.</p>
                <ul class="space-y-2 mt-4">
                  <li class="flex items-start"><span class="text-quube-yellow mr-2">•</span><span>BI augmentée par l'IA générative</span></li>
                  <li class="flex items-start"><span class="text-quube-yellow mr-2">•</span><span>Tableaux de bord temps réel</span></li>
                  <li class="flex items-start"><span class="text-quube-yellow mr-2">•</span><span>Analyse prédictive et détection de tendances</span></li>
                </ul>
              </div>
            </details>

            <details class="group border-b border-gray-100 pb-6">
              <summary class="cursor-pointer list-none flex items-start space-x-8 py-4 hover:bg-gray-50 transition-colors rounded-lg px-4">
                <div class="text-quube-gray group-open:text-quube-blue transition-colors text-lg font-light whitespace-nowrap">03</div>
                <div class="flex-1">
                  <h3 class="text-2xl font-medium text-quube-black mb-2">Gestion de Projet IA</h3>
                  <p class="text-lg font-light text-quube-gray-dark">Roadmap · Pilotage · Change Management</p>
                </div>
                <i class="fas fa-chevron-down text-quube-gray group-open:rotate-180 transition-transform mt-2"></i>
              </summary>
              <div class="ml-16 mt-4 text-quube-gray-dark leading-relaxed">
                Pilotez vos projets IA de A à Z avec méthodologie, outils et accompagnement change management.
              </div>
            </details>

            <details class="group border-b border-gray-100 pb-6">
              <summary class="cursor-pointer list-none flex items-start space-x-8 py-4 hover:bg-gray-50 transition-colors rounded-lg px-4">
                <div class="text-quube-gray group-open:text-quube-blue transition-colors text-lg font-light whitespace-nowrap">04</div>
                <div class="flex-1">
                  <h3 class="text-2xl font-medium text-quube-black mb-2">Fonctions Supports</h3>
                  <p class="text-lg font-light text-quube-gray-dark">RH · Finance · Direction · Admin</p>
                </div>
                <i class="fas fa-chevron-down text-quube-gray group-open:rotate-180 transition-transform mt-2"></i>
              </summary>
              <div class="ml-16 mt-4 text-quube-gray-dark leading-relaxed">
                Optimisez vos fonctions supports (RH, finance, direction, administration) avec l'IA générative.
              </div>
            </details>

            <details class="group border-b border-gray-100 pb-6">
              <summary class="cursor-pointer list-none flex items-start space-x-8 py-4 hover:bg-gray-50 transition-colors rounded-lg px-4">
                <div class="text-quube-gray group-open:text-quube-blue transition-colors text-lg font-light whitespace-nowrap">05</div>
                <div class="flex-1">
                  <h3 class="text-2xl font-medium text-quube-black mb-2">Gains Administratifs</h3>
                  <p class="text-lg font-light text-quube-gray-dark">Automatisation · 40-60 min/jour · ROI mesurable</p>
                </div>
                <i class="fas fa-chevron-down text-quube-gray group-open:rotate-180 transition-transform mt-2"></i>
              </summary>
              <div class="ml-16 mt-4 text-quube-gray-dark leading-relaxed">
                Gagnez 40 à 60 minutes par jour grâce à l'automatisation intelligente des tâches administratives répétitives.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Cas d'Usage avec onglets */}
      <section id="cas-usage" class="py-32 bg-gray-50">
        <div class="max-w-6xl mx-auto px-8">
          <div class="mb-24">
            <h2 class="text-5xl md:text-6xl font-light text-quube-black mb-6">
              Cas d'<span class="font-bold">Usage</span> par Métier
            </h2>
            <div class="w-20 h-1 bg-quube-yellow"></div>
          </div>

          {/* Onglets minimalistes */}
          <div class="flex flex-wrap gap-2 mb-12 border-b border-gray-200 pb-4">
            <button onclick="showTab('drh')" id="tab-drh" class="tab-btn px-6 py-3 text-sm font-medium rounded-t-lg border-b-2 border-transparent hover:border-quube-yellow transition-colors active">DRH</button>
            <button onclick="showTab('daf')" id="tab-daf" class="tab-btn px-6 py-3 text-sm font-medium rounded-t-lg border-b-2 border-transparent hover:border-quube-yellow transition-colors">DAF</button>
            <button onclick="showTab('dg')" id="tab-dg" class="tab-btn px-6 py-3 text-sm font-medium rounded-t-lg border-b-2 border-transparent hover:border-quube-yellow transition-colors">DG</button>
            <button onclick="showTab('directeurs')" id="tab-directeurs" class="tab-btn px-6 py-3 text-sm font-medium rounded-t-lg border-b-2 border-transparent hover:border-quube-yellow transition-colors">Directeurs</button>
            <button onclick="showTab('soins')" id="tab-soins" class="tab-btn px-6 py-3 text-sm font-medium rounded-t-lg border-b-2 border-transparent hover:border-quube-yellow transition-colors">Équipes Soins</button>
            <button onclick="showTab('educatif')" id="tab-educatif" class="tab-btn px-6 py-3 text-sm font-medium rounded-t-lg border-b-2 border-transparent hover:border-quube-yellow transition-colors">Équipes Éducatives</button>
          </div>

          {/* Contenu onglets */}
          <div id="content-drh" class="tab-content">
            <h3 class="text-3xl font-medium text-quube-black mb-4">DRH - Recrutement & RH</h3>
            <p class="text-lg font-light text-quube-gray-dark leading-relaxed mb-6">
              Optimisez vos processus RH avec l'IA : rédaction d'offres d'emploi, screening de CV, onboarding personnalisé.
            </p>
            <ul class="space-y-3 text-quube-gray-dark">
              <li class="flex items-start"><span class="text-quube-yellow mr-3">•</span><span>Rédaction automatisée d'offres d'emploi ciblées</span></li>
              <li class="flex items-start"><span class="text-quube-yellow mr-3">•</span><span>Screening de CV et matching candidats</span></li>
              <li class="flex items-start"><span class="text-quube-yellow mr-3">•</span><span>Génération de plans d'onboarding personnalisés</span></li>
              <li class="flex items-start"><span class="text-quube-yellow mr-3">•</span><span>Création de fiches de poste et référentiels</span></li>
            </ul>
          </div>

          <div id="content-daf" class="tab-content hidden">
            <h3 class="text-3xl font-medium text-quube-black mb-4">DAF - Finance & Gestion</h3>
            <p class="text-lg font-light text-quube-gray-dark leading-relaxed mb-6">
              Accélérez vos analyses financières, simulations budgétaires et reporting avec l'IA.
            </p>
            <ul class="space-y-3 text-quube-gray-dark">
              <li class="flex items-start"><span class="text-quube-yellow mr-3">•</span><span>Analyse automatisée des données financières</span></li>
              <li class="flex items-start"><span class="text-quube-yellow mr-3">•</span><span>Simulations tarifaires et modèles économiques</span></li>
              <li class="flex items-start"><span class="text-quube-yellow mr-3">•</span><span>Reporting financier automatisé</span></li>
              <li class="flex items-start"><span class="text-quube-yellow mr-3">•</span><span>Prévisions budgétaires assistées par IA</span></li>
            </ul>
          </div>

          <div id="content-dg" class="tab-content hidden">
            <h3 class="text-3xl font-medium text-quube-black mb-4">DG - Vision Stratégique</h3>
            <p class="text-lg font-light text-quube-gray-dark leading-relaxed mb-6">
              Pilotez votre stratégie avec l'IA : analyse concurrentielle, synthèses stratégiques, aide à la décision.
            </p>
          </div>

          <div id="content-directeurs" class="tab-content hidden">
            <h3 class="text-3xl font-medium text-quube-black mb-4">Directeurs d'Établissements</h3>
            <p class="text-lg font-light text-quube-gray-dark leading-relaxed mb-6">
              Optimisez le pilotage de votre établissement : indicateurs qualité, rapports d'activité, communication.
            </p>
          </div>

          <div id="content-soins" class="tab-content hidden">
            <h3 class="text-3xl font-medium text-quube-black mb-4">Équipes de Soins</h3>
            <p class="text-lg font-light text-quube-gray-dark leading-relaxed mb-6">
              Gagnez du temps sur la documentation : dossiers patients, transmissions, protocoles de soins.
            </p>
          </div>

          <div id="content-educatif" class="tab-content hidden">
            <h3 class="text-3xl font-medium text-quube-black mb-4">Équipes Éducatives</h3>
            <p class="text-lg font-light text-quube-gray-dark leading-relaxed mb-6">
              Améliorez vos programmes éducatifs : projets personnalisés, suivi individuel, supports pédagogiques.
            </p>
          </div>
        </div>
      </section>

      {/* Blog - Grid simple */}
      <section id="blog" class="py-32 bg-white">
        <div class="max-w-6xl mx-auto px-8">
          <div class="mb-24">
            <h2 class="text-5xl md:text-6xl font-light text-quube-black mb-6">
              Nos <span class="font-bold">Articles</span>
            </h2>
            <div class="w-20 h-1 bg-quube-yellow mb-6"></div>
            <p class="text-lg font-light text-quube-gray-dark max-w-2xl">
              Découvrez nos analyses et retours d'expérience sur l'IA dans le secteur santé
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8">
            {/* 3 articles en exemple - style minimaliste */}
            <article class="group cursor-pointer">
              <div class="border-b-2 border-gray-200 group-hover:border-quube-yellow transition-colors pb-6">
                <div class="text-sm text-quube-gray mb-3">Article</div>
                <h3 class="text-xl font-medium text-quube-black mb-3 group-hover:text-quube-blue transition-colors">
                  IA générative dans le médico-social : enjeux et bénéfices
                </h3>
                <p class="text-quube-gray-dark font-light leading-relaxed">
                  Les cas d'usage concrets de l'IA dans le secteur médico-social et leurs impacts mesurables
                </p>
              </div>
            </article>

            <article class="group cursor-pointer">
              <div class="border-b-2 border-gray-200 group-hover:border-quube-yellow transition-colors pb-6">
                <div class="text-sm text-quube-gray mb-3">Article</div>
                <h3 class="text-xl font-medium text-quube-black mb-3 group-hover:text-quube-blue transition-colors">
                  RGPD et IA : ce que vous devez savoir
                </h3>
                <p class="text-quube-gray-dark font-light leading-relaxed">
                  Compliance et conformité dans l'utilisation de l'IA générative en santé
                </p>
              </div>
            </article>

            <article class="group cursor-pointer">
              <div class="border-b-2 border-gray-200 group-hover:border-quube-yellow transition-colors pb-6">
                <div class="text-sm text-quube-gray mb-3">Article</div>
                <h3 class="text-xl font-medium text-quube-black mb-3 group-hover:text-quube-blue transition-colors">
                  40 minutes gagnées par jour : retour d'expérience
                </h3>
                <p class="text-quube-gray-dark font-light leading-relaxed">
                  Comment l'IA transforme concrètement le quotidien des professionnels de santé
                </p>
              </div>
            </article>
          </div>

          <div class="mt-12 text-center">
            <a href="#blog" class="inline-block px-8 py-3 border-2 border-gray-200 hover:border-quube-yellow text-quube-black hover:text-quube-blue transition-colors font-medium">
              Voir tous les articles
            </a>
          </div>
        </div>
      </section>

      {/* CTA Final */}
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
              <a href="https://calendly.com/quube" class="inline-block px-12 py-5 bg-quube-yellow text-quube-black text-lg font-medium hover:bg-quube-yellow-neon transition-colors">
                Prendre rendez-vous
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer class="py-12 bg-white border-t border-gray-100">
        <div class="max-w-6xl mx-auto px-8 text-center">
          <p class="text-sm font-light text-quube-gray">
            © 2026 QUUBE × IA Santé · Formations & Conseil en Intelligence Artificielle
          </p>
        </div>
      </footer>

      {/* JavaScript */}
      <script dangerouslySetInnerHTML={{
        __html: `
          // Mobile menu
          const mobileMenuBtn = document.getElementById('mobile-menu-btn');
          const mobileMenu = document.getElementById('mobile-menu');
          
          if (mobileMenuBtn) {
            mobileMenuBtn.addEventListener('click', () => {
              mobileMenu.classList.toggle('hidden');
            });
          }

          // Smooth scroll
          document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
              e.preventDefault();
              const target = document.querySelector(this.getAttribute('href'));
              if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                  mobileMenu.classList.add('hidden');
                }
              }
            });
          });

          // Tabs
          function showTab(tabName) {
            // Hide all
            document.querySelectorAll('.tab-content').forEach(content => {
              content.classList.add('hidden');
            });
            document.querySelectorAll('.tab-btn').forEach(btn => {
              btn.classList.remove('active', 'border-quube-yellow', 'text-quube-black');
              btn.classList.add('text-quube-gray');
            });
            
            // Show selected
            const content = document.getElementById('content-' + tabName);
            const button = document.getElementById('tab-' + tabName);
            if (content) content.classList.remove('hidden');
            if (button) {
              button.classList.add('active', 'border-quube-yellow', 'text-quube-black');
              button.classList.remove('text-quube-gray');
            }
          }

          // Init first tab
          window.showTab = showTab;
        `
      }} />

      <style dangerouslySetInnerHTML={{
        __html: `
          .tab-btn.active {
            border-bottom-color: #fcf474;
            color: #000000;
          }
        `
      }} />
    </>
  )
})

export default app
