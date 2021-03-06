import oneParameter from './oneParameter'
import twoParameters from './twoParameters'
import { isGap } from '../gap'

/**
 * Função de curry otimizado para três argumentos.
 *
 * @private
 * @category Function
 * @param {Function} target A função para o curry.
 * @return {Function} A função curried.
 */
export default (target) =>
  function f3 (a0, a1, a2) {
    switch (arguments.length) {
      case 0:
        return f3
      case 1:
        return isGap(a0)
          ? f3
          : twoParameters((...args) => target.call(this, a0, ...args))
      case 2:
        return isGap(a0) && isGap(a1)
          ? f3
          : isGap(a0)
            ? twoParameters((_a0, ...args) => target.call(this, _a0, a1, ...args))
            : isGap(a1)
              ? twoParameters((...args) => target.call(this, a0, ...args))
              : oneParameter((...args) => target.call(this, a0, a1, ...args))
      default:
        return isGap(a0) && isGap(a1) && isGap(a2)
          ? f3
          : isGap(a0) && isGap(a1)
            ? twoParameters((_a0, _a1, ...args) => target.call(this, _a0, _a1, a2, ...args))
            : isGap(a0) && isGap(a2)
              ? twoParameters((_a0, ...args) => target.call(this, _a0, a1, ...args))
              : isGap(a1) && isGap(a2)
                ? twoParameters((...args) => target.call(this, a0, ...args))
                : isGap(a0)
                  ? oneParameter((_a0, ...args) => target.call(this, _a0, a1, a2, ...args))
                  : isGap(a1)
                    ? oneParameter((_a1, ...args) => target.call(this, a0, _a1, a2, ...args))
                    : isGap(a2)
                      ? oneParameter((...args) => target.call(this, a0, a1, ...args))
                      : target.call(this, ...arguments)
    }
  }
