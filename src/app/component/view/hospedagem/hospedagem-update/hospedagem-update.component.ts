import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaQuarto } from 'src/app/enum/categoria-quarto/categoria-quarto.component';
import { Hospedagem } from 'src/app/model/hospedagem.model';
import { HospedagemService } from 'src/app/service/hospedagem.service';
import { HospedeService } from 'src/app/service/hospede.service';

@Component({
  selector: 'app-hospedagem-update',
  templateUrl: './../hospedagem-form/hospedagem-form.component.html',
  styleUrls: ['./../hospedagem-form/hospedagem-form.component.css']
})
export class HospedagemUpdateComponent implements OnInit {

  titulo: string = "Alterar dados da hospedagem";

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

  constructor(
    private route: ActivatedRoute,
    private service: HospedagemService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if(id != null){
      this.service.findById(id).subscribe(hospedagem => {
        this.hospedagem = hospedagem;
      })
    }
  }

  salvar(): void {
    this.service.update(this.hospedagem).subscribe(() =>{
      this.service.showMessage("hospedagem atualizada sucesso!")
      this.router.navigate(['/hospedagens']);
    });
  }


}
