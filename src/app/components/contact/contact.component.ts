import { Component } from '@angular/core';
import { FeedbackService } from 'src/app/services/feedback.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  name: any;
  email: any;
  message: any;
  constructor(private feedbackService: FeedbackService, private router: Router) { }

  ngOnInit(): void{

  }

  onSubmit(){
    const new_feedback = {
      name: this.name,
      email: this.email,
      message: this.message
    }
    this.feedbackService.addfeedback(new_feedback).subscribe(() => this.router.navigate(['/thankyou']));
   }
}
