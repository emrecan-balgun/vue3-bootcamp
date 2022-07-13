<template>
    <div class="login_register_container">
      <h3 class="text-2xl text-center mb-3">Kayıt Ol</h3>
      <input type="text" v-model="userData.username" placeholder="Tam Ad" class="input mb-3" />
      <input type="text" v-model="userData.fullname" placeholder="Kullanıcı Adı" class="input mb-3" />
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

<script>
// import CryptoJS from 'crypto-js';
// import AES from"crypto-js/aes";

export default {
  data() {
    return {
      userData: {
        username: null,
        fullname: null,
        password: null
      }
    }
  },
  methods: {
    onSave() {
      const key = "booklike123!456?"
      const password = this.$CryptoJS.AES.encrypt(this.userData.password, key).toString();

      this.$appAxios.post("/users", { ...this.userData, password }).then(registered_user_response => {
        console.log("registered_user_response: ", registered_user_response);
        this.$router.push({ name: "HomePage" });
      })

      // const decryptedText = this.$CryptoJS.AES.decrypt(cryptedPassword, key).toString(this.$CryptoJS.enc.Utf8)
      // console.log("decryptedText", decryptedText)
      // console.log(this.userData);
    }
  }
}
</script>