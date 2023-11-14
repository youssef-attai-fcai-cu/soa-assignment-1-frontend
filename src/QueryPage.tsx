import { atom, useAtom } from "jotai"
import Student from "./Student"

const resultsAtom = atom<Student[]>([]);

function QueryPage() {
    const [results, setResults] = useAtom(resultsAtom);

    function getAllStudents() {
        fetch("http://localhost:8080/Student/")
            .then(response => response.json())
            .then(data => setResults(data));
    }

    function getStudentsByFirstName() {
        const firstName = prompt("Enter first name");
        fetch(`http://localhost:8080/Student/ByName/${firstName}`)
            .then(response => response.json())
            .then(data => setResults(data));
    }

    function getStudentsByGPA() {
        const gpa = prompt("Enter GPA");
        fetch(`http://localhost:8080/Student/ByGPA/${gpa}`)
            .then(response => response.json())
            .then(data => setResults(data));
    }

    return (
        <div>
            <h1>Query Students</h1>

            <button onClick={(_) => {
                getAllStudents();
            }}>
                Get all students</button>
            <button onClick={(_) => {
                getStudentsByFirstName();
            }}>
                Get students by first name</button>
            <button onClick={(_) => {
                getStudentsByGPA();
            }}>
                Get students by GPA</button>

            <table>
                <thead>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    <th>GPA</th>
                    <th>Level</th>
                    <th>Address</th>
                </thead>
                <tbody>
                {
                    results.map((student: Student, i) => (
                        <tr key={i}>
                            <td>{student.id}</td>
                            <td>{student.firstName}</td>
                            <td>{student.lastName}</td>
                            <td>{student.gender}</td>
                            <td>{student.gpa}</td>
                            <td>{student.level}</td>
                            <td>{student.address}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    )
}

export default QueryPage;