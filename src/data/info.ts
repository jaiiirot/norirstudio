// Variables de entorno para el componente de Contacto
export const contactInfo = {
  email: import.meta.env.PUBLIC_EMAIL || "norirstudio@gmail.com",
  phone: import.meta.env.PUBLIC_PHONE || "1141430021",
  whatsappLink: `https://wa.me/549${import.meta.env.PUBLIC_PHONE || "1141430021"}`,
};

export const socialLinks = {
  instagram: import.meta.env.PUBLIC_INSTAGRAM || "#",
  tiktok: import.meta.env.PUBLIC_TIKTOK || "#",
  facebook: import.meta.env.PUBLIC_FACEBOOK || "#",
  behance: import.meta.env.PUBLIC_BEHANCE || "#",
  github: import.meta.env.PUBLIC_GITHUB || "#",
};