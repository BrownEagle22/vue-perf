export class PictureUrls {
    large: string;
    medium: string;
    thumbnail: string;
}

export class DateOfBirth {
    date: string;
    age: number;
}

export class Name {
    title: string;
    first: string;
    last: string;
}

export class Person {
    gender: string;
    name: Name;
    email: string;
    phone: string;
    dob: DateOfBirth;
    picture: PictureUrls;
}