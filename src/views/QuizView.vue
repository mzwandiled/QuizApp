<script setup>
import q from "../data/quizes.json"
import { ref , watch} from "vue";
import Card from "@/components/Card.vue";

const quizes = ref(q)
const search = ref("");
watch(search, () => {
  // console.log(search.value)
  quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
})
</script>
<template>
  <div class="container">
    {{quizes.length}}
    <header>
      <h1>Quizes</h1>
      <input type="text" v-model.trim="search" placeholder="Search...">
    </header>
    <div class="options-container">
      <Card v-for="quiz in quizes" :key="quiz.id" :quiz="quiz"/>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto
}

header {
  margin-bottom: 10px;
  margin-top: 30px;
  display: flex;
  align-items: center;
}

header h1 {
  font-weight: bold;
  margin-right: 30px;
}

header input {
  border: none;
  background-color: rgba(128,128,128,0.1);
  padding: 10px;
  border-radius: 5px;
}

.options-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
}

/* CARD */

.card {
  width: 310px;
  overflow: hidden;
  border-radius: 2%;
  box-shadow: 1px 1px 10px rgba(0,0,0,0.1);
  margin-bottom: 35px;
  margin-right: 20px;
  cursor: pointer;
}

.card img {
  width: 100%;
  height: 190px;
  margin: 0
}

.card .card-text {
  padding: 0 5px
}

.card .card-text h2 {
  font-weight: bold;
}
</style>