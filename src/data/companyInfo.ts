import { HealthProtocol, RankInfo } from '../types';

export const companyData = {
  name: 'HGW (Health Green World - Mundo Verde Saludable)',
  slogan: 'Salud, Bienestar y Prosperidad con Ganancia Mutua',
  parentGroup: 'Green World International Group',
  history:
    'Corporación con presencia global en más de 69 países y con más de 31 años dedicada a la investigación, desarrollo y comercialización de productos premium para la salud, nutrición y bienestar integral.',
  concept: 'Plan de Ganancia Mutua (50% Patrocinador / 50% Patrocinado en niveles infinitos)',
  disclaimer:
    'Advertencia: Este sitio es operado por un afiliado independiente de HGW Health Green World Panamá. Aunque no es el sitio oficial, el afiliado tiene un amplio conocimiento sobre los productos y el plan de compensación, y puede ofrecer asesoramiento experto. La información aquí proporcionada refleja la experiencia del afiliado y no necesariamente la de HGW Health Green World Panamá. Para información oficial, visite el sitio web de la compañía.',
  sponsor: {
    name: 'Yamilka Batista',
    role: 'Networker Digital & Asesora Oficial HGW',
    code: 'Yamilka507',
    country: 'Panamá',
    email: 'info@negociohgw.com',
    whatsapp: '+50767788375',
    whatsappLink: 'https://wa.me/50767788375',
    registrationLink: 'https://www.healthgreenworld.com/?userName=Yamilka507',
    videoTutorialUrl: 'https://www.youtube.com/embed/cR-aHkU9N4A',
    videoTutorialDirect: 'https://www.youtube.com/watch?v=cR-aHkU9N4A&t=5s',
    academyUrl: 'https://academiahgw.online',
    profileImage: 'https://hgwpanama.com/wp-content/uploads/Foto-de-perfil-Yamilka-Batista-HGW.png',
  },
  founders: [
    {
      name: 'Dra. Deming Li',
      title: 'Presidente de Green World Group',
      image: 'https://hgwpanama.com/wp-content/uploads/2026/08/HGW-Dr.-Deming-Li-Presidente-de-Green-World-Group.webp',
      credentials: [
        'Doctorado en Biología en la Universidad Cornell, EE.UU.',
        'Doctorado en la Universidad de Wisconsin, EE.UU.',
        'Investigadora del Instituto de Michigan, EE.UU.',
        'Miembro de la Blueberry Association en América del Norte.',
        'Vicepresidente del Consejo de la Asociación de Salud de Tianjin.',
      ],
    },
    {
      name: 'Mr. Peter Li',
      title: 'Vicepresidente Global Green World Group & CEO Región Latinoamérica',
      image: 'https://hgwpanama.com/wp-content/uploads/2026/08/HGW-Peter-Li.webp',
      credentials: [
        'Más de 18 años de experiencia internacional en Mercadeo en Red.',
        'Egresado de la Universidad en Ciencias Políticas y Derecho.',
        'Líder del crecimiento y expansión de HGW en toda Latinoamérica.',
      ],
    },
  ],
  ranks: [
    {
      name: 'Rango Plata',
      accumulatedUSD: '500 USD Acumulados',
      description: 'Primer escalón de liderazgo. Acceso a bonos de equipo y desarrollo.',
      iconColor: 'bg-slate-300 text-slate-800',
    },
    {
      name: 'Rango Oro',
      accumulatedUSD: '1,500 USD Acumulados',
      description: 'Liderazgo consolidado con bonos adicionales y mayor profundidad.',
      iconColor: 'bg-amber-400 text-amber-900',
    },
    {
      name: 'Rango Platino',
      accumulatedUSD: '3,000 USD Acumulados',
      description: 'Alta duplicación de equipo y bonos de recompra ampliados.',
      iconColor: 'bg-teal-300 text-teal-900',
    },
    {
      name: 'Rango Diamante',
      accumulatedUSD: '5,000 USD Acumulados',
      description: 'Rango élite para constructores de redes con incentivos globales.',
      iconColor: 'bg-cyan-400 text-cyan-950',
    },
    {
      name: 'Diamante 1 a 7 Estrellas',
      accumulatedUSD: '1 a 7 Diamantes Directos',
      description: 'Desarrolla diamantes en tu organización y califica a viajes internacionales, cruceros, Bono Auto, Bono Casa y Club Millonario.',
      iconColor: 'bg-indigo-500 text-white',
    },
  ] as RankInfo[],
  bonuses: [
    {
      number: 1,
      title: 'Bono de Venta al Público',
      percentage: '30% a 60%',
      description:
        'Obtén entre un 30% y 60% de margen de utilidad directa cuando tus clientes registrados realizan compras de hasta 100 BV.',
    },
    {
      number: 2,
      title: 'Bono de Inicio Rápido',
      percentage: '20% hasta 2 niveles',
      description:
        'Gana el 20% en tus dos primeros niveles de patrocinio con frontalidad ilimitada. Aplica sistema de Ganancia Mutua 50/50.',
    },
    {
      number: 3,
      title: 'Bono de Desarrollo',
      percentage: '$0.20 a $3.00 USD por BV',
      description:
        'Cobro residual de hasta 10 niveles ($0.20 Prejunior, $0.50 Junior, $1.50 Senior, $3.00 Master) por cada activación.',
    },
    {
      number: 4,
      title: 'Bono de Equipo (Binario Híbrido)',
      percentage: '5% a 10% diario',
      description:
        'Calculado sobre el BV menor entre tu equipo y el de tu patrocinador. Topes diarios de $50 (Prejunior), $120 (Junior), $360 (Senior) y hasta $720 USD diarios (Master).',
    },
    {
      number: 5,
      title: 'Bono de Recompra (Matriz 2x10)',
      percentage: '5% hasta 10 niveles',
      description:
        'Ganas de tus afiliados directos e indirectos Y ganas el 2.5% de la red de tu patrocinador que se coloque después de ti. Recompra mensual mínima desde solo 10 BV (~$20 USD).',
    },
    {
      number: 6,
      title: 'Bono Élite',
      percentage: '4% hasta 6 generaciones',
      description:
        'Calculado sobre el bono de equipo de tu red (hasta 3 generaciones para Senior y 6 generaciones para Master).',
    },
    {
      number: 7,
      title: 'Bono Mérito Personal',
      percentage: 'Excedente de BV',
      description:
        'Se activa cuando los BV generados por tu propio equipo superan los BV de la red de tu patrocinador.',
    },
    {
      number: 8,
      title: 'Bono Ganancia Mutua 50-50',
      percentage: '50% / 50%',
      description:
        'Concepto revolucionario: compartes el 50% con tu patrocinador y recibes el 50% de las ganancias de tus afiliados en líneas y niveles infinitos.',
    },
  ],
  associations: [
    'Asociación Panameña de Venta Directa',
    'Asociación Colombiana de Venta Directa (ACOVEDI)',
    'Asociación Boliviana de Venta Directa',
    'Asociación Ecuatoriana de Venta Directa (AEVD)',
    'Asociación Guatemalteca de Venta Directa',
    'World Federation of Direct Selling Associations (WFDSA)',
  ],
  countries: [
    'Panamá',
    'Perú',
    'México',
    'Bolivia',
    'Ecuador',
    'Chile',
    'Colombia',
    'España',
    'Costa Rica',
    'Guatemala',
    'El Salvador',
    'República Dominicana',
    'Paraguay',
    'Bangladesh',
    'Pakistán',
  ],
  shippingMethods: [
    {
      title: 'Envío a Domicilio en todo Panamá',
      provider: 'Servientrega Express',
      description:
        'Entrega directa en tu hogar u oficina en todas las provincias de Panamá. La tarifa de flete se calcula en base al peso final del paquete.',
    },
    {
      title: 'Retiro Directo en Oficina HGW',
      provider: 'Oficinas Oficiales HGW Panamá',
      description:
        'Disponible para socios y clientes registrados con cuenta activa. Recoge tus pedidos inmediatamente sin costo de envío.',
    },
  ],
};

export const healthProtocols: HealthProtocol[] = [
  {
    id: 'vision',
    title: 'Protocolo Cuidado de la Visión',
    icon: 'Eye',
    badge: 'Superalimento Antocianinas',
    description:
      'Nutrición celular especializada con arándano azul de Canadá y frutos rojos para proteger la retina del daño por pantallas, fatiga visual y mejorar la microcirculación ocular.',
    recommendedProducts: [
      'Blueberry Candy',
      'Café de arándanos (Blueberry Coffee)',
      'Berry Juice HIGH VC',
      'Péptido de colágeno de arándano',
      'Mermelada de Arándanos',
    ],
    keyBenefits: [
      'Antocianinas con poder antioxidante 50x mayor a la Vitamina E',
      'Protección comprobada de células fotorreceptoras y retina',
      'Reduce la fatiga y sequedad visual por computadoras y celulares',
    ],
  },
  {
    id: 'colon',
    title: 'Protocolo Limpieza de Colon & Digestivo',
    icon: 'Activity',
    badge: 'Desintoxicación & Microbiota',
    description:
      'Programa integral para depurar el tracto digestivo, alcalinizar el pH, restaurar la microbiota oral e intestinal y eliminar toxinas acumuladas.',
    recommendedProducts: [
      'Fresh Drink Chang Jing Jing',
      'Biolacti Candy',
      'Pasta dental con Probióticos',
      'Té moldeador profesional / Pro Shaping Tea',
      'Proteína de soja con arándanos en polvo',
    ],
    keyBenefits: [
      'Limpieza suave pero profunda del colon con clorofila y cebada',
      'Aporte de cepas probióticas Lactobacillus activas',
      'Alivia el tránsito lento, pesadez estomacal y toxinas',
    ],
  },
  {
    id: 'immunity',
    title: 'Protocolo Inmunológico & Vitalidad',
    icon: 'ShieldCheck',
    badge: 'Hongos Medicinales & Adaptógenos',
    description:
      'Fortalecimiento celular de triple escudo con Ganoderma lucidum (Reishi), Cordyceps sinensis, Spirulina de agua dulce y Ashwagandha.',
    recommendedProducts: [
      'Café con Cordyceps',
      'Café soluble de Ganoderma',
      'Cápsula Spirulina Plus',
      'Choco Gano',
      'Ganubi Candy / Ganoderma Candy',
      'Café de Ashwagandha',
    ],
    keyBenefits: [
      'Polisacáridos y triterpenos que modulan las defensas naturales',
      'Mayor oxigenación y resistencia física sin agotamiento',
      'Reducción del estrés celular y equilibrio bioenergético',
    ],
  },
  {
    id: 'turmalina',
    title: 'Terapia de Turmalina & Alivio Muscular',
    icon: 'Flame',
    badge: 'Iones Negativos & Termoterapia',
    description:
      'Tecnología no invasiva con nanoturmalina e imanes que liberan calor natural, aniones e infrarrojo lejano para relajar la musculatura y reactivar la circulación.',
    recommendedProducts: [
      'Tourmaline Thermo (WATERSON)',
      'Protector de cuello autocalentable de turmalina',
      'Protector de cintura de turmalina',
      'Rodillera autocalentable de turmalina',
      'Plantillas de turmalina',
      'Colgante Piedra Energética',
      'Almohada magnética de turmalina',
    ],
    keyBenefits: [
      'Calor terapéutico continuo sin baterías ni cables',
      'Estimulación de microcirculación y drenaje linfático',
      'Alcalinización natural del agua en el termo Waterson',
    ],
  },
];
