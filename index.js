// code your solution here
function superbowlWin(record){
    const result = record.find((val) => val.result == "W")
    if(result){
        return result.year
    } else {
        return 
    }
}

