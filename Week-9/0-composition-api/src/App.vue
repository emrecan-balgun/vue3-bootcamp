<template>
  <h3>{{ title }}</h3>
  <input type="text" v-model="title" />
  {{ titleLengthMessage }}
  <button @click="toggleIt">Toggle</button>
  <p v-if="show">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis porro quisquam commodi consequuntur corrupti fugit beatae consectetur consequatur, laborum aliquam.</p>
  <hr />
  <div>
    <h3>{{ counter }} : {{ oddOrEven }}</h3>
    <div>
        <button @click="counter++">Arttır</button>
        <button @click="counter--">Azalt</button>
        <button @click="counter = 0">Sıfırla</button>
    </div>
  </div>
  <hr />
  <input type="text" v-model="searchText">
  <p v-if="isTyping">Şu an yazıyor...</p>
</template>

<script>
import Title from './composables/Title.js';
import Toggle from './composables/Toggle.js';
import Counter from './composables/Counter.js';
import Search from './composables/Search.js';

export default {
  setup() {
    const { title, titleLengthMessage } = Title();
    const { show, toggleIt } = Toggle();
    const { counter, oddOrEven } = Counter();
    const { searchText, isTyping } = Search();
    
    return {
      title,
      show,
      toggleIt,
      titleLengthMessage,
      counter,
      oddOrEven,
      searchText,
      isTyping,
    }
  }
}
</script>