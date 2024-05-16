import { Component } from './base-component.js';
import {Validatable, validate} from '../utils/validation.js';
import { autobind } from '../decorators/autobind.js';
import {projectState} from '../state/project-state.js'


// class de los inputs
    export class ProjectInput extends Component<HTMLDivElement, HTMLElement> {

    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;

    constructor() {
        super('project-input', 'app', true, 'user-input');
        this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
        this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement;
        this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement;
        this.configure();
    }

    configure() {
        this.element.addEventListener('submit', this.submitHandler);
    }

    renderContent() { }

    // TUPLE: [] 
    private gatherUserInput(): [string, string, number] | void {
        const enteredTitle = this.titleInputElement.value;
        const enteredDescription = this.descriptionInputElement.value;
        const enteredPeople = this.peopleInputElement.value;
        // aca se toma el input y se usa la class validatable
        const titleValidatable: Validatable = {
            value: enteredTitle,
            required: true
        };
        const descriptionValidatable: Validatable = {
            value: enteredDescription,
            required: true,
            minLength: 5
        };
        const peopleValidatable: Validatable = {
            value: +enteredPeople,
            required: true,
            min: 1,
            max: 5
        };

        if (
            // Condicional para evitar que queden inputs en blanco.
            // enteredTitle.trim().length === 0 ||
            // enteredDescription.trim().length === 0 ||
            // enteredPeople.trim().length === 0

            // usando validations asi aplicamos TS en lugar de plain JS. arriba está la logica de las validations
            !validate(titleValidatable) ||
            !validate(descriptionValidatable) ||
            !validate(peopleValidatable)
        ) {
            alert('no blank spaces!');
            return;
            // aca para que acepte el return y no meter un error handler: se mete undefined en el TUPLE, al ser TS se usa void.
        } else {
            return [enteredTitle, enteredDescription, +enteredPeople]
            // el + es como un parseFloat para convertir el input a number, como lo es requerido por el TUPLE
        }
    }

    // metodo para borrar todos los inputs una vez submiteado
    private clearInput() {
        this.titleInputElement.value = '';
        this.descriptionInputElement.value = '';
        this.peopleInputElement.value = '';
    }

    @autobind
    private submitHandler(event: Event) {
        event.preventDefault();
        const userInput = this.gatherUserInput();
        // para indicar a TS que estamos hablando del tuple le tenemos que mandar array porque en JS un TUPLE es un array
        if (Array.isArray(userInput)) {
            const [title, desc, people] = userInput;
            projectState.addProject(title, desc, people);
            this.clearInput()
        }
    }
}