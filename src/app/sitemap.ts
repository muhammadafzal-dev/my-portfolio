import { MetadataRoute } from "next";
import { execSync } from "node:child_process";
import path from "node:path";
import { allProjectSlugs } from "@/lib/projects";

function getLastModified(filePath: string): Date {
  try {
    const absPath = path.join(process.cwd(), filePath);
    const iso = execSync(`git log -1 --format=%cI -- "${absPath}"`, {
      encoding: "utf-8",
    }).trim();
    if (iso) return new Date(iso);
  } catch {
    /* fallback below */
  }
  return new Date();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://muhammadafzal.vercel.app";

  const projectsLastModified = getLastModified("src/lib/projects.ts");

  const projectDetailRoutes: MetadataRoute.Sitemap = allProjectSlugs().map(
    (slug) => ({
      url: `${baseUrl}/projects/${slug}`,
      lastModified: projectsLastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    }),
  );

  return [
    {
      url: `${baseUrl}/`,
      lastModified: getLastModified("src/app/page.tsx"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: getLastModified("src/app/projects/page.tsx"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...projectDetailRoutes,
  ];
}
