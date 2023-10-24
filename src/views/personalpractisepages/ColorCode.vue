<template>
  <div class="body" :style="{ background: colorCode }">
    <section class="container">
      <div class="RGB-box">
        <div class="red-box flexbox">
          <p class="red-background text-R-G-B">R</p>
          <input type="range" min="0" max="255" value="0" class="slider" id="red-slider" v-model="rgbCode.red">
          <p class="red-background slider-value-p" id="redCode">{{ rgbCode.red }}</p>
        </div>

        <div class="green-box flexbox">
          <p class="green-background text-R-G-B">G</p>
          <input type="range" min="0" max="255" value="0" class="slider" id="green-slider" v-model="rgbCode.green">
          <p class="green-background slider-value-p" id="greenCode">{{ rgbCode.green }}</p>
        </div>

        <div class="blue-box flexbox">
          <p class="blue-background text-R-G-B">B</p>
          <input type="range" min="0" max="255" value="0" class="slider" id="blue-slider" v-model="rgbCode.blue">
          <p class="blue-background slider-value-p" id="blueCode">{{ rgbCode.blue }}</p>
        </div>
      </div>

      <h1>{{ colorCode }}</h1>

    </section>
  </div>
</template>

<script>
/*eslint-disable*/
export default {
  data() {
    return {
      colorCode: '#000000',
      rgbCode: {
        red: 0,
        green: 0,
        blue: 0,
      }
    }
  },
  methods: {
    decimalToHexadecimal(newValue) {
      let newColorCode = '#'
      for (let property in newValue) {
        if (Number(newValue[property]) < 16) {
          newColorCode += `0${Number(newValue[property]).toString(16)}`
        } else {
          newColorCode += `${Number(newValue[property]).toString(16)}`
        }
      }
      this.colorCode = newColorCode
    }
  },
  watch: {
    rgbCode: {
      handler: function (newValue) {
        this.decimalToHexadecimal(newValue)
      },
      deep: true
    }
  },
}
</script>

<style scoped>
.body {
  position: absolute;
  width: 100%;
  height: 92%;
}

.container,
.flexbox {
  /*使用flexbox排版*/
  display: flex;
}

.container {
  /*設定容去大小、並將items水平置中*/
  width: 200px;
  flex-flow: column;
  align-items: center;
  margin: auto;
}

.flexbox {
  /*將items水平分散對齊*/
  justify-content: space-between;
}

.RGB-box {
  min-width: 200px;
}

p,
h1 {
  margin: 5px 0px;
  font-weight: bolder;
  text-align: center;
}

h1 {
  font-size: 40px;
  padding: 0 30px;
  background: rgba(255, 255, 255, 0.28);
}

.red-background,
.green-background,
.blue-background {
  padding: 0 5px;
  border-radius: 3px;
}

.red-background {
  background: red;
}

.green-background {
  background: lime;
}

.blue-background {
  background: blue;
}

.text-R-G-B {
  width: 20px;
}

.slider-value-p {
  min-width: 24px;
}

.slider {
  -webkit-appearance: none;
  appearance: none;
  height: 3px;
  margin: auto 0px;

  background: #d3d3d3;
}
</style>