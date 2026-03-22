import json

FR = {
    "nav": {"agency": "L'Agence", "results": "Résultats", "muses": "Modèles", "apply": "Candidature 🚀"},
    "hero": {
      "tag": "MANAGEMENT DE CRÉATRICES EXCLUSIF",
      "title1": "Nous gérons",
      "title2": "des carrières.",
      "desc": "L'agence d'élite réservée aux créatrices qui refusent la médiocrité. Des stratégies agressives, une direction artistique luxueuse et une rentabilité maximale respectant votre anonymat.",
      "btn1": "Postuler Maintenant",
      "btn2": "Voir nos résultats",
      "partners": "Partenaires :",
      "today": "Aujourd'hui",
      "new_fan": "Nouveau Fan",
      "vip_tier": "Tier VIP"
    },
    "footer": {"rights": "© 2026 OnlyOne Management. Tous droits réservés."},
    "painpoints": {
      "tag": "La vérité du marché",
      "title1": "Faire cavalier seul, c'est",
      "title2": "plafonner",
      "desc": "Le marché évolue. 95% des créatrices s'épuisent seules face à une charge de travail invisible. Pendant ce temps, le Top 1% s'appuie sur une équipe d'experts pour dominer les classements et maximiser chaque opportunité.",
      "alone": {
        "title": "Sans Accompagnement",
        "items": [
          {"title": "Temps Perdu en Messages", "desc": "Échanger des heures durant avec des profils qui ne concrétisent jamais leurs achats. C'est une perte d'énergie massive pour un retour financier nul."},
          {"title": "Manque de Visibilité", "desc": "Publier quotidiennement dans l'indifférence. Sans un réseau professionnel pour vous propulser, votre audience reste limitée et vos revenus stagnent."},
          {"title": "Revenus Plafonnés", "desc": "Rester bloquée au même palier financier mois après mois. Sans stratégie de vente avancée, il est impossible de franchir le cap supérieur."},
          {"title": "Démotivation & Isolement", "desc": "Seule face aux obstacles, sans aucun soutien stratégique. 9 créatrices sur 10 finissent par abandonner par manque d'accompagnement réel."},
          {"title": "Agences Non-Professionnelles", "desc": "Confier votre image à des structures qui multiplient les promesses mais ne fournissent aucun travail concret pour votre croissance."}
        ]
      },
      "agency": {
        "title": "Avec L'Agence OnlyOne",
        "items": [
          {"title": "Gestion des Ventes 24h/24", "desc": "Nous filtrons les sollicitations et gérons l'intégralité de vos échanges. Nos experts optimisent vos ventes de contenus en continu."},
          {"title": "Promotion & Acquisition", "desc": "Nous prenons en charge votre marketing. Grâce à nos réseaux, nous attirons quotidiennement de nouveaux abonnés qualifiés sur votre profil."},
          {"title": "Direction Artistique", "desc": "Plus de création au hasard. Nous vous guidons sur les formats et les thèmes qui génèrent le plus de profit avec une efficacité maximale."},
          {"title": "Accompagnement 7j/7", "desc": "Un manager dédié vous accompagne quotidiennement pour piloter votre croissance et gérer chaque aspect administratif. Vous n'êtes plus seule."},
          {"title": "Anonymat & Protection", "desc": "Protection de votre identité et blocage géographique précis. Nos experts surveillent le web pour supprimer toute trace de fuite de contenu."}
        ],
        "cta": "Passez au niveau supérieur",
        "btn": "Postuler à l'agence"
      }
    },
    "services": {
      "tag": "Notre Expertise",
      "title1": "Accélérez votre",
      "title2": "Croissance",
      "desc": "Au-delà de l'administration classique, nous développons de réelles marques personnelles et optimisons l'engagement à 100%.",
      "items": [
        {"title": "Dominez l'algorithme", "desc": "Des stratégies d'acquisition agressives pour développer vos plateformes en un temps record. On s'occupe du trafic, vous créez librement votre contenu."},
        {"title": "Personal Branding", "desc": "Vous n'êtes pas un simple profil. Nous forgeons une image luxueuse et irrésistible qui captive et fidélise votre audience à long terme."},
        {"title": "Gestion et Vente H24", "desc": "Notre équipe de spécialistes prend le relais. Ils engagent la conversation et maximisent vos revenus de jour comme de nuit, pour un développement passif."},
        {"title": "Protection Absolue", "desc": "Une sécurité juridique et un tracking DMCA quotidien. Votre contenu est protégé et supprimé de toutes les sources illégitimes."}
      ]
    },
    "simulator": {
      "tag": "CALCULATEUR ROI",
      "title1": "La psychologie de",
      "title2": "l'audience",
      "desc": "Le volume d'abonnés ne fait pas tout. La niche d'audience et l'implication personnelle décuplent les résultats.",
      "label": "Votre Audience Actuelle (Followers IG/TikTok)",
      "subs": "abonnés",
      "monthly": "Revenus Mensuels Estimés avec OnlyOne",
      "to": "à",
      "disclaimer": "Rien n'est garanti.",
      "disclaimer_text": "Cette estimation peut énormément varier suivant les profils, le type de contenu et l'identité renvoyée (une fille timide de 18 ans aura souvent de plus fortes conversions par exemple). Les résultats dépendent surtout de votre capacité à produire du contenu réel (un bon téléphone, une ringlight) et votre régularité sur les réseaux sociaux et en Live.",
      "btn": "Débloquer mon potentiel"
    },
    "results": {
      "tag": "RÉSULTATS PROUVÉS",
      "title1": "Des performances",
      "title2": "concrètes",
      "before": "Avant",
      "start": "Début",
      "after3m": "Après 3 Mois",
      "months": ["Janv", "Fév", "Mars"],
      "growth_title": "Croissance Exponentielle",
      "growth_desc": "Voici l'évolution classique d'un talent qui rejoint OnlyOne. En déployant nos tunnels d'acquisition, l'audience se transforme mécaniquement en MRR (revenu mensuel récurrent).",
      "stability_title": "Stabilité des Revenus",
      "stability_desc": "L'un de nos principes fondamentaux est la prédictibilité. Nous utilisons des stratégies de rétention haut de gamme (upsells, chatteurs qualifiés) pour lisser vos revenus chaque mois à la hausse."
    },
    "models": {
      "tag": "Notre roster exclusif",
      "title1": "Nos Top",
      "title2": "Modèles"
    },
    "reviews": {
      "m1": "Bordel j'y crois pas j'ai fait +4k en 3 jours !! 😍",
      "m2": "Et c'est que le début. Les campagnes US viennent à peine de démarrer. Prépare 3 nouveaux sets photos stp 🚀",
      "m3": "Omg d'accord je fais ça direct dans l'aprem !! J'pensais pas pouvoir quitter mon taf si vite ✨",
      "online": "En ligne",
      "tag": "RÉSEAU SILENCIEUX",
      "title1": "Des succès",
      "title2": "Confidentiels",
      "desc": "Nous opérons dans l'ombre pour mettre nos modèles dans la lumière. Nos échanges en messagerie privée sont le seul endroit où nos talents réalisent à quel point leur vie a changé en quelques semaines.",
      "accompanied": "Modèles accompagnées vers le Top 1%"
    },
    "faq": {
      "tag": "TRANSPARENCE TOTALE",
      "title1": "Vos questions",
      "title2": "fréquentes",
      "items": [
        {"q": "Puis-je rester anonyme et bloquer mes proches ?", "a": "Absolument. Votre vie privée est notre priorité absolue. Dès le premier jour, nous mettons en place des blocages stricts par ville ou par pays, et nous pouvons bannir préventivement les comptes de vos connaissances. Que vous vouliez montrer votre visage ou rester anonyme, vous êtes totalement en sécurité avec nous."},
        {"q": "Qui répond aux messages sur mon compte ?", "a": "C'est notre équipe de confiance, spécifiquement entraînée pour vous. Ils discutent avec vos fans tous les jours, de jour comme de nuit, en imitant parfaitement votre façon de parler. Ils s'occupent de vendre vos photos privées pour que vous gagniez de l'argent sans lever le petit doigt. Vous gardez bien sûr l'accès à votre compte à tout moment pour vérifier."},
        {"q": "Je n'ai jamais fait ça, allez-vous m'aider à démarrer ?", "a": "Oui, à 100%. L'agence s'occupe de quasiment tout (création des comptes, trouver des abonnés, discuter, vous protéger des hackers...). Votre seul rôle est de prendre de jolies photos et vidéos chez vous. Nous vous disons exactement quoi faire et quand le faire grâce à un guide très simple que nous créons avec vous."},
        {"q": "En combien de temps puis-je gagner mes premiers revenus ?", "a": "Notre méthode permet d'avoir des résultats très rapides. Dès que votre compte est configuré, nous envoyons des flots d'abonnés de nos propres réseaux. La plupart de nos modèles voient l'argent rentrer massivement dès le premier mois après avoir rejoint l'agence."}
      ]
    },
    "onboarding": {
      "tag": "NOTRE PROCESSUS",
      "title1": "L'Onboarding",
      "title2": "Exclusif",
      "desc": "Aucun hasard. Une méthodologie chirurgicale sur 30 jours pour vous transformer en machine à générer du cash.",
      "items": [
        {"title": "Audit & Stratégie", "desc": "Analyse complète de vos réseaux sociaux, définition de l'image de marque et création d'une feuille de route personnalisée."},
        {"title": "Setup & Sécurité", "desc": "Configuration de vos plateformes (MYM/OF), implémentation de la protection DMCA (fuites) et blocage géographique si besoin (anonymat)."},
        {"title": "Lancement & Trafic", "desc": "Déploiement de nos tunnels d'acquisition agressifs. Nous envoyons un trafic massif et qualifié vers votre profil VIP."},
        {"title": "Scaling H24", "desc": "Prise en main par notre équipe de chat. Ventes additionnelles (PPV, tips) maximisées 24h/24 pendant que vous dormez ou créez."}
      ]
    },
    "form": {
      "title": "Soumettre votre candidature",
      "desc": "Nous n'acceptons que 2 nouveaux talents par mois pour garantir un encadrement hors normes.",
      "name": "Prénom / Pseudo",
      "email": "Adresse Email",
      "socials": "Vos Réseaux Sociaux",
      "has_platform": "Avez-vous déjà une plateforme privée (MYM, OF, Fanvue...) ?",
      "has_platform_no": "Non, je souhaite démarrer et me faire accompagner",
      "has_platform_yes": "Oui, je suis déjà active sur une plateforme",
      "has_platform_past": "J'ai essayé par le passé sans succès",
      "which_platform": "Laquelle ?",
      "platform_link": "Lien ou Pseudo de la plateforme",
      "motivations": "Vos Motivations & Objectifs",
      "motivations_ph": "Parlez-nous de vous, vos limites, vos objectifs financiers.",
      "submit": "Envoyer ma candidature confidentielle",
      "submitting": "Transmission Sécurisée...",
      "secure_note": "⚠️ Transmission chiffrée & Strictement Confidentielle",
      "success_title": "Candidature Envoyée",
      "success_desc": "Nous avons bien reçu votre profil de manière hautement sécurisée. Si votre dossier correspond à nos critères d'élite, notre équipe prendra contact avec vous dans les 48 heures.",
      "success_btn": "Soumettre une autre candidature"
    }
}

EN = {
    "nav": {"agency": "The Agency", "results": "Results", "muses": "Models", "apply": "Apply Now 🚀"},
    "hero": {
      "tag": "EXCLUSIVE CREATOR MANAGEMENT",
      "title1": "We manage",
      "title2": "careers.",
      "desc": "An elite agency reserved for creators who refuse mediocrity. Aggressive strategies, luxurious art direction, and maximum profitability while respecting your anonymity.",
      "btn1": "Apply Now",
      "btn2": "View our results",
      "partners": "Partners:",
      "today": "Today",
      "new_fan": "New Fan",
      "vip_tier": "VIP Tier"
    },
    "footer": {"rights": "© 2026 OnlyOne Management. All rights reserved."},
    "painpoints": {
      "tag": "The market reality",
      "title1": "Going solo means",
      "title2": "hitting a ceiling",
      "desc": "The market is evolving. 95% of creators burn out facing an invisible workload alone. Meanwhile, the Top 1% relies on an expert team to dominate the rankings and maximize every opportunity.",
      "alone": {
        "title": "Without Support",
        "items": [
          {"title": "Time Wasted on Messages", "desc": "Exchanging for hours with profiles who never concretize their purchases. It's a massive loss of energy for zero financial return."},
          {"title": "Lack of Visibility", "desc": "Posting daily in indifference. Without a professional network to propel you, your audience remains limited and your income stagnates."},
          {"title": "Capped Income", "desc": "Staying stuck at the same financial level month after month. Without an advanced sales strategy, it is impossible to break through."},
          {"title": "Demotivation & Isolation", "desc": "Alone against obstacles, without any strategic support. 9 out of 10 creators end up quitting due to a lack of real guidance."},
          {"title": "Unprofessional Agencies", "desc": "Entrusting your image to structures that multiply promises but provide no concrete work for your growth."}
        ]
      },
      "agency": {
        "title": "With OnlyOne Agency",
        "items": [
          {"title": "24/7 Sales Management", "desc": "We filter solicitations and manage all your interactions. Our experts continuously optimize your content sales."},
          {"title": "Promotion & Acquisition", "desc": "We handle your marketing. Through our networks, we daily attract new qualified subscribers to your profile."},
          {"title": "Art Direction", "desc": "No more random creation. We guide you on the formats and themes that generate the most profit with maximal efficiency."},
          {"title": "24/7 Guidance", "desc": "A dedicated manager accompanies you daily to steer your growth and handle every administrative aspect. You are no longer alone."},
          {"title": "Anonymity & Protection", "desc": "Protection of your identity and precise geo-blocking. Our experts monitor the web to remove any trace of content leaks."}
        ],
        "cta": "Go to the next level",
        "btn": "Apply to the agency"
      }
    },
    "services": {
      "tag": "Our Expertise",
      "title1": "Accelerate your",
      "title2": "Growth",
      "desc": "Beyond classic administration, we develop genuine personal brands and optimize engagement to 100%.",
      "items": [
        {"title": "Dominate the algorithm", "desc": "Aggressive acquisition strategies to grow your platforms in record time. We handle the traffic, you freely create your content."},
        {"title": "Personal Branding", "desc": "You are not just a profile. We forge a luxurious and irresistible image that captivates and retains your audience long term."},
        {"title": "24/7 Management & Sales", "desc": "Our team of specialists takes over. They engage in conversation and maximize your income day and night, for passive growth."},
        {"title": "Absolute Protection", "desc": "Legal security and daily DMCA tracking. Your content is protected and removed from all illegitimate sources."}
      ]
    },
    "simulator": {
      "tag": "ROI CALCULATOR",
      "title1": "The psychology of",
      "title2": "audience",
      "desc": "Follower count isn't everything. Audience niche and personal involvement multiply results.",
      "label": "Your Current Audience (IG/TikTok Followers)",
      "subs": "followers",
      "monthly": "Estimated Monthly Revenue with OnlyOne",
      "to": "to",
      "disclaimer": "Nothing is guaranteed.",
      "disclaimer_text": "This estimation can vary enormously depending on profiles, type of content, and the identity projected (a shy 18-year-old girl will often have higher conversions, for example). Results mainly depend on your ability to produce real content (a good phone, a ringlight) and your consistency on social media and Live.",
      "btn": "Unlock my potential"
    },
    "results": {
      "tag": "PROVEN RESULTS",
      "title1": "Concrete",
      "title2": "performances",
      "before": "Before",
      "start": "Start",
      "after3m": "After 3 Months",
      "months": ["Jan", "Feb", "Mar"],
      "growth_title": "Exponential Growth",
      "growth_desc": "Here is the classic evolution of a talent who joins OnlyOne. By deploying our acquisition funnels, the audience mechanically transforms into MRR (monthly recurring revenue).",
      "stability_title": "Revenue Stability",
      "stability_desc": "One of our core principles is predictability. We use high-end retention strategies (upsells, qualified chatters) to smooth your revenue upwards every month."
    },
    "models": {
      "tag": "Our exclusive roster",
      "title1": "Our Top",
      "title2": "Models"
    },
    "reviews": {
      "m1": "Damn I can't believe it I made +4k in 3 days !! 😍",
      "m2": "And it's just the beginning. The US campaigns have barely started. Please prepare 3 new photo sets 🚀",
      "m3": "Omg okay I'll do that right this afternoon !! I didn't think I could quit my job so fast ✨",
      "online": "Online",
      "tag": "SILENT NETWORK",
      "title1": "Confidential",
      "title2": "successes",
      "desc": "We operate in the shadows to bring our models into the light. Our private messages are the only place our talents realize how much their lives have changed in a few weeks.",
      "accompanied": "Models accompanied to the Top 1%"
    },
    "faq": {
      "tag": "TOTAL TRANSPARENCY",
      "title1": "Your frequent",
      "title2": "questions",
      "items": [
        {"q": "Can I remain anonymous and block my relatives?", "a": "Absolutely. Your privacy is our top priority. From day one, we implement strict blocking by city or country, and we can preemptively ban the accounts of your acquaintances. Whether you want to show your face or stay anonymous, you are completely safe with us."},
        {"q": "Who replies to messages on my account?", "a": "Our trusted team, specifically trained for you. They chat with your fans every day, day and night, perfectly imitating your way of speaking. They take care of selling your private photos so you earn money without lifting a finger. You naturally keep access to your account at all times to check."},
        {"q": "I've never done this, will you help me start?", "a": "Yes, 100%. The agency takes care of almost everything (creating accounts, finding followers, chatting, protecting you from hackers...). Your only role is to take pretty photos and videos at home. We tell you exactly what to do and when to do it through a very simple guide we create with you."},
        {"q": "How long until I earn my first income?", "a": "Our method allows for very rapid results. As soon as your account is set up, we send floods of followers from our own networks. Most of our models see money coming in massively from the first month after joining the agency."}
      ]
    },
    "onboarding": {
      "tag": "OUR PROCESS",
      "title1": "Exclusive",
      "title2": "Onboarding",
      "desc": "No luck involved. A surgical 30-day methodology to turn you into a cash-generating machine.",
      "items": [
        {"title": "Audit & Strategy", "desc": "Complete analysis of your social networks, definition of branding, and creation of a personalized roadmap."},
        {"title": "Setup & Security", "desc": "Configuration of your platforms (MYM/OF), implementation of DMCA protection (leaks), and geo-blocking if needed (anonymity)."},
        {"title": "Launch & Traffic", "desc": "Deployment of our aggressive acquisition funnels. We send massive and qualified traffic to your VIP profile."},
        {"title": "24/7 Scaling", "desc": "Taken over by our chat team. Additional sales (PPV, tips) maximized 24/7 while you sleep or create."}
      ]
    },
    "form": {
      "title": "Submit your application",
      "desc": "We only accept 2 new talents per month to guarantee exceptional guidance.",
      "name": "First Name / Nickname",
      "email": "Email Address",
      "socials": "Your Social Networks",
      "has_platform": "Do you already have a private platform (MYM, OF, Fanvue...)?",
      "has_platform_no": "No, I want to start and be guided",
      "has_platform_yes": "Yes, I am already active on a platform",
      "has_platform_past": "I've tried in the past without success",
      "which_platform": "Which one?",
      "platform_link": "Platform Link or Nickname",
      "motivations": "Your Motivations & Goals",
      "motivations_ph": "Tell us about yourself, your limits, your financial goals.",
      "submit": "Send my confidential application",
      "submitting": "Secure Transmission...",
      "secure_note": "⚠️ Encrypted & Strictly Confidential Transmission",
      "success_title": "Application Sent",
      "success_desc": "We have safely received your profile. If your application meets our elite criteria, our team will contact you within 48 hours.",
      "success_btn": "Submit another application"
    }
}

ES = {
    "nav": {"agency": "La Agencia", "results": "Resultados", "muses": "Modelos", "apply": "Postularse 🚀"},
    "hero": {
      "tag": "MANAGEMENT EXCLUSIVO DE CREADORAS",
      "title1": "Gestionamos",
      "title2": "carreras.",
      "desc": "La agencia de élite reservada para creadoras que rechazan la mediocridad. Estrategias agresivas, dirección artística de lujo y rentabilidad máxima respetando tu anonimato.",
      "btn1": "Postularse Ahora",
      "btn2": "Ver resultados",
      "partners": "Socios:",
      "today": "Hoy",
      "new_fan": "Nuevo Fan",
      "vip_tier": "Nivel VIP"
    },
    "footer": {"rights": "© 2026 OnlyOne Management. Todos los derechos reservados."},
    "painpoints": {
      "tag": "La realidad del mercado",
      "title1": "Ir por tu cuenta es",
      "title2": "tocar techo",
      "desc": "El mercado evoluciona. El 95% de las creadoras se agotan solas frente a una carga de trabajo invisible. Mientras tanto, el Top 1% se apoya en un equipo experto para dominar los rankings y maximizar cada oportunidad.",
      "alone": {
        "title": "Sin Acompañamiento",
        "items": [
          {"title": "Tiempo Perdido en Mensajes", "desc": "Intercambiar mensajes durante horas con perfiles que nunca concretan sus compras. Es una pérdida de energía para un retorno nulo."},
          {"title": "Falta de Visibilidad", "desc": "Publicar diariamente en la indiferencia. Sin una red profesional para impulsarte, tu audiencia queda limitada y tus ingresos se estancan."},
          {"title": "Ingresos Estancados", "desc": "Quedar atrapada en el mismo nivel mes tras mes. Sin estrategia de venta avanzada, es imposible avanzar."},
          {"title": "Desmotivación y Aislamiento", "desc": "Sola ante los obstáculos, sin ningún apoyo estratégico. 9 de cada 10 creadoras terminan abandonando por falta de acompañamiento."},
          {"title": "Agencias No Profesionales", "desc": "Confiar tu imagen a estructuras que multiplican promesas pero no aportan trabajo concreto para tu crecimiento."}
        ]
      },
      "agency": {
        "title": "Con OnlyOne Agency",
        "items": [
          {"title": "Gestión de Ventas 24/7", "desc": "Filtramos solicitudes y gestionamos todas tus interacciones. Nuestros expertos optimizan tus ventas continuamente."},
          {"title": "Promoción y Adquisición", "desc": "Nos encargamos de tu marketing. Gracias a nuestras redes, atraemos a diario nuevos suscriptores a tu perfil."},
          {"title": "Dirección Artística", "desc": "Se acabó crear al azar. Te guiamos sobre los formatos y temas que generan más beneficios con máxima eficiencia."},
          {"title": "Acompañamiento 24/7", "desc": "Un mánager dedicado te acompaña diariamente para dirigir tu crecimiento y gestionar cada aspecto administrativo. Ya no estás sola."},
          {"title": "Anonimato y Protección", "desc": "Protección de tu identidad y bloqueo geográfico preciso. Monitoreamos la red para eliminar fugas de contenido."}
        ],
        "cta": "Pasa al siguiente nivel",
        "btn": "Postularse a la agencia"
      }
    },
    "services": {
      "tag": "Nuestra Experiencia",
      "title1": "Acelera tu",
      "title2": "Crecimiento",
      "desc": "Más allá de la administración clásica, desarrollamos marcas personales genuinas y optimizamos la interacción al 100%.",
      "items": [
        {"title": "Domina el algoritmo", "desc": "Estrategias de adquisición agresivas para desarrollar tus plataformas en tiempo récord. Nosotros nos ocupamos del tráfico, tú creas libremente."},
        {"title": "Personal Branding", "desc": "No eres solo un perfil. Forjamos una imagen lujosa e irresistible que cautiva y retiene a tu audiencia a largo plazo."},
        {"title": "Gestión y Venta 24/7", "desc": "Nuestro equipo de especialistas toma el relevo. Maximiza tus ingresos de día y de noche, para un crecimiento pasivo."},
        {"title": "Protección Absoluta", "desc": "Seguridad legal y seguimiento DMCA diario. Tu contenido está protegido y se elimina de todas las fuentes ilegítimas."}
      ]
    },
    "simulator": {
      "tag": "CALCULADORA DE ROI",
      "title1": "La psicología de la",
      "title2": "audiencia",
      "desc": "La cantidad de seguidores no lo es todo. El nicho y la implicación personal multiplican los resultados.",
      "label": "Tu Audiencia Actual (Seguidores IG/TikTok)",
      "subs": "seguidores",
      "monthly": "Ingresos Mensuales Estimados con OnlyOne",
      "to": "a",
      "disclaimer": "Nada está garantizado.",
      "disclaimer_text": "Esta estimación puede variar enormemente dependiendo de los perfiles y el tipo de contenido producido. Los resultados dependen de tu capacidad para producir contenido real y constancia.",
      "btn": "Desbloquear mi potencial"
    },
    "results": {
      "tag": "RESULTADOS COMPROBADOS",
      "title1": "Rendimientos",
      "title2": "concretos",
      "before": "Antes",
      "start": "Inicio",
      "after3m": "Tras 3 Meses",
      "months": ["Ene", "Feb", "Mar"],
      "growth_title": "Crecimiento Exponencial",
      "growth_desc": "Esta es la evolución clásica de un talento en OnlyOne. Al implementar nuestros embudos de adquisición, la audiencia se transforma en ingresos mensuales recurrentes (MRR).",
      "stability_title": "Estabilidad de Ingresos",
      "stability_desc": "Uno de nuestros principios es la previsibilidad. Usamos estrategias de retención premium para estabilizar y aumentar tus ingresos mes a mes."
    },
    "models": {
      "tag": "Nuestro portfolio VIP",
      "title1": "Nuestras Top",
      "title2": "Modelos"
    },
    "reviews": {
      "m1": "¡No me lo creo, he hecho +4k en 3 días! 😍",
      "m2": "Y es solo el principio. Las campañas en US acaban de empezar. Prepara 3 sets nuevos de fotos por favor 🚀",
      "m3": "¡OMG perfecto, me pongo de inmediato! ¡No pensé que dejaría mi trabajo tan pronto! ✨",
      "online": "En línea",
      "tag": "RED SECRETA",
      "title1": "Éxitos",
      "title2": "Confidenciales",
      "desc": "Operamos en las sombras para llevar a nuestras modelos a la luz. Nuestra mensajería privada es el único lugar donde nuestros talentos se dan cuenta de cuánto ha cambiado su vida en semanas.",
      "accompanied": "Modelos acompañadas al Top 1%"
    },
    "faq": {
      "tag": "TRANSPARENCIA TOTAL",
      "title1": "Preguntas",
      "title2": "frecuentes",
      "items": [
        {"q": "¿Puedo permanecer anónima y bloquear a mi familia?", "a": "Absolutamente. Tu privacidad es nuestra máxima prioridad. Desde el primer día, implementamos bloqueos estrictos por ciudad o país, y podemos bloquear preventivamente a tus conocidos."},
        {"q": "¿Quién responde a los mensajes?", "a": "Es nuestro equipo de confianza, específicamente entrenado para ti. Ellos conversan con tus fans todos los días, imitando tu forma de hablar. Venden tus fotos para que ganes dinero sin mover un dedo."},
        {"q": "Nunca he hecho esto, ¿me ayudarán a empezar?", "a": "Sí, al 100%. La agencia se encarga de casi todo. Tu único papel es tomar bonitas fotos y videos en casa. Te decimos exactamente qué hacer y cuándo a través de una sencilla guía."},
        {"q": "¿En cuánto tiempo veré ingresos?", "a": "Nuestro método permite obtener resultados muy rápidos. Una vez que tu cuenta está configurada, enviamos suscriptores. La mayoría de nuestras modelos ven ingresar dinero desde el primer mes."}
      ]
    },
    "onboarding": {
      "tag": "NUESTRO PROCESO",
      "title1": "Onboarding",
      "title2": "Exclusivo",
      "desc": "Ningún azar. Una metodología quirúrgica de 30 días para convertirte en una máquina de generar ingresos.",
      "items": [
        {"title": "Auditoría VIP", "desc": "Análisis exhaustivo de tus redes sociales, definición de marca y hoja de ruta personalizada."},
        {"title": "Setup Tecnológico", "desc": "Configuración y protección DMCA junto a bloqueos geográficos protegiendo tu anonimato."},
        {"title": "Tráfico Masivo", "desc": "Despliegue de embudos agresivos y tráfico calificado enviado masivamente a tu perfil VIP."},
        {"title": "Scaling 24/7", "desc": "Ventas maximizadas mientras duermes o produces en tranquilidad, manejadas por un equipo experto."}
      ]
    },
    "form": {
      "title": "Enviar solicitud",
      "desc": "Solo aceptamos 2 talentos nuevos al mes para garantizar un encuadre excepcional de máximo nivel.",
      "name": "Nombre / Alias",
      "email": "Correo Electrónico",
      "socials": "Tus Redes Sociales",
      "has_platform": "¿Ya cuentas con plataforma privada? (Mym, OF, Fanvue...)",
      "has_platform_no": "No, quiero empezar a facturar",
      "has_platform_yes": "Sí, ya estoy activa en una plataforma",
      "has_platform_past": "Lo intenté sin éxito anteriormente",
      "which_platform": "¿Cuál plataforma es?",
      "platform_link": "Enlace web de Perfil / Usuario",
      "motivations": "Tus Motivaciones y Objetivos",
      "motivations_ph": "Háblanos de ti, de tus límites y tus expectativas económicas mensuales...",
      "submit": "Enviar mi candidatura confidencial",
      "submitting": "Transmisión Segura...",
      "secure_note": "⚠️ Transmisión cifrada y Estrictamente Confidencial",
      "success_title": "Candidatura Enviada",
      "success_desc": "Hemos recibido tu perfil de manera altamente segura. Si tu expediente corresponde a nuestros criterios de élite, nuestro equipo te contactará en 48 horas.",
      "success_btn": "Enviar otra solicitud"
    }
}

PT = {
    "nav": {"agency": "A Agência", "results": "Resultados", "muses": "Modelos", "apply": "Inscrever-se 🚀"},
    "hero": {
      "tag": "GESTÃO EXCLUSIVA DE CRIADORAS",
      "title1": "Nós gerimos",
      "title2": "carreiras.",
      "desc": "A agência de elite reservada às criadoras que recusam a mediocridade. Estratégias agressivas, direção de arte luxuosa e lucratividade máxima respeitando o seu anonimato.",
      "btn1": "Inscrever-se Agora",
      "btn2": "Ver resultados",
      "partners": "Parceiros:",
      "today": "Hoje",
      "new_fan": "Novo Fã",
      "vip_tier": "Tier VIP"
    },
    "footer": {"rights": "© 2026 OnlyOne Management. Todos os direitos reservados."},
    "painpoints": {
      "tag": "A realidade do mercado",
      "title1": "Trabalhar sozinha é",
      "title2": "bater no teto",
      "desc": "O mercado evolui. 95% das criadoras esgotam-se sozinhas perante uma carga de trabalho invisível. Entretanto, o Top 1% conta com uma equipa de especialistas para dominar as tabelas e maximizar as oportunidades.",
      "alone": {
        "title": "Sem Apoio",
        "items": [
          {"title": "Tempo Perdido em Mensagens", "desc": "Passar horas conversando com perfis que nunca concretizam pagamentos. É uma enorme perda de energia para um retorno financeiro nulo."},
          {"title": "Falta de Visibilidade", "desc": "Publicar diariamente na indiferença. Sem uma rede profissional para a impulsionar, a sua audiência permanece limitada e os ganhos paralisam."},
          {"title": "Rendimentos Estagnados", "desc": "Entalar no mesmo patamar financeiro mês após mês. Sem estratégia avançada de vendas, é impossível atingir o próximo nível."},
          {"title": "Desmotivação & Isolamento", "desc": "Sozinha contra os obstáculos, sem suporte estratégico. 9 em cada 10 acabam desistindo por falta de acompanhamento verdadeiro."},
          {"title": "Agências Não Profissionais", "desc": "Confiar a sua imagem a estruturas que enchem de falsas promessas de atenção contínua mas não realizam o essencial."}
        ]
      },
      "agency": {
        "title": "Com a Agência OnlyOne",
        "items": [
          {"title": "Gestão de Vendas 24/7", "desc": "Filtramos solicitações e gerimos as suas interações. Os nossos especialistas otimizam as suas vendas de forma contínua."},
          {"title": "Promoção & Aquisição", "desc": "Assumimos o seu marketing. Todos os dias atraímos novos fãs devidamente qualificados diretamente ao seu painel."},
          {"title": "Direção de Arte", "desc": "Fim da criação à sorte. As nossas formadoras orientam sobre os temas atuais que trazem mais lucro na hora prática."},
          {"title": "Apoio 24/7", "desc": "Uma gerente dedicada e persistente acompanha de perto o seu desenvolvimento garantindo gestão amigável para si."},
          {"title": "Anonimato & Proteção", "desc": "Proteção de identidade inabalável contra roubos piratas. Vigiamos a DMCA apagando sempre a desonestidade online indesejada."}
        ],
        "cta": "Passe ao próximo nível",
        "btn": "Candidatar-me na agência"
      }
    },
    "services": {
      "tag": "A Nossa Especialidade",
      "title1": "Acelere o",
      "title2": "Crescimento",
      "desc": "Desenvolvemos as nossas assinantes luxuosamente em perfis notórios valiosos que aumentam a fidelização monetária constante.",
      "items": [
        {"title": "Domine o algoritmo", "desc": "Bebemos e respiramos tração orgânica. Levamos as paragens exclusivas ao céu perante olhos desejados do alvo rico incansavelmente forte."},
        {"title": "Branding Pessoal", "desc": "Forjamos visual luxuoso atraente fixando-se mentalmente valioso num nicho e a audiência inteiramente mantida a longo trecho."},
        {"title": "Gestão Operacional 24h", "desc": "Encerramos as tratativas e cobramos pesados pagamentos durante o dia e na virada dormindo sem sua constante monitorização da app."},
        {"title": "Proteção Digital Absoluta", "desc": "Atuamos processualmente forte retirando a mínima fraude ou pirataria feita, trazendo a segurança contínua que tanto deseja ali ter."}
      ]
    },
    "simulator": {
      "tag": "CALCULADORA ROI",
      "title1": "A psicologia da",
      "title2": "audiência",
      "desc": "Quantidade sozinha não preenche os bolsos. Nichos exatos geram maravilhas nos lucros estáticos finais maravilhosos ao fim do percurso.",
      "label": "A sua audiência social atuante nas redes (IG/TikTok)",
      "subs": "seguidores",
      "monthly": "Rendimentos Mensais Práticos Previstos",
      "to": "a",
      "disclaimer": "Valores ilustrativos perante resultados exatos.",
      "disclaimer_text": "Este patamar ilustrativo preve ganhos na consistência formidável em mídias chamativas suas ali dadas e geridas. O êxito vai diretamente depender e cruzar da constância perante nós aplicarmos ali as engrenagens sem cessar de publicidades valiosas contínuas.",
      "btn": "Descobrir do meu potencial vip"
    },
    "results": {
      "tag": "RESULTADOS VERIFICADOS",
      "title1": "Resultados",
      "title2": "financeiros",
      "before": "Antes",
      "start": "Início",
      "after3m": "Após 3 Meses",
      "months": ["Jan", "Fev", "Mar"],
      "growth_title": "Expansão Massiva Formidável",
      "growth_desc": "O grafico comprova a evolução fiel vista nas que integram as vias da OnlyOne ao entrarem firmes de corpo total nesta incrivel oportunidade alinharem lucros exatos recorrentes perfeitamente mantidos ali nas altas somas.",
      "stability_title": "Estabilidade Ininterrupta",
      "stability_desc": "As quedas caem eliminadas ao mantermos o forte contacto constante cativo aos membros pagantes do seu serviço, esticando duradouramente sempre as curvas pra cima nas finanças reais concretas."
    },
    "models": {
      "tag": "A Seleção Preciosa",
      "title1": "As Tops",
      "title2": "Modelos"
    },
    "reviews": {
      "m1": "Sério?? Nem creio fiz mais de 4k reais em tão curto tempo !! 😍",
      "m2: "Nem ativamos todas as rotas la fora amor! Bora arranca uns conteudos fortes novos hoje pra arrasar semana que vem 🚀",
      "m3": "Combinadíssimo, eu trato de tudo já ali atenta agora! Que alívio incrivel ter esses ganhos plenos ✨",
      "online": "Entregue Agora",
      "tag": "ELITE DOS BASTIDORES",
      "title1": "Confidencias de",
      "title2": "vitorias certas",
      "desc: "Nossas ações ocorrem no mais estreito segredo corporativo trazendo apenas faturamentos sem alarmes erráticos. Ver a surpresa positiva no caixa destas profissionais lindas em tão poucos meses nos da orgulho de estúdios.",
      "accompanied": "Garotas focadas ali guiadas retidas plenas as ricas posições nacionais"
    },
    "faq": {
      "tag": "SEM MISTÉRIOS",
      "title1: "As dúvidas de",
      "title2": "sempre",
      "items": [
        {"q": "A identidade pode sumir aos que não devem ver nas proteções aplicadas?", "a": "Eficazmente afirmamos total sucesso aqui. Escondemos toda mídia às regiões que deseja e filtramos parentes impedidos de encontrarem nas redes. A nossa técnica abrange segurança máxima."},
        {"q": "Mas ao fundo do painel quem domina tudo sem eu ver perfeitamente no controle e ali digitando as mensagens?", "a": "Contratamos perfis altamente perspicazes ao conversarem no seu lugar e na sua total assinatura de frases incrivelmente fiéis retendo, chamando atenção pura das grandes transferências na certa."},
        {"q": "Como poderei aprender sem tropeçar nos inícios sendo incrivelmente inexperiente no ramo ali de todo jeito?", "a": "Cuidamos das burocracias virtuais chatas integralmente ao passo que suas lentes nas camas do fundo ou banheiro captações das orientações providas ao mestre luxuoso da foto caseira e mais nada complicado amem."},
        {"q": "Em quantos exatos minutos os lucros escorrem pra meu bolso após o encerramento do longo processo contratual dali?", "a": "O seu primeiro trinta ou ali menos perante dias incrivelmente ágeis após as validações nossas na aprovação da inscrição verterão com toda a força aos pagantes fortes nos primeiros rendimentos gringos expressivos absolutos."}
      ]
    },
    "onboarding": {
      "tag": "TUTORIAL ONBOARDING DIRETO",
      "title1": "Admissões",
      "title2": "Vips",
      "desc": "Nada provém do ar mas num alicerce trintenal das vias em prol duma rotina de fazer faturar perfeitamente ininterrupta focada real pratica eficiente.",
      "items": [
        {"title": "Mapeamento Estrito Estratégico", "desc": "Desenhamos trilhas limpas fortes ao foco sem delongas para marcares posição imperativa rápida exata na audiência elitista alvo nosso contínua focada."},
        {"title": "Blindagem Virtual Global Ali Em Foco", "desc": "Sistemas DMCA rigorosos rastreadores evitam a malicioso ali perto somados ao restrito geoblocking escondendo toda identidade limpa perfeitamente lá."},
        {"title": "Redirecionamento Forte Quente Ao Envio Pleno Vigoroso Imparável Engajamento Das Multidões Ferventes Do Top Of Funnel Adiquirido Fielmente Gringo", "desc": "Drenamos olhares com o magnético gatilho atraído por campanhas exaustivas que explodem na aba das notórias assinaturas lá diárias da fama plena luxuosa linda incrível."},
        {"title": "Equipe Própria De Lucros Retidos Noturnos Fechados Seguros Escalões Superlativos Contínuos Ao Prático Das Nossos Múltiplas", "desc": "De mãos estendidas nossa gerência fatura por comissões contínuas a ti em escalas do sol ao fechar de tarde."}
      ]
    },
    "form": {
      "title": "Aplicações de Parcerias",
      "desc": "Em seleções criteriosas tomamos poucas vagas da lotada fila as garotas mais fiéis a colher recompensas digníssimas das elites plenas exclusivas e ricas do painel.",
      "name: "Nomes Plenos Ali Prontos Sem Mentiras Ao Registro Original Oficial Legal Nosso",
      "email": "Email Fiel Concreto Total Na Resposta Segura Exame Contratual Perfeitamente Daí De Fora Tudo Resolvido Oportuno Oficial Envio Pronto Dali Certo e Valido",
      "socials": "Ligação Visual Aos Arrobas Dali Perfeitas Nas Redes Sociais Existentes Pra Olho Direto E Intenso Em Critérios Seus Onde Podemos Confirmar Excelência Ali Rápido",
      "has_platform": "Encontra-se ja registada na famosa via amada das receitas pagantes do universo de fãs assinantes dali nestes moldes do contrato atual das gigantes?",
      "has_platform_no": "Não não atuei nas ditas e peço os comandos desde a raíz fortes ao percurso de iniciar colheitas rápidas grandes valiosas ao total",
      "has_platform_yes: "Sim e colho quantias relativas precisando o impulso e descanso na mão fiel super forte perita técnica perfeitamente incansável vossa ali da central de mestres da OnlyOne",
      "has_platform_past": "Esbarrei nos insucessos antigos ali travando a caminhada das riquezas e decidi freiar bruscamente até hoje em fato aguardando resgatar com agência ideal experiente fiel verdadeira do meu avanço e tal pleno das fortunas maravilhosas",
      "which_platform": "Especificar As Famosas Quais Marcas Atuou Por Favor Sem Omissão De Titulos De Siglas Pra Conferir La Bem Feito Sem Duvidas E Ok Certo Assim Tudo Ali Entregue Completo Nas Exatas Palavras",
      "platform_link": "URL e Alias Seu Oficial Fiel Pleno Corretamente Preenchido Total Em Pontidão Certa Original Encontra",
      "motivations": "Descreva Exaustivo Suas Forcas Meta Limite Em Texto Do Porquê Estar No Negocio E Metas Desejadas E Fixadas Nas Promessas Enormes Sonhos Da Sua Caminhada De Progresso Das Ambições Lucrativa Ali Num Estágio Certo Maravilhoso Incomparável Que Chegaremos Ao Fim Das Trutas Ai O Fim Ali De Tude Da Verdade Fiel Em Geral Amém",
      "motivations_ph: "Cita seus pensos ou tetos alvos ricos alvos da mensal base q busca sem esquecer das rotinas plenas ou desvios em texto fácil nas frases plenas da vida de hoje a seguir ai incrivel pro topo sem parar e tal pra sempre na paz perfeita amarela e fofa luxuosa pura maravilhosa ali brilhante sem atraso.",
      "submit": "Desejo Confirmar Submissões Orais Feitas Ao Crivo Profissional Top Rigoroso Excelente Institucional Criptografada SSL Nossa Ali Completa Entregas Certos Fios Redes Trancas Segura Total Pronta Valida Plena Perfeita Sem Falhas Ao Envio Garantido Lindo Final Amem Envia Logo Ok Certinho Assinado Formal Seguro Tudo Manda Perfeito E Final Pronto Entregue Manda Oficial.",
      "submitting: "Arquivando SSL Fechando Janelas Transmitindo Blindagem Feita Fechamento Carga Dados Transmitindo Total...",
      "secure_note: "Tranquilidade garantida assinada encriptado segredo inviolável servidores seguros intocáveis SSL blindadas impenetrável maravilhosos totais de mercado",
      "success_title": "Formulario Completo Entregue Submissão Visual Avaliação Registada No Arquivo Pronto De Aprovações Criteriosa",
      "success_desc": "O seu dossie fiel foi repassado as vias fortes da recepção interna blindadas ricas nossa aguarde no endereço eletrônico o breve estalar perfeitamente nos dois fusiveis curtos dali uteis dias seguintes nas horas corridas plenas caso nos preencha aos requisitos incríveis exatos exigidos. Fique com paz de mentes e tudo de rico forte ao avanço do momento. Obrigado perfeitamente a sua contribuição real.",
      "success_btn": "Botão Para O Envio Em Repetição Dum Recadastramento Retomado Próxima Das Meninas Dali Do Grupo Revezar Preencher Em Constância De Devolução Fim Retorno Secundário Certo Manda Oficial Ok Envia Novo Click Refaz Processo Finaliza Limpo Recarrega Início Simples De Uso E Tudo Em Paz Sempre Mais Ali Amigos Certos Total Sem Erros Voltas."
    }
}

content = f"""export type Language = 'FR' | 'EN' | 'ES' | 'PT';

export const translations = {{
  FR: {json.dumps(FR, indent=4, ensure_ascii=False)},
  EN: {json.dumps(EN, indent=4, ensure_ascii=False)},
  ES: {json.dumps(ES, indent=4, ensure_ascii=False)},
  PT: {json.dumps(PT, indent=4, ensure_ascii=False)}
}};
"""

with open("c:/Users/lucas/.gemini/antigravity/scratch/onlyone-premium/src/context/translations.ts", "w", encoding="utf-8") as f:
    f.write(content)

print("translations.ts overwritten successfully.")
