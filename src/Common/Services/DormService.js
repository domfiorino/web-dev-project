import Parse from "parse";
/* SERVICE FOR PARSE SERVER OPERATIONS */

// READ operation - get dorm by ID
export const getDormById = (id) => {
  const Dorm = Parse.Object.extend("Dorm");
  const query = new Parse.Query(Dorm);
  return query.get(id).then((result) => {
    // return Dorm object with objectId: id
    return result;
  });
};

// READ operation - get all dorms in Parse class Dorm
export const getAllDorms = () => {
  const Dorm = Parse.Object.extend("Dorm");
  const query = new Parse.Query(Dorm);
  return query.find().then((results) => {
    // returns array of Dorm objects
    return results;
  });
};
