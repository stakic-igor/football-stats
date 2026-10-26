export interface StatusResponse {
  loading: boolean
  errors: string[]
  response: {
    subscription: {
      active: boolean
    }
    account: {
      firstname: string
      lastname: string
    }
  }
}
