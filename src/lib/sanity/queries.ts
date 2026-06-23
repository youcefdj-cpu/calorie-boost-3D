import { groq } from "next-sanity";

export const productsQuery = groq`*[_type == "product"] | order(name asc) {
  _id,
  name,
  nameEn,
  slug,
  price,
  category,
  badge,
  description,
  "image": image.asset->url,
  featured
}`;

export const featuredProductsQuery = groq`*[_type == "product" && featured == true] | order(name asc) {
  _id,
  name,
  nameEn,
  slug,
  price,
  category,
  badge,
  description,
  "image": image.asset->url
}`;

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]`;

export const testimonialsQuery = groq`*[_type == "testimonial"] | order(rating desc) {
  _id,
  name,
  text,
  rating
}`;

export const singleProductQuery = groq`*[_type == "product" && slug.current == $slug][0] {
  _id,
  name,
  nameEn,
  slug,
  price,
  category,
  badge,
  description,
  "image": image.asset->url
}`;
