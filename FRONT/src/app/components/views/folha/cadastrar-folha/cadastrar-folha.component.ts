import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Folha } from 'src/app/models/folha';
import { Funcionario } from 'src/app/models/funcionario';
import { FolhaService } from 'src/app/services/folha.service';
import { FuncionarioService } from 'src/app/services/funcionario.service';

@Component({
  selector: 'app-cadastrar-folha',
  templateUrl: './cadastrar-folha.component.html',
  styleUrls: ['./cadastrar-folha.component.css']
})
export class CadastrarFolhaComponent implements OnInit {
  quantHoras!: string;
  valorHoras!: string;
  mes!: string;
  ano!: string;
  funcionario!: Funcionario[];
  funcionarioId!: number;
  msgError!: any;  
  
  constructor(
      private folhaService: FolhaService,
      private service: FuncionarioService,
      private router: Router
  ) {}

  ngOnInit(): void {
      this.service.list().subscribe((funcionarios) => {
          this.funcionario = funcionarios;
          console.table(funcionarios);
      });
  }

  cadastrar(): void {
      let folha: Folha = {
        quantHoras: this.quantHoras,
        valorHoras: this.valorHoras,
        mes: this.mes,
        ano: this.ano,
        funcionarioId: this.funcionarioId
      };
      this.folhaService.create(folha).subscribe((folha) => {
          this.router.navigate(["folha/listar"]);
      },(error) => {
        this.msgError = error.error;
        setTimeout(() => {
            this.msgError = null;
        }, 6000);
    });
    
  }
}

