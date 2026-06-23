import { defineType, defineField } from "sanity";

export const product = defineType({
  name: "product",
  title: "منتج",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "اسم المنتج",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "nameEn",
      title: "Product Name (English)",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "الرابط",
      type: "slug",
      options: { source: "name" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "price",
      title: "السعر (د.ج)",
      type: "number",
      validation: (rule) => rule.required().positive(),
    }),
    defineField({
      name: "category",
      title: "التصنيف",
      type: "string",
      options: {
        list: [
          { title: "عسل", value: "honey" },
          { title: "مكسرات", value: "nuts" },
          { title: "شوفان", value: "oats" },
          { title: "منتجات عضوية", value: "organic" },
          { title: "وصفات", value: "recipes" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "badge",
      title: "وسام",
      type: "string",
      options: {
        list: [
          { title: "الأكثر مبيعاً", value: "bestseller" },
          { title: "جديد", value: "new" },
          { title: "تخفيض", value: "sale" },
        ],
      },
    }),
    defineField({
      name: "description",
      title: "الوصف",
      type: "text",
    }),
    defineField({
      name: "image",
      title: "الصورة",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "featured",
      title: "منتج مميز",
      type: "boolean",
      initialValue: false,
    }),
  ],
});
