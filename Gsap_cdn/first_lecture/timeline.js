let tl = gsap.timeline()

//now we do not use gsap.to() except we'll use tl.to()
tl.to("h1",{
  x:600,
  color:"red", 
   duration:2,
   repeat:-1,
   yoyo:true
})
tl.to("h2",{
  x:600,
  color:"red", 
   duration:2,
   repeat:-1,
   yoyo:true
})



tl.to("h3",{
  x:600,
  color:"purple",
  duration:2
})