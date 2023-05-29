interface CoursePartBase {
  name: string;
  exerciseCount: number;
}

interface CoursePartBasic extends CourseDes {
  //   description: string;
  kind: "basic";
}

interface CoursePartGroup extends CoursePartBase {
  groupProjectCount: number;
  kind: "group";
}

interface CoursePartBackground extends CourseDes {
  //   description: string;
  backgroundMaterial: string;
  kind: "background";
}

interface CourseDes extends CoursePartBase {
  description: string;
}

interface CoursePartExtra extends CourseDes {
  requirements: ["nodejs", "jest"];
  kind: "special";
}

export type CoursePart =
  | CoursePartBasic
  | CoursePartGroup
  | CoursePartBackground
  | CoursePartExtra;
