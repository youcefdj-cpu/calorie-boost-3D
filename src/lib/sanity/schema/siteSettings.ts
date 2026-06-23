import { defineType, defineField } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "إعدادات الموقع",
  type: "document",
  fields: [
    defineField({
      name: "heroTitle",
      title: "عنوان الرئيسية",
      type: "string",
      initialValue: "كالوري بوست",
    }),
    defineField({
      name: "heroTagline",
      title: "الشعار",
      type: "text",
      initialValue: "تهتم بتوفير كل ما هو مفيد للجسم وذو قيمة غذائية عالية",
    }),
    defineField({
      name: "heroCta",
      title: "نص زر الرئيسية",
      type: "string",
      initialValue: "تصفح المنتجات",
    }),
    defineField({
      name: "phone",
      title: "رقم الهاتف",
      type: "string",
      initialValue: "213781379506",
    }),
    defineField({
      name: "whatsapp",
      title: "رقم واتساب",
      type: "string",
      initialValue: "213781379506",
    }),
    defineField({
      name: "address",
      title: "العنوان",
      type: "text",
      initialValue: "Rue Ain Guessma, Tiaret, Algeria",
    }),
  ],
});
