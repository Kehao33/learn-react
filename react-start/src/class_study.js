//以function的方式来构造类
function Person(name,age){
    this.name=name;
    this.age=age;
}
//给Person来添加属性
Person.info = 'className.属性 来给类添加属性';
console.log(Person.info);
//给Person方法：通过显示原型来添加，但是这种方法的调用只能通过new一个实例才能调用此方法
Person.prototype.say = function(){
    console.log('通过显示原型来添加方法')
}
var p1 = new Person('zhangsan',23);
console.log(p1)
//=============================================================

//class后边跟上类名，类名后边没有小括号，直接跟着{}
 class Per {
    //在每个class类内部，都会有一个constructor构造器，如果没有显示定义构造器，那么类内部默认都有个看不见的constructor
    //constructor的作用，就好比咋们执勤啊的function Person(){}
    //每当使用new关键字创建class类实例的时候，必然会优先调用constructor构造器
    //显示定义构造器
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    say(){
        console.log('在class类部定义方法，方法名字(){code}')
        console.log('实例方法调用，只能通过new出来的实例对象才能调用它')
    }

    static sayHello(){
        console.log('static修饰的静态方法挂在构造器上，直接用 类名.方法就可以调用')
    }
    //由class定义的类，类部只能有方法（以static修饰的是静态方法，没有修饰词的是实例方法，需要实例才能调用它，和以static修饰的静态属性
    static info = '这是一个静态属性，因为有static来修饰'
 }

 var p2 = new Per('keja',20);
 console.log(p2);
 console.log('通过class类部用static修饰的静态变量，用类名.属性就可以调用了');
 console.log(Per.info);