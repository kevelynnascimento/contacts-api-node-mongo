import { Exclude, Expose } from "class-transformer";

@Exclude()
export class ContactFilterResponse {
  @Expose()
  id: string;

  @Expose()
  name: string;

  @Expose()
  phoneNumber: string;
}