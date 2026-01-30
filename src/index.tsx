import { Hono } from 'hono'
import { renderer } from './renderer'

const app = new Hono()

app.use(renderer)

// Page d'accueil
app.get('/', (c) => {
  return c.render(
    <>
      {/* Navigation */}
      <nav class="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between items-center h-20">
            <div class="flex items-center">
              <a href="/" class="text-3xl font-bold tracking-tight">
                <span class="text-quube-black">QUUBE</span>
                <span class="text-quube-gray-dark mx-2">×</span>
                <span class="text-quube-blue">IA Santé</span>
              </a>
            </div>
            <div class="hidden md:flex space-x-8">
              <a href="#offre" class="text-quube-gray-dark hover:text-quube-black transition-colors font-medium">Notre Offre</a>
              <a href="#cas-usage" class="text-quube-gray-dark hover:text-quube-black transition-colors font-medium">Cas d'Usage</a>
              <a href="#blog" class="text-quube-gray-dark hover:text-quube-black transition-colors font-medium">Blog</a>
              <a href="#contact" class="bg-quube-yellow text-quube-black px-6 py-2 rounded-full hover:bg-quube-yellow-neon transition-all shadow-md hover:shadow-lg font-bold">Contact</a>
            </div>
            <button class="md:hidden text-quube-gray-dark">
              <i class="fas fa-bars text-2xl"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section class="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div class="space-y-8">
              <div class="inline-block">
                <span class="bg-quube-yellow/20 text-quube-black px-4 py-2 rounded-full text-sm font-bold border border-quube-yellow">
                  <i class="fas fa-brain mr-2 text-quube-blue"></i>Intelligence Artificielle × Santé
                </span>
              </div>
              <h1 class="text-5xl md:text-6xl font-bold leading-tight text-quube-black">
                Transformez votre organisation avec l'<span class="text-quube-blue">IA Générative</span>
              </h1>
              <p class="text-xl text-quube-gray-dark leading-relaxed">
                QUUBE accompagne les professionnels de santé et du médico-social dans leur montée en compétences IA : formations, coaching, conseil stratégique et audits personnalisés pour optimiser vos services et satisfaire vos usagers.
              </p>
              <div class="flex flex-wrap gap-4">
                <a href="#contact" class="bg-quube-yellow text-quube-black px-8 py-4 rounded-full hover:bg-quube-yellow-neon transition-all shadow-lg hover:shadow-xl font-bold inline-flex items-center">
                  Démarrer votre transformation
                  <i class="fas fa-arrow-right ml-2"></i>
                </a>
                <a href="#offre" class="bg-white text-quube-black px-8 py-4 rounded-full border-2 border-quube-black hover:bg-quube-black hover:text-white transition-all font-bold">
                  Découvrir nos offres
                </a>
              </div>
              <div class="flex items-center space-x-8 pt-4">
                <div class="text-center">
                  <div class="text-3xl font-bold text-quube-blue">450+</div>
                  <div class="text-sm text-quube-gray">Entreprises HealthTech</div>
                </div>
                <div class="text-center">
                  <div class="text-3xl font-bold text-quube-black">76%</div>
                  <div class="text-sm text-quube-gray">En phase de croissance</div>
                </div>
                <div class="text-center">
                  <div class="text-3xl font-bold text-quube-black">2025</div>
                  <div class="text-sm text-quube-gray">Priorité stratégique</div>
                </div>
              </div>
            </div>
            <div class="relative">
              <div class="absolute inset-0 bg-gradient-to-r from-quube-yellow/20 to-quube-blue/10 rounded-3xl blur-3xl"></div>
              <div class="relative bg-white rounded-3xl shadow-2xl p-8 space-y-6 border border-gray-100">
                <div class="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-quube-yellow/10 transition-colors">
                  <div class="w-12 h-12 bg-quube-blue rounded-lg flex items-center justify-center text-white">
                    <i class="fas fa-robot text-xl"></i>
                  </div>
                  <div>
                    <div class="font-bold text-quube-black">IA Générative</div>
                    <div class="text-sm text-quube-gray">ChatGPT, Gemini, Claude</div>
                  </div>
                </div>
                <div class="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-quube-yellow/10 transition-colors">
                  <div class="w-12 h-12 bg-quube-black rounded-lg flex items-center justify-center text-white">
                    <i class="fas fa-hospital text-xl"></i>
                  </div>
                  <div>
                    <div class="font-bold text-quube-black">Secteur Santé</div>
                    <div class="text-sm text-quube-gray">Hôpitaux, EHPAD, Médico-social</div>
                  </div>
                </div>
                <div class="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-quube-yellow/10 transition-colors">
                  <div class="w-12 h-12 bg-quube-black rounded-lg flex items-center justify-center text-quube-yellow">
                    <i class="fas fa-chart-line text-xl"></i>
                  </div>
                  <div>
                    <div class="font-bold text-quube-black">Résultats Concrets</div>
                    <div class="text-sm text-quube-gray">ROI mesurable, efficacité optimisée</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Offre */}
      <section id="offre" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-4">
              Notre <span class="text-quube-blue">Offre Complète</span>
            </h2>
            <p class="text-xl text-quube-gray-dark max-w-3xl mx-auto">
              Une approche modulaire et personnalisable pour accompagner chaque acteur de votre organisation dans sa transformation IA
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Formations */}
            <div class="group bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-quube-yellow hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div class="w-16 h-16 bg-quube-yellow rounded-xl flex items-center justify-center text-quube-black mb-6 group-hover:scale-110 transition-transform">
                <i class="fas fa-graduation-cap text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold mb-4 text-quube-black">Formations</h3>
              <p class="text-quube-gray-dark mb-6">
                Modules d'initiation à l'IA générative, perfectionnement sur vos outils (ChatGPT, Claude, Gemini, Mistral) et formations sur mesure adaptées au secteur santé.
              </p>
              <ul class="space-y-3 mb-6">
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-quube-blue mr-3 mt-1"></i>
                  <span class="text-quube-gray-dark">Initiation IA & Enjeux Santé</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-quube-blue mr-3 mt-1"></i>
                  <span class="text-quube-gray-dark">Perfectionnement ChatGPT, Claude, Gemini</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-quube-blue mr-3 mt-1"></i>
                  <span class="text-quube-gray-dark">Outils vidéo, GenSpark & IA multimodale</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-quube-blue mr-3 mt-1"></i>
                  <span class="text-quube-gray-dark">Formations métier sur mesure</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-quube-blue mr-3 mt-1"></i>
                  <span class="text-quube-gray-dark">Certifications possibles</span>
                </li>
              </ul>
              <a href="#contact" class="text-quube-blue font-bold inline-flex items-center group-hover:gap-3 transition-all">
                En savoir plus
                <i class="fas fa-arrow-right ml-2"></i>
              </a>
            </div>

            {/* Coaching */}
            <div class="group bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-quube-yellow hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div class="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center text-quube-black mb-6 group-hover:scale-110 transition-transform">
                <i class="fas fa-users text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold mb-4 text-quube-black">Coaching</h3>
              <p class="text-quube-gray-dark mb-6">
                Accompagnement personnalisé des dirigeants, CODIR et équipes pour intégrer l'IA dans les stratégies et processus décisionnels.
              </p>
              <ul class="space-y-3 mb-6">
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-quube-black mr-3 mt-1"></i>
                  <span class="text-quube-gray-dark">Coaching dirigeants</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-quube-black mr-3 mt-1"></i>
                  <span class="text-quube-gray-dark">Accompagnement CODIR</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-quube-black mr-3 mt-1"></i>
                  <span class="text-quube-gray-dark">Sessions d'équipe</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-quube-black mr-3 mt-1"></i>
                  <span class="text-quube-gray-dark">Suivi continu</span>
                </li>
              </ul>
              <a href="#contact" class="text-gray-800 font-semibold inline-flex items-center group-hover:gap-3 transition-all">
                En savoir plus
                <i class="fas fa-arrow-right ml-2"></i>
              </a>
            </div>

            {/* Conseil Stratégique */}
            <div class="group bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-quube-yellow hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div class="w-16 h-16 bg-gray-700 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                <i class="fas fa-lightbulb text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold mb-4 text-quube-black">Conseil Stratégique & Gouvernance</h3>
              <p class="text-quube-gray-dark mb-6">
                Design de nouvelles offres, transformation organisationnelle, et cadrage réglementaire pour une adoption responsable de l'IA.
              </p>
              <ul class="space-y-3 mb-6">
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-gray-700 mr-3 mt-1"></i>
                  <span class="text-quube-gray-dark">Rédaction charte éthique IA</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-gray-700 mr-3 mt-1"></i>
                  <span class="text-quube-gray-dark">Charte d'usages & RGPD</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-gray-700 mr-3 mt-1"></i>
                  <span class="text-quube-gray-dark">Formalisation gouvernance IA</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-gray-700 mr-3 mt-1"></i>
                  <span class="text-quube-gray-dark">Roadmap & Design de services</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-gray-700 mr-3 mt-1"></i>
                  <span class="text-quube-gray-dark">Gestion de projets IA</span>
                </li>
              </ul>
              <a href="#contact" class="text-gray-700 font-bold inline-flex items-center group-hover:gap-3 transition-all">
                En savoir plus
                <i class="fas fa-arrow-right ml-2"></i>
              </a>
            </div>

            {/* Audits */}
            <div class="group bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-quube-yellow hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div class="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center text-quube-black mb-6 group-hover:scale-110 transition-transform">
                <i class="fas fa-clipboard-check text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold mb-4 text-quube-black">Audits IA</h3>
              <p class="text-quube-gray-dark mb-6">
                Évaluation de maturité IA, diagnostic des processus, identification des opportunités et recommandations stratégiques personnalisées.
              </p>
              <ul class="space-y-3 mb-6">
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-quube-black mr-3 mt-1"></i>
                  <span class="text-quube-gray-dark">Audit de maturité IA</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-quube-black mr-3 mt-1"></i>
                  <span class="text-quube-gray-dark">Analyse des processus</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-quube-black mr-3 mt-1"></i>
                  <span class="text-quube-gray-dark">Identification opportunités</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-quube-black mr-3 mt-1"></i>
                  <span class="text-quube-gray-dark">Roadmap stratégique</span>
                </li>
              </ul>
              <a href="#contact" class="text-quube-black font-bold inline-flex items-center group-hover:gap-3 transition-all">
                En savoir plus
                <i class="fas fa-arrow-right ml-2"></i>
              </a>
            </div>

            {/* Diagnostic Flash QUUBE */}
            <div class="group bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-quube-yellow hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div class="w-16 h-16 bg-quube-blue rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                <i class="fas fa-tachometer-alt text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold mb-4 text-quube-black">Diagnostic Flash QUUBE®</h3>
              <p class="text-quube-gray-dark mb-6">
                Méthode propriétaire en 3 niveaux pour évaluer rapidement votre maturité IA et identifier vos opportunités prioritaires.
              </p>
              <ul class="space-y-3 mb-6">
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-quube-blue mr-3 mt-1"></i>
                  <span class="text-quube-gray-dark"><strong>Niveau 1 - Base :</strong> Cas d'usage fréquents</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-quube-blue mr-3 mt-1"></i>
                  <span class="text-quube-gray-dark"><strong>Niveau 2 - Support :</strong> Services administratifs</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-quube-blue mr-3 mt-1"></i>
                  <span class="text-quube-gray-dark"><strong>Niveau 3 - Cœur métier :</strong> Soins & éducatif</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-quube-blue mr-3 mt-1"></i>
                  <span class="text-quube-gray-dark">Rapport actionnable sous 48h</span>
                </li>
              </ul>
              <a href="#contact" class="text-quube-blue font-bold inline-flex items-center group-hover:gap-3 transition-all">
                En savoir plus
                <i class="fas fa-arrow-right ml-2"></i>
              </a>
            </div>

            {/* Conférences & Sensibilisation */}
            <div class="group bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-quube-yellow hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div class="w-16 h-16 bg-quube-yellow rounded-xl flex items-center justify-center text-quube-black mb-6 group-hover:scale-110 transition-transform">
                <i class="fas fa-presentation text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold mb-4 text-quube-black">Conférences & Sensibilisation</h3>
              <p class="text-quube-gray-dark mb-6">
                Formats sur mesure avec démonstrations concrètes sur VOS cas d'usage : appels à projets, analyses territoriales, veille réglementaire.
              </p>
              <ul class="space-y-3 mb-6">
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-quube-yellow-dark mr-3 mt-1"></i>
                  <span class="text-quube-gray-dark"><strong>Format 2h :</strong> Tous personnels (bases IA)</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-quube-yellow-dark mr-3 mt-1"></i>
                  <span class="text-quube-gray-dark"><strong>Format CODIR :</strong> Dirigeants + démos live</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-quube-yellow-dark mr-3 mt-1"></i>
                  <span class="text-quube-gray-dark">Cas d'usage sectoriels préparés</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-quube-yellow-dark mr-3 mt-1"></i>
                  <span class="text-quube-gray-dark">Démonstrations personnalisées</span>
                </li>
              </ul>
              <a href="#contact" class="text-quube-black font-bold inline-flex items-center group-hover:gap-3 transition-all">
                En savoir plus
                <i class="fas fa-arrow-right ml-2"></i>
              </a>
            </div>

            {/* Accompagnement Technique */}
            <div class="group bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-quube-yellow hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div class="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                <i class="fas fa-cogs text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold mb-4 text-quube-black">Accompagnement Technique</h3>
              <p class="text-quube-gray-dark mb-6">
                Formations spécialisées sur vos outils actuels et accompagnement sur les technologies avancées (agents IA, no-code, automatisation).
              </p>
              <ul class="space-y-3 mb-6">
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-gray-800 mr-3 mt-1"></i>
                  <span class="text-quube-gray-dark">Perfectionnement ChatGPT, Claude, Gemini</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-gray-800 mr-3 mt-1"></i>
                  <span class="text-quube-gray-dark">Outils avancés : GenSpark, vidéo IA</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-gray-800 mr-3 mt-1"></i>
                  <span class="text-quube-gray-dark">Agents IA, MCP, no-code (N8n)</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-gray-800 mr-3 mt-1"></i>
                  <span class="text-quube-gray-dark">Automatisation métier sur mesure</span>
                </li>
              </ul>
              <a href="#contact" class="text-gray-800 font-bold inline-flex items-center group-hover:gap-3 transition-all">
                En savoir plus
                <i class="fas fa-arrow-right ml-2"></i>
              </a>
            </div>

            {/* Cas d'Usage Métiers */}
            <div class="group bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-quube-yellow hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div class="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center text-quube-black mb-6 group-hover:scale-110 transition-transform">
                <i class="fas fa-briefcase text-2xl"></i>
              </div>
              <h3 class="text-2xl font-bold mb-4 text-quube-black">Cas d'Usage Métiers</h3>
              <p class="text-quube-gray-dark mb-6">
                Solutions IA personnalisées par métier : DRH, DAF, DG, directeurs d'établissements, équipes de soins et éducatives.
              </p>
              <ul class="space-y-3 mb-6">
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-quube-black mr-3 mt-1"></i>
                  <span class="text-quube-gray-dark">DRH - Recrutement & RH</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-quube-black mr-3 mt-1"></i>
                  <span class="text-quube-gray-dark">DAF - Finance & Gestion</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-quube-black mr-3 mt-1"></i>
                  <span class="text-quube-gray-dark">DG - Vision stratégique</span>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-check-circle text-quube-black mr-3 mt-1"></i>
                  <span class="text-quube-gray-dark">Équipes soins/éducatives</span>
                </li>
              </ul>
              <a href="#cas-usage" class="text-quube-black font-bold inline-flex items-center group-hover:gap-3 transition-all">
                Voir les cas d'usage
                <i class="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section Cas d'Usage Métiers */}
      <section id="cas-usage" class="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-4">
              Cas d'Usage <span class="text-quube-blue">par Métier</span>
            </h2>
            <p class="text-xl text-quube-gray-dark max-w-3xl mx-auto">
              Des solutions IA concrètes et opérationnelles adaptées à chaque fonction de votre organisation de santé
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-8 mb-12">
            {/* DRH */}
            <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
              <div class="flex items-center mb-6">
                <div class="w-14 h-14 bg-quube-yellow/20 rounded-lg flex items-center justify-center mr-4">
                  <i class="fas fa-user-tie text-quube-blue text-2xl"></i>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-quube-black">Directeur RH (DRH)</h3>
                  <p class="text-quube-gray">Optimisation des processus RH</p>
                </div>
              </div>
              <ul class="space-y-4">
                <li class="flex items-start">
                  <i class="fas fa-robot text-quube-blue mr-3 mt-1"></i>
                  <div>
                    <div class="font-semibold text-quube-black">Rédaction d'offres d'emploi</div>
                    <div class="text-sm text-quube-gray">Génération automatique adaptée au secteur santé</div>
                  </div>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-robot text-quube-blue mr-3 mt-1"></i>
                  <div>
                    <div class="font-semibold text-quube-black">Tri & analyse de CV</div>
                    <div class="text-sm text-quube-gray">Présélection intelligente des candidatures</div>
                  </div>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-robot text-quube-blue mr-3 mt-1"></i>
                  <div>
                    <div class="font-semibold text-quube-black">Formation & onboarding</div>
                    <div class="text-sm text-quube-gray">Parcours personnalisés assistés par IA</div>
                  </div>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-robot text-quube-blue mr-3 mt-1"></i>
                  <div>
                    <div class="font-semibold text-quube-black">Gestion des compétences</div>
                    <div class="text-sm text-quube-gray">Cartographie et développement RH</div>
                  </div>
                </li>
              </ul>
            </div>

            {/* DAF */}
            <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
              <div class="flex items-center mb-6">
                <div class="w-14 h-14 bg-quube-yellow/20 rounded-lg flex items-center justify-center mr-4">
                  <i class="fas fa-chart-line text-gray-900 text-2xl"></i>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-quube-black">Directeur Finance (DAF)</h3>
                  <p class="text-quube-gray">Intelligence financière & reporting</p>
                </div>
              </div>
              <ul class="space-y-4">
                <li class="flex items-start">
                  <i class="fas fa-robot text-quube-black mr-3 mt-1"></i>
                  <div>
                    <div class="font-semibold text-quube-black">Analyse budgétaire prédictive</div>
                    <div class="text-sm text-quube-gray">Anticipation des écarts et optimisation</div>
                  </div>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-robot text-quube-black mr-3 mt-1"></i>
                  <div>
                    <div class="font-semibold text-quube-black">Reporting automatisé</div>
                    <div class="text-sm text-quube-gray">Tableaux de bord intelligents en temps réel</div>
                  </div>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-robot text-quube-black mr-3 mt-1"></i>
                  <div>
                    <div class="font-semibold text-quube-black">Détection d'anomalies</div>
                    <div class="text-sm text-quube-gray">Identification automatique des risques financiers</div>
                  </div>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-robot text-quube-black mr-3 mt-1"></i>
                  <div>
                    <div class="font-semibold text-quube-black">Optimisation des coûts</div>
                    <div class="text-sm text-quube-gray">Recommandations IA pour réduction des dépenses</div>
                  </div>
                </li>
              </ul>
            </div>

            {/* DG */}
            <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
              <div class="flex items-center mb-6">
                <div class="w-14 h-14 bg-quube-yellow/20 rounded-lg flex items-center justify-center mr-4">
                  <i class="fas fa-chess-king text-gray-800 text-2xl"></i>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-quube-black">Direction Générale (DG)</h3>
                  <p class="text-quube-gray">Vision stratégique & innovation</p>
                </div>
              </div>
              <ul class="space-y-4">
                <li class="flex items-start">
                  <i class="fas fa-robot text-quube-black mr-3 mt-1"></i>
                  <div>
                    <div class="font-semibold text-quube-black">Veille stratégique augmentée</div>
                    <div class="text-sm text-quube-gray">Analyse des tendances santé et réglementation</div>
                  </div>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-robot text-quube-black mr-3 mt-1"></i>
                  <div>
                    <div class="font-semibold text-quube-black">Aide à la décision</div>
                    <div class="text-sm text-quube-gray">Simulation de scenarios et recommandations</div>
                  </div>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-robot text-quube-black mr-3 mt-1"></i>
                  <div>
                    <div class="font-semibold text-quube-black">Innovation services</div>
                    <div class="text-sm text-quube-gray">Design thinking assisté par IA</div>
                  </div>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-robot text-quube-black mr-3 mt-1"></i>
                  <div>
                    <div class="font-semibold text-quube-black">Communication institutionnelle</div>
                    <div class="text-sm text-quube-gray">Rédaction de discours et rapports stratégiques</div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Directeurs d'Établissement */}
            <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
              <div class="flex items-center mb-6">
                <div class="w-14 h-14 bg-quube-yellow/20 rounded-lg flex items-center justify-center mr-4">
                  <i class="fas fa-building text-gray-900 text-2xl"></i>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-quube-black">Directeurs d'Établissement</h3>
                  <p class="text-quube-gray">Gestion opérationnelle optimisée</p>
                </div>
              </div>
              <ul class="space-y-4">
                <li class="flex items-start">
                  <i class="fas fa-robot text-quube-black mr-3 mt-1"></i>
                  <div>
                    <div class="font-semibold text-quube-black">Planning & ressources</div>
                    <div class="text-sm text-quube-gray">Optimisation automatique des plannings soignants</div>
                  </div>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-robot text-quube-black mr-3 mt-1"></i>
                  <div>
                    <div class="font-semibold text-quube-black">Gestion administrative</div>
                    <div class="text-sm text-quube-gray">Automatisation des tâches répétitives</div>
                  </div>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-robot text-quube-black mr-3 mt-1"></i>
                  <div>
                    <div class="font-semibold text-quube-black">Satisfaction usagers</div>
                    <div class="text-sm text-quube-gray">Analyse de feedback et amélioration continue</div>
                  </div>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-robot text-quube-black mr-3 mt-1"></i>
                  <div>
                    <div class="font-semibold text-quube-black">Conformité & qualité</div>
                    <div class="text-sm text-quube-gray">Assistance certification et audits qualité</div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Équipes de Soins */}
            <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
              <div class="flex items-center mb-6">
                <div class="w-14 h-14 bg-quube-yellow/20 rounded-lg flex items-center justify-center mr-4">
                  <i class="fas fa-heartbeat text-gray-700 text-2xl"></i>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-quube-black">Équipes de Soins</h3>
                  <p class="text-quube-gray">Focus patient & qualité des soins</p>
                </div>
              </div>
              <ul class="space-y-4">
                <li class="flex items-start">
                  <i class="fas fa-robot text-gray-700 mr-3 mt-1"></i>
                  <div>
                    <div class="font-semibold text-quube-black">Documentation médicale</div>
                    <div class="text-sm text-quube-gray">Rédaction assistée de comptes-rendus</div>
                  </div>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-robot text-gray-700 mr-3 mt-1"></i>
                  <div>
                    <div class="font-semibold text-quube-black">Protocoles de soins</div>
                    <div class="text-sm text-quube-gray">Recommandations personnalisées par pathologie</div>
                  </div>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-robot text-gray-700 mr-3 mt-1"></i>
                  <div>
                    <div class="font-semibold text-quube-black">Formation continue</div>
                    <div class="text-sm text-quube-gray">Veille médicale et mises à jour protocoles</div>
                  </div>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-robot text-gray-700 mr-3 mt-1"></i>
                  <div>
                    <div class="font-semibold text-quube-black">Communication patient</div>
                    <div class="text-sm text-quube-gray">Explications adaptées au niveau de compréhension</div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Équipes Éducatives */}
            <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all">
              <div class="flex items-center mb-6">
                <div class="w-14 h-14 bg-quube-yellow/20 rounded-lg flex items-center justify-center mr-4">
                  <i class="fas fa-hands-helping text-gray-900 text-2xl"></i>
                </div>
                <div>
                  <h3 class="text-2xl font-bold text-quube-black">Équipes Éducatives</h3>
                  <p class="text-quube-gray">Accompagnement personnalisé</p>
                </div>
              </div>
              <ul class="space-y-4">
                <li class="flex items-start">
                  <i class="fas fa-robot text-quube-black mr-3 mt-1"></i>
                  <div>
                    <div class="font-semibold text-quube-black">Projets personnalisés</div>
                    <div class="text-sm text-quube-gray">Assistance rédaction PAP, PPS, projets individuels</div>
                  </div>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-robot text-quube-black mr-3 mt-1"></i>
                  <div>
                    <div class="font-semibold text-quube-black">Activités adaptées</div>
                    <div class="text-sm text-quube-gray">Génération d'idées d'activités par profil</div>
                  </div>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-robot text-quube-black mr-3 mt-1"></i>
                  <div>
                    <div class="font-semibold text-quube-black">Documentation éducative</div>
                    <div class="text-sm text-quube-gray">Synthèses, rapports et bilans automatisés</div>
                  </div>
                </li>
                <li class="flex items-start">
                  <i class="fas fa-robot text-quube-black mr-3 mt-1"></i>
                  <div>
                    <div class="font-semibold text-quube-black">Communication familles</div>
                    <div class="text-sm text-quube-gray">Rédaction de courriers et comptes-rendus</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="text-center">
            <a href="#contact" class="inline-flex items-center bg-gray-900 text-white px-8 py-4 rounded-full hover:shadow-xl transition-all font-semibold text-lg">
              Discuter de vos besoins métiers
              <i class="fas fa-arrow-right ml-3"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Section Notre Approche */}
      <section id="approche" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-4">
              Notre <span class="text-quube-blue">Approche</span>
            </h2>
            <p class="text-xl text-quube-gray-dark max-w-3xl mx-auto">
              Une méthodologie éprouvée qui conjugue expertise sectorielle, innovation technologique et accompagnement humain
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-8 mb-16">
            <div class="text-center p-8">
              <div class="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-lg">
                <span class="text-3xl font-bold">1</span>
              </div>
              <h3 class="text-xl font-bold mb-4 text-quube-black">Diagnostic Personnalisé</h3>
              <p class="text-quube-gray">
                Audit de vos besoins, analyse de maturité IA et identification des opportunités spécifiques à votre organisation.
              </p>
            </div>

            <div class="text-center p-8">
              <div class="w-20 h-20 bg-gray-900 rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-lg">
                <span class="text-3xl font-bold">2</span>
              </div>
              <h3 class="text-xl font-bold mb-4 text-quube-black">Accompagnement Sur Mesure</h3>
              <p class="text-quube-gray">
                Formation, coaching et conseil adaptés à chaque métier avec des cas d'usage concrets du secteur santé.
              </p>
            </div>

            <div class="text-center p-8">
              <div class="w-20 h-20 bg-gradient-to-br from-accent to-cyan-600 rounded-full flex items-center justify-center text-white mx-auto mb-6 shadow-lg">
                <span class="text-3xl font-bold">3</span>
              </div>
              <h3 class="text-xl font-bold mb-4 text-quube-black">Déploiement Durable</h3>
              <p class="text-quube-gray">
                Suivi continu, mesure du ROI et optimisation pour garantir une adoption pérenne et des résultats tangibles.
              </p>
            </div>
          </div>

          {/* Singularité QUUBE */}
          <div class="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12">
            <div class="max-w-4xl mx-auto">
              <div class="text-center mb-8">
                <span class="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                  <i class="fas fa-star mr-2"></i>Notre Singularité
                </span>
              </div>
              <h3 class="text-3xl font-bold text-center mb-8 text-quube-black">
                L'IA au Service de Vos Missions de Conseil
              </h3>
              <p class="text-lg text-gray-700 leading-relaxed mb-8 text-center">
                Contrairement aux approches classiques, QUUBE <strong>utilise l'IA générative directement dans vos projets stratégiques</strong> : transformation de l'offre, réorganisation de services, design de nouvelles solutions, gestion de projets complexes.
              </p>
              <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-white rounded-xl p-6 shadow-md">
                  <div class="flex items-start">
                    <i class="fas fa-check-circle text-quube-blue text-2xl mr-4 mt-1"></i>
                    <div>
                      <h4 class="font-bold text-gray-800 mb-2">Conseil Augmenté par IA</h4>
                      <p class="text-gray-600 text-sm">Nous utilisons l'IA pour accélérer et enrichir nos missions de conseil stratégique</p>
                    </div>
                  </div>
                </div>
                <div class="bg-white rounded-xl p-6 shadow-md">
                  <div class="flex items-start">
                    <i class="fas fa-check-circle text-gray-800 text-2xl mr-4 mt-1"></i>
                    <div>
                      <h4 class="font-bold text-gray-800 mb-2">Formation par la Pratique</h4>
                      <p class="text-gray-600 text-sm">Vos équipes apprennent l'IA en travaillant sur leurs vrais projets</p>
                    </div>
                  </div>
                </div>
                <div class="bg-white rounded-xl p-6 shadow-md">
                  <div class="flex items-start">
                    <i class="fas fa-check-circle text-gray-700 text-2xl mr-4 mt-1"></i>
                    <div>
                      <h4 class="font-bold text-gray-800 mb-2">Expertise Santé × IA</h4>
                      <p class="text-gray-600 text-sm">Double compétence unique en stratégie santé et technologies IA</p>
                    </div>
                  </div>
                </div>
                <div class="bg-white rounded-xl p-6 shadow-md">
                  <div class="flex items-start">
                    <i class="fas fa-check-circle text-gray-900 text-2xl mr-4 mt-1"></i>
                    <div>
                      <h4 class="font-bold text-gray-800 mb-2">Résultats Immédiats</h4>
                      <p class="text-gray-600 text-sm">Impact mesurable dès les premières semaines d'accompagnement</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Pourquoi Maintenant */}
      <section class="py-20 bg-gradient-to-br from-quube-black to-gray-900 text-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-4">
              Pourquoi Agir <span class="text-quube-blue">Maintenant ?</span>
            </h2>
            <p class="text-xl text-gray-300 max-w-3xl mx-auto">
              L'IA en santé n'est plus une option, c'est une responsabilité d'employeur et un enjeu de non-décrochage pour vos équipes
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="text-center">
              <div class="text-5xl font-bold text-quube-yellow mb-4">450+</div>
              <div class="text-lg font-semibold mb-2">Entreprises HealthTech</div>
              <div class="text-gray-400">en France en 2024</div>
            </div>
            <div class="text-center">
              <div class="text-5xl font-bold text-quube-yellow mb-4">76%</div>
              <div class="text-lg font-semibold mb-2">En croissance active</div>
              <div class="text-gray-400">Adoption accélérée de l'IA</div>
            </div>
            <div class="text-center">
              <div class="text-5xl font-bold text-quube-yellow mb-4">2030</div>
              <div class="text-lg font-semibold mb-2">France 2030</div>
              <div class="text-gray-400">Investissements massifs IA Santé</div>
            </div>
            <div class="text-center">
              <div class="text-5xl font-bold text-quube-yellow mb-4">100%</div>
              <div class="text-lg font-semibold mb-2">Priorité stratégique</div>
              <div class="text-gray-400">Health Data Hub & Ségur</div>
            </div>
          </div>

          <div class="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div class="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 class="text-2xl font-bold mb-4">Un Enjeu de Non-Décrochage</h3>
                <p class="text-gray-300 mb-4">
                  Ne pas maîtriser l'IA aujourd'hui, c'est risquer le décrochage de vos professionnels :
                </p>
                <ul class="space-y-3">
                  <li class="flex items-start">
                    <i class="fas fa-exclamation-triangle text-quube-yellow mr-3 mt-1"></i>
                    <span>Par rapport à la société et à leurs enfants</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-exclamation-triangle text-quube-yellow mr-3 mt-1"></i>
                    <span>Par rapport aux publics qu'ils accompagnent</span>
                  </li>
                  <li class="flex items-start">
                    <i class="fas fa-exclamation-triangle text-quube-yellow mr-3 mt-1"></i>
                    <span>Dans leur employabilité et évolution professionnelle</span>
                  </li>
                </ul>
              </div>
              <div class="bg-quube-yellow p-8 rounded-xl">
                <h4 class="text-2xl font-bold mb-4 text-quube-black">Responsabilité Employeur</h4>
                <p class="mb-6 text-quube-black">
                  Former vos équipes à l'IA, c'est assurer leur compétitivité et leur épanouissement professionnel dans un monde en transformation.
                </p>
                <a href="#contact" class="inline-flex items-center bg-quube-black text-white px-6 py-3 rounded-full font-bold hover:shadow-lg transition-all">
                  Protéger vos équipes
                  <i class="fas fa-shield-alt ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Blog IA Santé */}
      <section id="blog" class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-4">
              Blog <span class="text-quube-yellow">IA Santé</span>
            </h2>
            <p class="text-xl text-quube-gray-dark max-w-3xl mx-auto">
              Actualités, tendances et expertises sur l'Intelligence Artificielle dans le secteur santé : stratégie, coûts, architecture et cas d'usage métiers
            </p>
            <div class="mt-4 flex items-center justify-center space-x-6 text-sm">
              <span class="px-4 py-2 bg-quube-yellow/20 rounded-full text-quube-black font-bold">15 Articles</span>
              <span class="text-quube-gray">Pour Dirigeants, DSI, DRH, DAF</span>
            </div>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Article 1 - IA Révolution */}
            <article class="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-quube-yellow hover:shadow-2xl transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <span class="text-sm font-bold text-quube-blue">Transformation Digitale</span>
                <span class="text-sm text-quube-gray">5 min</span>
              </div>
              <div class="text-5xl mb-4">🌐</div>
              <h3 class="text-xl font-bold mb-3 text-quube-black">
                L'IA générative dans le médico-social : une révolution comparable à Internet
              </h3>
              <p class="text-quube-gray-dark mb-4 text-sm">
                Comme Internet dans les années 2000, l'IA générative s'impose dans tous les secteurs. Découvrez pourquoi le médico-social ne peut plus ignorer cette vague.
              </p>
              <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                <span class="text-xs text-quube-gray">21 Jan 2025</span>
                <a href="#" class="text-quube-blue font-bold text-sm hover:underline">Lire l'article →</a>
              </div>
            </article>

            {/* Article 2 - Productivité */}
            <article class="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-quube-yellow hover:shadow-2xl transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <span class="text-sm font-bold text-quube-blue">ROI & Performance</span>
                <span class="text-sm text-quube-gray">4 min</span>
              </div>
              <div class="text-5xl mb-4">⚡</div>
              <h3 class="text-xl font-bold mb-3 text-quube-black">
                40-60 minutes économisées par jour : l'impact réel de l'IA sur la productivité
              </h3>
              <p class="text-quube-gray-dark mb-4 text-sm">
                Selon OpenAI (2025), les utilisateurs réguliers de ChatGPT économisent en moyenne 40 à 60 minutes par jour. Qu'est-ce que cela signifie pour votre établissement ?
              </p>
              <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                <span class="text-xs text-quube-gray">20 Jan 2025</span>
                <a href="#" class="text-quube-blue font-bold text-sm hover:underline">Lire l'article →</a>
              </div>
            </article>

            {/* Article 3 - Sécurité */}
            <article class="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-quube-yellow hover:shadow-2xl transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <span class="text-sm font-bold text-quube-blue">Sécurité & Conformité</span>
                <span class="text-sm text-quube-gray">6 min</span>
              </div>
              <div class="text-5xl mb-4">🔒</div>
              <h3 class="text-xl font-bold mb-3 text-quube-black">
                Sécurité et confidentialité : les bonnes pratiques IA en établissement de santé
              </h3>
              <p class="text-quube-gray-dark mb-4 text-sm">
                Utiliser l'IA en respectant le RGPD et la sécurité des données patients : un enjeu majeur pour le secteur santé. Les 5 règles d'or à appliquer immédiatement.
              </p>
              <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                <span class="text-xs text-quube-gray">19 Jan 2025</span>
                <a href="#" class="text-quube-blue font-bold text-sm hover:underline">Lire l'article →</a>
              </div>
            </article>

            {/* Article 4 - Communication */}
            <article class="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-quube-yellow hover:shadow-2xl transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <span class="text-sm font-bold text-quube-blue">Innovation Sociale</span>
                <span class="text-sm text-quube-gray">5 min</span>
              </div>
              <div class="text-5xl mb-4">💬</div>
              <h3 class="text-xl font-bold mb-3 text-quube-black">
                Communication augmentée : l'IA au service des personnes non communicantes
              </h3>
              <p class="text-quube-gray-dark mb-4 text-sm">
                Des applications mobiles aux dispositifs à commande oculaire : comment l'IA redonne une voix aux personnes polyhandicapées et autistes non verbales.
              </p>
              <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                <span class="text-xs text-quube-gray">18 Jan 2025</span>
                <a href="#" class="text-quube-blue font-bold text-sm hover:underline">Lire l'article →</a>
              </div>
            </article>

            {/* Article 5 - Histoire */}
            <article class="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-quube-yellow hover:shadow-2xl transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <span class="text-sm font-bold text-quube-blue">Perspective Historique</span>
                <span class="text-sm text-quube-gray">7 min</span>
              </div>
              <div class="text-5xl mb-4">📚</div>
              <h3 class="text-xl font-bold mb-3 text-quube-black">
                De l'écriture à ChatGPT : pourquoi nous avons toujours eu peur des révolutions technologiques
              </h3>
              <p class="text-quube-gray-dark mb-4 text-sm">
                « L'écriture rend les âmes oublieuses », s'inquiétait Platon il y a 25 siècles. Aujourd'hui, les mêmes craintes ressurgissent face à l'IA.
              </p>
              <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                <span class="text-xs text-quube-gray">17 Jan 2025</span>
                <a href="#" class="text-quube-blue font-bold text-sm hover:underline">Lire l'article →</a>
              </div>
            </article>

            {/* Article 6 - CODIR */}
            <article class="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-quube-yellow hover:shadow-2xl transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <span class="text-sm font-bold text-quube-blue">Management & Stratégie</span>
                <span class="text-sm text-quube-gray">5 min</span>
              </div>
              <div class="text-5xl mb-4">👔</div>
              <h3 class="text-xl font-bold mb-3 text-quube-black">
                IA et CODIR : comment sensibiliser efficacement votre comité de direction
              </h3>
              <p class="text-quube-gray-dark mb-4 text-sm">
                Votre CODIR est-il prêt pour l'IA ? Les clés d'une sensibilisation réussie pour embarquer dirigeants et managers dans la transformation.
              </p>
              <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                <span class="text-xs text-quube-gray">16 Jan 2025</span>
                <a href="#" class="text-quube-blue font-bold text-sm hover:underline">Lire l'article →</a>
              </div>
            </article>

            {/* Article 7 - Adoption */}
            <article class="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-quube-yellow hover:shadow-2xl transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <span class="text-sm font-bold text-quube-blue">Tendances 2025</span>
                <span class="text-sm text-quube-gray">4 min</span>
              </div>
              <div class="text-5xl mb-4">📈</div>
              <h3 class="text-xl font-bold mb-3 text-quube-black">
                75% d'adoption : l'IA n'est plus une option mais une nécessité stratégique
              </h3>
              <p class="text-quube-gray-dark mb-4 text-sm">
                Avec 75% d'adoption organisationnelle en 2025, l'IA devient un impératif stratégique. Les retardataires risquent le décrochage compétitif.
              </p>
              <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                <span class="text-xs text-quube-gray">15 Jan 2025</span>
                <a href="#" class="text-quube-blue font-bold text-sm hover:underline">Lire l'article →</a>
              </div>
            </article>

            {/* Article 8 - Cas d'usage */}
            <article class="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-quube-yellow hover:shadow-2xl transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <span class="text-sm font-bold text-quube-blue">Cas d'Usage Métiers</span>
                <span class="text-sm text-quube-gray">6 min</span>
              </div>
              <div class="text-5xl mb-4">💼</div>
              <h3 class="text-xl font-bold mb-3 text-quube-black">
                Cas d'usage concrets : comment l'IA transforme le quotidien des DRH et DAF
              </h3>
              <p class="text-quube-gray-dark mb-4 text-sm">
                Rédaction d'offres d'emploi, analyse de CV, reporting financier automatisé : découvrez comment l'IA révolutionne les fonctions support.
              </p>
              <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                <span class="text-xs text-quube-gray">14 Jan 2025</span>
                <a href="#" class="text-quube-blue font-bold text-sm hover:underline">Lire l'article →</a>
              </div>
            </article>

            {/* Article 9 - Guide */}
            <article class="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-quube-yellow hover:shadow-2xl transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <span class="text-sm font-bold text-quube-blue">Guide Complet</span>
                <span class="text-sm text-quube-gray">10 min</span>
              </div>
              <div class="text-5xl mb-4">📊</div>
              <h3 class="text-xl font-bold mb-3 text-quube-black">
                Bénéfices, risques et perspectives : le guide complet de l'IA en médico-social
              </h3>
              <p class="text-quube-gray-dark mb-4 text-sm">
                Bénéfices concrets, risques à anticiper, perspectives stratégiques : le guide de référence pour réussir votre transformation IA.
              </p>
              <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                <span class="text-xs text-quube-gray">13 Jan 2025</span>
                <a href="#" class="text-quube-blue font-bold text-sm hover:underline">Lire l'article →</a>
              </div>
            </article>

            {/* Article 10 - Coûts IA */}
            <article class="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-quube-yellow hover:shadow-2xl transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <span class="text-sm font-bold text-quube-blue bg-quube-yellow/20 px-3 py-1 rounded-full">Coûts & Budget</span>
                <span class="text-sm text-quube-gray">8 min</span>
              </div>
              <div class="text-5xl mb-4">💰</div>
              <h3 class="text-xl font-bold mb-3 text-quube-black">
                Le vrai coût de l'IA : licences, API tokens et modèles on-premise
              </h3>
              <p class="text-quube-gray-dark mb-4 text-sm">
                Licences ChatGPT Enterprise, API tokens GPT-4, modèles on-premise : décryptage complet des coûts IA pour DSI et DAF du secteur santé.
              </p>
              <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                <span class="text-xs text-quube-gray">29 Jan 2025</span>
                <a href="#" class="text-quube-blue font-bold text-sm hover:underline">Lire l'article →</a>
              </div>
            </article>

            {/* Article 11 - Coûts RH */}
            <article class="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-quube-yellow hover:shadow-2xl transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <span class="text-sm font-bold text-quube-blue bg-quube-yellow/20 px-3 py-1 rounded-full">Coûts & RH</span>
                <span class="text-sm text-quube-gray">7 min</span>
              </div>
              <div class="text-5xl mb-4">👥</div>
              <h3 class="text-xl font-bold mb-3 text-quube-black">
                Coûts de maintenance et développement IA : l'équation RH des DSI
              </h3>
              <p class="text-quube-gray-dark mb-4 text-sm">
                Au-delà des licences, les coûts RH représentent 60-70% du budget IA : data scientists, MLOps engineers. Comment optimiser votre équipe ?
              </p>
              <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                <span class="text-xs text-quube-gray">28 Jan 2025</span>
                <a href="#" class="text-quube-blue font-bold text-sm hover:underline">Lire l'article →</a>
              </div>
            </article>

            {/* Article 12 - API Éditeurs */}
            <article class="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-quube-yellow hover:shadow-2xl transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <span class="text-sm font-bold text-quube-blue bg-quube-yellow/20 px-3 py-1 rounded-full">Intégration</span>
                <span class="text-sm text-quube-gray">6 min</span>
              </div>
              <div class="text-5xl mb-4">🔌</div>
              <h3 class="text-xl font-bold mb-3 text-quube-black">
                Éditeurs qui ouvrent leurs API : opportunités et pièges pour les établissements
              </h3>
              <p class="text-quube-gray-dark mb-4 text-sm">
                De plus en plus d'éditeurs de logiciels métiers (DPI, ERP) ouvrent leurs API pour intégrer l'IA. Opportunités ? Risques de dépendance ?
              </p>
              <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                <span class="text-xs text-quube-gray">27 Jan 2025</span>
                <a href="#" class="text-quube-blue font-bold text-sm hover:underline">Lire l'article →</a>
              </div>
            </article>

            {/* Article 13 - Proxy & AI Gateway */}
            <article class="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-quube-yellow hover:shadow-2xl transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <span class="text-sm font-bold text-quube-blue bg-quube-yellow/20 px-3 py-1 rounded-full">Architecture</span>
                <span class="text-sm text-quube-gray">9 min</span>
              </div>
              <div class="text-5xl mb-4">🔐</div>
              <h3 class="text-xl font-bold mb-3 text-quube-black">
                Qu'est-ce qu'un Proxy IA, un AI Gateway et la pseudonymisation ?
              </h3>
              <p class="text-quube-gray-dark mb-4 text-sm">
                Proxy IA, AI Gateway, pseudonymisation : 3 briques essentielles pour sécuriser votre infrastructure IA. Concepts, solutions du marché.
              </p>
              <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                <span class="text-xs text-quube-gray">26 Jan 2025</span>
                <a href="#" class="text-quube-blue font-bold text-sm hover:underline">Lire l'article →</a>
              </div>
            </article>

            {/* Article 14 - Cloud vs On-Premise */}
            <article class="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-quube-yellow hover:shadow-2xl transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <span class="text-sm font-bold text-quube-blue bg-quube-yellow/20 px-3 py-1 rounded-full">Stratégie</span>
                <span class="text-sm text-quube-gray">10 min</span>
              </div>
              <div class="text-5xl mb-4">☁️</div>
              <h3 class="text-xl font-bold mb-3 text-quube-black">
                Cloud vs On-Premise vs Hybrid : guide de décision pour le déploiement IA
              </h3>
              <p class="text-quube-gray-dark mb-4 text-sm">
                Déployer l'IA dans le cloud, on-premise ou hybride ? Matrice de décision, critères de sélection et retours d'expérience santé.
              </p>
              <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                <span class="text-xs text-quube-gray">25 Jan 2025</span>
                <a href="#" class="text-quube-blue font-bold text-sm hover:underline">Lire l'article →</a>
              </div>
            </article>

            {/* Article 15 - Comparatif Plateformes */}
            <article class="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-quube-yellow hover:shadow-2xl transition-all duration-300">
              <div class="flex items-center justify-between mb-4">
                <span class="text-sm font-bold text-quube-blue bg-quube-yellow/20 px-3 py-1 rounded-full">Solutions 2025</span>
                <span class="text-sm text-quube-gray">12 min</span>
              </div>
              <div class="text-5xl mb-4">🏆</div>
              <h3 class="text-xl font-bold mb-3 text-quube-black">
                Solutions techniques du marché : comparatif 2025 des plateformes IA pour la santé
              </h3>
              <p class="text-quube-gray-dark mb-4 text-sm">
                Azure OpenAI, AWS Bedrock, Google Vertex AI, Mistral AI : comparatif détaillé des plateformes IA pour DSI santé. Prix, conformité, modèles.
              </p>
              <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                <span class="text-xs text-quube-gray">24 Jan 2025</span>
                <a href="#" class="text-quube-blue font-bold text-sm hover:underline">Lire l'article →</a>
              </div>
            </article>
          </div>

          {/* CTA Blog */}
          <div class="text-center mt-12">
            <a href="#contact" class="inline-flex items-center bg-quube-yellow text-quube-black px-8 py-4 rounded-full hover:bg-quube-yellow-neon transition-all shadow-lg hover:shadow-xl font-bold">
              Abonnez-vous à notre newsletter IA Santé
              <i class="fas fa-envelope ml-2"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Section Contact */}
      <section id="contact" class="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-4xl md:text-5xl font-bold mb-4">
              Démarrons Votre <span class="text-quube-blue">Transformation IA</span>
            </h2>
            <p class="text-xl text-quube-gray">
              Échangeons sur vos besoins et construisons ensemble votre stratégie IA personnalisée
            </p>
          </div>

          <div class="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <form class="space-y-6" id="contactForm">
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-semibold text-quube-black mb-2">Nom *</label>
                  <input type="text" name="nom" required class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-quube-blue focus:border-transparent transition-all" placeholder="Votre nom" />
                </div>
                <div>
                  <label class="block text-sm font-semibold text-quube-black mb-2">Prénom *</label>
                  <input type="text" name="prenom" required class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-quube-blue focus:border-transparent transition-all" placeholder="Votre prénom" />
                </div>
              </div>

              <div>
                <label class="block text-sm font-semibold text-quube-black mb-2">Email *</label>
                <input type="email" name="email" required class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-quube-blue focus:border-transparent transition-all" placeholder="votre.email@example.com" />
              </div>

              <div>
                <label class="block text-sm font-semibold text-quube-black mb-2">Téléphone</label>
                <input type="tel" name="telephone" class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-quube-blue focus:border-transparent transition-all" placeholder="06 12 34 56 78" />
              </div>

              <div>
                <label class="block text-sm font-semibold text-quube-black mb-2">Organisation *</label>
                <input type="text" name="organisation" required class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-quube-blue focus:border-transparent transition-all" placeholder="Nom de votre établissement" />
              </div>

              <div>
                <label class="block text-sm font-semibold text-quube-black mb-2">Type d'établissement *</label>
                <select name="type" required class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-quube-blue focus:border-transparent transition-all">
                  <option value="">Sélectionnez...</option>
                  <option value="hopital">Hôpital / Clinique</option>
                  <option value="ehpad">EHPAD</option>
                  <option value="handicap">Établissement Handicap</option>
                  <option value="enfance">Protection de l'Enfance</option>
                  <option value="medico-social">Autre Médico-social</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label class="block text-sm font-semibold text-quube-black mb-2">Fonction *</label>
                <select name="fonction" required class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-quube-blue focus:border-transparent transition-all">
                  <option value="">Sélectionnez...</option>
                  <option value="dg">Direction Générale</option>
                  <option value="directeur">Directeur d'Établissement</option>
                  <option value="drh">DRH</option>
                  <option value="daf">DAF</option>
                  <option value="medecin">Médecin</option>
                  <option value="cadre-sante">Cadre de Santé</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label class="block text-sm font-semibold text-quube-black mb-2">Votre besoin *</label>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                  <label class="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" name="besoins[]" value="formation" class="w-5 h-5 text-primary rounded focus:ring-quube-blue" />
                    <span class="text-sm">Formation</span>
                  </label>
                  <label class="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" name="besoins[]" value="coaching" class="w-5 h-5 text-primary rounded focus:ring-quube-blue" />
                    <span class="text-sm">Coaching</span>
                  </label>
                  <label class="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" name="besoins[]" value="conseil" class="w-5 h-5 text-primary rounded focus:ring-quube-blue" />
                    <span class="text-sm">Conseil</span>
                  </label>
                  <label class="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" name="besoins[]" value="audit" class="w-5 h-5 text-primary rounded focus:ring-quube-blue" />
                    <span class="text-sm">Audit</span>
                  </label>
                  <label class="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" name="besoins[]" value="seminaire" class="w-5 h-5 text-primary rounded focus:ring-quube-blue" />
                    <span class="text-sm">Séminaire</span>
                  </label>
                  <label class="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" name="besoins[]" value="autre" class="w-5 h-5 text-primary rounded focus:ring-quube-blue" />
                    <span class="text-sm">Autre</span>
                  </label>
                </div>
              </div>

              <div>
                <label class="block text-sm font-semibold text-quube-black mb-2">Message</label>
                <textarea name="message" rows="5" class="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-quube-blue focus:border-transparent transition-all" placeholder="Décrivez-nous votre projet et vos objectifs..."></textarea>
              </div>

              <div class="text-center">
                <button type="submit" class="bg-gray-900 text-white px-12 py-4 rounded-full hover:shadow-xl transition-all font-semibold text-lg inline-flex items-center">
                  Envoyer ma demande
                  <i class="fas fa-paper-plane ml-3"></i>
                </button>
              </div>

              <div id="formMessage" class="hidden mt-4 p-4 rounded-lg text-center"></div>
            </form>

            <div class="mt-12 pt-8 border-t border-gray-200">
              <div class="text-center mb-6">
                <h3 class="text-xl font-bold text-gray-800 mb-2">Ou contactez-nous directement</h3>
              </div>
              <div class="grid md:grid-cols-3 gap-6">
                <div class="text-center">
                  <div class="w-12 h-12 bg-quube-yellow/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <i class="fas fa-envelope text-quube-blue text-xl"></i>
                  </div>
                  <div class="font-semibold text-quube-black">Email</div>
                  <a href="mailto:contact@quube.fr" class="text-quube-blue hover:underline">contact@quube.fr</a>
                </div>
                <div class="text-center">
                  <div class="w-12 h-12 bg-quube-yellow/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <i class="fas fa-phone text-quube-blue text-xl"></i>
                  </div>
                  <div class="font-semibold text-quube-black">Téléphone</div>
                  <a href="tel:+33123456789" class="text-quube-blue hover:underline">01 23 45 67 89</a>
                </div>
                <div class="text-center">
                  <div class="w-12 h-12 bg-quube-yellow/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <i class="fas fa-calendar text-quube-blue text-xl"></i>
                  </div>
                  <div class="font-semibold text-quube-black">Rendez-vous</div>
                  <a href="https://calendly.com/quube" target="_blank" class="text-quube-blue hover:underline">Prendre RDV</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer class="bg-quube-black text-white py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="grid md:grid-cols-4 gap-8">
            <div>
              <div class="text-2xl font-bold mb-4">
                <span class="text-white">QUUBE</span>
                <span class="text-quube-gray mx-2">×</span>
                <span class="text-quube-yellow">IA Santé</span>
              </div>
              <p class="text-gray-400 mb-4">
                Conseil, formation et coaching en Intelligence Artificielle pour le secteur de la santé et du médico-social.
              </p>
            </div>
            <div>
              <h4 class="font-bold mb-4">Notre Offre</h4>
              <ul class="space-y-2 text-gray-400">
                <li><a href="#offre" class="hover:text-white transition-colors">Formations</a></li>
                <li><a href="#offre" class="hover:text-white transition-colors">Coaching</a></li>
                <li><a href="#offre" class="hover:text-white transition-colors">Conseil</a></li>
                <li><a href="#offre" class="hover:text-white transition-colors">Audits</a></li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold mb-4">Ressources</h4>
              <ul class="space-y-2 text-gray-400">
                <li><a href="#blog" class="hover:text-white transition-colors">Blog IA Santé</a></li>
                <li><a href="#cas-usage" class="hover:text-white transition-colors">Cas d'Usage</a></li>
                <li><a href="#approche" class="hover:text-white transition-colors">Notre Approche</a></li>
                <li><a href="#contact" class="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 class="font-bold mb-4">Contact</h4>
              <ul class="space-y-2 text-gray-400">
                <li class="flex items-center">
                  <i class="fas fa-envelope mr-2"></i>
                  <a href="mailto:contact@quube.fr" class="hover:text-white transition-colors">contact@quube.fr</a>
                </li>
                <li class="flex items-center">
                  <i class="fas fa-globe mr-2"></i>
                  <a href="https://www.quube.fr" class="hover:text-white transition-colors">www.quube.fr</a>
                </li>
              </ul>
              <div class="mt-4 flex space-x-4">
                <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-quube-yellow hover:text-quube-black transition-colors">
                  <i class="fab fa-linkedin"></i>
                </a>
                <a href="#" class="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-quube-yellow hover:text-quube-black transition-colors">
                  <i class="fab fa-twitter"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 QUUBE IA Santé. Tous droits réservés. | <a href="#" class="hover:text-white">Mentions légales</a> | <a href="#" class="hover:text-white">Politique de confidentialité</a></p>
          </div>
        </div>
      </footer>

      {/* Script pour le formulaire */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.getElementById('contactForm').addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData.entries());
            
            // Récupérer les checkboxes
            const besoins = Array.from(formData.getAll('besoins[]'));
            data.besoins = besoins;
            
            const messageDiv = document.getElementById('formMessage');
            
            try {
              const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
              });
              
              if (response.ok) {
                messageDiv.className = 'mt-4 p-4 rounded-lg text-center bg-gray-100 text-green-800';
                messageDiv.textContent = '✓ Merci ! Votre message a été envoyé avec succès. Nous vous contacterons rapidement.';
                messageDiv.classList.remove('hidden');
                e.target.reset();
              } else {
                throw new Error('Erreur lors de l\\'envoi');
              }
            } catch (error) {
              messageDiv.className = 'mt-4 p-4 rounded-lg text-center bg-red-100 text-red-800';
              messageDiv.textContent = '✗ Une erreur est survenue. Veuillez réessayer ou nous contacter directement par email.';
              messageDiv.classList.remove('hidden');
            }
            
            // Masquer le message après 5 secondes
            setTimeout(() => {
              messageDiv.classList.add('hidden');
            }, 5000);
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
    </>,
    { title: 'QUUBE IA Santé - Transformez votre organisation avec l\'IA Générative' }
  )
})

// Route API pour le formulaire de contact
app.post('/api/contact', async (c) => {
  try {
    const data = await c.req.json()
    
    // Ici, vous pouvez intégrer avec un service d'email (SendGrid, Mailgun, etc.)
    // Pour l'instant, on log juste les données
    console.log('Nouveau contact reçu:', data)
    
    // TODO: Envoyer un email avec les données du formulaire
    // Exemple avec un service externe via fetch API
    
    return c.json({ success: true, message: 'Message envoyé avec succès' })
  } catch (error) {
    return c.json({ success: false, message: 'Erreur lors de l\'envoi' }, 500)
  }
})

export default app
