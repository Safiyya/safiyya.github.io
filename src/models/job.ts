export default class Job {
    public company: {
        name: string,
        url: string,
        industry: string,
        crunchbase: string,
        picture: string,
        vision:string
    };
    public freelance: boolean;
    public title: string;

    public tasks: Array<{
        header: string
    }>;

    public technologies: string[];

    public start: string;
    public end: string;
    public location: {
        country: string,
        city: string
    };


    public isSelected: boolean =false;
    public isUnselected: boolean = false;
}
