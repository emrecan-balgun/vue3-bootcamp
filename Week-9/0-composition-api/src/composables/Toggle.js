import { ref, computed } from "vue"; // ref: reactive effect

export default function() {
    const show = ref(false);
    console.log("show => ", show.value);
    const toggleIt = () => {
        show.value = !show.value;
    }

    return { show, toggleIt };
}