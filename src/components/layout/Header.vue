<script setup lang="ts">
import type { StatusResponse } from '@/types/status.ts'

defineProps<{
  data: StatusResponse
}>()
</script>

<template>
  <header class="bg-gray-400">
    <section class="container mx-auto flex items-center justify-between py-1">
      <span>FootBall stats</span>
      <div>
        Welcome,
        {{ data.response.account.firstname }} {{ data.response.account.lastname }} -
        <span
          class="h-2 w-2 rounded-full block border border-white"
          :class="data.response.subscription.active ? 'bg-green-500' : 'bg-red-500'"
        ></span>
      </div>
    </section>
  </header>
</template>
