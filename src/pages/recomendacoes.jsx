import Layout from '../template/layout';

const RecomendationsPage = ({ data }) => {
  return (
    <Layout title='Recomendações'>
      <ul>
        {data
          && data.map((item, key) => (
            <li key={key}>
              <a href={`/anunciantes/${item.object.id}`}>
                {item.object.id}
              </a>
            </li>
          )
          )}
        {!data
          && <li>No momento não temos recomendações de prizes.</li>
        }
      </ul>
    </Layout>
  );
};

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/pipe/recomendations');
  const data = await res.json();
  return { props: { data } };
}

export default RecomendationsPage;
