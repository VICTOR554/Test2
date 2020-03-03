import { Injectable } from '@angular/core';
import { Homes, Note, Task } from './home.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  // tslint:disable-next-line: variable-name
  private _home: Homes[] = [
    new Homes(
      '1',
      10,
      'HCI',
      'lecture',
      '12:00 am',
      '1:00 pm',
      'Victor Lawuyi',
      'WLFB',

    ),
    new Homes(
      '2',
      11,
      'Software Engineering',
      'lab',
      '2:00 pm',
      '3:00 pm',
      'David Jackson',
      'HWLL',
    ),
    new Homes(
      '3',
      12,
      'Games and Design',
      'seminar',
      '3:00 pm',
      '4:00 pm',
      'Travis Scott',
      'ESGW',

    ),
    new Homes(
      '4',
      13,
      'Advanced Topics',
      'exam',
      '4:00 pm',
      '5:00 pm',
      'Chris Brown',
      'Lect D',
    ),
    new Homes(
      '5',
      14,
      'Cyber Security',
      'lecture',
      '5:00 pm',
      '6:00 pm',
      'Clark Kent',
      'Lect 202',
    )
  ];

  // tslint:disable-next-line: variable-name
  private _notes: Note[] = [
    new Note(
      '1',
      'Calender Problems',
      'HCI',
      'HCI talks about interaction between the system',

    ),
    new Note(
      '2',
      'Tabs',
      'Software Engineering',
      'Software Engineering ia about how effective the system is',

    ),
    new Note(
      '3',
      'Ionic',
      'Games and Design',
      'Teaches you how to manipulate pixels to create games of your own design',

    ),
    new Note(
      '4',
      'Block Chain in the supply chain',
      'Advanced Topics',
      'Teaches you about cloud service and different data types',

    ),
    new Note(
      '5',
      'Dissertation',
      'Cyber Security',
      'Teaches you how to create firewalls to stop hackers',
    )

  ];

  // tslint:disable-next-line: variable-name
  private _tasks: Task[] = [
    new Task(
      '1',
      '12/2/2020',
      'Build sentien life',
      'HCI',
      'Study the new article of advanced AI',

    ),
    new Task(
      '2',
      '18/2/2020',
      'Check if code smell',
      'Software Engineering',
      'Study the the lecture on code smells',
    ),
    new Task(
      '3',
      '20/2/2020',
      'Research Call of duty',
      'Games and Design',
      'Design Call of duty main frame',
    ),
    new Task(
      '4',
      '24/2/2020',
      'Study cloud service',
      'Advanced Topics',
      'Study how is cloud service advancing to the new age',
    ),
    new Task(
      '5',
      '26/2/2020',
      'Build firewall',
      'Cyber Security',
      'Build a firewall to stop the self replecating virus',
    )

  ];


  get home() {
    return [...this._home];
  }

  get notes() {
    return [...this._notes];
  }
  get tasks() {
    return [...this._tasks];
  }

  getHomes(id: string) {
    return {...this._home.find(p => p.id === id )};
  }
  getNote(id: string) {
    return {...this._notes.find(p => p.id === id )};
  }
  getTask(id: string) {
    return {...this._tasks.find(p => p.id === id )};
  }
  constructor() { }
}
