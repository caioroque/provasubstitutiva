import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Folha } from "src/app/models/folha";

@Component({
    selector: "app-index",
    templateUrl: "./index.component.html",
    styleUrls: ["./index.component.css"],
})
export class IndexComponent implements OnInit {
    folha!: Folha[];

    constructor(
        private router: Router
    ) {}

    ngOnInit(): void {
    }
    cadastrarfuncionario(): void {
        this.router.navigate(["/funcionario/cadastrar-funcionario"]);
    }
    cadastrarfolha(): void {
        this.router.navigate(["/folha/cadastrar-folha"]);
    }
}
