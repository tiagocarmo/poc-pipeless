import Like from '../../components/like';
import Menu from '../../components/menu';

const BelloCookiePage = ({ data }) => (
  <>
    <h1>Bello Cookie</h1>
    <p>Aqui será feito evento de <em>Page View</em></p>
    <Like data={data} />
    <Menu />
  </>
);

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/pipe/view?companyId=belocookie')
  const data = await res.json()
  return { props: { data } }
}

export default BelloCookiePage;
