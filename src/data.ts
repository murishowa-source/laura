import { BentoItem, ReflectionCard, FAQItem, Testimonial } from "./types";

export const bentoItems: BentoItem[] = [
  {
    id: "online",
    title: "Terapia 100% Online",
    subtitle: "Sessões seguras de onde estiver",
    icon: "Laptop",
    description: "Conecte-se de qualquer lugar do mundo com total confidencialidade e segurança, no aconchego do seu espaço preferido.",
    size: "medium",
    badge: "Flexibilidade",
    colorClass: "from-amber-500/10 to-transparent"
  },
  {
    id: "existential",
    title: "Abordagem Existencial & Fenomenológica",
    subtitle: "Uma psicoterapia centrada em você",
    icon: "Compass",
    description: "Um mergulho profundo na sua existência, compreendendo suas escolhas, valores e liberdade sem rótulos estáticos. Focamos no que você está vivenciando no aqui-agora para descobrir novos sentidos e potencialidades.",
    size: "large",
    badge: "Filosofia Clínica",
    colorClass: "from-amber-500/20 via-yellow-500/5 to-transparent"
  },
  {
    id: "humanist",
    title: "Acolhimento Humanista",
    subtitle: "Conversas leves e transformadoras",
    icon: "Heart",
    description: "Um espaço seguro construído sobre aceitação positiva incondicional, escuta ativa e empatia profunda para acalmar a mente e o coração.",
    size: "medium",
    badge: "Empatia",
    colorClass: "from-rose-500/10 to-transparent"
  },
  {
    id: "corporate",
    title: "Gestão de Pessoas & Carreira",
    subtitle: "Estresse, liderança e transições",
    icon: "Briefcase",
    description: "Com pós-graduação em Gestão de Pessoas, auxilio profissionais e líderes a lidarem com Burnout, ansiedade corporativa, desenvolvimento de inteligência emocional e transições de carreira desafiadoras.",
    size: "wide",
    badge: "Carreira & Liderança",
    colorClass: "from-blue-500/10 to-transparent"
  },
  {
    id: "aba",
    title: "Ciência Comportamental (ABA)",
    subtitle: "Ações práticas e consistentes",
    icon: "Brain",
    description: "Formação em ABA que agrega ferramentas estruturadas ao acolhimento existencial, promovendo novos hábitos e melhorando o foco cotidiano de maneira assertiva.",
    size: "small",
    badge: "Comportamento",
    colorClass: "from-emerald-500/10 to-transparent"
  }
];

export const reflectionCards: ReflectionCard[] = [
  {
    id: "sentido",
    label: "Busca de Sentido",
    emoji: "",
    title: "Para onde caminha o seu desejo?",
    text: "Na psicologia existencial, compreendemos que o sentido da vida não é um enigma pronto a ser descoberto, mas sim uma obra de arte a ser ativamente esculpida pelas suas escolhas. Se hoje as coisas parecem vazias ou confusas, este é um convite para fazermos uma pausa consciente e olharmos para o que genuinamente importa para você.",
    quote: "Quem tem um 'para quê' pelo qual viver pode suportar quase qualquer 'como'.",
    author: "Viktor Frankl"
  },
  {
    id: "sobrecarga",
    label: "Sobrecarga e Ansiedade",
    emoji: "",
    title: "O peso do que não é verdadeiramente seu",
    text: "Muitas vezes, carregamos cobranças e papéis silenciosos que foram moldados por expectativas externas. A fenomenologia nos ensina a recuar e 'colocar o mundo entre parênteses' para podermos escutar com honestidade o que clama por atenção dentro de nós. Vamos, juntos, aprender a soltar as cargas extras e respirar com mais leveza.",
    quote: "O ser humano é o único que não apenas é, mas decide o que será no instante seguinte.",
    author: "Jean-Paul Sartre"
  },
  {
    id: "incerteza",
    label: "Medo do Futuro",
    emoji: "",
    title: "Habitar o desconhecido com presença",
    text: "A angústia que sentimos em relação ao amanhã nada mais é do que o reflexo da nossa imensa liberdade de criar. Em nossas sessões, não tentamos controlar o incontrolável; em vez disso, fortalecemos as suas raízes no presente, permitindo que você navegue pela impermanência com mais segurança interna e flexibilidade.",
    quote: "O curioso paradoxo é que, quando me aceito como sou, posso mudar.",
    author: "Carl Rogers"
  },
  {
    id: "transicao",
    label: "Transições de Vida",
    emoji: "",
    title: "O limiar de quem você está se tornando",
    text: "Seja uma mudança profissional, o término de um ciclo ou a chegada de uma nova fase, os períodos de transição geram vazios que assustam. Mas na perspectiva humanista, esses momentos são portais férteis para reavaliar trajetórias, redescobrir potencialidades adormecidas e se reapropriar de sua própria voz.",
    quote: "Tornar-se a si mesmo é o maior e mais belo ato de coragem.",
    author: "Søren Kierkegaard"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "dep-1",
    name: "Mariana Vasconcellos",
    age: 34,
    city: "São Paulo",
    role: "Diretora de Marketing",
    text: "A Laura tem uma escuta tão leve e, ao mesmo tempo, tão precisa. Em um momento de profunda transição de carreira e Burnout, as sessões online se tornaram meu porto seguro semanal. Senti-me acolhida de verdade, sem diagnósticos frios ou fórmulas prontas. Recomendo de olhos fechados!",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    rating: 5
  },
  {
    id: "dep-2",
    name: "Guilherme Alencar",
    age: 28,
    city: "Lisboa (Atendimento Online)",
    role: "Engenheiro de Software",
    text: "Mesmo morando no exterior, a psicoterapia com a Laura me deu uma base incrível. Sua abordagem existencial me ajudou a parar de fugir da ansiedade e a entendê-la como parte do meu processo de escolha. O atendimento online é impecável e super acolhedor.",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    rating: 5
  },
  {
    id: "dep-3",
    name: "Beatriz Helena",
    age: 42,
    city: "Curitiba",
    role: "Arquiteta e Gestora",
    text: "A junção que a Laura faz entre a sensibilidade humanista e o entendimento de desenvolvimento pessoal é fantástica. Ela entende as pressões de quem lidera pessoas. Minha relação comigo mesma e com minha equipe mudou da água para o vinho.",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
    rating: 5
  },
  {
    id: "dep-4",
    name: "Rodrigo Mendes",
    age: 31,
    city: "Belo Horizonte",
    role: "Designer de Produto",
    text: "Eu tinha muito preconceito com terapia online até começar com a Laura. Ela cria um clima tão descontraído e amigável que sinto que estou conversando em um café, mas com insights absurdamente profundos que transformam o meu dia a dia.",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
    rating: 5
  }
];

export const faqItems: FAQItem[] = [
  {
    id: "faq-1",
    question: "Como funcionam as sessões de terapia 100% online?",
    answer: "As consultas ocorrem por videochamada através de plataformas confidenciais e seguras (como Google Meet). Você receberá um link individual antes de cada sessão. Tudo que você precisa é de um dispositivo (celular ou computador) com internet estável e um canto tranquilo onde se sinta à vontade para conversar com total privacidade."
  },
  {
    id: "faq-2",
    question: "O que significa ter uma abordagem Humanista, Fenomenológica e Existencial?",
    answer: "Significa que o foco do nosso trabalho está na sua experiência direta de vida e na forma como você enxerga o mundo. Não tentamos encaixar você em rótulos psiquiátricos rígidos. Olhamos para suas escolhas, sua liberdade e a busca de sentido no presente, estabelecendo um diálogo caloroso, de igual para igual, onde você é ouvido em toda a sua complexidade."
  },
  {
    id: "faq-3",
    question: "A terapia serve para todas as idades?",
    answer: "Com certeza. Minha prática clínica é adaptada para acolher desde adolescentes que enfrentam crises de identidade e estudantes de vestibular, até adultos em momentos de reorientação de carreira e idosos em busca de novas conexões e significados de vida."
  },
  {
    id: "faq-4",
    question: "Como funciona a especialização em ABA no seu atendimento?",
    answer: "A Análise do Comportamento Aplicada (ABA) traz um componente pragmático, ajudando-nos a identificar padrões diários de comportamento que podem estar gerando ansiedade ou procrastinação. Unindo isso à escuta humanista, conseguimos traçar pequenos passos práticos que ajudam você a construir hábitos mais saudáveis sem perder o acolhimento sensível."
  },
  {
    id: "faq-5",
    question: "Qual o primeiro passo para iniciarmos?",
    answer: "Basta escolher o melhor meio para você: preencher o formulário interativo de agendamento que está logo abaixo ou clicar no botão do WhatsApp para falar diretamente comigo. Nós marcaremos uma conversa inicial rápida para nos conhecermos e alinharmos os melhores caminhos!"
  }
];
