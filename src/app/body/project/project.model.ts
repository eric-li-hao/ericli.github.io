export interface ProjectModelInterface {
  id: number;
  name: string;
  languages: string;
  level: string;
  date: Date;
}

export class ProjectModel implements ProjectModelInterface {
  id: number;
  name: string;
  languages: string;
  level: string;
  date: Date;
}
