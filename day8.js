// Write a “person” class to hold all the details.

class person {
    constructor(firstname, lastname, age, education, city, gender) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.education = education;
        this.city = city;
        this.gender = gender;

    }

    getdetails() {
        return `the person detail is ${this.city}`
    }


}

var persondetails = new person("suriya", "siva", 24, "b.e", "chidambaram", "male")
console.log(persondetails);
console.log(persondetails.lastname);

// write a class to calculate uber price.
class uber {
    constructor(travel1, travel2) {
        this.travel1 = travel1;
        this.travel2 = travel2;
    }
    CdmToBVG(priceamount) {                             //******** *
        return "CdmToBVG ₹" + priceamount * 18
    }

    KerToVhp(priceamount) {
        return "KerToVhp₹" + priceamount * 10
    }

}

var uberprice = new uber("CdmToBVG per km ₹18", "KerToVhp  per km ₹10")
console.log(uberprice);

console.log(uberprice.CdmToBVG(5))
console.log(uberprice.KerToVhp(5))

// uml diagram to code


// class uml {
//     constructor(circle,radius,double,color,circumference,area){
//         this.circle=circle; 
// this.radius=radius;
// this.double=double;
// this.color=color;
// this.circumference=circumference;
// this.area=area;

//     }


// }
// var circles=new uml(2,3,4,5,6,5)
// console.log(circles);
