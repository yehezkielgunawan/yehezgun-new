export type SingleProject = {
  project_title: string;
  image_url?: Array<SingleProjectImg>;
  project_url: string;
  made_using: Array<SingleProjectImg>;
  description: string;
  date_added: string;
};

export type SingleProjectImg = {
  filename: string;
  height: number;
  id: string;
  size: number;
  thumbnails: {
    full: {
      height: number;
      url: string;
      width: number;
    };
    large: {
      height: number;
      url: string;
      width: number;
    };
    small: {
      height: number;
      url: string;
      width: number;
    };
  };
  type: string;
  url: string;
  width: number;
};

export type SingleProjectsRes = {
  id: string;
  fields: SingleProject;
};

export type Projects = Array<SingleProjectsRes>;

export type SingleExperience = {
  name: string;
  company_name: string;
  duration: string;
};

export type SingleExperienceRes = {
  id: string;
  fields: SingleExperience;
};

export type Experiences = Array<SingleExperienceRes>;
