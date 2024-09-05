

class Car{
    constructor(brand){
        this.carname = brand;
    }
present(){
    return 'I have a ' + this.carname
}

}
 class Model extends Car{
    constructor (brand, mod){
     super(brand)   
this.model = mod;
 }
 }

 myCar = new Model("Pagani", "McLaren");
 document.write(myCar.present())
 