"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
})(Role || (Role = {}));
const person = {
    role: Role.ADMIN,
};
if (person.role === Role.ADMIN) {
    console.log("Role: ", Role.ADMIN);
}
