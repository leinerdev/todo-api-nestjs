import { Field, InputType, Int } from '@nestjs/graphql';
import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';

@InputType()
export class UpdateTodoInput {
  @Field(() => Int, { description: 'ID of the todo' })
  @IsInt()
  @Min(1)
  @IsNotEmpty()
  id: number;

  @Field(() => String, {
    description: 'What needs to be done?',
    nullable: true,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  @IsOptional()
  description?: string;

  @Field(() => Boolean, {
    description: 'Is it done?',
    nullable: true,
  })
  @IsOptional()
  @IsBoolean()
  done?: boolean;
}
