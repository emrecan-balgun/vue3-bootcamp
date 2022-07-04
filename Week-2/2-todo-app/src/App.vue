<template>
  <div class="container">
    <h3 class="text-center">ToDo App</h3>
    <hr class="my-2">
    <label for="todoText"></label>
    <input type="text" id="todoText" placeholder="Bir şeyler yazınız...">
    <ul>
      <li 
        v-for="i in 5" 
        :key="i" 
        class="d-flex justify-content-between align-items-center">
        <span>Todo Item #{{ i }}</span>
        <button class="sm red">Sil</button>
      </li>
    </ul>
    <small class="d-flex justify-content-end green mt-2">5 adet todo var.</small>
  </div>
</template>