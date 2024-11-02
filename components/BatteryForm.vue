<template>
  <a @click="show = !show">Add Battery</a>

  <Drawer
    v-model:visible="show"
    position="right"
    header="Add Battery"
    class="!w-96"
    @show="onShow()"
  >
    <div class="flex flex-col gap-2">
      <InputText placeholder="Name" class="w-full" />

      <Select :options="citiesOptions" placeholder="Select A City" />

      <InputNumber />

      <Button>Save</Button>
    </div>
  </Drawer>
</template>

<script setup lang="ts">
import { ref } from "vue";

import Drawer from "primevue/drawer";
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";
import Select from "primevue/select";
import Button from "primevue/button";

const citiesOptions = ref<{ name: string; code: number }[]>([]);

type OnShowResponse = {
  cities: { id: number; name: string }[];
};
const show = ref(false);
const onShow = async () => {
  const data = await $fetch<OnShowResponse>("/api/battery-form/on-show");

  citiesOptions.value = data.cities.map((city) => ({
    name: city.name,
    code: city.id,
  }));
};
</script>
