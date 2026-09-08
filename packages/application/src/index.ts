import type { Frozen } from "@geomotion/shared";

export interface EventEnvelope<Type extends string, Payload> {
  readonly eventId: string;
  readonly eventType: Type;
  readonly eventVersion: 1;
  readonly occurredAt: string;
  readonly correlationId: string;
  readonly payload: Frozen<Payload>;
}

export interface SubscriberFailure {
  readonly subscriberIndex: number;
  readonly error: unknown;
}

export interface DispatchReport {
  readonly delivered: number;
  readonly failures: readonly SubscriberFailure[];
}

export type EventSubscriber<Event> = (event: Readonly<Event>) => void;

export class InProcessEventDispatcher<
  Event extends EventEnvelope<string, unknown>,
> {
  readonly #subscribers: EventSubscriber<Event>[] = [];

  subscribe(subscriber: EventSubscriber<Event>): () => void {
    this.#subscribers.push(subscriber);

    return () => {
      const index = this.#subscribers.indexOf(subscriber);
      if (index >= 0) {
        this.#subscribers.splice(index, 1);
      }
    };
  }

  dispatch(event: Readonly<Event>): DispatchReport {
    const failures: SubscriberFailure[] = [];
    let delivered = 0;

    for (const [subscriberIndex, subscriber] of this.#subscribers.entries()) {
      try {
        subscriber(event);
        delivered += 1;
      } catch (error: unknown) {
        failures.push({ subscriberIndex, error });
      }
    }

    return { delivered, failures };
  }
}
