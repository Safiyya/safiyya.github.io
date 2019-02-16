export default class Job {
    company: {
        name: string,
        url: string,
        crunchbase: string,
        picture: string
    };
    title: string;

    tasks: Array<{
        header: string,
        details: string[],
        technologies: string[]
    }>;
    start: string;
    end: string;
    location: {
        country: string,
        city: string
    };
}