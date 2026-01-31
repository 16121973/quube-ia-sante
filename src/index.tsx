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

            <div class="flex flex-wrap gap-4 text-sm text-quube-gray pt-8 items-center">
              <span class="px-4 py-2 border border-gray-200 rounded-full flex items-center gap-2 hover:border-quube-yellow hover:shadow-sm transition-all">
                <i class="fas fa-brain" style="color: #10A37F;"></i>
                <span class="font-medium">ChatGPT</span>
              </span>
              <span class="px-4 py-2 border border-gray-200 rounded-full flex items-center gap-2 hover:border-quube-yellow hover:shadow-sm transition-all">
                <i class="fas fa-wind" style="color: #F2A73B;"></i>
                <span class="font-medium">Mistral AI</span>
              </span>
              <span class="px-4 py-2 border border-gray-200 rounded-full flex items-center gap-2 hover:border-quube-yellow hover:shadow-sm transition-all">
                <i class="fas fa-cube" style="color: #D97757;"></i>
                <span class="font-medium">Claude</span>
              </span>
              <span class="px-4 py-2 border border-gray-200 rounded-full flex items-center gap-2 hover:border-quube-yellow hover:shadow-sm transition-all">
                <i class="fas fa-gem" style="color: #4285F4;"></i>
                <span class="font-medium">Gemini</span>
              </span>
              <span class="px-4 py-2 border border-gray-200 rounded-full flex items-center gap-2 hover:border-quube-yellow hover:shadow-sm transition-all">
                <i class="fab fa-github" style="color: #000000;"></i>
                <span class="font-medium">Copilot</span>
              </span>
              <span class="px-4 py-2 border border-gray-200 rounded-full flex items-center gap-2 hover:border-quube-yellow hover:shadow-sm transition-all">
                <i class="fas fa-server" style="color: #6B7280;"></i>
                <span class="font-medium">IA on-premise</span>
              </span>
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

            {/* Service 4 - Diagnostic IA & Feuille de Route */}
            <details class="group border-b border-gray-200 pb-4">
              <summary class="cursor-pointer list-none flex justify-between items-start">
                <div class="flex-1">
                  <div class="flex items-baseline space-x-4 mb-2">
                    <span class="text-4xl font-light text-quube-gray group-open:text-quube-blue transition-colors">04</span>
                    <h3 class="text-2xl font-medium text-quube-black">Diagnostic IA & Feuille de Route</h3>
                  </div>
                  <p class="text-lg font-light text-quube-gray-dark ml-16">
                    Évaluez votre maturité IA et recevez un plan d'action sur 3 ans
                  </p>
                </div>
                <i class="fas fa-chevron-down text-quube-gray group-open:rotate-180 transition-transform mt-2"></i>
              </summary>
              <div class="mt-6 ml-16 space-y-4 text-quube-gray-dark">
                <p class="leading-relaxed">
                  <strong>Obtenez un diagnostic Flash express en 2 heures chrono.</strong> Nos consultants évaluent rapidement votre maturité IA, identifient les quick wins et vous fournissent une feuille de route pragmatique : stratégie IA, gouvernance, priorisation des use cases à fort ROI.
                </p>
                <p class="leading-relaxed">
                  <strong>Bénéfice :</strong> une vision claire de vos opportunités IA et un plan d'action immédiatement opérationnel.
                </p>
                
                <div class="mt-6 p-4 bg-quube-yellow/10 border-l-4 border-quube-yellow rounded-r">
                  <p class="text-sm font-medium text-quube-black mb-2">🎯 Livrables</p>
                  <ul class="space-y-1 text-sm">
                    <li>• Audit complet de maturité IA</li>
                    <li>• Stratégie IA et roadmap de transformation sur 3 ans</li>
                    <li>• Gouvernance IA et comité de pilotage</li>
                    <li>• Priorisation des use cases à fort ROI</li>
                    <li>• Identification des opportunités stratégiques</li>
                    <li>• Recommandations personnalisées et actionnables</li>
                  </ul>
                </div>
              </div>
            </details>

            {/* Service 5 - Aide au Choix des Solutions IA */}
            <details class="group border-b border-gray-200 pb-4">
              <summary class="cursor-pointer list-none flex justify-between items-start">
                <div class="flex-1">
                  <div class="flex items-baseline space-x-4 mb-2">
                    <span class="text-4xl font-light text-quube-gray group-open:text-quube-blue transition-colors">05</span>
                    <h3 class="text-2xl font-medium text-quube-black">Aide au Choix des Solutions IA</h3>
                  </div>
                  <p class="text-lg font-light text-quube-gray-dark ml-16">
                    Benchmark neutre et recommandation de la meilleure solution
                  </p>
                </div>
                <i class="fas fa-chevron-down text-quube-gray group-open:rotate-180 transition-transform mt-2"></i>
              </summary>
              <div class="mt-6 ml-16 space-y-4 text-quube-gray-dark">
                <p class="leading-relaxed">
                  <strong>Faites le bon choix parmi des centaines de solutions IA disponibles.</strong> Notre benchmark neutre et indépendant vous aide à sélectionner l'outil qui répond vraiment à vos besoins : analyse comparative, grilles d'évaluation, démonstrations, négociation avec les éditeurs.
                </p>
                <p class="leading-relaxed">
                  <strong>Notre promesse :</strong> aucun partenariat exclusif, préconisations 100% objectives basées sur vos critères (budget, souveraineté, intégration, conformité RGPD).
                </p>
                
                <div class="mt-6 p-4 bg-quube-yellow/10 border-l-4 border-quube-yellow rounded-r">
                  <p class="text-sm font-medium text-quube-black mb-2">📋 Notre méthode</p>
                  <ul class="space-y-1 text-sm">
                    <li>• Analyse de vos besoins métiers et techniques</li>
                    <li>• Benchmark complet des solutions du marché</li>
                    <li>• Grilles d'évaluation multicritères objectives</li>
                    <li>• Organisation de démonstrations éditeurs</li>
                    <li>• Accompagnement négociation et contractualisation</li>
                    <li>• Support au déploiement et à l'intégration</li>
                  </ul>
                </div>
              </div>
            </details>

            {/* Service 6 - Pilotage de Projet IA & Change */}
            <details class="group border-b border-gray-200 pb-4">
              <summary class="cursor-pointer list-none flex justify-between items-start">
                <div class="flex-1">
                  <div class="flex items-baseline space-x-4 mb-2">
                    <span class="text-4xl font-light text-quube-gray group-open:text-quube-blue transition-colors">06</span>
                    <h3 class="text-2xl font-medium text-quube-black">Pilotage de Projet IA & Change</h3>
                  </div>
                  <p class="text-lg font-light text-quube-gray-dark ml-16">
                    Mise en œuvre, formation des utilisateurs et adoption durable
                  </p>
                </div>
                <i class="fas fa-chevron-down text-quube-gray group-open:rotate-180 transition-transform mt-2"></i>
              </summary>
              <div class="mt-6 ml-16 space-y-4 text-quube-gray-dark">
                <p class="leading-relaxed">
                  <strong>Assurez le succès de vos projets IA de bout en bout.</strong> Nous pilotez l'implémentation technique, formons vos équipes aux nouveaux outils et orchestrons la conduite du changement pour garantir une adoption massive et pérenne.
                </p>
                <p class="leading-relaxed">
                  <strong>Résultat :</strong> des projets IA qui dépassent le stade POC pour devenir des outils métiers adoptés par tous au quotidien.
                </p>
                
                <div class="mt-6 p-4 bg-quube-yellow/10 border-l-4 border-quube-yellow rounded-r">
                  <p class="text-sm font-medium text-quube-black mb-2">🚀 Accompagnement complet</p>
                  <ul class="space-y-1 text-sm">
                    <li>• Pilotage MOA/MOE des projets IA</li>
                    <li>• Gestion de projet agile et méthodologie adaptée</li>
                    <li>• Formation des utilisateurs finaux et référents métiers</li>
                    <li>• Conduite du changement et communication interne</li>
                    <li>• Mesure d'impact et suivi des KPIs d'adoption</li>
                    <li>• Support post-déploiement et amélioration continue</li>
                  </ul>
                </div>
              </div>
            </details>

            {/* Service 7 - Club IA Santé */}
            <details class="group border-b border-gray-200 pb-4">
              <summary class="cursor-pointer list-none flex justify-between items-start">
                <div class="flex-1">
                  <div class="flex items-baseline space-x-4 mb-2">
                    <span class="text-4xl font-light text-quube-gray group-open:text-quube-blue transition-colors">07</span>
                    <h3 class="text-2xl font-medium text-quube-black">Club IA Santé – Veille & Réseau</h3>
                  </div>
                  <p class="text-lg font-light text-quube-gray-dark ml-16">
                    Veille mensuelle et retours d'expérience
                  </p>
                </div>
                <i class="fas fa-chevron-down text-quube-gray group-open:rotate-180 transition-transform mt-2"></i>
              </summary>
              <div class="mt-6 ml-16 space-y-4 text-quube-gray-dark">
                <p class="leading-relaxed">
                  <strong>Restez à la pointe de l'innovation IA en santé.</strong> Rejoignez notre communauté exclusive de décideurs et cadres du secteur : veille mensuelle sur les nouveautés IA, retours d'expérience entre pairs, webinaires thématiques et accès privilégié à nos analyses sectorielles.
                </p>
                <p class="leading-relaxed">
                  <strong>Objectif :</strong> anticiper les disruptions, découvrir les innovations avant tout le monde et bénéficier d'un réseau d'entraide entre professionnels de santé engagés dans la transformation IA.
                </p>
                
                <div class="mt-6 p-4 bg-quube-yellow/10 border-l-4 border-quube-yellow rounded-r">
                  <p class="text-sm font-medium text-quube-black mb-2">🌐 Avantages membres</p>
                  <ul class="space-y-1 text-sm">
                    <li>• Newsletter mensuelle exclusive : innovations, réglementation, cas d'usage</li>
                    <li>• Webinaires thématiques avec experts et témoins terrain</li>
                    <li>• Retours d'expérience entre pairs (REX anonymisés)</li>
                    <li>• Accès prioritaire aux formations et événements QUUBE</li>
                    <li>• Réseau privé de décideurs et cadres de santé</li>
                    <li>• Benchmark et analyses sectorielles IA Santé</li>
                  </ul>
                </div>
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

          {/* Onglets combinés : ROI++ + Terrain + Métiers */}
          <div class="flex flex-wrap gap-2 mb-12 border-b border-gray-200 pb-4">
            {/* ROI++ - Premier et actif */}
            <button onclick="showTab('roi')" id="tab-roi" class="tab-btn px-6 py-3 text-sm font-bold rounded-t-lg border-b-2 border-transparent hover:border-quube-yellow transition-colors bg-quube-yellow/30 text-quube-black shadow-sm active">⚡ ROI++</button>
            
            {/* Séparateur visuel */}
            <div class="h-10 w-px bg-gray-300 self-center mx-2"></div>
            
            {/* Cas d'usage Terrain détaillés */}
            <button onclick="showTab('reunions')" id="tab-reunions" class="tab-btn px-6 py-3 text-sm font-medium rounded-t-lg border-b-2 border-transparent hover:border-quube-yellow transition-colors">🧠 Réunions</button>
            <button onclick="showTab('rapports')" id="tab-rapports" class="tab-btn px-6 py-3 text-sm font-medium rounded-t-lg border-b-2 border-transparent hover:border-quube-yellow transition-colors">📊 Rapports</button>
            <button onclick="showTab('tutelle')" id="tab-tutelle" class="tab-btn px-6 py-3 text-sm font-medium rounded-t-lg border-b-2 border-transparent hover:border-quube-yellow transition-colors">🏛 Tutelle</button>
            <button onclick="showTab('rh')" id="tab-rh" class="tab-btn px-6 py-3 text-sm font-medium rounded-t-lg border-b-2 border-transparent hover:border-quube-yellow transition-colors">👥 RH</button>
            <button onclick="showTab('communication')" id="tab-communication" class="tab-btn px-6 py-3 text-sm font-medium rounded-t-lg border-b-2 border-transparent hover:border-quube-yellow transition-colors">💬 Communication</button>
            <button onclick="showTab('medical')" id="tab-medical" class="tab-btn px-6 py-3 text-sm font-medium rounded-t-lg border-b-2 border-transparent hover:border-quube-yellow transition-colors">🩺 Médical</button>
            <button onclick="showTab('usager')" id="tab-usager" class="tab-btn px-6 py-3 text-sm font-medium rounded-t-lg border-b-2 border-transparent hover:border-quube-yellow transition-colors">👪 Parcours</button>
            <button onclick="showTab('qualite')" id="tab-qualite" class="tab-btn px-6 py-3 text-sm font-medium rounded-t-lg border-b-2 border-transparent hover:border-quube-yellow transition-colors">✍️ Qualité</button>
            
            {/* Séparateur visuel */}
            <div class="h-10 w-px bg-gray-300 self-center mx-2"></div>
            
            {/* Par Métiers/Fonctions */}
            <button onclick="showTab('drh')" id="tab-drh" class="tab-btn px-6 py-3 text-sm font-medium rounded-t-lg border-b-2 border-transparent hover:border-quube-yellow transition-colors">DRH</button>
            <button onclick="showTab('daf')" id="tab-daf" class="tab-btn px-6 py-3 text-sm font-medium rounded-t-lg border-b-2 border-transparent hover:border-quube-yellow transition-colors">DAF</button>
            <button onclick="showTab('dg')" id="tab-dg" class="tab-btn px-6 py-3 text-sm font-medium rounded-t-lg border-b-2 border-transparent hover:border-quube-yellow transition-colors">DG</button>
            <button onclick="showTab('directeurs')" id="tab-directeurs" class="tab-btn px-6 py-3 text-sm font-medium rounded-t-lg border-b-2 border-transparent hover:border-quube-yellow transition-colors">Directeurs</button>
            <button onclick="showTab('soins')" id="tab-soins" class="tab-btn px-6 py-3 text-sm font-medium rounded-t-lg border-b-2 border-transparent hover:border-quube-yellow transition-colors">Soins</button>
            <button onclick="showTab('educatif')" id="tab-educatif" class="tab-btn px-6 py-3 text-sm font-medium rounded-t-lg border-b-2 border-transparent hover:border-quube-yellow transition-colors">Éducatif</button>
          </div>

          {/* Contenu onglets */}
          
          {/* ROI++ - Cas d'usage stratégiques génériques */}
          <div id="content-roi" class="tab-content">
            <h3 class="text-3xl font-medium text-quube-black mb-4">⚡ ROI++ - Cas d'Usage à Forte Valeur Ajoutée</h3>
            <p class="text-lg font-light text-quube-gray-dark leading-relaxed mb-6">
              L'IA générative transforme vos processus stratégiques les plus complexes et chronophages. 
              Découvrez les cas d'usage qui génèrent un <strong>ROI immédiat et mesurable</strong>.
            </p>
            
            <div class="grid md:grid-cols-2 gap-8 mt-8">
              {/* Colonne 1 : Stratégie & Pilotage */}
              <div class="space-y-6">
                <div>
                  <h4 class="text-xl font-medium text-quube-black mb-3 flex items-center">
                    <span class="text-2xl mr-2">📊</span> Stratégie & Pilotage
                  </h4>
                  <ul class="space-y-3 text-quube-gray-dark">
                    <li class="flex items-start">
                      <span class="text-quube-yellow mr-3 mt-1">•</span>
                      <span><strong>Rapports d'activité</strong> : Génération automatique de rapports structurés, synthèses annuelles</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-quube-yellow mr-3 mt-1">•</span>
                      <span><strong>Projets d'établissement/services</strong> : Rédaction collaborative, alignement stratégique</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-quube-yellow mr-3 mt-1">•</span>
                      <span><strong>Notes stratégiques</strong> : Synthèses décisionnelles, recommandations argumentées</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-quube-yellow mr-3 mt-1">•</span>
                      <span><strong>Analyse concurrentielle</strong> : Veille stratégique, positionnement marché</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 class="text-xl font-medium text-quube-black mb-3 flex items-center">
                    <span class="text-2xl mr-2">📈</span> Finance & Développement
                  </h4>
                  <ul class="space-y-3 text-quube-gray-dark">
                    <li class="flex items-start">
                      <span class="text-quube-yellow mr-3 mt-1">•</span>
                      <span><strong>Business plan</strong> : Modèles financiers, projections économiques, scénarios</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-quube-yellow mr-3 mt-1">•</span>
                      <span><strong>Simulations financières</strong> : Modélisation tarifaire, optimisation budgétaire</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-quube-yellow mr-3 mt-1">•</span>
                      <span><strong>Appels à projets</strong> : Rédaction de dossiers de financement, réponses AAP/AAC</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Colonne 2 : Veille & Production */}
              <div class="space-y-6">
                <div>
                  <h4 class="text-xl font-medium text-quube-black mb-3 flex items-center">
                    <span class="text-2xl mr-2">🔍</span> Veille & Intelligence
                  </h4>
                  <ul class="space-y-3 text-quube-gray-dark">
                    <li class="flex items-start">
                      <span class="text-quube-yellow mr-3 mt-1">•</span>
                      <span><strong>Veille réglementaire</strong> : Monitoring automatisé des évolutions législatives, analyse d'impact</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-quube-yellow mr-3 mt-1">•</span>
                      <span><strong>Revue de littérature</strong> : Synthèse documentaire, état de l'art scientifique</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 class="text-xl font-medium text-quube-black mb-3 flex items-center">
                    <span class="text-2xl mr-2">🎨</span> Production & Communication
                  </h4>
                  <ul class="space-y-3 text-quube-gray-dark">
                    <li class="flex items-start">
                      <span class="text-quube-yellow mr-3 mt-1">•</span>
                      <span><strong>Présentations PowerPoint</strong> : Génération de slides structurés, storytelling visuel</span>
                    </li>
                    <li class="flex items-start">
                      <span class="text-quube-yellow mr-3 mt-1">•</span>
                      <span><strong>Design de processus</strong> : Cartographie métiers, optimisation workflows</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Encadré ROI */}
            <div class="mt-8 p-6 bg-gradient-to-r from-quube-yellow/10 to-quube-blue/10 border-l-4 border-quube-yellow rounded-r-lg">
              <div class="flex items-start space-x-4">
                <span class="text-3xl">💰</span>
                <div>
                  <p class="text-lg font-medium text-quube-black mb-2">ROI Mesurable</p>
                  <p class="text-quube-gray-dark leading-relaxed">
                    Ces cas d'usage génèrent en moyenne <strong class="text-quube-black">50-70% de gain de temps</strong> sur les tâches stratégiques complexes. 
                    Un rapport d'activité qui prenait 3 jours est désormais produit en <strong class="text-quube-black">6 heures</strong>, 
                    un business plan de 2 semaines en <strong class="text-quube-black">3 jours</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Cas d'usage Terrain détaillés - 8 onglets */}
          <div id="content-reunions" class="tab-content hidden">
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
          
          {/* Par Métiers/Fonctions - 6 onglets */}
          <div id="content-drh" class="tab-content hidden">
            <h3 class="text-3xl font-medium text-quube-black mb-4">DRH - Recrutement & Ressources Humaines</h3>
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
            <ul class="space-y-3 text-quube-gray-dark">
              <li class="flex items-start"><span class="text-quube-yellow mr-3">•</span><span>Analyse de marché et positionnement stratégique</span></li>
              <li class="flex items-start"><span class="text-quube-yellow mr-3">•</span><span>Synthèses stratégiques et notes de cadrage</span></li>
              <li class="flex items-start"><span class="text-quube-yellow mr-3">•</span><span>Aide à la décision et scénarios prospectifs</span></li>
            </ul>
          </div>

          <div id="content-directeurs" class="tab-content hidden">
            <h3 class="text-3xl font-medium text-quube-black mb-4">Directeurs d'Établissements</h3>
            <p class="text-lg font-light text-quube-gray-dark leading-relaxed mb-6">
              Optimisez le pilotage de votre établissement : indicateurs qualité, rapports d'activité, communication.
            </p>
            <ul class="space-y-3 text-quube-gray-dark">
              <li class="flex items-start"><span class="text-quube-yellow mr-3">•</span><span>Tableaux de bord et indicateurs de pilotage</span></li>
              <li class="flex items-start"><span class="text-quube-yellow mr-3">•</span><span>Rapports d'activité et bilans annuels</span></li>
              <li class="flex items-start"><span class="text-quube-yellow mr-3">•</span><span>Communication interne et externe</span></li>
            </ul>
          </div>

          <div id="content-soins" class="tab-content hidden">
            <h3 class="text-3xl font-medium text-quube-black mb-4">Équipes de Soins</h3>
            <p class="text-lg font-light text-quube-gray-dark leading-relaxed mb-6">
              Gagnez du temps sur la documentation : dossiers patients, transmissions, protocoles de soins.
            </p>
            <ul class="space-y-3 text-quube-gray-dark">
              <li class="flex items-start"><span class="text-quube-yellow mr-3">•</span><span>Aide à la rédaction de dossiers patients</span></li>
              <li class="flex items-start"><span class="text-quube-yellow mr-3">•</span><span>Transmissions et comptes rendus de soins</span></li>
              <li class="flex items-start"><span class="text-quube-yellow mr-3">•</span><span>Protocoles et procédures de soins</span></li>
            </ul>
          </div>

          <div id="content-educatif" class="tab-content hidden">
            <h3 class="text-3xl font-medium text-quube-black mb-4">Équipes Éducatives</h3>
            <p class="text-lg font-light text-quube-gray-dark leading-relaxed mb-6">
              Améliorez vos programmes éducatifs : projets personnalisés, suivi individuel, supports pédagogiques.
            </p>
            <ul class="space-y-3 text-quube-gray-dark">
              <li class="flex items-start"><span class="text-quube-yellow mr-3">•</span><span>Projets personnalisés d'accompagnement (PPA)</span></li>
              <li class="flex items-start"><span class="text-quube-yellow mr-3">•</span><span>Supports pédagogiques et fiches d'activité</span></li>
              <li class="flex items-start"><span class="text-quube-yellow mr-3">•</span><span>Suivi individuel et bilans éducatifs</span></li>
            </ul>
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
            {/* 6 articles - style minimaliste */}
            <article class="group cursor-pointer">
              <div class="border-b-2 border-gray-200 group-hover:border-quube-yellow transition-colors pb-6">
                <div class="text-sm text-quube-gray mb-3">Article · 5 min</div>
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
                <div class="text-sm text-quube-gray mb-3">Article · 7 min</div>
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
                <div class="text-sm text-quube-gray mb-3">Article · 4 min</div>
                <h3 class="text-xl font-medium text-quube-black mb-3 group-hover:text-quube-blue transition-colors">
                  60 minutes gagnées par jour : retour d'expérience
                </h3>
                <p class="text-quube-gray-dark font-light leading-relaxed">
                  Comment l'IA transforme concrètement le quotidien des professionnels de santé
                </p>
              </div>
            </article>

            <article class="group cursor-pointer">
              <div class="border-b-2 border-gray-200 group-hover:border-quube-yellow transition-colors pb-6">
                <div class="text-sm text-quube-gray mb-3">Article · 6 min</div>
                <h3 class="text-xl font-medium text-quube-black mb-3 group-hover:text-quube-blue transition-colors">
                  AI Act européen : impacts sur les établissements de santé
                </h3>
                <p class="text-quube-gray-dark font-light leading-relaxed">
                  Comprendre les obligations réglementaires et préparer votre mise en conformité IA
                </p>
              </div>
            </article>

            <article class="group cursor-pointer">
              <div class="border-b-2 border-gray-200 group-hover:border-quube-yellow transition-colors pb-6">
                <div class="text-sm text-quube-gray mb-3">Guide · 8 min</div>
                <h3 class="text-xl font-medium text-quube-black mb-3 group-hover:text-quube-blue transition-colors">
                  Choisir sa solution IA en santé : guide pratique
                </h3>
                <p class="text-quube-gray-dark font-light leading-relaxed">
                  Les critères essentiels pour sélectionner l'outil adapté à vos besoins métiers
                </p>
              </div>
            </article>

            <article class="group cursor-pointer">
              <div class="border-b-2 border-gray-200 group-hover:border-quube-yellow transition-colors pb-6">
                <div class="text-sm text-quube-gray mb-3">Témoignage · 5 min</div>
                <h3 class="text-xl font-medium text-quube-black mb-3 group-hover:text-quube-blue transition-colors">
                  Déploiement IA en EHPAD : 3 mois après
                </h3>
                <p class="text-quube-gray-dark font-light leading-relaxed">
                  Retour d'expérience d'un directeur d'EHPAD sur l'adoption de l'IA par ses équipes
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
