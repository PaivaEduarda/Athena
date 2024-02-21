using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Athena_API.Models
{
    public class Usuario
    {
        [Key]
        public string usuario { get; set; }
        public string senha { get; set; }
        public string endereco { get; set; } = string.Empty;
        public string telefone { get; set; } = string.Empty;
        public string nome { get; set; } = string.Empty;
        public string email { get; set; } = string.Empty;
        public string nomeSeguranca { get; set; } = string.Empty;
        public string telefoneSeguranca { get; set; } = string.Empty;
        public int altura { get; set; }
        public int peso { get; set; }
        public string? tipo_sanguineo { get; set; } = string.Empty;
        public string? doenca { get; set; } = string.Empty;
        public DateTime data_de_nascimento { get; set; }
        public ICollection<Relato>? Relato { get; set; }
        public ICollection<Denuncia>? Denuncia { get; set; }
    }
}