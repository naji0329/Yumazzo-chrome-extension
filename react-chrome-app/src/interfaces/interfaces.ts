export interface DishInterface {
  name: string;
  difficulty: string;
  description: string;
  socials: Array<Social>;
  link: string;
}

export interface Social {
  link: string;
  icon: string;
  description: string;
}
