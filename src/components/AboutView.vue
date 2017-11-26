<template>
	<v-container>	
		<div >
			<h2>{{ msg }}</h2>
		</div>
	</v-container>
</template>

<script>
export default {
  name: 'AboutView',
  data () {
    return {
      msg: 'Um PWA com Vue.js e Firebase para mostrar o preço atual do bitcoin e notificar o usuário em caso de mudanças bruscas.'
    }
  }
}
</script>

<style state>
	h2{
		text-decoration: justify;
	}

</style>