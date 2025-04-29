import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Aggregations of the todos' })
export class AggregationsType {
  @Field(() => Int)
  total: number;

  @Field(() => Int)
  pending: number;

  @Field(() => Int)
  done: number;
}
