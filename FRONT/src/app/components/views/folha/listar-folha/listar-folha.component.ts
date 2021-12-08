import { Funcionario } from 'src/app/models/funcionario';
import { Component, OnInit } from '@angular/core';
import { Folha } from 'src/app/models/folha';
import { FolhaService } from 'src/app/services/folha.service';

@Component({
  selector: 'app-listar-folha',
  templateUrl: './listar-folha.component.html',
  styleUrls: ['./listar-folha.component.css']
})
export class ListarfolhaComponent implements OnInit {
  id!: Number;
  funcionario: Funcionario[] = [];
  fonteDados: Folha[] = [];
  colunasExibidas: String[] = [
      "id",
      "quantHoras",
      "valorHoras",
      "ano",
      "mes",
      "funcionario",
      "vercompromisso",
  ];

  constructor(private service: FolhaService,) {}

  ngOnInit(): void {
      this.service.list().subscribe((folha) => {
          this.fonteDados = folha;
      });
  }
}

