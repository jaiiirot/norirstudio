// Archivo: src/data/testimonials.ts

export interface Testimonial {
  id: string;
  client: string;
  role: string;
  comment: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "01",
    client: "Centro de Estudiantes UTN",
    role: "Plataforma ITEC BA",
    comment: "La plataforma resolvió un problema logístico gigante. Código limpio, tiempos de carga mínimos y una base de datos que no se cae ni en época de finales. Ingeniería pura."
  },
  {
    id: "02",
    client: "Estudio A&M Arquitectos",
    role: "Visualización Inmobiliaria",
    comment: "Nos entregaron renders con un nivel de realismo y atención a las texturas que nos permitió vender el proyecto en pozo antes de poner un solo ladrillo. El manejo de la luz es impecable."
  },
  {
    id: "03",
    client: "Nexus Hardware",
    role: "E-Commerce",
    comment: "Entienden de lo que hablan. No solo armaron la tienda online perfecta, sino que la lógica del backend para cotizar setups en tiempo real funciona sin ninguna falla."
  },
  {
    id: "04",
    client: "Desarrollos Palermo",
    role: "CGI & Recorridos",
    comment: "El recorrido virtual superó nuestras expectativas. Tomaron los planos en CAD y los transformaron en una experiencia inmersiva que impactó a todos nuestros inversores."
  }
];