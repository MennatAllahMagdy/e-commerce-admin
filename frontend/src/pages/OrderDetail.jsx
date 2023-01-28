import React, { useEffect, useState } from "react";

import { Column } from "primereact/column";
import { DUMMY_ORDERS } from "../data/dummyOrders";
import { DataTable } from "primereact/datatable";
import { useParams } from "react-router-dom";

const OrderDetail = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const orderDetails = DUMMY_ORDERS.find(
      (order) => order.orderId === orderId
    );
    setOrder(orderDetails);
  }, []);

  return (
    <div>
      {order && (
        <div className="flex-col m-5 p-5 ">
          <div className="flex flex-col">
            <div className="flex flex-row gap-8 pl-6 pb-4">
              <p className="font-cold text-xl">OrderId</p>
              <p>{order.orderId}</p>
            </div>
            <div className="flex flex-row gap-8 pl-6 pb-4">
              <p className="font-cold text-xl">User Id</p>
              <p>{order.userId}</p>
            </div>
            <div className="flex flex-row gap-8 pl-6 pb-4">
              <p className="font-cold text-xl">Total Price</p>
              <p>{order.totalPrice}</p>
            </div>
          </div>
          <div>
            <DataTable value={order.products} responsiveLayout="scroll">
              <Column field="id" header="Product Id"></Column>
              <Column field="name" header="Product Name"></Column>
              <Column field="description" header="Description"></Column>
              <Column field="quantity" header="Quantity"></Column>
              <Column field="price" header="Price"></Column>
            </DataTable>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderDetail;
