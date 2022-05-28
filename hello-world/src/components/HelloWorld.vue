<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <input type="text" v-model="test" /> -->
    <!-- <input type="text" :value="test" @input="event => test=event.target.value"/> -->
    <input type="text" :value="value" @input="handleInput"/>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    value:String
  },
  data() {
    return {
      test:666,
    }
  },
  methods: {
    handleInput(event){
      // console.log('handleInput')
      const value = event.target.value
      this.$emit('input',value)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
