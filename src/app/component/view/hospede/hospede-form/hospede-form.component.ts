import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hospede } from 'src/app/model/hospede.model';
import { HospedeService } from 'src/app/service/hospede.service';

@Component({
  selector: 'app-hospede-form',
  templateUrl: './hospede-form.component.html',
  styleUrls: ['./hospede-form.component.css']
})
export class HospedeFormComponent implements OnInit {

  titulo: string = "Cadastrar novo Hospede";

  hospede: Hospede = {
    nmHospede: "",
    cpf: "", 
    dtNascimento: ""
  }

  constructor(
    private service: HospedeService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  salvar(): void {
    this.service.create(this.hospede).subscribe(() =>{
      this.service.showMessage("Hospede cadastro com sucesso!")
      this.router.navigate(['/hospedes']);
    });
  }

}
