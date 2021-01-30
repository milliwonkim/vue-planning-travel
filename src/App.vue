<template>
  <div id="app">
    <div>
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

<style>
  body {
    margin: 0;
  }

  #app {
    height: 110vh;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-image: url('https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=881&q=80');
    background-repeat: no-repeat;
    background-size: cover;
    padding: 20px;
  }

  @media (max-width: 620px) {
    #app {
      height: 123vh;
    }
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

  @media (max-width: 620px) {
    .nav {
      flex-direction: column;
      padding: 10px;
    }
  }

  .nav_link {
    color: white;
    margin: 40px;
    text-decoration: none;
    font-size: 20px;
  }

</style>
