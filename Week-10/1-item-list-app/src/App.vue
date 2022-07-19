<template>
  <div class="w-screen h-screen bg-gray-800 flex flex-row text-white items-start justify-center">
    <app-sidebar :invoices="invoiceList" :editInvoice="editInvoice" />
   <invoice-content :saveInvoice="saveInvoice" :activeInvoice="state.activeInvoice" />
  </div>
</template>

<script setup>
import appSidebar from './components/appSidebar.vue';
import invoiceContent from './components/invoiceContent.vue';
import { ref, reactive } from 'vue';

const invoiceList = ref([
  {
    id: new Date().getTime(),
    contact: {
      contact_name: "Emrecan",
      email: "emron@gmail.com",
      city: "Izmir",
      country: "Turkey",
      zipcode: "35100",
    },
    items: [
      {
        id: new Date().getTime(),
        name: "Test",
        quantity: 50,
        unit_price: 100.0,
        total_price: 5000.0,
      }
    ]
  }
]);

const state = reactive({ activeInvoice: null});

const saveInvoice = (invoice) => {
  invoiceList.value.push(invoice);
}

const editInvoice = (invoice) => {
  console.log(invoice);
  state.activeInvoice = invoice;
  console.log('state.activeInvoice', state.activeInvoice);
}
</script>