type Student = {
    id: string | undefined;
    firstName: string | undefined;
    lastName: string | undefined;
    gender: "Male" | "Female";
    gpa: number;
    level: number;
    address: string | undefined;
}

export default Student;