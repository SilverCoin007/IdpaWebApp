import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  accordionItems = [
    { title: 'Was ist unser Projekt?', content: 'Dieses Projekt wurde im Rahmen der Interdisziplinären Projektarbeit (IDPA) an der Berufsfachschule BBBaden erarbeitet. Unser Ziel war es, die Zukunft der Autoindustrie zu untersuchen. Dabei haben wir uns intensiv mit den Themen wie autonomes Fahren und Elektroautos beschäftigt, um einen umfassenden Überblick über aktuelle Entwicklungen und Herausforderungen zu bieten.' },
    { title: 'Warum dieses Thema?', content: 'Die Fortbewegung spielt eine zentrale Rolle in unserem Alltag. Besonders die Autoindustrie steht vor großen Veränderungen, die uns neugierig gemacht haben. Themen wie Elektromobilität, autonomes Fahren und die Zukunft von Fahrzeugtechnologien sind nicht nur für uns von persönlichem Interesse, sondern haben auch gesellschaftliche Relevanz.' },
    { title: 'Was sind unsere Hauptthemen?', content: 'Wir haben uns auf zwei Hauptthemen fokussiert: autonomes Fahren und Elektroautos. Beim autonomen Fahren beschäftigen wir uns mit der Fahrzeugvernetzung und der aktuellen Entwicklung von Roboterautos. Beim Thema Elektroautos liegt der Fokus auf alternativen Antriebsformen, den Akkus und Batterien sowie der Nachhaltigkeit.' },
    { title: 'Welche Leitfragen bearbeiten wir?', content: 'Unsere Arbeit konzentriert sich auf drei zentrale Fragen. Erstens: Welche Hindernisse müssen überwunden werden, damit sich Elektroautos in der breiten Gesellschaft etablieren? Zweitens: Inwiefern verändern autonome Autos die Autoindustrie? Und drittens: Wie beeinflussen die laufenden Veränderungen die Arbeit der Beschäftigten in der Autoindustrie?' },
    { title: 'Wie sind wir bei unserer Recherche vorgegangen?', content: 'Wir haben uns auf umfangreiche Internetrecherchen und Interviews gestützt, um unser Wissen zu vertiefen. Zusätzlich haben wir ein Interview mit einem Experten aus der Automobilbranche geführt, um praxisnahe Einblicke in die Zukunft der Autoindustrie zu erhalten. Die Ergebnisse haben wir in einer Dokumentation zusammengefasst. Das spannendste haben wir in unserem Hörbuch vertont.' }
  ];

  openedIndex: number | null = 0;

  toggleAccordion(index: number) {
    this.openedIndex = this.openedIndex === index ? null : index;
  }
}