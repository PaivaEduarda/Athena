using Microsoft.AspNetCore.Mvc;
using Athena_API.Data;
using Athena_API.Models;

namespace Athena_API.Controllers 
{
    [Route("api/[controller]")]
    [ApiController]
    public class RelatoController : ControllerBase
    {
        private readonly AthenaContext _context;
        public RelatoController(AthenaContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<List<Relato>> GetAll() 
        {
            return _context.Relato.ToList();
        }

        [HttpGet("{user}")]
        public ActionResult<Relato> Get(string user)
        {
            var result = _context.Relato.Where(r => r.id_usuario == user).FirstOrDefault();
            try
            {
                if (result == null)
                    return NotFound();

                return Ok(result);
            }
            catch
            {
                return result;
            }
        }

        [HttpPost]
        public async Task<ActionResult> PostRelato (PostRelato model)
        {
            try
            {
                Relato r = new Relato();
                r.relato = model.relato;
                r.rua = model.rua;
                r.bairro = model.bairro;
                r.cidade = model.cidade;
                r.dataRelato = model.dataRelato;
                r.id_usuario = model.id_usuario;
                _context.Relato.Add(r);
                if (await _context.SaveChangesAsync() == 1)
                {
                    return Ok();
                }
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, await _context.SaveChangesAsync());
            }
            return this.StatusCode(StatusCodes.Status500InternalServerError, "Ocorreu um erro! Tente mais tarde");
        }
    }
}