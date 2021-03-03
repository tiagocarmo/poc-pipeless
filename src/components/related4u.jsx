import { useState } from 'react';

import apiClient from '../client/api';

const Related4U = ({ data }) => {
  const [related, setRelated] = useState([]);
  const [none, setNone] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLoadRelated = async () => {
    setLoading(true);
    const related = await apiClient.related(data);
    if(related?.length > 0) {
      setNone(false);
      setRelated(related);
    } else {
      setNone(true);
    }
    setLoading(false);
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
    }
  };

  return (
    <>
      <h3>Ofertas relacionadas a oferta {data.companyId}</h3>
      <button
        onClick={() => handleLoadRelated()}
        type='button'
        style={styles.btn}
      >
        Carregar Ofertas Similares (getRelatedContent)
      </button>
      { loading && <p>Aguarde...</p> }
      { !loading
        && related
        && related.map((item, key) => {
          return (
            <li key={key}>
              <a href={`/anunciantes/${item.object.id}`}>
                {item.object.id}
              </a>
            </li>
          );
        })
      }
      { !loading
        && none
        && <p>Nenhuma oferta similar foi obtida na busca</p>
      }
    </>
  );
}

export default Related4U;
