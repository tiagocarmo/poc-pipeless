import Like from '../../components/like';
import Interested from '../../components/interested';
import Menu from '../../components/menu';

const AtabaPage = ({ data }) => (
  <>
    <h1>Ataba</h1>
    <p>Aqui será feito evento de <em>Page View</em></p>
    <Like data={data} />
    <Interested data={data} />
    <Menu />
  </>
);

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/pipe/view?companyId=ataba')
  const data = await res.json()
  return { props: { data } }
}

export default AtabaPage;
