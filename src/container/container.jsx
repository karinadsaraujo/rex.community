import h from '@h'
import style from './style.css'

const component = (props, children) =>
  <div className={[style.container, style[props.type]]}>{ children }</div>

export default component
