interface Event {
  name: string;
  date?: string;
  isCanceled?: boolean;
  type?: string;
}
export function combineObjects<T extends Record<string, any>>(obj1: T, obj2: T): T {
  // Combine the objects
  // if the objects have the same key, use the value from obj2
  // Example 1: const obj1 = {name: 'Alice', age: 25};
  // const obj2 = {job: 'teacher'};
  // Expected output: {name: 'Alice', age: 25, job: 'teacher'}
  // Example 2: const obj1 = {name: 'Alice', age: 25};
  // const obj2 = {name: 'John', age: 21};
  // Expected output: {name: 'John', age: 21}
  const combinedObj = { ...obj1 };

  for (let key in obj2) {
    combinedObj[key] = obj2[key];
  }
  return combinedObj;
}

export function changeValueOf(obj: Record<string, any>, key: string, value: any): void {
  // update the obj in place, do not return a new obj
  // Change the value of the key in the object
  // Example 1: const obj = {name: 'Alice', age: 25};
  // changeValueOf(obj, 'age', 21);
  // Expected obj: {name: 'Alice', age: 21}
  // Example 2: const obj = {name: 'Alice', age: 25};
  // changeValueOf(obj, 'job', 'teacher');
  // Expected obj: {name: 'Alice', age: 25, job: 'teacher'}
  obj[key] = value;
}

export function cancelExpiredEvents(events: Event[]): void {
  // update the events in place, do not return a new obj

  // Cancel the expired events
  // Example: const events = [
  //   event1: {name: 'Birthday Party', date: '2020-01-01', isCanceled: false},
  //   event2: {name: 'New Year Party', date: '2021-01-01', isCanceled: false},
  //   event3: {name: 'Christmas Party', date: '2024-12-25', isCanceled: false}
  // ];
  // Expected output: 
  // an array of events, but event1 and event2 are canceled, event3 is not canceled
  const today = new Date();

  for (let event of events) {
    if (event.date) {
      const eventDate = new Date(event.date);
      if (eventDate <= today) {
        event.isCanceled = true;
      }
    }
  }
}

export function findEventByType(events: Event[], type: string): Event[] {
  // Find the event by type
  // Example: const events = [
  //   event1: {name: 'Birthday Party', type: 'private'},
  //   event2: {name: 'New Year Party', type: 'public'},
  //   event3: {name: 'Christmas Party', type: 'private'}
  // ];
  // findEventByType(events, 'private');
  // Expected output: [{name: 'Birthday Party', type: 'private'}, {name: 'Christmas Party', type: 'private'}]
  const foundEvents: Event[] = [];

  for (let event of events) {
    if (event.type === type) {
      foundEvents.push(event);
    }
  }
  return foundEvents;
}
