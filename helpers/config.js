import assert from "assert";

const { SQL_SERVER, SQL_DATABASE, SQL_USER, SQL_PASSWORD, SQL_PORT
  // , LINKED_DOMAIN_RESOURCE_ID 
} =
  process.env;

assert(SQL_SERVER, "SQL_SERVER configuración requerida.");
assert(SQL_DATABASE, "SQL_DATABASE configuración requerida.");
assert(SQL_USER, "SQL_USER configuración requerida.");
assert(SQL_PASSWORD, "SQL_PASSWORD configuración requerida.");
assert(SQL_PORT, "SQL_PORT configuración requerida.");
// assert(LINKED_DOMAIN_RESOURCE_ID, "LINKED_DOMAIN_RESOURCE_ID configuración requerida.");

export const sql = {
  host: SQL_SERVER,
  database: SQL_DATABASE,
  user: SQL_USER,
  password: SQL_PASSWORD,
  port: SQL_PORT,
};

// export const acsParameters = {
//   dataLocation: "United States",
//   location: "Global",
//   linkedDomain: [LINKED_DOMAIN_RESOURCE_ID],
// };