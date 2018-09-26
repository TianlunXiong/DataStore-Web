<template>
    <v-container text-xs-center fluid>
        <v-layout justify-center>
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

</style>
