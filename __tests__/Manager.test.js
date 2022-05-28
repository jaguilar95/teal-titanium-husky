const Manager = require("../lib/Manager.js");

test("creates a manager object", () => {
  const manager = new Manager("Jeff", "69", "jeff69@email.com", "555 555-5555");

  expect(manager.name).toBe("Jeff");
  expect(manager.id).toBe("69");
  expect(manager.email).toBe("jeff69@email.com");
  expect(manager.officeNumber).toBe("555 555-5555");
});

test("gets the manager's name", () => {
  const manager = new Manager("Jeff", "69", "jeff69@email.com");

  expect(manager.getName()).toEqual("Jeff");
});

test("gets manager's email", () => {
  const manager = new Manager("Jeff", "69", "jeff69@email.com");

  expect(manager.getEmail()).toEqual("jeff69@email.com");
});

test("gets manager's role", () => {
  const manager = new Manager("Jeff", "69", "jeff69@email.com");

  expect(manager.getRole()).toEqual("Manager");
});
