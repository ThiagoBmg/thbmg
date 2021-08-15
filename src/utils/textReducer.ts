/* 
*   @descricao
*   função responsável por reduzir um texto para caber em um determinado card 
*
*   @exemplo
*   var teste = 'somente um teste'
*   textLengthValider(teste, 3)
*   output = som
*/

export const textLengthValider = ( text:string,  numberOfWords: number = 0 ) => (text.length > numberOfWords) ? text.slice(0,numberOfWords).concat('...') : text
