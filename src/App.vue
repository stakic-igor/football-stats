<script setup lang="ts">
import type { StatusResponse } from '@/types/status.ts'
import Header from './components/layout/Header.vue'
import MainView from './views/MainView.vue'
import { useStatus } from '@/composables/useStatus.ts'

const { data, error, loading } = useStatus()
</script>

<template>
  <div v-if="loading">Loading...</div>
  <div v-if="error">test {{ error }}</div>
  <Header v-if="data" :data="data" />
  <MainView />
</template>
