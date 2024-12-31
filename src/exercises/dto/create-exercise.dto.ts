import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

enum Difficulty {
  beginner = 'Beginner',
  intermediate = 'Intermediate',
  advanced = 'Advanced',
}
export class CreateExerciseDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsEnum(Difficulty)
  @IsNotEmpty()
  difficulty: string;
}
