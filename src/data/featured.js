// Lista de platos destacados para el carrusel "Destacados" del menú unificado.
// Se matchea por NOMBRE (no por id): los items de Distrito 44 vienen de Supabase
// con ids dinámicos (UUID generados por la base de datos), mientras ChiguireFood
// usa ids estáticos. El nombre es el único identificador estable entre ambos.
// Si un nombre no se encuentra (p. ej. el admin renombró el plato), se omite
// silenciosamente — el carrusel nunca rompe.
export const FEATURED_NAMES = [
  'Llanera',             // Cachapa Llanera — ChiguireFood · Signature
  'El Que Frao',         // Patacón — ChiguireFood · Signature
  'Cabimera',            // Arepa Cabimera — ChiguireFood · Especial
  'Oklahoma',            // Burger 14oz — Distrito 44 · Especial
  'BBQ Burger',          // Burger Premium — Distrito 44 · Popular
  'Gaucho Burger',       // Burger Premium — Distrito 44 · Clásica
  'Pepito Mixto',        // ChiguireFood · Especial
  'UFO Burger',          // Smash Burger — Distrito 44
  'Tequeños',            // ChiguireFood · Popular
  'Hot Dog Especial',    // ChiguireFood
]
