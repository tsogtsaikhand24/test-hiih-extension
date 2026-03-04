# Fix Context (parentChildInferenceError.ts)

## Priority
- Fix ERROR first, then WARNING, then INFO/HINT.
- If syntax/root-cause exists, fix it before downstream diagnostics.

## File
- Path: c:\Users\POWERSHOP\OneDrive\Desktop\foo delivery\FoodDeliveryFrontEnd\src\type-tests\parentChildInferenceError.ts
- Language: ts
- Diagnostics: 3

## Root Causes (Fix First)
1. ts(2724) | count=3 | firstLine=2

## Diagnostics (E->W->I->H)
- [E] ts(2724) at 2:10 -> '"./ai-related-demo/parser"' has no exported member named 'decodeEnvlop'. Did you mean 'decodeEnvelope'?
- [E] ts(2724) at 3:26 -> '"./ai-related-demo/pricing"' has no exported member named 'formatTotal'. Did you mean 'formatTotals'?
- [E] ts(2724) at 5:15 -> '"./ai-related-demo/types"' has no exported member named 'ApiEnvelopee'. Did you mean 'ApiEnvelop'?

## Error Line Snippets
### Around line 2
```text
    1 | // INTENTIONAL_MULTI_FILE_ERRORS: this file contains deliberate mistakes for AI+related testing.
>   2 | import { decodeEnvlop, extractOrders, mapOrderIds } from "./ai-related-demo/parser";
    3 | import { calcGrandTotal, formatTotal } from "./ai-related-demo/pricing";
    4 | import { assertValidOrders } from "./ai-related-demo/validator";
```

### Around line 3
```text
    1 | // INTENTIONAL_MULTI_FILE_ERRORS: this file contains deliberate mistakes for AI+related testing.
    2 | import { decodeEnvlop, extractOrders, mapOrderIds } from "./ai-related-demo/parser";
>   3 | import { calcGrandTotal, formatTotal } from "./ai-related-demo/pricing";
    4 | import { assertValidOrders } from "./ai-related-demo/validator";
    5 | import type { ApiEnvelopee, Order } from "./ai-related-demo/types";
```

### Around line 5
```text
    3 | import { calcGrandTotal, formatTotal } from "./ai-related-demo/pricing";
    4 | import { assertValidOrders } from "./ai-related-demo/validator";
>   5 | import type { ApiEnvelopee, Order } from "./ai-related-demo/types";
    6 | 
    7 | const raw =
```

## Import Context
- Imports: 4
  - parser.ts: decodeEnvlop, extractOrders, mapOrderIds
  - pricing.ts: calcGrandTotal, formatTotal
  - validator.ts: assertValidOrders
  - types.ts: ApiEnvelopee, Order
- Imported By: 0

## Target File Content
```ts
// INTENTIONAL_MULTI_FILE_ERRORS: this file contains deliberate mistakes for AI+related testing.
import { decodeEnvlop, extractOrders, mapOrderIds } from "./ai-related-demo/parser";
import { calcGrandTotal, formatTotal } from "./ai-related-demo/pricing";
import { assertValidOrders } from "./ai-related-demo/validator";
import type { ApiEnvelopee, Order } from "./ai-related-demo/types";

const raw =
  '{"data":[{"id":"A-1","items":[{"sku":"S1","qty":2,"unitPrice":12.5}],"payment":"card"}],"traceId":"tr-22"}';

const envelope: ApiEnvelopee<Order[]> = decodeEnvlop(raw);
const childOrders = extractOrders(envelope);

const ids = mapOrderIds(childOrders);
const isValid = assertValidOrders(childOrders);
const grandTotal = calcGrandTotal(childOrders);
const summary = formatTotal(childOrders);
const firstPayment = childOrders[0].payment.toUpperCase();

export { ids, isValid, grandTotal, summary, firstPayment };

```

## Related Files (for reference)
### parser.ts
```ts
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

```

### pricing.ts
```ts
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

```

### validator.ts
```ts
// INTENTIONAL_MULTI_FILE_ERRORS: this file contains deliberate mistakes for AI+related testing.
import type { Order } from "./types";

export function assertValidOrders(orders: Order[]) {
  return orders.every(
    (order) => order.items.length > 0 && order.payment.length > 0,
  );
}

```

### types.ts
```ts
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

```

## Required Output
1. Fix root causes first, then downstream errors.
2. Apply corrections across ALL related files included in this context (not only target file).
3. Do NOT ask follow-up questions. Proceed autonomously with best-correct fixes.
4. Return full corrected content for every changed file.
5. Use this exact output format:
   ### FILE: <relative/path>
   ```<language>
   <full corrected file content>
   ```
6. If a file does not need changes, omit it.
7. Keep runtime behavior unchanged except necessary bug/type fixes.
8. Remove redundant checks and logical tautologies where safe to do so.
9. Improve business validation quality, not only type correctness.
10. For each validation condition touched, explain why it is meaningful.
