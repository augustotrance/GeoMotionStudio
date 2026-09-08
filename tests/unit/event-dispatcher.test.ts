import {
  InProcessEventDispatcher,
  type EventEnvelope,
} from "@geomotion/application";
import { describe, expect, it, vi } from "vitest";

interface TechnicalPayload {
  readonly marker: "foundation";
}

type TechnicalEvent = EventEnvelope<"foundation.checked", TechnicalPayload>;

const technicalEvent: TechnicalEvent = {
  eventId: "44444444-4444-4444-8444-444444444444",
  eventType: "foundation.checked",
  eventVersion: 1,
  occurredAt: "2026-09-08T00:00:00.000Z",
  correlationId: "55555555-5555-4555-8555-555555555555",
  payload: { marker: "foundation" },
};

describe("InProcessEventDispatcher", () => {
  it("despacha en orden y una sola vez", () => {
    const dispatcher = new InProcessEventDispatcher<TechnicalEvent>();
    const order: number[] = [];
    dispatcher.subscribe(() => order.push(1));
    dispatcher.subscribe(() => order.push(2));

    const report = dispatcher.dispatch(technicalEvent);

    expect(order).toEqual([1, 2]);
    expect(report).toEqual({ delivered: 2, failures: [] });
  });

  it("contiene el error de un suscriptor y continúa", () => {
    const dispatcher = new InProcessEventDispatcher<TechnicalEvent>();
    const healthy = vi.fn();
    dispatcher.subscribe(() => {
      throw new Error("fallo técnico inyectado");
    });
    dispatcher.subscribe(healthy);

    const report = dispatcher.dispatch(technicalEvent);

    expect(report.delivered).toBe(1);
    expect(report.failures).toHaveLength(1);
    expect(report.failures[0]?.subscriberIndex).toBe(0);
    expect(healthy).toHaveBeenCalledOnce();
  });

  it("permite desuscribir sin estado global", () => {
    const dispatcher = new InProcessEventDispatcher<TechnicalEvent>();
    const subscriber = vi.fn();
    const unsubscribe = dispatcher.subscribe(subscriber);
    unsubscribe();

    const report = dispatcher.dispatch(technicalEvent);

    expect(report.delivered).toBe(0);
    expect(subscriber).not.toHaveBeenCalled();

    expect(() => unsubscribe()).not.toThrow();
  });
});
