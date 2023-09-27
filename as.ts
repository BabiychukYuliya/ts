// type Admin = {
//     name: string;
//     privileges: string[];
//   };

//   type Employee = {
//     name: string;
//     startDate: Date;
//   };

type Staff = Admin | Employee;

function isEmployee(staff: Staff): staff is Employee {
  return (staff as Employee).startDate !== undefined;
}

const staffMember: Staff = { name: "Bob", startDate: new Date() };

if (isEmployee(staffMember)) {
  console.log(
    `Welcome on board, ${staffMember.name}! Your start date is ${staffMember.startDate}`
  );
}
