import Menu from '../components/menu';

const Layout = ({ children, title }) => {
  const styles = {
    header: {
      display: 'block'
    },
    left: {
      display: 'inline-block',
      verticalAlign: 'top',
      width: '250px'
    },
    right: {
      display: 'inline-block',
      verticalAlign: 'top',
      width: 'calc(100% - 250px)'
    }
  };

  return (
    <div>
      <div style={styles.header}>
        <h1>{title || 'POC Pipeless'}</h1>
      </div>
      <div style={styles.left}>
        <Menu />
      </div>
      <div style={styles.right}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
