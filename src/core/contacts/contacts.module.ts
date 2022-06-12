import { Module } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { ContactsController } from './contacts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Contact, ContactSchema } from './contact';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Contact.name, schema: ContactSchema }
    ]),
  ],
  providers: [ContactsService],
  controllers: [ContactsController]
})
export class ContactsModule { }
