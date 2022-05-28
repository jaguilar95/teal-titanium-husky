const Engineer = require("../lib/Engineer.js");

test("creates an engineer object", () => {
  const engineer = new Engineer("Jeff", "69", "jeff69@email.com", "jeff69");

  expect(engineer.name).toBe("Jeff");
  expect(engineer.id).toBe("69");
  expect(engineer.email).toBe("jeff69@email.com");
  expect(engineer.github).toBe("jeff69");
});

test("gets the engineer's name", () => {
  const engineer = new Engineer("Jeff", "69", "jeff69@email.com", "jeff69");

  expect(engineer.getName()).toEqual("Jeff");
});

test("gets the engineer's email", () => {
  const engineer = new Engineer("Jeff", "69", "jeff69@email.com", "jeff69");

  expect(engineer.getEmail()).toEqual("jeff69@email.com");
});

test("gets the engineer's role", () => {
  const engineer = new Engineer("Jeff", "69", "jeff69@email.com", "jeff69");

  expect(engineer.getRole()).toEqual("Engineer");
});

test("gets the engineer's github username", () => {
  const engineer = new Engineer("Jeff", "69", "jeff69@email.com", "jeff69");

  expect(engineer.getGithub()).toEqual("jeff69");
});
