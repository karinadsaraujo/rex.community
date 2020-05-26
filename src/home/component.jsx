import h from '@h'
import Benefits from './benefits'
import Custom from './custom'
import Distortion from './distortion'
import Jumbotron from './jumbotron'
import Kits from './kits'
import Main from '@main'

export default () =>
  <Main>
    <Jumbotron />
    <Benefits />
    <Custom />
    <Kits />
    <Distortion />
  </Main>
