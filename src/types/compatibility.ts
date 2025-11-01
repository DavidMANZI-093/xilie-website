export interface IDE {
  icon?: string;
  iconDark?: string;
  name: string;
  description: string;
  status: string;
  method: string;
}

export interface Platform {
  icon?: string;
  iconDark?: string;
  name: string;
  shortcuts: string;
  status: string;
}
