import Parse from "parse";
/* SERVICE FOR PARSE SERVER OPERATIONS */

// READ operation - get food by ID
export const getFoodById = (id) => {
  const Food = Parse.Object.extend("Food");
  const query = new Parse.Query(Food);
  return query.get(id).then((result) => {
    // return Food object with objectId: id
    return result;
  });
};

// READ operation - get all foods in Parse class Food
export const getAllFoods = () => {
  const Food = Parse.Object.extend("Food");
  const query = new Parse.Query(Food);
  return query.find().then((results) => {
    // returns array of Food objects
    return results;
  });
};

// READ operation - get all foods with dorm value in Parse class Food
export const getAllFoodsByDormId = (dormPointer) => {
  const Food = Parse.Object.extend("Food");
  const query = new Parse.Query(Food);
  query.equalTo("dorm", dormPointer);
  return query.find().then((results) => {
    // returns array of Food objects
    console.log("results: ", results);
    return results;
  });
};
