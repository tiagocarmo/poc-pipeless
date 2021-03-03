import Like from './like';
import Favorited from './favorited';

const Actions = ({ data }) => {
  return (
    <div>
      <p>Ações disponíveis:</p>
      <Like data={data} />
      <Favorited data={data} />
    </div>
  )
};

export default Actions;
