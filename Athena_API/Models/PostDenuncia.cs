using System.ComponentModel.DataAnnotations;

namespace Athena_API.Models
{
    public class PostDenuncia
    {
        public int numero_denuncia { get; set; }

        public string id_usuario { get; set; } = string.Empty;
        public string longitude { get; set; } = string.Empty;
        public string latitude { get; set; } = string.Empty;
    }
}