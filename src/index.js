module.exports = function toReadable (number) {
    const d1_9 = {0:"zero", 1:"one", 2:"two", 3:"three", 4:"four", 5:"five", 6:"six", 7:"seven", 8:"eight", 9:"nine"}
    const d10_19 = {10:"ten", 11:"eleven", 12:"twelve", 13:"thirteen", 14:"fourteen", 15:"fifteen", 16:"sixteen", 17:"seventeen", 18:"eighteen", 19:"nineteen"}
    const dozen = {0:"", 1:"ten", 2:"twenty", 3:"thirty", 4:"forty", 5:"fifty", 6:"sixty", 7:"seventy", 8:"eighty", 9:"ninety"}
    
    function oneDigit(n){
        return d1_9[n];
    }
    
    function twoDigit(n){
        if (n < 10){
            return oneDigit(n);
        } else if (n < 20){
            return d10_19[n];        
        } else if (n < 100){
            let dh = parseInt(n / 10);
            let dl = n % 10;
            if (dl == 0){
                return dozen[dh];
            } else {
                return dozen[dh] + " " + d1_9[dl];
            }
        }
    }

    function treeDigit(n){
        let dh = parseInt(n / 100);
        let dl = n % 100;
        if (dl !== 0){
            return d1_9[dh] + " hundred " + twoDigit(dl);
        } else {
            return d1_9[dh] + " hundred";
        }

    }

    let n = number;
    
    if (n == 0){
        return "zero";
    } else if (n < 10){
        return oneDigit(n);
    } else if (n < 20){
        return d10_19[n];        
    } else if (n < 100){
        return twoDigit(n);
    } else {        
        return treeDigit(n);
    }
    return 0; 
}
