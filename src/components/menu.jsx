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
          <a href='/anunciantes/bar'>
            Bar [0880]
          </a>
        </li>
        <li>
          <a href='/anunciantes/ataba'>
            Ataba: Clube de Livros
          </a>
        </li>
        <li>
          <a href='/anunciantes/bellocookie'>
            Bello Cookie
          </a>
        </li>
      </ul>
    </li>
  </ul>
);

export default Menu;
