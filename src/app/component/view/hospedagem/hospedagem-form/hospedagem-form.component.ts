import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaQuarto } from 'src/app/enum/categoria-quarto/categoria-quarto.component';
import { Hospedagem } from 'src/app/model/hospedagem.model';
import { Hospede } from 'src/app/model/hospede.model';
import { Hotel } from 'src/app/model/hotel.model';
import { HospedagemService } from 'src/app/service/hospedagem.service';

@Component({
  selector: 'app-hospedagem-form',
  templateUrl: './hospedagem-form.component.html',
  styleUrls: ['./hospedagem-form.component.css']
})
export class HospedagemFormComponent implements OnInit {

  titulo: string = "Cadastrar nova hospedagem";

  hospedagem: Hospedagem = {
    idQuarto: {
      categoriaQuarto: CategoriaQuarto.PADRAO,
      hotel: {
        nmHotel: "",
        endereco: "",
        qtdEstrelas: 0
      },
      qtdLeito: 0,
      prDiaria: 0.0,
      nrQuarto: 0
    },
    idHospede: {
      nmHospede: "",
      cpf: "", 
      dtNascimento: ""
    },
    dtCheckin: '',
    dtCheckout: ''
  }

  public categorias = Object.values(CategoriaQuarto);
  public hospedes : Hospede[] = [];
  public hoteis : Hotel[] = [];

  constructor(
    private service: HospedagemService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  salvar(): void {
    this.service.create(this.hospedagem).subscribe(() =>{
      this.service.showMessage("Hospedagem cadastrada com sucesso!")
      this.router.navigate(['/hospedagens']);
    });
  }

}
