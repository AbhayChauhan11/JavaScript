// "use strict";

/* accountCity doesn’t throw an error because, without let, const, or var, JavaScript makes it a global variable in non-strict mode. Add "use strict"; at the top to catch this—then it’ll error unless declared
*/



const accountId= 14454;
let accountEmail= "hitesh@google.com";
var accountPassword= "12345";
accountCity= "Jaipur";
let accountState;

// accountId= 2;   <----- not allowed

accountEmail= "hc@hc.com";
accountPassword= "212121";
accountCity= "Bengluru";


console.log(accountId);

/* Prefer not to use var
 because of issue of block scope and funcational scope
 */

 console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);