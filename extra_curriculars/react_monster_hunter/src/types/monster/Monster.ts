export interface Monster {
  id: number;
  name: string;
  maxHitPoints: number;
  weakness: Element[];
  hitThing: () => boolean;
}
