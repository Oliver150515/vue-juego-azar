<template>
  <h2>{{ customTitle }}:</h2>
  <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>
  <div>
    <button @click="increase">+1</button>
    <button @click="decrese">-1</button>
  </div>
</template>

<script>
export default {
  //PROPIEDADES DE ENTRADA
  // props: ["title", "start"], FORMA COMUN DE HACER LAS PROPIEDADES
  props: {
    title: String,
    start: {
      type: Number,
      default: 0,
      // required: true,
      validator(value) {
        return value >= 0 ? true : false;
      },
    },
  },
  data() {
    return {
      counter: this.start,
    };
  },
  methods: {
    // AQUI SE GUARDAN TODAS LAS FUNCIONES QUE SE UTILIZAN
    getSquareValue() {
      return this.counter * this.counter;
    },
    increase() {
      this.counter++;
    },
    decrese() {
      this.counter--;
    },
  },
  computed: {
    // LAS PROPIEDADES COMPUTED SE GUARDAN EN EL CACHE
    squareCounter() {
      return this.counter * this.counter;
    },
    customTitle(title) {
      //OPERADOR TERNARIO
      return this.title ? this.title : "Counter";
    },
  },
};
</script>

<style>
</style>

<style>
button {
  background-color: #64bb87;
  border-radius: 5px;
  color: aliceblue;
  margin: 0 5px;
}

button:hover {
  background-color: #5aa67b;
}
</style>