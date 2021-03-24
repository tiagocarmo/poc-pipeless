import { useState } from 'react';

import apiClient from '../client/api';
import { getPrizeInfo } from '../prizes/list';

const Recomended4U = ({ data, offer }) => {
  const [recomended, setRecomended] = useState([]);
  const [none, setNone] = useState(false);
  const [loading, setLoading] = useState(false);
  // console.log(offer);

  const handleLoadRecomended = async () => {
    setLoading(true);
    const recomendacoes = await apiClient.recomended(data);
    if (recomendacoes?.length > 0) {
      const newRecomended = [];
      let temp = {};
      recomendacoes.forEach(item => {
        const id = item.object.id;
        temp = getPrizeInfo(id);
        if (temp) {
          newRecomended.push({
            ...temp,
            id
          });
        } else {
          newRecomended.push({
            id: id,
            name: id,
            title: id,
            description: 'Sem informações da oferta',
            banner: 'https://www.cellmax.eu/wp-content/uploads/2020/01/Hero-Banner-Placeholder-Dark-1024x480-1.png',
            avatar: 'https://livejones.com/wp-content/uploads/2020/05/logo-Placeholder.png'
          });
        }
      });
      setNone(false);
      setRecomended(newRecomended);
    } else {
      setNone(true);
    }
    setLoading(false);
  };

  return (
    <div className='bggray box'>
      <h3>Usuário: <span className='highlight'>{data.userId}</span></h3>
      <button
        onClick={() => handleLoadRecomended()}
        type='button'
        className='btn'
      >
        <strong>Carregar</strong> recomendações para o usuário
      </button>
      { loading && <p>Aguarde...</p>}
      { !loading
        && recomended
        && recomended.map((item, key) => {
          return (
            <div className='card' key={key}>
              <div className='card-banner'>
                <img src={item.banner} className='img-fluid' />
              </div>
              <div className='card-avatar'>
                <img src={item.avatar} className='img-fluid' />
                <em>{item.id}</em>
              </div>
              <div className='card-content'>
                <strong>{item.title}</strong>
                <p>{item.description}</p>
                <a href={`/anunciantes/${item.id}`}>
                  Ver oferta ➞
                </a>
              </div>
            </div>
          );
        })
      }
      { !loading
        && none
        && <p>Nenhuma recomendação foi obtida no momento</p>
      }
    </div>
  );
}

export default Recomended4U;
