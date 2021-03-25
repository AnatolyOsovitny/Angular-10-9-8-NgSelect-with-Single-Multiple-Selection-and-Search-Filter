import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  items = [
    {id: 1, name: 'Python'},
    {id: 2, name: 'Node Js'},
    {id: 3, name: 'Java'},
    {id: 4, name: 'PHP', disabled: true},
    {id: 5, name: 'Django'},
    {id: 6, name: 'Angular'},
    {id: 7, name: 'Vue'},
    {id: 8, name: 'ReactJs'},
  ];

  selected = [
    {id: 2, name: 'Node Js'},
    {id: 8, name: 'ReactJs'}
  ];

   items2 = [
    {id: 1, name: 'Python', image: 'python.jpg'},
    {id: 2, name: 'Node Js', image: 'nodejs.jpg'},
    {id: 3, name: 'Java', image: 'java.jpg'},
    {id: 4, name: 'PHP', image: 'php.jpg', disabled: true},
    {id: 5, name: 'Django', image: 'django.jpg'},
    {id: 6, name: 'Angular', image: 'angular.jpg'},
    {id: 7, name: 'Vue', image: 'vue.jpg'},
    {id: 8, name: 'ReactJs', image: 'reactjs.jpg'},
  ];
  selected2 = [ 2, 8 ];
}
