<template>
    <v-container text-xs-center fluid fill-height>
        <v-layout justify-center  >
            <v-flex>
                <v-layout column>
                    <v-flex>
                        <transition name="slide-left">
                            <keep-alive>
                                <router-view class="child-view"></router-view>
                            </keep-alive>
                        </transition>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
}
</script>

<style>
.slim-padding{
    padding: 5px 0px;
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
</style>
