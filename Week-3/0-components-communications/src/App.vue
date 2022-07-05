<template>
  <div class="container">
    <UserSection />
  </div>
</template>

<script>
import UserSection from "@/components/UserSection.vue";

export default {
    data() {
        return {
          provideData: {
            userList: ["Emre", "Tayfun", "Gökhan", "Elif", "Aslı"]
          }
        };
    },
    components: { 
      UserSection
    },
    methods: {
      newItem(item) {
        this.provideData.userList.push(item);
      }
    },
    provide() {
      return {
        userList: this.provideData.userList,
        newItem: this.newItem
      }
    },
}
</script>