using System;
using System.Collections.Generic;
using System.Linq;
using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/folha")]
    public class FolhaController : ControllerBase
    {
        private readonly DataContext _context;
        public FolhaController(DataContext context)
        {
            _context = context;
        }

        [Route("create")]
        [HttpPost]
        public IActionResult Create([FromBody] Folha folha)
        {
            folha.Funcionario = _context.Funcionarios.Find(folha.FuncionarioId);
            var folhaexistente = _context.Folhas.FirstOrDefault(f => f.FuncionarioId == folha.FuncionarioId && f.mes == folha.mes && f.ano == folha.ano);
            if (folhaexistente == null){
            _context.Folhas.Add(folha);
            _context.SaveChanges();
            return Created("", folha);
            }
            return BadRequest();
        }

        [Route("list")]
        [HttpGet]
        public IActionResult List() =>
            Ok(_context.Folhas.Include(folha => folha.Funcionario).ToList());

        [Route("deleteById/{id}")]
        [HttpDelete]
        public IActionResult DeleteById(int id){
            Folha folha = _context.Folhas.FirstOrDefault(folha => folha.Id == id);
            if (folha == null)
            {
                return NotFound();
            }
            _context.Folhas.Remove(folha);
            _context.SaveChanges();
            return Ok(_context.Folhas.ToList());
        }

        [Route("update")]
        [HttpPut]
        public IActionResult Update([FromBody] Folha folha)
        {
            _context.Folhas.Update(folha);
            _context.SaveChanges();
            return Ok(folha);
        }
    }
}