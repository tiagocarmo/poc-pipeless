import { useState } from 'react';

import apiClient from '../client/api';

const Recomended4U = ({ data }) => {
  const [recomended, setRecomended] = useState([]);
  const [none, setNone] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLoadRecomended = async () => {
    setLoading(true);
    const recomendacoes = await apiClient.recomended(data);
    if(recomendacoes?.length > 0) {
      setNone(false);
      setRecomended(recomendacoes);
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
      <h3>Recomendações para usuário {data.userId}</h3>
      <button
        onClick={() => handleLoadRecomended()}
        type='button'
        style={styles.btn}
      >
        Carregar Recomendações (getRecommendedContent)
      </button>
      { loading && <p>Aguarde...</p> }
      { !loading
        && recomended
        && recomended.map((item, key) => {
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
        && <p>Nenhuma recomendação foi obtida na busca</p>
      }
      <hr />
    </>
  );
}

export default Recomended4U;
