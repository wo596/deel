<template>
  <div id="app">
    <v-header></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">Go to Foo</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">Go to Foo</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">Go to Foo</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import VHeader from './components/header/vheader'

export default {
  components: {
    VHeader
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    .tab
      display: flex
      width: 100%
      height: 40px
      line-height: 40px
      .tab-item
          flex: 1
          text-align: center
</style>
