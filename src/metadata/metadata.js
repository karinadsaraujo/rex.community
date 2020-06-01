import base from './base'
import canonical from './canonical'
import charset from './charset'
import description from './description'
import icon from './icon'
import manifest from './manifest'
import viewport from './viewport'
import themeColor from './themeColor'
import title from './title'

export default (Klass) =>
  function () {
    const page = new Klass(...arguments)

    setImmediate(() => {
      base(page)
      canonical(page)
      charset(page)
      description(page)
      icon(page)
      manifest(page)
      themeColor(page)
      title(page)
      viewport()
    })

    return page
  }
