
const { NEXT_PUBLIC_STRAPI_TOKEN, NEXT_PUBLIC_STRAPI_HOST } = process.env;

export function strapi(url: string) {
  return fetch(`${NEXT_PUBLIC_STRAPI_HOST}/api/${url}`, {
    headers: {
      Authorization: `Bearer ${NEXT_PUBLIC_STRAPI_TOKEN}`
    }
  }).then(res => res.json())
}