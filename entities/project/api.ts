import type { Project, WpProject } from "@/entities/project/types";

function decodeText(value: string): string {
  return value
    .replace(/&#(\d+);/g, (_, code: string) =>
      String.fromCodePoint(Number(code)),
    )
    .replace(/&#8212;/g, "\u2014")
    .replace(/&#8211;/g, "\u2013")
    .replace(/&nbsp;/g, " ")
    .replace(/&laquo;/g, "\u00ab")
    .replace(/&raquo;/g, "\u00bb")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function sanitizeDescription(value: string): string {
  const allowedTags = new Set([
    "b",
    "br",
    "em",
    "i",
    "li",
    "ol",
    "p",
    "strong",
    "ul",
  ]);

  return value
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<(script|style)[^>]*>[\s\S]*?<\/\1>/gi, "")
    .replace(/<\/?([a-z0-9]+)(?:\s[^>]*)?>/gi, (tag, name: string) => {
      const normalizedName = name.toLowerCase();

      if (!allowedTags.has(normalizedName)) return "";
      if (normalizedName === "br") return "<br>";

      return tag.startsWith("</")
        ? `</${normalizedName}>`
        : `<${normalizedName}>`;
    })
    .trim();
}

function parseTags(value?: string): string[] {
  if (!value) return [];

  return value
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
}

function mapWpProjectToProject(wpProject: WpProject): Project {
  return {
    id: wpProject.id,
    slug: wpProject.slug,
    title: decodeText(wpProject.title.rendered),
    description: sanitizeDescription(wpProject.acf?.project_desc ?? ""),
    imageUrl:
      typeof wpProject.acf?.project_img === "string"
        ? wpProject.acf.project_img
        : null,
    videoUrl:
      typeof wpProject.acf?.project_video === "string"
        ? wpProject.acf.project_video
        : null,
    gitUrl: wpProject.acf?.project_git || null,
    prodUrl: wpProject.acf?.project_prod || null,
    tags: parseTags(wpProject.acf?.project_tags),
  };
}

export async function getProjects(): Promise<Project[]> {
  const projectsUrl =
    `https://kochanov-web.tech/wp-json/wp/v2/posts` +
    `?categories=2` +
    `&_fields=id,slug,date,title,acf` +
    `&acf_format=standard`;

  const res = await fetch(projectsUrl, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch: ${projectsUrl}`);
  }

  const projects: WpProject[] = await res.json();

  return projects.map(mapWpProjectToProject);
}
