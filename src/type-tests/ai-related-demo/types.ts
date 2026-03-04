// INTENTIONAL_MULTI_FILE_ERRORS: this file contains deliberate mistakes for AI+related testing.

export type PaymentMethod = "card" | "cash" | "qr";

export type OrderItem = {
  sku: string;
  qty: number;
  unitPrice: number;
};

export type Order = {
  id: string;
  items: OrderItem[];
  paymentMethod: PaymentMethod; // should be `payment` in the final fixed version
};

export type ApiEnvelop<TData = unknown> = {
  payload: TData; // should be `data`
  traceId: string;
};

export const TAX_RATE_PERCENT = 0.1; // should be TAX_RATE
