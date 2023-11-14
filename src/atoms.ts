import { atom } from "jotai";
import Student from "./Student";

export const studentsAtom = atom<Student[]>([]);