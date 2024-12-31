import { Module } from '@nestjs/common';
import { ExercisesService } from './exercises.service';
import { ExercisesController } from './exercises.controller';
import { SupabaseService } from 'src/supabase/supabase.service';

@Module({
  controllers: [ExercisesController],
  providers: [ExercisesService, SupabaseService],
})
export class ExercisesModule {}
