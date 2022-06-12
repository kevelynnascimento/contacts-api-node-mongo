import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, ObjectId } from 'mongoose';

export type ContactDocument = Contact & Document;

@Schema({
  toJSON: {
    transform: (_, entity): void => {
      entity.id = entity._id;
      delete entity._id;
      delete entity.__v;
    },
  }
})
export class Contact {
  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  phoneNumber: string;
}

export const ContactSchema = SchemaFactory.createForClass(Contact);