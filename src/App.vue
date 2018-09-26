<template>
  <v-app id="inspire">
    <VAsider></VAsider>
    <VHeader></VHeader>
    <v-content class="bg-image">
      <transition :name="transitionName">
        <keep-alive>
          <router-view class="child-view"></router-view>
        </keep-alive>
      </transition>
    </v-content>
    <v-footer color="teal accent-4" app>
      <v-spacer></v-spacer>
      <span class="white--text">&copy; 2018 &nbsp;</span>
    </v-footer>
  </v-app>
</template>

<script>
import VHeader from '@/components/VHeader'
import VAsider from '@/components/VAsider'

export default {
  data: () => ({
    drawer: null,
    transitionName: 'slide-left'
  }),
  watch: {
    '$route' (to, from) {
      if (to.path === '/') {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
    }
  },
  beforeMount(){
    console.log(d3)
    this.$store.dispatch('user/checkLogin').then(r => {
      this.$store.dispatch('creator/getGroup')
    })
  },
  components: {
    VAsider,
    VHeader
  }
}
</script>

<style>
  .min-width-60{
    min-width: 60px;
  }

  .min-height-200{
    min-height: 200px;
  }

  .min-width-300 {
    min-width: 300px;
  }
  .max-width-80 {
    max-width: 80px;
  }
  .fade-enter-active .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter .fade-leave-to {
    opacity: 0;
  }

.child-view {
  position: absolute;
  left: 0;
  right:0;
  bottom: 0;
  top: 40px;
  width: 100%;
  height: 100%;
  transition: all .5s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 15px) scale(1.2);
  transform: translate(30px, 15px) scale(1.2);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 15px) scale(1.2);
  transform: translate(-30px, 15px) scale(1.2);
}
 ::-webkit-scrollbar {
   width: 4px;
 }

 ::-webkit-scrollbar-thumb {
   background: #00BFA5;
   /* border-radius: 2px; */
 }
 button {
   -webkit-app-region: no-drag;
 }
 .dragger {
   -webkit-app-region: drag;
 }
 .no-selected {
   user-select: none;
 }
</style>
