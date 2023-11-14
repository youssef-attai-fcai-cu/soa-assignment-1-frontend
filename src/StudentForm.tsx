import { useSetAtom } from "jotai";
import { studentsAtom } from "./atoms";

type StudentFormProps = {
    studentNumber: number;
}

function StudentForm({ studentNumber }: StudentFormProps) {
    const setStudents = useSetAtom(studentsAtom);

    function updateFirstName(studentIndex: number, newValue: string) {
        setStudents((prevStudents) => {
            const updatedStudents = [...prevStudents];
            updatedStudents[studentIndex] = {
                ...updatedStudents[studentIndex],
                firstName: newValue,
            };
            return updatedStudents;
        });
    }

    function updateLastName(studentIndex: number, newValue: string) {
        setStudents((prevStudents) => {
            const updatedStudents = [...prevStudents];
            updatedStudents[studentIndex] = {
                ...updatedStudents[studentIndex],
                lastName: newValue,
            };
            return updatedStudents;
        });
    }

    function updateID(studentIndex: number, newValue: string) {
        setStudents((prevStudents) => {
            const updatedStudents = [...prevStudents];
            updatedStudents[studentIndex] = {
                ...updatedStudents[studentIndex],
                id: newValue,
            };
            return updatedStudents;
        });
    }

    function updateGender(studentIndex: number, newValue: "Male" | "Female") {
        setStudents((prevStudents) => {
            const updatedStudents = [...prevStudents];
            updatedStudents[studentIndex] = {
                ...updatedStudents[studentIndex],
                gender: newValue,
            };
            return updatedStudents;
        });
    }

    function updateAddress(studentIndex: number, newValue: string) {
        setStudents((prevStudents) => {
            const updatedStudents = [...prevStudents];
            updatedStudents[studentIndex] = {
                ...updatedStudents[studentIndex],
                address: newValue,
            };
            return updatedStudents;
        });
    }

    function updateGPA(studentIndex: number, newValue: number) {
        setStudents((prevStudents) => {
            const updatedStudents = [...prevStudents];
            updatedStudents[studentIndex] = {
                ...updatedStudents[studentIndex],
                gpa: newValue,
            };
            return updatedStudents;
        });
    }

    function updateLevel(studentIndex: number, newValue: number) {
        setStudents((prevStudents) => {
            const updatedStudents = [...prevStudents];
            updatedStudents[studentIndex] = {
                ...updatedStudents[studentIndex],
                level: newValue,
            };
            return updatedStudents;
        });
    }

    return (
        <div>
            <h2>Enter Student {studentNumber + 1} Information</h2>
            <input type="text" placeholder="ID" onChange={(e) => {
                updateID(studentNumber, e.target.value);
            }} />
            <input type="text" placeholder="First Name" onChange={(e) => {
                updateFirstName(studentNumber, e.target.value);
            }} />
            <input type="text" placeholder="Last Name" onChange={(e) => {
                updateLastName(studentNumber, e.target.value);
            }} />
            <select
                onChange={(e) => {
                    const v = (e.target.value as ("Male" | "Female"))
                    updateGender(studentNumber, v);
                }}
            >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
            <input type="number" placeholder="GPA" onChange={(e) => {
                updateGPA(studentNumber, parseFloat(e.target.value));
            }} />
            <input type="number" placeholder="Level" onChange={(e) => {
                updateLevel(studentNumber, parseInt(e.target.value));
            }} />
            <input type="text" placeholder="Address" onChange={(e) => {
                updateAddress(studentNumber, e.target.value);
            }} />
        </div>
    );
}

export default StudentForm;