import React, { useEffect, useState } from "react";
import { getAllDiaries } from "../services";
import { DiaryEntry } from "../interface/interface";

const Diaries = () => {
  const [diaries, setDiaries] = useState<DiaryEntry[]>([]);

  useEffect(() => {
    const fetchDiaries = async () => {
      try {
        const data: DiaryEntry[] = await getAllDiaries();
        setDiaries(data);
      } catch (error) {
        console.log("Error fetching diaries:", error);
      }
    };
    fetchDiaries();
  }, []);

  return (
    <div>
      {diaries &&
        diaries.map((diary) => (
          <div key={diary.id}>
            <div>Date: {diary.date}</div>
            <div>Weather: {diary.weather}</div>
            <div>Visibility: {diary.visibility}</div>

            {/* <p>{diary.content}</p> */}
            <hr />
          </div>
        ))}
    </div>
  );
};

export default Diaries;
