import { useAtomValue } from "jotai"
import StudentForm from "./StudentForm";
import { studentsAtom } from "./atoms";
import Student from "./Student";
import { useNavigate } from "react-router-dom";

function StudentsList() {
    const students = useAtomValue(studentsAtom);
    const numberOfStudents = students.length;

    const navigate = useNavigate();

    async function addStudents() {
        try {
            const response = await fetch('http://localhost:8080/Student/addStudents', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(students.map((student: Student) => ({
                    "ID": student.id,
                    "FirstName": student.firstName,
                    "LastName": student.lastName,
                    "Gender": student.gender,
                    "GPA": student.gpa,
                    "Level": student.level,
                    "Address": student.address
                }))),
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            {
                Array.from(Array(numberOfStudents).keys()).map((_, index) => (
                    <StudentForm key={index} studentNumber={index} />
                ))
            }
            <button onClick={async (_) => {
                await addStudents();
                navigate("/query");
            }}>
                Submit
            </button>
        </div>
    );
}

export default StudentsList;