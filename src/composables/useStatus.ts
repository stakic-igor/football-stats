import { ref, onMounted } from 'vue'
import type { StatusResponse } from '@/types/status.ts'

export function useStatus() {
  const data = ref<StatusResponse>()
  const error = ref<string | null>(null)
  const loading = ref(false)

  const getData = async () => {
    const URI = 'https://v3.football.api-sports.io/status'
    error.value = null

    try {
      loading.value = true
      const response = await fetch(URI, {
        method: 'GET',
        headers: {
          'x-apisports-key': import.meta.env.VITE_API_FOOTBALL_KEY,
        },
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const json = await response.json()

      if (json.errors.length > 0) {
        error.value = json.errors.join(',\r\n')
        return
      }
      data.value = json
    } catch (caughtError) {
      error.value = caughtError instanceof Error ? caughtError.message : String(caughtError)
    } finally {
      loading.value = false
    }
  }
  onMounted(() => {
    getData()
  })

  return {
    data,
    error,
    loading,
  }
}
