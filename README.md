# my-app

> Vue.js web-app 项目

## webpack 项目基本环境搭建

```JavaScript
.
├── .babelrc                // babel配置文件
├── .gitignore              // git忽略文件
├── LICENSE                 // 版权
├── README.md               // 文档
├── dist                    // 输出目录
├── package.json            // npm配置文件
├── src                     // 源码目录
│   ├── index.html          // 首页模板
│   └── main.js             // 程序入口文件
└── webpack.config.js       // webpack配置文件
```

## 集成 Vue

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```

2. `main.js`中集成`Vue`

```JavaScript
// 1. 导入vue
import Vue from 'vue'
// 2. 导入app.vue
import app from './App.vue'
// 3. 创建vue实例并渲染app组件
new Vue({
    el: '#app',
    render: c => c(app)
})
```

## 制作项目首页 Header 和 Tabbar

1. 导入并注册`mint-ui`中的`header`组件

```JavaScript
// 導入mint-ui中的header組件
import { Header } from 'mint-ui'
// 导入mint-ui的样式
import 'mint-ui/lib/style.css'
// 將組件註冊為Vue的全局組件
Vue.omponent(Header.name, Header)
```

2. 在`App.vue`中使用`mt-header`组件

```HTML
<div class="app-container">
    <mt-header fixed title='黑马程序员.Vue项目'></mt-header>
</div
```

3. 设置样式

```css
<style scoped>
.app-container{
    padding-top: 40px;
}
</style>
```

4. `main.js`中导入`mui`样式

```JavaScript
// 导入mui样式
import './lib/mui/css/mui.min.css'
```

5. 在`App.vue`中加入`MUI`的`tabbar`结构代码

## 完成底部 Tabbar 购物车小图标替换

1. mui 的 css 文件夹中引入 icon-extra.css 文件并在 main.js 中导入

```JavaScript
// 导入mui字体图标样式
import './lib/mui/css/icons-extra.css'
```

2. mui 的 fonts 文件夹中引入 mui-icon-extra.tff 文件

3. 购物车模块 span 标签上添加样式类

```HTML
<a class="mui-tab-item" to="/shopcar">
    <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
        <span class="mui-badge">0</span>
    </span>
    <span class="mui-tab-label">购物车</span>
</a>
```

## 集成路由 vue-router 并实现 tabbar 点击高亮切换

1. 在`src`目录创建`router`文件夹,并创建`router.js`,导出`router`实例

```JavaScript
import VueRouter from 'vue-router'
// 创建路由对象
var router = new VueRouter({
  routes: [
  ]
})
// 导出路由对象
export default router
```

2. 在`main.js`中集成`vue-router`

```JavaScript
// 1.1 导入vue-router库
import VueRouter from 'vue-router'
// 1.2 安装vue-router
Vue.use(VueRouter)
// 1.3 导入vue-router实例
import router from './router/router.js'
// 1.4 将router实例挂载到vue
new Vue({
    el: '#app',
    render: c => c(app),
    router:router
})
```

3. 将`App.vue`中`tabbar`的 a 标签修改为`<router-link>`

4. 在 router.js 中 vue-router 实例内添加 linkActiveClass 属性,指定高亮类名

```JavaScript
var router = new VueRouter({
  linkActiveClass: 'mui-active',// 修改路由默认高亮类,默认类名为link-active-class
  routes: [
  ]
})
```

## 实现 Tabbar 路由切换

1. 在 src 目录下创建 components/tabbar 文件夹,再创建 tabbar 对应的 4 个 vue 组件

2. 在 router.js 中导入四个组件并定义路由规则

```JavaScript
var router = new VueRouter({
  linkActiveClass: 'mui-active',
  routes: [
    { path: '/home', component: HomeContainer },
    { path: '/member', component: MemberContainer },
    { path: '/shopcar', component: ShopCarContainer },
    { path: '/search', component: SearchContainer }
  ]
})
```

3. 在 App.vue 中修改`router-link`标签上的 to 属性为路由规则中的 path 路径

```HTML
<router-link class="mui-tab-item " to="/home">
    <span class="mui-icon mui-icon-home"></span>
    <span class="mui-tab-label">首页</span>
</router-link>
```

4. 在 App.vue 的 Heade 区域下面添加路由占位标签`<router-view></router-view>`

```HTML
<!-- 2. router-view占位 -->
<router-view></router-view>
```

## 完成首页轮播图样式布局

1. main.js 中导入并注册 mint-ui 的`Swipe, SwipeItem`组件

```JavaScript
import { Swipe, SwipeItem } from 'mint-ui'
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
```

2. `HomeContainer.vue`中书写轮播组件代码

```HTML
<mt-swipe :auto="4000">
    <mt-swipe-item>1</mt-swipe-item>
    <mt-swipe-item>2</mt-swipe-item>
    <mt-swipe-item>3</mt-swipe-item>
</mt-swipe>
```

3. 在组件的 style 中书写样式

```SCSS
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    &:nth-child(1) {
      background-color: skyblue;
    }
    &:nth-child(2) {
      background-color: pink;
    }
    &:nth-child(3) {
      background-color: cornflowerblue;
    }
  }
}
```

## 集成 axios 实现轮播图数据请求

1. 安装 axios

```JavaScript
npm i axios --save
```

2. 在 main.js 中集成`axios`

```JavaScript
// 2. 集成VueResource
// 2.1 导入axios
import axios from 'axios'
// 2.2 安装axios
```

3. 在`HomeContainer.vue`中发起数据请求

```JavaScript
export default {
  data() {
    return {
      imageList: [] // 定义存放图片的数组
    };
  },
  created() {
    // 发起获取轮播图的数据请求
    this.getlunbo();
  },
  methods: {
    getlunbo() {
      // 使用vue-resource的get请求方式发送数据请求
      this.$http.get("http://vue.studyit.io/api/getlunbo").then(result => {
        if (result.body.status === 0) {
            // 将请求回来的数据赋值给存放图片的数组
            this.imageList = result.body.message;
        } else {
          Toast("数据加载失败...");
        }
      });
    }
  }
};
```

4. 使用 v-for 指令循环渲染`mt-swipe-item`

```HTML
<mt-swipe :auto="4000">
    <mt-swipe-item v-for="(item,index) in imageList" :key = "index">
        <img :src="item.img" alt="">
    </mt-swipe-item>
</mt-swipe>
```

5. 给 img 添加样式

```CSS
img{
    width: 100%;
    height: 100%;
}
```

## 完成首页九宫格布局

1. 使用 MUI 九宫格布局结构

```HTML
<!-- 2. 9宫格图标 -->
<ul class="mui-table-view mui-grid-view mui-grid-9">
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
    <router-link to="/home/newslist">
            <img src="../../images/menu1.png" alt="">
            <div class="mui-media-body">新闻资讯</div></router-link></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../../images/menu2.png" alt="">
            <div class="mui-media-body">图片分享</div></a></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../../images/menu3.png" alt="">
            <div class="mui-media-body">商品购买</div></a></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../../images/menu4.png" alt="">
            <div class="mui-media-body">留言反馈</div></a></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../../images/menu5.png" alt="">
            <div class="mui-media-body">视频专区</div></a></li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            <img src="../../images/menu6.png" alt="">
            <div class="mui-media-body">联系我们</div></a></li>
</ul>
```

2. 设置样式

```SCSS
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
  img {
    width: 60px;
    height: 60px;
  }

  .mui-media-body {
    font-size: 13px;
  }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0;
}
```

## 实现路由切换动画

1. 用`transition`标签包裹`router-view`

```HTML
<transition>
    <router-view></router-view>
</transition>
```

2. 使用 vue 提供的过渡类控制进入离开动画样式

```CSS
.app-container{
  padding-top: 40px;
	overflow-x: hidden; /*隐藏超出屏幕部分*/
}
.v-enter {
  opacity: 0;
  transform: translateX(100%); /*进入起点在屏幕100%部分,即屏幕最右*/
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%); /*离开的终点在屏幕-100%部分*/
  position: absolute;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
```

## 实现新闻资讯路由跳转

1. 在 components/news 文件夹下面创建`NewsList.vue`组件

2. 在`router.js`导入`NewsList.vue`组件中并添加路由规则

```JavaScript
import NewsList from '../components/news/NewsList.vue'

{ path: '/home/newslist', component: NewsList }
```

3. 在`HomeContainer.vue`组件中修改**新闻资讯**图标的 a 标签为`router-link`并设置 to 属性为路由规则中的 path 属性值

```HTML
<router-link to="/home/newslist">
    <img src="../../images/menu1.png" alt="">
    <div class="mui-media-body">新闻资讯</div>
</router-link>
```

## 实现新闻资讯界面布局和样式

1. 使用 MUI 中的`media-list.html`图文列表 - 缩略图居左

```HTML
<ul class="mui-table-view">
    <li class="mui-table-view-cell mui-media">
      <a href="javascript:;">
        <img class="mui-media-object mui-pull-left" src="https://gitee.com/uploads/71/556171_UniverseKing.jpg?1457705879">
        <div class="mui-media-body">
          <h1>御剑乘风来 除魔天地间</h1>
          <p class='mui-ellipsis'>
              <span>发表时间:2018-01-01 12:22:11</span>
              <span>点击:0次</span>
          </p>
        </div>
      </a>
    </li>
</ul>
```

2. 设置样式

```CSS
.mui-table-view {
  li {
    h1 {
      font-size: 14px;
    }
    .mui-ellipsis {
      font-size: 12px;
      color: #0094ff;
      display: flex;
      justify-content: space-between;
    }
  }
}
```

## 实现新闻资讯列表数据动态化

1. 在 main.js 中配置 vue-resource 请求根域名

```JavaScript
// 2.3 全局配置请求的URL根域名
Vue.http.options.root = "http://vue.studyit.io"
```

2. 在`NewsList.vue`组件中发送数据请求

```JavaScript
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      newslist: [] // 新闻列表
    };
  },
  created() {
    this.getNewsList();
  },
  methods: {
    getNewsList() {
      // 获取新闻列表
      this.$http.get("api/getnewslist").then(result => {
        if (result.body.status === 0) {
          // 如果没有失败，应该把数据保存到 data 上
          this.newslist = result.body.message;
        } else {
          Toast("获取新闻列表失败！");
        }
      });
    }
  }
}
```

3. 使用 v-for 循环渲染图文列表,并绑定数据

```HTML
<li class="mui-table-view-cell mui-media" v-for="(item,index) in newslist" :key="index">
    <a href="javascript:;">
      <img class="mui-media-object mui-pull-left" :src="item.img_url">
      <div class="mui-media-body">
        <h1>{{item.title}}</h1>
        <p class='mui-ellipsis'>
            <span>发表时间:{{item.add_time}}</span>
            <span>点击:{{item.click}}次</span>
        </p>
      </div>
    </a>
</li>
```

## 实现新闻列表时间格式化

1. 安装时间格式化组件库 moment

```JavaScript
npm i moment --save
```

2. 在 main.js 中定义全局过滤器进行时间格式化

```JavaScript
// 导入时间格式化组件库moment
import moment from 'moment'
// 定义时间格式化全局过滤器
Vue.filter('dateFormat', function (dateStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dateStr).format(pattern)
})
```

3. 在新闻列表页面使用过滤器

```HTML
<span>发表时间:{{item.add_time | dateFormat('YYYY-MM-DD')}}</span>
```

## 实现新闻列表点击跳转到新闻详情页面

1. 创建`NewsInfo.vue`组件

2. 在`router.js`中导入组件并添加路由规则

```JavaScript
import NewsInfo from '../components/news/NewsInfo.vue'

{ path: '/home/newsinfo/:id', component: NewsInfo }
```

3. 修改新闻列表中的 a 标签为`router-link`,并设置 to 属性的值为跳转路径

```HTML
<router-link :to="'/home/newsinfo/' + item.id">
```

4. 在`NewsInfo.vue`组件 data 中定义属性 id,用于接收路由传递的参数

```JavaScript
export default {
  data() {
    return {
      id: this.$route.params.id
    };
  }
}
```

## 完成新闻详情页面布局及数据动态化

> [深度作用选择器](https://vue-loader.vuejs.org/zh-cn/features/scoped-css.html)

1. HTML 结构布局

```HTML
<div class="newsinfo-container">
    <!-- 大标题 -->
    <h3 class="title">{{ newsinfo.title }}</h3>
    <!-- 子标题 -->
    <p class="subtitle">
    <span>发表时间：{{ newsinfo.add_time | dateFormat }}</span>
    <span>点击：{{ newsinfo.click }}次</span>
    </p>
    <hr>
    <!-- 内容区域 -->
    <div class="content" v-html="newsinfo.content"></div>
</div>
```

2. CSS 样式

```SCSS
.newsinfo-container {
  padding: 0 4px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .subtitle {
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
  .content {
    img {
      width: 100%;
    }
  }
}
```

3. 请求数据

```JavaScript
export default {
  data() {
    return {
      id: this.$route.params.id,
      newsinfo: {} // 新闻对象
    };
  },
  created() {
    this.getNewsInfo();
  },
  methods: {
    getNewsInfo() {
      // 获取新闻详情
      this.$http.get("api/getnew/" + this.id).then(result => {
        if (result.body.status === 0) {
          this.newsinfo = result.body.message[0];
        } else {
          Toast("获取新闻失败！");
        }
      });
    }
  }
};
```

## 封装评论子组件并集成到新闻详情组件中

1. 在`components/subcomponents`文件夹中创建`component.vue`组件

2. 在`NewsInfo.vue`组件中导入并注册`component.vue`组件

```JavaScript
import comment from '../subcomponents/comment.vue'

// 注册子组件
components:{
    "comment-box":comment
}
```

3. 使用子组件

```HTML
<!-- 评论子组件 -->
<comment-box></comment-box>
```

4. 完成子组件布局和样式

## 获取评论子组件真实数据

1. 使用父子组件传值将数据 id 传到子组件中

```JavaScript
// 1 NewsInfo.vue中使用comment组件时绑定id属性传值
<comment-box :id="this.id"></comment-box>

// 2. comment.vue组件对象中定义props:["id"]接收值
props: ["id"]
```

2. 使用 vue-resource 发起数据请求

```JavaScript
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      pageIndex: 1, // 默认展示第一页数据
      comments: [] // 所有的评论数据
    };
  },
  created() {
    this.getComments();
  },
  methods: {
    getComments() {
      // 获取评论
      this.$http
        .get("api/getcomments/" + this.id + "?pageindex=" + this.pageIndex)
        .then(result => {
          if (result.body.status === 0) {
            this.comments = result.body.message;
          } else {
            Toast("获取评论失败！");
          }
        });
    }
  },
  props: ["id"]
};
```

3. 使用 vue 指令在 HTML 结构中绑定数据

## 完成评论组件点击加载更多功能

1. 注册点击事件

```HTML
<mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
```

2. 自增 pageIndx,然后重新发送数据请求

```JavaScript
getMore() {
  // 加载更多
  this.pageIndex++;
  this.getComments();
}
```

3. 将新请求回来的数据和以前的数据进行拼接

```JavaScript
this.comments = this.comments.concat(result.body.message);
```

## 完成发表评论功能

1. 双向数据绑定获取评论框内容并注册点击事件

```HTML
<textarea placeholder="请输入要BB的内容（最多吐槽120字）" maxlength="120"  v-model="msg"></textarea>

<mt-button type="primary" size="large"  @click="postComment">发表评论</mt-button>
```

2. `main.js`中全局设置 vue-resource post 数据请求格式

```JavaScript
// 2.4 全局设置 post 时候表单数据格式组织形式   application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true;
```

3. 发送数据请求

```JavaScript
postComment() {
  // 校验是否为空内容
  if (this.msg.trim().length === 0) {
    return Toast("评论内容不能为空！");
  }
  this.$http
    .post("api/postcomment/" + this.$route.params.id, {
      content: this.msg.trim()
    })
    .then(function(result) {
      if (result.body.status === 0) {
        // 数据提交成功后,将发送的数据组装成一个消息对象,拼接到当前数据最前面
        var cmt = {
          user_name: "匿名用户",
          add_time: Date.now(),
          content: this.msg.trim()
        };
        this.comments.unshift(cmt);
        this.msg = "";
      }
    });
}
```

## 完成图片列表顶部导航布局

1. 修改`HomeContainer.vue`图片分享按钮的 a 标签为`router-link`并设置 to 属性为'/home/photolist'

```HTML
<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
  <router-link to='/home/photolist'>
    <img src="../../images/menu2.png" alt="">
    <div class="mui-media-body">图片分享</div>
  </router-link>
</li>
```

2. 新建`photos/PhotoList.vue`文件,在`router.js`中配置路由规则

```JavaScript
import PhotoList from '../components/photos/PhotoList.vue'

{ path: '/home/photolist', component: PhotoList }
```

3. 在`PhotoList.vue`中引用 MUI 中的'tab-top-webview-main.html'中的顶部代码,并去掉`mui-fullscreen`样式类

```HTML
<div id="slider" class="mui-slider">
    <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
            <a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
                推荐
            </a>
            <a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
                热点
            </a>
            <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
                北京
            </a>
            <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
                社会
            </a>
            <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
                娱乐
            </a>
        </div>
    </div>
</div>
```

## 解决导入 MUIjs 文件后产生的问题

1. `PhotoList.vue`中导入 MUIjs 文件,实现顶部导航滚动效果

```JavaScript
import mui from "../../lib/mui/js/mui.min.js";

mounted() {
  // 需要在组件的 mounted 事件钩子中，注册 mui 的 scroll 滚动事件
  mui(".mui-scroll-wrapper").scroll({
    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
  });
}
```

2. 安装`babel-plugin-transform-remove-strict-mode`移除 webpack 打包 js 后默认加上的严格模式

> [babel-plugin-transform-remove-strict-mode](https://github.com/genify/babel-plugin-transform-remove-strict-mode)

```JavaScript
// 1. 安装babel-plugin-transform-remove-strict-mode
cnpm i babel-plugin-transform-remove-strict-mode --save-dev

// 2. 在.babelrc文件的plugins节点中配置
"transform-remove-strict-mode"
```

3. 加入样式消除 chrome 控制台警告

> 原因：（是 chrome 为了提高页面的滑动流畅度而新折腾出来的一个东西）

> http://www.cnblogs.com/pearl07/p/6589114.html

> https://developer.mozilla.org/zh-CN/docs/Web/CSS/touch-action

```CSS
* { touch-action: pan-y; }
```

4. 修改 tabbar 样式类名,解决 tabbar 不能点击问题

```CSS
/* 1. 将tabbar中的mui-tab-item改为mui-tab-item-llb */
/* 2. 在组件中加入以下样式*/
.mui-bar-tab .mui-tab-item-llb.mui-active {
    color: #007aff;
}

.mui-bar-tab .mui-tab-item-llb {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}

.mui-bar-tab .mui-tab-item-llb .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-llb .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
```

## 渲染图片分类真实数据

1. 发送数据请求

```JavaScript
  data() {
    return {
      cates: [] // 所有分类的列表数组
    };
  },
  created(){
      this.getAllCategory();
  },
  methods: {
    getAllCategory() {
      // 获取所有的图片分类
      this.$http.get("api/getimgcategory").then(result => {
        if (result.body.status === 0) {
          // 手动拼接出一个最完整的 分类列表
          result.body.message.unshift({ title: "全部", id: 0 });
          this.cates = result.body.message;
        }
      });
    }
  }
```

2. `v-for`渲染界面

```HTML
<!-- 顶部滑动条区域 -->
<div id="slider" class="mui-slider">
    <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
        <a :class="['mui-control-item', item.id == 0 ? 'mui-active' : '']" v-for="(item,index) in cates" :key="index">
            {{ item.title }}
        </a>
        </div>
    </div>
</div>
```

## 渲染图片列表并实现懒加载图片

> 如果使用 mint-ui 中的懒加载指令实现图片懒加载效果,需要全局注册 mint-ui,即

```JavaScript
import MintUi from 'mint-ui'
Vue.use(MintUi)
import 'mint-ui/lib/style.css'
```

1. 使用 mint-ui 中的 v-lazy 搭建页面结构

```HTML
<ul class="photo-list">
  <li v-for="(item,index) in list" :key="index">
    <img v-lazy="item.img_url">
    <div class="info">
      <h1 class="info-title">{{ item.title }}</h1>
      <div class="info-body">{{ item.zhaiyao }}</div>
    </div>
  </li>
</ul>
```

2. 书写样式美化界面

```SCSS
.photo-list {
  list-style: none;
  margin: 0;
  padding: 10px;
  padding-bottom: 0;
  li {
    background-color: #ccc;
    text-align: center;
    margin-bottom: 10px;
    box-shadow: 0 0 9px #999;
    position: relative;
    img {
      width: 100%;
      vertical-align: middle;
    }
    /*图片懒加载样式 mint-ui提供*/
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
    .info {
      color: white;
      text-align: left;
      position: absolute;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.4);
      max-height: 84px;
      .info-title {
        font-size: 14px;
      }
      .info-body {
        font-size: 13px;
      }
    }
  }
```

3. 发送数据请求获取数据

```JavaScript
getPhotoListByCateId(cateId) {
  // 根据 分类Id，获取图片列表
  this.$http.get("api/getimages/" + cateId).then(result => {
    if (result.body.status === 0) {
      this.list = result.body.message;
    }
  });
}
```

## 实现图片详情的页面跳转和数据加载及评论子组件集成

1. 更改`PhotoList.vue`中的 li 标签为`router-link`,并设置 to 属性

```HTML
<router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/' + item.id" tag="li">
</router-link>
```

2. 创建`PhotoInfo.vue`组件,添加路由匹配规则

```JavaScript
import PhotoInfo from '../components/photos/PhotoInfo.vue'

{ path: '/home/photoinfo/:id', component: PhotoInfo }
```

3. 搭建`PhotoInfo.vue`页面结构

```HTML
<div class="photoinfo-container">
    <h3>{{ photoinfo.title }}</h3>
    <p class="subtitle">
      <span>发表时间：{{ photoinfo.add_time | dateFormat }}</span>
      <span>点击：{{ photoinfo.click }}次</span>
    </p>
    <hr>
    <!-- 缩略图区域 -->
    <!-- 图片内容区域 -->
    <div class="content" v-html="photoinfo.content"></div>
    <!-- 放置一个现成的 评论子组件 -->
    <cmt-box :id="id"></cmt-box>
</div>
```

4. 书写样式

```SCSS
.photoinfo-container {
  padding: 3px;
  h3 {
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }
  .content {
    font-size: 13px;
    line-height: 30px;
  }
}
```

5. 获取数据,渲染页面

```JavaScript
data() {
  return {
    id: this.$route.params.id, // 从路由中获取到的 图片Id
    photoinfo: {} // 图片详情
  };
},
created() {
  this.getPhotoInfo();
},
methods: {
  getPhotoInfo() {
    // 获取图片的详情
    this.$http.get("api/getimageInfo/" + this.id).then(result => {
      if (result.body.status === 0) {
        this.photoinfo = result.body.message[0];
      }
    });
  }
},
// 注册评论子组件
components: {
  // 注册 评论子组件
  "cmt-box": comment
}
```

## 图片详情缩略图预览功能

> [vue-preview](https://www.npmjs.com/package/vue-preview)

1. 安装 vue-preview 插件,在 main.js 中导入并注册

```JavaScript
cnpm i vue-preview --save

import VuePreview from 'vue-preview'
Vue.use(VuePreview)
```

2. 引入结构代码并书写样式

```HTML
<!-- 缩略图区域 -->
<div class="thumbs">
  <img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index, list)" :key="index">
</div>
```

```CSS
.thumbs {
  img {
    margin: 10px;
    box-shadow: 0 0 8px #999;
  }
}
```

3. 获取缩略图数据,渲染界面

```JavaScript
getThumbs() {
  // 获取缩略图
  this.$http.get("api/getthumimages/" + this.id).then(result => {
    if (result.body.status === 0) {
      // 循环每个图片数据，补全图片的宽和高
      result.body.message.forEach(item => {
        item.w = 600;
        item.h = 400;
      });
      // 把完整的数据保存到 list 中
      this.list = result.body.message;
    }
  });
}
```

## 商品列表静态布局

1. 改造*商品购买*按钮为`router-link`

```HTML
<li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
  <router-link to='/home/goodslist'>
    <img src="../../images/menu3.png" alt="">
    <div class="mui-media-body">商品购买</div>
  </router-link>
</li>
```

2. 新建'goods/GoodsList.vue'组件,并添加路由规则

```JavaScript
import GoodsList from '../components/goods/GoodsList.vue'

{ path: '/home/goodslist', component: GoodsList }
```

3. 书写静态结构

```HTML
<div class="goods-list">
    <div class="goods-item">
        <img src="http://ofv795nmp.bkt.clouddn.com//upload/201504/20/thumb_201504200119256512.jpg" alt="">
        <h1 class="title">小米（Mi）小米Note 16G双网通版</h1>
        <div class="info">
            <p class="price">
            <span class="now">￥899</span>
            <span class="old">￥999</span>
            </p>
            <p class="sell">
            <span>热卖中</span>
            <span>剩60件</span>
            </p>
        </div>
    </div>
</div>
```

4. 书写 CSS

```SCSS
<style lang="scss" scoped>
.goods-list{
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  justify-content: space-between;

  .goods-item{
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
    img{
      width: 100%;
    }
    .title{
      font-size: 14px;
    }
    .info{
      background-color: #eee;
      p{
        margin: 0;
        padding: 5px;
      }
      .price{
        .now{
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old{
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .sell{
        display: flex;
        justify-content: space-between;
        font-size: 13px;
      }
    }
  }
}
</style>
```

## 商品列表真实数据获取及上拉加载更多下拉刷新

1. 使用 mint-ui 的`mt-loadmore`组件包裹列表

```HTML
<mt-loadmore :autoFill='false' :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
    <div class="goods-list">
        <div class="goods-item" v-for="(item,index) in goodslist" :key="index">
            <img :src="item.img_url" alt="">
            <h1 class="title">{{ item.title }}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{ item.sell_price }}</span>
                    <span class="old">￥{{ item.market_price }}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩{{ item.stock_quantity }}件</span>
                </p>
            </div>
        </div>
    </div>
</mt-loadmore>
```

2. 定义数据请求方法请求数据

```JavaScript
getGoodsList() {
  // 获取商品列表
  this.$http
    .get("api/getgoods?pageindex=" + this.pageindex)
    .then(result => {
      if (result.body.status != 0) {
        Toast(result.body.message);
        return;
      }
      if (this.pageindex == 1) {
        // 重置下拉状态
        this.$refs.loadmore.onTopLoaded();
        // 直接赋值第一页的数据
        this.goodslist = result.body.message;
      } else {
        // 重置上拉状态
        if (result.body.message.length == 0) {
          this.allLoaded = true;
        }
        // 重置上拉状态
        this.$refs.loadmore.onBottomLoaded();
        this.goodslist = this.goodslist.concat(result.body.message);
      }
    });
}
```

3. 定义上拉和下拉时触发的方法

```JavaScript
// 下拉时触发 请求最新数据
loadTop() {
  console.log("下拉");
  this.pageindex = 1;
  this.getGoodsList();
},
//上拉
loadBottom() {
  console.log("上拉");
  this.pageindex++;
  this.getGoodsList();
}
```

## 编程式导航跳转商品详情页面

1. 给需要点击跳转的 div 注册事件

```HTML
<div class="goods-item" v-for="(item,index) in goodslist" :key="index" @click="goDetail(item.id)">
</div>
```

2. 使用 vue-router 提供的编程式导航跳转

```JavaScript
goDetail(id) {
    // 1. 最简单的
    // this.$router.push("/home/goodsinfo/" + id);
    // 2. 传递对象
    // this.$router.push({ path: "/home/goodsinfo/" + id });
    // 3. 传递命名的路由(需要在定义的路由规则对象中添加name属性)
    this.$router.push({ name: "goodsinfo", params: { id } });
}
```

3. 使用 MUI 提供的卡片视图代码段布局

```HTML
<div class="goodsinfo-container">
    <!-- 商品轮播图区域 -->
    <div class="mui-card">
    <div class="mui-card-content">
        <div class="mui-card-content-inner">
        御剑乘风来 除魔天地间
        </div>
    </div>
    </div>
    <!-- 商品购买区域 -->
    <div class="mui-card">
        <div class="mui-card-header">页眉</div>
        <div class="mui-card-content">
            <div class="mui-card-content-inner">
            御剑乘风来 除魔天地间
            </div>
        </div>
    </div>
    <!-- 商品参数区域 -->
    <div class="mui-card">
        <div class="mui-card-header">页眉</div>
        <div class="mui-card-content">
            <div class="mui-card-content-inner">
            御剑乘风来 除魔天地间
            </div>
        </div>
        <div class="mui-card-footer">
        页脚
        </div>
    </div>
</div>
```

```CSS
.goodsinfo-container {
  background-color: #eee;
  overflow: hidden;
}
```

## 封装轮播图组件并在首页和商品详情页面使用

1. 新建一个`swiper.vue`文件,将`HomeContainer.vue`中的轮播图代码抽取出来

```JavaScript
<template>
  <div>
  <mt-swipe-item>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in lunbotuList" :key="index">
        <img :src="item.src" alt="">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
export default {
  // 用于接收父组件传过来的数据
  props: ["lunbotuList"]
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;

  .mint-swipe-item {
    text-align: center;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
```

2. 将首页的轮播图代码替换成封装好的 swiper 组件使用

```JavaScript
// 1. 导入swiper组件
import swiper from '../subcomponents/swiper.vue'
// 2. 注册成子组件
components:{
    swiper
}
// 3. 使用组件
<swiper :lunbotu-list = 'imageList'></swiper>
```

3. 在商品详情页面集成 swiper 组件

```HTML
<!-- 商品轮播图区域 -->
<div class="mui-card">
    <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :lunbotu-list="lunbotu"></swiper>
        </div>
    </div>
</div>
```

4. 定义存放数据的数组并发送请求

```JavaScript
data() {
  return {
    id: this.$route.params.id, // 将路由参数对象中的 id 挂载到 data , 方便后期调用
    lunbotu: [] // 轮播图的数据
  };
},
created() {
  this.getLunbotu();
},
methods: {
  getLunbotu() {
    this.$http.get("api/getthumimages/" + this.id).then(result => {
      if (result.body.status === 0) {
        // 先循环轮播图数组的每一项，为 item 添加 img 属性，因为 轮播图 组件中，只认识 item.img， 不认识 item.src
        result.body.message.forEach(item => {
          item.img = item.src;
        });
        this.lunbotu = result.body.message;
      }
    });
  }
},
components: {
  swiper
}
```

## 解决轮播图宽度问题

1. 给轮播图组件定义一个属性控制图片的宽度是否应该设置 100%,该属性由父组件传递进来

```JavaScript
props: ["lunbotuList","isfull"]
```

2. 通过该属性控制是否给 img 添加样式类`full`

```HTML
<img :src="item.img" alt="" :class="{'full': isfull}">
```

```CSS
.full {
  width: 100%;
}
```

3. 首页和商品详情页面使用 swiper 组件时传递不同的值

```HTML
<!-- 首页 -->
<swiper :lunbotu-list = 'imageList' :isfull="true"></swiper>

<!-- 商品详情 -->
<swiper :lunbotu-list="lunbotu" :isfull="false"></swiper>
```

## 商品购买区域结构样式

1. 结构

```HTML
<div class="mui-card">
  <div class="mui-card-header">商品名称</div>
  <div class="mui-card-content">
    <div class="mui-card-content-inner">
      <p class="price">
        市场价：<del>￥2399</del>&nbsp;&nbsp;销售价：<span class="now_price">￥1999</span>
      </p>
      <p>购买数量：</p>
      <p>
        <mt-button type="primary" size="small">立即购买</mt-button>
        <mt-button type="danger" size="small">加入购物车</mt-button>
      </p>
    </div>
  </div>
</div>
```

2. 定义购买数量 numbox 组件

```JavaScript
<template>
  <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" value="1" />
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.min.js";

export default {
  mounted() {
    // 初始化数字选择框组件
    mui(".mui-numbox").numbox();
    console.log(this.max);
  }
};
</script>

<style lang="scss" scoped>

</style>
```

3. `GoodsInfo.vue`中集成组件

```JavaScript
// 1. 导入组件
import numbox from "../subcomponents/goodsinfo_numbox.vue";
// 2. 注册组件
components: {
  numbox
}
// 3. 使用组件
<p>购买数量：<numbox></numbox></p>
```

## 渲染商品详情页面数据

1. 商品参数区域结构

```HTML
<!-- 商品参数区域 -->
<div class="mui-card">
  <div class="mui-card-header">商品参数</div>
  <div class="mui-card-content">
    <div class="mui-card-content-inner">
      <p>商品货号：</p>
      <p>库存情况：</p>
      <p>上架时间：</p>
    </div>
  </div>
  <div class="mui-card-footer">
    <mt-button type="primary" size="large" plain >图文介绍</mt-button>
    <mt-button type="danger" size="large" plain >商品评论</mt-button>
  </div>
</div>
```

2. 样式

```SCSS
.goodsinfo-container {
  background-color: #eee;
  overflow: hidden;
  .now_price {
    color: red;
    font-size: 16px;
    font-weight: bold;
  }
  .mui-card-footer {
    display: block;
    button {
      margin: 15px 0;
    }
  }
}
```

3. 发送请求获取数据

```JavaScript
getGoodsInfo() {
  // 获取商品的信息
  this.$http.get("api/goods/getinfo/" + this.id).then(result => {
    if (result.body.status === 0) {
      this.goodsinfo = result.body.message[0];
    }
  });
}
```

## 完成商品详情中的图文介绍和商品评论

1. 绑定跳转事件

```HTML
<div class="mui-card-footer">
  <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
  <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
</div>
```

2. 编程式导航进行跳转

```JavaScript
goDesc(id) {
  // 点击使用编程式导航跳转到 图文介绍页面
  this.$router.push({ name: "goodsdesc", params: { id } });
},
goComment(id) {
  // 点击跳转到 评论页面
  this.$router.push({ name: "goodscomment", params: { id } });
}
```

3. 创建组件并注册路由规则

```JavaScript
import GoodsDesc from '../components/goods/GoodsDesc.vue'
import GoodsComment from '../components/goods/GoodsComment.vue'

{ path: '/goods/goodsdesc/:id', component: GoodsDesc ,name:'goodsdesc'},
{ path: '/goods/goodscomment/:id', component: GoodsComment ,name:'goodscomment'}
```

4. 发送请求并渲染组件

## 实现加入购物车小球动画

1. 小球结构及样式

```HTML
<div class="ball" v-show="ballFlag" ref="ball"></div>
```

```SCSS
.ball {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  z-index: 99;
  top: 390px;
  left: 146px;
}
```

2. 动画的钩子函数实现

```JavaScript
// 1. 使用transition标签包裹并绑定钩子函数
<transition
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter">
    <div class="ball" v-show="ballFlag" ref="ball"></div>
</transition>

// 2. 书写钩子函数动画逻辑
beforeEnter(el) {
  el.style.transform = "translate(0, 0)";
},
enter(el, done) {
  el.offsetWidth;

  el.style.transform = "translate(93px,230px)";
  el.style.transition = "all 0.5s cubic-bezier(.4,-0.3,1,.68)";

  done();
},
afterEnter(el) {
  this.ballFlag = !this.ballFlag;
}
```

3. 加入购物车按钮绑定事件

```JavaScript
addToShopCar() {
  // 添加到购物车
  this.ballFlag = !this.ballFlag;
}
```

## 优化小球动画结束位置

1. 给 App.vue 中的徽章添加 id

```HTML
<span class="mui-badge" id="badge">0</span>
```

2. 给小球添加 ref 属性

```HTML
<div class="ball" v-show="ballFlag" ref="ball"></div>
```

3. 获取小球和徽章的位置,计算横纵坐标差

```JavaScript
// 获取小球的 在页面中的位置
const ballPosition = this.$refs.ball.getBoundingClientRect();
// 获取 徽标 在页面中的位置
const badgePosition = document
  .getElementById("badge")
  .getBoundingClientRect();

const xDist = badgePosition.left - ballPosition.left;
const yDist = badgePosition.top - ballPosition.top;

el.style.transform = `translate(${xDist}px, ${yDist}px)`;
el.style.transition = "all 0.5s cubic-bezier(.4,-0.3,1,.68)";
```

## 子组件向父组件传递购买数量值

1. 子组件中改变数量时使用 this.$emit 发布事件

```JavaScript
methods: {
  countChanged() {
    // 每当 文本框的数据被修改的时候，立即把 最新的数据，通过事件调用，传递给父组件
    // console.log(this.$refs.numbox.value);
    this.$emit("getcount", parseInt(this.$refs.numbox.value));
  }
}
```

2. 父组件中使用子组件时绑定事件,事件名称和子组件发布事件名称相同

```HTML
<p>购买数量：<numbox @getcount="getSelectedCount"></numbox></p>
```

3. 父组件中定义事件处理函数接收子组件的传值

```JavaScript
getSelectedCount(count) {
  // 当子组件把 选中的数量传递给父组件的时候，把选中的值保存到 data 上
  this.selectedCount = count;
  console.log("父组件拿到的数量值为： " + this.selectedCount);
}
```

## 设置购买数量组件最大值

1. 使用父组件向子组件传值的方式将最大值传递过去

```JavaScript
// 1. 父组件中使用子组件时绑定属性传值
<p>购买数量：<numbox @getcount="getSelectedCount" :max="goodsinfo.stock_quantity"></numbox></p>
// 2. 子组件中定义props接收值
props: ["max"]
```

2. 子组件使用 watch 监视 max 的变化并使用 MUI 的 jsAPI 设置最大值

```JavaScript
watch: {
  // 属性监听
  max: function(newVal, oldVal) {
    // 使用 JS API 设置 numbox 的最大值
    mui(".mui-numbox")
      .numbox()
      .setOption("max", newVal);
  }
}
```

## 集成 Vuex

1. 安装 Vuex

```JavaScript
cnpm i vuex --save
```

2. `main.js`中实例化 vuex

```JavaScript
// 注册 vuex
import Vuex from 'vuex'
Vue.use(Vuex)

var store = new Vuex.Store({
    state: { // this.$store.state.***

    },
    mutations: { // this.$store.commit('方法的名称', '按需传递唯一的参数')

    },
    getters: { // this.$store.getters.***
      // 相当于 计算属性，也相当于 filters
    }
})
```

3. 将 store 实例挂载到 vue 实例上

```JavaScript
new Vue({
    el: '#app',
    render: c => c(app),
    router, // 将router实例挂载到vue
    store // 挂载 store 状态管理对象
})
```

## 使用 vuex 实现加入购物车保存数据

1. 在 state 中定义数组 car 用于保存数据

```JavaScript
state: { // this.$store.state.***
  car: [] // 将 购物车中的商品的数据，用一个数组存储起来，在 car 数组中，存储一些商品的对象， 咱们可以暂时将这个商品对象，设计成这个样子
  // { id:商品的id, count: 要购买的数量, price: 商品的单价，selected: false  }
},
```

2. 在 mutations 中定义方法实现加入购物车改变数据

```JavaScript
addToCar(state, goodsinfo) {
    // 点击加入购物车，把商品信息，保存到 store 中的 car 上
    // 分析：
    // 1. 如果购物车中，之前就已经有这个对应的商品了，那么，只需要更新数量
    // 2. 如果没有，则直接把 商品数据，push 到 car 中即可

    // 假设 在购物车中，没有找到对应的商品
    var flag = false
    state.car.some(item => {
        if (item.id == goodsinfo.id) {
            item.count += parseInt(goodsinfo.count)
            flag = true
            return true
        }
    })
    // 如果最终，循环完毕，得到的 flag 还是 false，则把商品数据直接 push 到 购物车中
    if (!flag) {
        state.car.push(goodsinfo)
    }
}
```

3. 在`GoodsInfo.vue`中点击加入购物车时,拼装数据触发 store 中改变数据的方法

```JavaScript
var goodsinfo = {
  id: this.id,
  count: this.selectedCount,
  price: this.goodsinfo.sell_price,
  selected: true
};
// 调用 store 中的 mutations 来将商品加入购物车
this.$store.commit("addToCar", goodsinfo);
```

## getters 实现加入购物车徽章变化

1. store 中定义 getters 计算购物车总数量

```JavaScript
getters:{
  getAllCount(state) {
    var c = 0;
    state.car.forEach(item => {
        c += item.count
    })
    return c
  }
}
```

2. 使用 this.$store.getters.getAllCount 显示数据

```HTML
<span class="mui-badge" id="badge">{{this.$store.getters.getAllCount}}</span>
```

## 实现购物车数据的本地持久化存储

1. 进入网站先从本地 localstorage 中获取数据并设置给 state 中的 car

```JavaScript
var car = JSON.parse(localStorage.getItem('car') || '[]')

state: {
    car: car
}
```

2. 改变数据时将数据存储到 localstorage

```JavaScript
// 当 更新 car 之后，把 car 数组，存储到 本地的 localStorage 中
localStorage.setItem('car', JSON.stringify(state.car))
```

## 购物车列表界面布局

1. HTML 结构

```HTML
<div class="shopcar-container">
  <div class="goods-list">
    <!-- 商品列表项区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <mt-switch></mt-switch>
          <img src="http://vue.studyit.io/upload/201504/20/thumb_201504200119256512.jpg">
          <div class="info">
            <h1>华为（HUAWEI）荣耀6Plus 16G双4G版</h1>
            <p>
              <span class="price">￥2199</span>
              <numbox></numbox>
              <a href="#">删除</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
    <!-- 结算区域 -->
  <div class="mui-card">
    <div class="mui-card-content">
      <div class="mui-card-content-inner jiesuan">
        <div class="left">
          <p>总计（不含运费）</p>
          <p>已勾选商品 <span class="red"></span> 件， 总价 <span class="red"></span></p>
        </div>
        <mt-button type="danger">去结算</mt-button>
      </div>
    </div>
  </div>
</div>
```

2.样式

```SCSS
.shopcar-container {
  background-color: #eee;
  overflow: hidden;
  .goods-list {
    .mui-card-content-inner {
      display: flex;
      align-items: center;
    }
    img {
      width: 60px;
    }
    h1 {
      font-size: 13px;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .price {
        color: red;
        font-weight: bold;
      }
    }
  }
  .jiesuan {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .red {
      color: red;
      font-weight: bold;
      font-size: 16px;
    }
  }
}
```

## 获取商品数据并渲染到界面

1. 获取商品数据

```JavaScript
created(){
    this.getGoodsList()
},
methods: {
  getGoodsList() {
    // 1. 获取到 store 中所有的商品的Id，然后拼接出一个 用逗号分隔的 字符串
    var idArr = [];
    this.$store.state.car.forEach(item => idArr.push(item.id));
    // 如果 购物车中没有商品，则直接返回，不需要请求数据接口，否则会报错
    if (idArr.length <= 0) {
      return;
    }
    // 获取购物车商品列表
    this.$http
      .get("api/goods/getshopcarlist/" + idArr.join(","))
      .then(result => {
        if (result.body.status === 0) {
          this.goodslist = result.body.message;
        }
      });
  }
}
```

2. 渲染界面

## 购物车列表中初始化数量值

1. getters 中定义方法创造出需要使用的数据结构

```JavaScript
// 将[{"id":"87","count":3,"price":2195,"selected":true},{"id":89,"count":4,"price":2199,"selected":true}] 变成 {87:3,89:4}
getGoodsCount(state) {
    var o = {}
    state.car.forEach(item => {
      o[item.id] = item.count
    })
    return o
}
```

2. 使用 numbox 时传递数量值

```JavaScript
<numbox :initcount="$store.getters.getGoodsCount[item.id]"></numbox>
```

3. 在 numbox 组件内部获取 initcount 使用

```JavaScript
props:["initcount"]
<input id="test" class="mui-input-numbox" type="number" :value="initcount" @change="countChanged" ref="numbox" />
```

## 实现购物车商品数量改变同步到 store 中

1. 在 mutations 中定义用于同步数量的方法

```JavaScript
updateGoodsInfo(state, goodsinfo) {
    // 修改购物车中商品的数量值
    state.car.some(item => {
        if (item.id == goodsinfo.id) {
            item.count = parseInt(goodsinfo.count)
            return true
        }
    })
    // 当修改完商品的数量，把最新的购物车数据，保存到 本地存储中
    localStorage.setItem('car', JSON.stringify(state.car))
}
```

2. 将商品 id 使用父子组件传值传递到 numbox

```JavaScript
<numbox :initcount="$store.getters.getGoodsCount[item.id]" :goodsid="item.id"></numbox>

props:['goodsid']
```

3. 购物车数量发生变化时触发`updateGoodsInfo`

```JavaScript
countChanged() {
  // 每当数量值改变，则立即把最新的数量同步到 购物车的  store 中，覆盖之前的数量值
  this.$store.commit("updateGoodsInfo", {
    id: this.goodsid,
    count: this.$refs.numbox.value
  });
}
```

## 实现购物车商品数据的删除

1. 在 mutations 中定义删除 store 中数据的方法

```JavaScript
removeFormCar(state, id) {
    // 根据Id，从store 中的购物车中删除对应的那条商品数据
    state.car.some((item, i) => {
        if (item.id == id) {
            state.car.splice(i, 1)
            return true;
        }
    })
    // 将删除完毕后的，最新的购物车数据，同步到 本地存储中
    localStorage.setItem('car', JSON.stringify(state.car))
}
```

2. 给 a 标签注册删除事件

```HTML
<!-- 根据id删除store中的数据 根据index删除goodslist中的数据 -->
<a href="#" @click.prevent="remove(item.id, index)">删除</a>
```

3. 定义删除的函数

```JavaScript
remove(id, index) {
    // 点击删除，把商品从 store 中根据 传递的 Id 删除，同时，把 当前组件中的 goodslist 中，对应要删除的那个商品，使用 index 来删除
    this.goodslist.splice(index, 1);
    this.$store.commit("removeFormCar", id);
}
```

## 实现勾选数量和总价的自动计算

1. 把 store 中的选中状态同步到页面

```JavaScript
// 1. getters中定义 计算选中的商品 的方法
getGoodsSelected(state) {
    var o = {}
    state.car.forEach(item => {
        o[item.id] = item.selected
    })
    return o
}
// 2. mt-switch组件上绑定选中状态
<mt-switch
v-model="$store.getters.getGoodsSelected[item.id]"></mt-switch>
```

2. 将页面选中状态同步到 store 中保存

```JavaScript
// 1. mutations中定义更新选中状态的方法
updateGoodsSelected(state, info) {
    state.car.some(item => {
        if (item.id == info.id) {
            item.selected = info.selected
        }
    })
    // 把最新的 所有购物车商品的状态保存到 store 中去
    localStorage.setItem('car', JSON.stringify(state.car))
}

// 2. mt-switch绑定点击事件
<mt-switch
v-model="$store.getters.getGoodsSelected[item.id]"
@change="selectedChanged(item.id, $store.getters.getGoodsSelected[item.id])"></mt-switch>

// 3. 定义事件处理函数
selectedChanged(id, val) {
  // 每当点击开关，把最新的 快关状态，同步到 store 中
  this.$store.commit("updateGoodsSelected", { id, selected: val });
}
```

3. getters 中定义计算勾选商品件数和总价格的方法

```JavaScript
getGoodsCountAndAmount(state) {
    var o = {
        count: 0, // 勾选的数量
        amount: 0 // 勾选的总价
    }
    state.car.forEach(item => {
        if (item.selected) {
            o.count += item.count
            o.amount += item.price * item.count
        }
    })
    return o
}
```

4. 使用 getters 中的方法显示数据

```HTML
<p>已勾选商品 <span class="red">{{ $store.getters.getGoodsCountAndAmount.count }}</span> 件， 总价 <span class="red">￥{{ $store.getters.getGoodsCountAndAmount.amount }}</span></p>
```

## 实现项目的返回按钮功能

1. 使用 mint-ui 的返回按钮组件

```HTML
<mt-header fixed title='黑马程序员.Vue项目'>
    <span slot="left" @click="goBack" v-show="flag">
        <mt-button icon="back">返回</mt-button>
    </span>
</mt-header>
```

2. 使用 vue-router 提供的`this.$router.go(-1)`方法实现返回

```JavaScript
export default {
  data() {
    return {
      flag: false
    };
  },
  created() {
    this.flag = this.$route.path === "/home" ? false : true;
  },
  methods: {
    goBack() {
      // 点击后退
      this.$router.go(-1);
    }
  },
  watch: {
    "$route.path": function(newVal) {
      if (newVal === "/home") {
        this.flag = false;
      } else {
        this.flag = true;
      }
    }
  }
};
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
