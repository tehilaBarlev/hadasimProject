using System;
using System.Collections.Generic;

namespace DAL.Models
{
    public partial class TblCoronaSick
    {
        public int CoronaSickId { get; set; }
        public string Id { get; set; } = null!;
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
    }
}
