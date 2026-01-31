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
            <a href="#promesse" class="text-quube-gray-dark hover:text-quube-black transition-colors">Notre Promesse</a>
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
            <a href="#promesse" class="text-quube-gray-dark hover:text-quube-black transition-colors">Notre Promesse</a>
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
                L'IA en Santé
                <br />
                <span class="font-bold">En Toute Confiance</span>
              </h1>
              <div class="w-20 h-1 bg-quube-yellow"></div>
            </div>
            
            <p class="text-2xl md:text-3xl font-light text-quube-gray-dark leading-relaxed max-w-2xl">
              <span class="text-quube-black font-semibold">Une expertise indépendante qui connecte le potentiel de l'IA aux besoins de votre organisation de santé</span>
            </p>
            
            <p class="text-xl font-light text-quube-gray-dark leading-relaxed max-w-2xl">
              De la stratégie aux usages concrets, nous vous guidons pour libérer le potentiel de l'IA <span class="text-quube-black font-medium">sans jargon</span>, au service des soignants et des patients.
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

      {/* Notre Promesse - Positionnement Unique */}
      <section id="promesse" class="py-32 bg-white border-t border-gray-100">
        <div class="max-w-6xl mx-auto px-8">
          <div class="mb-16 text-center">
            <div class="inline-block px-6 py-2 bg-quube-yellow/20 rounded-full mb-6">
              <span class="text-sm font-medium text-quube-black">Notre Promesse</span>
            </div>
            <h2 class="text-4xl md:text-5xl font-light text-quube-black leading-tight max-w-3xl mx-auto">
              Une expertise <span class="font-bold">indépendante</span> qui connecte le potentiel de l'IA aux besoins de votre organisation de santé
            </h2>
          </div>

          <div class="grid md:grid-cols-2 gap-12 mb-16">
            <div class="space-y-6">
              <h3 class="text-2xl font-medium text-quube-black">Une double expertise unique : Santé + IA</h3>
              <p class="text-lg font-light text-quube-gray-dark leading-relaxed">
                QUUBE IA Santé est votre <span class="text-quube-black font-medium">partenaire 360° de la transformation IA</span>. 
                Nous ne vendons pas de logiciel IA, nous vous conseillons en toute neutralité.
              </p>
              <p class="text-lg font-light text-quube-gray-dark leading-relaxed">
                Notre double expertise <span class="text-quube-black font-medium">terrain sanitaire + intelligence artificielle</span> fait de nous 
                l'interlocuteur de confiance pour naviguer dans l'écosystème pléthorique des solutions IA.
              </p>
            </div>

            <div class="space-y-6">
              <h3 class="text-2xl font-medium text-quube-black">Au-delà de la technologie : l'accompagnement humain</h3>
              <p class="text-lg font-light text-quube-gray-dark leading-relaxed">
                Les principaux obstacles à l'adoption de l'IA ne sont pas technologiques, mais <span class="text-quube-black font-medium">humains et organisationnels</span>.
              </p>
              <p class="text-lg font-light text-quube-gray-dark leading-relaxed">
                C'est précisément là que QUUBE intervient : <span class="text-quube-black font-medium">formation des équipes, alignement stratégique, 
                conduite du changement</span>, et aide au choix parmi des centaines de solutions innovantes.
              </p>
            </div>
          </div>

          {/* 4 Engagements / Claims Marketing */}
          <div class="grid md:grid-cols-4 gap-8">
            <div class="text-center space-y-4 p-6 border border-gray-200 rounded-lg hover:border-quube-yellow transition-colors">
              <div class="text-4xl">🏥</div>
              <h4 class="font-semibold text-quube-black">100% Santé, 100% IA</h4>
              <p class="text-sm text-quube-gray-dark">Nos consultants allient expérience du terrain sanitaire et expertise en intelligence artificielle</p>
            </div>

            <div class="text-center space-y-4 p-6 border border-gray-200 rounded-lg hover:border-quube-yellow transition-colors">
              <div class="text-4xl">🤝</div>
              <h4 class="font-semibold text-quube-black">Neutres et Indépendants</h4>
              <p class="text-sm text-quube-gray-dark">Aucun partenariat exclusif avec un éditeur : nous préconisons les solutions qui vous conviennent, point final</p>
            </div>

            <div class="text-center space-y-4 p-6 border border-gray-200 rounded-lg hover:border-quube-yellow transition-colors">
              <div class="text-4xl">🛠️</div>
              <h4 class="font-semibold text-quube-black">Concrets et Humains</h4>
              <p class="text-sm text-quube-gray-dark">Pas de slides inutiles : nous co-construisons avec vos équipes des solutions pragmatiques jusqu'à adoption complète</p>
            </div>

            <div class="text-center space-y-4 p-6 border border-gray-200 rounded-lg hover:border-quube-yellow transition-colors">
              <div class="text-4xl">✋</div>
              <h4 class="font-semibold text-quube-black">Gardez la Main sur l'IA</h4>
              <p class="text-sm text-quube-gray-dark">L'IA doit augmenter vos équipes, pas les remplacer. Nous intégrons l'IA de manière éthique, sûre et utile</p>
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
            {/* Service 1 - Conférences IA Inspirantes */}
            <details class="group border-b border-gray-200 pb-4">
              <summary class="cursor-pointer list-none flex justify-between items-start">
                <div class="flex-1">
                  <div class="flex items-baseline space-x-4 mb-2">
                    <span class="text-4xl font-light text-quube-gray group-open:text-quube-blue transition-colors">01</span>
                    <h3 class="text-2xl font-medium text-quube-black">Conférences IA Inspirantes</h3>
                  </div>
                  <p class="text-lg font-light text-quube-gray-dark ml-16">
                    Des interventions pour démystifier l'IA auprès de vos équipes et dirigeants
                  </p>
                </div>
                <i class="fas fa-chevron-down text-quube-gray group-open:rotate-180 transition-transform mt-2"></i>
              </summary>
              <div class="mt-6 ml-16 space-y-4 text-quube-gray-dark">
                <p class="leading-relaxed">
                  <strong>Inspirez vos équipes grâce à nos conférences ludiques et pédagogiques.</strong> En 1 à 2 heures, nos experts démystifient l'IA (ChatGPT, vision médicale, etc.) en partageant exemples concrets et retours d'expérience.
                </p>
                <p class="leading-relaxed">
                  <strong>Objectif :</strong> lever les idées reçues et susciter des vocations, du COMEX aux soignants.
                </p>
                
                <div class="mt-6 p-4 bg-quube-yellow/10 border-l-4 border-quube-yellow rounded-r">
                  <p class="text-sm font-medium text-quube-black mb-2">💡 Formats disponibles</p>
                  <ul class="space-y-1 text-sm">
                    <li>• Conférences plénières (50-200 personnes)</li>
                    <li>• Webinaires interactifs</li>
                    <li>• Séminaires de sensibilisation</li>
                    <li>• Ateliers découverte et démonstrations live</li>
                  </ul>
                </div>
              </div>
            </details>

            {/* Service 2 - Coaching IA Dirigeants */}
            <details class="group border-b border-gray-200 pb-4">
              <summary class="cursor-pointer list-none flex justify-between items-start">
                <div class="flex-1">
                  <div class="flex items-baseline space-x-4 mb-2">
                    <span class="text-4xl font-light text-quube-gray group-open:text-quube-blue transition-colors">02</span>
                    <h3 class="text-2xl font-medium text-quube-black">Coaching IA Individuel pour Dirigeants</h3>
                  </div>
                  <p class="text-lg font-light text-quube-gray-dark ml-16">
                    Un mentor dédié pour intégrer l'IA à votre vision stratégique
                  </p>
                </div>
                <i class="fas fa-chevron-down text-quube-gray group-open:rotate-180 transition-transform mt-2"></i>
              </summary>
              <div class="mt-6 ml-16 space-y-4 text-quube-gray-dark">
                <p class="leading-relaxed">
                  <strong>Bénéficiez d'un sparring-partner de haut niveau pour vous approprier l'IA.</strong> Sur quelques séances confidentielles, un coach QUUBE vous aide à comprendre les outils (de ChatGPT aux IA d'imagerie), à identifier les opportunités pour votre organisation et à anticiper les impacts managériaux.
                </p>
                <p class="leading-relaxed">
                  <strong>Résultat :</strong> une vision 360° de l'IA appliquée à votre feuille de route de dirigeant.
                </p>
                
                <div class="mt-6 p-4 bg-quube-yellow/10 border-l-4 border-quube-yellow rounded-r">
                  <p class="text-sm font-medium text-quube-black mb-2">🎯 Bénéfices</p>
                  <ul class="space-y-1 text-sm">
                    <li>• Coaching 1-to-1 exclusif et confidentiel</li>
                    <li>• Appropriation des outils IA stratégiques</li>
                    <li>• Identification des opportunités business</li>
                    <li>• Anticipation des impacts managériaux et RH</li>
                    <li>• Plan d'action personnalisé</li>
                  </ul>
                </div>
              </div>
            </details>

            {/* Service 3 - Formations IA sur Mesure */}
            <details class="group border-b border-gray-200 pb-4">
              <summary class="cursor-pointer list-none flex justify-between items-start">
                <div class="flex-1">
                  <div class="flex items-baseline space-x-4 mb-2">
                    <span class="text-4xl font-light text-quube-gray group-open:text-quube-blue transition-colors">03</span>
                    <h3 class="text-2xl font-medium text-quube-black">Formations IA sur Mesure</h3>
                  </div>
                  <p class="text-lg font-light text-quube-gray-dark ml-16">
                    Ateliers pratiques pour rendre vos équipes autonomes avec l'IA
                  </p>
                </div>
                <i class="fas fa-chevron-down text-quube-gray group-open:rotate-180 transition-colors mt-2"></i>
              </summary>
              <div class="mt-6 ml-16 space-y-4 text-quube-gray-dark">
                <p class="leading-relaxed">
                  <strong>Formez vos collaborateurs aux usages concrets de l'IA.</strong> Nos ateliers, en petits groupes, sont 100% pratiques : exercices avec des données et cas réels de votre organisation.
                </p>
                <p class="leading-relaxed">
                  <strong>Objectif :</strong> rendre chaque participant opérationnel et responsable dans l'usage de ces nouveaux outils (y compris sur les aspects éthiques et RGPD).
                </p>
                
                <div class="mt-6 p-4 bg-quube-yellow/10 border-l-4 border-quube-yellow rounded-r">
                  <p class="text-sm font-medium text-quube-black mb-2">📚 Thématiques disponibles</p>
                  <ul class="space-y-1 text-sm">
                    <li>• Initiation à l'IA pour cadres de santé</li>
                    <li>• Optimiser son temps avec ChatGPT</li>
                    <li>• IA & data pour médecins</li>
                    <li>• Formations certifiantes</li>
                    <li>• Cas d'usage secteur santé & médico-social</li>
                    <li>• Prompting avancé et RGPD/éthique</li>
                  </ul>
                </div>
              </div>
            </details>

            <details class="group border-b border-gray-200 pb-4">
              <summary class="cursor-pointer list-none flex justify-between items-start">
                <div class="flex-1">
                  <div class="flex items-baseline space-x-4 mb-2">
                    <span class="text-4xl font-light text-quube-gray group-open:text-quube-blue transition-colors">04</span>
                    <h3 class="text-2xl font-medium text-quube-black">Automatisation de Workflow</h3>
                  </div>
                  <p class="text-lg font-light text-quube-gray-dark ml-16">Optimisation et gains de productivité</p>
                </div>
                <i class="fas fa-chevron-down text-quube-gray group-open:rotate-180 transition-transform mt-2"></i>
              </summary>
              <div class="mt-6 ml-16 space-y-4 text-quube-gray-dark">
                <p class="leading-relaxed">
                  Transformez vos processus métiers grâce à l'automatisation intelligente par l'IA. Réduisez les tâches répétitives, accélérez vos workflows et libérez du temps pour vos équipes.
                </p>
                <ul class="space-y-2">
                  <li class="flex items-start"><span class="text-quube-yellow mr-2">•</span><span><strong>Automatisation documentaire :</strong> Traitement intelligent de documents, extraction et classement automatisés</span></li>
                  <li class="flex items-start"><span class="text-quube-yellow mr-2">•</span><span><strong>Workflows administratifs :</strong> Automatisation des processus RH, facturation, suivi qualité</span></li>
                  <li class="flex items-start"><span class="text-quube-yellow mr-2">•</span><span><strong>Assistants IA métiers :</strong> Chatbots intelligents, agents conversationnels spécialisés</span></li>
                  <li class="flex items-start"><span class="text-quube-yellow mr-2">•</span><span><strong>Intégrations & connecteurs :</strong> Connexion avec vos outils existants (ERP, CRM, logiciels métiers)</span></li>
                  <li class="flex items-start"><span class="text-quube-yellow mr-2">•</span><span><strong>ROI mesurable :</strong> Gains de temps quantifiés, réduction des erreurs, amélioration de la qualité</span></li>
                </ul>
                <div class="mt-4 p-4 bg-gray-50 border-l-4 border-quube-yellow">
                  <p class="text-sm font-medium text-quube-black">💡 Valeur ajoutée</p>
                  <p class="text-sm mt-2">
                    Nos solutions d'automatisation génèrent en moyenne <strong>30% de gain de temps</strong> sur les tâches administratives, permettant à vos équipes de se concentrer sur les missions à forte valeur ajoutée : accompagnement des patients, qualité des soins et innovation.
                  </p>
                </div>
              </div>
            </details>

            <details class="group border-b border-gray-200 pb-4">
              <summary class="cursor-pointer list-none flex justify-between items-start">
                <div class="flex-1">
                  <div class="flex items-baseline space-x-4 mb-2">
                    <span class="text-4xl font-light text-quube-gray group-open:text-quube-blue transition-colors">05</span>
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

          <div class="mb-12 p-6 bg-quube-yellow/10 border-l-4 border-quube-yellow rounded-r-lg">
            <p class="text-lg font-light text-quube-gray-dark leading-relaxed">
              <strong class="text-quube-black">💡 Découvrez comment l'IA générative transforme concrètement le quotidien des professionnels de santé.</strong> Ces cas d'usage sont issus de notre expérience terrain dans les hôpitaux publics, établissements privés, EHPAD, IME, structures de soins à domicile…
            </p>
          </div>

          {/* Onglets minimalistes */}
          <div class="flex flex-wrap gap-2 mb-12 border-b border-gray-200 pb-4">
            <button onclick="showTab('reunions')" id="tab-reunions" class="tab-btn px-6 py-3 text-sm font-bold rounded-t-lg border-b-2 border-transparent hover:border-quube-yellow transition-colors bg-quube-yellow/30 text-quube-black shadow-sm active">🧠 Réunions</button>
            <button onclick="showTab('rapports')" id="tab-rapports" class="tab-btn px-6 py-3 text-sm font-medium rounded-t-lg border-b-2 border-transparent hover:border-quube-yellow transition-colors">📊 Rapports</button>
            <button onclick="showTab('tutelle')" id="tab-tutelle" class="tab-btn px-6 py-3 text-sm font-medium rounded-t-lg border-b-2 border-transparent hover:border-quube-yellow transition-colors">🏛 Tutelle</button>
            <button onclick="showTab('rh')" id="tab-rh" class="tab-btn px-6 py-3 text-sm font-medium rounded-t-lg border-b-2 border-transparent hover:border-quube-yellow transition-colors">👥 RH</button>
            <button onclick="showTab('communication')" id="tab-communication" class="tab-btn px-6 py-3 text-sm font-medium rounded-t-lg border-b-2 border-transparent hover:border-quube-yellow transition-colors">💬 Communication</button>
            <button onclick="showTab('medical')" id="tab-medical" class="tab-btn px-6 py-3 text-sm font-medium rounded-t-lg border-b-2 border-transparent hover:border-quube-yellow transition-colors">🩺 Médical</button>
            <button onclick="showTab('usager')" id="tab-usager" class="tab-btn px-6 py-3 text-sm font-medium rounded-t-lg border-b-2 border-transparent hover:border-quube-yellow transition-colors">👪 Parcours</button>
            <button onclick="showTab('qualite')" id="tab-qualite" class="tab-btn px-6 py-3 text-sm font-medium rounded-t-lg border-b-2 border-transparent hover:border-quube-yellow transition-colors">✍️ Qualité</button>
          </div>

          {/* Contenu onglets */}
          <div id="content-reunions" class="tab-content">
            <h3 class="text-3xl font-medium text-quube-black mb-6">🧠 Réunions Stratégiques : Préparez, Structurez, Diffusez</h3>
            
            <div class="grid md:grid-cols-2 gap-8 mb-6">
              <div class="p-6 bg-gray-50 rounded-lg">
                <p class="text-sm font-semibold text-quube-blue mb-2">POUR QUI ?</p>
                <p class="text-quube-gray-dark">Directions, cadres de pôle, secrétariats de direction</p>
              </div>
              <div class="p-6 bg-quube-yellow/10 rounded-lg">
                <p class="text-sm font-semibold text-quube-black mb-2">⏱ GAIN MOYEN CONSTATÉ</p>
                <p class="text-2xl font-bold text-quube-black">10h/semaine/cadre</p>
              </div>
            </div>

            <div class="space-y-6">
              <div>
                <h4 class="text-lg font-semibold text-quube-black mb-3">❌ Avant l'IA</h4>
                <p class="text-quube-gray-dark">Préparation chronophage des ordres du jour, rédaction manuelle des comptes rendus, relances par mail manuelles</p>
              </div>

              <div>
                <h4 class="text-lg font-semibold text-quube-black mb-3">✅ Avec l'IA</h4>
                <ul class="space-y-3 text-quube-gray-dark">
                  <li class="flex items-start"><span class="text-quube-yellow mr-3 text-xl">•</span><span><strong>Génération automatique de l'ordre du jour</strong> à partir de mails ou documents</span></li>
                  <li class="flex items-start"><span class="text-quube-yellow mr-3 text-xl">•</span><span><strong>Compte rendu synthétique en 2 minutes</strong>, structuré par décision, action, vigilance</span></li>
                  <li class="flex items-start"><span class="text-quube-yellow mr-3 text-xl">•</span><span><strong>Relances personnalisées</strong> aux responsables d'actions</span></li>
                </ul>
              </div>
            </div>
          </div>

          <div id="content-rapports" class="tab-content hidden">
            <h3 class="text-3xl font-medium text-quube-black mb-6">📊 Rapports & Indicateurs : Synthétisez l'Essentiel</h3>
            
            <div class="grid md:grid-cols-2 gap-8 mb-6">
              <div class="p-6 bg-gray-50 rounded-lg">
                <p class="text-sm font-semibold text-quube-blue mb-2">POUR QUI ?</p>
                <p class="text-quube-gray-dark">Qualité, gestion des risques, contrôle de gestion, médical, SSR</p>
              </div>
              <div class="p-6 bg-quube-yellow/10 rounded-lg">
                <p class="text-sm font-semibold text-quube-black mb-2">⏱ GAIN MOYEN</p>
                <p class="text-2xl font-bold text-quube-black">2h → 15 minutes</p>
              </div>
            </div>

            <div class="space-y-6">
              <div>
                <h4 class="text-lg font-semibold text-quube-black mb-3">❌ Avant l'IA</h4>
                <p class="text-quube-gray-dark">Tableaux Excel lourds à analyser, rédaction longue de bilans et de rapports</p>
              </div>

              <div>
                <h4 class="text-lg font-semibold text-quube-black mb-3">✅ Avec l'IA</h4>
                <ul class="space-y-3 text-quube-gray-dark">
                  <li class="flex items-start"><span class="text-quube-yellow mr-3 text-xl">•</span><span><strong>Résumé automatique des tendances clés</strong></span></li>
                  <li class="flex items-start"><span class="text-quube-yellow mr-3 text-xl">•</span><span><strong>Recommandations argumentées</strong> pour les plans d'actions</span></li>
                  <li class="flex items-start"><span class="text-quube-yellow mr-3 text-xl">•</span><span><strong>Mise en forme directe</strong> dans Word/PowerPoint</span></li>
                </ul>
              </div>
            </div>
          </div>

          <div id="content-tutelle" class="tab-content hidden">
            <h3 class="text-3xl font-medium text-quube-black mb-6">🏛 Réponses aux Autorités de Tutelle (ARS, DGOS, HAS)</h3>
            
            <div class="p-6 bg-gray-50 rounded-lg mb-6">
              <p class="text-sm font-semibold text-quube-blue mb-2">POUR QUI ?</p>
              <p class="text-quube-gray-dark">Directions, secrétariat de direction, DAF, DIM</p>
            </div>

            <div class="space-y-6">
              <div>
                <h4 class="text-lg font-semibold text-quube-black mb-3">❌ Avant l'IA</h4>
                <p class="text-quube-gray-dark">Réponses longues à rédiger, données à compiler, délais courts</p>
              </div>

              <div>
                <h4 class="text-lg font-semibold text-quube-black mb-3">✅ Avec l'IA</h4>
                <ul class="space-y-3 text-quube-gray-dark">
                  <li class="flex items-start"><span class="text-quube-yellow mr-3 text-xl">•</span><span><strong>Rédaction automatisée d'un argumentaire structuré</strong> (format CPOM, dotation MIGAC, bilan d'activité, etc.)</span></li>
                  <li class="flex items-start"><span class="text-quube-yellow mr-3 text-xl">•</span><span><strong>Intégration des références réglementaires</strong></span></li>
                  <li class="flex items-start"><span class="text-quube-yellow mr-3 text-xl">•</span><span><strong>Mise en page prête à l'envoi</strong></span></li>
                </ul>
                
                <div class="mt-6 p-4 bg-quube-yellow/10 border-l-4 border-quube-yellow rounded-r">
                  <p class="text-sm font-medium text-quube-black">📄 Bénéfice : documents plus robustes, stress réduit, temps divisé par 3</p>
                </div>
              </div>
            </div>
          </div>

          <div id="content-rh" class="tab-content hidden">
            <h3 class="text-3xl font-medium text-quube-black mb-6">👥 Ressources Humaines : Professionnaliser, Fluidifier</h3>
            
            <div class="grid md:grid-cols-2 gap-8 mb-6">
              <div class="p-6 bg-gray-50 rounded-lg">
                <p class="text-sm font-semibold text-quube-blue mb-2">POUR QUI ?</p>
                <p class="text-quube-gray-dark">DRH, gestionnaires RH, managers</p>
              </div>
              <div class="p-6 bg-quube-yellow/10 rounded-lg">
                <p class="text-sm font-semibold text-quube-black mb-2">📈 ROI CONSTATÉ</p>
                <p class="text-2xl font-bold text-quube-black">12h/mois/manager</p>
              </div>
            </div>

            <div>
              <h4 class="text-lg font-semibold text-quube-black mb-3">✅ Avec l'IA</h4>
              <ul class="space-y-3 text-quube-gray-dark">
                <li class="flex items-start"><span class="text-quube-yellow mr-3 text-xl">•</span><span><strong>Rédaction automatique des fiches de poste</strong> conformes FPH</span></li>
                <li class="flex items-start"><span class="text-quube-yellow mr-3 text-xl">•</span><span><strong>Génération des trames d'entretien</strong> et bilans individuels</span></li>
                <li class="flex items-start"><span class="text-quube-yellow mr-3 text-xl">•</span><span><strong>Planification optimisée</strong> (roulements, remplacements, astreintes)</span></li>
              </ul>
            </div>
          </div>

          <div id="content-communication" class="tab-content hidden">
            <h3 class="text-3xl font-medium text-quube-black mb-6">💬 Aide à la Communication Interne & Externe</h3>
            
            <div class="p-6 bg-gray-50 rounded-lg mb-6">
              <p class="text-sm font-semibold text-quube-blue mb-2">POUR QUI ?</p>
              <p class="text-quube-gray-dark">Communication, direction, chef de projet</p>
            </div>

            <div>
              <h4 class="text-lg font-semibold text-quube-black mb-3">✅ Avec l'IA</h4>
              <ul class="space-y-3 text-quube-gray-dark">
                <li class="flex items-start"><span class="text-quube-yellow mr-3 text-xl">•</span><span><strong>Rédaction de newsletters, notes internes, courriers de crise</strong></span></li>
                <li class="flex items-start"><span class="text-quube-yellow mr-3 text-xl">•</span><span><strong>Traduction, simplification ou mise au format FALC</strong></span></li>
                <li class="flex items-start"><span class="text-quube-yellow mr-3 text-xl">•</span><span><strong>Génération d'infographies ou slides de présentation</strong></span></li>
              </ul>
            </div>
          </div>

          <div id="content-medical" class="tab-content hidden">
            <h3 class="text-3xl font-medium text-quube-black mb-6">🩺 Soutien aux Équipes Médicales et Paramédicales</h3>
            
            <div class="p-6 bg-gray-50 rounded-lg mb-6">
              <p class="text-sm font-semibold text-quube-blue mb-2">POUR QUI ?</p>
              <p class="text-quube-gray-dark">Médecins, cadres de santé, secrétaires médicales</p>
            </div>

            <div>
              <h4 class="text-lg font-semibold text-quube-black mb-3">✅ Avec l'IA</h4>
              <ul class="space-y-3 text-quube-gray-dark">
                <li class="flex items-start"><span class="text-quube-yellow mr-3 text-xl">•</span><span><strong>Génération de comptes rendus</strong> à partir de notes dictées</span></li>
                <li class="flex items-start"><span class="text-quube-yellow mr-3 text-xl">•</span><span><strong>Préparation de synthèses RCP</strong> ou d'anamnèses</span></li>
                <li class="flex items-start"><span class="text-quube-yellow mr-3 text-xl">•</span><span><strong>Aide à la recherche bibliographique rapide</strong></span></li>
              </ul>
              
              <div class="mt-6 p-4 bg-quube-yellow/10 border-l-4 border-quube-yellow rounded-r">
                <p class="text-sm font-medium text-quube-black">📚 Cas concrets : IME, SSR, HDJ, CHU avec des gains de temps et qualité</p>
              </div>
            </div>
          </div>

          <div id="content-usager" class="tab-content hidden">
            <h3 class="text-3xl font-medium text-quube-black mb-6">👪 Amélioration du Parcours Usager</h3>
            
            <div class="p-6 bg-gray-50 rounded-lg mb-6">
              <p class="text-sm font-semibold text-quube-blue mb-2">POUR QUI ?</p>
              <p class="text-quube-gray-dark">Équipes sociales, médico-sociales, accueil, vie institutionnelle</p>
            </div>

            <div>
              <h4 class="text-lg font-semibold text-quube-black mb-3">✅ Avec l'IA</h4>
              <ul class="space-y-3 text-quube-gray-dark">
                <li class="flex items-start"><span class="text-quube-yellow mr-3 text-xl">•</span><span><strong>Création de guides d'accueil personnalisés</strong></span></li>
                <li class="flex items-start"><span class="text-quube-yellow mr-3 text-xl">•</span><span><strong>Rédaction de projets personnalisés d'accompagnement (PPA)</strong></span></li>
                <li class="flex items-start"><span class="text-quube-yellow mr-3 text-xl">•</span><span><strong>Génération de lettres type</strong> (convocations, notifications, relances)</span></li>
              </ul>
            </div>
          </div>

          <div id="content-qualite" class="tab-content hidden">
            <h3 class="text-3xl font-medium text-quube-black mb-6">✍️ Soutien aux Écrits Professionnels et Qualité</h3>
            
            <div class="p-6 bg-gray-50 rounded-lg mb-6">
              <p class="text-sm font-semibold text-quube-blue mb-2">POUR QUI ?</p>
              <p class="text-quube-gray-dark">Cadres, soignants, responsables qualité</p>
            </div>

            <div>
              <h4 class="text-lg font-semibold text-quube-black mb-3">✅ Avec l'IA</h4>
              <ul class="space-y-3 text-quube-gray-dark">
                <li class="flex items-start"><span class="text-quube-yellow mr-3 text-xl">•</span><span><strong>Relecture et reformulation des écrits</strong> (audit qualité, procédures, signalements)</span></li>
                <li class="flex items-start"><span class="text-quube-yellow mr-3 text-xl">•</span><span><strong>Préparation de documents pour certification HAS</strong> ou évaluation ESSMS</span></li>
                <li class="flex items-start"><span class="text-quube-yellow mr-3 text-xl">•</span><span><strong>Synthèse des réclamations usagers</strong> ou événements indésirables</span></li>
              </ul>
            </div>
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
