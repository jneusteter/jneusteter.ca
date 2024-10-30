<template>
  <div class="bg-slate-50 h-screen">
    <div class="max-w-7xl m-auto border rounded-lg p-6">
      <div class="bold mb-3 flex justify-between">
        <div>Batteries</div>
        <DevOnly>
          <div @click="show = !show">Add Battery</div>
          <Drawer
            v-model:visible="show"
            position="right"
            header="Add Battery"
            class="!w-96"
          >
            <div class="flex flex-col gap-2">
              <InputText placeholder="Name" class="w-full" />

              <Select />
            </div>
          </Drawer>
        </DevOnly>
      </div>

      <DataTable :value="data">
        <Column field="name" header="Name" />
      </DataTable>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useFetch } from "#imports";
import DataTable from "primevue/datatable";
import Drawer from "primevue/drawer";
import InputText from "primevue/inputtext";
import Select from "primevue/select";

const { data } = useFetch("/api/batteries");
const show = ref(false);
</script>
