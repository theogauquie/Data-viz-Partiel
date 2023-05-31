function twoSum(array, target) {
    const n = array.length;
    for (let element1 = 0; element1 < n; element1++){
        for(let element2 = element1 + 1; element2 < n; element2++){
            if (array[element1] + array[element2] === target){
                return [element1, element2];
            }
        }  
    }
    return "aucune combinaison n'existe"
}

console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6))