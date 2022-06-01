UV_THREADPOOL_SIZE = 100;
const crypto = require("crypto");

const testPerson = { name: "dawn", age: 34, height: 173 };

const incrementHeight = (person) => {
  const _person = person;
  _person.height++;
  return _person;
};
console.log("1");
(async () => {
  return await new Promise((resolve) => {
    // crypto.pbkdf2("12345678", "12345678", 2000000, 64, "sha512", () => {
    //   console.log("P1");
    //   resolve();
    // });
    console.log("P1");
    resolve();
  });
})();

() => {
  crypto.pbkdf2Sync();
};

console.log("2");
(async () => {
  return await new Promise((resolve) => {
    // crypto.pbkdf2("12345678", "12345678", 2000000, 64, "sha512", () => {
    //   console.log("P2");
    //   resolve();
    // });
    console.log("P1");
  });
  resolve();
})();

console.log("3");
(async () => {
  return await new Promise((resolve) => {
    crypto.pbkdf2("12345678", "12345678", 2000000, 64, "sha512", () => {
      console.log("P3");
      (async () => {
        return await new Promise((resolve) => {
          crypto.pbkdf2("12345678", "12345678", 2000000, 64, "sha512", () => {
            console.log("P3");
            (async () => {
              return await new Promise((resolve) => {
                crypto.pbkdf2(
                  "12345678",
                  "12345678",
                  2000000,
                  64,
                  "sha512",
                  () => {
                    console.log("P3");
                    resolve();
                  }
                );
              });
            })();
            resolve();
          });
        });
      })();
      resolve();
    });
  });
})();

console.log("4");
(async () => {
  return await new Promise((resolve) => {
    // crypto.pbkdf2("12345678", "12345678", 2000000, 64, "sha512", () => {
    //   console.log("P4");
    //   resolve();
    // });
    console.log("P1");
    resolve();
  });
})();
