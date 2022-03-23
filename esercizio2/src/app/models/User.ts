export interface User{
    id: number;
    name: string;
    surname: string;
    age: number;
    dateOfBirth: string;
    address: Address;
    role: staff;
    username: string;
    profilePhotoUrl: string;
    companies: Companies[];
    gender: gender;
}

interface Address{
    city: string;
    street: string;
    postalCode: string;
}

interface Companies{
    id: number;
    name: string;
    description: string;
    location: {
        city:string;
        street:string;
        postalCode:string;
    };
}

type staff= "staff" | "student" | "manager" | "admin";
type gender= "male" | "female" | "other";