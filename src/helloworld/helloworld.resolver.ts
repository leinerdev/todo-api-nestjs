import { Args, Float, Int, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class HelloworldResolver {
  @Query(() => String, {
    name: 'hello',
    description: 'Hola mundo es lo que retorna',
  })
  public helloWorld(): string {
    return 'Hola mundo';
  }

  @Query(() => Float, {
    name: 'randomNumber',
    description: 'Devuelve un numero aleatorio entre 0 y 1',
  })
  public getRandomNumber(): number {
    return Math.random() * 100;
  }

  @Query(() => Int, {
    name: 'randomNumberFromZeroTo',
    description:
      'Devuelve un numero aleatorio entre 0 y el numero que se le pase',
  })
  public getRandomFromZeroTo(
    @Args('max', { type: () => Int }) max: number,
  ): number {
    return Math.floor(Math.random() * max);
  }
}
