using System;

namespace API.Models
{
    public class Folha
    {
        //Construtor
        public Folha() => CriadoEm = DateTime.Now;

        //Atributos
        public int Id { get; set; }
        public string quantHoras { get; set; }
        public string valorHoras { get; set; }
        public string mes { get; set; }
        public string ano { get; set; }
        public Funcionario Funcionario { get; set; }
        public int FuncionarioId { get; set; }
        public DateTime CriadoEm { get; set; }
    }
}