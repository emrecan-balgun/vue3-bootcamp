<template>
  <div class="w-screen h-screen bg-gray-400 pt-10">
    <div class="bg-gray-700 rounded-md shadow-md text-white w-1/3 mx-auto p-3">
      <h3 class="text-center text-2xl">Todo List</h3>

      <section class="mt-4">
        <input type="text" placeholder="Ne eklemek istiyorsunuz?" class="w-full p-2 bg-gray-700 border-[1px] border-gray-400 rounded-md outline-none">
      </section>

        <section class="mt-4">
          <div class="flex justify-between items-center even:bg-gray-600 px-2 p-1">
            <label for="completed">
              <input type="checkbox" id="completed" class="mr-2" />
              <span class="text-lg">Todo 1</span>
            </label>
            <button class="bg-indigo-500 px-2 py-1 rounded-md active:bg-indigo-800">Sil</button>
          </div>
          <div class="text-green-400">
            Tamamlanmış:
          </div>
          <div class="text-red-400">
            Tamamlanmamış:
          </div>
        </section>
    </div>
  </div>
</template>