export const chiguireCategories = [
  { id: 'combi',     name: 'La Combi',  icon: 'fa-solid fa-utensils',       description: 'Para compartir en mesa' },
  { id: 'entradas',  name: 'Entradas',  icon: 'fa-solid fa-cheese',          description: 'Para abrir el apetito' },
  { id: 'hotdogs',   name: 'Hot Dogs',  icon: 'fa-solid fa-hotdog',          description: 'Hot dogs & nuggets' },
  { id: 'arepas',    name: 'Arepas',    icon: 'fa-solid fa-bread-slice',     description: 'El sabor de Venezuela' },
  { id: 'cachapas',  name: 'Cachapas',  icon: 'fa-solid fa-seedling',        description: 'Dulces y esponjosas' },
  { id: 'patacones', name: 'Patacón',   icon: 'fa-solid fa-drumstick-bite',  description: 'Crujientes y sabrosos' },
  { id: 'pepitos',   name: 'Pepitos',   icon: 'fa-solid fa-burger',          description: 'Pan baguette bien cargado' },
]

export const chiguireItems = [
  // LA COMBI
  { id: 'cb1', categoryId: 'combi', name: 'La Combi Completa', image: '/img/extra-3.jpg',
    description: 'Bandeja mixta para compartir. Lunes y miércoles a precio especial de $1400.', price: 1700, badge: 'Compartir' },

  // ENTRADAS
  { id: 'en1', categoryId: 'entradas', name: 'Tequeños', image: '/img/tequenos.jpg',
    description: 'Crujientes tequeños rellenos de queso, perfectos para compartir.',
    price: null, variants: [{ label: '5 unidades', price: 300 }, { label: '8 unidades', price: 400 }, { label: '12 unidades', price: 550 }], badge: 'Popular' },
  { id: 'en2', categoryId: 'entradas', name: 'Empanadas',
    description: '4 unidades entre pollo, res y queso. Opción perfecta para compartir.', price: 360, badge: null },
  { id: 'en3', categoryId: 'entradas', name: 'Arepitas Chicharrón',
    description: 'Una deliciosa mezcla de nuestra masa pan, bacón, chicharrón y queso llanero.', price: 350, badge: 'Quesero' },

  // HOT DOGS
  { id: 'hd1', categoryId: 'hotdogs', name: 'Nuggets',
    description: 'Crujientes bocados de pollo, ideales para los más chamos.', price: 350, badge: 'Favorito' },
  { id: 'hd2', categoryId: 'hotdogs', name: 'Hot Dog Kids',
    description: 'Versión pequeña perfecta para los niños. ¡Un sabor que encanta!', price: 150, badge: 'Kids' },
  { id: 'hd3', categoryId: 'hotdogs', name: 'Hot Dog Especial', image: '/img/hot-dog.jpg',
    description: 'Nuestro hot dog parrillero cargado con todos los toppings de la casa.', price: 375, badge: 'Especial' },

  // AREPAS
  { id: 'ar1', categoryId: 'arepas', name: 'Especial',
    description: 'Rellena con jugosa res mechada, plátano maduro, salchicha artesanal y queso gouda.', price: 550, badge: null },
  { id: 'ar2', categoryId: 'arepas', name: 'Parrillera',
    description: 'Arepa frita rellena con res asada, salchicha artesanal, aguacate y queso de mano fundido.', price: 650, badge: null },
  { id: 'ar3', categoryId: 'arepas', name: 'Cabimera', image: '/img/arepa-cabimera.jpg',
    description: 'Arepa frita en trozos, jugosa res mechada, huevo frito, bacon, queso llanero rallado, aguacate, pico de gallo y mix de salsas.', price: 700, badge: 'Especial' },
  { id: 'ar4', categoryId: 'arepas', name: 'Arepa de Pollo Mechado',
    description: 'Clásica arepa rellena con jugoso pollo mechado.', price: 450, badge: null },
  { id: 'ar5', categoryId: 'arepas', name: 'Arepa de Res Mechada',
    description: 'Clásica arepa rellena con sabrosa res mechada.', price: 550, badge: null },

  // CACHAPAS
  { id: 'ca1', categoryId: 'cachapas', name: 'Cachapa con Queso', image: '/img/extra-2.jpg',
    description: 'Esponjosa cachapa de maíz tierno con abundante queso de mano.', price: 650, badge: null },
  { id: 'ca2', categoryId: 'cachapas', name: 'Cachapa con Pollo',
    description: 'Cachapa de maíz con jugoso pollo y queso de mano.', price: 680, badge: null },
  { id: 'ca3', categoryId: 'cachapas', name: 'Cachapa Res Mechada', image: '/img/cachapa-res.jpg',
    description: 'Cachapa con res mechada bien sazonada y queso de mano.', price: 780, badge: null },
  { id: 'ca4', categoryId: 'cachapas', name: 'Juan Hilario', image: '/img/cachapa-juan-hilario.jpg',
    description: 'Rellena con queso de mano, acompañada de salchicha artesanal, plátano maduro frito y queso llanero.', price: 750, badge: 'Popular' },
  { id: 'ca5', categoryId: 'cachapas', name: 'Chicharrón', image: '/img/extra-1.jpg',
    description: 'Rellena con queso de mano, coronada con un chicharrón jugoso y acompañada con limón.', price: 885, badge: null },
  { id: 'ca6', categoryId: 'cachapas', name: 'Llanera', image: '/img/cachapa-llanera.jpg',
    description: 'Churrasco bien servido sobre nuestra cachapa rellena con queso de mano, coronado con salchicha artesanal y chimichurri.', price: 1050, badge: 'Signature' },

  // PATACÓN
  { id: 'pt1', categoryId: 'patacones', name: 'Patacón con Pollo', image: '/img/patacon-pollo.jpg',
    description: 'Crujiente patacón relleno con jugoso pollo. Opción entre plátano maduro o verde.', price: 680, badge: null },
  { id: 'pt2', categoryId: 'patacones', name: 'Patacón Res Mechada', image: '/img/patacon-res.jpg',
    description: 'Crujiente patacón relleno con res mechada bien sazonada. Opción entre plátano maduro o verde.', price: 780, badge: null },
  { id: 'pt3', categoryId: 'patacones', name: 'Costilla BBQ', image: '/img/costilla-bbq.jpg',
    description: 'Relleno con masa de costilla a la BBQ, mix de repollo, pico de gallo, salsas especiales y coronado con un jugoso queso gratinado.', price: 850, badge: 'Especial' },
  { id: 'pt4', categoryId: 'patacones', name: 'Llanero',
    description: 'Relleno con carne de res asada, salchicha, aguacate, mix de repollo, salsa de queso y bacon, coronado con queso a la plancha.', price: 880, badge: null },
  { id: 'pt5', categoryId: 'patacones', name: 'El Que Frao', image: '/img/el-que-frao.jpg',
    description: 'Relleno con jugosa carne de res asada, pollo a la plancha, salchicha parrillera, mix de repollo, tomate, aguacate, salsas y queso gratinado.', price: 980, badge: 'Signature' },

  // PEPITOS
  { id: 'pe1', categoryId: 'pepitos', name: 'Pepito de Pollo',
    description: 'Pan baguette relleno con jugoso pollo, bacón, papita rallada, salsas especiales, tomate, lechuga y queso gratinado.', price: 800, badge: null },
  { id: 'pe2', categoryId: 'pepitos', name: 'Pepito de Res',
    description: 'Pan baguette relleno con sabrosa carne de res, bacón, papita rallada, salsas especiales, tomate, lechuga y queso gratinado.', price: 880, badge: 'Popular' },
  { id: 'pe3', categoryId: 'pepitos', name: 'Pepito Mixto', image: '/img/pepito-mixto.jpg',
    description: 'Pan baguette relleno con la carne de su elección, bacón, papita rallada, salsas especiales, tomate, lechuga y queso gratinado. Para 2 personas.', price: 985, badge: 'Especial' },
]
