import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class ContactCreateRequest {
    @ApiProperty()
    @IsNotEmpty({ message: 'Nome é obrigatório.' })
    name: string;

    @ApiProperty()
    @IsNotEmpty({ message: 'Telefone é obrigatório.' })
    phoneNumber: string;
}
