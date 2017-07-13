import { Core, Model } from "iridium";
import { User } from "./user/user";
import { IUserDocument } from "./user/IUserDocument";

export class Database extends Core {
  Users = new Model<IUserDocument, User>(this, User);
}