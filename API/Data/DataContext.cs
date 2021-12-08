using API.Models;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    //Identity
    public class DataContext : DbContext
    {
        //Entity Framework - Code First
        //Construtor
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        //Lista de propriedades de classes de modelo que vão virar as tabelas no banco
        public DbSet<Folha> Folhas { get; set; }
        public DbSet<Funcionario> Funcionarios { get; set; }
    }
}