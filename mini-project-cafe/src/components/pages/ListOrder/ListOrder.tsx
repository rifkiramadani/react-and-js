import {
  deleteOrder,
  getOrders,
  updateOrders,
} from "../../../services/order.service";
import styles from "./ListOrder.module.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import type { IOrder } from "../../../types/order";
import { removeLocalStorage } from "../../../utils/storage";

const ListOrder = () => {
  const [orders, setOrders] = useState([]);
  const [refetchOrder, setRefetchOrder] = useState(true);

  useEffect(() => {
    if (refetchOrder) {
      const fetchOrder = async () => {
        const result = await getOrders();
        setOrders(result.data);
        setRefetchOrder(false);
      };
      fetchOrder();
    }
  }, [refetchOrder]);

  const handleRefetch = () => {
    setRefetchOrder((prev) => !prev);
  };

  const handleCompleteOrder = async (id: string) => {
    await updateOrders(id, { status: "COMPLETED" }).then(() => {
      setRefetchOrder(true);
    });
  };

  const navigate = useNavigate();

  const handleLogout = () => {
    removeLocalStorage("auth");
    return navigate("/login");
  };

  const handleDeleteOrder = async (id: string) => {
    await deleteOrder(id).then(() => {
      setRefetchOrder(true);
    });
  };

  return (
    <main className={styles.order}>
      <section className={styles.header}>
        <h1 className={styles.title}>Order List</h1>
        <div className={styles.button}>
          <Link to={"/create"}>
            <Button>Create Order</Button>
          </Link>
          <Button onClick={() => handleRefetch()}>Refresh</Button>
          <Button color="secondary" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </section>
      <section>
        <table
          border={1}
          className={styles.table}
          cellPadding={10}
          cellSpacing={0}
        >
          <thead>
            <tr>
              <th>No</th>
              <th>Customer Name</th>
              <th>Table</th>
              <th>Total</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order: IOrder, index: number) => (
              <tr key={order.id}>
                <td>{index}</td>
                <td>{order.customer_name}</td>
                <td>{order.table_number}</td>
                <td>{order.total}</td>
                <td>{order.status}</td>
                <td className={styles.action}>
                  <Link to={`/orders/${order.id}`}>
                    <Button>Detail</Button>
                  </Link>
                  {order.status === "PROCESSING" && (
                    <Button
                      onClick={() => {
                        handleCompleteOrder(order.id);
                      }}
                    >
                      Completed
                    </Button>
                  )}
                  <Button
                    onClick={() => {
                      handleDeleteOrder(order.id);
                    }}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
};

export default ListOrder;
