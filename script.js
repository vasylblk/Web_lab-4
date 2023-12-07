/*Завдання 1*/
function task1() {
    const Name = {
        name: "TURFIRMA",
        address: "ADDRESS",
        number_phone: "NUMBER"
    };

    alert(`Create object 'TURFIRMA'.\n Name: ${Name.name}\n Address: ${Name.address}\n Mobile Number ${Name.number_phone}`);
    return Number;
}
/* завдання 2*/
function task2() {
    const pass = {
        city: "City",
        price: 1000,
        day: 3,
        calculate_cost: function () {
            return this.price * this.day;
        },
        change_price: function (newPrice) {
            this.price = newPrice;
        },
        display: function () {
            alert(`City -> ${this.city}\nPrice -> ${this.price}\nDays -> ${this.day}`);
        }
    };

    alert(`Create object "Pass".\nCity -> ${pass.city}\nPrice -> ${pass.price}\nDays -> ${pass.day}`);

    // Приклад виклику методів
    alert(`Cost of the pass: ${pass.calculate_cost()}`);
    pass.change_price(1200);
    pass.display();

    return pass;
}

/*завдання 3*/ 
function task3() {
    const Name = task1();
    const pass = task2();

    const unite = { ...Name, ...pass};
    alert(`Unite object 'TURFIRMA' and 'Pass'\n---------------\nCreate object 'TURFIRMA'.\n Name: ${Name.name}\n Address: ${Name.address}\n Mobile Number ${Name.number_phone}\n---------------\nCreate object "Pass".\n City-> ${pass.City}\n Price-> ${pass.price}\n Days-> ${pass.day}`);
    return union;
}

function task4() {
    Object.prototype.showData = function(){
        alert(`Name-> ${this.name},\n Address-> ${this.address},\n  Mobile number-> ${this.number_phone}`);
    };
 alert(`Added method 'showData' to ptototype object 'Name' `);

 const exampleTurfirma = {
    name: "Name",
    address: "address",
    number_phone: "number phone"
 };

 exampleTurfirma.showData();
}

function task5() {
    const Name = task1();
    const Department = Object.create(Name);
    Department.address = "Address Department";

    Department.showData = function(){
        alert(`Name ${this.name}\n Address ${this.address}\n Mobile number ${this.number_phone}`);
    };

    alert(`Create object 'Department' that inherit ptoperties and methods 'Name'`);

    Department.showData();
    return Department;
}

function task6() {
    class Turfirmaclass{
        constructor(name, address, number_phone){
            this._name = name;
            this._address = address;
            this._number_phone = number_phone;
        }
        get name(){
            return this._name;
        }
        set name(newName){
            this._name = newName;
        }

        get address(){
            return this._address;
        }
        set address(newAddress){
            this._address = nawAddress;
        }

        get number_phone(){
            return this._number_phone;
        }
        set number_phone(newNamber_phone){
            this._number_phone = newNamber_phone;
        }
        showData(){
            alert(`Name ${this._name},\nAddress ${this._address},\nMobile phone ${this._number_phone}`);
        }
    }

    class DepartmentClass extends Turfirmaclass{
        constructor(name,address, number_phone,deparrmentAddress){
            super(name,address,number_phone);
            this._departmentAddress = deparrmentAddress;
        }
        get deparrmentAddress(){
            return this._departmentAddress;
        }
        set deparrmentAddress(newdeparrmentAddress){
            this._departmentAddress = newdeparrmentAddress;
        }

        showData(){
            alert(`Name ${this._name},\nAddress ${this._address},\nMobile number ${this._number_phone},\nDepartment address ${this._departmentAddress}`);
        };
    }
    alert("Create class 'TurfirmaClass'");
    alert("Create class 'DepartmentClass'");

    const exampleTurfirma = new Turfirmaclass("---------", "---------", "-----------");

    exampleTurfirma.showData();
}