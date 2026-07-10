const soap = require('soap');
const url = 'http://localhost:8000/wsdl?wsdl';

async function runTestClient() {
  try {
    const client = await soap.createClientAsync(url);

    // 1. CREATE
    console.log('--- 1. Creating User ---');
    const [createRes] = await client.CreateUserAsync({ name: 'Bob Jones', email: 'bob@example.com' });
    console.log('Created:', createRes.user);

    // 2. READ
    console.log('\n--- 2. Reading Back User ---');
    const [readRes] = await client.ReadUserAsync({ id: createRes.user.id });
    console.log('Fetched:', readRes.user);

    // 3. UPDATE
    console.log('\n--- 3. Updating User ---');
    const [updateRes] = await client.UpdateUserAsync({ id: '2', name: 'Bob Robert Jones', email: 'bob.r@example.com' });
    console.log('Update Successful:', updateRes.success);

    // 4. DELETE
    console.log('\n--- 4. Deleting User ---');
    const [deleteRes] = await client.DeleteUserAsync({ id: '1' });
    console.log('Deletion Successful:', deleteRes.success);

  } catch (err) {
    console.error('An operational fault occurred:', err.message || err);
  }
}

runTestClient();