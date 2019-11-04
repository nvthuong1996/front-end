import feathersClient from '../feathers/feathers-client'
export default ({ app }, inject) => {
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE1NzI4ODU2MDYsImV4cCI6MTU3Mjk3MjAwNiwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiMSIsImp0aSI6Ijk0MjYwMjBhLWI2NTYtNGFmYi1hYmFhLTc5NDg1OWNjMDJhMCJ9.32Ajk86oVLUDt5ykYFWY6hUGqQRLfyCyDX1w5Cc9ZZQ'
  feathersClient.authentication.setAccessToken(token)
  feathersClient.reAuthenticate()
}
