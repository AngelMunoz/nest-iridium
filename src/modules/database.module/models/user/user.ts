import { Index, Collection, ObjectID, Property, Instance } from "iridium";
import { IUserDocument } from "./IUserDocument";

@Index({ name: 1 })
@Collection('users')
export class User extends Instance<IUserDocument, User> implements IUserDocument {
  @ObjectID _id: string;
  @Property(/^.+$/)
  name: string;
}