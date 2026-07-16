export interface FAQItem {
  q: string;
  a: string;
}

export const FAQs: Record<'es' | 'en' | 'fr', FAQItem[]> = {
  es: [
    {
      q: "¿Qué nivel de experiencia de conducción se requiere?",
      a: "Ofrecemos rutas para todos los niveles, clasificadas como 'Fácil' (para principiantes con carnet vigente), 'Medio' (carreteras reviradas convencionales) y 'Duro' (tramos exigentes off-road o jornadas de más de 400km). En la ficha de cada ruta encontrarás los requisitos recomendados."
    },
    {
      q: "¿Está incluido el alquiler de la motocicleta?",
      a: "BikerTrip es una plataforma flexible. Puedes realizar la ruta con tu propia moto o solicitar nuestro servicio de alquiler asociado de BMW Motorrad o Ducati. Contáctanos por el Chatbot de IA para gestionar tu reserva de moto."
    },
    {
      q: "¿Cómo funciona el seguimiento de Firebase en tiempo real?",
      a: "Nuestra aplicación móvil se conecta a una base de datos Firebase en la nube. Durante la ruta, cada piloto transmite su geolocalización de forma encriptada, permitiendo al líder y al coche de asistencia visualizar el grupo completo en el mapa interactivo."
    },
    {
      q: "¿Qué ocurre en caso de avería o emergencia?",
      a: "Todas nuestras rutas guiadas cuentan con un vehículo de asistencia escoba con remolque para motos, herramientas profesionales, recambios básicos y un paramédico certificado. Tu seguridad es nuestra absoluta prioridad."
    }
  ],
  en: [
    {
      q: "What level of riding experience is required?",
      a: "We offer routes for all levels, classified as 'Easy' (for beginners with a valid license), 'Medium' (conventional twisty roads) and 'Hard' (demanding off-road sections or days over 400km). In the details of each route, you will find the recommended requirements."
    },
    {
      q: "Is motorcycle rental included?",
      a: "BikerTrip is a flexible platform. You can ride with your own bike or request our rental service partner with BMW Motorrad or Ducati. Contact us via the AI Chatbot to manage your motorcycle reservation."
    },
    {
      q: "How does Firebase real-time tracking work?",
      a: "Our mobile app connects to a Firebase cloud database. During the ride, each rider securely transmits their geolocation, allowing the leader and support car to visualize the entire group on the interactive map."
    },
    {
      q: "What happens in case of a breakdown or emergency?",
      a: "All our guided routes have a sweep assistance vehicle with a motorcycle trailer, professional tools, basic spare parts, and a certified paramedic. Your safety is our absolute priority."
    }
  ],
  fr: [
    {
      q: "Quel niveau d'expérience de conduite est requis ?",
      a: "Nous proposons des itinéraires pour tous les niveaux, classés comme 'Facile' (pour les débutants avec permis valide), 'Moyen' (routes sinueuses classiques) et 'Difficile' (sections tout-terrain exigeantes ou journées de plus de 400 km). Dans les détails de chaque trajet, vous trouverez les exigences recommandées."
    },
    {
      q: "La location de moto est-elle incluse ?",
      a: "BikerTrip est une plateforme flexible. Vous pouvez effectuer le trajet avec votre propre moto ou demander notre service de location partenaire de BMW Motorrad ou Ducati. Contactez-nous via le Chatbot IA pour gérer votre réservation de moto."
    },
    {
      q: "Comment fonctionne le suivi en temps réel de Firebase ?",
      a: "Notre application mobile se connecte à une base de données cloud Firebase. Pendant le trajet, chaque pilote transmet sa géolocalisation de manière cryptée, permettant au leader et au véhicule d'assistance de visualiser l'ensemble du groupe sur la carte interactive."
    },
    {
      q: "Que se passe-t-il en cas de panne ou d'urgence ?",
      a: "Tous nos itinéraires guidés disposent d'un véhicule d'assistance balai avec remorque moto, d'outils professionnels, de pièces de rechange de base et d'un secouriste certifié. Votre sécurité est notre priorité absolue."
    }
  ]
};

export const translations: Record<'es' | 'en' | 'fr', Record<string, string>> = {
  es: {
    // Nav
    "nav.home": "Inicio",
    "nav.catalog": "Explorar Catálogo",
    "nav.reviews": "Reseñas",
    "nav.photos": "Galería",
    "nav.admin": "Panel de Control",
    "nav.mobile.explore": "Explorar",
    
    // Header
    "header.contact": "Contacto",
    "header.demo_btn": "Demo JJMario (Admin)",
    "header.login_btn": "Entrar / Registrarse",
    "header.pilot": "Piloto",
    "header.logout": "Cerrar Sesión",
    "header.support_title": "Contacto / Soporte",
    "header.support_desc": "¿Tienes dudas sobre nuestras rutas o necesitas asistencia en carretera? ¡Contáctanos!",
    "header.support_footer": "SOPORTE Y ASISTENCIA 24/7",
    "header.theme_light": "Cambiar a Modo Claro",
    "header.theme_dark": "Cambiar a Modo Oscuro",

    // Hero Section
    "hero.title_part1": "Domina el Asfalto,",
    "hero.title_part2": "Conquista la Ruta",
    "hero.description": "BikerTrip es la plataforma de aventuras definitiva para apasionados de las dos ruedas. Encuentra rutas guiadas legendarias, comparte telemetría en tiempo real sincronizada mediante Firebase y experimenta la camaradería en ruta.",
    "hero.explore_btn": "Explorar Catálogo",
    "hero.demo_btn": "Acceder como Piloto Demo",
    "hero.metrics.km": "KM Recorridos",
    "hero.metrics.routes": "Rutas Activas",
    "hero.metrics.feedback": "Feedback",

    // Promo Banner
    "promo.new_route": "★ NUEVA RUTA",
    "promo.year": "EXPLORACIÓN 2026",
    "promo.open": "¡INSCRIPCIONES ABIERTAS!",
    "promo.exclusive_header": "RECLAMO EXCLUSIVO BIKERTRIP",
    "promo.title": "Expedición Almería-Granada: Conquista el Desierto",
    "promo.description": "Siente la libertad absoluta surcando los paisajes más indómitos de Andalucía. Un viaje épico de 3 días atravesando pistas desérticas y puertos de montaña legendarios. Reserva hoy con nuestro descuento de lanzamiento del 15%.",
    "promo.distance": "Distancia",
    "promo.duration": "Duración",
    "promo.level": "Nivel",
    "promo.level_val": "Medio-Alto",
    "promo.last_spots": "Últimas 3 plazas",

    // Value propositions
    "value.why": "¿Por Qué BikerTrip?",
    "value.title": "Ingeniería para el Viaje Perfecto",
    "value.subtitle": "Hemos redefinido el viaje de aventura integrando hardware de seguimiento, telemetría y guías en ruta.",
    "value.card1.title": "Sincronización en Tiempo Real",
    "value.card1.desc": "Mediante la base de datos distribuida de Firebase, todos los integrantes del grupo conocen la ubicación exacta del resto del equipo, incluso en tramos de baja señal.",
    "value.card2.title": "Rutas Milimétricamente Trazadas",
    "value.card2.desc": "Nuestros guías certificados estudian previamente las paradas de repostaje, estado del asfalto, curvas ideales y puntos turísticos icónicos para entregarte el viaje ideal.",
    "value.card3.title": "Comunidad y Logística",
    "value.card3.desc": "No tienes que preocuparte por hoteles, permisos internacionales o reservas. BikerTrip gesticula la logística de soporte escoba y hotelera para que solo disfrutes conducir.",

    // FAQs Section
    "faq.why": "Preguntas Frecuentes",
    "faq.title": "Manual del Conductor BikerTrip",
    "faq.subtitle": "Todo lo que necesitas saber antes de subir el embrague y arrancar el motor en tu próxima gran aventura.",

    // Newsletter Section
    "newsletter.badge": "Suscripción Premium",
    "newsletter.title": "¿Quieres enterarte de las Nuevas Rutas antes de que se agoten?",
    "newsletter.desc": "Únete a nuestro club de carretera privado. Recibe alertas instantáneas de aperturas de reservas, tips de conducción extrema y crónicas de expediciones moteras.",
    "newsletter.form_title": "Newsletter BikerTrip",
    "newsletter.placeholder": "Ingresa tu correo electrónico...",
    "newsletter.button": "Suscribirme al Club de Carretera",
    "newsletter.footer": "Spam libre. Puedes darte de baja en cualquier momento.",
    "newsletter.success_alert": "¡Suscripción confirmada! Revisa tu bandeja de entrada.",

    "cookies.title": "Política de Cookies",
    "cookies.text": "Utilizamos cookies para mejorar tu experiencia. Al aceptar, permites el uso de cookies de rastreo.",
    "cookies.accept": "Aceptar",
    "cookies.reject": "Rechazar",
    "cookies.configure": "Configurar",
    "cookies.privacy_policy": "Política de Privacidad",
    "cookies.terms_and_conditions": "Términos y Condiciones",

    // Catalog/Explore View
    "catalog.badge": "Rutas de Ensueño 2026/2027",
    "catalog.title_part1": "Próximas Salidas para",
    "catalog.title_part2": "Explorar el Mundo",
    "catalog.description": "Planifica, haz tu reserva y prepárate para recorrer los lugares más inhóspitos del planeta. Todo sincronizado en la nube de forma transparente y guiado por nuestra inteligencia artificial experta.",
    "catalog.map_title": "Mapa de Expediciones Activas",
    "catalog.map_subtitle": "Visualiza el itinerario y los puntos de inicio (A) y fin (B) de cada viaje",
    "catalog.map_all_btn": "Mostrar todos los destinos",
    "catalog.filter_title": "Filtrar Aventuras",
    "catalog.filter_search": "Buscar por nombre o país",
    "catalog.filter_search_placeholder": "Ej. Alpes, Noruega, Pirineos...",
    "catalog.filter_difficulty": "Dificultad de la ruta",
    "catalog.filter_diff_all": "Todas las dificultades",
    "catalog.filter_advice": "¿No tienes claro cuál es tu nivel de conducción? Pregúntale a nuestro copiloto Rider Buddy flotante en la esquina inferior derecha.",
    "catalog.tailored_title": "¿Ruta a Medida?",
    "catalog.tailored_desc": "Diseñamos el itinerario soñado para ti y tu grupo de amigos: hoteles, alquiler de motos de trail/carretera, asistencia en coche y guías experimentados.",
    "catalog.tailored_btn": "Contactar con Diseñador de Rutas",
    "catalog.newsletter_title": "Boletín del Motero",
    "catalog.newsletter_subtitle": "Recibe consejos de mecánica, nuevas rutas exclusivas y cupones de descuento.",
    "catalog.newsletter_placeholder": "Tu correo electrónico",
    "catalog.newsletter_btn": "Unirse",
    "catalog.newsletter_success": "¡Suscrito correctamente! Revisa tu bandeja de entrada.",
    "catalog.routes_title": "Catálogo de Salidas Programadas",
    "catalog.routes_subtitle_showing": "Mostrando {0} de {1} expediciones organizadas",
    "catalog.no_routes": "No hay rutas programadas en la plataforma",
    "catalog.no_routes_desc": "Actualmente no hay ninguna expedición activa en BikerTrip. El administrador creará y programará nuevas rutas próximamente.",
    "catalog.no_routes_btn": "Ir a Gestión Admin para Crear la Primera Ruta",
    "catalog.no_results": "Ninguna ruta coincide con los filtros",
    "catalog.clear_filters": "Limpiar todos los filtros",
    
    // Card labels
    "card.difficulty": "Dificultad",
    "card.duration": "Duración",
    "card.price": "Precio por piloto",
    "card.places": "Plazas reservadas",
    "card.full": "¡COMPLETO!",
    "card.last_spots": "¡Últimas plazas!",
    "card.active_riders": "pilotos en ruta",
    "card.guide_rating": "Guía",
    "card.route_rating": "Ruta",
    "card.details_btn": "Ver Detalles de Expedición",
    "card.book_btn": "Reservar esta Aventura",
    "card.manage_btn": "Administrar Ruta",
    
    // Chatbot (Rider Buddy)
    "chat.welcome": "¡Hola motero! Soy Rider Buddy, tu copiloto inteligente de BikerTrip. 🏍️\n\n¿Estás pensando en tu próxima rodada? Puedo ayudarte a elegir la ruta perfecta según tu nivel, recomendarte qué equipamiento llevar (como maletas, monos para el frío o neumáticos) o darte consejos de mantenimiento mecánico. ¿A dónde te gustaría escapar?",
    "chat.placeholder": "Escribe tu mensaje aquí...",
    "chat.button_send": "Enviar",
    "chat.preset1_lbl": "🏔️ ¿Qué equipamiento llevo a los Alpes?",
    "chat.preset1_txt": "Quiero saber qué equipamiento, maletas y ropa recomiendas para rodar por los Alpes en verano.",
    "chat.preset2_lbl": "🇳🇴 Consejos para clima en Noruega",
    "chat.preset2_txt": "¿Qué consejos mecánicos y de ropa me das para aguantar la lluvia y el frío de los Fiordos Noruegos?",
    "chat.preset3_lbl": "🏍️ ¿Ruta para principiantes?",
    "chat.preset3_txt": "¿Cuál de las rutas de BikerTrip me recomiendas si estoy empezando y quiero rodar tranquilo?",
    "chat.copilot": "Copiloto IA Rider Buddy",
    "chat.desc": "Asistente experto en rutas, mecánica y equipamiento",
    "chat.error": "No se ha podido conectar con Rider Buddy. Comprueba que tu GEMINI_API_KEY esté configurada en los Secretos.",
    "chat.preset_title": "Preguntas sugeridas:"
  },
  en: {
    // Nav
    "nav.home": "Home",
    "nav.catalog": "Explore Catalog",
    "nav.reviews": "Reviews",
    "nav.photos": "Photos",
    "nav.admin": "Control Panel",
    "nav.mobile.explore": "Explore",

    // Header
    "header.contact": "Contact",
    "header.demo_btn": "Demo JJMario (Admin)",
    "header.login_btn": "Login / Register",
    "header.pilot": "Rider",
    "header.logout": "Log Out",
    "header.support_title": "Contact / Support",
    "header.support_desc": "Have questions about our routes or need roadside assistance? Contact us!",
    "header.support_footer": "24/7 SUPPORT & ASSISTANCE",
    "header.theme_light": "Change to Light Mode",
    "header.theme_dark": "Change to Dark Mode",

    // Hero Section
    "hero.title_part1": "Master the Asphalt,",
    "hero.title_part2": "Conquer the Route",
    "hero.description": "BikerTrip is the ultimate adventure platform for two-wheel enthusiasts. Find legendary guided tours, share real-time telemetry synchronized via Firebase, and experience road camaraderie.",
    "hero.explore_btn": "Explore Catalog",
    "hero.demo_btn": "Access as Demo Rider",
    "hero.metrics.km": "KM Traveled",
    "hero.metrics.routes": "Active Routes",
    "hero.metrics.feedback": "Feedback",

    // Promo Banner
    "promo.new_route": "★ NEW ROUTE",
    "promo.year": "2026 EXPLORATION",
    "promo.open": "REGISTRATIONS OPEN!",
    "promo.exclusive_header": "EXCLUSIVE BIKERTRIP PROMO",
    "promo.title": "Almería-Granada Expedition: Conquer the Desert",
    "promo.description": "Feel absolute freedom crossing the most wild landscapes of Andalusia. An epic 3-day journey through desert tracks and legendary mountain passes. Book today with our 15% launch discount.",
    "promo.distance": "Distance",
    "promo.duration": "Duration",
    "promo.level": "Level",
    "promo.level_val": "Medium-High",
    "promo.last_spots": "Last 3 spots",

    // Value propositions
    "value.why": "Why BikerTrip?",
    "value.title": "Engineering for the Perfect Ride",
    "value.subtitle": "We have redefined adventure travel by integrating tracking hardware, telemetry, and on-route guides.",
    "value.card1.title": "Real-Time Sync",
    "value.card1.desc": "Through Firebase's distributed database, all group members know the exact location of the rest of the team, even in low-signal stretches.",
    "value.card2.title": "Millimetrically Traced Routes",
    "value.card2.desc": "Our certified guides pre-study fueling stops, asphalt conditions, ideal curves, and iconic sights to deliver the perfect trip.",
    "value.card3.title": "Community & Logistics",
    "value.card3.desc": "You don't have to worry about hotels, international permits, or bookings. BikerTrip manages the sweep support and hotel logistics so you can just enjoy riding.",

    // FAQs Section
    "faq.why": "Frequently Asked Questions",
    "faq.title": "BikerTrip Rider Manual",
    "faq.subtitle": "Everything you need to know before pulling the clutch and starting the engine on your next great adventure.",

    // Newsletter Section
    "newsletter.badge": "Premium Subscription",
    "newsletter.title": "Want to know about New Routes before they sell out?",
    "newsletter.desc": "Join our private road club. Get instant alerts of reservation openings, extreme driving tips, and motor expedition chronicles.",
    "newsletter.form_title": "BikerTrip Newsletter",
    "newsletter.placeholder": "Enter your email address...",
    "newsletter.button": "Subscribe to the Road Club",
    "newsletter.footer": "Spam free. You can unsubscribe at any time.",
    "newsletter.success_alert": "Subscription confirmed! Check your inbox.",

    "cookies.title": "Cookie Policy",
    "cookies.text": "We use cookies to improve your experience. By accepting, you allow tracking cookies.",
    "cookies.accept": "Accept",
    "cookies.reject": "Reject",
    "cookies.configure": "Configure",
    "cookies.privacy_policy": "Privacy Policy",
    "cookies.terms_and_conditions": "Terms and Conditions",

    // Catalog/Explore View
    "catalog.badge": "Dream Routes 2026/2027",
    "catalog.title_part1": "Upcoming Departures to",
    "catalog.title_part2": "Explore the World",
    "catalog.description": "Plan, book and get ready to ride the most inhospitable places on the planet. Everything synchronized in the cloud and guided by our expert artificial intelligence.",
    "catalog.map_title": "Active Expeditions Map",
    "catalog.map_subtitle": "Visualize the itinerary and start (A) and end (B) points of each trip",
    "catalog.map_all_btn": "Show all destinations",
    "catalog.filter_title": "Filter Adventures",
    "catalog.filter_search": "Search by name or country",
    "catalog.filter_search_placeholder": "e.g. Alps, Norway, Pyrenees...",
    "catalog.filter_difficulty": "Route difficulty",
    "catalog.filter_diff_all": "All difficulties",
    "catalog.filter_advice": "Not sure about your riding level? Ask our floating Rider Buddy copilot in the bottom right corner.",
    "catalog.tailored_title": "Tailor-made Route?",
    "catalog.tailored_desc": "We design the dream itinerary for you and your group: hotels, bike rentals, car assistance, and certified guides.",
    "catalog.tailored_btn": "Contact Tour Designer",
    "catalog.newsletter_title": "Rider Newsletter",
    "catalog.newsletter_subtitle": "Get maintenance tips, exclusive new routes, and discount coupons.",
    "catalog.newsletter_placeholder": "Your email address",
    "catalog.newsletter_btn": "Join",
    "catalog.newsletter_success": "Successfully subscribed! Check your inbox.",
    "catalog.routes_title": "Scheduled Departures Catalog",
    "catalog.routes_subtitle_showing": "Showing {0} of {1} organized expeditions",
    "catalog.no_routes": "No scheduled routes on the platform",
    "catalog.no_routes_desc": "There is currently no active expedition on BikerTrip. The administrator will create and schedule new routes shortly.",
    "catalog.no_routes_btn": "Go to Admin Management to Create First Route",
    "catalog.no_results": "No routes match the filters",
    "catalog.clear_filters": "Clear all filters",
    
    // Card labels
    "card.difficulty": "Difficulty",
    "card.duration": "Duration",
    "card.price": "Price per rider",
    "card.places": "Booked seats",
    "card.full": "FULLY BOOKED!",
    "card.last_spots": "Last spots!",
    "card.active_riders": "riders on route",
    "card.guide_rating": "Guide",
    "card.route_rating": "Route",
    "card.details_btn": "View Expedition Details",
    "card.book_btn": "Book this Adventure",
    "card.manage_btn": "Manage Route",

    // Chatbot (Rider Buddy)
    "chat.welcome": "Hello rider! I'm Rider Buddy, your intelligent BikerTrip copilot. 🏍️\n\nThinking about your next ride? I can help you choose the perfect route based on your level, recommend what gear to bring (bags, cold-weather suits, tires) or give mechanical maintenance tips. Where would you like to escape?",
    "chat.placeholder": "Type your message here...",
    "chat.button_send": "Send",
    "chat.preset1_lbl": "🏔️ What gear should I bring to the Alps?",
    "chat.preset1_txt": "I want to know what gear, luggage, and clothing you recommend for riding in the Alps in summer.",
    "chat.preset2_lbl": "🇳🇴 Weather advice for Norway",
    "chat.preset2_txt": "What mechanical and clothing advice do you give me to withstand the rain and cold of the Norwegian Fjords?",
    "chat.preset3_lbl": "🏍️ Route for beginners?",
    "chat.preset3_txt": "Which BikerTrip route do you recommend if I'm just starting out and want a calm ride?",
    "chat.copilot": "AI Copilot Rider Buddy",
    "chat.desc": "Expert assistant in routes, mechanics and gear",
    "chat.error": "Could not connect with Rider Buddy. Make sure your GEMINI_API_KEY is configured in Secrets.",
    "chat.preset_title": "Suggested questions:"
  },
  fr: {
    // Nav
    "nav.home": "Accueil",
    "nav.catalog": "Explorer le Catalogue",
    "nav.reviews": "Avis",
    "nav.photos": "Photos",
    "nav.admin": "Panneau de Contrôle",
    "nav.mobile.explore": "Explorer",

    // Header
    "header.contact": "Contact",
    "header.demo_btn": "Démo JJMario (Admin)",
    "header.login_btn": "Connexion / S'inscrire",
    "header.pilot": "Pilote",
    "header.logout": "Se Déconnecter",
    "header.support_title": "Contact / Support",
    "header.support_desc": "Des questions sur nos itinéraires ou besoin d'assistance ? Contactez-nous !",
    "header.support_footer": "ASSISTANCE ET SUPPORT 24/7",
    "header.theme_light": "Passer au Mode Clair",
    "header.theme_dark": "Passer au Mode Sombre",

    // Hero Section
    "hero.title_part1": "Maîtrisez l'Asphalte,",
    "hero.title_part2": "Conquiez la Route",
    "hero.description": "BikerTrip est la plateforme d'aventure ultime pour les passionnés de deux-roues. Trouvez des itinéraires guidés légendaires, partagez la télémétrie en temps réel synchronisée via Firebase et vivez la camaraderie sur route.",
    "hero.explore_btn": "Explorer le Catalogue",
    "hero.demo_btn": "Accéder en tant que Pilote Démo",
    "hero.metrics.km": "KM Parcourus",
    "hero.metrics.routes": "Itinéraires Actifs",
    "hero.metrics.feedback": "Avis",

    // Promo Banner
    "promo.new_route": "★ NOUVEAU TRAJET",
    "promo.year": "EXPLORATION 2026",
    "promo.open": "INSCRIPTIONS OUVERTES !",
    "promo.exclusive_header": "OFFRE EXCLUSIVEMENT BIKERTRIP",
    "promo.title": "Expédition Almería-Granada : Conquérez le Désert",
    "promo.description": "Ressentez une liberté absolue en traversant les paysages les plus sauvages d'Andalousie. Un voyage épique de 3 jours à travers des pistes désertiques et des cols de montagne légendaires. Réservez aujourd'hui avec notre réduction de lancement de 15%.",
    "promo.distance": "Distance",
    "promo.duration": "Durée",
    "promo.level": "Niveau",
    "promo.level_val": "Moyen-Élevé",
    "promo.last_spots": "Dernières 3 places",

    // Value propositions
    "value.why": "Pourquoi BikerTrip ?",
    "value.title": "Ingénierie pour le Voyage Parfait",
    "value.subtitle": "Nous avons redéfini le voyage d'aventure en intégrant du matériel de suivi, de la télémétrie et des guides en route.",
    "value.card1.title": "Synchro en Temps Réel",
    "value.card1.desc": "Grâce à la base de données distribuée de Firebase, tous les membres du groupe connaissent l'emplacement exact du reste de l'équipe, même dans les zones à faible signal.",
    "value.card2.title": "Itinéraires Tracés au Millimètre",
    "value.card2.desc": "Nos guides certifiés étudient au préalable les arrêts de ravitaillement, l'état de l'asphalte, les virages idéaux et les sites emblématiques pour vous offrir le voyage idéal.",
    "value.card3.title": "Communauté et Logistique",
    "value.card3.desc": "Vous n'avez pas à vous soucier des hôtels, des permis internationaux ou des réservations. BikerTrip gère la logistique d'assistance balai et d'hébergement pour que vous n'ayez qu'à profiter de la conduite.",

    // FAQs Section
    "faq.why": "Questions Fréquentes",
    "faq.title": "Manuel du Conducteur BikerTrip",
    "faq.subtitle": "Tout ce que vous devez savoir avant de débrayer et de démarrer le moteur de votre prochaine grande aventure.",

    // Newsletter Section
    "newsletter.badge": "Abonnement Premium",
    "newsletter.title": "Voulez-vous être informé des nouveaux itinéraires avant qu'ils ne soient épuisés ?",
    "newsletter.desc": "Rejoignez notre club de route privé. Recevez des alertes instantanées sur les ouvertures de réservation, des conseils de conduite extrême et des chroniques d'expédition.",
    "newsletter.form_title": "Newsletter BikerTrip",
    "newsletter.placeholder": "Entrez votre adresse email...",
    "newsletter.button": "S'abonner au Club de Route",
    "newsletter.footer": "Sans spam. Vous pouvez vous désabonner à tout moment.",
    "newsletter.success_alert": "Inscription confirmée ! Vérifiez votre boîte de réception.",

    "cookies.title": "Politique de cookies",
    "cookies.text": "Nous utilisons des cookies pour améliorer votre expérience. En acceptant, vous autorisez les cookies de suivi.",
    "cookies.accept": "Accepter",
    "cookies.reject": "Refuser",
    "cookies.configure": "Configurer",
    "cookies.privacy_policy": "Politique de confidentialité",
    "cookies.terms_and_conditions": "Termes et Conditions",

    // Catalog/Explore View
    "catalog.badge": "Itinéraires de Rêve 2026/2027",
    "catalog.title_part1": "Départs Prochains pour",
    "catalog.title_part2": "Explorer le Monde",
    "catalog.description": "Planifiez, réservez et préparez-vous à parcourir les endroits les plus inhospitaliers de la planète. Tout est synchronisé dans le cloud de manière transparente et guidé par notre intelligence artificielle experte.",
    "catalog.map_title": "Carte des Expéditions Actives",
    "catalog.map_subtitle": "Visualisez l'itinéraire et les points de départ (A) et d'arrivée (B) de chaque voyage",
    "catalog.map_all_btn": "Afficher toutes les destinations",
    "catalog.filter_title": "Filtrer les Aventures",
    "catalog.filter_search": "Rechercher par nom ou pays",
    "catalog.filter_search_placeholder": "Ex: Alpes, Norvège, Pyrénées...",
    "catalog.filter_difficulty": "Difficulté du trajet",
    "catalog.filter_diff_all": "Toutes les difficultés",
    "catalog.filter_advice": "Vous n'êtes pas sûr de votre niveau de conduite ? Demandez à notre copilote Rider Buddy flottant dans le coin inférieur droit.",
    "catalog.tailored_title": "Voyage sur Mesure ?",
    "catalog.tailored_desc": "Nous concevons l'itinéraire de vos rêves pour vous et vos amis : hôtels, location de moto, voiture d'assistance et guides expérimentés.",
    "catalog.tailored_btn": "Contacter un Concepteur",
    "catalog.newsletter_title": "Bulletin du Motard",
    "catalog.newsletter_subtitle": "Recevez des conseils mécaniques, de nouveaux itinéraires exclusifs et des coupons de réduction.",
    "catalog.newsletter_placeholder": "Votre adresse e-mail",
    "catalog.newsletter_btn": "Rejoindre",
    "catalog.newsletter_success": "Inscription réussie ! Vérifiez votre boîte de réception.",
    "catalog.routes_title": "Catalogue des Départs Programmés",
    "catalog.routes_subtitle_showing": "Affichage de {0} sur {1} expéditions organisées",
    "catalog.no_routes": "Aucun itinéraire programmé sur la plateforme",
    "catalog.no_routes_desc": "Il n'y a actuellement aucune expédition active sur BikerTrip. L'administrateur créera et programmera de nouveaux itinéraires sous peu.",
    "catalog.no_routes_btn": "Aller à la Gestion Admin pour Créer le Premier Trajet",
    "catalog.no_results": "Aucun trajet ne correspond aux filtres",
    "catalog.clear_filters": "Effacer tous les filtres",
    
    // Card labels
    "card.difficulty": "Difficulté",
    "card.duration": "Durée",
    "card.price": "Prix par pilote",
    "card.places": "Places réservées",
    "card.full": "COMPLET !",
    "card.last_spots": "Dernières places !",
    "card.active_riders": "pilotes en route",
    "card.guide_rating": "Guide",
    "card.route_rating": "Route",
    "card.details_btn": "Voir les Détails de l'Expédition",
    "card.book_btn": "Réserver cette Aventure",
    "card.manage_btn": "Gérer le Trajet",

    // Chatbot (Rider Buddy)
    "chat.welcome": "Salut motard ! Je suis Rider Buddy, votre copilote intelligent BikerTrip. 🏍️\n\nVous pensez à votre prochaine balade ? Je peux vous aider à choisir l'itinéraire parfait selon votre niveau, recommander l'équipement à emporter (sacoches, combinaisons grand froid, pneus) ou donner des conseils d'entretien mécanique. Où aimeriez-vous vous évader ?",
    "chat.placeholder": "Écrivez votre message ici...",
    "chat.button_send": "Envoyer",
    "chat.preset1_lbl": "🏔️ Quel équipement pour les Alpes ?",
    "chat.preset1_txt": "Je veux savoir quel équipement, bagages et vêtements vous recommandez pour rouler dans les Alpes en été.",
    "chat.preset2_lbl": "🇳🇴 Conseils météo pour la Norvège",
    "chat.preset2_txt": "Quels conseils mécaniques et vestimentaires me donnez-vous pour résister à la pluie et au froid des Fjords Norvégiens ?",
    "chat.preset3_lbl": "🏍️ Itinéraire pour débutants ?",
    "chat.preset3_txt": "Quel itinéraire BikerTrip recommandez-vous si je débute et que je veux rouler tranquillement ?",
    "chat.copilot": "Copilote IA Rider Buddy",
    "chat.desc": "Assistant expert en itinéraires, mécanique et équipement",
    "chat.error": "Impossible de se connecter avec Rider Buddy. Assurez-vous que votre GEMINI_API_KEY est configurée dans Secrets.",
    "chat.preset_title": "Questions suggérées :"
  }
};

/**
 * Translates difficulty labels from DB format ('iniciación', 'fácil', 'media', 'avanzado')
 * to selected language labels.
 */
export function translateDifficulty(diff: string, lang: 'es' | 'en' | 'fr'): string {
  const normalized = (diff || "").toLowerCase().trim();
  if (lang === 'en') {
    if (normalized === 'iniciación') return 'Beginner';
    if (normalized === 'fácil') return 'Easy';
    if (normalized === 'media') return 'Medium';
    if (normalized === 'avanzado') return 'Advanced';
    return diff;
  }
  if (lang === 'fr') {
    if (normalized === 'iniciación') return 'Débutant';
    if (normalized === 'fácil') return 'Facile';
    if (normalized === 'media') return 'Moyen';
    if (normalized === 'avanzado') return 'Avancé';
    return diff;
  }
  // Default Spanish
  return diff;
}
