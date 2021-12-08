import { Funcionario } from 'src/app/models/funcionario';
import { Component, OnInit } from '@angular/core';
import { Folha } from 'src/app/models/folha';
import { FolhaService } from 'src/app/services/folha.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-listar-folha',
  templateUrl: './listar-folha.component.html',
  styleUrls: ['./listar-folha.component.css']
})
export class ListarfolhaComponent implements OnInit {
  id!: Number;
  funcionario: Funcionario[] = [];
  fonteDados: Folha[] = [];
  matT!: MatTableDataSource<Folha>;
  colunasExibidas: String[] = [
      "id",
      "funcionario",
      "cpf",
      "salarioBruto",
      "impostoRenda",
      "inss",
      "fgts",
      "salarioLiquido",
  ];

  constructor(private service: FolhaService,) {}

  ngOnInit(): void {
      this.service.list().subscribe((folha) => {
          this.fonteDados = folha;
          this.matT = new MatTableDataSource<Folha>( folha );
      });
  }

  public formatData(mes: number, ano: number){
    if(mes.toString().length == 1){
      return `0${mes}/${ano}`;
    }
    return `0${mes}/${ano}`;
  }

  public calcularSalarioBruto(quantHoras: number, valorHoras: number){
    return quantHoras * valorHoras;
  }

  public calcularImpostoRenda(quantHoras: number, valorHoras: number){
    let salarioBruto = this.calcularSalarioBruto(quantHoras, valorHoras);
    if(salarioBruto <= 1903.98){
      return 0
  }else if(salarioBruto > 1903.99 && salarioBruto <= 2826.65){
      return ((salarioBruto * 7.5) / 100) - 142.80;
  }else if(salarioBruto > 2826.66 && salarioBruto <= 3751.05){
      return ((salarioBruto * 15) / 100) - 354.80;
  }else if(salarioBruto > 3751.06 && salarioBruto <= 4664.68){
      return ((salarioBruto * 22.5) / 100) - 636.13;
  }else{
      return ((salarioBruto * 27.5) / 100) - 869.36;
  }
  }

  public calcularInss(quantHoras: number, valorHoras: number){
    let salarioBruto = this.calcularSalarioBruto(quantHoras, valorHoras);
    if(salarioBruto <= 1659.38){
      return (salarioBruto * 8) / 100;
    }else if(salarioBruto > 1659.39 && salarioBruto <= 2765.66){
      return (salarioBruto * 9) / 100;
    }else if(salarioBruto > 2765.66 && salarioBruto <= 5537.31){
      return (salarioBruto * 11) / 100;
    }else{
      return 608.44;
  }
  }

  public calcularFgts(quantHoras: number, valorHoras: number){
    let salarioBruto = this.calcularSalarioBruto(quantHoras, valorHoras);
    return (salarioBruto * 8) / 100;
  }

  public calcularSalarioLiquido(quantHoras: number, valorHoras: number){
    let salarioBruto = this.calcularSalarioBruto(quantHoras, valorHoras);
    let impostoRenda = this.calcularImpostoRenda(quantHoras, valorHoras);
    let inss = this.calcularInss(quantHoras, valorHoras);
    return salarioBruto - impostoRenda - inss;
  }

}

