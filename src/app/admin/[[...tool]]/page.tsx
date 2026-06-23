"use client";

import { NextStudio } from "next-sanity/studio";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { product } from "@/lib/sanity/schema/product";
import { siteSettings } from "@/lib/sanity/schema/siteSettings";
import { testimonial } from "@/lib/sanity/schema/testimonial";

const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "your-project-id",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  title: "كالوري بوست",
  basePath: "/admin",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: [product, siteSettings, testimonial],
  },
});

export default function AdminPage() {
  return (
    <div dir="ltr" className="h-screen">
      <NextStudio config={config} />
    </div>
  );
}
