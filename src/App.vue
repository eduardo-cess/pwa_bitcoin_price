<template>
  <v-app light>
    <v-toolbar dark class="green">
      <v-toolbar-side-icon class="" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>R$ Bitcoin</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down" v-for="">
        <v-btn flat>Home</v-btn>
        <v-btn flat>Sobre</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer
      temporary
      v-model="drawer"
      light
      absolute
    >
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="./assets/btc.jpg" />
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>R$ Bitcoin</v-list-tile-title>
          </v-list-tile-content>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile v-for="item in items" :key="item.title">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link :to="item.link" @click.native="drawer = !drawer">{{ item.title }}</router-link>
              <!-- {{ item.title }} -->
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-content>
        <router-view></router-view>
    </v-content>
  </v-app>
</template>
<script>
  export default {
    data () {
      return {
        drawer: null,
        items: [
          { title: 'Home', icon: 'home', link: '/' },
          { title: 'Sobre', icon: 'question_answer', link: 'sobre' }
        ]
      }
    }
  }
</script>


<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
