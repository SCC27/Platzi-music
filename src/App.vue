<template lang="pug">
  #app
    pm-Header

    section.section 
      nav.nav.has-shadow
        .container
          input.imput.is-large(type="text", 
          placeholder="Buscar canciones", 
          v-model="searchQuery")
          a.button.is-info.is-large(@click="search") Buscar
          a.button.is-danger.is-large &times;

      .container
        p
          small {{ searchMessage}}


      .container.resuls
        .columns
          .column(v-for="t in tracks")
           | {{ t.name }} - {{ t.artists [0].name}}

 
    pm-Footer
  </template>

<script>
import trackService from './services/track' 
import PmFooter from './components/layout/Footer.vue'
import PmHeader from './components/layout/Header.vue'

export default {
  name: 'app',

components:{ PmFooter, PmHeader },

  data () {
    return {
      searchQuery: '',
      tracks:[]

      
      }
    },

  computed:{
    searchMessage(){
      return `Encontrados: ${this.tracks.length}`
    }
  },

  methods:{
      
    search(){
      if(!this.searchQuery) {return}

      trackService.search(this.searchQuery)
        .then(res=>{
          this.tracks= res.tracks.items
        })
    }
  }
  }

</script>

<style lang="scss">
  @import './scss/main.scss';

  .resuls{
    margin-top: 50px
  }
</style>
