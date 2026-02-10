import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proposal',
  templateUrl: './proposal.component.html',
  styleUrls: ['./proposal.component.scss']
})
export class ProposalComponent implements OnInit {

  noStyle = {
    top: '55%',
    left: '55%'
  };

  constructor() {}

  ngOnInit(): void {}

  moveNo() {
    const x = Math.random() * 80;
    const y = Math.random() * 80;

    this.noStyle = {
      top: y + '%',
      left: x + '%'
    };
  }

  yesClicked() {
    alert('Yayyy 😍💖 Forever begins now!');
  }
}
