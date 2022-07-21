<template>
    <div class="login_register_container">
      <h3 class="text-2xl text-center mb-3">Kayıt Ol</h3>
      <input type="text" v-model="userData.fullname" placeholder="Tam Ad" class="input mb-3" />
      <input type="text" v-model="userData.username" placeholder="Kullanıcı Adı" class="input mb-3" />
      <input type="password" v-model="userData.password" placeholder="Şifre" class="input mb-3" />
      <button @click="onSave" class="default-button">Kayıt ol</button>
      <span class="text-center mt-3 text-sm">
        Zaten Üyeyim,
        <router-link :to="{ name: 'LoginPage' }" class="text-red-900 hover:text-black">
          Giriş yap!
        </router-link>
      </span>
    </div>
</template>

<script setup>
import { ref, inject } from 'vue';
import { useStore } from 'vuex';
import CryptoJS from 'crypto-js';
import { useRouter } from 'vue-router';

const appAxios = inject("appAxios");
const store = useStore();
const router = useRouter();
const userData = ref({
  fullname: null,
  username: null,
  password: null
});

const onSave = () => {
      const password = CryptoJS.HmacSHA1(userData.value.password, store.getters._saltKey).toString();

      appAxios.post("/users", { ...userData.value, password }).then(registered_user_response => {
        console.log("registered_user_response: ", registered_user_response);
        router.push({ name: "HomePage" });
      })
    }
</script>