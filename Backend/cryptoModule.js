// const crypto= require("crypto")

// const password="mystrongpass123";
// const hash= crypto.createHash("sha256").update(password).digest("hex");
// console.log("Hashed Password : ",hash );
// console.log("original pass: ",password);

// // createHash("sha256") -> create hash engine
// // update(password)     -> put data into engine
// // digest("hex")        -> get final hashed result

//generates cryptographically strong random values

const token= crypto.randomBytes(16).toString("hex");
console.log("Reset link:",token); //forgot pass or email verification

// modern, secure password hashing..more bits added to make the password more secure after hashing
crypto.scrypt("password123","salt",64,(err,derivedKey) => {
    if(!err) {
        console.log("Derived Key:", derivedKey.toString("hex"));
    }
});

