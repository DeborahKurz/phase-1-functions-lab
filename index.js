// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
    if (distance >= 42) {
        return distance - 42;
    } else (distance <= 42);
        return 42 - distance;
}


function distanceFromHqInFeet(distance) {
    distanceFromHqInBlocks(distance);
    if (distance >= 42) {
        return (distance - 42) * 264;
    } else (distance <= 42);
        return (42 - distance) * 264;
}


function distanceTravelledInFeet(start, destination) {
    if (destination >= 42) {
        return (destination - start) * 264;
    } else (destination <= 42);
        return (start - destination) * 264;
}


function calculatesFarePrice(start, destination) {
    if(distanceTravelledInFeet(start, destination) <= 400) {
        return 0;
    } else if(distanceTravelledInFeet(start, destination) <= 2000){
        if (destination >= 42) {
            return ((destination - start) * 264 -400) * 0.02;
        } else (destination <= 42);
            return ((start - destination) * 264 -400) * 0.02;
    } else if(distanceTravelledInFeet(start, destination) <= 2500){
        return 25;
    } else if(distanceTravelledInFeet(start, destination) >= 2500){
        return 'cannot travel that far';
    }
}
