import { Entity, ManyToOne } from 'typeorm';
import { Answer, MockTestResult, Question } from '.';
import BaseEntity from './base.entity';

@Entity({
  name: 'mock_test_result_details',
})
export class MockTestResultDetail extends BaseEntity {
  @ManyToOne(() => MockTestResult)
  mock_test_result: number;

  @ManyToOne(() => Question)
  question: Question;

  @ManyToOne(() => Answer)
  selected_answer: Answer;
}
