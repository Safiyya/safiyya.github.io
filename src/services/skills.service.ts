
import data from "../assets/skills.json"
import Skill from '../models/skill';

class SkillsService {

    get(): Promise<Skill[]> {
  
        return Promise.resolve(data.skills as Skill[]);
    }
}

export const skillsService = new SkillsService(); 