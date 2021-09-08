export interface MembersConfig {
  id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  mobile: string;
  fb: string;
  role: string;
  profilePic: string;
}

export interface DistrictConfig {
  id: string;
  name: string;
  isRegistered: boolean;
}

export interface UpcommingEventsConfig {
  id: string;
  eventTitle: string;
  eventDate: string;
  address: string;
  contactPersongs: string;
  phone: string;
}

export interface UserConfig {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  mobile: string;
  dateOfBirth: string;
  panNo: string;
  aadhaarNo: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  pin: string;
}
