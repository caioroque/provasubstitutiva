using System.Linq;
using API.Data;
using API.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/funcionario")]
    public class FuncionarioController : ControllerBase
    {
        private readonly DataContext _context;
        public FuncionarioController(DataContext context)
        {
            _context = context;
        }

        [Route("create")]
        [HttpPost]
        public IActionResult Create([FromBody] Funcionario funcionario)
        {
            _context.Funcionarios.Add(funcionario);
            _context.SaveChanges();
            return Created("", funcionario);
        }

        [Route("list")]
        [HttpGet]
        public IActionResult List() => Ok(_context.Funcionarios.ToList());

        //GET: api/funcionario/delete/Bolacha
        [HttpDelete]
        [Route("delete/{name}")]
        public IActionResult Delete(string name)
        {
            Funcionario funcionario = _context.Funcionarios.FirstOrDefault(funcionario => funcionario.Nome == name);
            if (funcionario == null)
            {
                return NotFound();
            }
            _context.Funcionarios.Remove(funcionario);
            _context.SaveChanges();
            return Ok(_context.Funcionarios.ToList());
        }

        [Route("update")]
        [HttpPut]
        public IActionResult Update([FromBody] Funcionario funcionario)
        {
            _context.Funcionarios.Update(funcionario);
            _context.SaveChanges();
            return Ok(funcionario);
        }

    }
}