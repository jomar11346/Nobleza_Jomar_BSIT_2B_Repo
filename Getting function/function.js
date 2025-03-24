// var dogName = "Rover"
 // var dogWeight = 23;
 // if (dogWeight > 20){
 //     console.log(dogName + " says WOOF WOOF ")
 // }else{
 //     console.log(dogName + " says arf arf ")
 // }
 
 // dogName = "roger";
 // dogWeight = 13;
 // if (dogWeight >20){
 //     console.log(dogName + " says WOOF WOOF ")
 // } else {
 //     console.log (dogName + " says ARF ARF ")
 // }
 
 // dogName = "brix";
 // dogWeight = 15;
 // if (dogWeight >20){
 //     console.log(dogName + " says WOOF WOOF ")
 // } else {
 //     console.log (dogName + " says ARF ARF ")
 // }
 
 // dogName = "borg";
 // dogWeight = 19;
 // if (dogWeight >20){
 //     console.log(dogName + " says WOOF WOOF ")
 // } else {
 //     console.log (dogName + " says ARF arf arf ")
 // }
 
 function bark(name, weight){
    if(weight > 20){
        console.log(name + " says WOOF WOOF ");
    } else {
        console.log(name + " says arf arf ");
    }
}

bark("rover", 23);
bark("roger", 13);
bark("brix", 15);
bark("borg", 19);