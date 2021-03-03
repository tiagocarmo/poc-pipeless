import Actions from '../../components/actions';
import Layout from '../../template/layout';
import Recomended4U from '../../components/recomended4u';

const listPrizes = [
  {
    name: 'bob-s-chicken-crispy-cheddar',
    title: 'Bob`s',
    description: 'Frango empanado bem crocante com queijo, bacon, salada e molho ranch. Irresistível!'
  },
  {
    name: 'bookplay-30-dias-r9',
    title: 'Bookplay',
    description: 'Milhares de livros, audiolivros, cursos, videoaulas, jornal e revistas. Versão Kids e um exclusivo Clube de Benefícios. Conheça agora o Bookplay!'
  },
  {
    name: 'primepass-singleday2d',
    title: 'Primepass',
    description: 'Primepass. Os melhores conteúdos, em uma única assinatura. Filmes, Séries, Música e Cinema. Começar agora. Música.'
  },
  {
    name: 'vittude-consulta-desconto-r50',
    title: 'Vittude',
    description: 'Na Vittude, Você Encontra Atendimento Psicológico Online em um Ambiente Totalmente Seguro. Não Precisa Sair de Casa, Escolha Entre Centenas de Profissionais Especializados no Site. Consultas Online 24 horas.'
  },
  {
    name: 'uol-conteudo-mensal',
    title: 'UOL',
    description: 'UOL, a maior empresa brasileira de conteúdo, serviços digitais e tecnologia com vários canais de jornalismo e diversas soluções para você ou seu negócio.'
  },
  {
    name: '12minutos-r-24-00',
    title: '12 Minutos',
    description: 'O 12 Minutos é uma plataforma que seleciona, lê e sumariza os pontos mais importantes de livros de não ficção. Comece o seu trial gratuito e descubra como!'
  },
  {
    name: 'kinopop-assinatura-11-dias',
    title: 'Kinopop',
    description: 'A Kinopop oferece um mês grátis de serviço* para clientes qualificados. Assine já para ter acesso instantâneo ao catálogo completo de séries e filmes da Kinopop.'
  },
  {
    name: 'nuuvem-credito-de-jogos-desconto-r5',
    title: 'Νuuvem',
    description: 'Νuuvem é a sua loja de jogos digitais para PC e mais. Descubra, compre e baixe seus jogos instantaneamente.'
  },
  {
    name: 'kinopop-assinatura-mensal',
    title: 'Kinopop',
    description: 'A Kinopop oferece um mês grátis de serviço* para clientes qualificados. Assine já para ter acesso instantâneo ao catálogo completo de séries e filmes da Kinopop.'
  }
];

const Anunciantes = ({ data, offer }) => {
  return (
    <Layout title={offer?.title}>
      <Actions data={data} />
      { offer?.description
        && <p dangerouslySetInnerHTML={{ __html: offer.description }} />
      }
      <Recomended4U data={data} />
    </Layout>
  )
};

export async function getServerSideProps({ params }) {
  const { name } = params;

  try {
    let url = 'http://localhost:3000/api/pipe/view?';
    if (name) {
      url += `companyId=${name}`
    }
    const res = await fetch(url);
    const data = await res.json();

    const companyData = listPrizes.find(item => item.name === name);

    const props = {
      data
    };

    if (companyData) {
      props.offer = companyData
    } else {
      props.offer = {
        name,
        title: name,
        description: 'Sem informações da oferta'
      }
    }

    return { props };
  } catch (e) {
    return {
      notFound: true
    };
  }
}

export default Anunciantes;
