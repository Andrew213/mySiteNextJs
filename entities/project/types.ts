export type WpProject = {
  id: number;
  slug: string;
  date: string;
  title: {
    rendered: string;
  };
  acf: {
    project_img?: false | string | null;
    project_video?: false | string | null;
    project_git?: string;
    project_prod?: string;
    project_tags?: string;

    link_text_prod_ru?: string;
    link_text_prod_en?: string;
    description_ru?: string;
    description_en?: string;
    title_ru?: string;
    title_en?: string;
  };
};

export type Project = {
  id: number;
  slug: string;
  title_en: string;
  title_ru: string;
  description_en: string;
  description_ru: string;
  link_text_prod_ru: string;
  link_text_prod_en: string;
  imageUrl: false | string | null;
  videoUrl: false | string | null;
  gitUrl: string | null;
  prodUrl: string | null;
  tags: string[];
};
