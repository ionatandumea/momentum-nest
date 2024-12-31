import { Module } from '@nestjs/common';
import { ExercisesModule } from './exercises/exercises.module';
import { ConfigModule } from '@nestjs/config';
import { validate } from './env.validation';

@Module({
  imports: [
    ExercisesModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validate,
    }),
  ],
})
export class AppModule {}
