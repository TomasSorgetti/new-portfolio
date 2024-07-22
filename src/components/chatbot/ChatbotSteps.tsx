export const steps = [
  {
    id: "inicio",
    message: "¡Hola! ¿En qué puedo ayudarte hoy?",
    trigger: "options",
  },
  {
    id: "options",
    options: [
      {
        value: 1,
        label: "Sólo quiero echar un vistazo",
        trigger: "option1",
      },
      { value: 2, label: "Quiero saber más de ti", trigger: "option2" },
      { value: 3, label: "Quiero contactarte", trigger: "option3" },
    ],
  },
  {
    id: "option1",
    message:
      "Me parece perfecto! El sitio tiene una sección que habla de mí, una de proyectos, una de tecnologías y una sección de contacto. Sentinte libre de explorarlo.",
    trigger: "end",
  },

  {
    id: "option2",
    message: "Sobre qué querés saber más de mí?",
    trigger: "aboutOptions",
  },
  {
    id: "aboutOptions",
    options: [
      {
        value: 1,
        label: "Qué tecnologías utilizás?",
        trigger: "about1",
      },
      { value: 2, label: "Qué y dónde estudiaste?", trigger: "about2" },
      {
        value: 3,
        label: "Quiero hacerte una pregunta en particular",
        trigger: "about3",
      },
    ],
  },
  {
    id: "about1",
    message:
      "De diseño utilizo Figma y Photoshop. Para FrontEnd tengo conocimientos en Html, Css, Sass, Tailwind, Bootstrap, React, Astro, Next.js. Para BackEnd tengo conocimientos en Node, Express, Sequelize, Postgres, MySQL. También tengo conocimientos en Wordpress, Elementor y Woocommerce. Aunque todas esas son las tecnologías que manejo, tengo conocimientos básicos en algunas otras más, como Angular, jQuery, MongoDB, TypeScript.",
    trigger: "aboutMore",
  },
  {
    id: "about2",
    message:
      "Me egresé de un secundario técnico, mientras trabajaba como Luthier hice varios cursos básicos de Desarrollo Web, estudié en la UNGS una carrera de informática pero la dejé, hice un bootcamp FullStack en Henry y actualmente estoy cursando una carrera de Diseño y Desarrollo Web en la escuela DaVinci.",
    trigger: "aboutMore",
  },
  {
    id: "about3",
    message:
      "Para hacerme una consulta podés completar el formulario del sitio, mandarme un mail o contactarme por Whatsapp.",
    trigger: "contactOptions",
  },

  {
    id: "aboutMore",
    message: "Querés saber más?",
    trigger: "aboutMoreOptions",
  },
  {
    id: "aboutMoreOptions",
    options: [
      { value: 1, label: "Si", trigger: "option2" },
      { value: 2, label: "No", trigger: "end" },
    ],
  },

  {
    id: "option3",
    message:
      "Perfecto! Al final del sitio tenés un formulario para contactarme, podés enviarme un correo o escribirme al Whatsapp.",
    trigger: "contactOptions",
  },
  {
    id: "contactOptions",
    options: [
      { value: 1, label: "Email", trigger: "email" },
      { value: 2, label: "Whatsapp", trigger: "whatsapp" },
      { value: 3, label: "Mejor no", trigger: "end" },
    ],
  },
  {
    id: "email",
    component: (
      <div>
        <a href="mailto:tomassorgetti456@gmail.com" target="_blank">
          Email
        </a>
      </div>
    ),
    trigger: "end",
  },
  {
    id: "whatsapp",
    component: (
      <div>
        <a href="https://wa.me/541136323780" target="_blank">
          Whatsapp
        </a>
      </div>
    ),
    trigger: "end",
  },
  {
    id: "end",
    message: "Tenés alguna otra consulta?",
    trigger: "loop",
  },
  {
    id: "loop",
    options: [
      { value: 1, label: "Si", trigger: "options" },
      { value: 2, label: "No", trigger: "final" },
    ],
  },
  {
    id: "final",
    message: "Gracias por tomarte el tiempo!",
    end: true,
  },
];
