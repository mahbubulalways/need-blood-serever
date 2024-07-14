export interface IUsers {
  name: string;
  image: string;
  email: string;
  password?: string;
  role: 'user' | 'admin' | 'donner';
  isDeleted: boolean;
}
