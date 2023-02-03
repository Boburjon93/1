console.log('js');
//Obektlar
/*const person1=Object.create({},
    {
    firstName:{
        value:Bobur
        writable:true       

    },
    lastName: {
        value:'Ahmedov'
    };
    age:{
        value:25
    }
});
    person1.age=24
console.log(person1)
//
const person2 = {
    firstName:'Jamolbek',
    age:27
    lastName:'Ikromov'
}
for(const key in person2) {
    console.log(key)
    if(Object.hasOwnproperty.call(person2,key)) {
        const element =person2[key];
       //console.log(element)
    }
}

person2.age =28
person2['age'] =29
console.log(person2)*/


function Person(firstName,lastName,age){
    this.firstName =firstName
    this.lastName =lastName
    this.age =age
}

const p1 = new Person('Bobur', 'Tolip', 25)
const p2 = new Person('Islom', 'Qobil', 25)
console.log(p1);
console.log(firstName)    