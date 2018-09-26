<template>
    <v-toolbar color="teal accent-4" dark fixed app>
      <v-toolbar-side-icon @click.stop="$store.dispatch('interface/toggleDrawer')"></v-toolbar-side-icon>
      <v-toolbar-title class="headline font-weight-bold no-selected">
        DataStore{{$store.state.creator.operation === 'local'? ' Local/Group/'+$store.state.creator.groupName : ' Cloud/Group/'+$store.state.creator.netBuffer.select}}
      </v-toolbar-title>
      <v-spacer ></v-spacer>
      <v-btn flat icon @click="toggleOperation">
        <v-icon>
          {{$store.state.creator.operation === 'local'? 'people' : 'cloud' }}
        </v-icon>
      </v-btn>
      <v-btn flat icon @click="checkLogin">
        <v-icon>{{$store.state.user.isLogin? 'lens' : 'panorama_fish_eye'}}</v-icon>
      </v-btn>
    </v-toolbar>
</template>

<script>
export default {
  methods: {
    checkLogin () {
      if(!this.$store.state.user.isLogin){
        this.$store.dispatch('user/checkLogin').then(() => {
          console.log("HIHI")
          this.$store.dispatch('creator/getGroup')
        })
      }
    },
    toggleOperation () {
      this.$store.dispatch('creator/toggleOperation')
    }
  }
}
</script>

<style>

</style>
