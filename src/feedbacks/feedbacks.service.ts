import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Feedback } from 'src/entity/feedback.entity';
import { DeleteResult, InsertResult, Repository } from 'typeorm';

@Injectable()
export class FeedbackService {
  constructor(
    @Inject('FEEDBACKS_REPOSITORY')
    private feedbackRepository: Repository<Feedback>,
  ) {}

  async getFeedbacks() {
    return this.feedbackRepository.find();
  }

  async addFeedback(feedback: Feedback): Promise<InsertResult> {
    return this.feedbackRepository.insert(feedback);
  }

  async findOne(id: number): Promise<Feedback> {
    return this.feedbackRepository.findOne({ where: { id: id } });
  }

  async update(id: number, feedback: Feedback): Promise<Feedback> {
    const feddbackToUpdate = await this.findOne(id);
    if (feddbackToUpdate === undefined) {
      throw new NotFoundException();
    }
    await this.feedbackRepository.update(id, feedback);
    return this.findOne(id);
  }

  async delete(id: number): Promise<DeleteResult> {
    const feddbackToUpdate = await this.findOne(id);
    if (feddbackToUpdate === undefined) {
      throw new NotFoundException();
    }
    return this.feedbackRepository.delete(id);
  }
}
