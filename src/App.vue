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
			  <router-link class="mui-tab-item" to="/home">
			  	<span class="mui-icon mui-icon-home"></span>
			  	<span class="mui-tab-label">首页</span>
			  </router-link>
			  <router-link class="mui-tab-item" to="/member">
			  	<span class="mui-icon mui-icon-contact"></span>
			  	<span class="mui-tab-label">会员</span>
			  </router-link>
			  <router-link class="mui-tab-item" to="/shopcar">
			  	<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
			  	<span class="mui-tab-label">购物车</span>
			  </router-link>
			  <router-link class="mui-tab-item" to="/search">
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


</style>
