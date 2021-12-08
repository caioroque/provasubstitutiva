import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/models/funcionario';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-cadastrar-funcionario',
  templateUrl: './cadastrar-funcionario.component.html',
  styleUrls: ['./cadastrar-funcionario.component.css']
})
export class CadastrarFuncionarioComponent implements OnInit {
  nome!: string;
  cpf!: string;

  constructor(
      private funcionarioService: FuncionarioService,
      private router: Router
  ) {}

  ngOnInit(): void {
  }

  cadastrar(): void {
      let funcionario: Funcionario = {
          nome: this.nome,
          cpf: this.cpf,

      };
      this.funcionarioService.create(funcionario).subscribe((usuario) => {
          this.router.navigate(["folha/listar"]);
      });
  }
}
