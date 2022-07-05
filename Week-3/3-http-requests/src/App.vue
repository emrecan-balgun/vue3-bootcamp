<template>
  <div class="container">
    <h3 class="mb-1">Alışveriş Listesi</h3>
    <hr />
    <div class="my-2">
      <input type="text" placeholder="Ne alacaksın?" @keydown.enter="onSave" />
    </div>
    <ul v-if="itemsList.length > 0">
      <li v-for="item in itemsList" :key="item.id" class="d-flex justify-content-between align-items-center">
        <span>{{ item.title }}</span>
        <button @click="onDelete(item)" class="sm red">Sil</button>
      </li>
    </ul>
    <div v-else class="bg-blue text-white">
      Herhangi bir ürün yok.
    </div>
    <small class="text-red d-flex justify-content-end align-items-center mt-2">Alınacak {{ itemCount }} adet ürün vardır..</small>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      itemsList: []
    }
  },
  provide() {
    return {
      itemsList: this.itemsList,
      onSave: this.onSave,
      onDelete: this.onDelete
    }
  },
  mounted() {
    axios.get("http://localhost:3000/items").then(items_response => {
      console.log('items_response', items_response);
      this.itemsList = items_response.data || [];
    })
  },
  methods: {
    onSave(event) {
      const saveObject = {
        title: event.target.value,
        created_at: new Date(),
        completed: false
      };

      axios.post("http://localhost:3000/items", saveObject).then(save_response => {
        console.log(save_response);
        this.itemsList.push(save_response.data);
        event.target.value = "",
        event.target.focus();
      })
    },
    onDelete(item) {
      axios.delete(`http://localhost:3000/items/${item.id}`).then(delete_response => {
        console.log('delete_response', delete_response)
        this.itemsList = this.itemsList.filter(i => i.id !== item.id)
      })
    }
  },
  computed: {
    itemCount() {
      return this.itemsList.length || 0;
    }
  }
}
</script>