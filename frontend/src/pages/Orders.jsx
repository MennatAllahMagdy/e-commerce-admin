import { Card } from "primereact/card";
import { DUMMY_ORDERS } from "../data/dummyOrders";
import React from "react";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const navigate = useNavigate();
  const handleRowClick = (orderId) => {
    navigate(`/order-detail/${orderId}`);
  };
  return (
    <Card className="m-5 p-5 ">
      <div className="relative overflow-x-auto ">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Order ID
              </th>
              <th scope="col" className="px-6 py-3">
                User ID
              </th>
              <th scope="col" className="px-6 py-3">
                Total Price
              </th>
              <th scope="col" className="px-6 py-3">
                Number of products
              </th>
            </tr>
          </thead>
          <tbody>
            {DUMMY_ORDERS.map((order) => (
              <tr
                key={order.orderId}
                className="bg-white  border-b dark:bg-gray-800 dark:border-gray-700"
                onClick={() => handleRowClick(order.orderId)}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {order.orderId}
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {order.userId}
                </th>

                <td className="px-6 py-4">${order.totalPrice}</td>

                <td className="px-6 py-4">{order.totalproducts}</td>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default Orders;
