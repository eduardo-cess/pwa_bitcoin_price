<template>
  <div class="text-xs-center">
    <h1>Mercado Bitcoin</h1><br>
    <h2>Último Valor:</h2>
    <h2>R${{ results.last }}</h2><br>
    <h2>Maior Valor de Hoje:</h2>
    <h2>R${{ results.high }}</h2><br>
    <h2>Menor Valor de Hoje:</h2>
    <h2>R${{ results.low }}</h2>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HomeView',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App testw',
      results: []
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