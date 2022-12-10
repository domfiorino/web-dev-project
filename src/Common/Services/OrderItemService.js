import Parse from "parse";

// CREATE operation - new orderItem with Name
export const createOrderItem = (foodPointer, user) => {
    console.log("foodPointer: ", foodPointer);
    console.log("user: ", user);
    const OrderItem = Parse.Object.extend("OrderItem");
    const orderItem = new OrderItem();
    // using setter to UPDATE the object food pointer and user email
    orderItem.set("food", foodPointer);
    orderItem.set("user", user);

    return orderItem.save().then((result) => {
      // returns new OrderItem object
      return result;
    });
  };

// READ operation - get all orderItems with userEmail in Parse class OrderItem
export const getAllOrderItemsByUser = (user) => {
    const OrderItem = Parse.Object.extend("OrderItem");
    const query = new Parse.Query(OrderItem);
    query.equalTo("user", user);
    return query.find().then((results) => {
      // returns array of OrderItem objects
      console.log("results: ", results);
      return results;
    });
  };

// DELETE operation - remove orderItems by userEmail
export const removeAllOrderItemsByUser = (user) => {
    const OrderItem = Parse.Object.extend("OrderItem");
    const query = new Parse.Query(OrderItem);
    query.equalTo("user", user);

    return query.find().then((orderItems) => {
      orderItems.destroyAll();
    });
  };