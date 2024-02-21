using Microsoft.AspNetCore.Mvc;
using Athena_API.Data;
using Athena_API.Models;

namespace Athena_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DenunciaController : ControllerBase
    {
        private readonly AthenaContext _context;

        public DenunciaController(AthenaContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<List<Denuncia>> GetAll()
        {
            return _context.Denuncia.ToList();
        }

        [HttpPost]
        public async Task<ActionResult> PostDenuncia (PostDenuncia denuncia)
        {
            try
            {
                Denuncia d = new Denuncia();
                d.longitude = denuncia.longitude;
                d.latitude = denuncia.latitude;
                d.id_usuario = denuncia.id_usuario;
                _context.Denuncia.Add(d);
                if (await _context.SaveChangesAsync() == 1)
                {
                    return Ok();
                }

            }
            catch
            {
                return this.StatusCode(StatusCodes.Status500InternalServerError, "Erro aqui");
            }
            return this.StatusCode(StatusCodes.Status500InternalServerError, _context.SaveChangesAsync());
        }
    }
}