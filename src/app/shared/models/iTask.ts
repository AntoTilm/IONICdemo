import { iUser } from "./iUser";

export interface iTask {
    id : number;
    name : string;
    assignedUser : iUser;
    deadline : Date;
}
