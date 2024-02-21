using Microsoft.AspNetCore.Mvc;
using Athena_API.Data;
using Athena_API.Models;

namespace Athena_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        private readonly AthenaContext _context;
        public UsuarioController(AthenaContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<List<Usuario>> GetAll()
        {
            return _context.Usuario.ToList();
        }

        [HttpGet("{user}")]
        public ActionResult<Usuario> GetUsuario(string user)
        {
            var result = _context.Usuario.Where(u => u.usuario == user).FirstOrDefault();
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
        public async Task<ActionResult> PostUsuario (Usuario user)
        {
            try
            {
                _context.Usuario.Add(user);
                if (await _context.SaveChangesAsync() == 1)
                {
                    return Ok();
                }
            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Ocorreu um erro! Tente mais tarde");
            }
            return BadRequest();
        }
    }
}