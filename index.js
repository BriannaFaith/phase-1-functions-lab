// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    const headquarters = 42;
    // Distance in blocks
    return Math.abs(pickupLocation - headquarters);
}

function distanceFromHqInFeet(pickupLocation) {
    const blocks = distanceFromHqInBlocks(pickupLocation);
    // Each block is 264 feet long
    const feet = blocks * 264;
    return feet;
}

function distanceTravelledInFeet(start, destination) {
    // Calculate the distance between blocks
    const blocks = Math.abs(destination - start);
    const feet = blocks * 264;
    return feet;
}

function calculatesFarePrice(start, destination) {
    // Calculate the distance in feet
    const distance = distanceTravelledInFeet(start, destination);

    if (distance <= 400) {
        return 0;
    }
    else if (distance <= 2000) {
        return (distance - 400) * 0.02;
    }
    else if (distance <= 2500) {
        return 25;
    }
    else {
        return 'cannot travel that far';
    }
}
