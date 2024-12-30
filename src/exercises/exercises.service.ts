import { Injectable } from '@nestjs/common';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';

@Injectable()
export class ExercisesService {
  create(createExerciseDto: CreateExerciseDto) {
    return 'This action adds a new exercise';
  }

  findAll() {
    return [
      {
        id: 1,
        name: 'Pushups',
        description:
          'Pushups are a common exercise for strengthening the core and upper body.',
        difficulty: 'Intermediate',
      },
      {
        id: 2,
        name: 'Squats',
        description:
          'Squats are a common exercise for strengthening the lower body and core.',
        difficulty: 'Beginner',
      },
      {
        id: 3,
        name: 'Planks',
        description:
          'Planks are a common exercise for strengthening the core and upper body.',
        difficulty: 'Intermediate',
      },
      {
        id: 4,
        name: 'Lunges',
        description:
          'Lunges are a common exercise for strengthening the lower body and core.',
        difficulty: 'Beginner',
      },
      {
        id: 5,
        name: 'Burpees',
        description:
          'Burpees are a common exercise for strengthening the core and upper body.',
        difficulty: 'Advanced',
      },
    ];
  }

  findOne(id: number) {
    return `This action returns a #${id} exercise`;
  }

  update(id: number, updateExerciseDto: UpdateExerciseDto) {
    return `This action updates a #${id} exercise`;
  }

  remove(id: number) {
    return `This action removes a #${id} exercise`;
  }
}
