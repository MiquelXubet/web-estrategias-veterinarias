// src/data/serviciosData.js
import marketing from "../Images/mk-digital-vets.png";
import email from "../Images/email-mk2.png";
import automatizaciones from "../Images/automatizacion.png";
import redes from "../Images/redes-sociales.png";
import seo from "../Images/seo.png";
import web from "../Images/diseño-web.png";
import coroporativo from "../Images/diseño-corporativo.png";
import contenidos from "../Images/blog1.png";

const serviciosData = [
  {
    id: "marketing-digital",
    titulo: "Marketing Digital",
    descripcionCorta:
      "Definimos la estrategia online para tu clínica veterinaria, enfocándonos en tus objetivos y público.",
    imagen: marketing,
    contenido: `
      <p>El marketing digital es la base para que tu clínica veterinaria crezca en el entorno online. Analizamos tu situación, definimos objetivos claros y diseñamos un plan que combina los canales más efectivos para captar y fidelizar clientes.</p>
      <p>Con un enfoque personalizado, ayudamos a posicionarte mejor, aumentar tu visibilidad y consolidar tu marca en el sector veterinario.</p>
    `,
    beneficios: [
      "Visión global de tu presencia online",
      "Estrategias adaptadas a tu público veterinario",
      "Mejora del reconocimiento y confianza de marca",
      "Optimización de recursos y presupuesto",
    ],
    incluye: [
      "Análisis del mercado y competencia",
      "Definición de objetivos y KPIs",
      "Planificación de canales y tácticas digitales",
      "Monitorización y ajustes periódicos",
    ],
    pasos: [
      "Reunión inicial para conocer tu clínica y objetivos",
      "Análisis de competencia y público objetivo",
      "Diseño del plan estratégico digital",
      "Implementación y seguimiento mensual",
    ],
    duracion: "A partir de 3 meses con revisiones periódicas",
    resultados: [
      "Mayor visibilidad online",
      "Incremento de consultas y citas",
      "Mejora en la relación con clientes",
      "Optimización del presupuesto de marketing",
    ],
    faq: [
      {
        pregunta:
          "¿Es necesario hacer marketing digital si ya tengo clientes fieles?",
        respuesta:
          "Sí, porque el entorno digital cambia rápido y es clave para captar nuevos clientes y mantener la relación con los actuales.",
      },
      {
        pregunta: "¿Cuánto tiempo tarda en verse resultados?",
        respuesta:
          "Normalmente entre 3 y 6 meses se empiezan a notar mejoras significativas.",
      },
    ],
    keywords: [
      "marketing digital veterinario",
      "estrategia online clínica veterinaria",
      "publicidad veterinaria",
    ],
  },

  {
    id: "seo-sem",
    titulo: "SEO/SEM",
    descripcionCorta:
      "Optimiza tu web para buscadores y lanza campañas pagadas para atraer más clientes a tu clínica.",
    imagen: seo,
    contenido: `
      <p>Con SEO (posicionamiento orgánico) mejoramos la visibilidad de tu web en Google para que te encuentren cuando buscan servicios veterinarios.</p>
      <p>SEM son las campañas de anuncios pagados, ideales para atraer clientes rápidamente con control de presupuesto y segmentación precisa.</p>
    `,
    beneficios: [
      "Aumenta el tráfico cualificado a tu web",
      "Mejora la experiencia del usuario",
      "Campañas segmentadas y medibles",
      "Mayor tasa de conversión",
    ],
    incluye: [
      "Auditoría SEO técnica y de contenido",
      "Optimización on page y off page",
      "Gestión y monitorización de campañas SEM",
      "Informes periódicos de resultados",
    ],
    pasos: [
      "Análisis inicial y auditoría SEO",
      "Optimización técnica y de contenidos",
      "Diseño y lanzamiento de campañas SEM",
      "Seguimiento y ajustes para mejorar resultados",
    ],
    duracion: "Campañas desde 1 mes, SEO a medio-largo plazo",
    resultados: [
      "Posicionamiento destacado en Google",
      "Aumento de consultas y clientes potenciales",
      "Mejor rendimiento del presupuesto publicitario",
    ],
    faq: [
      {
        pregunta: "¿SEO o SEM? ¿Cuál me conviene más?",
        respuesta:
          "Depende de tus objetivos: SEO es una inversión a medio-largo plazo; SEM ofrece resultados rápidos y controlados.",
      },
      {
        pregunta: "¿Puedo hacer ambas cosas a la vez?",
        respuesta:
          "Sí, una estrategia combinada es lo ideal para maximizar resultados.",
      },
    ],
    keywords: [
      "seo veterinaria",
      "campañas sem veterinarias",
      "posicionamiento web clínica veterinaria",
    ],
  },

  {
    id: "diseno-web",
    titulo: "Diseño Web",
    descripcionCorta:
      "Creamos una web atractiva, funcional y adaptada a la identidad de tu clínica veterinaria.",
    imagen: web,
    contenido: `
      <p>Tu página web es la carta de presentación digital de tu clínica. Diseñamos sitios profesionales, fáciles de navegar y optimizados para móviles y buscadores.</p>
      <p>Nos aseguramos de que refleje la identidad de tu marca y facilite que los clientes te contacten y agenden citas.</p>
    `,
    beneficios: [
      "Diseño adaptado a tu imagen corporativa",
      "Experiencia de usuario intuitiva",
      "Optimización para móviles y SEO",
      "Fácil gestión de contenidos",
    ],
    incluye: [
      "Diseño personalizado y responsive",
      "Integración de formularios de contacto",
      "Optimización de velocidad y SEO básico",
      "Capacitación para gestionar la web",
    ],
    pasos: [
      "Reunión para conocer tu clínica y necesidades",
      "Diseño y aprobación de maquetas",
      "Desarrollo y pruebas",
      "Lanzamiento y formación",
    ],
    duracion: "Entre 4 y 8 semanas según complejidad",
    resultados: [
      "Mayor profesionalismo y confianza",
      "Incremento de contactos vía web",
      "Mejor posicionamiento y usabilidad",
    ],
    faq: [
      {
        pregunta: "¿Puedo actualizar yo mismo la web después?",
        respuesta:
          "Sí, te formamos para que puedas gestionar los contenidos fácilmente.",
      },
      {
        pregunta: "¿El diseño será adaptable a móviles?",
        respuesta: "Por supuesto, el diseño será totalmente responsive.",
      },
    ],
    keywords: [
      "diseño web veterinario",
      "web clínica veterinaria",
      "página web para veterinarios",
    ],
  },

  {
    id: "diseno-corporativo",
    titulo: "Diseño Corporativo",
    descripcionCorta:
      "Construimos una identidad visual coherente que refleje los valores y personalidad de tu clínica.",
    imagen: coroporativo,
    contenido: `
      <p>El diseño corporativo va más allá del logo: es toda la imagen que proyectas a tus clientes, desde colores hasta papelería y presencia digital.</p>
      <p>Te ayudamos a crear una identidad sólida y coherente que diferencie tu clínica y genere confianza.</p>
    `,
    beneficios: [
      "Imagen profesional y reconocible",
      "Coherencia en todos los canales",
      "Mejora la percepción de marca",
      "Aumenta la confianza y fidelización",
    ],
    incluye: [
      "Diseño o actualización de logo",
      "Manual de identidad visual",
      "Materiales gráficos básicos (tarjetas, folletos)",
      "Asesoría en aplicación de marca",
    ],
    pasos: [
      "Análisis de la marca y público objetivo",
      "Diseño y revisión de propuestas",
      "Entrega de manual y materiales",
      "Soporte en la implementación",
    ],
    duracion: "Entre 3 y 5 semanas",
    resultados: [
      "Imagen coherente y profesional",
      "Mejor posicionamiento de marca",
      "Mayor reconocimiento por parte de clientes",
    ],
    faq: [
      {
        pregunta: "¿Incluye rediseño de logo?",
        respuesta: "Sí, podemos crear o actualizar tu logo según necesidades.",
      },
      {
        pregunta: "¿Puedo aplicar la identidad en redes sociales?",
        respuesta:
          "Claro, te asesoramos para que la imagen sea coherente en todos los canales.",
      },
    ],
    keywords: [
      "diseño corporativo veterinario",
      "imagen de marca clínica veterinaria",
      "identidad visual veterinaria",
    ],
  },

  {
    id: "marketing-de-contenidos",
    titulo: "Marketing de Contenidos",
    descripcionCorta:
      "Generamos contenido relevante que atrae y fideliza a tus clientes veterinarios.",
    imagen: contenidos,
    contenido: `
      <p>El marketing de contenidos te ayuda a educar y conectar con tu audiencia a través de artículos, videos y publicaciones útiles sobre el cuidado animal.</p>
      <p>Construimos una comunidad fiel y posicionamos tu clínica como referente en el sector.</p>
    `,
    beneficios: [
      "Aumenta la confianza y fidelidad de clientes",
      "Mejora el posicionamiento SEO",
      "Genera interacción y comunidad",
      "Apoya la venta de servicios veterinarios",
    ],
    incluye: [
      "Plan editorial personalizado",
      "Creación y publicación de artículos y posts",
      "Diseño gráfico para contenido visual",
      "Monitorización de resultados",
    ],
    pasos: [
      "Análisis de audiencia y temas clave",
      "Elaboración de calendario editorial",
      "Producción y publicación de contenido",
      "Evaluación y ajustes periódicos",
    ],
    duracion: "Mínimo 3 meses para resultados óptimos",
    resultados: [
      "Mayor tráfico web cualificado",
      "Incremento de seguidores y engagement",
      "Posicionamiento como experto en tu área",
    ],
    faq: [
      {
        pregunta: "¿Qué tipo de contenido funciona mejor para veterinarias?",
        respuesta:
          "Artículos sobre cuidado animal, consejos de salud y novedades del sector suelen ser muy efectivos.",
      },
      {
        pregunta: "¿Cada cuánto publican contenido?",
        respuesta:
          "Recomendamos al menos una publicación semanal para mantener la audiencia activa.",
      },
    ],
    keywords: [
      "marketing de contenidos veterinaria",
      "contenido para clínicas veterinarias",
      "blog veterinario",
    ],
  },

  {
    id: "redes-sociales",
    titulo: "Redes Sociales",
    descripcionCorta:
      "Gestionamos tus perfiles para conectar con tu comunidad y aumentar la visibilidad de tu clínica.",
    imagen: redes,
    contenido: `
      <p>Las redes sociales son esenciales para construir una relación cercana con tus clientes y promocionar tus servicios.</p>
      <p>Nos encargamos de planificar, crear y publicar contenido que genere interacción y refuerce tu marca.</p>
    `,
    beneficios: [
      "Incrementa la visibilidad y alcance",
      "Fomenta la interacción y fidelización",
      "Comunicación directa y cercana",
      "Genera tráfico a tu web y promociones",
    ],
    incluye: [
      "Planificación estratégica de contenidos",
      "Creación de posts, imágenes y videos",
      "Gestión y respuesta a la comunidad",
      "Reportes de métricas y análisis",
    ],
    pasos: [
      "Definición de objetivos y público objetivo",
      "Elaboración de calendario de publicaciones",
      "Producción y publicación constante",
      "Análisis y optimización continua",
    ],
    duracion: "Contrato mínimo de 3 meses recomendado",
    resultados: [
      "Aumento de seguidores cualificados",
      "Mayor interacción y recomendaciones",
      "Reconocimiento de marca en el sector",
    ],
    faq: [
      {
        pregunta:
          "¿Qué redes sociales son mejores para una clínica veterinaria?",
        respuesta:
          "Facebook e Instagram suelen ser las más efectivas, aunque también puede usarse TikTok o LinkedIn según público.",
      },
      {
        pregunta: "¿Pueden responder mensajes y comentarios por mí?",
        respuesta:
          "Sí, gestionamos la comunidad para mantener una comunicación rápida y profesional.",
      },
    ],
    keywords: [
      "redes sociales veterinarias",
      "gestión redes clínicas veterinarias",
      "community manager veterinaria",
    ],
  },

  {
    id: "email-marketing",
    titulo: email,
    descripcionCorta:
      "Diseñamos campañas personalizadas para mantener a tus clientes informados y fidelizados.",
    imagen: "/img/email-marketing.jpg",
    contenido: `
      <p>El email marketing sigue siendo una herramienta muy efectiva para comunicar ofertas, novedades y consejos a tus clientes veterinarios.</p>
      <p>Segmentamos audiencias y creamos mensajes personalizados para mejorar la tasa de apertura y conversión.</p>
    `,
    beneficios: [
      "Comunicación directa y personalizada",
      "Incrementa la fidelización y repetición",
      "Alta rentabilidad y bajo coste",
      "Medición clara de resultados",
    ],
    incluye: [
      "Segmentación de bases de datos",
      "Diseño de newsletters y promociones",
      "Automatización de envíos",
      "Análisis de resultados y optimización",
    ],
    pasos: [
      "Definición de objetivos y segmentos",
      "Diseño y creación de campañas",
      "Programación y envío automatizado",
      "Monitorización y ajustes continuos",
    ],
    duracion: "Campañas mensuales recomendadas",
    resultados: [
      "Mayor tasa de apertura y clics",
      "Incremento de visitas y reservas",
      "Mejora de la relación con clientes",
    ],
    faq: [
      {
        pregunta: "¿Es legal enviar emails a todos mis clientes?",
        respuesta:
          "Sí, siempre que tengas su consentimiento y cumplas la normativa de protección de datos.",
      },
      {
        pregunta: "¿Con qué frecuencia debo enviar emails?",
        respuesta:
          "Lo ideal es no saturar: una o dos veces al mes suele funcionar bien.",
      },
    ],
    keywords: [
      "email marketing veterinaria",
      "campañas email clínicas veterinarias",
      "newsletter veterinaria",
    ],
  },

  {
    id: "automatizaciones-embudos",
    titulo: automatizaciones,
    descripcionCorta:
      "Implementamos procesos automáticos para convertir visitantes en clientes y mejorar la gestión.",
    imagen: "/img/automatizaciones.jpg",
    contenido: `
      <p>Los embudos de venta y automatizaciones te permiten nutrir a tus potenciales clientes con mensajes adecuados en cada fase del proceso.</p>
      <p>Esto facilita la conversión y mejora la experiencia del cliente, ahorrándote tiempo y esfuerzo.</p>
    `,
    beneficios: [
      "Mayor eficacia en la captación y conversión",
      "Comunicación personalizada y oportuna",
      "Reducción de tareas manuales repetitivas",
      "Mejora la experiencia del cliente",
    ],
    incluye: [
      "Diseño de embudos de venta adaptados",
      "Configuración de automatizaciones en CRM y email",
      "Segmentación y scoring de clientes",
      "Seguimiento y optimización continua",
    ],
    pasos: [
      "Análisis del proceso de captación actual",
      "Diseño del embudo y mensajes clave",
      "Implementación de automatizaciones",
      "Monitoreo y ajustes basados en resultados",
    ],
    duracion: "Desde 2 meses para implementación completa",
    resultados: [
      "Incremento en la conversión de leads",
      "Mejor organización y seguimiento",
      "Ahorro de tiempo en tareas repetitivas",
    ],
    faq: [
      {
        pregunta: "¿Necesito un CRM para las automatizaciones?",
        respuesta:
          "Sí, recomendamos usar un CRM compatible para sacar el máximo partido a las automatizaciones.",
      },
      {
        pregunta: "¿Es difícil configurar estos sistemas?",
        respuesta:
          "Nosotros nos encargamos de la configuración y formación para que sea sencillo para ti.",
      },
    ],
    keywords: [
      "automatizaciones veterinaria",
      "embudos de venta clínicas veterinarias",
      "crm veterinaria",
    ],
  },
];

export default serviciosData;
