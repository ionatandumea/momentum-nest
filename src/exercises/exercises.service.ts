import { Injectable } from '@nestjs/common';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { ConfigService } from '@nestjs/config';
import { SupabaseService } from 'src/supabase/supabase.service';
import { SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class ExercisesService {
  private supabaseClient: SupabaseClient;

  constructor(
    private configService: ConfigService,
    private supabaseServie: SupabaseService,
  ) {
    this.supabaseClient = this.supabaseServie.getSupabase();
  }

  create(createExerciseDto: CreateExerciseDto) {
    return 'This action adds a new exercise';
  }

  async findAll() {
    const { data, error } = await this.supabaseClient
      .from('exercises')
      .select('*');

    if (error) throw new Error(error.message);

    return data;
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
