import { MetadataRoute } from 'next'
import { projectList } from '@/lib/projects'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://peterproperty.adappts.com'

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...projectList.map((project) => ({
      url: `${baseUrl}/Project/${project.id}/`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),
  ]
}
