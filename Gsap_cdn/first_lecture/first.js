// greensock animation platfrom
// gsap we use to and from property firts we have to pass the name of element which we are targeting then after comma in curly braces we give properties and values which is basically an object
gsap.to("#box",{
  x:900,                                        //x and y are position of movement
  y:190,                                      
  duration:2,                                   //animation kitne time tak cahlega
  delay:1,                                      // user ke website pr aane ke kitne time baad animation start hoga
  backgroundColor:"yellow",                     //always be in camelcase value is in string so in comma
  rotate:360,                                   //it rotates with given degree
  scale:1.9                                     //scale box ko mtion me chota ya bda krta hai,default value 1
});

// gsap.from("#box",{
//   x:900,                                        //x and y are position of movement
//   y:190,                                      
//   duration:4,                                   //animation kitne time tak cahlega
//   delay:3,                                      // user ke website pr aane ke kitne time baad animation start hoga
//   backgroundColor:"black",                      //always be in camelcase 
//   rotate:360,                                   //it rotates with given degree
//   scale:0.9                                    //scale box ko mtion me chota ya bda krta hai,default value 1
// });
