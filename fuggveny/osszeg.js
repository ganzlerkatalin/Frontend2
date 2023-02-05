/* Függvenyek 2.feladat - szamokat tartalmazo tomb elemeinek osszeget szamitom ki */
var nums = [4, 2, 2, 1,1];
var total = 0;
for (var i in nums) {
  total += nums[i];
}
document.write("Tömb összege:",total); 