<template>
  <h3>{{ title }}</h3>
  <input type="text" v-model="title" />
  {{ titleLengthMessage }}
  <button @click="toggleIt">Toggle</button>
  <p v-if="show">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis porro quisquam commodi consequuntur corrupti fugit beatae consectetur consequatur, laborum aliquam.</p>
</template>

<script>
import { ref, computed } from "vue"; // ref: reactive effect

export default {
  // data() {
  //   return {
  //     title: "Test"
  //   }
  // },
  setup() {
    const title = ref("This is test title");
    const show = ref(false);
    console.log("show => ", show.value);

    // const toggleIt = () => {}
    function toggleIt() {
      show.value = !show.value;
    }

    // const titleLengthMessage = computed(() => {
    //   return title.value.length + " adet karakter yazdınız.";
    // })
    const titleLengthMessage = computed(() => title.value.length + " adet karakter yazdınız.");

    // console.log("titleLengthMessage => ", titleLengthMessage.value);

    return {
      title,
      show,
      toggleIt,
      titleLengthMessage
    }
  }
}
</script>