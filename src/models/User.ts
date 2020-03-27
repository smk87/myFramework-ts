import { Eventing } from './Eventing';
import { Sync } from './Sync';
import { Atrribute } from './Attributes';

export interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

export class User {
    public events: Eventing = new Eventing();
    public sync: Sync<UserProps> = new Sync('http://localhost:1234/users');
    public attributes: Atrribute<UserProps>;

    constructor(attrs: UserProps) {
        this.attributes = new Atrribute<UserProps>(attrs);
    }
}
