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
