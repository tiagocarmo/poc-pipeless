import { useState } from 'react';
import Image from 'next/image';

import apiClient from '../client/api';

const Favorited = ({ data }) => {
  const [favorited, setFavorited] = useState(false);

  const check = {
    black: '/images/check-negro.svg',
    red: '/images/check-verde.svg'
  }

  const handleFavorited = () => {
    if (!favorited) {
      apiClient.favorited(data);
      setFavorited(true);
    }
  };

  const styles = {
    btn: {
      cursor: 'pointer',
      border: '1px solid grey',
      background: '#f9f9f9',
      outline: 'none',
      padding: '6px 12px',
      borderRadius: '8px',
      marginRight: '16px'
    },
    text: {
      paddingLeft: '4px'
    }
  };

  return (
    <button
      type='button'
      onClick={() => handleFavorited()}
      style={styles.btn}
      disabled={favorited}
    >
      <Image
        src={favorited ? check.red : check.black}
        alt='favorited'
        width='10'
        height='10'
      />
      <span style={styles.text}>Favoritar</span>
    </button>
  );
};

export default Favorited;
