<template>
  <div class="container">
    <UserSection :data="userList" @new-item="userList.push($event)" />
  </div>
</template>

<script>
import UserSection from "@/components/UserSection.vue";

export default {
    data() {
        return {
            userList: ["Emre", "Tayfun", "Gökhan", "Elif", "Aslı"]
        };
    },
    components: { 
      UserSection
    }
}
</script>