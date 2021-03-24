const listPrizes = [
  {
    name: 'bob-s',
    title: 'Bob`s - Saborosos lanches e sobremesas.',
    description: 'Mate a sua fome de verdade com o Bob’s!',
    banner: 'https://s3-sa-east-1.amazonaws.com/assets.recompensasdigitais.com.br/Cards_Site_RD_Bobs_1db0201978.png',
    avatar: 'https://s3-sa-east-1.amazonaws.com/assets.recompensasdigitais.com.br/Avatar_Bobs_90px_f0d7233c95.png'
  },
  {
    name: 'ubook',
    title: 'Ubook - Livros e revistas digitais para ler e escutar',
    description: 'Nunca foi tão fácil ler ou ouvir seus livros e revistas preferidos. ',
    banner: 'https://s3-sa-east-1.amazonaws.com/assets.recompensasdigitais.com.br/Card_Ubook_4x_bc2b4b473d.png',
    avatar: 'https://s3-sa-east-1.amazonaws.com/assets.recompensasdigitais.com.br/Avatar_Ubook_90px_2dcef8d555.png'
  },
  {
    name: 'bookplay',
    title: 'Bookplay - Livros, revistas, cursos e videoaulas!',
    description: 'Tenha acesso a um enorme acervo de livros e revistas digitais, cursos online e videoaulas.',
    banner: 'https://s3-sa-east-1.amazonaws.com/assets.recompensasdigitais.com.br/Card_Bookplay_2x_df27faa392.png',
    avatar: 'https://s3-sa-east-1.amazonaws.com/assets.recompensasdigitais.com.br/Avatar_Bookplay_90px_394798c508.png'
  },
  {
    name: 'vittude',
    title: 'Vittude - Terapia com psicólogos certificados',
    description: 'Sessão de terapia online  ou presencial, com duração de 50 minutos.',
    banner: 'https://s3-sa-east-1.amazonaws.com/assets.recompensasdigitais.com.br/Cards_Site_RD_Vittude_9974afe50c.png',
    avatar: 'https://s3-sa-east-1.amazonaws.com/assets.recompensasdigitais.com.br/Avatar_Vittude_90x90_9f6379f19d.png'
  },
  {
    name: '12minutos',
    title: '12 Minutos - Para ler ou ouvir em 12 minutos',
    description: 'O 12 min é um app que permite aos usuários, ter acesso a diversos títulos de livros de não ficção.',
    banner: 'https://s3-sa-east-1.amazonaws.com/assets.recompensasdigitais.com.br/Cards_Site_RD_12min_793229c94d.png',
    avatar: 'https://s3-sa-east-1.amazonaws.com/assets.recompensasdigitais.com.br/Avatar_12min_90px_d6532ee144.png'
  },
  {
    name: 'kinopop',
    title: 'Kinopop - Streaming de Filmes e Séries onde quiser!',
    description: 'Sucessos do cinema e da TV brasileira agora estão disponíveis para você.',
    banner: 'https://s3-sa-east-1.amazonaws.com/assets.recompensasdigitais.com.br/Cards_Site_RD_Kinopop_2627bdebd8.png',
    avatar: 'https://s3-sa-east-1.amazonaws.com/assets.recompensasdigitais.com.br/Avatar_Kinopop_90px_63ebf83dee.png'
  },
  {
    name: 'deezer',
    title: 'Deezer - Ouça seus artistas favoritos',
    description: 'Milhões de músicas e podcasts para fazer a trilha sonora da sua vida. ',
    banner: 'https://s3-sa-east-1.amazonaws.com/assets.recompensasdigitais.com.br/Cards_Site_RD_Deezer_1a6e9f0593.png',
    avatar: 'https://s3-sa-east-1.amazonaws.com/assets.recompensasdigitais.com.br/Avatar_Deezer_90px_5a2d9d3562.png'
  },
  {
    name: 'cabify',
    title: 'Cabify - Vá de Cabify, transporte particular.',
    description: 'Chegue ao seu destino de forma rápida e segura com os descontos exclusivos do Cabify do Recompensas Digitais.',
    banner: 'https://s3-sa-east-1.amazonaws.com/assets.recompensasdigitais.com.br/Card_Cabify_4x_476f0a52fe.png',
    avatar: 'https://s3-sa-east-1.amazonaws.com/assets.recompensasdigitais.com.br/Avatar_Cabify_90px_bb267ce106.png'
  },
  {
    name: 'cna',
    title: 'CNA GO - Curso de inglês online inteligente.',
    description: 'Aprenda inglês online em um curso que se adapta ao seu ritmo!',
    banner: 'https://s3-sa-east-1.amazonaws.com/assets.recompensasdigitais.com.br/Card_CNA_GO_4x_8465a3336c.png',
    avatar: 'https://s3-sa-east-1.amazonaws.com/assets.recompensasdigitais.com.br/Avatar_CNA_GO_90px_8fb978b6e4.png'
  },
  {
    name: 'mumo',
    title: 'MUMO - O jeito mais fácil de ouvir música',
    description: '',
    banner: 'https://s3-sa-east-1.amazonaws.com/assets.recompensasdigitais.com.br/Card_Fluxo_Mumo_4x_646a962632.png',
    avatar: 'https://s3-sa-east-1.amazonaws.com/assets.recompensasdigitais.com.br/Avatar_Mumo_90px_e176e1b471.png'
  },
  {
    name: 'fluid',
    title: 'Fluid - Yoga e Meditação',
    description: 'Invista no seu equilíbrio físico, mental e emocional.',
    banner: 'https://s3-sa-east-1.amazonaws.com/assets.recompensasdigitais.com.br/Card_Fluxo_e_Site_Fluid_4x_1e2bd591a8.png',
    avatar: 'https://s3-sa-east-1.amazonaws.com/assets.recompensasdigitais.com.br/Avatar_Fluid_90px_ae4f3d7b60.png'
  },
  {
    name: 'english-live',
    title: 'English Live - Inglês para todos os níveis de conhecimento',
    description: 'Curso de inglês prático e online para todos os níveis de conhecimento. São 30 dias de acesso para você manter o inglês em dia com os recursos interativos da English Live.',
    banner: 'https://s3-sa-east-1.amazonaws.com/assets.recompensasdigitais.com.br/Card_English_Live_4x_583d55282b.png',
    avatar: 'https://s3-sa-east-1.amazonaws.com/assets.recompensasdigitais.com.br/Avatar_English_Live_90px_43805a376b.png'
  },
  {
    name: 'playkids',
    title: 'Playkids - Jogos e atividades educativas',
    description: 'Tenha acesso ao PlayKids, um aplicativo de entretenimento e educação, criado para crianças, com conteúdo de qualidade, como livros digitais, jogos educativos e desenhos infantis.',
    banner: 'https://s3-sa-east-1.amazonaws.com/assets.recompensasdigitais.com.br/Cards_Site_RD_Playkids_575e1ae015.png',
    avatar: 'https://s3-sa-east-1.amazonaws.com/assets.recompensasdigitais.com.br/Avatar_Play_Kids_7d24bd2179.png'
  },
  {
    name: 'dentro-da-historia',
    title: 'Dentro da História - Livros infantis personalizados',
    description: 'No Dentro da História, você torna um pequeno protagonista de histórias incríveis como a Turma da Mônica.',
    banner: 'https://s3-sa-east-1.amazonaws.com/assets.recompensasdigitais.com.br/Cards_Site_RD_DDH_d60df907e6.png',
    avatar: 'https://s3-sa-east-1.amazonaws.com/assets.recompensasdigitais.com.br/dentro_da_historia_90px_36313cca9c.png'
  },
  {
    name: 'a-taba',
    title: 'A Taba - Assinatura do Clube de Leitores',
    description: 'Livros cuidadosamente selecionados de acordo com a faixa de desenvolvimento das crianças.',
    banner: 'https://s3-sa-east-1.amazonaws.com/assets.recompensasdigitais.com.br/Cards_Site_RD_A_Taba_4bd746c18c.png',
    avatar: 'https://s3-sa-east-1.amazonaws.com/assets.recompensasdigitais.com.br/Avatar_A_Taba_90px_e4948f9450.png'
  },
  {
    name: 'primepass',
    title: 'Primepass',
    description: 'Primepass. Os melhores conteúdos, em uma única assinatura. Filmes, Séries, Música e Cinema.',
    banner: 'https://s3-sa-east-1.amazonaws.com/assets.recompensasdigitais.com.br/Card_Primepass_4x_ea0bb1d17f.png',
    avatar: 'https://s3-sa-east-1.amazonaws.com/assets.recompensasdigitais.com.br/Avatar_Primepass_224px_60207bbd68.png'
  },
  {
    name: 'nuuvem',
    title: 'Νuuvem - Sua loja digital e plataforma gamer',
    description: 'Os melhores jogos para PC, macOS e Linux.',
    banner: 'https://s3-sa-east-1.amazonaws.com/assets.recompensasdigitais.com.br/Cards_Site_RD_Nuuvem_6c5eb5b6ca.png',
    avatar: 'https://s3-sa-east-1.amazonaws.com/assets.recompensasdigitais.com.br/Avatar_Nuuvem_90px_8a34ab69a2.png'
  },
  {
    name: 'begamer',
    title: 'Begamer - Notícias do mundo gamer',
    description: 'Fique por dentro de tudo que rola no universo dos games em um só lugar.',
    banner: 'https://s3-sa-east-1.amazonaws.com/assets.recompensasdigitais.com.br/Card_Begamer_4x_831f95bfa6.png',
    avatar: 'https://s3-sa-east-1.amazonaws.com/assets.recompensasdigitais.com.br/avatar_begamer_90px_3d2dfcc93c.png'
  },
  {
    name: 'magalu',
    title: 'Magalu - Descontos exclusivos em toda loja virtual',
    description: 'Eletroeletrônicos, móveis, moda e até mesmo artigos para o seu pet!',
    banner: 'https://s3-sa-east-1.amazonaws.com/assets.recompensasdigitais.com.br/Card_Magalu_4x_ea86472822.png',
    avatar: 'https://s3-sa-east-1.amazonaws.com/assets.recompensasdigitais.com.br/Avatar_Magalu_90x90_bd8c85cf72.png'
  },
  {
    name: 'netshoes',
    title: 'Netshoes - Artigos esportivos',
    description: 'As melhores marcas e os melhores preços. É só escolher!',
    banner: 'https://s3-sa-east-1.amazonaws.com/assets.recompensasdigitais.com.br/Cards_Site_RD_Netshoes_341ad2d771.png',
    avatar: 'https://s3-sa-east-1.amazonaws.com/assets.recompensasdigitais.com.br/Avatar_Netshoes_90px_c60efeb4d0.png'
  },
  {
    name: 'centauro',
    title: 'Centauro - Descontos em artigos esportivos.',
    description: 'Aproveite toda a loja virtual e caia de cabeça no esporte.',
    banner: 'https://s3-sa-east-1.amazonaws.com/assets.recompensasdigitais.com.br/Card_Centauro_4x_346e40f418.png',
    avatar: 'https://s3-sa-east-1.amazonaws.com/assets.recompensasdigitais.com.br/Avatar_Centauro_90px_3509ea58cd.png'
  },
  {
    name: 'graacc',
    title: 'GRAACC - Apoie o combate ao câncer infantil do GRAACC.',
    description: 'Além de diagnosticar e tratar o câncer infantil, o GRAACC atua no desenvolvimento do ensino e pesquisa.',
    banner: 'https://s3-sa-east-1.amazonaws.com/assets.recompensasdigitais.com.br/Cards_Site_RD_Graacc_cb2b73357f.png',
    avatar: 'https://s3-sa-east-1.amazonaws.com/assets.recompensasdigitais.com.br/Avatar_Graacc_90px_b30ea97716.png'
  }
];

export const getPrizeInfo = (name) => {
  return listPrizes.find(item => name.search(item.name) !== -1);
}

export default listPrizes;
