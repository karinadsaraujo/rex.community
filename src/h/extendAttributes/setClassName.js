import * as f from '@f'

/**
 * Adiciona a(s) classe(s) css no element
 *
 * @name setClassName
 * @function
 * @access private
 * @param {HTMLElement} element Elemento html que tera a(s) classe css adicionado
 * @param {String|Array} className Nome de uma classe ou matrix de nomes de classes css
 * @returns {HTMLElement} Element html com as class css adicionado
 */
export default (element) =>
  (_, className) =>
    f.always(element)(element.className = f.join(f.concat([], className), ' '))