
import data from "../assets/skills.json";
import Skill from "../models/skill";

class SkillsService {

    public get(): Promise<Skill[]> {
        (data.skills as Skill[]).forEach((s: Skill) => {
            s.resolvedIconUrl = require(`@/assets/${s.iconUrl}`);
            s.isSelected = false;
        });

        return Promise.resolve(data.skills as Skill[]);
    }
}

export const skillsService = new SkillsService();
