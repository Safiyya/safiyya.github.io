export default class Skill {
    public category: string;
    public iconUrl: string;
    public tagline: string;
    public summary: string;
    public technologies: Array<{
        name: string,
        level: number
    }>;

    public isSelected: boolean;
    public resolvedIconUrl: string;
}

