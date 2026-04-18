import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://codeveraa.com",
      lastModified: new Date(),
       changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: "https://codeveraa.com/services",
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: "https://codeveraa.com/work",
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: "https://codeveraa.com/contact",
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: "https://codeveraa.com/about",
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}


