<template>
  <div class="bg-slate-50 h-screen">
    <div class="max-w-7xl m-auto border rounded-lg p-6">
      <div class="bold mb-3 flex justify-between">
        <div>Batteries</div>
        <DevOnly> <BatteryForm /> </DevOnly>
      </div>

      <DataTable :value="data">
        <Column field="name" header="Name" />
      </DataTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFetch } from "#imports";
import DataTable from "primevue/datatable";
import BatteryForm from "~/components/BatteryForm.vue";

const { data } = useFetch("/api/batteries");
</script>
