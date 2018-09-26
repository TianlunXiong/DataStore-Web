<template>
  <v-container fluid>
    <v-layout>
      <v-flex>
        <v-card dark color="teal accent-4">
          <v-card color="yellow lighten-5" class="table">
          </v-card>
          <v-card-text>
              <v-layout row>
                <v-flex>
                  <v-select
                    dense
                    color="white"
                    :items="Object.keys($store.getters['creator/workSpace'])"
                    v-model="firstSelection"
                    label="First"
                  ></v-select>
                </v-flex>
                <v-flex>
                  <v-select
                    dense
                    color="white"
                    :items="secondType"
                    v-model="secondSelection"
                    label="Second"
                  ></v-select>
                </v-flex>

              </v-layout>
              <v-layout>
                <v-select
                  dense
                  color="white"
                  v-show="showItemSelection"
                  :items="itemKeys"
                  v-model="keySelection"
                  @change="handleKeySelection"
                  label="key"
                ></v-select>
              </v-layout>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat @click="handleView">
              <v-icon>
                bubble_chart
              </v-icon>
            </v-btn>
            <v-btn flat @click="updateSize">
              <v-icon>
                cached
              </v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data(){
    return {
      firstSelection: '',
      secondSelection: '',
      showItemSelection: false,
      keySelection: '',
      itemKeys: [],
      dataset: [],
      padding: {
        left: 30,
        right: 30,
        top: 20,
        bottom: 20
      }
    }
  },
  methods: {
    handleView () {
      this.$store.dispatch('creator/buildOne', this.firstSelection).then(r => {
        const target = r[this.firstSelection][this.secondSelection]
        if( target instanceof Array) {
          this.showItemSelection = true
          this.itemKeys = Object.keys(target[0])
          this.dataset = target
        }
      })
    },
    handleKeySelection (val) {
      console.log(val)
      if (typeof this.dataset[0][val] === 'number') {
        this.clearDraw()
        this.draw()
      }
    },
    updateSize () {
      if (typeof this.dataset[0][this.keySelection] === 'number') {
        this.clearDraw()
        this.draw()
      }
    },
    clearDraw () {
      d3.select('.table svg').remove()
    },
    draw () {
      const table = document.getElementsByClassName('table')[0]

      const width = table.clientWidth  //画布的宽度
      const height = table.clientHeight   //画布的高度
      const svg = d3.select(".table")     //选择文档中的body元素
          .append("svg")          //添加一个svg元素
          .attr("width", width)       //设定宽度
          .attr("height", height)    //设定高度
      const dataset =  this.transformedDateSet
      const padding = this.padding

      const xScale = d3.scale.ordinal()
          .domain(d3.range(dataset.length))
          .rangeRoundBands([0, width - padding.left - padding.right]);
          
      const yScale = d3.scale.linear()
          .domain([0,d3.max(dataset)])
          .range([height - padding.top - padding.bottom, 0]);

      //定义x轴
      const xAxis = d3.svg.axis().scale(xScale).orient("bottom");
              
      //定义y轴
      const yAxis = d3.svg.axis().scale(yScale).orient("left");

      //矩形之间的空白
      const rectPadding = 4;

      //添加矩形元素
      const rects = svg.selectAll(".table-rect")
              .data(dataset)
              .enter()
              .append("rect")
              .attr("class","table-rect")
              .attr("transform","translate(" + padding.left + "," + padding.top + ")")
              .attr("x", function(d,i){
                  return xScale(i) + rectPadding/2;
              } )
              .attr("y",function(d){
                  return yScale(d);
              })
              .attr("width", xScale.rangeBand() - rectPadding )
              .attr("height", function(d){
                  return height - padding.top - padding.bottom - yScale(d);
              })
              .attr("fill", "#FB8C00")

      //添加文字元素
      const texts = svg.selectAll(".detail")
              .data(dataset)
              .enter()
              .append("text")
              .attr("class","detail")
              .attr("transform","translate(" + padding.left + "," + padding.top + ")")
              .attr("x", function(d,i){
                  return xScale(i) + rectPadding/2;
              } )
              .attr("y",function(d){
                  return yScale(d);
              })
              .attr("dx",function(){
                  return (xScale.rangeBand() - rectPadding)/2 - 5;
              })
              .attr("dy",function(d){
                  return 20;
              })
              .text(function(d){
                  return d;
              })
              .attr('fill', 'white')
      
      //添加x轴
      svg.append("g")
        .attr("class","axis")
        .attr("transform","translate(" + padding.left + "," + (height - padding.bottom) + ")")
        .call(xAxis); 
              
      //添加y轴
      svg.append("g")
        .attr("class","axis")
        .attr("transform","translate(" + padding.left + "," + padding.top + ")")
        .call(yAxis);
    }
  },
  computed: {
    secondType () {
      if(this.firstSelection){
        if(this.$store.getters['creator/workSpace'][this.firstSelection]){
          return Object.keys(this.$store.getters['creator/workSpace'][this.firstSelection])
        } else {
          return []
        }
      } else {
        return []
      }
    },
    transformedDateSet () {
      return this.dataset.map(item => item[this.keySelection])
    }
  }
}
</script>

<style>
.table {
  height: 40vh;
  border: 1px solid #000;
}
.axis path,
.axis line{
    fill: none;
    stroke: black;
    shape-rendering: crispEdges;
}

.axis text {
    font-family: sans-serif;
}
</style>
