<template>
 <section class="bg-gray-900 w-1/3 mx-auto mt-10 p-2 px-5 rounded-md shadow-2xl">
      <!-- Fatura Bilgileri -->
      <div>
        <heading title="Fatura Bilgileri" />
        <label for="client_name" class="flex flex-col text-gray-400 mb-2">
          <small class="mb-1">Müşteri Adı</small>
          <input autocomplete="off" id="client_name" class="input" type="text" />
        </label>
        <label for="client_email" class="flex flex-col text-gray-400 mb-2">
          <small class="mb-1">E-posta</small>
          <input autocomplete="off" id="client_email" class="input" type="email" />
        </label>

        <div class="grid grid-cols-3 gap-5">
          <label for="city" class="flex flex-col text-gray-400 mb-2">
            <small class="mb-1">Şehir</small>
            <input autocomplete="off" id="city" class="input" type="text" />
          </label>
          <label for="zip_code" class="flex flex-col text-gray-400 mb-2">
            <small class="mb-1">Posta Kodu</small>
            <input autocomplete="off" id="zip_code" class="input" type="text" />
          </label>
          <label for="country" class="flex flex-col text-gray-400 mb-2">
            <small class="mb-1">Ülke</small>
            <input autocomplete="off" id="country" class="input" type="text" />
          </label>
        </div>
      </div>

      <div class="mt-5">
        <heading title="Fatura Kalemleri" />
        <invoice-items />
      </div>
      <!-- Summary -->
      <invoice-summary />

      <hr class="bg-gradient-to-r h-[1px] border-none from-gray-700 mt-5" />
      <div class="actionbar text-right my-5">
        <button class="purple-button">Kaydet</button>
      </div>
    </section>
</template>

<script setup>
import invoiceItems from './invoiceItems.vue';
import invoiceSummary from './invoiceSummary.vue';
</script>