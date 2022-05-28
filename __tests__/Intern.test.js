const Intern = require("../lib/Intern");

test("creates an intern object", () => {
  const intern = new Intern("Jeff", "69", "jeff69@email.com", "KU");

  expect(intern.name).toBe("Jeff");
  expect(intern.id).toBe("69");
  expect(intern.email).toBe("jeff69@email.com");
  expect(intern.school).toBe("KU");
});

test("gets the intern's name", () => {
  const intern = new Intern("Jeff", "69", "jeff69@email.com", "KU");

  expect(intern.getName()).toEqual("Jeff");
});

test("gets the intern's email", () => {
  const intern = new Intern("Jeff", "69", "jeff69@email.com", "KU");

  expect(intern.getEmail()).toEqual("jeff69@email.com");
});

test("gets the intern's role", () => {
  const intern = new Intern("Jeff", "69", "jeff69@email.com", "KU");

  expect(intern.getRole()).toEqual("Intern");
});

test("gets the intern's school", () => {
  const intern = new Intern("Jeff", "69", "jeff69@email.com", "KU");

  expect(intern.getSchool()).toEqual("KU");
});
