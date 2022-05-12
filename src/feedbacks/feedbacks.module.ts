import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { FeedbackProvider } from 'src/providers/feedback.provider';
import { FeedbackController } from './feedbacks.controller';
import { FeedbackService } from './feedbacks.service';

@Module({
  imports: [DatabaseModule],
  controllers: [FeedbackController],
  providers: [...FeedbackProvider, FeedbackService],
})
export class FeedbacksModule {}
