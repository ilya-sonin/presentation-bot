import { describe, expect, it } from "@jest/globals";

import type { MessageAnswer } from "../answer";
import { Answer } from "../answer";

describe('answer type test', () => {
    it ('create answers array', () => {
        const message1: MessageAnswer = { type: "text", content: 'Мое первое сообщение! \n Привет мир!' };
        const message2: MessageAnswer = { type: "voice", content: 'voice blob' };
        const firstAnswer = new Answer([
            message1,
            message2
        ])

        expect(firstAnswer.message_by_index(1)).toBe(message2);
    });
});