/**
 * $replace
 * 
 * Retorna uma nova string com algum ou todas as combinações do padrão substituído
 * por um substituto. O padrão pode ser uma string ou uma RegExp, e o substituto
 * pode ser uma string ou uma função a ser chamada por cada combinação a funcao curry
 * 
 * @module $replace
 * @author Cleber de Moraes Goncalves <cleber.programmer>
 * @example
 * 
 *        $replace('Apples are round, and apples are juicy', /apples/gi, 'oranges');
 * 
 */
this.Ninja.module('$replace', ['$curry'], function ($curry) {
  
  /**
   * Retorna uma nova string com algum ou todas as combinações do padrão substituído
   * por um substituto. O padrão pode ser uma string ou uma RegExp, e o substituto
   * pode ser uma string ou uma função a ser chamada por cada combinação
   * 
   * @public
   * @method $replace
   * @param {String} a Literal que sera manipulado
   * @param {String|RegExp} b Padrao de combinacao a ser localizado no literal
   * @param {String|Function} c Substitutivo do padrao de combinacao
   * @return {String} Novo literal com algum ou todas as combinacoes do padrao substituido por um substituto
   * @example
   * 
   *        $$replace('Apples are round, and apples are juicy', /apples/gi, 'oranges');
   * 
   */
  function replace(a, b, c) {
    return a.replace(b, c);
  }
  
  /**
   * Revelacao do servico $replace, encapsulando a visibilidade das funcoes
   * privadas
   */
  return $curry(replace);
  
});
