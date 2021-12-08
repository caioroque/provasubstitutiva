import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IndexComponent } from "./components/views/home/index/index.component";
import { CadastrarFolhaComponent } from "./components/views/folha/cadastrar-folha/cadastrar-folha.component";
import { ListarfolhaComponent } from "./components/views/folha/listar-folha/listar-folha.component";
import { DeleteFolhaComponent } from "./components/views/folha/delete-folha/delete-folha.component";
import { CadastrarFuncionarioComponent } from "./components/views/funcionario/cadastrar-funcionario/cadastrar-funcionario.component";


const routes: Routes = [
    {
        path: "",
        component: IndexComponent,
    },
    {
        path: "funcionario/cadastrar-funcionario",
        component: CadastrarFuncionarioComponent,
    },
    {
        path: "folha/deletar",
        component: DeleteFolhaComponent,
    },
    {
        path: "folha/listar",
        component: ListarfolhaComponent,
    },
    {
        path: "folha/cadastrar-folha",
        component: CadastrarFolhaComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
