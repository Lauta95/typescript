// Autobind
function autobind(
    // para ignorar target y methodName agregar underscores para anularlos:
    _: any,
    _2: string,
    descriptor: PropertyDescriptor
) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };
    return adjDescriptor;
};

// class
class ProjectInput {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;

    constructor() {
        // Se usa Type Casting para decirle a JavaScript que vamos a usar un elemento HTML. Tambien se puede usar <...>
        this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
        this.hostElement = document.getElementById('app')! as HTMLDivElement;

        const importedNode = document.importNode(
            this.templateElement.content,
            true
        );

        this.element = importedNode.firstElementChild as HTMLFormElement;
        this.element.id = 'user-input';

        this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
        this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement;
        this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement;

        this.configure();
        this.attach();
    }
    // TUPLE: [] 
    private gatherUserInput(): [string, string, number] | void {
        const enteredTitle = this.titleInputElement.value;
        const enteredDescription = this.descriptionInputElement.value;
        const enteredPeople = this.peopleInputElement.value;

        if (
            // Condicional para evitar que queden inputs en blanco.
            enteredTitle.trim().length === 0 ||
            enteredDescription.trim().length === 0 ||
            enteredPeople.trim().length === 0
        ) {
            alert('no blank spaces!');
            return;
            // aca para que acepte el return y no meter un error handler: se mete undefined en el TUPLE, al ser TS se usa void.
        } else {
            return [enteredDescription, enteredPeople, +enteredTitle]
            // el + es como un parseFloat para convertir el input a number, como lo es requerido por el TUPLE
        }
    }

    // metodo para borrar todos los inputs una vez submiteado
    private clearInput() {
        this.titleInputElement.value='';
        this.descriptionInputElement.value='';
        this.peopleInputElement.value='';
        
    }

    @autobind
    private submitHandler(event: Event) {
        event.preventDefault();
        const userInput = this.gatherUserInput();
        // para indicar a TS que estamos hablando del tuple le tenemos que mandar array porque en JS un TUPLE es un array
        if (Array.isArray(userInput)) {
            const [title, desc, people] = userInput;
            console.log(title, desc, people);
            this.clearInput()
        }
    }

    private configure() {
        this.element.addEventListener('submit', this.submitHandler);
    }

    private attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.element);
    }
}

const prjInput = new ProjectInput();