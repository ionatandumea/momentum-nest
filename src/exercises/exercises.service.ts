import { Injectable } from '@nestjs/common';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { SupabaseService } from 'src/supabase/supabase.service';
import { SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class ExercisesService {
  private supabaseClient: SupabaseClient;

  constructor(private supabaseServie: SupabaseService) {
    this.supabaseClient = this.supabaseServie.getSupabase();
  }

  async create(createExerciseDto: CreateExerciseDto) {
    const { data, error } = await this.supabaseClient
      .from('exercises')
      .insert(createExerciseDto)
      .select();

    if (error) throw new Error(error.message);

    return data;
  }

  async findAll() {
    const { data, error } = await this.supabaseClient
      .from('exercises')
      .select('*');

    if (error) throw new Error(error.message);

    return data;
  }

  async findOne(id: string) {
    const { data, error } = await this.supabaseClient
      .from('exercises')
      .select('*')
      .eq('id', id);

    if (error) throw new Error(error.message);

    return data;
  }

  async update(id: string, updateExerciseDto: UpdateExerciseDto) {
    const { data, error } = await this.supabaseClient
      .from('exercises')
      .update(updateExerciseDto)
      .eq('id', id);

    if (error) throw new Error(error.message);

    return data;
  }

  async remove(id: string) {
    const { data, error } = await this.supabaseClient
      .from('exercises')
      .delete()
      .eq('id', id);

    if (error) throw new Error(error.message);

    return data;
  }
}
