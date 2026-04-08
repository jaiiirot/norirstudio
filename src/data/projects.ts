// Archivo: src/data/projects.ts

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: "Desarrollo Web" | "Arquitectura Visual";
  service: string;
  year: number;
  image: string; // Portada principal
  gallery: string[]; // <-- ¡NUEVO! Galería de imágenes
  description: string;
  techStack: string[];
}

export const projectsData: Project[] = [
  {
    id: "01",
    slug: "itec-ba-platform",
    title: "PLATAFORMA ITEC BA",
    category: "Desarrollo Web",
    service: "Full-Stack // UI/UX",
    year: 2024,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop"
    ],
    description: "Desarrollo integral de una plataforma web escalable enfocada en optimizar la gestión y los procesos de la comunidad estudiantil en la UTN BA. Arquitectura de software robusta diseñada para manejar alto tráfico y bases de datos complejas.",
    techStack: ["React", "Node.js", "TypeScript", "PostgreSQL"]
  },
  {
    id: "02",
    slug: "pabellon-brutalista",
    title: "PABELLÓN BRUTALISTA",
    category: "Arquitectura Visual",
    service: "CGI // Render 3D",
    year: 2024,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1528310263467-33ee662243d4?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
    ],
    description: "Visualización fotorrealista de un espacio institucional en hormigón visto. El proyecto requirió un estudio exhaustivo de la iluminación natural y texturizado avanzado para transmitir la pesadez y frialdad del material en su entorno.",
    techStack: ["3ds Max", "Corona Render", "Photoshop", "Suite Adobe"]
  },
  {
    id: "03",
    slug: "hardware-ecommerce",
    title: "NEXUS HARDWARE",
    category: "Desarrollo Web",
    service: "E-Commerce // Backend",
    year: 2023,
    image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=800&auto=format&fit=crop"
    ],
    description: "Plataforma de comercio electrónico de alto rendimiento para venta de componentes de PC, procesadores y tarjetas gráficas. Se implementó un motor de búsqueda avanzado y un cotizador de armado de setups en tiempo real.",
    techStack: ["Next.js", "Astro", "TailwindCSS", "Stripe API"]
  },
  {
    id: "04",
    slug: "reforma-loft-palermo",
    title: "LOFT INDUSTRIAL",
    category: "Arquitectura Visual",
    service: "Recorrido Virtual // Post",
    year: 2023,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop"
    ],
    description: "Modelado y postproducción para la reforma de un loft industrial. Se trabajó en el contraste entre el acero negro, ladrillo expuesto y mobiliario minimalista, entregando imágenes comerciales de alto impacto para la venta del inmueble.",
    techStack: ["SketchUp", "V-Ray", "Lumion", "Lightroom"]
  }
];