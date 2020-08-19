{
    /*
        1) Elevators wait to be to be requested
            a) listens for the elevator request
            b) receive request and get floor data
        2) Upon request the elevator should travel to the chosen floor and collect the passengers. 
            a) elevator goes to floor with requesting passengers
            b) listen for destination (floor selection)
        3) Elevator should drop off the passengers 
            a) elevator travels to requested floor
        4) elevator awaits additional requests 
    */
        init: function(elevators, floors) {
            var elevator = elevators[0]; // Let's use the first elevator
            //working solution for challenge 1
            // Whenever the elevator is idle (has no more queued destinations) ...
            elevator.on("idle", function() 
            {
                // let's go to all the floors (or did we forget one?)
                elevator.goToFloor(0);
                elevator.goToFloor(1);
                elevator.goToFloor(2);
            }); 
            
    
        },
        update: function(dt, elevators, floors) {
            // We normally don't need to do anything here
        }
    }

