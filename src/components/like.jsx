import { useState } from 'react';
import Image from 'next/image';

import apiClient from '../client/api';

const Like = (data) => {
  const [like, setLike] = useState(false);

  const coracao = {
    black: '/images/coracao-negro.svg',
    red: '/images/coracao-vermelho.svg'
  }

  const toggleLike = () => {
    apiClient.like(data, !like);
    return setLike(!like);
  };

  const styles = {
    cursor: 'pointer',
    border: 'none',
    background: 'transparent',
    outline: 'none'
  };

  return (
    <button
      type='button'
      onClick={() => toggleLike()}
      style={styles}
    >
      <Image
        src={like ? coracao.red : coracao.black}
        alt='Like'
        width='20'
        height='20'
      />
    </button>
  );
};

export default Like;
