class Food {
    constructor(){
    this.foodStock=0;
    this.lastFed;
    this.image=loadImage('Images/Milk.png');
    }

   updateFoodStock(foodStock){
    this.foodStock=foodStock;
   }

   getFedTime(lastFed){
     this.lastFed=lastFed;
   }

   deductFood(){
     if(this.foodStock>0){
      this.foodStock=this.foodStock-1;
     }
    }

    getFoodStock(){
      return this.foodStock;
    }

    display(){
        background(46,139,87);

        fill(255,255,254);
        textSize(15);
        if(lastFed>=12){
            text("Last Feed : "+ lastFed%12 + " PM", 50,30);
        }else if(lastFed==0){
            text("Last Feed : 12 AM",50,30);
        }else{
            text("Last Feed : "+ lastFed + " AM", 50,30);
        }
        var button=createButton("Feed the dog");
        button.position(400,125);
        if(button.mousePressed(function(){
          foodS=foodS-1;
          gameState-1;
          database.ref('/').update({'gameState':gameState})
        }));
        var addFood=createButton("Add Food");
        addFood.position(500,125);

        if(addFood.mousePressed(function(){
          foodS=foodS+1;
          gameState=2;
          database.ref('/').update({'gameState':gameState})
        }));
        var x=70,y=100; 
        imageMode(CENTER);
        if(this.foodStock!=0){
        for(var i=0;i<this.foodStock;i++){
          if(i%10==0){
            x=70;
            y=y+50;
          }
          image(this.image,x,y,50,50);
          x=x+30;
        }
      }
    }

    bedroom(){
        background(bedroom,550,500);  
    }
      
    garden(){
        background(garden,550,500);  
    } 

    washroom(){
        background(washroom,550,500); 
    }
}
