import { Button } from '../factory/elements/Button';
import { Input } from '../factory/elements/Input';

export abstract class BasePage {
    protected createButton(selector: string): Button {
        return new Button(selector);
    }

    protected createInput(selector: string): Input {
        return new Input(selector);
    }

    public abstract visit(): void;
} 