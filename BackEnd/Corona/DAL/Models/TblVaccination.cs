using System;
using System.Collections.Generic;

namespace DAL.Models
{
    public partial class TblVaccination
    {
        public int VaccinationId { get; set; }
        public string Id { get; set; } = null!;
        public string Producer { get; set; } = null!;
        public DateTime DateVaccination { get; set; }
    }
}
