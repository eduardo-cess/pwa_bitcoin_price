<template>
  <v-tabs fixed centered>
    <v-tabs-bar class="green" dark>
      <v-tabs-slider class="yellow"></v-tabs-slider>
      <v-tabs-item v-for="i in tabs" :key="i" :href="'#tab-' + i">
        {{ i }}
      </v-tabs-item>
    </v-tabs-bar>
    <v-tabs-items>
      <v-tabs-content v-for='i in tabs' :key="i" :id="'tab-' + i">
        <v-card flat>
          <div v-if='i=="Mercado Bitcoin"' class="text-xs-center">
            <h2 class="title">Último Valor:</h2>
            <h2 class="value">R${{ results.last }}</h2><br>
            <h2 class="title">Preço de Compra:</h2>
            <h2 class="value">R${{ results.buy }}</h2><br>
            <h2 class="title">Preço de Venda:</h2>
            <h2 class="value">R${{ results.sell }}</h2><br>
            <h2 class="title">Maior Valor de Hoje:</h2>
            <h2 class="value">R${{ results.high }}</h2><br>
            <h2 class="title">Menor Valor de Hoje:</h2>
            <h2 class="value">R${{ results.low }}</h2>
          </div>
          <div v-else>
            <h1>Ainda não tem nada por hora...</h1>
          </div>
        </v-card>
      </v-tabs-content>
    </v-tabs-items>
  </v-tabs>



<!--     <v-card color="white" class="white--text">
        <div class="text-xs-center">
          <h1>Mercado Bitcoin</h1><br>
          <h2>Último Valor:</h2>
          <h2>R${{ results.last }}</h2><br>
          <h2>Maior Valor de Hoje:</h2>
          <h2>R${{ results.high }}</h2><br>
          <h2>Menor Valor de Hoje:</h2>
          <h2>R${{ results.low }}</h2>
        </div>
    </v-card> -->
  
</template>

<script>
import axios from 'axios'
export default {
  name: 'HomeView',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App testw',
      results: [],
      tabs: ['Mercado Bitcoin', 'Foxbit']
      // interval: null
    }
  },
  mounted () {
    axios.get('https://www.mercadobitcoin.net/api/BTC/ticker/')
      .then(response => {
        this.results = response.data.ticker
        console.log(this.results)
      })
  }
}
</script>

<style state>
  .title{
    color: #2c3e50;
    font-weight: bold;
  }

  .value{
    color: #198729;
  }

</style>