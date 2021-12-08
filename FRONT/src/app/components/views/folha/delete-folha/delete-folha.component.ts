import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Folha } from 'src/app/models/folha';
import { FolhaService } from 'src/app/services/folha.service';

@Component({
  selector: 'app-delete-folha',
  templateUrl: './delete-folha.component.html',
  styleUrls: ['./delete-folha.component.css']
})
export class DeleteFolhaComponent implements OnInit {
  id!: Number;
  folhas!: Folha[];
  folhaId!: Number;
  constructor(
    private folhaService: FolhaService,
    private router: Router) { }

  ngOnInit(): void {
    this.folhaService.list().subscribe((folha) => {
      this.folhas = folha;
      console.table(folha);
  });
}

deletar(): void {
    this.folhaService.delete(this.id).subscribe(() => {
      console.log('${this.id} Deletado');
      this.router.navigate(["folha/listar"])
    })
}
}
