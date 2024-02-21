using Microsoft.EntityFrameworkCore;
using Athena_API.Models;
using System.Diagnostics.CodeAnalysis;

namespace Athena_API.Data 
{
    public class AthenaContext: DbContext
    {
        protected readonly IConfiguration Configuration;
        public AthenaContext(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            options.UseSqlServer(Configuration.GetConnectionString("StringConexaoSQLServer"));
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Usuario>()
                        .HasMany(e => e.Relato)
                        .WithOne(e => e.Usuario)
                        .HasForeignKey(e => e.id_usuario)
                        .HasPrincipalKey(e => e.usuario);
            
            modelBuilder.Entity<Usuario>()
                        .HasMany(e => e.Denuncia)
                        .WithOne(e => e.Usuario)
                        .HasForeignKey(e => e.id_usuario)
                        .HasPrincipalKey(e => e.usuario); 

            modelBuilder.HasDefaultSchema("athena");
        }                                                                                                                                   
                                                                                                                                                                                                                        

        public DbSet<Denuncia>? Denuncia { get; set; }
        public DbSet<Relato>? Relato { get; set; }
        public DbSet<Usuario>? Usuario { get; set; }
        public DbSet<UserLogin>? UserLogin { get; set; }
    }
}