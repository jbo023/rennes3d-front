import { ref } from 'vue'
import type { Ref } from 'vue'
import { defineStore } from 'pinia'

export const usePlanningStore = defineStore('planning', () => {
  const selectedYear: Ref<number> = ref(2029)
  const selectedSemester: Ref<number> = ref(1)

  function getSelectedDate() {
    const selectedMonth = selectedSemester.value % 2 == 1 ? 1 : 7
    return new Date(selectedYear.value, selectedMonth)
  }

  function setDate(date: Date) {
    selectedYear.value = date.getFullYear()
    selectedSemester.value = date.getMonth() < 7 ? 1 : 2
  }

  return {
    getSelectedDate,
    selectedSemester,
    selectedYear,
    setDate,
  }
})
