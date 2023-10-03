export function reduce(init, nums) {
    if (nums.length > 0){
        for (let i = 0; i < nums.length; i++){
            init = init + nums[i]
        }
        return init
    }
    else{
        return 'The given array is empty.'
    }
}

export function increase(init, nums) {
    if (nums.length > 0){
        for (let i = 0; i < nums.length; i++){
            init = init + nums[i] * nums[i]
        }
        return init
    }
    else{
        return 'The given array is empty.'
    }
}