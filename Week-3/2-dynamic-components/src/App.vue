<template>
  <div class="container">
    <div class="d-flex justify-content-between align-items-center mb-2">
      <button class="red" @click="activeComponent='Red'">Red</button>
      <button class="green" @click="activeComponent='Green'">Green</button>
      <button class="blue" @click="activeComponent='Blue'">Blue</button>
    </div>

    <!-- <Red msg="Red Component" v-if="activeComponent == 'Red'" class="mb-2" />
    <Green v-if="activeComponent == 'Green'" class="mb-2" />
    <Blue v-if="activeComponent == 'Blue'" class="mb-2" /> -->

    <!-- {{ activeComponent }}
    <component :is="activeComponent" msg="Kırmızı component" /> -->

    {{ activeComponent }}
    <keep-alive>
      <component :is="activeComponent" msg="Kırmızı component">
        <h3 class="bg-green text-white">Yeşil component</h3>
        <!-- slot ilede çalışıyor -->
      </component>
    </keep-alive> 

  </div>
</template>

<script>
import Red from '@/components/Red';
import Green from '@/components/Green';
import Blue from '@/components/Blue';

export default {
  components: {
    Red, 
    Green, 
    Blue
  },
  data() {
    return {
      activeComponent: "Red",
    }
  }
}
</script>