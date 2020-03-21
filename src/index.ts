import { User } from './models/User';

const user = new User({ name: 'myName', age: 20 });

user.set({name:'newName'})

console.log(user.get('name'));
console.log(user.get('age'));


user.on('change', ()=>{
    console.log('change 1');
})

user.on('change', ()=>{
    console.log('change 2');
})

user.on('save', ()=>{
    console.log('save was triggered');
})

user.trigger('save');