import { Artist, ActivityItem, Booking } from './types';

export const ARTISTS: Artist[] = [
  {
    id: '1',
    name: 'Mariana Silva Acústico',
    artistType: 'solo',
    formation: 'solo',
    category: 'MPB Voz e Violão',
    location: 'Vila Madalena, SP',
    eventTypes: ['casamento', 'bodas', 'coquetel'],
    projectTypes: ['cover'],
    priceRange: { min: 450, max: 1200 },
    availability: 'Finais de semana e noites',
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
    artistType: 'trio',
    formation: 'trio',
    category: 'Forró e Baião',
    location: 'Savassi, MG',
    eventTypes: ['festa junina', 'aniversário', 'evento corporativo'],
    projectTypes: ['cover', 'autoral'],
    priceRange: { min: 1200, max: 3000 },
    availability: 'Disponibilidade total em Junho/Julho',
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
    artistType: 'band',
    formation: 'band',
    category: 'Rock Clássico e 2000s',
    location: 'Copacabana, RJ',
    eventTypes: ['formatura', 'festa grande', 'casamento'],
    projectTypes: ['cover'],
    priceRange: { min: 3000, max: 8000 },
    availability: 'Sextas e Sábados',
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
    formation: 'solo',
    eventTypes: ['festa', 'balada'],
    projectTypes: ['cover'],
    priceRange: { min: 600, max: 2000 },
    availability: 'Noites',
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
    formation: 'band',
    eventTypes: ['casamento', 'cerimônia'],
    projectTypes: ['cover'],
    priceRange: { min: 1800, max: 4000 },
    availability: 'Agendamento prévio',
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
    formation: 'band',
    eventTypes: ['festa', 'churrasco'],
    projectTypes: ['cover', 'autoral'],
    priceRange: { min: 1500, max: 3000 },
    availability: 'Finais de semana',
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
    formation: 'duo',
    eventTypes: ['jantar', 'recepção'],
    projectTypes: ['cover'],
    priceRange: { min: 700, max: 1500 },
    availability: 'Noites',
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
    formation: 'band',
    eventTypes: ['formatura', 'festa'],
    projectTypes: ['cover'],
    priceRange: { min: 5000, max: 10000 },
    availability: 'Finais de semana',
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

export const ACTIVITY_FEED: ActivityItem[] = [
  {
    id: 'a1',
    artistId: '3',
    type: 'new_video',
    title: 'Banda RockVolt atualizou o portfólio',
    description: 'Confira o novo vídeo promocional da turnê 2024.',
    timestamp: '2 horas atrás',
    imageUrl: 'https://picsum.photos/seed/concert/600/300'
  },
  {
    id: 'a2',
    artistId: '3',
    type: 'open_project',
    title: 'Projeto Autoral busca Baixista',
    description: 'Banda de Indie Rock em Pinheiros procura baixista com experiência e equipamento próprio para gravação de EP.',
    timestamp: '5 horas atrás',
    location: 'São Paulo, SP'
  },
  {
    id: 'a3',
    artistId: '1',
    type: 'artist_update',
    title: 'Agenda Aberta: Dezembro',
    description: 'Mariana Silva liberou novas datas para confraternizações de fim de ano.',
    timestamp: '1 dia atrás'
  },
  {
    id: 'a4',
    artistId: '5',
    type: 'new_artist',
    title: 'Novo Artista: Quarteto de Cordas Harmony',
    description: 'Especialistas em cerimônias clássicas acabam de chegar à plataforma.',
    timestamp: '1 dia atrás',
    imageUrl: 'https://picsum.photos/seed/violin/600/300'
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

export const REPRESENTATIVES = [
  {
    id: 'rep1',
    name: 'Agência Palco',
    companyName: 'Palco Produções',
    artistsManaged: ['3', '8'],
    verified: true
  }
];