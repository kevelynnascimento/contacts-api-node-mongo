import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiParam, ApiTags } from '@nestjs/swagger';
import { ContactsService } from './contacts.service';
import { ContactCreateRequest } from './dtos/requests/contact-create.request';
import { ContactFilterRequest } from './dtos/requests/contact-filter.request';
import { ContactUpdateRequest } from './dtos/requests/contact-update.request';
import { ContactFilterResponse } from './dtos/responses/contact-filter.response';
import { ContactFindResponse } from './dtos/responses/contact-find.response';

@Controller('contacts')
@ApiTags('contacts')
export class ContactsController {

  constructor(private readonly contactsService: ContactsService) { }

  @Get()
  public async filter(@Query() request: ContactFilterRequest): Promise<ContactFilterResponse[]> {
    const response = await this.contactsService.filter(request);
    return response;
  }

  @Get(':id')
  @ApiParam({ name: 'id' })
  public async findById(@Param('id') id: string): Promise<ContactFindResponse> {
    const response = await this.contactsService.findById(id);
    return response;
  }

  @Post()
  public async create(@Body() request: ContactCreateRequest): Promise<void> {
    await this.contactsService.create(request);
  }

  @Put(':id')
  @ApiParam({ name: 'id' })
  public async update(@Param('id') id: string, @Body() request: ContactUpdateRequest): Promise<void> {
    await this.contactsService.update(id, request);
  }
}
