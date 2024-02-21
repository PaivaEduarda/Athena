using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Athena_API.Models
{
    public class Relato
    {
        [Key]
        public string relato { get; set; } = string.Empty;
        public string rua { get; set; } = string.Empty;
        public string bairro { get; set; } = string.Empty;
        public string cidade { get; set; } = string.Empty;
        public DateTime dataRelato { get; set; }
        public string? id_usuario { get; set; } = string.Empty;
        public virtual Usuario? Usuario { get; set; }
    }
}