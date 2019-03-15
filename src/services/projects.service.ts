
import data from "@/assets/projects.json";
import Project from "@/models/project";

class ProjectsService {

    public get(): Project[] {
        // (data.projects as Project[]).forEach((p:Project) => p.isSelected = false);
        return (data.projects as Project[]);
    }
}

export const projectsService = new ProjectsService();
