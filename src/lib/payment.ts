import axios from "axios";

// const { NEXT_PUBLIC_STRAPI_TOKEN, NEXT_PUBLIC_STRAPI_HOST } = process.env;

export const makePaymentRequest = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_HOST,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`
  }
})