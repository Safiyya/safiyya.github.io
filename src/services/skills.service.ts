
import data from "../assets/skills.json";
import Skill from "../models/skill";

class SkillsService {

    public get(): Skill[] {
        (data.skills as Skill[]).forEach((s: Skill) => {
            s.resolvedIconUrl = require(`@/assets/${s.iconUrl}`);
            s.technologies.sort(this.sortBy('level', 'desc'));
        });

        return data.skills as Skill[];
    }

    private sortBy(key: string, order: 'asc' | 'desc') {
        return (a: any, b: any) => (
            a[key] > b[key])
            ? (order === 'asc' ? 1 : -1)
            : ((b[key] > a[key])
                ? (order === 'asc' ? -1 : 1)
                : 0);
    };
}

export const skillsService = new SkillsService();
