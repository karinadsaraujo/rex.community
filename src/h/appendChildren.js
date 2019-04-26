import curry from 'ramda/src/curry'
import forEach from 'ramda/src/forEach'
import mapComponent from './mapComponent'
import mapTextNode from './mapTextNode'

const appendChildren = (children, element) => {
  forEach(child => element.appendChild(child), mapTextNode(mapComponent(children)))
  return element
}

export default curry(appendChildren)
