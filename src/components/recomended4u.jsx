import { useState } from 'react';

import apiClient from '../client/api';

const Recomended4U = ({ data }) => {
  const [recomendations, setRecomendations] = useState([]);

  const handleLoadRecomendations = async () => {
    const recomendacoes = await apiClient.recomendations(data);
    setRecomendations(recomendacoes);
  };

  return (
    <>
      <h3>Recomendações para usuário {data.userId}</h3>
      <button onClick={() => handleLoadRecomendations()} type='button'>Carregar Recomendações</button>
      { recomendations
        && recomendations.map((item, key) => {
          return (
            <li key={key}>
              <a href={`/anunciantes/${item.object.id}`}>
                {item.object.id}
              </a>
            </li>
          );
        })
      }
    </>
  );
}

export default Recomended4U;
