<template>
  <div id="app">
    <div class="header">
      <div>
        <a @click="toggleNavbar" :class="{ 'is-active': $store.state.isNavbarActive }"
          role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="siteTitle is-size-5">プログラミング入門その前に</div>
      <div></div>
    </div>
    <div class="main-container">
      <div class="sidebar" :class="{ 'is-active': $store.state.isNavbarActive}">
        <div class="menu is-size-6">
          <ul class="menu-list">
            <li><nuxt-link to="/">はじめに</nuxt-link></li>
          </ul>
          <p class="menu-label">プログラミングの始め方</p>
          <ul class="menu-list">
            <li><nuxt-link to="/how_to_programming">プログラミング学習サイト</nuxt-link></li>
          </ul>
          <p class="menu-label">プログラミング入門以前</p>
          <ul class="menu-list">
            <li><nuxt-link to="/need_to_do_programming">プログラミングに必要なもの</nuxt-link></li>
          </ul>
          <p class="menu-label">プログラミングにつまずいたら</p>
          <ul class="menu-list">
            <li><nuxt-link to="/">ああああああああ</nuxt-link></li>
          </ul>
          <p class="menu-label">学習サイトのあと</p>
          <ul class="menu-list">
            <li><nuxt-link to="/">ああああああああ</nuxt-link></li>
          </ul>
        </div>
      </div>
      <div class="main-content" :class="{ 'is-active': $store.state.isNavbarActive}">
        <nuxt/>
      </div>
      <div class="ad-container"></div>
    </div>

    <footer class="footer">
      <div class="content has-text-centered">footer</div>
    </footer>
  </div>
</template>

<script>
export default {
  data() { return {} },
  methods: {
    toggleNavbar() {
      this.$store.commit('toggleNavbar');
    }
  }
}
</script>

<style>
#app {
  height: 100vh;
  letter-spacing: 0.1rem;
}

.main-container {
  position: relative;
  min-height: 60vh;
}

/* .main-container.is-active:before { */
  /* content: ''; */
  /* display: block; */
  /* padding-top: 100%; */
/* } */

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.siteTitle {
  text-align: center;
}

.columns {
  margin-right: 0;
}

.sidebar {
  position: absolute;
  top: 10px;
  left: 0;
  width: 0;
  height: 0;
  opacity: 0;
  visibility: hidden;
  overflow: hidden;
  transition: width 0.3s ease-out, visibility 0.2s ease-out, opacity 0.1s ease-in;
}

.sidebar.is-active {
  position: absolute;
  top: 10px;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 90vh;
  opacity: 1;
  visibility: visible;
  overflow: visible;
  background-color: floralwhite;  
  transition: width 0.2s ease-out, visibility 0.2s ease-out, overflow 0.2s ease-out;
}

.main-content {
  position: relative;
  top: 10px;
  left: 0;
  height: 100%;
  opacity: 1;
  overflow: visible;
  transition: opacity 0.1s, left 0.5s;
}

.main-content.is-active {
  position: absolute;
  top: 10px;
  left: 100%;
  height: 0;
  opacity: 0;
  overflow: hidden;
  /* transition: all 0.5s; */
}

.content {
  padding: 10px;
}

.menu-list li a.active {
  color: #fff;
  background-color: #41b883;
}

@media screen and (min-width: 1088px) {
  .header {
    height: 50px;
    margin-bottom: 20px;
    box-shadow: 0 0 1px rgba(0,0,0,0.25);
  }

  .main-container {
    display: flex;
  }

  .sidebar {
    position: static;
    opacity: 1;
    width: auto;
    height: auto;
    margin-left: 50px;
    margin-right: 50px;
    visibility: visible;
  }

  .main-content {
    position: static;
    max-width:  720px;
    margin: 0 10px;
  }

  .main-container:before {
    content: '';
    display: block;
    padding-top: 0;
  }

}
</style>

