using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace DAL.Models
{
    public partial class CoronaContext : DbContext
    {
        public CoronaContext()
        {
        }

        public CoronaContext(DbContextOptions<CoronaContext> options)
            : base(options)
        {
        }

        public virtual DbSet<TblClient> TblClients { get; set; } = null!;
        public virtual DbSet<TblCoronaSick> TblCoronaSicks { get; set; } = null!;
        public virtual DbSet<TblVaccination> TblVaccinations { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Server=.;Database=Corona;Trusted_Connection=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<TblClient>(entity =>
            {
                entity.ToTable("tbl_Clients");

                entity.Property(e => e.Id)
                    .HasMaxLength(9)
                    .IsUnicode(false)
                    .HasColumnName("id");

                entity.Property(e => e.BirthDate)
                    .HasColumnType("date")
                    .HasColumnName("birthDate");

                entity.Property(e => e.Country)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("country");

                entity.Property(e => e.FirstName)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("firstName");

                entity.Property(e => e.LastName)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("lastName");

                entity.Property(e => e.MobilephoneNumber)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("mobilephoneNumber");

                entity.Property(e => e.NumberHouse)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("numberHouse");

                entity.Property(e => e.PhoneNumber)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("phoneNumber");

                entity.Property(e => e.Street)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("street");
            });

            modelBuilder.Entity<TblCoronaSick>(entity =>
            {
                entity.HasKey(e => e.CoronaSickId)
                    .HasName("PK__tbl_Coro__00BFE740816DF177");

                entity.ToTable("tbl_CoronaSicks");

                entity.Property(e => e.CoronaSickId).HasColumnName("coronaSick_id");

                entity.Property(e => e.EndDate)
                    .HasColumnType("date")
                    .HasColumnName("endDate");

                entity.Property(e => e.Id)
                    .HasMaxLength(9)
                    .IsUnicode(false)
                    .HasColumnName("id");

                entity.Property(e => e.StartDate)
                    .HasColumnType("date")
                    .HasColumnName("startDate");
            });

            modelBuilder.Entity<TblVaccination>(entity =>
            {
                entity.HasKey(e => e.VaccinationId)
                    .HasName("PK__tbl_Vacc__E588AFE79E849D10");

                entity.ToTable("tbl_Vaccinations");

                entity.Property(e => e.VaccinationId).HasColumnName("vaccination_id");

                entity.Property(e => e.DateVaccination)
                    .HasColumnType("date")
                    .HasColumnName("dateVaccination");

                entity.Property(e => e.Id)
                    .HasMaxLength(9)
                    .IsUnicode(false)
                    .HasColumnName("id");

                entity.Property(e => e.Producer)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("producer");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
