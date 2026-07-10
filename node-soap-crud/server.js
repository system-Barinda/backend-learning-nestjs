const express = require('express');
const soap = require('soap');
const fs = require('fs');
const path = require('path');

const app = express();

// Our temporary mock data layer
let usersDb = [
  { id: "1", name: "Alice Smith", email: "alice@example.com" }
];

// The actual business logic handlers bound to the SOAP interface
const userServiceServices = {
  UserService: {
    UserPort: {
      CreateUser: function (args) {
        const newUser = {
          id: String(usersDb.length + 1),
          name: args.name,
          email: args.email
        };
        usersDb.push(newUser);
        return { user: newUser };
      },

      ReadUser: function (args) {
        const user = usersDb.find(u => u.id === args.id);
        if (!user) {
          throw { Fault: { code: "client", string: "User records not found" } };
        }
        return { user: user };
      },

      UpdateUser: function (args) {
        const userIndex = usersDb.findIndex(u => u.id === args.id);
        if (userIndex === -1) return { success: false };
        
        usersDb[userIndex] = { id: args.id, name: args.name, email: args.email };
        return { success: true };
      },

      DeleteUser: function (args) {
        const originalLength = usersDb.length;
        usersDb = usersDb.filter(u => u.id !== args.id);
        return { success: usersDb.length < originalLength };
      }
    }
  }
};

// Load the physical WSDL contract
const wsdlXml = fs.readFileSync(path.join(__dirname, 'service.wsdl'), 'utf8');

const PORT = 8000;
app.listen(PORT, function () {
  // Bind the SOAP listener to the execution route path
  soap.listen(app, '/wsdl', userServiceServices, wsdlXml, function() {
     console.log(`SOAP server is securely running at http://localhost:${PORT}/wsdl?wsdl`);
  });
});