using System.ComponentModel.DataAnnotations;

namespace Athena_API.Models
{
    public class UserLogin
    {
        [Key]
        [Required(ErrorMessage = "Usuario inválido")]
        public string usuario { get; set; } = string.Empty;

        [Required(ErrorMessage = "Senha inválida")]
        public string senha { get; set; } = string.Empty;
    }
}