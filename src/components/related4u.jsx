import { useState } from 'react';

import apiClient from '../client/api';
import { getPrizeInfo } from '../prizes/list';

const Related4U = ({ data, offer }) => {
  const [related, setRelated] = useState([]);
  const [none, setNone] = useState(false);
  const [loading, setLoading] = useState(false);
  // console.log(offer);

  const handleLoadRelated = async () => {
    setLoading(true);
    const related = await apiClient.related(data);
    if (related?.length > 0) {
      const newRelated = [];
      let temp = {};
      related.forEach(item => {
        const id = item.object.id;
        temp = getPrizeInfo(id);
        if (temp) {
          newRelated.push({
            ...temp,
            id
          });
        } else {
          newRelated.push({
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
      setRelated(newRelated);
    } else {
      setNone(true);
    }
    setLoading(false);
  };

  return (
    <div className='box'>
      <h3>Oferta: <span className='highlight'>{data.companyId}</span></h3>
      <button
        onClick={() => handleLoadRelated()}
        type='button'
        className='btn'
      >
        <strong>Carregar</strong> conteúdo relacionado a oferta
      </button>
      { loading && <p>Aguarde...</p>}
      { !loading
        && related
        && related.map((item, key) => {
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
        && <p>Nenhuma oferta similar foi obtida na busca</p>
      }
    </div>
  );
}

export default Related4U;
