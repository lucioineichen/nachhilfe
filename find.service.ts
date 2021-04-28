import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FindService {
  constructor() {}

  private get<T, P1 extends keyof NonNullable<T>>(
    obj: T,
    prop1: P1
  ): NonNullable<T>[P1] | undefined;

  private get<
    T,
    P1 extends keyof NonNullable<T>,
    P2 extends keyof NonNullable<NonNullable<T>[P1]>
  >(
    obj: T,
    prop1: P1,
    prop2: P2
  ): NonNullable<NonNullable<T>[P1]>[P2] | undefined;

  private get<
    T,
    P1 extends keyof NonNullable<T>,
    P2 extends keyof NonNullable<NonNullable<T>[P1]>,
    P3 extends keyof NonNullable<NonNullable<NonNullable<T>[P1]>[P2]>
  >(
    obj: T,
    prop1: P1,
    prop2: P2,
    prop3: P3
  ): NonNullable<NonNullable<NonNullable<T>[P1]>[P2]>[P3] | undefined;

  private get<
    T,
    P1 extends keyof NonNullable<T>,
    P2 extends keyof NonNullable<NonNullable<T>[P1]>,
    P3 extends keyof NonNullable<NonNullable<NonNullable<T>[P1]>[P2]>,
    P4 extends keyof NonNullable<
      NonNullable<NonNullable<NonNullable<T>[P1]>[P2]>[P3]
    >
  >(
    obj: T,
    prop1: P1,
    prop2: P2,
    prop3: P3,
    prop4: P4
  ):
    | NonNullable<NonNullable<NonNullable<NonNullable<T>[P1]>[P2]>[P3]>[P4]
    | undefined;

  // ...weiter für tiefer genestete Properties...

  private get(obj: any, ...props: string[]): any {
    return (
      obj &&
      props.reduce(
        (result, prop) => (result == null ? undefined : result[prop]),
        obj
      )
    );
  }

  private getUp(obj: any, path: string[]): any {
    if (path.length === 0) {
      return obj;
    }
    if (path.length === 1) {
      return this.get(obj, path[0]);
    }
    if (path.length === 2) {
      return this.get(obj, path[0], path[1]);
    }
    if (path.length === 3) {
      return this.get(obj, path[0], path[1], path[2]);
    }
    if (path.length === 4) {
      return this.get(obj, path[0], path[1], path[2], path[3]);
    }
    return null;
  }

  private getIndex(
    // arr: { id: string; [k: string]: any }[],
    arr: any,
    id: string
  ): number {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].id === id) {
        return i;
      }
    }
    return null;
  }

  public find(obj: any, path: string[]) {
    const p: any[] = path;
    for (let i = 0; i < p.length; i++) {
      if (this.getUp(obj, p.slice(i + 1)) == []) {
        p[i] = this.getIndex(p[i - 1], p[i]);
      }
    }
    return this.getUp(obj, p);
  }
}
