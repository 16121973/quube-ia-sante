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
          <div class="hidden md:flex items-center space-x-6 text-sm">
            <a href="#promesse" class="text-quube-gray-dark hover:text-quube-black transition-colors">Notre Approche</a>
            
            {/* Menu déroulant Services */}
            <div class="relative group">
              <button class="text-quube-gray-dark hover:text-quube-black transition-colors flex items-center gap-1">
                Services <i class="fas fa-chevron-down text-xs"></i>
              </button>
              <div class="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div class="py-2">
                  <a href="#phase-sensibiliser" class="block px-4 py-2 text-quube-gray-dark hover:bg-quube-yellow/10 hover:text-quube-black">① Sensibiliser</a>
                  <a href="#phase-competences" class="block px-4 py-2 text-quube-gray-dark hover:bg-quube-yellow/10 hover:text-quube-black">② Monter en Compétences</a>
                  <a href="#phase-structurer" class="block px-4 py-2 text-quube-gray-dark hover:bg-quube-yellow/10 hover:text-quube-black">③ Structurer</a>
                  <a href="#phase-deployer" class="block px-4 py-2 text-quube-gray-dark hover:bg-quube-yellow/10 hover:text-quube-black">④ Déployer</a>
                  <a href="#phase-perenniser" class="block px-4 py-2 text-quube-gray-dark hover:bg-quube-yellow/10 hover:text-quube-black">⑤ Pérenniser & Mesurer</a>
                </div>
              </div>
            </div>

            {/* Menu déroulant Par Métier */}
            <div class="relative group">
              <button class="text-quube-gray-dark hover:text-quube-black transition-colors flex items-center gap-1">
                Par Métier <i class="fas fa-chevron-down text-xs"></i>
              </button>
              <div class="absolute top-full left-0 mt-2 w-72 bg-white shadow-lg rounded-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div class="py-2">
                  <a href="#metier-dg" class="block px-4 py-2 text-quube-gray-dark hover:bg-quube-yellow/10 hover:text-quube-black">Direction Générale & Stratégie</a>
                  <a href="#metier-daf" class="block px-4 py-2 text-quube-gray-dark hover:bg-quube-yellow/10 hover:text-quube-black">Finance & Gestion (DAF)</a>
                  <a href="#metier-drh" class="block px-4 py-2 text-quube-gray-dark hover:bg-quube-yellow/10 hover:text-quube-black">Ressources Humaines (DRH)</a>
                  <a href="#metier-qualite" class="block px-4 py-2 text-quube-gray-dark hover:bg-quube-yellow/10 hover:text-quube-black">Qualité & Conformité</a>
                  <a href="#metier-soins" class="block px-4 py-2 text-quube-gray-dark hover:bg-quube-yellow/10 hover:text-quube-black">Soins & Médical</a>
                  <a href="#metier-educatif" class="block px-4 py-2 text-quube-gray-dark hover:bg-quube-yellow/10 hover:text-quube-black">Éducatif & Médico-social</a>
                  <a href="#metier-transverse" class="block px-4 py-2 text-quube-gray-dark hover:bg-quube-yellow/10 hover:text-quube-black">Fonctions Transverses</a>
                </div>
              </div>
            </div>

            <a href="#acceleration-projets" class="text-quube-gray-dark hover:text-quube-black transition-colors font-medium">Accélération Projets</a>
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
            <a href="#promesse" class="text-quube-gray-dark hover:text-quube-black transition-colors">Notre Approche</a>
            <div class="pl-4 space-y-2 border-l-2 border-quube-yellow">
              <div class="text-xs text-quube-gray font-semibold mb-2">SERVICES PAR PHASE</div>
              <a href="#phase-sensibiliser" class="block text-sm text-quube-gray-dark">① Sensibiliser</a>
              <a href="#phase-competences" class="block text-sm text-quube-gray-dark">② Monter en Compétences</a>
              <a href="#phase-structurer" class="block text-sm text-quube-gray-dark">③ Structurer</a>
              <a href="#phase-deployer" class="block text-sm text-quube-gray-dark">④ Déployer</a>
              <a href="#phase-perenniser" class="block text-sm text-quube-gray-dark">⑤ Pérenniser & Mesurer</a>
            </div>
            <div class="pl-4 space-y-2 border-l-2 border-quube-blue">
              <div class="text-xs text-quube-gray font-semibold mb-2">PAR MÉTIER</div>
              <a href="#metier-dg" class="block text-sm text-quube-gray-dark">Direction Générale</a>
              <a href="#metier-daf" class="block text-sm text-quube-gray-dark">Finance (DAF)</a>
              <a href="#metier-drh" class="block text-sm text-quube-gray-dark">RH (DRH)</a>
              <a href="#metier-qualite" class="block text-sm text-quube-gray-dark">Qualité</a>
              <a href="#metier-soins" class="block text-sm text-quube-gray-dark">Soins</a>
              <a href="#metier-educatif" class="block text-sm text-quube-gray-dark">Éducatif</a>
              <a href="#metier-transverse" class="block text-sm text-quube-gray-dark">Transverse</a>
            </div>
            <a href="#acceleration-projets" class="text-quube-gray-dark hover:text-quube-black transition-colors font-medium">Accélération Projets</a>
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
              <p class="text-lg font-light text-quube-gray-dark leading-relaxed">
                <span class="text-quube-black font-medium">Notre vraie plus-value</span> : nous connaissons les cas d'usage du secteur, 
                les besoins précis de chaque métier (soignants, directions, fonctions support), et les contraintes réglementaires et budgétaires 
                qui façonnent vos décisions.
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

      {/* Section Teaser - ACCÉLÉRATION DE PROJET (Offre Signature) */}
      <section id="acceleration-projets" class="py-32 bg-gradient-to-br from-quube-yellow/5 via-white to-quube-blue/5">
        <div class="max-w-6xl mx-auto px-8">
          <div class="text-center mb-16">
            <div class="inline-block px-6 py-2 bg-quube-yellow rounded-full mb-6">
              <span class="text-sm font-bold text-quube-black uppercase tracking-wide">Offre Signature</span>
            </div>
            <h2 class="text-5xl md:text-6xl font-light text-quube-black mb-6">
              <span class="font-bold">Accélération</span> de Projet
            </h2>
            <p class="text-xl font-light text-quube-gray-dark max-w-3xl mx-auto leading-relaxed">
              Utilisez l'IA comme <span class="font-medium text-quube-black">outil de production du conseil</span> pour vos projets stratégiques. 
              Livrables <span class="font-medium text-quube-black">2 à 3 fois plus rapides</span>, avec transfert de compétences inclus.
            </p>
          </div>

          {/* Triple Bénéfice */}
          <div class="grid md:grid-cols-3 gap-8 mb-16">
            <div class="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div class="text-4xl mb-4">⏱️</div>
              <h3 class="text-2xl font-bold text-quube-black mb-3">Délais ÷ 2 à 3</h3>
              <p class="text-quube-gray-dark">
                Accélération massive de la production des livrables grâce à l'IA en co-pilote
              </p>
            </div>
            <div class="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div class="text-4xl mb-4">💰</div>
              <h3 class="text-2xl font-bold text-quube-black mb-3">Coûts Réduits</h3>
              <p class="text-quube-gray-dark">
                Tarif compétitif vs. cabinets classiques grâce à l'efficacité de l'IA
              </p>
            </div>
            <div class="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div class="text-4xl mb-4">🎓</div>
              <h3 class="text-2xl font-bold text-quube-black mb-3">Transfert Inclus</h3>
              <p class="text-quube-gray-dark">
                Vos équipes montent en compétence IA en situation réelle de travail
              </p>
            </div>
          </div>

          {/* Projets Éligibles - 4 catégories */}
          <div class="mb-16">
            <h3 class="text-3xl font-light text-quube-black text-center mb-12">
              Projets <span class="font-bold">Éligibles</span>
            </h3>
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-white p-6 rounded-lg border-l-4 border-quube-yellow">
                <h4 class="text-lg font-semibold text-quube-black mb-3">📋 Stratégie & Gouvernance</h4>
                <ul class="space-y-2 text-sm text-quube-gray-dark">
                  <li>• Projet d'établissement</li>
                  <li>• Projet de service</li>
                  <li>• CPOM (Contrat Pluriannuel d'Objectifs et de Moyens)</li>
                  <li>• Schéma directeur SI</li>
                </ul>
              </div>
              <div class="bg-white p-6 rounded-lg border-l-4 border-quube-blue">
                <h4 class="text-lg font-semibold text-quube-black mb-3">💼 Développement & Financement</h4>
                <ul class="space-y-2 text-sm text-quube-gray-dark">
                  <li>• Réponse AAP / AMI (Appels à projets)</li>
                  <li>• Business plan / Étude de faisabilité</li>
                  <li>• Dossier de financement</li>
                  <li>• Nouveau modèle économique</li>
                </ul>
              </div>
              <div class="bg-white p-6 rounded-lg border-l-4 border-green-500">
                <h4 class="text-lg font-semibold text-quube-black mb-3">🔄 Transformation</h4>
                <ul class="space-y-2 text-sm text-quube-gray-dark">
                  <li>• Transformation de l'offre de services</li>
                  <li>• Diversification (habitat inclusif, SSIAD...)</li>
                  <li>• Réorganisation de services</li>
                  <li>• Optimisation de la performance</li>
                </ul>
              </div>
              <div class="bg-white p-6 rounded-lg border-l-4 border-purple-500">
                <h4 class="text-lg font-semibold text-quube-black mb-3">📊 Analyse & Benchmark</h4>
                <ul class="space-y-2 text-sm text-quube-gray-dark">
                  <li>• Étude de marché / Positionnement</li>
                  <li>• Benchmark concurrentiel</li>
                  <li>• Analyse réglementaire</li>
                  <li>• Revue de littérature / État de l'art</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tableau Gains Concrets */}
          <div class="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-12">
            <h3 class="text-2xl font-medium text-quube-black text-center mb-8">
              Gains de Temps <span class="font-bold text-quube-blue">Mesurés</span>
            </h3>
            <div class="overflow-x-auto">
              <table class="w-full">
                <thead>
                  <tr class="border-b-2 border-quube-yellow">
                    <th class="text-left py-4 px-4 font-semibold text-quube-black">Type de Projet</th>
                    <th class="text-center py-4 px-4 font-semibold text-quube-gray-dark">Délai Classique</th>
                    <th class="text-center py-4 px-4 font-semibold text-quube-blue">Délai Augmenté</th>
                    <th class="text-center py-4 px-4 font-semibold text-green-600">Gain</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-100">
                  <tr class="hover:bg-gray-50">
                    <td class="py-4 px-4 font-medium">Réponse AAP</td>
                    <td class="py-4 px-4 text-center text-quube-gray-dark">3-4 semaines</td>
                    <td class="py-4 px-4 text-center text-quube-blue font-semibold">1-2 semaines</td>
                    <td class="py-4 px-4 text-center text-green-600 font-bold">50-60%</td>
                  </tr>
                  <tr class="hover:bg-gray-50">
                    <td class="py-4 px-4 font-medium">Business Plan</td>
                    <td class="py-4 px-4 text-center text-quube-gray-dark">2-3 semaines</td>
                    <td class="py-4 px-4 text-center text-quube-blue font-semibold">5-7 jours</td>
                    <td class="py-4 px-4 text-center text-green-600 font-bold">60-70%</td>
                  </tr>
                  <tr class="hover:bg-gray-50">
                    <td class="py-4 px-4 font-medium">Projet d'Établissement</td>
                    <td class="py-4 px-4 text-center text-quube-gray-dark">3-4 mois</td>
                    <td class="py-4 px-4 text-center text-quube-blue font-semibold">6-8 semaines</td>
                    <td class="py-4 px-4 text-center text-green-600 font-bold">50%</td>
                  </tr>
                  <tr class="hover:bg-gray-50">
                    <td class="py-4 px-4 font-medium">Étude de Diversification</td>
                    <td class="py-4 px-4 text-center text-quube-gray-dark">6-8 semaines</td>
                    <td class="py-4 px-4 text-center text-quube-blue font-semibold">2-3 semaines</td>
                    <td class="py-4 px-4 text-center text-green-600 font-bold">60-65%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Méthode de Travail en Binôme */}
          <div class="bg-gradient-to-r from-quube-yellow/10 to-quube-blue/10 p-8 rounded-lg mb-12">
            <h3 class="text-2xl font-medium text-quube-black text-center mb-8">
              Méthode : <span class="font-bold">Travail en Binôme</span>
            </h3>
            <div class="grid md:grid-cols-3 gap-8">
              <div class="text-center">
                <div class="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <span class="text-2xl font-bold text-quube-yellow">1</span>
                </div>
                <h4 class="font-semibold text-quube-black mb-2">Cadrage</h4>
                <p class="text-sm text-quube-gray-dark">
                  Consultant QUUBE structure le projet et définit les workflows IA. 
                  Référent client apporte la connaissance terrain.
                </p>
              </div>
              <div class="text-center">
                <div class="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <span class="text-2xl font-bold text-quube-blue">2</span>
                </div>
                <h4 class="font-semibold text-quube-black mb-2">Production</h4>
                <p class="text-sm text-quube-gray-dark">
                  Consultant pilote l'IA et affine les outputs. 
                  Référent co-produit en temps réel et apprend les techniques.
                </p>
              </div>
              <div class="text-center">
                <div class="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <span class="text-2xl font-bold text-green-600">3</span>
                </div>
                <h4 class="font-semibold text-quube-black mb-2">Livraison</h4>
                <p class="text-sm text-quube-gray-dark">
                  Livrables projet finalisés + Kit de transfert IA 
                  (prompts, templates, méthodologie reproductible).
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div class="text-center">
            <a href="#contact" class="inline-block px-12 py-4 bg-quube-yellow text-quube-black font-semibold rounded-lg hover:bg-quube-yellow/90 transition-colors shadow-md hover:shadow-lg">
              Accélérez Votre Prochain Projet →
            </a>
            <p class="text-sm text-quube-gray mt-4">
              Échangeons sur votre projet stratégique et son potentiel d'accélération
            </p>
          </div>
        </div>
      </section>

      {/* Services avec accordéon - ANCIENNE VERSION */}
      <section id="services" class="py-32 bg-white border-t-4 border-yellow-400">
        <div class="max-w-6xl mx-auto px-8">
          <div class="mb-8 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
            <div class="flex items-start gap-3">
              <i class="fas fa-exclamation-triangle text-yellow-600 text-xl mt-1"></i>
              <div>
                <h3 class="text-lg font-semibold text-yellow-900 mb-2">⚠️ En cours de restructuration</h3>
                <p class="text-sm text-yellow-800">
                  Cette section présente notre ancienne organisation de services. 
                  Découvrez notre <a href="#phase-sensibiliser" class="underline font-medium">nouveau parcours en 5 phases</a> 
                  et notre offre signature <a href="#acceleration-projets" class="underline font-medium">Accélération de Projet</a>.
                </p>
              </div>
            </div>
          </div>
          
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

      {/* NOUVEAU PARCOURS CLIENT EN 5 PHASES */}
      
      {/* Phase 1 - SENSIBILISER */}
      <section id="phase-sensibiliser" class="py-32 bg-gradient-to-br from-quube-yellow/5 to-white">
        <div class="max-w-6xl mx-auto px-8">
          <div class="mb-16">
            <div class="inline-block px-6 py-2 bg-quube-yellow/30 rounded-full mb-6">
              <span class="text-sm font-bold text-quube-black uppercase tracking-wide">Phase 1</span>
            </div>
            <h2 class="text-5xl md:text-6xl font-light text-quube-black mb-6">
              ① <span class="font-bold">Sensibiliser</span>
            </h2>
            <p class="text-xl font-light text-quube-gray-dark max-w-3xl">
              Créer l'appétence et lever les freins. Premier contact avec l'IA pour les décideurs.
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-8">
            {/* Service 1.1 - Conférences */}
            <div class="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div class="flex items-start gap-4 mb-4">
                <div class="text-4xl">🎤</div>
                <div>
                  <h3 class="text-2xl font-semibold text-quube-black mb-2">Conférences IA Inspirantes</h3>
                  <p class="text-sm text-quube-gray-dark mb-4">COMEX, CODIR, CSE, CME | 2h | 50-200 personnes</p>
                </div>
              </div>
              <p class="text-quube-gray-dark mb-4">
                Démystification de l'IA, exemples concrets santé, démonstrations live, état de l'art.
              </p>
              <div class="bg-quube-yellow/10 p-4 rounded">
                <p class="text-sm font-medium text-quube-black">📦 Livrables</p>
                <p class="text-sm text-quube-gray-dark">Support de présentation, démonstration en live</p>
              </div>
            </div>

            {/* Service 1.2 - Coaching DG */}
            <div class="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div class="flex items-start gap-4 mb-4">
                <div class="text-4xl">👔</div>
                <div>
                  <h3 class="text-2xl font-semibold text-quube-black mb-2">Coaching IA pour Dirigeants</h3>
                  <p class="text-sm text-quube-gray-dark mb-4">DG, Directeurs | 3-6 séances (1h30) | Confidentiel</p>
                </div>
              </div>
              <p class="text-quube-gray-dark mb-4">
                Appropriation des outils, vision stratégique, impacts managériaux, cas d'usage personnalisés.
              </p>
              <div class="bg-quube-yellow/10 p-4 rounded">
                <p class="text-sm font-medium text-quube-black">📦 Livrables</p>
                <p class="text-sm text-quube-gray-dark">Plan d'action personnel, hotline 3 mois</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 2 - MONTER EN COMPÉTENCES */}
      <section id="phase-competences" class="py-32 bg-white">
        <div class="max-w-6xl mx-auto px-8">
          <div class="mb-16">
            <div class="inline-block px-6 py-2 bg-quube-blue/20 rounded-full mb-6">
              <span class="text-sm font-bold text-quube-black uppercase tracking-wide">Phase 2</span>
            </div>
            <h2 class="text-5xl md:text-6xl font-light text-quube-black mb-6">
              ② <span class="font-bold">Monter en Compétences</span>
            </h2>
            <p class="text-xl font-light text-quube-gray-dark max-w-3xl">
              Rendre les équipes autonomes et opérationnelles. Formation progressive selon le niveau.
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-6 mb-8">
            {/* Niveau Débutant */}
            <div class="bg-gradient-to-br from-green-50 to-white p-6 rounded-lg border-l-4 border-green-500">
              <div class="text-3xl mb-3">🌱</div>
              <h3 class="text-xl font-semibold text-quube-black mb-2">Niveau Débutant</h3>
              <p class="text-sm text-quube-gray mb-3">Découverte</p>
              <p class="text-sm text-quube-gray-dark mb-4">
                <strong>Durée :</strong> 0,5 jour (3h30)<br/>
                <strong>Cible :</strong> Nouveaux utilisateurs
              </p>
              <ul class="text-sm text-quube-gray-dark space-y-1 mb-4">
                <li>• Qu'est-ce que l'IA générative ?</li>
                <li>• Premiers pas ChatGPT/Claude</li>
                <li>• 5 cas d'usage simples</li>
                <li>• Bonnes pratiques RGPD</li>
              </ul>
              <p class="text-xs font-medium text-green-700">✓ Guide démarrage + 10 prompts</p>
            </div>

            {/* Niveau Intermédiaire */}
            <div class="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg border-l-4 border-quube-blue">
              <div class="text-3xl mb-3">📈</div>
              <h3 class="text-xl font-semibold text-quube-black mb-2">Niveau Intermédiaire</h3>
              <p class="text-sm text-quube-gray mb-3">Productivité</p>
              <p class="text-sm text-quube-gray-dark mb-4">
                <strong>Durée :</strong> 1 jour<br/>
                <strong>Cible :</strong> Utilisateurs réguliers
              </p>
              <ul class="text-sm text-quube-gray-dark space-y-1 mb-4">
                <li>• Prompting avancé</li>
                <li>• Chaînage de prompts</li>
                <li>• Intégration Office 365</li>
                <li>• Cas d'usage métier approfondis</li>
              </ul>
              <p class="text-xs font-medium text-blue-700">✓ Bibliothèque prompts + Charte d'usage</p>
            </div>

            {/* Niveau Expert */}
            <div class="bg-gradient-to-br from-purple-50 to-white p-6 rounded-lg border-l-4 border-purple-600">
              <div class="text-3xl mb-3">🎓</div>
              <h3 class="text-xl font-semibold text-quube-black mb-2">Niveau Expert</h3>
              <p class="text-sm text-quube-gray mb-3">Maîtrise</p>
              <p class="text-sm text-quube-gray-dark mb-4">
                <strong>Durée :</strong> 2 jours<br/>
                <strong>Cible :</strong> Référents IA, chefs de projet
              </p>
              <ul class="text-sm text-quube-gray-dark space-y-1 mb-4">
                <li>• Automatisation workflows</li>
                <li>• APIs et intégrations</li>
                <li>• Benchmark solutions</li>
                <li>• Formation de formateurs</li>
              </ul>
              <p class="text-xs font-medium text-purple-700">✓ Certification QUUBE + Kit déploiement</p>
            </div>
          </div>

          <div class="bg-quube-yellow/10 p-6 rounded-lg border-l-4 border-quube-yellow">
            <h4 class="font-semibold text-quube-black mb-2">🎯 Sur-mesure — Expertise</h4>
            <p class="text-sm text-quube-gray-dark">
              Approfondissements outils (Claude, Copilot...), analyse de données, automatisations simples, optimisation workflows (nous consulter)
            </p>
          </div>
        </div>
      </section>

      {/* Phase 3 - STRUCTURER */}
      <section id="phase-structurer" class="py-32 bg-gray-50">
        <div class="max-w-6xl mx-auto px-8">
          <div class="mb-16">
            <div class="inline-block px-6 py-2 bg-purple-100 rounded-full mb-6">
              <span class="text-sm font-bold text-quube-black uppercase tracking-wide">Phase 3</span>
            </div>
            <h2 class="text-5xl md:text-6xl font-light text-quube-black mb-6">
              ③ <span class="font-bold">Structurer</span>
            </h2>
            <p class="text-xl font-light text-quube-gray-dark max-w-3xl">
              Définir la stratégie IA et prendre les bonnes décisions. Cadrage avant déploiement.
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-8">
            {/* Service 3.1 - Diagnostic Flash */}
            <div class="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div class="flex items-start gap-4 mb-4">
                <div class="text-4xl">🔍</div>
                <div>
                  <h3 class="text-2xl font-semibold text-quube-black mb-2">Diagnostic Flash & Feuille de Route</h3>
                  <p class="text-sm text-quube-gray-dark mb-4">DG, DSI | 2-5 jours selon taille</p>
                </div>
              </div>
              <p class="text-quube-gray-dark mb-4">
                Audit de maturité IA (processus, données, culture). Cartographie cas d'usage prioritaires. 
                Analyse quick wins. Priorisation par ROI et faisabilité.
              </p>
              <div class="bg-purple-50 p-4 rounded space-y-2">
                <p class="text-sm font-medium text-quube-black">📦 Livrables</p>
                <ul class="text-xs text-quube-gray-dark space-y-1">
                  <li>• Rapport diagnostic + scoring maturité</li>
                  <li>• Feuille de route IA à 3 ans</li>
                  <li>• Matrice priorisation cas d'usage</li>
                  <li>• Recommandations gouvernance</li>
                </ul>
              </div>
            </div>

            {/* Service 3.2 - Aide au Choix */}
            <div class="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div class="flex items-start gap-4 mb-4">
                <div class="text-4xl">🎯</div>
                <div>
                  <h3 class="text-2xl font-semibold text-quube-black mb-2">Aide au Choix des Solutions IA</h3>
                  <p class="text-sm text-quube-gray-dark mb-4">DSI, Directions métiers, Achats | 3-10 jours</p>
                </div>
              </div>
              <p class="text-quube-gray-dark mb-4">
                Analyse besoins métiers et techniques. Benchmark neutre des solutions du marché. 
                Grille d'évaluation multicritères. Organisation POC/démos. Accompagnement négociation.
              </p>
              <div class="bg-purple-50 p-4 rounded space-y-2">
                <p class="text-sm font-medium text-quube-black">📦 Livrables</p>
                <ul class="text-xs text-quube-gray-dark space-y-1">
                  <li>• Cahier des charges fonctionnel</li>
                  <li>• Benchmark comparatif (5-10 solutions)</li>
                  <li>• Recommandation argumentée</li>
                  <li>• Support présentation COMEX</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 4 - DÉPLOYER */}
      <section id="phase-deployer" class="py-32 bg-white">
        <div class="max-w-6xl mx-auto px-8">
          <div class="mb-16">
            <div class="inline-block px-6 py-2 bg-quube-yellow rounded-full mb-6">
              <span class="text-sm font-bold text-quube-black uppercase tracking-wide">Phase 4</span>
            </div>
            <h2 class="text-5xl md:text-6xl font-light text-quube-black mb-6">
              ④ <span class="font-bold">Déployer</span>
            </h2>
            <p class="text-xl font-light text-quube-gray-dark max-w-3xl">
              Mettre en œuvre les projets IA et assurer leur adoption. Passage à l'action.
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-8 mb-8">
            {/* Service 4.1 - Pilotage Projet */}
            <div class="bg-white p-8 rounded-lg shadow-sm border-l-4 border-quube-blue">
              <div class="flex items-start gap-4 mb-4">
                <div class="text-4xl">⚙️</div>
                <div>
                  <h3 class="text-xl font-semibold text-quube-black mb-2">Pilotage de Projet IA</h3>
                  <p class="text-sm text-quube-gray-dark mb-3">DSI, Directions métiers, Chefs de projet</p>
                </div>
              </div>
              <ul class="text-sm text-quube-gray-dark space-y-2">
                <li>• Pilotage MOA/MOE</li>
                <li>• Méthodologie agile adaptée santé</li>
                <li>• Coordination éditeurs/SI</li>
                <li>• Tests et recette</li>
                <li>• Déploiement progressif</li>
              </ul>
            </div>

            {/* Service 4.2 - Conduite du Changement */}
            <div class="bg-white p-8 rounded-lg shadow-sm border-l-4 border-green-500">
              <div class="flex items-start gap-4 mb-4">
                <div class="text-4xl">🚀</div>
                <div>
                  <h3 class="text-xl font-semibold text-quube-black mb-2">Conduite du Changement</h3>
                  <p class="text-sm text-quube-gray-dark mb-3">DRH, Communication, Managers</p>
                </div>
              </div>
              <ul class="text-sm text-quube-gray-dark space-y-2">
                <li>• Plan de communication</li>
                <li>• Identification ambassadeurs</li>
                <li>• Formation utilisateurs finaux</li>
                <li>• Accompagnement résistances</li>
                <li>• Support post-déploiement</li>
              </ul>
            </div>
          </div>

          {/* Lien vers Accélération de Projet */}
          <div class="bg-gradient-to-r from-quube-yellow/20 to-quube-blue/10 p-8 rounded-lg border-2 border-quube-yellow">
            <div class="flex items-center gap-4 mb-4">
              <div class="text-5xl">⚡</div>
              <div>
                <h3 class="text-2xl font-bold text-quube-black mb-2">ACCÉLÉRATION DE PROJET</h3>
                <p class="text-sm font-medium text-quube-gray-dark">OFFRE SIGNATURE</p>
              </div>
            </div>
            <p class="text-quube-gray-dark mb-4">
              Utilisez l'IA comme outil de production du conseil pour accélérer vos projets stratégiques : 
              <strong>délais ÷2-3, coûts réduits, transfert de compétences inclus</strong>.
            </p>
            <a href="#acceleration-projets" class="inline-block px-8 py-3 bg-quube-yellow text-quube-black font-semibold rounded-lg hover:bg-quube-yellow/90 transition-colors">
              Découvrir l'offre Accélération →
            </a>
          </div>
        </div>
      </section>

      {/* Phase 5 - PÉRENNISER & MESURER */}
      <section id="phase-perenniser" class="py-32 bg-gradient-to-br from-green-50 to-white">
        <div class="max-w-6xl mx-auto px-8">
          <div class="mb-16">
            <div class="inline-block px-6 py-2 bg-green-100 rounded-full mb-6">
              <span class="text-sm font-bold text-quube-black uppercase tracking-wide">Phase 5</span>
            </div>
            <h2 class="text-5xl md:text-6xl font-light text-quube-black mb-6">
              ⑤ <span class="font-bold">Pérenniser & Mesurer</span>
            </h2>
            <p class="text-xl font-light text-quube-gray-dark max-w-3xl">
              Ancrer l'IA dans la durée et démontrer la valeur. Amélioration continue.
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-8">
            {/* Service 5.1 - Club IA Santé */}
            <div class="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div class="flex items-start gap-4 mb-4">
                <div class="text-4xl">🌐</div>
                <div>
                  <h3 class="text-2xl font-semibold text-quube-black mb-2">Club IA Santé — Veille & Réseau</h3>
                  <p class="text-sm text-quube-gray-dark mb-4">Décideurs et cadres | Abonnement annuel</p>
                </div>
              </div>
              <p class="text-quube-gray-dark mb-4">
                Restez à la pointe de l'innovation IA en santé : veille mensuelle, retours d'expérience entre pairs, 
                webinaires thématiques, accès privilégié aux analyses sectorielles.
              </p>
              <div class="bg-green-50 p-4 rounded space-y-2">
                <p class="text-sm font-medium text-quube-black">🎁 Avantages membres</p>
                <ul class="text-xs text-quube-gray-dark space-y-1">
                  <li>• Newsletter mensuelle exclusive</li>
                  <li>• Webinaires avec experts terrain</li>
                  <li>• REX entre pairs</li>
                  <li>• Accès prioritaire formations</li>
                  <li>• Réseau privé décideurs santé</li>
                </ul>
              </div>
            </div>

            {/* Service 5.2 - Mesure ROI */}
            <div class="bg-white p-8 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div class="flex items-start gap-4 mb-4">
                <div class="text-4xl">📊</div>
                <div>
                  <h3 class="text-2xl font-semibold text-quube-black mb-2">Mesure de ROI & Amélioration Continue</h3>
                  <p class="text-sm text-quube-gray-dark mb-4">DG, Contrôle de gestion, DSI</p>
                </div>
              </div>
              <p class="text-quube-gray-dark mb-4">
                Définition des KPIs d'adoption et de performance. Mesure des gains de temps et de qualité. 
                Calcul du ROI des projets IA déployés. Plan d'amélioration continue.
              </p>
              <div class="bg-green-50 p-4 rounded space-y-2">
                <p class="text-sm font-medium text-quube-black">📦 Livrables</p>
                <ul class="text-xs text-quube-gray-dark space-y-1">
                  <li>• Tableau de bord ROI</li>
                  <li>• Rapport d'impact mesurable</li>
                  <li>• Benchmark interne</li>
                  <li>• Recommandations d'optimisation</li>
                </ul>
              </div>
            </div>
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

      {/* NOUVEAU : Cas d'Usage Par Métier (rationalisé + tags transversaux) */}
      {/* NOUVEAU : Cas d'Usage Par Métier (rationalisé + tags transversaux) */}
      <section id="cas-usage" class="py-32 bg-gray-50">
        <div class="max-w-6xl mx-auto px-8">
          <div class="mb-16">
            <h2 class="text-5xl md:text-6xl font-light text-quube-black mb-6">
              Cas d'<span class="font-bold">Usage</span> par Métier
            </h2>
            <div class="w-20 h-1 bg-quube-yellow"></div>
            <p class="text-xl font-light text-quube-gray-dark mt-6 max-w-3xl">
              Navigation par fonction métier + filtres transversaux (Conformité, Data, Automatisation)
            </p>
          </div>

          {/* Tags Transversaux (Filtres) */}
          <div class="mb-8 flex flex-wrap gap-4">
            <div class="flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-200 rounded-lg">
              <span class="text-2xl">🏛️</span>
              <div>
                <p class="text-sm font-semibold text-purple-900">Conformité</p>
                <p class="text-xs text-purple-700">RGPD, AI Act, HDS, HAS, ESSMS</p>
              </div>
            </div>
            <div class="flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-lg">
              <span class="text-2xl">📊</span>
              <div>
                <p class="text-sm font-semibold text-blue-900">Data & Analytics</p>
                <p class="text-xs text-blue-700">BI, tableaux de bord, prédictif</p>
              </div>
            </div>
            <div class="flex items-center gap-2 px-4 py-2 bg-yellow-50 border border-yellow-200 rounded-lg">
              <span class="text-2xl">⚡</span>
              <div>
                <p class="text-sm font-semibold text-yellow-900">Automatisation</p>
                <p class="text-xs text-yellow-700">Gains de temps, workflows, documents</p>
              </div>
            </div>
          </div>

          {/* Onglets Par Métier (8 onglets : ROI++ + 7 métiers) */}
          <div class="flex flex-wrap gap-2 mb-12 border-b border-gray-200 pb-4">
            <button onclick="showTab('metier-roi')" id="tab-metier-roi" class="tab-btn px-6 py-3 text-sm font-bold rounded-t-lg border-b-2 border-transparent hover:border-quube-yellow transition-colors bg-quube-yellow/30 text-quube-black shadow-sm active">⚡ ROI++</button>
            <div class="h-10 w-px bg-gray-300 self-center mx-2"></div>
            <button onclick="showTab('metier-dg')" id="tab-metier-dg" class="tab-btn px-6 py-3 text-sm font-medium rounded-t-lg border-b-2 border-transparent hover:border-quube-yellow transition-colors">🎯 Direction Générale</button>
            <button onclick="showTab('metier-daf')" id="tab-metier-daf" class="tab-btn px-6 py-3 text-sm font-medium rounded-t-lg border-b-2 border-transparent hover:border-quube-yellow transition-colors">💰 Finance (DAF)</button>
            <button onclick="showTab('metier-drh')" id="tab-metier-drh" class="tab-btn px-6 py-3 text-sm font-medium rounded-t-lg border-b-2 border-transparent hover:border-quube-yellow transition-colors">👥 RH (DRH)</button>
            <button onclick="showTab('metier-qualite')" id="tab-metier-qualite" class="tab-btn px-6 py-3 text-sm font-medium rounded-t-lg border-b-2 border-transparent hover:border-quube-yellow transition-colors">✅ Qualité</button>
            <button onclick="showTab('metier-soins')" id="tab-metier-soins" class="tab-btn px-6 py-3 text-sm font-medium rounded-t-lg border-b-2 border-transparent hover:border-quube-yellow transition-colors">🩺 Soins</button>
            <button onclick="showTab('metier-educatif')" id="tab-metier-educatif" class="tab-btn px-6 py-3 text-sm font-medium rounded-t-lg border-b-2 border-transparent hover:border-quube-yellow transition-colors">🎓 Éducatif</button>
            <button onclick="showTab('metier-transverse')" id="tab-metier-transverse" class="tab-btn px-6 py-3 text-sm font-medium rounded-t-lg border-b-2 border-transparent hover:border-quube-yellow transition-colors">🔄 Transverse</button>
          </div>

          {/* Contenu ROI++ */}
          <div id="content-metier-roi" class="tab-content">
            <div class="mb-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r">
              <p class="text-sm font-medium text-yellow-900">
                ⚡ <strong>Cas d'usage ROI++</strong> : Ces applications génèrent un retour sur investissement mesurable de <strong>50-70% de gain de temps</strong>
              </p>
            </div>
            
            <div class="grid md:grid-cols-2 gap-8">
              <div class="space-y-6">
                <div class="bg-white p-6 rounded-lg shadow-sm">
                  <h4 class="text-xl font-semibold text-quube-black mb-4 flex items-center">
                    <span class="text-2xl mr-3">📊</span> Stratégie & Pilotage
                  </h4>
                  <ul class="space-y-3 text-sm text-quube-gray-dark">
                    <li>• <strong>Rapports d'activité</strong> : Génération automatique, synthèses annuelles</li>
                    <li>• <strong>Projets d'établissement</strong> : Rédaction collaborative, alignement stratégique</li>
                    <li>• <strong>Business plans</strong> : Modèles financiers, projections, scénarios</li>
                    <li>• <strong>Analyse concurrentielle</strong> : Veille stratégique, positionnement</li>
                  </ul>
                  <div class="mt-4 flex gap-2">
                    <span class="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">⚡ Automatisation</span>
                    <span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">📊 Data</span>
                  </div>
                </div>

                <div class="bg-white p-6 rounded-lg shadow-sm">
                  <h4 class="text-xl font-semibold text-quube-black mb-4 flex items-center">
                    <span class="text-2xl mr-3">📈</span> Finance & Développement
                  </h4>
                  <ul class="space-y-3 text-sm text-quube-gray-dark">
                    <li>• <strong>Appels à projets</strong> : Rédaction dossiers AAP/AAC, financement</li>
                    <li>• <strong>Simulations financières</strong> : Modélisation tarifaire, optimisation</li>
                    <li>• <strong>Rapports DGOS/MIGAC</strong> : Conformité réglementaire</li>
                  </ul>
                  <div class="mt-4 flex gap-2">
                    <span class="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">⚡ Automatisation</span>
                    <span class="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">🏛️ Conformité</span>
                  </div>
                </div>
              </div>

              <div class="space-y-6">
                <div class="bg-white p-6 rounded-lg shadow-sm">
                  <h4 class="text-xl font-semibold text-quube-black mb-4 flex items-center">
                    <span class="text-2xl mr-3">🔍</span> Veille & Intelligence
                  </h4>
                  <ul class="space-y-3 text-sm text-quube-gray-dark">
                    <li>• <strong>Veille réglementaire</strong> : Monitoring automatisé, analyse d'impact</li>
                    <li>• <strong>Revue de littérature</strong> : Synthèse documentaire, état de l'art</li>
                    <li>• <strong>Benchmark sectoriel</strong> : Comparaisons établissements, bonnes pratiques</li>
                  </ul>
                  <div class="mt-4 flex gap-2">
                    <span class="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">🏛️ Conformité</span>
                    <span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">📊 Data</span>
                  </div>
                </div>

                <div class="bg-white p-6 rounded-lg shadow-sm">
                  <h4 class="text-xl font-semibold text-quube-black mb-4 flex items-center">
                    <span class="text-2xl mr-3">📋</span> Documentation & Conformité
                  </h4>
                  <ul class="space-y-3 text-sm text-quube-gray-dark">
                    <li>• <strong>Procédures qualité</strong> : Rédaction, mise à jour, harmonisation</li>
                    <li>• <strong>Dossiers certification HAS</strong> : Préparation, preuves, traçabilité</li>
                    <li>• <strong>Évaluation ESSMS</strong> : Auto-évaluation, plans d'action</li>
                  </ul>
                  <div class="mt-4 flex gap-2">
                    <span class="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">🏛️ Conformité</span>
                    <span class="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">⚡ Automatisation</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-8 p-6 bg-gradient-to-r from-quube-yellow/20 to-quube-blue/10 rounded-lg">
              <p class="text-lg text-quube-black">
                <strong>ROI Mesurable :</strong> 50-70% de gain de temps sur ces tâches stratégiques
              </p>
            </div>
          </div>

          {/* Contenu Direction Générale & Stratégie */}
          <div id="content-metier-dg" class="tab-content hidden">
            <h3 class="text-3xl font-medium text-quube-black mb-6">🎯 Direction Générale & Stratégie</h3>
            <p class="text-lg font-light text-quube-gray-dark mb-8">
              Cas d'usage emblématiques : Projets d'établissement, CPOM, notes stratégiques, veille concurrentielle, préparation CA/COMEX
            </p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-quube-yellow">
                <h4 class="font-semibold text-quube-black mb-3">📋 Pilotage Stratégique</h4>
                <ul class="space-y-2 text-sm text-quube-gray-dark">
                  <li>• Rédaction projets d'établissement et de service</li>
                  <li>• Contrats pluriannuels d'objectifs (CPOM)</li>
                  <li>• Notes stratégiques et synthèses décisionnelles</li>
                  <li>• Préparation CA, COMEX, CME</li>
                </ul>
                <div class="mt-4 flex flex-wrap gap-2">
                  <span class="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">⚡ ROI++</span>
                  <span class="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">⚡ Automatisation</span>
                </div>
              </div>

              <div class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
                <h4 class="font-semibold text-quube-black mb-3">🔍 Veille & Analyse</h4>
                <ul class="space-y-2 text-sm text-quube-gray-dark">
                  <li>• Veille concurrentielle et positionnement marché</li>
                  <li>• Analyse réglementaire et impact législatif</li>
                  <li>• Benchmark inter-établissements</li>
                  <li>• Études de faisabilité diversification</li>
                </ul>
                <div class="mt-4 flex flex-wrap gap-2">
                  <span class="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">⚡ ROI++</span>
                  <span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">📊 Data</span>
                </div>
              </div>

              <div class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
                <h4 class="font-semibold text-quube-black mb-3">💼 Développement</h4>
                <ul class="space-y-2 text-sm text-quube-gray-dark">
                  <li>• Business plans et modèles économiques</li>
                  <li>• Dossiers appels à projets (AAP/AAC)</li>
                  <li>• Stratégies de diversification</li>
                  <li>• Partenariats et conventionnements</li>
                </ul>
                <div class="mt-4 flex flex-wrap gap-2">
                  <span class="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">⚡ ROI++</span>
                  <span class="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">⚡ Automatisation</span>
                </div>
              </div>

              <div class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-500">
                <h4 class="font-semibold text-quube-black mb-3">📊 Communication Institutionnelle</h4>
                <ul class="space-y-2 text-sm text-quube-gray-dark">
                  <li>• Rapports d'activité annuels</li>
                  <li>• Communication de crise</li>
                  <li>• Relations presse et institutionnelles</li>
                  <li>• Discours et allocutions</li>
                </ul>
                <div class="mt-4 flex flex-wrap gap-2">
                  <span class="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">⚡ Automatisation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contenu Finance & Gestion (DAF) */}
          <div id="content-metier-daf" class="tab-content hidden">
            <h3 class="text-3xl font-medium text-quube-black mb-6">💰 Finance & Gestion (DAF)</h3>
            <p class="text-lg font-light text-quube-gray-dark mb-8">
              Cas d'usage emblématiques : Business plans, simulations tarifaires, rapports financiers, réponses DGOS/MIGAC, analyse budgétaire
            </p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-quube-yellow">
                <h4 class="font-semibold text-quube-black mb-3">📈 Planification & Modélisation</h4>
                <ul class="space-y-2 text-sm text-quube-gray-dark">
                  <li>• Business plans et projections financières</li>
                  <li>• Simulations tarifaires (T2A, dotation)</li>
                  <li>• Scénarios budgétaires multiples</li>
                  <li>• Analyse coûts/bénéfices projets</li>
                </ul>
                <div class="mt-4 flex flex-wrap gap-2">
                  <span class="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">⚡ ROI++</span>
                  <span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">📊 Data</span>
                </div>
              </div>

              <div class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
                <h4 class="font-semibold text-quube-black mb-3">📊 Reporting & Conformité</h4>
                <ul class="space-y-2 text-sm text-quube-gray-dark">
                  <li>• Rapports financiers DGOS/ARS</li>
                  <li>• Réponses MIGAC/FIR</li>
                  <li>• Tableaux de bord de gestion</li>
                  <li>• Comptes administratifs (CA/EPRD)</li>
                </ul>
                <div class="mt-4 flex flex-wrap gap-2">
                  <span class="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">⚡ ROI++</span>
                  <span class="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">🏛️ Conformité</span>
                  <span class="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">⚡ Automatisation</span>
                </div>
              </div>

              <div class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
                <h4 class="font-semibold text-quube-black mb-3">💼 Analyse & Optimisation</h4>
                <ul class="space-y-2 text-sm text-quube-gray-dark">
                  <li>• Analyse des écarts budget/réel</li>
                  <li>• Optimisation masse salariale</li>
                  <li>• Suivi analytical par pôle/service</li>
                  <li>• Détection anomalies et fraude</li>
                </ul>
                <div class="mt-4 flex flex-wrap gap-2">
                  <span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">📊 Data</span>
                </div>
              </div>

              <div class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-500">
                <h4 class="font-semibold text-quube-black mb-3">📋 Achats & Marchés</h4>
                <ul class="space-y-2 text-sm text-quube-gray-dark">
                  <li>• Cahiers des charges achats</li>
                  <li>• Analyse offres fournisseurs</li>
                  <li>• Négociation contrats cadres</li>
                  <li>• Suivi performance achats</li>
                </ul>
                <div class="mt-4 flex flex-wrap gap-2">
                  <span class="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">⚡ Automatisation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contenu RH (DRH) */}
          <div id="content-metier-drh" class="tab-content hidden">
            <h3 class="text-3xl font-medium text-quube-black mb-6">👥 Ressources Humaines (DRH)</h3>
            <p class="text-lg font-light text-quube-gray-dark mb-8">
              Cas d'usage emblématiques : Fiches de poste, entretiens annuels, plannings, onboarding, GPEC, QVT
            </p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-quube-yellow">
                <h4 class="font-semibold text-quube-black mb-3">📝 Recrutement & Intégration</h4>
                <ul class="space-y-2 text-sm text-quube-gray-dark">
                  <li>• Rédaction fiches de poste</li>
                  <li>• Tri et analyse CV</li>
                  <li>• Guides d'entretien structurés</li>
                  <li>• Parcours onboarding personnalisés</li>
                </ul>
                <div class="mt-4 flex flex-wrap gap-2">
                  <span class="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">⚡ Automatisation</span>
                </div>
              </div>

              <div class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
                <h4 class="font-semibold text-quube-black mb-3">📊 Gestion des Compétences</h4>
                <ul class="space-y-2 text-sm text-quube-gray-dark">
                  <li>• Entretiens annuels et professionnels</li>
                  <li>• Plans de formation individuels</li>
                  <li>• GPEC (Gestion Prévisionnelle Emplois)</li>
                  <li>• Cartographie compétences</li>
                </ul>
                <div class="mt-4 flex flex-wrap gap-2">
                  <span class="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">⚡ Automatisation</span>
                  <span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">📊 Data</span>
                </div>
              </div>

              <div class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
                <h4 class="font-semibold text-quube-black mb-3">⏰ Planning & Organisation</h4>
                <ul class="space-y-2 text-sm text-quube-gray-dark">
                  <li>• Plannings prévisionnels</li>
                  <li>• Gestion congés et remplacements</li>
                  <li>• Optimisation effectifs</li>
                  <li>• Tableaux de bord RH</li>
                </ul>
                <div class="mt-4 flex flex-wrap gap-2">
                  <span class="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">⚡ Automatisation</span>
                  <span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">📊 Data</span>
                </div>
              </div>

              <div class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-500">
                <h4 class="font-semibold text-quube-black mb-3">💚 QVT & Relations Sociales</h4>
                <ul class="space-y-2 text-sm text-quube-gray-dark">
                  <li>• Plans QVT et prévention RPS</li>
                  <li>• Communication interne</li>
                  <li>• Préparation CSE/CSSCT</li>
                  <li>• Gestion conflits et médiation</li>
                </ul>
                <div class="mt-4 flex flex-wrap gap-2">
                  <span class="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">⚡ Automatisation</span>
                  <span class="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">🏛️ Conformité</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contenu Qualité & Conformité */}
          <div id="content-metier-qualite" class="tab-content hidden">
            <h3 class="text-3xl font-medium text-quube-black mb-6">✅ Qualité & Conformité</h3>
            <p class="text-lg font-light text-quube-gray-dark mb-8">
              Cas d'usage emblématiques : Préparation certification HAS, évaluation ESSMS, procédures qualité, RGPD, AI Act, signalements EI
            </p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-quube-yellow">
                <h4 class="font-semibold text-quube-black mb-3">🏆 Certification & Évaluation</h4>
                <ul class="space-y-2 text-sm text-quube-gray-dark">
                  <li>• Préparation certification HAS</li>
                  <li>• Auto-évaluation ESSMS</li>
                  <li>• Dossiers de preuves et traçabilité</li>
                  <li>• Plans d'amélioration continue</li>
                </ul>
                <div class="mt-4 flex flex-wrap gap-2">
                  <span class="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">⚡ ROI++</span>
                  <span class="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">🏛️ Conformité</span>
                  <span class="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">⚡ Automatisation</span>
                </div>
              </div>

              <div class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
                <h4 class="font-semibold text-quube-black mb-3">📋 Procédures & Documentation</h4>
                <ul class="space-y-2 text-sm text-quube-gray-dark">
                  <li>• Rédaction procédures qualité</li>
                  <li>• Mise à jour protocoles</li>
                  <li>• Harmonisation documentaire</li>
                  <li>• Gestion documentaire qualité</li>
                </ul>
                <div class="mt-4 flex flex-wrap gap-2">
                  <span class="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">⚡ ROI++</span>
                  <span class="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">⚡ Automatisation</span>
                </div>
              </div>

              <div class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
                <h4 class="font-semibold text-quube-black mb-3">⚠️ Gestion des Risques</h4>
                <ul class="space-y-2 text-sm text-quube-gray-dark">
                  <li>• Signalement événements indésirables (EI)</li>
                  <li>• Analyse RMM (Revue Morbi-Mortalité)</li>
                  <li>• Cartographie des risques</li>
                  <li>• Plans d'actions correctives</li>
                </ul>
                <div class="mt-4 flex flex-wrap gap-2">
                  <span class="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">🏛️ Conformité</span>
                  <span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">📊 Data</span>
                </div>
              </div>

              <div class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-500">
                <h4 class="font-semibold text-quube-black mb-3">🔒 Conformité Réglementaire</h4>
                <ul class="space-y-2 text-sm text-quube-gray-dark">
                  <li>• Conformité RGPD et protection données</li>
                  <li>• AI Act et éthique IA</li>
                  <li>• HDS (Hébergement Données Santé)</li>
                  <li>• Audits et contrôles réglementaires</li>
                </ul>
                <div class="mt-4 flex flex-wrap gap-2">
                  <span class="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">⚡ ROI++</span>
                  <span class="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">🏛️ Conformité</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contenu Soins & Médical */}
          <div id="content-metier-soins" class="tab-content hidden">
            <h3 class="text-3xl font-medium text-quube-black mb-6">🩺 Soins & Médical</h3>
            <p class="text-lg font-light text-quube-gray-dark mb-8">
              Cas d'usage emblématiques : Comptes rendus médicaux, synthèses RCP, protocoles, transmissions, recherche bibliographique
            </p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-quube-yellow">
                <h4 class="font-semibold text-quube-black mb-3">📝 Documentation Médicale</h4>
                <ul class="space-y-2 text-sm text-quube-gray-dark">
                  <li>• Comptes rendus opératoires/consultations</li>
                  <li>• Synthèses RCP (Réunion Concertation Pluridisciplinaire)</li>
                  <li>• Courriers médicaux structurés</li>
                  <li>• Transmissions ciblées IDE</li>
                </ul>
                <div class="mt-4 flex flex-wrap gap-2">
                  <span class="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">⚡ Automatisation</span>
                </div>
              </div>

              <div class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
                <h4 class="font-semibold text-quube-black mb-3">📚 Protocoles & Référentiels</h4>
                <ul class="space-y-2 text-sm text-quube-gray-dark">
                  <li>• Rédaction protocoles de soins</li>
                  <li>• Adaptation recommandations HAS</li>
                  <li>• Recherche bibliographique médicale</li>
                  <li>• Veille scientifique ciblée</li>
                </ul>
                <div class="mt-4 flex flex-wrap gap-2">
                  <span class="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">⚡ Automatisation</span>
                  <span class="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded">🏛️ Conformité</span>
                </div>
              </div>

              <div class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
                <h4 class="font-semibold text-quube-black mb-3">🔬 Analyse & Décision</h4>
                <ul class="space-y-2 text-sm text-quube-gray-dark">
                  <li>• Aide à la décision diagnostique</li>
                  <li>• Analyse interactions médicamenteuses</li>
                  <li>• Synthèse dossiers patients complexes</li>
                  <li>• Alertes cliniques personnalisées</li>
                </ul>
                <div class="mt-4 flex flex-wrap gap-2">
                  <span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">📊 Data</span>
                </div>
              </div>

              <div class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-500">
                <h4 class="font-semibold text-quube-black mb-3">👥 Coordination & Formation</h4>
                <ul class="space-y-2 text-sm text-quube-gray-dark">
                  <li>• Staffs médicaux et EPP</li>
                  <li>• Formation continue soignants</li>
                  <li>• Simulation cas cliniques</li>
                  <li>• Supports pédagogiques patients</li>
                </ul>
                <div class="mt-4 flex flex-wrap gap-2">
                  <span class="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">⚡ Automatisation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contenu Éducatif & Médico-social */}
          <div id="content-metier-educatif" class="tab-content hidden">
            <h3 class="text-3xl font-medium text-quube-black mb-6">🎓 Éducatif & Médico-social</h3>
            <p class="text-lg font-light text-quube-gray-dark mb-8">
              Cas d'usage emblématiques : Projets personnalisés (PPA), bilans éducatifs, supports pédagogiques, parcours usagers
            </p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-quube-yellow">
                <h4 class="font-semibold text-quube-black mb-3">📋 Projets Personnalisés</h4>
                <ul class="space-y-2 text-sm text-quube-gray-dark">
                  <li>• Projets Personnalisés d'Accompagnement (PPA)</li>
                  <li>• Projets Individuels d'Accompagnement (PIA)</li>
                  <li>• Contrats de séjour personnalisés</li>
                  <li>• Plans d'actions individuels</li>
                </ul>
                <div class="mt-4 flex flex-wrap gap-2">
                  <span class="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">⚡ Automatisation</span>
                </div>
              </div>

              <div class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
                <h4 class="font-semibold text-quube-black mb-3">📊 Bilans & Évaluations</h4>
                <ul class="space-y-2 text-sm text-quube-gray-dark">
                  <li>• Bilans éducatifs et rééducatifs</li>
                  <li>• Évaluations psycho-éducatives</li>
                  <li>• Comptes rendus de synthèse</li>
                  <li>• Suivi évolution et progrès</li>
                </ul>
                <div class="mt-4 flex flex-wrap gap-2">
                  <span class="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">⚡ Automatisation</span>
                  <span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">📊 Data</span>
                </div>
              </div>

              <div class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
                <h4 class="font-semibold text-quube-black mb-3">🎨 Supports Pédagogiques</h4>
                <ul class="space-y-2 text-sm text-quube-gray-dark">
                  <li>• Création supports FALC (Facile à Lire)</li>
                  <li>• Activités éducatives adaptées</li>
                  <li>• Fiches techniques méthodologiques</li>
                  <li>• Outils communication alternative</li>
                </ul>
                <div class="mt-4 flex flex-wrap gap-2">
                  <span class="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">⚡ Automatisation</span>
                </div>
              </div>

              <div class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-500">
                <h4 class="font-semibold text-quube-black mb-3">👪 Parcours & Famille</h4>
                <ul class="space-y-2 text-sm text-quube-gray-dark">
                  <li>• Parcours usagers personnalisés</li>
                  <li>• Communication avec familles</li>
                  <li>• Livrets d'accueil adaptés</li>
                  <li>• Coordination partenaires (MDPH, écoles)</li>
                </ul>
                <div class="mt-4 flex flex-wrap gap-2">
                  <span class="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">⚡ Automatisation</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contenu Fonctions Transverses */}
          <div id="content-metier-transverse" class="tab-content hidden">
            <h3 class="text-3xl font-medium text-quube-black mb-6">🔄 Fonctions Transverses</h3>
            <p class="text-lg font-light text-quube-gray-dark mb-8">
              Cas d'usage emblématiques : Communication interne/externe, secrétariat, accueil, logistique, réunions et CR
            </p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-quube-yellow">
                <h4 class="font-semibold text-quube-black mb-3">💬 Communication</h4>
                <ul class="space-y-2 text-sm text-quube-gray-dark">
                  <li>• Communication interne (newsletters, notes)</li>
                  <li>• Communication externe (réseaux sociaux, site web)</li>
                  <li>• Relations presse et médias</li>
                  <li>• Campagnes de sensibilisation</li>
                </ul>
                <div class="mt-4 flex flex-wrap gap-2">
                  <span class="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">⚡ Automatisation</span>
                </div>
              </div>

              <div class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500">
                <h4 class="font-semibold text-quube-black mb-3">📋 Secrétariat & Administration</h4>
                <ul class="space-y-2 text-sm text-quube-gray-dark">
                  <li>• Comptes rendus réunions</li>
                  <li>• Courriers et réponses types</li>
                  <li>• Gestion agenda et prise RDV</li>
                  <li>• Classement et archivage intelligent</li>
                </ul>
                <div class="mt-4 flex flex-wrap gap-2">
                  <span class="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">⚡ ROI++</span>
                  <span class="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">⚡ Automatisation</span>
                </div>
              </div>

              <div class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-500">
                <h4 class="font-semibold text-quube-black mb-3">🏢 Accueil & Services Généraux</h4>
                <ul class="space-y-2 text-sm text-quube-gray-dark">
                  <li>• Guides d'accueil multilingues</li>
                  <li>• FAQ et chatbots d'information</li>
                  <li>• Gestion réclamations usagers</li>
                  <li>• Maintenance et signalements</li>
                </ul>
                <div class="mt-4 flex flex-wrap gap-2">
                  <span class="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">⚡ Automatisation</span>
                </div>
              </div>

              <div class="bg-white p-6 rounded-lg shadow-sm border-l-4 border-purple-500">
                <h4 class="font-semibold text-quube-black mb-3">📦 Logistique & Achats</h4>
                <ul class="space-y-2 text-sm text-quube-gray-dark">
                  <li>• Gestion stocks et commandes</li>
                  <li>• Suivi livraisons fournisseurs</li>
                  <li>• Optimisation circuits logistiques</li>
                  <li>• Inventaires et audits</li>
                </ul>
                <div class="mt-4 flex flex-wrap gap-2">
                  <span class="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded">⚡ Automatisation</span>
                  <span class="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">📊 Data</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
