import axios from "axios"
const tsttcukndskclqAPI = axios.create({
  baseURL: "https://tst-tc108-ukndskclq-77364.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_house_list(payload) {
  return tsttcukndskclqAPI.get(`/api/v1/house/`)
}
function api_v1_house_create(payload) {
  return tsttcukndskclqAPI.post(`/api/v1/house/`, payload.data)
}
function api_v1_login_create(payload) {
  return tsttcukndskclqAPI.post(`/api/v1/login/`, payload.data)
}
function api_v1_signup_create(payload) {
  return tsttcukndskclqAPI.post(`/api/v1/signup/`, payload.data)
}
function rest_auth_user_retrieve(payload) {
  return tsttcukndskclqAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return tsttcukndskclqAPI.put(`/rest-auth/user/`, payload.data)
}
function rest_auth_user_partial_update(payload) {
  return tsttcukndskclqAPI.patch(`/rest-auth/user/`, payload.data)
}
function api_docs_schema_retrieve(payload) {
  return tsttcukndskclqAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function rest_auth_login_create(payload) {
  return tsttcukndskclqAPI.post(`/rest-auth/login/`, payload.data)
}
function rest_auth_logout_retrieve(payload) {
  return tsttcukndskclqAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return tsttcukndskclqAPI.post(`/rest-auth/logout/`)
}
function api_v1_house_retrieve(payload) {
  return tsttcukndskclqAPI.get(`/api/v1/house/${payload.id}/`)
}
function api_v1_house_update(payload) {
  return tsttcukndskclqAPI.put(`/api/v1/house/${payload.id}/`, payload.data)
}
function api_v1_house_partial_update(payload) {
  return tsttcukndskclqAPI.patch(`/api/v1/house/${payload.id}/`, payload.data)
}
function api_v1_house_destroy(payload) {
  return tsttcukndskclqAPI.delete(`/api/v1/house/${payload.id}/`)
}
function rest_auth_registration_create(payload) {
  return tsttcukndskclqAPI.post(`/rest-auth/registration/`, payload.data)
}
function rest_auth_password_reset_create(payload) {
  return tsttcukndskclqAPI.post(`/rest-auth/password/reset/`, payload.data)
}
function rest_auth_password_change_create(payload) {
  return tsttcukndskclqAPI.post(`/rest-auth/password/change/`, payload.data)
}
function rest_auth_password_reset_confirm_create(payload) {
  return tsttcukndskclqAPI.post(
    `/rest-auth/password/reset/confirm/`,
    payload.data
  )
}
function rest_auth_registration_verify_email_create(payload) {
  return tsttcukndskclqAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload.data
  )
}
export const apiService = {
  api_v1_house_list,
  api_v1_house_create,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update,
  api_docs_schema_retrieve,
  rest_auth_login_create,
  rest_auth_logout_retrieve,
  rest_auth_logout_create,
  api_v1_house_retrieve,
  api_v1_house_update,
  api_v1_house_partial_update,
  api_v1_house_destroy,
  rest_auth_registration_create,
  rest_auth_password_reset_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_verify_email_create
}
