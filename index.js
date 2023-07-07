//Calculates the distance from headquarters in blocks.  We use the if/else to get the right distance depending on if the destination is above or below HQ. 
function distanceFromHqInBlocks(distance) {
    if (distance >= 42) {
        return distance - 42;
    } else (distance <= 42);
        return 42 - distance;
}

//We call the distanceFromHqInBlocks() function by typing out the name and parameter. We simply can just return this and multiply by 264 since we are just looking for how many feet it is.
function distanceFromHqInFeet(distance) {
    return distanceFromHqInBlocks(distance) * 264;
}

//This function is similar to our first because we are again having to use if/else to figure...
//...out how far the start/destination is based on if we are below or above HQ. We aren't calling on the first function because we are having two parameters in this function. 
//To find the difference between the start and destination, we subtract them when we return them, and then multiply by 264 to get feet.
function distanceTravelledInFeet(start, destination) {
    if (destination >= 42) {
        return (destination - start) * 264;
    } else (destination <= 42);
        return (start - destination) * 264;
}

//We're going to use the return value from the function above, and assign it to a variable which we will pass into the if/else statments to make the code easier to read.
//We use && so that anything >= 400 and <= 2000 will make the code run. If it does not meet this requirement, that part of the code will not run.
//We have to write our full conditions (feet>=400 && feet<=2000) on both sides of the && so that it is evaluated as full conditions and can return true. 
function calculatesFarePrice(start, destination) {
    const feet = distanceTravelledInFeet(start, destination)
    if(feet <= 400) {
        return 0;
    } else if(feet >=400 && feet <= 2000){
        return (feet - 400) * 0.02;
    } else if(feet >=2000 && feet <= 2500){
        return 25;
    } else {
        return 'cannot travel that far';
    }
}
