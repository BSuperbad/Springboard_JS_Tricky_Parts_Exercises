function curriedAdd(total) {
    if(total===undefined) return 0;
    return function(newTotal){
        if(newTotal !== undefined){
        total += newTotal;
        return curriedAdd(total);
        } else {
            return total;
    }
}

}

module.exports = { curriedAdd };
