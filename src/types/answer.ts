export interface MessageAnswer {
    content: string;
    type: "text" | "voice" | "video" | "video-note" | "image" | "doc";
}

export interface MessageButton {
    text: string;
    callback_name: string;
    fixed: boolean; // Если свойство true, то кнопка закреплена за каждым answer
}

export class Answer {
    private _answers: MessageAnswer[];
    private _buttons: MessageButton[];

    constructor(answers: MessageAnswer[], buttons: MessageButton[] = []) {
        this._answers = answers;
        this._buttons = buttons;
    }

    get answers(): MessageAnswer[] {
        return this._answers;
    }

    get buttons(): MessageButton[] {
        return this._buttons;
    }

    message_by_index(index: number): MessageAnswer {
        return this._answers[index];
    }

    button_by_index(index: number): MessageButton {
        return this._buttons[index];
    }
}