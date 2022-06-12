import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Contact } from './contact';
import { ContactCreateRequest } from './dtos/requests/contact-create.request';
import { ContactUpdateRequest } from './dtos/requests/contact-update.request';
import { ContactFilterRequest } from './dtos/requests/contact-filter.request';
import { ContactFindResponse } from './dtos/responses/contact-find.response';
import { ContactFilterResponse } from './dtos/responses/contact-filter.response';
import { plainToClass } from 'class-transformer';

@Injectable()
export class ContactsService {
  constructor(
    @InjectModel('Contact') private readonly contactModel: Model<Contact>,
  ) { }

  public async create(request: ContactCreateRequest): Promise<void> {
    const contact = new this.contactModel({
      name: request.name,
      phoneNumber: request.phoneNumber
    });

    await contact.save();
  }

  public async findById(id: string): Promise<ContactFindResponse> {
    const contact = await this.contactModel.findById(id);
    const response = plainToClass(ContactFindResponse, contact);
    return response;
  }

  public async update(id: string, request: ContactUpdateRequest): Promise<void> {
    const contact = await this.contactModel.findById(id);

    if (request.name)
      contact.name = request.name;

    if (request.phoneNumber)
      contact.phoneNumber = request.phoneNumber;

    contact.save();
  }

  public async filter(request: ContactFilterRequest): Promise<ContactFilterResponse[]> {
    const contacs = await this.contactModel.find();
    const response = contacs.map(contact => plainToClass(ContactFilterResponse, contact));
    return response;
  }
}
