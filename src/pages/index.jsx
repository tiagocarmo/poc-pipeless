import Menu from '../components/menu';

const HomePage = () => {
  return (
    <div className='grid'>
      <div className='container'>
        <div className='header'>
          <h1 className='grifado'>recomenda recompensas</h1>
        </div>
        <div className='sidebar'>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
