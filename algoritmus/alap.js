//Alap 1.feladat 2-vel oszthatóság vizsgálata

const nums = [3,4,9,6,2];

for ( var i=0; i<nums.length; i++) {
  if (nums[i] %2 == 0) {
     document.write (nums[i]," osztható<BR>");   
  } else {
     document.write (nums[i], " nem  osztható<BR>");
   }
}

//3 nem osztható
//4 osztható
//9 nem osztható
//6 osztható
//2 osztható