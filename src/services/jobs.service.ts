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

  public getFrontEndJobs(): Job[] {
    return this.get().filter(
      (j: Job) =>
        j.company.name === "Kamkalima" ||
        j.company.name === "Gretta" ||
        j.company.name === "Optinac"
    );
  }

  public getDesignJobs(): Job[] {
    return this.get().filter(
      (j: Job) =>
        j.company.name === "NG Martin" ||
        j.company.name === "Gordon Finlayson" ||
        j.company.name === "Christos Philosophy"
    );
  }

  public getBackendJobs(): Job[] {
    return this.get().filter(
      (j: Job) =>
        j.company.name === "DataShaka" ||
        j.company.name === "Eurofins" ||
        j.company.name === "Virtuoz"
    );
  }

  public filterByTechnologies(technologies: string[]): Job[] {
    return this.get().filter((j: Job) => {
      return this.intersection([j.technologies, technologies]).length > 0;
    });
  }

  private intersection(arrays: any[][]): any[] {
    return arrays.reduce((a: any, b: any) =>
      a.filter((c: any) => b.includes(c))
    );
  }
}

export const jobsService = new JobsService();
