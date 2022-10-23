using DAL.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace DAL
{
    public interface IVaccinationDL
    {
        List<TblVaccination> GetAllVaccinations();
        List<TblVaccination> GetVaccination(string id);
        void AddVaccination(TblVaccination c);
        void DeleteVaccination(string id);
        void UpdateVaccination(TblVaccination c);
    }
}
