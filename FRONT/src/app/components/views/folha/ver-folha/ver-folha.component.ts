import { Component, OnInit } from '@angular/core';
import { Folha } from 'src/app/models/folha';
import { Funcionario } from 'src/app/models/funcionario';
import { FolhaService } from 'src/app/services/folha.service';

@Component({
  selector: 'app-ver-folha',
  templateUrl: './ver-folha.component.html',
  styleUrls: ['./ver-folha.component.css']
})
export class VerFolhaComponent implements OnInit {
  id!: Number;
  funcionario!: Funcionario[];
  fonteDados: Folha[] = [];
  colunasExibidas: String[] = [
      "id",
      "quantHoras",
      "valorHoras",
      "mes",
      "ano",
      "funcionario",
  ];

  constructor(
    private service: FolhaService,) {}

  ngOnInit(): void {
      this.service.list().subscribe((folha) => {
          this.fonteDados = folha;
      });
  }
}
