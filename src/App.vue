<template>
  <div id="app">
    <mt-header fixed title="vue2.0商城"></mt-header>
    <router-view/>
    <footer>
      <nav class="mui-bar mui-bar-tab">
			  <a class="mui-tab-item mui-active" href="#index">
			  	<span class="mui-icon mui-icon-home"></span>
			  	<span class="mui-tab-label">首页</span>
			  </a>
			  <a class="mui-tab-item" href="#search">
			  	<span class="mui-icon mui-icon-email"><span class="mui-badge">9</span></span>
			  	<span class="mui-tab-label">消息</span>
			  </a>
			  <a class="mui-tab-item" href="#tabbar-with-contact">
			  	<span class="mui-icon mui-icon-contact"></span>
			  	<span class="mui-tab-label">通讯录</span>
			  </a>
			  <a class="mui-tab-item" href="#tabbar-with-map">
			  	<span class="mui-icon mui-icon-gear"></span>
			  	<span class="mui-tab-label">设置</span>
			  </a>
		  </nav>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
