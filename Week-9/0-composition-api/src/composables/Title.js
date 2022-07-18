import { ref, computed } from "vue"; // ref: reactive effect
    
export default function() {
    const title = ref("This is test title");
    // const titleLengthMessage = computed(() => {
    //   return title.value.length + " adet karakter yazdınız.";
    // })
    const titleLengthMessage = computed(() => title.value.length + " adet karakter yazdınız.");
    // console.log("titleLengthMessage => ", titleLengthMessage.value);

    return { title, titleLengthMessage };
}