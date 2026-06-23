import { defineType, defineField } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "تقييم عميل",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "الاسم",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "text",
      title: "النص",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "rating",
      title: "التقييم",
      type: "number",
      options: { list: [1, 2, 3, 4, 5] },
      validation: (rule) => rule.required().min(1).max(5),
    }),
  ],
});
