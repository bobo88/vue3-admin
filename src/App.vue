<template>
  <router-view v-slot="{ Component }">
    <keep-alive :max="5">
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>

<style lang="scss" type="text/css" src="@/assets/styles/index.scss"></style>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    display: inline-block;
    padding: 0 10px;
    font-size: 18px;
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
