const Menu = () => (
  <ul>
    <li>
      <a href='/'>
        Página Inicial
      </a>
    </li>
    <li>
      <a href='/recomendacoes'>Recomendações</a>
    </li>
    <li>
      Anunciantes
      <ul>
        <li>
          <a href='/anunciantes/bob-s-chicken-crispy-cheddar'>
            Bob`s
          </a>
        </li>
        <li>
          <a href='/anunciantes/bookplay-30-dias-r9'>
            Bookplay
          </a>
        </li>
        <li>
          <a href='/anunciantes/primepass-singleday2d'>
            Primepass
          </a>
        </li>
      </ul>
    </li>
  </ul>
);

export default Menu;
