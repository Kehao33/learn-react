class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    say(){
        console.log('这是Person中的say方法');
    }
}

//使用extends实现继承 写的方式： class 子类 extends 父类
class Chinese extends Person{
    constructor(name,age,color,languge){
        super(name,age);  //此处的name,age传递给了父类来进行初始化
        //注意：当时有extends关键字实现了继承，子类的constructor构造函数中，必须显示调用super（）方法，
        //这个super表示父类中constructor的引用
        this.color = color;
        this.languge = languge;
    }
}

var p = new Person('keja',20);
console.log(p);

var chinese = new Chinese('马云',23,'黄种人','中英皆备');
chinese.say();
//静态的属性也被继承了，但是需要 子类类名.父类静态属性 或者 父类类名.父类静态方法来调用