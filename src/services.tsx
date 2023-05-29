import axios from "axios";
import { apiBaseUrl } from "./constant";
import { DiaryEntry } from "./interface/interface";

export const getAllDiaries = async () => {
  try {
    const response = await axios.get(`${apiBaseUrl}`);
    return response.data;
  } catch (error: any) {
    throw new Error("Error fetching diaries: " + error.message);
  }
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
