// function blockScopeExample() {
//         if (true) {
//           var c = 30;
//           let d = 40;
//           const e = 50;
//           console.log(c); // 30
//           console.log(d); // 40
//           console.log(e); // 50
//         }
//         console.log(c); // 30 (var is function-scoped)
//         try {
//           console.log(d); // ReferenceError: d is not defined
//         } catch (e) {
//           console.log(e);
//         }
//         try {
//           console.log(e); // ReferenceError: e is not defined
//         } catch (e) {
//           console.log(e);
//         }
//       }
      
//       blockScopeExample();
    
    // Function that returns a promise that resolves after a delay
    function resolveAfterDelay(ms) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(`Resolved after ${ms} milliseconds`);
        }, ms);
      });
    }
    
    // Function that returns a promise that rejects after a delay
    function rejectAfterDelay(ms) {
      return new Promise((res, rej) => {
        setTimeout(() => {
          rej(`Rejected after ${ms} milliseconds`);
        }, ms);
      });
    }
    
    // Testing different states of promises
    
    // Test pending and fulfilled state
    const promise1 = resolveAfterDelay(1000);
    console.log("Promise1 (Pending):", promise1);
    
    promise1.then((result) => {
      console.log("Promise1 (Fulfilled):", result);
    }).catch((error) => {
      console.error("Promise1 (Rejected):", error);
    });
    
    // Test pending and rejected state
    const promise2 = rejectAfterDelay(2000);
    console.log("Promise2 (Pending):", promise2);
    
    promise2.then((result) => {
      console.log("Promise2 (Fulfilled):", result);
    }).catch((error) => {
      console.error("Promise2 (Rejected):", error);
    });