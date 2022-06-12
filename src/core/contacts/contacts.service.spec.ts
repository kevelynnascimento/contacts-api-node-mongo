import { getModelToken, MongooseModule } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { Model } from 'mongoose';
import { Contact, ContactSchema } from './contact';
import { ContactsService } from './contacts.service';
import { ContactFilterRequest } from './dtos/requests/contact-filter.request';
import { ContactFilterResponse } from './dtos/responses/contact-filter.response';

const outputFilterMock = [
  {
    id: '1',
    name: 'Teste',
    phoneNumber: 'teste'
  }
];

describe('ContactsService', () => {
  let contractService: ContactsService;
  let contactModel: Model<Contact>;;
  let contactFilterRequest: ContactFilterRequest;;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ContactsService,
        {
          provide: getModelToken(Contact.name),
          useValue: {
            create: jest.fn(() => { }),
            findById: jest.fn(() => { }),
            update: jest.fn(() => { }),
            filter: jest.fn().mockResolvedValue(outputFilterMock),
          }
        }
      ],
    }).compile();

    contractService = module.get<ContactsService>(ContactsService);
    contactModel = module.get<Model<Contact>>(getModelToken(Contact.name));
    contactFilterRequest = new ContactFilterRequest();
  });

  it('should be defined', () => {
    expect(contractService).toBeDefined();
  });

  // describe('filter', () => {
  //   it('Should return a contacts list successfully', async () => {
  //     const contacts = await contractService.filter(contactFilterRequest);
  //     expect(contacts).toBe(outputFilterMock);
  //   });
  // });
});
