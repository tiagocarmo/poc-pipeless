import { useState } from 'react';
import Image from 'next/image';

import apiClient from '../client/api';

const Like = ({ data }) => {
  const [like, setLike] = useState(false);

  const coracao = {
    black: '/images/coracao-negro.svg',
    red: '/images/coracao-vermelho.svg'
  }

  const toggleLike = () => {
    apiClient.like(data, !like);
    setLike(!like);
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
      onClick={() => toggleLike()}
      style={styles.btn}
    >
      <Image
        src={like ? coracao.red : coracao.black}
        alt='Like'
        width='10'
        height='10'
      />
      <span style={styles.text}>Curtir</span>
    </button>
  );
};

export default Like;
