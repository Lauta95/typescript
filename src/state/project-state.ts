namespace App {
    // project state managment
    type Listener<T> = (items: T[]) => void;
    class State<T> {
        // protected es para inheritance clases, no se puede seguir entrando desde afuera de la clase, pero se puede entrar desde cualquier clase que hace inheritancia 
        protected listeners: Listener<T>[] = [];

        addListener(listenerFn: Listener<T>) {
            this.listeners.push(listenerFn);
        }
    }

    export class ProjectState extends State<Project> {
        private projects: Project[] = [];
        // ?
        private static instance: ProjectState;
        // usando singletons
        private constructor() {
            super();
        }

        static getInstance() {
            if (this.instance) {
                return this.instance;
            }
            this.instance = new ProjectState();
            return this.instance;
        }

        addProject(title: string, description: string, numOfPeople: number) {
            const newProject = new Project(Math.random().toString(),
                title,
                description,
                numOfPeople,
                ProjectStatus.Active
            );
            this.projects.push(newProject);
            this.updateListeners();
        }

        moveProject(projectId: string, newStatus: ProjectStatus) {
            const project = this.projects.find(prj => prj.id === projectId);
            if (project && project.status !== newStatus) {
                project.status = newStatus;
                this.updateListeners();
            }
        }

        private updateListeners() {
            for (const listenerFn of this.listeners) {
                listenerFn(this.projects.slice());
            }
        }
    }

    export const projectState = ProjectState.getInstance();
}
