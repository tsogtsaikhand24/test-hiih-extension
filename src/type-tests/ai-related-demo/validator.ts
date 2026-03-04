// INTENTIONAL_MULTI_FILE_ERRORS: this file contains deliberate mistakes for AI+related testing.
import type { Order } from "./types";

export function assertValidOrders(orders: Order[]) {
  return orders.every(
    (order) => order.items.length > 0 && order.payment.length > 0,
  );
}
