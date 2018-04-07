/**
 * Created by Jiang on 2018/4/5.
 */
/**
 * @author monkeywang
 * Date: 17/11/9
 */
import jfButton from './components/button/index';


const components = [
  jfButton,

]

const install = function(Vue) {
  if (install.installed) return
  components.map(component => Vue.component(component.name, component))
  //MetaInfo.install(Vue)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  jfButton,

}
