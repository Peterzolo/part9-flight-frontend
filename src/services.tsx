import axios from "axios";
import { apiBaseUrl } from "./constant";
import { DiaryEntry, ICreateDiary } from "./interface/interface";

export const getAllDiaries = async () => {
  try {
    const response = await axios.get(`${apiBaseUrl}`);
    return response.data;
  } catch (error: any) {
    throw new Error("Error fetching diaries: " + error.message);
  }
};
export const createDiary = async (
  object: ICreateDiary
): Promise<DiaryEntry> => {
  console.log("GOT HERE");
  try {
    const { data } = await axios.post<DiaryEntry>(`${apiBaseUrl}`, object);
    console.log("DATA", data);
    return data;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};
