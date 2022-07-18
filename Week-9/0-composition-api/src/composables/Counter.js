import { ref, computed, watch } from "vue"; // ref: reactive effect

export default function() {
    const counter = ref(0);
    const oddOrEven = computed(() => counter.value % 2 == 0 ? '(Çift sayı)' : '(Tek sayı)');
    // watch(counter, () => {}, { deep: true })
    // watch([counter, oddOrEven], (newValue, oldValue) => {
    watch([counter, oddOrEven], ([newC, newO], [oldC, oldO]) => {
      console.log(oldO, " -> ", newO)
    })

    return { counter, oddOrEven };
}