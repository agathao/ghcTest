export class Event {
  id: number;
  name: string;
  location?: string;
  startTime: string;
  endTime: string;

  speakers?: string;
  description: string;
  isSelected?: boolean;
  hasConflict?: boolean;

  audienceLevel?: string;
  focusArea?: string;
  track?: string;
}
