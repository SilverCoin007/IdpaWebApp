import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})

export class TeamComponent {
  accordionItems = [
    { title: 'Benjamin Senti', 
      subtitle: 'Applikationsentwickler und Autoliebhaber',
      content: 'Benjamin, oder Beni, so wie er von seinen Freunden genannt wird, kannte sich bereits vor dem Projekt am besten von allen mit Autos aus. Sein Traumauto ist ein Toyota GT 86, wobei dieser Traum schon bald in Erfüllung geht. Seine Kenntisse über Autos und das Interesse an dieser Branche, machen ihn zu einem wichtigen Mitglied des Teams.' },
    { title: 'Simon Hunziker', 
      subtitle: 'Systemtechniker und Tennisprofi',
      content: 'Simon ist ein überaus sportlicher Mensch und spielt in jeder freien Minute gerne Tennis. Auch abseits des Platzes, erkennt man an seinen immer weissen Tennissocken, dass er ein Tennisprofi sein muss. Mit seinem Ehrgeiz und durchhaltevermögen hat er dem Team immer wieder den richtigen Weg gezeigt.' },
    { title: 'Severin Probst', 
      subtitle: 'Applikationsentwickler und stolzer Teslafahrer',
      content: 'Wenn jemand den perfekten Deal auf AutoScout kennt, dann ist es Severin. Wenn er mal nicht nebenbei erwähnen muss, wie gut Teslas sind, sucht er auf AutoScout sein nächstes Traumauto. "Soll es ein Cabrio sein oder nicht?" ist momentan die Frage. Seine Erfahrungen mit Elektroautos im Alltag ergänzt das Team und bringt mit seiner Begeisterung für Technik immer wieder neue Ideen. ' },
    { title: 'Silvan Stöckli', 
      subtitle: 'Applikationsentwickler und Fitnessguru',
      content: 'Auch wenn er sich nicht so viel wie andere auf AutoScout aufhält, verbringt er seine Zeit mit Autowasch-Videos, Tagträume von einem Ford Mustang oder im Fitnesscenter. Wenn es irgendwo hingeht, dann mit dem Auto. Mit seiner Expertise rund um das Thema Webentwicklung macht ihn das zu einem wichtigen Mitglied der Gruppe.' },
  ];

  openedIndex: number | null = 0;

  toggleAccordion(index: number) {
    this.openedIndex = this.openedIndex === index ? null : index;
  }
}

