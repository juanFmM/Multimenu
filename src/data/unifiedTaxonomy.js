import { stripEmoji } from '../lib/stripEmoji'

// ── Categorías unificadas (orientadas al cliente, agnósticas de marca) ─────────
export const unifiedCategories = [
  { id: 'compartir',    name: 'Para Compartir',      icon: 'fa-solid fa-people-group',   description: 'Picadas, tequeños y entradas para la mesa' },
  { id: 'hamburguesas', name: 'Hamburguesas',        icon: 'fa-solid fa-burger',         description: 'Smash y premium, bien cargadas' },
  { id: 'sandwiches',   name: 'Sándwiches & Pepitos', icon: 'fa-solid fa-bread-slice',   description: 'Pan baguette y clásicos callejeros' },
  { id: 'arepas',       name: 'Arepas',              icon: 'fa-solid fa-mortar-pestle',  description: 'El sabor de Venezuela' },
  { id: 'cachapas',     name: 'Cachapas',            icon: 'fa-solid fa-seedling',       description: 'Dulces y esponjosas' },
  { id: 'patacones',    name: 'Patacones',           icon: 'fa-solid fa-drumstick-bite', description: 'Crujientes y sabrosos' },
  { id: 'hotdogs',      name: 'Hot Dogs',            icon: 'fa-solid fa-hotdog',         description: 'Hot dogs & nuggets' },
  { id: 'papas',        name: 'Papas',               icon: 'fa-solid fa-bowl-food',      description: 'Papas fritas con toppings especiales' },
  { id: 'postres',      name: 'Postres',             icon: 'fa-solid fa-ice-cream',      description: 'Para cerrar con dulzura' },
]

// ── Mapa: categoría original de cada restaurante → categoría unificada ─────────
const CHIGUIRE_MAP = {
  combi:     'compartir',
  entradas:  'compartir',
  hotdogs:   'hotdogs',
  arepas:    'arepas',
  cachapas:  'cachapas',
  patacones: 'patacones',
  pepitos:   'sandwiches',
}

const D44_MAP = {
  entradas:        'compartir',
  papas:           'papas',
  sandwiches:      'sandwiches',
  'smash-burgers': 'hamburguesas',
  burgers:         'hamburguesas',
  postres:         'postres',
}

// Normaliza un item de cualquier fuente al formato unificado.
// `prefix` evita colisiones de id entre fuentes; `map` traduce la categoría.
// Origen del restaurante NO se conserva — la vista es 100% transparente.
function normalize(item, prefix, map) {
  const sourceCat = item.categoryId ?? item.category_id
  const unifiedCat = map[sourceCat]
  if (!unifiedCat) return null // categoría sin destino unificado → se descarta
  return {
    ...item,
    id: `${prefix}-${item.id}`,
    categoryId: unifiedCat,
    image: item.image || item.imageUrl || item.image_url || null,
    badge: stripEmoji(item.badge),
  }
}

// Fusiona los items de ambos restaurantes en una sola lista unificada y devuelve
// solo las categorías que terminan teniendo al menos un plato.
export function buildUnifiedMenu(chiguireItems = [], d44Items = []) {
  const items = [
    ...chiguireItems.map((it) => normalize(it, 'chi', CHIGUIRE_MAP)),
    ...d44Items.map((it) => normalize(it, 'd44', D44_MAP)),
  ].filter(Boolean)

  const usedCats = new Set(items.map((it) => it.categoryId))
  const categories = unifiedCategories.filter((cat) => usedCats.has(cat.id))

  return { categories, items }
}
