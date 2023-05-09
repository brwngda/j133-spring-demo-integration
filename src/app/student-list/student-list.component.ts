import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Student} from "../model/student";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {

  constructor(private httpClient: HttpClient) {
    this.getStudents()
  }

getStudents() : void {
    this.httpClient.get<Student[]>("http://localhost:8080/student")
      .subscribe({
        next: dane => {
          console.log(dane)
        },
        error: err => {
          console.log("Error: " + err)
        }
      })
}

}
