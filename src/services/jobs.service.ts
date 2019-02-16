
import data from "../assets/jobs.json"
import Job from '../models/job';

class JobsService{

    constructor(){}

    get(): Promise<Job[]>{
        return Promise.resolve(data.jobs as Job[]);
    }
}

export const jobsService = new JobsService(); 