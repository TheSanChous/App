import { SubjectModel } from "./subjectModel";

export interface GroupModel {
  name: string,
  description: string,
  subjects: SubjectModel[]
}
