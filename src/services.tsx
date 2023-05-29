import axios from "axios";
import { apiBaseUrl } from "./constant";
import { DiaryEntry } from "./interface/interface";

export const getAllPatients = async () => {
  const { data } = await axios.get<DiaryEntry[]>(`${apiBaseUrl}/diaries`);
  console.log("DIARIES", data);
  return data;
};

// export const createPatient = async (
//   object: PatientFormValues
// ): Promise<Patient> => {
//   try {
//     const { data } = await axios.post<Patient>(
//       `${apiBaseUrl}/patients/add`,
//       object
//     );
//     console.log("DATA", data);
//     return data;
//   } catch (error: any) {
//     console.log(error);
//     return error;
//   }
// };
