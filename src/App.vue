<template>
  <div id="app">
    <div class="total_layout">
      <div class="upper_menu_bar">
        <div v-if="isToggleMenu" class="menu_bar">
          <div class="menu_bar_individual">
            <h1>KIWON KIM</h1>
          </div>
          <div class="menu_bar_individual">
            <router-link class="nav_link" to="/">Dashboard</router-link>
          </div>
          <div class="menu_bar_individual">
            <router-link class="nav_link" to="/schedules">Schedules</router-link>
          </div>
          <div class="menu_bar_individual">
            <router-link class="nav_link" to="/settings">Settings</router-link>
          </div>
        </div>
        <div v-if="isToggleMenu" @click="toggleMenu" class="menu_bar_background"></div>
      </div>
      <p class="menu_toggle" @click="toggleMenu">MENU</p>
      <!-- <img @click="toggleMenu" class="menu" :src="Menu" /> -->
      <div class="nav">
        <div>
          <router-link class="nav_link" to="/">Dashboard</router-link>
        </div>
        <div>
          <router-link class="nav_link" to="/schedules">Schedules</router-link>
        </div>
        <div>
          <router-link class="nav_link" to="/settings">Settings</router-link>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        Menu: require('./menu.svg'),
        isToggleMenu: false
      }
    },
    methods: {
      toggleMenu() {
        this.isToggleMenu = !this.isToggleMenu
      }
    }
  }

</script>

<style>
  body {
    margin: 0;
  }

  h1 {
    color: white;
  }

  #app {
    width: 100vw;
    height: 115vh;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-image: url('https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=881&q=80');
    background-repeat: no-repeat;
    background-size: cover;
    /* padding: 20px 0; */
  }

  .menu_toggle {
    color: white;
    display: none;
  }

  .nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: rgba(82, 82, 82, 0.72);
    min-height: 50px;
    align-items: center;
    border-radius: 8px;
    max-width: 600px;
    margin: 0 auto 30px auto;
  }

  .nav_link {
    color: white;
    margin: 40px;
    text-decoration: none;
    font-size: 20px;
  }

  .menu {
    width: 20px;
    filter: brightness(0) invert(1);
    cursor: pointer;
    display: none;
  }

  .menu_bar {
    position: absolute;
    z-index: 999;
    background: rgba(53, 59, 72, 0.9);
    width: 250px;
    height: 123vh;
    transition: 1s;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .upper_menu_bar {
    display: none;
  }

  .menu_bar_individual {
    margin: 40px 0;
  }

  @media (max-width: 620px) {
    #app {
      height: 123vh;
    }

    .menu_toggle {
      display: inline-block;
    }

    .nav {
      display: none;
      flex-direction: column;
      padding: 10px;
    }

    .upper_menu_bar {
      display: block;
    }

    .menu_bar_background {
      position: absolute;
      z-index: 998;
      background-color: rgba(47, 54, 64,0.5);
      height: 100vh;
      width: 100vw;
    }
  }

</style>
