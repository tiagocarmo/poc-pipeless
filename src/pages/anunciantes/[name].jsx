import Actions from '../../components/actions';
import Layout from '../../template/layout';
import Recomended4U from '../../components/recomended4u';
import Related4U from '../../components/related4u';
import listPrizes from '../../prizes/list';

const Anunciantes = ({ data, offer }) => {
  return (
    <Layout title={offer?.title}>
      <Actions data={data} />
      { offer?.description
        && <p dangerouslySetInnerHTML={{ __html: offer.description }} />
      }
      <div className='half-on-desktop'>
        <Related4U data={data} offer={offer} />
      </div>
      <div className='half-on-desktop'>
        <Recomended4U data={data} offer={offer} />
      </div>
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

    const companyData = listPrizes.find(item => name.search(item.name) === 0);

    const props = {
      data
    };

    if (companyData) {
      props.offer = companyData
    } else {
      props.offer = {
        name,
        title: name,
        description: 'Sem informações da oferta',
        banner: 'https://www.cellmax.eu/wp-content/uploads/2020/01/Hero-Banner-Placeholder-Dark-1024x480-1.png',
        avatar: 'https://livejones.com/wp-content/uploads/2020/05/logo-Placeholder.png'
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
