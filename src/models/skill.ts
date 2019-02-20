export default class Skill {
    category: string
    tagline:string
    summary:string
    technologies: Array<{
        name: string,
        level:number
    }>;
}