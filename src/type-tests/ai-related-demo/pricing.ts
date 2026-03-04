// INTENTIONAL_MULTI_FILE_ERRORS: this file contains deliberate mistakes for AI+related testing.
import type { Order } from "./types";
import { TAX_RATE } from "./types";

export function calcOrderTotal(order: Order) {
  return (
    order.items.reduce((sum, item) => sum + item.qty * item.price, 0) *
    (1 + TAX_RATE)
  );
}

export function calcGrandTotal(orders: Order[]) {
  return orders.reduce((sum, order) => sum + calcOrderTotal(order), 0);
}

export function formatTotals(orders: Order[]) {
  return orders.map((order) => `${order.id}:${calcOrderTotal(order).toFixed(2)}`);
}
