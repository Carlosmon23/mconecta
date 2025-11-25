import { Artist, SocialPost, Booking } from './types';

export const ARTISTS: Artist[] = [
  {
    id: '1',
    name: 'Mariana Silva Acústico',
    category: 'MPB Voz e Violão',
    location: 'Vila Madalena, SP',
    price: 'R$ 450/hora',
    rating: 4.98,
    reviewCount: 124,
    verified: true,
    imageUrl: 'https://picsum.photos/seed/mariana/400/400',
    description: 'Especialista em casamentos intimistas e coquetéis corporativos. Um repertório que viaja da Bossa Nova ao Pop Internacional com arranjos exclusivos.',
    equipment: ['Sistema de Som Bose L1', 'Microfone Shure Beta 58', 'Violão Martin'],
    reviews: [
      {
        id: 'r1',
        author: 'João Pereira',
        date: 'Dez 2024',
        text: 'Contratei a Mariana para o meu noivado e foi mágico! Voz incrível e super pontual.',
        avatarUrl: 'https://picsum.photos/seed/joao/100/100'
      },
      {
        id: 'r2',
        author: 'Luísa Mendes',
        date: 'Nov 2024',
        text: 'Profissionalismo nota 10. Todos os convidados elogiaram a elegância do repertório.',
        avatarUrl: 'https://picsum.photos/seed/luisa/100/100'
      }
    ]
  },
  {
    id: '2',
    name: 'Trio Forró Pé de Serra',
    category: 'Forró e Baião',
    location: 'Savassi, MG',
    price: 'R$ 1.200 p/ evento',
    rating: 4.85,
    reviewCount: 89,
    verified: true,
    imageUrl: 'https://picsum.photos/seed/forro/400/400',
    description: 'O autêntico forró nordestino para animar sua festa junina ou aniversário. Zabumba, triângulo e sanfona com muita energia.',
    equipment: ['Iluminação básica', 'Som completo para até 200 pessoas'],
    reviews: []
  },
  {
    id: '3',
    name: 'Banda RockVolt',
    category: 'Rock Clássico e 2000s',
    location: 'Copacabana, RJ',
    price: 'A partir de R$ 3.000',
    rating: 5.0,
    reviewCount: 42,
    verified: true,
    imageUrl: 'https://picsum.photos/seed/rock/400/400',
    description: 'Show completo com iluminação. Tocamos de Queen a Charlie Brown Jr. A melhor escolha para formaturas e grandes festas.',
    equipment: ['PA Completo', 'Mesa Digital', 'Iluminação DMX'],
    reviews: []
  },
  {
    id: '4',
    name: 'DJ Lucas Beat',
    category: 'DJ Open Format',
    location: 'Pinheiros, SP',
    price: 'R$ 600/hora',
    rating: 4.92,
    reviewCount: 215,
    verified: false,
    imageUrl: 'https://picsum.photos/seed/djlucas/400/400',
    description: 'Setlist personalizado para o seu gosto. Funk, Eletrônica e Hits do momento para não deixar ninguém parado.',
    equipment: ['CDJ 2000 Nexus', 'Booth Personalizada'],
    reviews: []
  },
  {
    id: '5',
    name: 'Quarteto de Cordas Harmony',
    category: 'Música Clássica',
    location: 'Curitiba, PR',
    price: 'R$ 1.800 cerimônia',
    rating: 4.99,
    reviewCount: 76,
    verified: true,
    imageUrl: 'https://picsum.photos/seed/violin/400/400',
    description: 'Elegância absoluta para a entrada da noiva. Músicos da orquestra sinfônica disponíveis para o seu evento.',
    equipment: [],
    reviews: []
  },
  {
    id: '6',
    name: 'Samba da Ladeira',
    category: 'Roda de Samba',
    location: 'Santa Teresa, RJ',
    price: 'R$ 1.500 p/ tarde',
    rating: 4.75,
    reviewCount: 310,
    verified: true,
    imageUrl: 'https://picsum.photos/seed/samba/400/400',
    description: 'Aquele samba de raiz para acompanhar a feijoada de domingo. Alegria garantida.',
    equipment: [],
    reviews: []
  },
  {
    id: '7',
    name: 'Duo Jazz & Blues',
    category: 'Jazz Instrumental',
    location: 'Florianópolis, SC',
    price: 'R$ 700/hora',
    rating: 4.88,
    reviewCount: 54,
    verified: true,
    imageUrl: 'https://picsum.photos/seed/jazz/400/400',
    description: 'Piano e Saxofone para criar uma atmosfera sofisticada em jantares e recepções.',
    equipment: [],
    reviews: []
  },
  {
    id: '8',
    name: 'Banda Baile Show',
    category: 'Variedades',
    location: 'Goiânia, GO',
    price: 'A combinar',
    rating: 4.60,
    reviewCount: 22,
    verified: false,
    imageUrl: 'https://picsum.photos/seed/baile/400/400',
    description: 'Banda completa para tocar todos os ritmos. Estrutura de som própria.',
    equipment: [],
    reviews: []
  }
];

export const SOCIAL_POSTS: SocialPost[] = [
  {
    id: 'p1',
    artistId: '7', // Linked to Duo Jazz
    userHandle: '@SaxDavi',
    userName: 'Davi Saxofonista',
    userAvatar: 'https://picsum.photos/seed/saxdavi/100/100',
    content: 'Solo improvisado no casamento de ontem! A energia estava surreal. 🎷✨ #CasamentoSP #SaxAoVivo',
    imageUrl: 'https://picsum.photos/seed/post1/600/800',
    likes: 342,
    comments: 12,
    type: 'video'
  },
  {
    id: 'p2',
    artistId: '3', // Linked to RockVolt
    userHandle: '@RockVolt',
    userName: 'Banda RockVolt',
    userAvatar: 'https://picsum.photos/seed/rock/100/100',
    content: 'A energia da galera foi insana! Agenda aberta para Dezembro, restam poucas datas. 🤘🎸',
    imageUrl: 'https://picsum.photos/seed/concert/600/800',
    likes: 856,
    comments: 45,
    type: 'image'
  },
  {
    id: 'p3',
    artistId: '1', // Linked to Mariana
    userHandle: '@MariAcustico',
    userName: 'Mariana Silva',
    userAvatar: 'https://picsum.photos/seed/mariana/100/100',
    content: 'Tarde acústica no Bar do Zé. Quem vem pedir uma música?',
    imageUrl: 'https://picsum.photos/seed/acoustic/600/800',
    likes: 120,
    comments: 8,
    type: 'image'
  },
  {
    id: 'p4',
    artistId: '4', // Linked to DJ Lucas
    userHandle: '@DjLucas',
    userName: 'DJ Lucas Beat',
    userAvatar: 'https://picsum.photos/seed/djlucas/100/100',
    content: 'Montando o setlist pro fim de semana. Qual não pode faltar? 👇',
    imageUrl: 'https://picsum.photos/seed/djsetup/600/800',
    likes: 210,
    comments: 34,
    type: 'image'
  }
];

export const CLIENT_BOOKINGS: Booking[] = [
    {
        id: 'b1',
        artistName: 'Mariana Silva Acústico',
        artistImage: 'https://picsum.photos/seed/mariana/100/100',
        date: '24 Dez, 2024',
        eventName: 'Ceia de Natal em Família',
        price: 'R$ 1.350',
        status: 'confirmed'
    },
    {
        id: 'b2',
        artistName: 'Banda RockVolt',
        artistImage: 'https://picsum.photos/seed/rock/100/100',
        date: '15 Jan, 2025',
        eventName: 'Aniversário de 30 anos',
        price: 'R$ 3.000',
        status: 'pending'
    },
    {
        id: 'b3',
        artistName: 'DJ Lucas Beat',
        artistImage: 'https://picsum.photos/seed/djlucas/100/100',
        date: '10 Nov, 2024',
        eventName: 'Churrasco da Empresa',
        price: 'R$ 1.800',
        status: 'completed'
    }
];