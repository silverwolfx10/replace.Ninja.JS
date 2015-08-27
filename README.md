### $replace

Retorna uma nova string com algum ou todas as combinações do padrão substituído por um substituto. O padrão pode ser uma string ou uma RegExp, e o substituto pode ser uma string ou uma função a ser chamada por cada combinação a funcao curry

```javascript
this.Ninja(['$replace'], function ($replace) {
  console.log($replace('Apples are round, and apples are juicy', /apples/gi, 'oranges'));
});
```
