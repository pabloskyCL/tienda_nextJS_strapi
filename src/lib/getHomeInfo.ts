import { strapi } from "./strapi";

const { NEXT_PUBLIC_STRAPI_HOST } = process.env;

export function getHomeInfo() {

  const homeInfo = () => strapi("home?populate=cover")
    .then(res => {
      const { title, description, cover } = res.data;
      const image = `${NEXT_PUBLIC_STRAPI_HOST}${cover.url}`;
      return { title, description, image };
    })

  const getCategories = () => strapi("product-categories?fields[0]=name&fields[1]=slug&fields[2]=description&populate[image][fields][0]=url")
    .then(res => {
      return res.data.map((category) => {
        const { name, slug, description, image } = category;
        const rawImage = `${NEXT_PUBLIC_STRAPI_HOST}${image.url}`;
        return { name, slug, description, image: rawImage }
      })
    })

  const getFeaturedProducts = () => strapi("products?populate[product_category][fields][0]=name&pagination[page]=1&pagination[pageSize]=3&populate=images")
    .then((res) => {
      const { data, meta } = res;
      console.log(data);
      const products = data.map((product => {
        const { id, name, slug, description, product_category, images: rawImage, price } = product;
        const image = `${NEXT_PUBLIC_STRAPI_HOST}${rawImage[0].url}`
        return { id, name, slug, description, category: product_category.name, image, price }
      }))
      return { products, pagination: meta.pagination }
    })

  return { homeInfo, getCategories, getFeaturedProducts }
}
