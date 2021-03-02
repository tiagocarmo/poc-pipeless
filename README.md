# poc-pipeless
POC testando o Pipeless, como funciona e no que ele pode nos ajudar

## Exemplo de arquivo de configuração

> config/config.json
```
{
  "NEXT_PUBLIC_API_URL": "http://localhost:3000/api/",
  "PIPELESS_API_KEY": "yyyyy",
  "PIPELESS_APP_ID": "xxxxx"
}
```

## Recomendações de uso

Para esta POC, estaremos focando em **Content Recomendations** e **Related Content**.

1. **Content Recommendations**: <https://docs.pipeless.io/docs/content-recommendations> *

- Obtenha um conjunto personalizado de conteúdo recomendado com base nos interesses de um usuário e no que usuários semelhantes estão engajados. Este algoritmo utiliza filtragem colaborativa com base em sinais de engajamento selecionados e categorias / tags para uma ampla variedade de formatos de recomendação.

<img src="https://pipeless.io/_nuxt/img/algo-content.15e93b6.svg" />

---

2. Recommended Accounts: <https://docs.pipeless.io/docs/recommended-accounts>

-  Obtenha uma lista personalizada de contas a serem seguidas com base nos interesses de um usuário e quem usuários semelhantes seguem.

---

3. Related Accounts: <https://docs.pipeless.io/docs/related-accounts>

- Obtenha uma lista de contas que são seguidas por pessoas semelhantes e têm interesses semelhantes aos do usuário visualizado.

---

4. **Related Content**: <https://docs.pipeless.io/docs/related-content> *

- Obtenha conteúdo semelhante a outro conteúdo com base em categorias ou tags junto com o envolvimento do usuário. Para um objeto de destino, este algoritmo usa categorias / tags associadas junto com filtragem colaborativa de sinais de engajamento do usuário selecionados para encontrar conteúdo semelhante.

<img src="https://pipeless.io/_nuxt/img/algo-related-content.e55406e.svg" />

---

5. Related Topics: <https://docs.pipeless.io/docs/related-topics>

- Obtenha tags ou categorias semelhantes com base em qualidades compartilhadas.

---

