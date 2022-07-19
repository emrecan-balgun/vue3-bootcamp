import { ref, onMounted } from 'vue';

export default function() {
    const title = ref("Test");
    const counter = ref(0);

    const increase = () => {
        counter.value++; // ref ile tutulduğu için value üzerinden ulaşılıyor
    }

    const alertMe = (info) => {
        console.log(info);
    }

    onMounted(() => {
        console.log("Mounted esnasında yapılabilecekler burada..");
    });

    return { title, counter, increase, alertMe };
}