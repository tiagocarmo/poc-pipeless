import Menu from '../components/menu';

const Layout = ({ children, title }) => {
  return (
    <div className='grid'>
      <div className='container'>
        <div className='header'>
          <h1 className='grifado'>recomenda recompensas</h1>
        </div>
        <div className='sidebar'>
          <Menu />
        </div>
        <div className='main'>
          <h2 className='grifado'>{title}</h2>
          <div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
