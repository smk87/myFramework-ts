import { User } from './models/User';

const user = new User({ id: 1, name: 'newer name', age: 0 });

user.on('save', () => {
    console.log(user);
});

user.save();

// Reminder on how 'this' work in js
// 'this' refers to left side of function call. i.e: user.get(); this=user instance
