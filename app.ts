let a : string = "Hello World";
console.log(a);
let b : number = 10;
console.log(b);
let c : boolean = true;
console.log(c);
let d : any = "Hello World";
console.log(d);
d = 10;
console.log(d);
d = true;
console.log(d);
let e : number[] = [1,2,3,4,5];
console.log(e);
let f : any[] = [1,2,3,4,5,"Hello World",true];
console.log(f);
let g : Array<number> = [1,2,3,4,5];
console.log(g);
let h : Array<any> = [1,2,3,4,5,"Hello World",true];
console.log(h);
let i : object = {name:"John",age:30};
console.log(i);
let j : {name:string,age:number} = {name:"John",age:30};
console.log(j);
let k : {name:string,age:number}[] = [{name:"John",age:30},{name:"Mary",age:25}];
console.log(k);
let l : Array<{name:string,age:number}> = [{name:"John",age:30},{name:"Mary",age:25}];
console.log(l);
let m : [string,number,boolean] = ["Hello World",10,true];
console.log(m);
let n : [string,number,boolean][] = [["Hello World",10,true],["Hello World",10,true]];
console.log(n);
let o : Array<[string,number,boolean]> = [["Hello World",10,true],["Hello World",10,true]];
console.log(o);
enum Color {Red,Green,Blue};
let p : string = Color[1];
console.log(p);
enum Status {Active=1,Inactive=0};
let q : Status = Status.Inactive;
console.log(q);
let r = (): void => {
    console.log("Hello World");
}
r();
let s = (a: number, b: number): number => {
    return a + b;
}
console.log(s(10,20));
let t = (a: number, b: number): number => a + b;
console.log(t(10,20));

//interface
interface PersonInterface {
    name: string;
    age: number;
    address?: string;//optional
    sayHello: () => string;
}
let u : PersonInterface = {
    name: "John",
    age: 30,
    sayHello: (): string => {
        return "Hello World";
    }
}
console.log(u);
let v : PersonInterface = {
    name: "John",
    age: 30,
    address: "USA",
    sayHello: (): string => {
        return "Hello World";
    }
}
console.log(v);

//class
class Person {
    name: string;
    age: number;
    address?: string;//optional
    constructor(name: string, age: number, address?: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    sayHello(): string {
        return "Hello World";
    }
}
let w : Person = new Person("John",30);
console.log(w);
let x : Person = new Person("John",30,"USA");
console.log(x);

//inheritance
class Person1 {
    name: string;
    age: number;
    address?: string;//optional
    constructor(name: string, age: number, address?: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    sayHello(): string {
        return "Hello World";
    }
}
class Employee extends Person1 {
    salary: number;
    constructor(name: string, age: number, address: string, salary: number) {
        super(name,age,address);
        this.salary = salary;
    }
    sayHello(): string {
        return "Hello World";
    }
}
let y : Employee = new Employee("John",31,"USA",1000);
console.log(y);

//access modifiers
class Person2 {
    public name: string;
    protected age: number;
    private address: string;
    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    sayHello(): string {
        return "Hello World";
    }
}
class Employee1 extends Person2 {
    salary: number;
    constructor(name: string, age: number, address: string, salary: number) {
        super(name,age,address);
        this.salary = salary;
    }
    sayHello(): string {
        return "Hello World";
    }
}
let z : Employee1 = new Employee1("John",31,"USA",1000);
console.log(z);
console.log(z.name);
// console.log(z.age);
// console.log(z.address);

//type assertion
let aa : any = "Hello World";
let bb : string = (<string>aa).toUpperCase();
console.log(bb);
let cc : any = "Hello World";
let dd : string = (cc as string).toUpperCase();
console.log(dd);

//generics
function echo<T>(arg: T): T {
    return arg;
}
let ee : string = echo("Hello World");
console.log(ee);
let ff : number = echo(10);
console.log(ff);
let gg : boolean = echo(true);
console.log(gg);
let hh : any = echo("Hello World");
console.log(hh);
hh = 10;
console.log(hh);
hh = true;
console.log(hh);
let ii : any[] = echo([1,2,3,4,5]);
console.log(ii);
ii = ["Hello World",10,true];
console.log(ii);
let jj : Array<any> = echo([1,2,3,4,5]);
console.log(jj);
jj = ["Hello World",10,true];
console.log(jj);
let kk : object = echo({name:"John",age:30});
console.log(kk);
kk = {name:"Mary",age:25};
console.log(kk);



//Union Types
let mm : string | number | boolean;
mm = "Hello World";
console.log(mm);
mm = 10;
console.log(mm);
mm = true;
console.log(mm);

//Type Guards
let nn : string | number | boolean;
nn = "Hello World";
if (typeof nn === "string") {
    console.log(nn.toUpperCase());
}
nn = 10;
if (typeof nn === "number") {
    console.log(nn.toFixed(2));
}
nn = true;
if (typeof nn === "boolean") {
    console.log(nn.valueOf());
}

//Type Aliases
type StringOrNumber = string | number;
let oo : StringOrNumber;
oo = "Hello World";
console.log(oo);
oo = 10;
console.log(oo);

//Null and Undefined
let pp : string | null | undefined;
pp = "Hello World";
console.log(pp);
pp = null;
console.log(pp);
pp = undefined;
console.log(pp);

//Never
function error(message: string): never {
    throw new Error(message);
}
function fail() {
    return error("Something failed");
}
function infiniteLoop(): never {
    while (true) {
    }
}




