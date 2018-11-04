<template>
  <div id="app">
    <!-- 头部 -->
    <header class="app-container">
     <mt-header fixed title="vue2.0商城"></mt-header>
    </header>

		<!-- 盒子 -->
		<transition>
			<router-view></router-view>
		</transition>

		<!-- 底部bar -->
    <footer>
      <nav class="mui-bar mui-bar-tab">
			  <router-link class="mui-tab-item-llb" to="/home">
			  	<span class="mui-icon mui-icon-home"></span>
			  	<span class="mui-tab-label">首页</span>
			  </router-link>
			  <router-link class="mui-tab-item-llb" to="/member">
			  	<span class="mui-icon mui-icon-contact"></span>
			  	<span class="mui-tab-label">会员</span>
			  </router-link>
			  <router-link class="mui-tab-item-llb" to="/shopcar">
			  	<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
			  	<span class="mui-tab-label">购物车</span>
			  </router-link>
			  <router-link class="mui-tab-item-llb" to="/search">
			  	<span class="mui-icon mui-icon-search"></span>
			  	<span class="mui-tab-label">搜索</span>
			  </router-link>
		  </nav>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style scoped lang="scss">
#app{
		overflow: hidden;
		padding-bottom: 50px;

}
.app-container {
    padding-top: 40px;
} 
.v-enter{
	opacity: 0;
	transform: translateX(100%)
}
.v-leave-to{
	opacity: 0;
	transform: translateX(-100%);
	position: absolute;
}
.v-enter-active,
.v-leave-active{
	transition: all 0.3s ease;
}
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


</style>
