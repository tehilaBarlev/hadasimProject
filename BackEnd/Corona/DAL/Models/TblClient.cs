using System;
using System.Collections.Generic;

namespace DAL.Models
{
    public partial class TblClient
    {
        public string Id { get; set; } = null!;
        public string FirstName { get; set; } = null!;
        public string LastName { get; set; } = null!;
        public string? Country { get; set; }
        public string? Street { get; set; }
        public string? NumberHouse { get; set; }
        public DateTime BirthDate { get; set; }
        public string? PhoneNumber { get; set; }
        public string MobilephoneNumber { get; set; } = null!;
    }
}
