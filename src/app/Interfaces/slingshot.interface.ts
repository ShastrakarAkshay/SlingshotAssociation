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

export interface RegistrationFormDataConfig {
    districtId: string;
    firstName: string;
    middleName: string;
    lastName: string;
    dateOfBirth: string;
    mobileNo: string;
    addressLine1: string;
    addresssLine2: string;
    city: string;
    district: string;
    pin: string;
    aadharNo: string;
    panNo: string;
    email: string;
    password: string;
    aadharAttachment: string;
    panAttachment: string;
    passportAttachment: string;
}
