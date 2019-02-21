
import data from "../assets/jobs.json"
import Job from '../models/job';

class JobsService {

    get(): Promise<Job[]> {
        let sorted = (data.jobs as Job[]).sort((a: Job, b: Job) => {
            return a.start < b.start ? 1 : -1
        })
        sorted.forEach(j => {
            Object.assign(j, {isSelected : false});
            Object.assign(j, {isUnselected : false})
          })
        return Promise.resolve(sorted);
    }
}

export const jobsService = new JobsService(); 