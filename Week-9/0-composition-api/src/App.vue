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
import { ref, computed, watch, watchEffect } from "vue"; // ref: reactive effect

export default {
  // data() {
  //   return {
  //     title: "Test"
  //   }
  // },
  setup() {
    const title = ref("This is test title");
    // const titleLengthMessage = computed(() => {
    //   return title.value.length + " adet karakter yazdınız.";
    // })
    const titleLengthMessage = computed(() => title.value.length + " adet karakter yazdınız.");
    // console.log("titleLengthMessage => ", titleLengthMessage.value);

    // !********************************************************************************************************! //
    const show = ref(false);
    console.log("show => ", show.value);
    // const toggleIt = () => {}
    function toggleIt() {
      show.value = !show.value;
    }

    // !********************************************************************************************************! //
    const counter = ref(0);
    const oddOrEven = computed(() => counter.value % 2 == 0 ? '(Çift sayı)' : '(Tek sayı)');
    // watch(counter, () => {}, { deep: true })
    // watch([counter, oddOrEven], (newValue, oldValue) => {
    watch([counter, oddOrEven], ([newC, newO], [oldC, oldO]) => {
      console.log(oldO, " -> ", newO)
    })

    // !********************************************************************************************************! //
    const searchText = ref("");
    const isTyping = ref(false);

    // watch(searchText, () => {
    //   if(searchText.value.length > 0) {
    //     isTyping.value = true;
    //   }

    //   setTimeout(() => {
    //     isTyping.value = false;
    //   }, 1500);
    // })

    const stop = watchEffect((onInvalidate) => {
      if(searchText.value.length > 0) {
        isTyping.value = true;
      }

      const typing = setTimeout(() => {
        isTyping.value = false;
        stop();
      }, 1500);

      onInvalidate(() => clearTimeout(typing));
    })

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