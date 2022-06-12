import { Exclude, Expose } from "class-transformer";
import { ObjectId } from "mongoose";

@Exclude()
export class ContactFindResponse {
  @Expose()
  id: ObjectId;

  @Expose()
  name: string;

  @Expose()
  phoneNumber: string;
}