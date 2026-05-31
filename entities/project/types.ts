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
    project_desc?: string;
    project_git?: string;
    project_prod?: string;
    project_tags?: string;
  };
};

export type Project = {
  id: number;
  slug: string;
  title: string;
  description: string;
  imageUrl: false | string | null;
  videoUrl: false | string | null;
  gitUrl: string | null;
  prodUrl: string | null;
  tags: string[];
};
