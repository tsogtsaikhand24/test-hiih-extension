// INTENTIONAL_MULTI_FILE_ERRORS: this file contains deliberate mistakes for AI+related testing.
import type { ApiEnvelope, Order } from "./types";

export function decodeEnvelope<TData = unknown>(raw: string): ApiEnvelope<TData> {
  return JSON.parse(raw) as ApiEnvelope<TData>;
}

export function extractOrders<TData = unknown>(envelope: ApiEnvelope<TData>) {
  return envelope.data;
}

export function mapOrderIds(orders: Order[]) {
  return orders.map((order) => order.id);
}
