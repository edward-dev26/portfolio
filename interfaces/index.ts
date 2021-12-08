import { PortfolioCategories } from './enums';

export interface ILink {
  title: string;
  href: string;
}

export interface IProject {
  id: number | string;
  title: string;
  technologies: Array<string>;
  image: string;
  types: Array<PortfolioCategories>;
  links?: {
    repo?: string;
    demo?: string;
    api?: string;
  };
  description?: string;
  date?: string;
}

export interface ISkill {
  title: string;
  progress: number;
}

export interface IEmail {
  email: string;
  subject: string;
  name: string;
  message: string;
}
