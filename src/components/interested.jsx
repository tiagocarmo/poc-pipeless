import { useState } from 'react';
import Image from 'next/image';

import apiClient from '../client/api';

const Interested = (data) => {
  const [interested, setInterested] = useState(false);

  const check = {
    black: '/images/check-negro.svg',
    red: '/images/check-verde.svg'
  }

  const handleInterested = () => {
    if (!interested) {
      apiClient.interested(data);
      setInterested(true);
    }
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
      onClick={() => handleInterested()}
      style={styles}
    >
      <Image
        src={interested ? check.red : check.black}
        alt='interested'
        width='20'
        height='20'
      />
    </button>
  );
};

export default Interested;
