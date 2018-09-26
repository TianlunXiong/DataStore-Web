<template>
  <v-navigation-drawer
      :value="$store.state.interface.drawer"
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
        <v-list-tile @click="$router.replace('/viewer')">
          <v-list-tile-action>
            <v-icon>visibility</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Viewer</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
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
          >
            <v-list-tile slot="activator">
              <v-list-tile-title>Group</v-list-tile-title>
            </v-list-tile>

            <v-list-tile
              v-for="(name, i) in $store.getters['creator/groupList']"
              :key="i"
              @click="switchTarget(name)"
            >
              <v-list-tile-title v-text="name"></v-list-tile-title>
            </v-list-tile>
          </v-list-group>
        </v-list-group>
        <v-list-tile @click="handleEmpty">
          <v-list-tile-action>
            <v-icon>keyboard_arrow_left</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Back</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
  methods: {
    switchTarget (name) {
      this.$store.dispatch('creator/setOperation', 'inject').then(() => {
        this.$store.dispatch('creator/setInjectGroup', name)
      })
    },
    handleEmpty () {
      this.$store.dispatch('interface/toggleDrawer')
    }
  }
}
</script>

<style>

</style>
