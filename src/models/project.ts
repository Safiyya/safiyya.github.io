export default class Project {
    public name: string;
    public tagline: string;
    public link: {
        label: string,
        url: string
    }
    public summary: string[];
    public images: string[];
    public isSelected?:boolean=false;
}
