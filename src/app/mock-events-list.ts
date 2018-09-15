import { Event } from './event';

export const EVENTSLIST: Event[] = [
        {
          id: 1,
          name: "Community Volunteer Orientation",
          startTime: "2018-09-26T06:45:00.000Z",
          endTime: "2018-09-26T07:45:00.000Z",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
          isSelected: true,
          track: 'Community',
          location: 'HIL Ballroom of Americas A'
        },
        {
          id: 2,
          name: "Wednesday Keynote: Padmasree Warrior and Jessica Matthews",
          startTime: "2018-09-26T09:00:00.000Z",
          endTime: "2018-09-26T10:30:00.000Z",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
          isSelected: true,
          location: 'Toyota Center',
          speakers: 'Jessica O. Matthews, Padmasree Warrior'
        },
        {
          id: 3,
          name: "Faculty Lounge",
          startTime: "2018-09-26T11:00:00.000Z",
          endTime: "2018-09-26T18:00:00.000Z",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
          isSelected: false,
          location: 'HIL Meeting Room 340'
        },
        {
          id: 4,
          name: "Speaker Lounge",
          startTime: "2018-09-26T11:00:00.000Z",
          endTime: "2018-09-26T18:00:00.000Z",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
          isSelected: false,
          location: 'HIL Meeting Room 339'
        },
        {
          id: 5,
          name: "CR201: The Art of Self-Promotion: How to Beat the Bragging Taboo",
          startTime: "2018-09-26T11:30:00.000Z",
          endTime: "2018-09-26T12:30:00.000Z",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
          isSelected: false,
          location: 'HIL Lanier B',
          speakers: 'Irene Ryabaya, Diana Murakhovskaya'
        },
        {
          id: 6,
          name: "Technical Executive Forum (Invite Only)",
          startTime: "2018-09-27T07:45:00.000Z",
          endTime: "2018-09-27T17:30:00.000Z",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
          isSelected: false
        },
        {
          id: 7,
          name: "Faculty Lounge",
          startTime: "2018-09-27T09:00:00.000Z",
          endTime: "2018-09-27T17:30:00.000Z",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
          isSelected: true
        },
        {
          id: 8,
          name: "OT663: Falling Into Tech: the Non-Traditional Path",
          startTime: "2018-09-27T09:00:00.000Z",
          endTime: "2018-09-27T10:00:00.000Z",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
          isSelected: false
        },
        {
          id: 9,
          name: "AZ713: Building it Lite: Learn to Develop Apps for International Markets",
          startTime: "2018-09-27T09:00:00.000Z",
          endTime: "2018-09-27T09:20:00.000Z",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
          isSelected: false
        },
        {
          id: 10,
          name: "CE704: Streamline Streaming: Framework for Data Pipelines with Kafka",
          startTime: "2018-09-27T09:00:00.000Z",
          endTime: "2018-09-27T09:20:00.000Z",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
          isSelected: false
        },
        {
          id: 11,
          name: "DS707: Predict Suppliers Financial Health Score Using Deep Learning Models",
          startTime: "2018-09-28T09:00:00.000Z",
          endTime: "2018-09-28T09:20:00.000Z",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
          isSelected: false
        },
        {
          id: 12,
          name: "HI518: Accessibility and Innovation at Google",
          startTime: "2018-09-28T09:00:00.000Z",
          endTime: "2018-09-28T09:20:00.000Z",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
          isSelected: true
        },
        {
          id: 13,
          name: "Gallery: Our Time",
          startTime: "2018-09-28T09:00:00.000Z",
          endTime: "2018-09-28T14:00:00.000Z",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
          isSelected: false
        },
        {
          id: 14,
          name: "Featured Session: The Past, Present, and Future of the #METOO Movements",
          startTime: "2018-09-28T09:00:00.000Z",
          endTime: "2018-09-28T10:00:00.000Z",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
          isSelected: true
        },
        {
          id: 15,
          name: "Poster Session 5",
          startTime: "2018-09-28T09:00:00.000Z",
          endTime: "2018-09-28T11:30:00.000Z",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
          isSelected: false
        }
      ];
