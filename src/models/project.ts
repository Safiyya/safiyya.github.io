export default class Project {
    public name: string;
    public tagline: string;
    public link: {
        label: string,
        url: string, 
        image?:string
    }
    public summary: string[];
    public images: string[];
    public isSelected?:boolean=false;
}
