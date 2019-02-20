
import data from "../assets/jobs.json"
import Job from '../models/job';

class JobsService {

    get(): Promise<Job[]> {
        let sorted = (data.jobs as Job[]).sort((a: Job, b: Job) => {
            return a.start < b.start ? 1 : -1
        })
        return Promise.resolve(sorted);
    }
}

export const jobsService = new JobsService(); 