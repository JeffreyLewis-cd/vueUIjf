import Vue from 'vue'
import Router from 'vue-router'
import navConf from '../nav.config.json'

//UI组件官网-Introduce
import OfficalWeb from '@/officialWeb/officialWeb'
import Tutorial from '@/officialWeb/API/tutorial'

//组件开发
import Button from '@/components/button/src/button'

Vue.use(Router);

let routes = [];

/*把路由数组由两个合并为一个*/
Object.keys(navConf).find((keyName) => {
  //console.log(keyName);
  routes = routes.concat(navConf[keyName])
});
//console.log(routes);

let addComponent = (oriRoutes) => {
  console.log(oriRoutes);

  oriRoutes.find((route) => {
    if (route.items) {
      addComponent(route.items);
      routes = routes.concat(route.items)
    }
    else {

      if (route.type === 'pages') {
        console.log("666");
        route.component = r => require.ensure([], () =>
          r(require(`../officialWeb/pages/${route.name}.vue`)));
        return
      }
      console.log(`../officialWeb/docs/${route.name}.md`);
      route.component = r => require.ensure([], () =>
        r(require(`../officialWeb/docs/${route.name}.md`)))

    }
  })

};
addComponent(routes);  //执行函数-合理配置路由的格式

//console.log(routes);





export default new Router({
  routes: routes
/*  routes: [
    {
      path: '/',
      name: 'OfficalWeb',
      component: OfficalWeb
    },

    {
      path: '/Tutorial',
      name: 'Tutorial',
      component: Tutorial
    },

  ]*/
})
