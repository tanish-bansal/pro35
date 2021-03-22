class Food {
    constructor() {
    
 foodStock=12;
lastFeed;
    }
    
    getFoodStock()
    deductFood()
    updatefoodstock()
display(){
    x=70;
    y=100;
    this.image=loadImage("milk.png");
imageMode (CENTER);
this.image(720,220,70,70);
if(foodSock!=0){
    for(var i=0;i<=foodStock;i++){
      if(i%10==0)  {
          x=80;
          y=y+50;
      }
      this.image=loadImage("milk.png");
      image(this.image,x,y,50,50);

      x=x+30;
      
    }
}
}
}
