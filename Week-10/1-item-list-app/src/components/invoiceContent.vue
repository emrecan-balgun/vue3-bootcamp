<template>
 <section class="bg-gray-900 w-1/3 mx-auto mt-10 p-2 px-5 rounded-md shadow-2xl">
      <!-- Fatura Bilgileri -->
      <contact-section />
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
import contactSection from './contactSection.vue';
</script>