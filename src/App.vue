<template>
  <div>
    <div class="container">
      <TheHeader/>
      <div class="main">
        <TheMenu/>
        <TheContent/>
      </div>
    </div>
  </div>
</template>

<script>
// 1. import
import TheMenu from './components/layout/TheMenu.vue'
import TheHeader from './components/layout/TheHeader.vue'
import TheContent from './components/layout/TheContent.vue'


export default {
  name: 'App',
  components: {
    // 2. register
    TheMenu,TheHeader,TheContent
  }
}
</script>

<style>
  @import url(./styles/main.css);
  @import url(./assets/fonts/fontawesome-free-6.1.1-web/css/all.min.css);
  @import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css);
  @import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css);
  
.container {
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
}

.main {
  width: 100%;
  height: calc(100vh - 56px);
  display: flex;
  background-color: #e9ebee84;
  box-shadow: inset 0 1.5px 2px 0 rgb(0 0 0 / 10%);
}

</style>
