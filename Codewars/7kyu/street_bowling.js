// Imagine you are trying to roll a ball a certain distance down a road. The ball will have a starting speed that slowly degrades due to friction and cracks in the road. Every time the ball rolls a distance equal to its speed or rolls over a crack, its speed decreases by 1. Given a speed of s which the ball starts rolling, and a roadmap r of the street represented by a string, return whether or not the ball will be able to make it to its destination (True or False).

// NOTES
// A ball with 0 speed is motionless.
// If a ball happens to roll over a crack, the speed decrease must only take effect after the ball has rolled a distance equal to its speed. For example, if the speed was 10, but the ball hit 2 cracks before rolling 10 distance, the ball's speed should stay at 10 until it has reached 10 distance, in which the speed should decrease to 7 (-2 from cracks and -1 due to friction).
// On the roadmap, "_" represents flat ground and "x" represents a crack
// The length of the roadmap will be equal to the distance to the ball's final destination
// The ball only has to make it to the last 'tile' of the roadmap to be considered as a valid roadmap (so the ball does not have to 'fall off' the edge of the road)

// EXAMPLES
// A speed of 100, and a roadmap of '_' should return True because the ball would be moving too quickly for friction to be applied and there are no cracks on the road.
// A speed of 1, and a roadmap of '___________' should return False because friction would stop the ball after 1 distance

// -------------------- My Solution -----------------------------------


function ballTest(s, r) {
    let k = 0;
    let crackCount = 0; 
    for (let i = 0; i < r.length; i++) {
        if (s <= 0) {
            return false 
        } 
        if (r[i] == 'x') {
            crackCount++; 
        }
        
        k++;
      
        if (k == s) {
            k = 0;
            s = s-1;
            s = s-(crackCount)
            crackCount = 0; 
        }
    }
    return true;
  }