<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile @click="$router.replace('/')">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="$router.replace('/creator/factory')">
          <v-list-tile-action>
            <v-icon>build</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Factory</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="$router.replace('/creator/dStore')">
          <v-list-tile-action>
            <v-icon>subject</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>DStore</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
<v-list-group
        prepend-icon="account_circle"
        value="true"
      >
        <v-list-tile slot="activator">
          <v-list-tile-title>Users</v-list-tile-title>
        </v-list-tile>

        <v-list-group
          no-action
          sub-group
          value="true"
        >
          <v-list-tile slot="activator">
            <v-list-tile-title>Group</v-list-tile-title>
            <v-icon>people_outline</v-icon>
          </v-list-tile>

          <v-list-tile
            v-for="(admin, i) in admins"
            :key="i"
          >
            <v-list-tile-title v-text="admin[0]+admin[1]"></v-list-tile-title>
          </v-list-tile>
        </v-list-group>

        <v-list-group
          sub-group
          no-action
        >
          <v-list-tile slot="activator">
            <v-list-tile-title>Action</v-list-tile-title>
            <v-list-tile-action>
              <v-icon v-text="'user'"></v-icon>
            </v-list-tile-action>
          </v-list-tile>

          <v-list-tile
            v-for="(crud, i) in cruds"
            :key="i"
          >
            <v-list-tile-content>
              <v-list-tile-title v-text="crud[0]">
              </v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon v-text="crud[1]"></v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>
      </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="teal accent-4" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="headline font-weight-bold no-selected">DataStore</v-toolbar-title>
      <v-spacer ></v-spacer>
      <v-btn flat icon @click="checkLogin">
        <v-icon class="dragger no-selected">{{$store.state.user.isLogin? 'lens' : 'panorama_fish_eye'}}</v-icon>
      </v-btn>
    </v-toolbar>
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
export default {
  data: () => ({
    drawer: null,
    transitionName: 'slide-left',
    admins: [
        ['A', '正在施工中...'],
        ['B', '正在施工中...']
      ],
    cruds: [
      ['Create', 'add'],
      ['Read', 'insert_drive_file'],
      ['Update', 'update'],
      ['Delete', 'delete']
    ]
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
  methods: {
    checkLogin () {
      if(!this.$store.state.user.isLogin){
        window.alert("即将验证登陆")
        this.$store.dispatch('user/checkLogin')
      }
    }
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
  /* position: absolute;
  left: 0;
  right:0;
  bottom: 0; */
  /* top: 0; */
  /* width: 100%; */
  /* height: 100%; */
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
