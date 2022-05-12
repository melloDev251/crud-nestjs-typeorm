import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Feedback } from 'src/entity/feedback.entity';
import { FeedbackService } from './feedbacks.service';

@Controller()
export class FeedbackController {
  constructor(private feedbackService: FeedbackService) {}

  @Get()
  getAllFeedbacks(): Promise<Feedback[]> {
    return this.feedbackService.getFeedbacks();
  }

  @Post()
  create(@Body() feedback: Feedback) {
    console.log(feedback);

    return this.feedbackService.addFeedback(feedback);
  }

  @Get(':id')
  getOneFeedback(@Param('id') id: string): Promise<Feedback> {
    return this.feedbackService.findOne(Number(id));
  }

  @Patch(':id')
  updateFeedback(
    @Param('id') id: string,
    @Body() feedback: Feedback,
  ): Promise<Feedback> {
    return this.feedbackService.update(Number(id), feedback);
  }

  @Delete(':id')
  deleteFeedback(@Param('id') id: string) {
    return this.feedbackService.delete(Number(id));
  }
}
