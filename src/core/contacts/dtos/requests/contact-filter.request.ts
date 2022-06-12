import { ApiProperty } from '@nestjs/swagger';

export class ContactFilterRequest {
    @ApiProperty({ required: false })
    name: string;
}
