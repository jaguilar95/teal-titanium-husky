const Employee = require("../lib/Employee.js");

test("creates an employee object", () => {
  const employee = new Employee("Jeff", "69", "jeff69@email.com");

  expect(employee.name).toBe("Jeff");
  expect(employee.id).toBe("69");
  expect(employee.email).toBe("jeff69@email.com");
});

test("gets the employee's name", () => {
  const employee = new Employee("Jeff", "69", "jeff69@email.com");

  expect(employee.getName()).toEqual("Jeff");
});

test("gets employee's email", () => {
  const employee = new Employee("Jeff", "69", "jeff69@email.com");

  expect(employee.getEmail()).toEqual("jeff69@email.com");
});

test("gets employee's role", () => {
  const employee = new Employee("Jeff", "69", "jeff69@email.com");

  expect(employee.getRole()).toEqual("Employee");
});
