export interface IDonner {
  userId: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  bloodGroup: string;
  age: string;
  donateTimes?: string;
  lastDonate?: Date;
  district: string;
  upazilla: string;
  gender: 'male' | 'female';
  facebook: string;
  instagram: string;
  twitter: string;
  isActive: boolean;
  readyToDonate: boolean;
}
