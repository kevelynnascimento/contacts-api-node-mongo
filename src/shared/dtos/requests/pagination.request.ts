import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { OrderDirectionEnum } from 'src/shared/enums/order-direction.enum';

export class PaginationRequest {
  @ApiProperty()
  @IsNotEmpty({ message: 'Página é obrigatória.' })
  page: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'Tamanho da página é obrigatório.' })
  pageSize: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'Coluna de ordenação é obrigatória.' })
  orderColumn: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'Direção de ordenação é obrigatória.' })
  orderDirection: OrderDirectionEnum;
}
