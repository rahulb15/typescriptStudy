var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var a = "Hello World";
console.log(a);
var b = 10;
console.log(b);
var c = true;
console.log(c);
var d = "Hello World";
console.log(d);
d = 10;
console.log(d);
d = true;
console.log(d);
var e = [1, 2, 3, 4, 5];
console.log(e);
var f = [1, 2, 3, 4, 5, "Hello World", true];
console.log(f);
var g = [1, 2, 3, 4, 5];
console.log(g);
var h = [1, 2, 3, 4, 5, "Hello World", true];
console.log(h);
var i = { name: "John", age: 30 };
console.log(i);
var j = { name: "John", age: 30 };
console.log(j);
var k = [{ name: "John", age: 30 }, { name: "Mary", age: 25 }];
console.log(k);
var l = [{ name: "John", age: 30 }, { name: "Mary", age: 25 }];
console.log(l);
var m = ["Hello World", 10, true];
console.log(m);
var n = [["Hello World", 10, true], ["Hello World", 10, true]];
console.log(n);
var o = [["Hello World", 10, true], ["Hello World", 10, true]];
console.log(o);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var p = Color[1];
console.log(p);
var Status;
(function (Status) {
    Status[Status["Active"] = 1] = "Active";
    Status[Status["Inactive"] = 0] = "Inactive";
})(Status || (Status = {}));
;
var q = Status.Inactive;
console.log(q);
var r = function () {
    console.log("Hello World");
};
r();
var s = function (a, b) {
    return a + b;
};
console.log(s(10, 20));
var t = function (a, b) { return a + b; };
console.log(t(10, 20));
var u = {
    name: "John",
    age: 30,
    sayHello: function () {
        return "Hello World";
    }
};
console.log(u);
var v = {
    name: "John",
    age: 30,
    address: "USA",
    sayHello: function () {
        return "Hello World";
    }
};
console.log(v);
//class
var Person = /** @class */ (function () {
    function Person(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    Person.prototype.sayHello = function () {
        return "Hello World";
    };
    return Person;
}());
var w = new Person("John", 30);
console.log(w);
var x = new Person("John", 30, "USA");
console.log(x);
//inheritance
var Person1 = /** @class */ (function () {
    function Person1(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    Person1.prototype.sayHello = function () {
        return "Hello World";
    };
    return Person1;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, address, salary) {
        var _this = _super.call(this, name, age, address) || this;
        _this.salary = salary;
        return _this;
    }
    Employee.prototype.sayHello = function () {
        return "Hello World";
    };
    return Employee;
}(Person1));
var y = new Employee("John", 31, "USA", 1000);
console.log(y);
//access modifiers
var Person2 = /** @class */ (function () {
    function Person2(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    Person2.prototype.sayHello = function () {
        return "Hello World";
    };
    return Person2;
}());
var Employee1 = /** @class */ (function (_super) {
    __extends(Employee1, _super);
    function Employee1(name, age, address, salary) {
        var _this = _super.call(this, name, age, address) || this;
        _this.salary = salary;
        return _this;
    }
    Employee1.prototype.sayHello = function () {
        return "Hello World";
    };
    return Employee1;
}(Person2));
var z = new Employee1("John", 31, "USA", 1000);
console.log(z);
console.log(z.name);
// console.log(z.age);
// console.log(z.address);
//type assertion
var aa = "Hello World";
var bb = aa.toUpperCase();
console.log(bb);
var cc = "Hello World";
var dd = cc.toUpperCase();
console.log(dd);
//generics
function echo(arg) {
    return arg;
}
var ee = echo("Hello World");
console.log(ee);
var ff = echo(10);
console.log(ff);
var gg = echo(true);
console.log(gg);
var hh = echo("Hello World");
console.log(hh);
hh = 10;
console.log(hh);
hh = true;
console.log(hh);
var ii = echo([1, 2, 3, 4, 5]);
console.log(ii);
ii = ["Hello World", 10, true];
console.log(ii);
var jj = echo([1, 2, 3, 4, 5]);
console.log(jj);
jj = ["Hello World", 10, true];
console.log(jj);
var kk = echo({ name: "John", age: 30 });
console.log(kk);
kk = { name: "Mary", age: 25 };
console.log(kk);
//Union Types
var mm;
mm = "Hello World";
console.log(mm);
mm = 10;
console.log(mm);
mm = true;
console.log(mm);
//Type Guards
var nn;
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
var oo;
oo = "Hello World";
console.log(oo);
oo = 10;
console.log(oo);
//Null and Undefined
var pp;
pp = "Hello World";
console.log(pp);
pp = null;
console.log(pp);
pp = undefined;
console.log(pp);
//Never
function error(message) {
    throw new Error(message);
}
function fail() {
    return error("Something failed");
}
function infiniteLoop() {
    while (true) {
    }
}
