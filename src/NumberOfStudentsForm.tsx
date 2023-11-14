import { useSetAtom } from "jotai";
import { useNavigate } from "react-router-dom";
import { studentsAtom } from "./atoms";

function NumberOfStudentsFrom() {
    const setStudents = useSetAtom(studentsAtom);
    const navigate = useNavigate();

    return (
        <div>
            <h1>Number of Students</h1>
            <input type="number" onChange={(_) => {
                const newNumber = parseInt(_.target.value) || 0;
                setStudents(Array(newNumber).fill(0).map((_) => ({
                    id: undefined,
                    firstName: undefined,
                    lastName: undefined,
                    gender: "Male",
                    gpa: 0.0,
                    level: 4,
                    address: undefined,
                })));
            }} />
            <button
                onClick={(_) => {
                    navigate('/input')
                }}
            >Submit</button>
        </div>
    );
}

export default NumberOfStudentsFrom;