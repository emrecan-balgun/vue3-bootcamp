<template>
  <!-- <Modal :onSave="onSave" :title="'Modal Title'" :content="content" /> -->
  <Modal>
    <template #title>
      <h1>Slot ile gelen title</h1>
    </template>

    <template v-slot:content>
      <p class="text-green">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque aliquam nulla sit est exercitationem doloribus. Sint autem consequatur eos inventore!
      </p>
    </template>

    <!-- <template #content>
      <p class="text-green">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque aliquam nulla sit est exercitationem doloribus. Sint autem consequatur eos inventore!
      </p>
    </template> -->

    <template #default>
      Bu default olarak gösterilecek
    </template>
  </Modal>
</template>

<script>
import Modal from '@/components/Modal';

export default {
  components: {
    Modal
  },
  data() {
    return {
      content: `<h3 class="text-red">Title</h3>`
    }
  },
  methods: {
    onSave() {
      alert("Saved!");
    }
  }
}
</script>