
import data from "../assets/jobs.json";
import Job from "../models/job";

class JobsService {

    public get(): Job[] {
        const sorted = (data.jobs as Job[]).sort((a: Job, b: Job) => {
            return a.start < b.start ? 1 : -1;
        });
        sorted.forEach((j: Job) => {
            Object.assign(j, { isSelected: false });
            Object.assign(j, { isUnselected: false });
        });
        return sorted;
    }

    public filterByTechnologies(technologies: string[]): Job[] {
        return (data.jobs as Job[]).filter((j:Job)=>{
                return this.intersection([j.technologies, technologies]).length > 0
            })
        
    }

    private intersection(arrays: any[][]): any[]{
        return arrays.reduce((a, b) => a.filter(c => b.includes(c)))
    }

}

export const jobsService = new JobsService();
