<template>
    <v-container fluid fill-height>
        <v-layout justify-center >
            <v-flex xs12 md10 lg9>
                <v-card >
                    <v-img
                    @dblclick="changeImage"
                    :src="imagePath"
                    height="350px"
                    >
                    </v-img>
                    <v-text-field box label="Image's URL" v-model="imagePathBuffer" v-show="isShownPath"></v-text-field>
                    <v-card-title>
                    <div>
                        <span class="headline font-weight-bold">
                            你好 {{$store.state.user.name}}
                        </span>
                        <div class="headline">
                            Device: {{$store.getters['user/userAgent']}}
                        </div>
                        <div>
                          <v-select
                            :items="$store.state.faker.localeType"
                            label="Language"
                            :value="$store.state.faker.langType"
                            @change="switchLocale"
                          ></v-select>
                        </div>
                        <div>
                          {{target}}
                        </div>
                    </div>
                    </v-card-title>
                    <v-card-actions>
                    <v-btn flat icon color="teal accent-4" @click="seeRaw">
                        <v-icon>visibility</v-icon>
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn flat icon color="teal accent-4" @click="upLoad">
                        <v-icon>cloud_upload</v-icon>
                    </v-btn>
                    </v-card-actions>
                    <v-snackbar
                          v-model="snackbar"
                          :bottom="y === 'bottom'"
                          :left="x === 'left'"
                          :multi-line="mode === 'multi-line'"
                          :right="x === 'right'"
                          :timeout="timeout"
                          :top="y === 'top'"
                          :vertical="mode === 'vertical'"
                          :color="'teal accent-3'"
                        >
                          {{ text }}
                          <v-btn
                            color="white"
                            flat
                            @click="snackbar = false"
                          >
                            Close
                      </v-btn>
                    </v-snackbar>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
  data () {
    return {
      isShownPath: false,
      imagePath: `https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1535489298937&di=42889babe658b1c1f5bf1ee9a51f69ab&imgtype=0&src=http%3A%2F%2Fhiphotos.baidu.com%2F%25CE%25D2%25D4%25D9%25D2%25B2%25B2%25BB%25CB%25AE%25CC%25FB%25C1%25CB%2Fpic%2Fitem%2F1f26530aca9e1c8a63d98641.jpg`,
      imagePathBuffer: '',
      target: '',
      snackbar: false,
      y: 'top',
      x: null,
      mode: '',
      timeout: 1200,
      text: '您还未登陆'
    }
  },
  watch: {
    isShownPath (newVal) {
      if (newVal === false && this.imagePathBuffer !== '') {
        this.imagePath = this.imagePathBuffer
      }
    }
  },
  methods: {
    seeRaw () {
      this.$store.dispatch('creator/preBuild').then( r => {
        console.log(r)
        return r
      }).then( r => {
        this.$store.dispatch('creator/buildAll', r).then( o => {
          this.target = o
        })
      })
    },
    upLoad () {
      if(this.$store.state.user.isLogin){
        //施工中 先别上传
        //this.$store.dispatch('creator/uploadData', this.$store.state.user.name).then(r => console.log(r))
        alert("上传功能正在施工中")
      } else {
        //未登录
        this.snackbar = true
      }
      
    },
    getData () {
      this.$store.dispatch('creator/getData').then(r => {
        console.log(r)
      })
    },
    switchLocale (val) {
      this.$store.dispatch('faker/switchLocale', val).then(()=> {
        this.$faker.locale = val
      })
    },
    changeImage () {
      this.isShownPath = !this.isShownPath
    },
  }
}
</script>

<style>

</style>
