import Parse from "parse";

// CREATE operation - new orderItem with Name
export const createOrderItem = (foodName, userEmail) => {
    console.log("foodName: ", foodName);
    console.log("userEmail: ", userEmail);
    const OrderItem = Parse.Object.extend("OrderItem");
    const orderItem = new OrderItem();
    // using setter to UPDATE the object food name and user email
    orderItem.set("food", foodName);
    orderItem.set("user", userEmail);

    return orderItem.save().then((result) => {
      // returns new OrderItem object
      return result;
    });
  };

// READ operation - get all orderItems with user id in Parse class OrderItem
export const getAllOrderItemsByUser = (userEmail) => {
    const OrderItem = Parse.Object.extend("OrderItem");
    const query = new Parse.Query(OrderItem);
    query.equalTo("user", userEmail);
    return query.find().then((results) => {
      // returns array of OrderItem objects
      console.log("results: ", results);
      return results;
    });
  };

// READ operation - get all Object Parse class OrderItem objects
export const getAllOrderItems = () => {
    const OrderItem = Parse.Object.extend("OrderItem");
    const query = new Parse.Query(OrderItem);
    return query.find().then((results) => {
        // returns array of OrderItem objects
        return results;
      });
  };


// DELETE operation - remove orderItems by userEmail
export const removeAllOrderItemsByUser = (userEmail) => {
    const OrderItem = Parse.Object.extend("OrderItem");
    const query = new Parse.Query(OrderItem);
    query.equalTo("user", userEmail);

    return query.find().then((orderItems) => {
      orderItems.destroyAll();
    });
  };