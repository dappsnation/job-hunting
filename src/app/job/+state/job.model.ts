import { ID } from '@datorama/akita';

export interface Job {
  id: ID;
  createdBy: string;
  title: string;
}

/**
 * A factory function that creates Job
 */
export function createJob(params: Partial<Job>) {
  return {
  } as Job;
}
