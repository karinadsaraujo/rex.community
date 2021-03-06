import * as f from '@rex/f'
import addEventListener from './addEventListener'
import stopPropagation from './stopPropagation'

/**
 * Adicionar um evento ao elemento com a tratativa do stopPropagation
 *
 * @name addEventListenerWithStop
 * @function
 * @access private
 * @param {HTMLElement} element Elemento que tera um evento adicionado
 * @param {String} eventName Nome do evento
 * @param {Function} listener Funcao que sera vinculado ao evento
 * @return {*} O retorno da funcao alvo
 */
export default (element) =>
  (eventName, listener) =>
    addEventListener(element, f.slice(eventName, 0, -5), stopPropagation(listener))
