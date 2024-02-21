using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json;
using Athena_API.Data;
using Athena_API.Models;

namespace Athena_API.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class LoginController: ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly AthenaContext? _context;

        public LoginController(IConfiguration configuration, AthenaContext context)
        {
            _configuration = configuration;
            _context = context;
        }

        [HttpPost("login")]
        [AllowAnonymous]
        public ActionResult<dynamic> Login([FromBody] UserLogin usuario)
        {
            var user = _context.Usuario.Where(u => u.usuario == usuario.usuario && u.senha == usuario.senha).FirstOrDefault();

            if (user == null)
                return Unauthorized("Usuário ou senha inválidos");
            else
                this.StatusCode(StatusCodes.Status500InternalServerError, user );
            return GerarToken(user);
        }

        [HttpGet]
        [Route("authenticated")]
        [Authorize]
        public string Authenticated() => String.Format(User.Identity.Name);
        
        [NonAction]
        public string GerarToken(Usuario user) 
        {
            var authClaims = new List<Claim> {
                new Claim(ClaimTypes.Name, user.usuario),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
            };

            var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["JWT:Secret"]));

            var token = new JwtSecurityToken(
                expires: DateTime.Now.AddHours(24),
                issuer: _configuration["JWT:ValidIssuer"],
                audience: _configuration["JWT:ValidAudience"],
                claims: authClaims,
                signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256)
                );
            
            user.senha = "";
            var res = new 
            {
                token = new JwtSecurityTokenHandler().WriteToken(token),
                user = user
            };
        
            return JsonConvert.SerializeObject(res);
        }
    }
}