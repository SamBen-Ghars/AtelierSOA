import { Component } from '@angular/core';
import { LogementService } from '../service/logement.service';

@Component({
  selector: 'app-logement',
  templateUrl: './logement.component.html',
  styleUrls: ['./logement.component.css']
})
export class LogementComponent {



  logements: any[] = []; // Store events here

  constructor(private sevicelogment: LogementService) {}

  ngOnInit(): void {
    this.fetchEvents();
  }

  fetchEvents(): void {
    this.sevicelogment.getLogement().subscribe(
      (data) => {
        this.logements = data;
      },
      (error) => {
        console.error('Error fetching events:', error);
      }
    );
  }


  supprimerLogement(reference: number) {
    if (confirm("Voulez-vous vraiment supprimer ce logement ?")) {
      this.sevicelogment.deleteLogement(reference).subscribe(response => {
        alert(response);
        this.fetchEvents(); // Recharger la liste après suppression
      });
    }
  }

  modifierLogement(logement: any) {
    // Afficher un formulaire de modification
    console.log("Modification du logement", logement);
  }

}
