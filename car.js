function Car (b,y,m,mi,c,g){
      this.brand = b;
      this.year = y;
      this.model = m;
      this.miles = mi;
      this.cost = c;
      this.gastank = g;
      this.milespergallon = function (gas){
            this.gastank = this.gastank - gas
            this.miles = this.miles + 30*gas;
      }
}
function main(){
      new Car("buick", 1992, century, 70000, 1000, 12)
      console.log(car.milespergallon(70));
}
main()
