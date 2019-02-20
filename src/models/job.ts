export default class Job {
    company: {
        name: string,
        url: string,
        industry:string,
        crunchbase: string,
        picture: string
    };
    freelance:boolean;
    title: string;

    tasks: Array<{
        header: string
    }>;

    technologies: string[];
    
    start: string;
    end: string;
    location: {
        country: string,
        city: string
    };
}