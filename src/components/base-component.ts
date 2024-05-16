    // class de las bases
    // se usa abstract para asegurarnos que no pueda ser instanceada.
    export abstract class Component<T extends HTMLElement, U extends HTMLElement> {
        templateElement: HTMLTemplateElement;
        hostElement: T;
        element: U;

        constructor(
            templateId: string,
            hostElementId: string,
            insertAtStart: boolean,
            newElementId?: string

        ) {
            this.templateElement = document.getElementById(templateId)! as HTMLTemplateElement;
            this.hostElement = document.getElementById(hostElementId)! as T;

            const importedNode = document.importNode(
                this.templateElement.content,
                true
            );

            this.element = importedNode.firstElementChild as U;
            if (newElementId) {
                this.element.id = newElementId;
            }
            this.attach(insertAtStart);
        }

        private attach(insertAtBeginning: boolean) {
            this.hostElement.insertAdjacentElement(insertAtBeginning ? 'afterbegin' : 'beforeend', this.element);
        }
        // para poder agregarlos y tenerlos disponibles pero desactivados. Para que se entienda para que el Componen class es.
        abstract configure(): void;
        abstract renderContent(): void;
    }