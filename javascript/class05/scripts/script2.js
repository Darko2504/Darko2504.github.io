let hotel = new Object();
hotel.name = `Bristol`;
hotel.numberOfRooms = 100;
hotel.numberOfStars = 5;
hotel.hasSpaCenter = true;
hotel.bookedRooms = 55;
hotel.getAvailability = function() {
    return this.numberOfRooms - this.bookedRooms;
}


console.log(`The hotel ${hotel.name} has ${hotel.getAvailability()} free rooms left at the moment`);

