
const { STRAPI_HOST, STRAPI_TOKEN } = process.env;

export function strapi(url: string){
  return fetch(`${STRAPI_HOST}/api/${url}`,{
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`
    }
  }).then(res => res.json())
}